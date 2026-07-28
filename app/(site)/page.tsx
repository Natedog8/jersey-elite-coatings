import Link from "next/link";
import Image from "next/image";
import { site } from "@/site.config";
import { Icon } from "@/lib/icons";
import { Container, Button, StarRow } from "@/components/ui";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQ } from "@/components/FAQ";
import {
  TrustBar,
  ServiceGrid,
  Steps,
  ReviewsWall,
  TownsGrid,
  CTABand,
  ValueProps,
  ProjectShowcase,
  ProcessStrip,
} from "@/components/sections";
import { generalFaqs } from "@/data/faqs";
import { services } from "@/data/services";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, offerCatalogSchema } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(generalFaqs),
          offerCatalogSchema(
            services.map((s) => ({
              name: s.name,
              description: s.tagline,
              url: `/services/${s.slug}`,
            }))
          ),
        ]}
      />

      {/* ── HERO — full-bleed cover photo (real North Jersey install) ── */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <Image
            src="/photos/garage-epoxy-floor-hero.webp"
            alt="Flake epoxy garage floor installed in North Jersey"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/92 via-navy-900/78 to-navy-900/35" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-950/80 to-transparent" />
        </div>

        <Container className="relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-semibold backdrop-blur">
              <StarRow className="text-sun-400" />
              <span className="text-navy-100">Five-star floors · {site.yearsLine}</span>
            </span>

            <h1 className="mt-5 text-4xl font-black leading-[1.04] tracking-tight md:text-6xl">
              North Jersey's <span className="text-gradient">showroom-grade</span> epoxy floors.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-100 md:text-xl">
              Garage, commercial, basement &amp; metallic epoxy — diamond-ground prep, 100%
              solids systems, and a lifetime warranty against peeling. Installed by a local
              crew that treats your floor like their own.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/quote" variant="primary" icon="bolt" className="text-base">
                Get My Free Quote
              </Button>
              <Button href={`tel:${site.phoneHref}`} variant="ghost" icon="phone" className="text-base">
                {site.phoneDisplay}
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-navy-100">
              {["Licensed & Insured", "Lifetime Warranty", "Serving NJ Since 2010"].map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <Icon.check className="h-4 w-4 text-aqua-300" /> {b}
                </li>
              ))}
            </ul>
          </div>

          {/* hero card: instant quote */}
          <div className="animate-rise [animation-delay:120ms]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 shadow-[var(--shadow-lift)] backdrop-blur-md">
              <div className="rounded-2xl bg-white p-5">
                <div className="mb-3 flex items-center gap-2 text-navy-800">
                  <Icon.bolt className="h-5 w-5 text-aqua-600" />
                  <span className="font-extrabold">Free on-site quote</span>
                  <span className="ml-auto rounded-full bg-aqua-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-aqua-700">
                    {site.offer.headline}
                  </span>
                </div>
                <QuoteForm compact source="home-hero" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar />

      {/* intro / authority */}
      <section className="section">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-navy-900 md:text-4xl">
              The epoxy flooring company North Jersey actually recommends
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              We're not a painter with a roller. Jersey Elite Coatings is a licensed &amp;
              insured, locally owned crew that has installed epoxy floors across New Jersey
              since 2010 — tons of jobs done, from Livingston garages to Newark warehouses.
              Every floor gets diamond-ground preparation, 100% solids commercial-grade
              systems, and a lifetime warranty against peeling and delamination.
            </p>
          </div>
        </Container>
      </section>

      <ValueProps />
      <ServiceGrid />
      <Steps />
      <ProcessStrip />

      {/* project showcase — real install photos */}
      <ProjectShowcase
        bg
        title="The results speak for themselves"
        sub="A sample of recent installs — garages, showrooms, basements and metallic pours across North Jersey."
        count={8}
      />

      <ReviewsWall />
      <TownsGrid />

      {/* FAQ */}
      <section className="section bg-navy-50/40">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua-400" /> Good Questions
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-navy-900 md:text-4xl">
              Everything you're wondering, answered
            </h2>
          </div>
          <div className="mt-10">
            <FAQ items={generalFaqs} />
          </div>
          <p className="mt-6 text-center text-muted">
            Still have a question?{" "}
            <Link href="/contact" className="font-semibold text-aqua-700 underline">
              Get in touch
            </Link>{" "}
            — we're happy to help.
          </p>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
