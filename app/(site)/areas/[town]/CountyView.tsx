import Link from "next/link";
import Image from "next/image";
import { type County, townsInCounty } from "@/data/counties";
import { services } from "@/data/services";
import { site } from "@/site.config";
import { Icon } from "@/lib/icons";
import { Section, Button, Eyebrow } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQ } from "@/components/FAQ";
import { MapEmbed } from "@/components/MapEmbed";
import { ReviewsWall, CTABand, ProjectShowcase } from "@/components/sections";
import { featured } from "@/data/media";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";

/** County hub page — the mid-tier of the geo silo. Rendered by the
 *  /areas/[town] route when the slug matches a county instead of a town. */
export function CountyView({ county: c }: { county: County }) {
  const countyTowns = townsInCounty(c);

  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/areas" },
    { name: c.name, url: `/areas/${c.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `Epoxy Flooring in ${c.name}, NJ`,
            description: c.intro,
            url: `${site.url}/areas/${c.slug}`,
          }),
          faqSchema(c.faq),
          breadcrumbSchema(crumbs),
        ]}
      />

      <PageHero
        eyebrow={`${c.name}, New Jersey`}
        title={
          <>
            Epoxy Flooring in <span className="text-gradient">{c.name}</span>
          </>
        }
        sub={`Garage, commercial, basement & metallic epoxy across ${c.name} — installed by a local Newark-based crew and backed by a lifetime warranty.`}
        breadcrumbs={crumbs}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/quote" variant="primary" icon="bolt">
            Free {c.shortName} County Quote
          </Button>
          <Button href={`tel:${site.phoneHref}`} variant="ghost" icon="phone">
            {site.phoneDisplay}
          </Button>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>{c.name} Epoxy Pros</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-navy-900">
              What epoxy work looks like in {c.name}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{c.intro}</p>
            <p className="mt-4 text-lg leading-relaxed text-muted">{c.detail}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: "shield" as const, t: "Licensed & insured", d: "COI available on request" },
                { icon: "pin" as const, t: `${c.name} local`, d: `Based in Newark, minutes away` },
                { icon: "badge" as const, t: "Lifetime warranty", d: "Peeling & delamination" },
                { icon: "star" as const, t: `${site.rating}★ rated service`, d: "Five-star results" },
              ].map((b) => {
                const I = Icon[b.icon];
                return (
                  <div key={b.t} className="flex items-start gap-3 rounded-xl border border-navy-50 bg-white p-4">
                    <I className="mt-0.5 h-6 w-6 shrink-0 text-aqua-600" />
                    <div>
                      <div className="font-bold text-navy-800">{b.t}</div>
                      <div className="text-sm text-muted">{b.d}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="card overflow-hidden p-5">
              <Image
                src={featured.hero.src}
                alt={`Epoxy garage floor installed in ${c.name}, NJ`}
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
              <div className="mt-5">
                <div className="mb-3 flex items-center gap-2 text-navy-800">
                  <Icon.bolt className="h-5 w-5 text-aqua-600" />
                  <span className="font-extrabold">Free {c.shortName} County quote</span>
                </div>
                <QuoteForm compact source={`county-${c.slug}`} />
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* towns in this county — the silo's downward links */}
      <Section className="bg-navy-50/40">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{c.name} Towns</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-900">
            Where we work in {c.name}
          </h2>
          <p className="mt-3 text-muted">
            Local pages for the {c.shortName} County towns we serve most — plus everywhere in between.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {countyTowns.map((t) => (
            <Link key={t.slug} href={`/areas/${t.slug}`} className="card card-hover flex flex-col p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-aqua-100 text-aqua-700">
                  <Icon.pin className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-extrabold text-navy-800">{t.name}</h3>
                  <p className="text-xs text-muted">{t.zip}</p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{t.localColor}</p>
              <span className="mt-4 flex items-center gap-1 text-sm font-bold text-aqua-700">
                Epoxy flooring in {t.name} <Icon.arrow className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* services */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{c.shortName} County Services</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-900">
            What we install across {c.name}
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const I = Icon[s.icon as keyof typeof Icon] ?? Icon.spray;
            return (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card card-hover flex flex-col gap-2 p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-aqua-100 text-aqua-700">
                  <I className="h-5 w-5" />
                </span>
                <span className="font-bold text-navy-800">{s.shortName}</span>
                <span className="text-sm text-muted">{s.tagline}</span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* county FAQ */}
      <Section className="bg-navy-50/40">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{c.name} Questions</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-900">
            Epoxy flooring in {c.name} — answered
          </h2>
        </div>
        <div className="mt-10">
          <FAQ items={c.faq} />
        </div>
      </Section>

      <ReviewsWall limit={3} />

      <Section>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <Eyebrow>On The Map</Eyebrow>
            <h2 className="mt-3 text-2xl font-extrabold text-navy-900">
              Serving all of {c.name}
            </h2>
            <p className="mt-3 text-muted">
              From {c.seat} out to every corner of the county — one local crew, no
              out-of-town subcontractors, and the same lifetime warranty on every floor.
            </p>
          </div>
          <MapEmbed query={`${c.name}, NJ`} title={`Epoxy flooring service area in ${c.name}, NJ`} />
        </div>
      </Section>

      <ProjectShowcase bg count={4} title={`Recent floors around ${c.name}`} />
      <CTABand title={`Get your free ${c.name} epoxy quote`} />
    </>
  );
}
