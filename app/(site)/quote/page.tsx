import type { Metadata } from "next";
import { site } from "@/site.config";
import { Icon } from "@/lib/icons";
import { Container, StarRow } from "@/components/ui";
import { QuoteForm } from "@/components/QuoteForm";
import { featured } from "@/data/media";

export const metadata: Metadata = {
  title: "Get a Free Epoxy Flooring Quote in North Jersey",
  description:
    "Request your free, no-obligation epoxy flooring quote. On-site visit with real color samples. Serving all of North Jersey.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <section className="surface-navy grain min-h-[80vh] text-white">
      <Container className="grid gap-12 py-14 lg:grid-cols-2 lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-semibold">
            <StarRow className="text-sun-400" />
            <span className="text-navy-100">Five-star floors since 2010</span>
          </span>
          <h1 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
            Get your free quote in <span className="text-gradient">60 seconds</span>
          </h1>
          <p className="mt-4 max-w-md text-lg text-navy-100">
            Tell us about your floor and we'll text or call you back fast — then schedule a free
            on-site visit with real color samples. No pressure, no obligation, no spam.
          </p>

          <ul className="mt-8 grid gap-4">
            {[
              { icon: "bolt" as const, t: "Fast response", d: "We reply within one business day — usually much sooner." },
              { icon: "shield" as const, t: "Licensed & insured", d: "COI available on request." },
              { icon: "badge" as const, t: "Lifetime warranty", d: "Against peeling & delamination — for as long as you own it." },
              { icon: "star" as const, t: site.offer.headline, d: site.offer.subtext },
            ].map((b) => {
              const I = Icon[b.icon];
              return (
                <li key={b.t} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-aqua-300">
                    <I className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-bold text-white">{b.t}</span>
                    <span className="block text-sm text-navy-200">{b.d}</span>
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 hidden lg:block">
            <img
              src={featured.hero.src}
              alt="Flake epoxy garage floor installed in North Jersey"
              className="w-full rounded-2xl object-cover shadow-[var(--shadow-lift)]"
            />
          </div>

          <a href={`tel:${site.phoneHref}`} className="mt-8 inline-flex items-center gap-2 text-lg font-bold text-aqua-200 hover:text-white">
            <Icon.phone className="h-5 w-5" /> Prefer to call? {site.phoneDisplay}
          </a>
        </div>

        <div className="lg:pt-4">
          <div className="rounded-3xl bg-white p-6 shadow-[var(--shadow-lift)] md:p-8">
            <h2 className="text-xl font-extrabold text-navy-800">Request your free quote</h2>
            <p className="mt-1 text-sm text-muted">Fields with * are required.</p>
            <div className="mt-5">
              <QuoteForm source="quote-page" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
