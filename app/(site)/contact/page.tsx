import type { Metadata } from "next";
import { site } from "@/site.config";
import { Icon } from "@/lib/icons";
import { Container, Section } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { MapEmbed } from "@/components/MapEmbed";
import { ProjectShowcase, CTABand } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact Us — North Jersey Epoxy Flooring",
  description: `Call ${site.phoneDisplay} or send a message for a free epoxy flooring quote anywhere in North Jersey. Fast, friendly responses within one business day.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's talk about your floor"
        sub="Call, text, or send a message. We respond fast — usually within one business day."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-extrabold text-navy-900">Contact details</h2>
            <div className="mt-6 grid gap-4">
              <ContactRow icon="phone" label="Call or text" value={site.phoneDisplay} href={`tel:${site.phoneHref}`} />
              <ContactRow icon="badge" label="Email" value={site.email} href={`mailto:${site.email}`} />
              <ContactRow icon="pin" label="Service area" value={`${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`} />
            </div>

            <h3 className="mt-10 text-lg font-extrabold text-navy-900">Hours</h3>
            <ul className="mt-4 overflow-hidden rounded-2xl border border-navy-50">
              {site.hours.map((h, i) => (
                <li
                  key={h.day}
                  className={`flex items-center justify-between px-5 py-2.5 text-sm ${i % 2 ? "bg-white" : "bg-navy-50/40"}`}
                >
                  <span className="font-semibold text-navy-700">{h.day}</span>
                  <span className={h.open === "Closed" ? "text-muted" : "text-navy-700"}>
                    {h.open === "Closed" ? "Closed" : `${fmt(h.open)} – ${fmt(h.close)}`}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-lg font-extrabold text-navy-900">Where we work</h3>
            <p className="mt-2 text-sm text-muted">
              Based in {site.address.city}, serving all of North Jersey — Essex, Hudson, Bergen, Passaic & Morris counties.
            </p>
            <MapEmbed
              className="mt-4"
              query={`${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`}
              title={`${site.name} — Newark, NJ headquarters`}
            />
          </div>

          <div className="card p-6 md:p-8">
            <h2 className="text-2xl font-extrabold text-navy-800">Send us a message</h2>
            <p className="mt-1 text-sm text-muted">Tell us what you need — we'll get right back to you.</p>
            <div className="mt-6">
              <QuoteForm source="contact-page" />
            </div>
          </div>
        </div>
      </Section>

      <ProjectShowcase bg count={4} title="A taste of what we do" sub="Recent North Jersey installs — garages, showrooms and metallic pours." />
      <CTABand />
    </>
  );
}

function fmt(t: string) {
  const [h, m] = t.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hr = h % 12 === 0 ? 12 : h % 12;
  return `${hr}${m ? `:${String(m).padStart(2, "0")}` : ""} ${ampm}`;
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: keyof typeof Icon;
  label: string;
  value: string;
  href?: string;
}) {
  const I = Icon[icon];
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-navy-50 bg-white p-4 transition hover:border-aqua-200">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-aqua-100 text-aqua-700">
        <I className="h-6 w-6" />
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</div>
        <div className="font-bold text-navy-800">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
