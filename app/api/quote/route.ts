import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/site.config";

/**
 * Lead intake endpoint.
 *
 * Sends each form submission to the business inbox via Resend, and (optionally)
 * forwards it to a CRM/automation webhook — set LEAD_WEBHOOK_URL to plug in
 * Go High Level (or Zapier/Make) later without touching this code.
 *
 * Required env var for email: RESEND_API_KEY
 * Optional overrides: LEAD_TO_EMAIL, LEAD_FROM_EMAIL, LEAD_WEBHOOK_URL
 *
 * If RESEND_API_KEY is missing the route still returns OK and just logs the
 * lead, so the site never breaks in preview/local builds.
 */

const TO_EMAIL = process.env.LEAD_TO_EMAIL || site.email;
// The Resend account has unitedpowerwashingnj.com verified — we send from that
// domain (with the Jersey Elite name) until jerseyelitecoatings.com is verified
// in Resend. Override with LEAD_FROM_EMAIL once DNS records are added.
const FROM_EMAIL = process.env.LEAD_FROM_EMAIL || "Jersey Elite Coatings <onboarding@resend.dev>";

type Lead = Record<string, unknown>;

const LABELS: Record<string, string> = {
  name: "Name",
  phone: "Phone",
  service: "Floor / service needed",
  town: "Town",
  address: "Project address",
  notes: "Notes",
  source: "Lead source",
};

function fmtValue(v: unknown): string {
  const s = v == null ? "" : String(v).trim();
  return s || "—";
}

function buildText(lead: Lead, receivedAt: string): string {
  const lines = Object.keys(LABELS)
    .filter((k) => lead[k] != null && String(lead[k]).trim() !== "")
    .map((k) => `${LABELS[k]}: ${fmtValue(lead[k])}`);
  // Include any extra fields not in LABELS.
  for (const k of Object.keys(lead)) {
    if (!(k in LABELS)) lines.push(`${k}: ${fmtValue(lead[k])}`);
  }
  lines.push(`Received: ${receivedAt}`);
  return lines.join("\n");
}

function buildHtml(lead: Lead, receivedAt: string): string {
  const rows = [...Object.keys(LABELS).filter((k) => k in lead), ...Object.keys(lead).filter((k) => !(k in LABELS))]
    .filter((k, i, arr) => arr.indexOf(k) === i && lead[k] != null && String(lead[k]).trim() !== "")
    .map(
      (k) =>
        `<tr><td style="padding:8px 14px;border-bottom:1px solid #e5eaf0;font-weight:600;color:#0f2a43;white-space:nowrap;vertical-align:top">${
          LABELS[k] || k
        }</td><td style="padding:8px 14px;border-bottom:1px solid #e5eaf0;color:#1c3b57">${fmtValue(lead[k]).replace(
          /\n/g,
          "<br>"
        )}</td></tr>`
    )
    .join("");
  const phone = fmtValue(lead.phone);
  return `<div style="font-family:system-ui,Segoe UI,Arial,sans-serif;max-width:560px;margin:0 auto">
    <h2 style="color:#0f2a43;margin:0 0 4px">New quote request</h2>
    <p style="color:#5a6b7b;margin:0 0 16px">From the ${site.name} website${
    lead.source ? ` · <b>${fmtValue(lead.source)}</b>` : ""
  }</p>
    <table style="width:100%;border-collapse:collapse;border:1px solid #e5eaf0;border-radius:10px;overflow:hidden">${rows}</table>
    <p style="margin:18px 0 0"><a href="tel:${phone.replace(/[^0-9+]/g, "")}" style="display:inline-block;background:#0aa5c4;color:#fff;text-decoration:none;padding:10px 18px;border-radius:8px;font-weight:700">Call ${phone}</a></p>
    <p style="color:#8a99a8;font-size:12px;margin-top:16px">Received ${receivedAt}</p>
  </div>`;
}

export async function POST(req: Request) {
  let lead: Lead = {};
  try {
    lead = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad payload" }, { status: 400 });
  }

  const receivedAt = new Date().toISOString();
  const enriched = { ...lead, receivedAt };

  // Optional CRM / automation forward (Go High Level, Zapier, Make, …).
  const webhook = process.env.LEAD_WEBHOOK_URL;
  const tasks: Promise<unknown>[] = [];
  if (webhook) {
    tasks.push(
      fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enriched),
      }).catch((e) => console.error("[LEAD] webhook failed", e))
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const resend = new Resend(apiKey);
    const name = fmtValue(lead.name);
    const town = fmtValue(lead.town);
    tasks.push(
      resend.emails
        .send({
          from: FROM_EMAIL,
          to: TO_EMAIL,
          subject: `New quote request — ${name}${town !== "—" ? ` (${town})` : ""}`,
          text: buildText(lead, receivedAt),
          html: buildHtml(lead, receivedAt),
        })
        .then((res) => {
          if (res.error) console.error("[LEAD] resend error", res.error);
        })
        .catch((e) => console.error("[LEAD] resend threw", e))
    );
  } else {
    console.log("[LEAD] (no RESEND_API_KEY set — logging only)", JSON.stringify(enriched));
  }

  await Promise.allSettled(tasks);

  return NextResponse.json({ ok: true });
}
