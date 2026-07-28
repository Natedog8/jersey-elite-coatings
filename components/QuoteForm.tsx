"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { towns } from "@/data/towns";
import { site } from "@/site.config";
import { Icon } from "@/lib/icons";

export function QuoteForm({
  compact = false,
  defaultService,
  defaultTown,
  source = "site",
}: {
  compact?: boolean;
  defaultService?: string;
  defaultTown?: string;
  source?: string;
}) {
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      // Wire this to your CRM / email / Zapier endpoint. Until then it logs
      // and succeeds so the UX is real. (Lead source is captured for PPC/LSA.)
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      }).catch(() => {});
    } finally {
      setState("done");
    }
  }

  if (state === "done") {
    return (
      <div className="rounded-2xl bg-aqua-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-aqua-500 text-white">
          <Icon.check className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-extrabold text-navy-800">Quote request received!</h3>
        <p className="mt-2 text-navy-600">
          Thanks — we'll text or call you shortly to set up your free on-site quote. Need it now?
        </p>
        <a href={`tel:${site.phoneHref}`} className="btn btn-aqua mt-4">
          <Icon.phone className="h-4 w-4" /> Call {site.phoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className={compact ? "grid gap-3" : "grid gap-3 sm:grid-cols-2"}>
        <Field name="name" label="Full name" placeholder="Jane Smith" required />
        <Field name="phone" label="Phone" type="tel" placeholder="(973) 555-0123" required />
      </div>
      <div className={compact ? "grid gap-3" : "grid gap-3 sm:grid-cols-2"}>
        <Select name="service" label="Service needed" defaultValue={defaultService}>
          <option value="">What floor needs coating?</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Multiple / Not sure">Multiple / Not sure</option>
        </Select>
        <Select name="town" label="Town" defaultValue={defaultTown}>
          <option value="">Your town</option>
          {towns.map((t) => (
            <option key={t.slug} value={t.name}>
              {t.name}
            </option>
          ))}
          <option value="Other North Jersey">Other (North Jersey)</option>
        </Select>
      </div>
      {!compact && (
        <Field name="address" label="Property address (optional)" placeholder="Street, town" />
      )}
      <label className="grid gap-1.5">
        <span className="text-sm font-semibold text-navy-700">Anything else? (optional)</span>
        <textarea
          name="notes"
          rows={compact ? 2 : 3}
          placeholder="e.g. 2-car garage, some cracks, thinking gray flake"
          className="rounded-xl border border-navy-100 bg-white px-3.5 py-2.5 text-[15px] text-navy-800 placeholder:text-navy-400 outline-none transition focus:border-aqua-400 focus:ring-2 focus:ring-aqua-200"
        />
      </label>
      <button
        type="submit"
        disabled={state === "sending"}
        className="btn btn-primary mt-1 w-full text-base disabled:opacity-70"
      >
        {state === "sending" ? "Sending…" : "Get My Free Quote"}
        {state !== "sending" && <Icon.arrow className="h-4 w-4" />}
      </button>
      <p className="text-center text-xs text-muted">
        No spam, no obligation. Free on-site visit with color samples. Or call{" "}
        <a href={`tel:${site.phoneHref}`} className="font-semibold text-aqua-700 underline">
          {site.phoneDisplay}
        </a>
        .
      </p>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-sm font-semibold text-navy-700">
        {label} {required && <span className="text-aqua-600">*</span>}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="rounded-xl border border-navy-100 bg-white px-3.5 py-2.5 text-[15px] text-navy-800 placeholder:text-navy-400 outline-none transition focus:border-aqua-400 focus:ring-2 focus:ring-aqua-200"
      />
    </label>
  );
}

function Select({
  name,
  label,
  defaultValue,
  children,
}: {
  name: string;
  label: string;
  defaultValue?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-sm font-semibold text-navy-700">{label}</span>
      <select
        name={name}
        defaultValue={defaultValue}
        className="rounded-xl border border-navy-100 bg-white px-3.5 py-2.5 text-[15px] text-navy-800 outline-none transition focus:border-aqua-400 focus:ring-2 focus:ring-aqua-200"
      >
        {children}
      </select>
    </label>
  );
}
