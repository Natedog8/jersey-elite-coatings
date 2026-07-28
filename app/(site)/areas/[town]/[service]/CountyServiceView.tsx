import Link from "next/link";
import Image from "next/image";
import { type County, townsInCounty } from "@/data/counties";
import { type CountyServiceAngle, countyComboServiceSlugs } from "@/data/countyServices";
import { type Service, services } from "@/data/services";
import { comboServiceSlugs } from "@/data/towns";
import { site } from "@/site.config";
import { Icon } from "@/lib/icons";
import { Section, Button, CheckList, Eyebrow } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQ } from "@/components/FAQ";
import { MapEmbed } from "@/components/MapEmbed";
import { ReviewsWall, CTABand, ProjectShowcase } from "@/components/sections";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";

/** County × service page — /areas/bergen-county/commercial-epoxy-flooring.
 *  Rendered by the /areas/[town]/[service] route when the first segment
 *  resolves to a county rather than a town. */
export function CountyServiceView({
  county: c,
  service: s,
  angle,
}: {
  county: County;
  service: Service;
  angle: CountyServiceAngle;
}) {
  const countyTowns = townsInCounty(c);
  const faqs = [angle.faq, ...s.faq];

  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/areas" },
    { name: c.name, url: `/areas/${c.slug}` },
    { name: s.shortName, url: `/areas/${c.slug}/${s.slug}` },
  ];

  const siblings = countyComboServiceSlugs
    .filter((cs) => cs !== s.slug)
    .map((cs) => services.find((x) => x.slug === cs))
    .filter((x): x is Service => Boolean(x));

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `${s.name} in ${c.name}, NJ`,
            description: angle.lede,
            url: `${site.url}/areas/${c.slug}/${s.slug}`,
            areaName: c.name,
            areaType: "AdministrativeArea",
            image: s.photo,
            priceFrom: s.priceFrom,
          }),
          faqSchema(faqs),
          breadcrumbSchema(crumbs),
        ]}
      />

      <PageHero
        eyebrow={`${c.name}, NJ`}
        title={
          <>
            {s.name} in <span className="text-gradient">{c.name}</span>
          </>
        }
        sub={angle.lede}
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
            <Eyebrow>
              {s.shortName} · {c.shortName} County
            </Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-navy-900">
              {s.shortName} in {c.name} — what the job actually looks like
            </h2>
            {angle.body.map((p, i) => (
              <p key={i} className={`text-lg leading-relaxed text-muted ${i === 0 ? "mt-5" : "mt-4"}`}>
                {p}
              </p>
            ))}

            <div className="mt-8 rounded-2xl border border-aqua-100 bg-aqua-50 p-6">
              <div className="flex items-center gap-2 text-aqua-800">
                <Icon.pin className="h-5 w-5" />
                <span className="font-bold">Where we do this in {c.shortName} County</span>
              </div>
              <ul className="mt-3 grid gap-2.5">
                {angle.local.map((l) => (
                  <li key={l} className="flex items-start gap-2.5">
                    <Icon.check className="mt-1 h-4 w-4 shrink-0 text-aqua-600" />
                    <span className="text-[15px] leading-relaxed text-navy-700">{l}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="mt-10 text-2xl font-extrabold text-navy-900">
              Every {c.shortName} County {s.shortName.toLowerCase()} install includes
            </h2>
            <CheckList items={s.includes} className="mt-5 sm:grid-cols-2" />

            <div className="mt-8 rounded-2xl bg-navy-50/60 p-6">
              <p className="text-navy-700">
                Want the wider picture first?{" "}
                <Link href={`/services/${s.slug}`} className="font-bold text-aqua-700 underline">
                  Read the full {s.shortName.toLowerCase()} guide
                </Link>{" "}
                or see{" "}
                <Link href={`/areas/${c.slug}`} className="font-bold text-aqua-700 underline">
                  everything we install across {c.name}
                </Link>
                .
              </p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="card overflow-hidden p-5">
              <Image
                src={s.photo}
                alt={`${s.name} install in ${c.name}, NJ`}
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
              <div className="mt-5 flex items-baseline justify-between border-b border-navy-50 pb-4">
                <span className="text-sm font-semibold text-muted">{c.shortName} County pricing from</span>
                <span className="text-2xl font-black text-navy-800">
                  {s.priceFrom > 0 ? `$${s.priceFrom}` : "Free quote"}
                  {s.priceFrom > 0 && <span className="text-sm font-medium text-muted"> {s.priceUnit}</span>}
                </span>
              </div>
              <div className="mt-4">
                <QuoteForm
                  compact
                  defaultService={s.name}
                  source={`county-combo-${c.slug}-${s.slug}`}
                />
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* down-links into the towns — the silo's next tier */}
      <Section className="bg-navy-50/40">
        <h2 className="text-2xl font-extrabold text-navy-900">
          {s.shortName} town by town across {c.name}
        </h2>
        <p className="mt-2 text-muted">
          Every {c.shortName} County town we cover has its own local page — pricing, neighborhoods and
          a direct line to the crew.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {countyTowns.map((t) => {
            const href = comboServiceSlugs.includes(s.slug)
              ? `/areas/${t.slug}/${s.slug}`
              : `/areas/${t.slug}`;
            return (
              <Link
                key={t.slug}
                href={href}
                className="rounded-xl border border-navy-50 bg-white px-4 py-3 text-sm font-semibold text-navy-700 transition hover:border-aqua-200 hover:text-aqua-700"
              >
                {s.shortName} in {t.name}
              </Link>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>
            {c.shortName} County · {s.shortName}
          </Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-900">
            Questions from {c.name} customers
          </h2>
        </div>
        <div className="mt-10">
          <FAQ items={faqs} />
        </div>
      </Section>

      <ReviewsWall limit={3} />

      <Section className="bg-navy-50/40">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <Eyebrow>On The Map</Eyebrow>
            <h2 className="mt-3 text-2xl font-extrabold text-navy-900">
              {s.shortName} across all of {c.name}
            </h2>
            <p className="mt-3 text-muted">
              From {c.seat} out to every corner of the county — one Newark-based crew, no
              out-of-town subcontractors, and the same lifetime warranty on every floor.
            </p>
          </div>
          <MapEmbed query={`${c.name}, NJ`} title={`${s.name} service area in ${c.name}, NJ`} />
        </div>
      </Section>

      {/* sibling services at county level */}
      <Section>
        <h2 className="text-2xl font-extrabold text-navy-900">More {c.shortName} County services</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siblings.map((o) => {
            const I = Icon[o.icon as keyof typeof Icon] ?? Icon.spray;
            return (
              <Link
                key={o.slug}
                href={`/areas/${c.slug}/${o.slug}`}
                className="card card-hover flex items-start gap-3 p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-aqua-100 text-aqua-700">
                  <I className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-bold text-navy-800">
                    {o.shortName} in {c.shortName} County
                  </span>
                  <span className="mt-0.5 block text-sm text-muted">{o.tagline}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      <ProjectShowcase bg count={4} title={`${s.shortName} results around ${c.name}`} />
      <CTABand title={`Get your free ${s.shortName.toLowerCase()} quote in ${c.name}`} />
    </>
  );
}
