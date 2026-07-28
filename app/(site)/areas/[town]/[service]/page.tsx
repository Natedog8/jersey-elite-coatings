import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { townBySlug, townSlugs, comboServiceSlugs } from "@/data/towns";
import { countyBySlug, countySlugs } from "@/data/counties";
import { countyComboServiceSlugs, countyServiceAngle } from "@/data/countyServices";
import { CountyServiceView } from "./CountyServiceView";
import { comboFaqs } from "@/data/comboFaqs";
import { townServiceAngle } from "@/data/townServiceAngles";
import { serviceBySlug, services } from "@/data/services";
import { site } from "@/site.config";
import { Icon } from "@/lib/icons";
import { Section, Button, CheckList, Eyebrow } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQ } from "@/components/FAQ";
import { ReviewsWall, CTABand, ProjectShowcase } from "@/components/sections";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";

/* This segment serves both town×service (/areas/newark/garage-epoxy-flooring)
   and county×service (/areas/bergen-county/commercial-epoxy-flooring) — county
   slugs never collide with town slugs. */
export function generateStaticParams() {
  return [
    ...townSlugs.flatMap((town) => comboServiceSlugs.map((service) => ({ town, service }))),
    ...countySlugs.flatMap((town) =>
      countyComboServiceSlugs
        .filter((service) => Boolean(countyServiceAngle(town, service)))
        .map((service) => ({ town, service }))
    ),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ town: string; service: string }>;
}): Promise<Metadata> {
  const { town, service } = await params;
  const s = serviceBySlug(service);
  if (!s) return {};

  const c = countyBySlug(town);
  if (c && countyServiceAngle(c.slug, s.slug)) {
    return {
      title: `${s.shortName} in ${c.name}, NJ`,
      description: `Professional ${s.name.toLowerCase()} across ${c.name}, NJ. ${s.tagline}. Licensed, insured & backed by a lifetime warranty. Free on-site quotes — call ${site.phoneDisplay}.`,
      alternates: { canonical: `/areas/${c.slug}/${s.slug}` },
      openGraph: {
        title: `${s.shortName} in ${c.name}, NJ — ${site.name}`,
        description: s.tagline,
        images: [{ url: s.photo }],
      },
    };
  }

  const t = townBySlug(town);
  if (!t) return {};
  return {
    title: `${s.shortName} in ${t.name}, NJ`,
    description: `Professional ${s.name.toLowerCase()} in ${t.name}, NJ. ${s.tagline}. Licensed, insured & backed by a lifetime warranty. Free on-site quotes — call ${site.phoneDisplay}.`,
    alternates: { canonical: `/areas/${t.slug}/${s.slug}` },
    openGraph: {
      title: `${s.shortName} in ${t.name}, NJ — ${site.name}`,
      description: s.tagline,
      images: [{ url: s.photo }],
    },
  };
}

export default async function ComboPage({
  params,
}: {
  params: Promise<{ town: string; service: string }>;
}) {
  const { town, service } = await params;
  const s = serviceBySlug(service);
  if (!s) notFound();

  /* county × service */
  const c = countyBySlug(town);
  if (c) {
    const angle = countyServiceAngle(c.slug, s.slug);
    if (!angle) notFound();
    return <CountyServiceView county={c} service={s} angle={angle} />;
  }

  /* town × service */
  const t = townBySlug(town);
  if (!t || !comboServiceSlugs.includes(service)) notFound();
  const faqs = comboFaqs(t, s);
  const angle = townServiceAngle(t, s.slug);

  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/areas" },
    { name: t.name, url: `/areas/${t.slug}` },
    { name: s.shortName, url: `/areas/${t.slug}/${s.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `${s.name} in ${t.name}, NJ`,
            description: s.intro,
            url: `${site.url}/areas/${t.slug}/${s.slug}`,
            areaName: t.name,
            image: s.photo,
            priceFrom: s.priceFrom,
          }),
          faqSchema(faqs),
          breadcrumbSchema(crumbs),
        ]}
      />

      <PageHero
        eyebrow={`${t.name}, NJ`}
        title={
          <>
            {s.name} in <span className="text-gradient">{t.name}</span>
          </>
        }
        sub={`${s.tagline} — installed right for ${t.name}, from ${t.neighborhoods[0]} to ${t.neighborhoods[1] ?? "all over town"}.`}
        breadcrumbs={crumbs}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/quote" variant="primary" icon="bolt">
            Free Quote in {t.name}
          </Button>
          <Button href={`tel:${site.phoneHref}`} variant="ghost" icon="phone">
            {site.phoneDisplay}
          </Button>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xl font-semibold leading-snug text-navy-800">{s.problem}</p>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Looking for {s.name.toLowerCase()} in {t.name}? You're in the right place. {s.intro}
            </p>

            <div className="mt-8 rounded-2xl border border-aqua-100 bg-aqua-50 p-6">
              <div className="flex items-center gap-2 text-aqua-800">
                <Icon.pin className="h-5 w-5" />
                <span className="font-bold">Why {t.name} needs this</span>
              </div>
              <p className="mt-2 text-[15px] leading-relaxed text-navy-700">
                {t.localColor} {s.localNote}
              </p>
            </div>

            {angle && (
              <>
                <h2 className="mt-10 text-2xl font-extrabold text-navy-900">{angle.heading}</h2>
                {angle.body.map((p, i) => (
                  <p key={i} className={`text-lg leading-relaxed text-muted ${i === 0 ? "mt-5" : "mt-4"}`}>
                    {p}
                  </p>
                ))}
                <ul className="mt-6 grid gap-2.5">
                  {angle.local.map((l) => (
                    <li key={l} className="flex items-start gap-2.5">
                      <Icon.check className="mt-1 h-4 w-4 shrink-0 text-aqua-600" />
                      <span className="text-[15px] leading-relaxed text-navy-700">{l}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h2 className="mt-10 text-2xl font-extrabold text-navy-900">
              Your {t.name} {s.shortName.toLowerCase()} includes
            </h2>
            <CheckList items={s.includes} className="mt-5 sm:grid-cols-2" />
          </div>

          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="card overflow-hidden p-5">
              <Image
                src={s.photo}
                alt={`${s.name} install near ${t.name}, NJ`}
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
              <div className="mt-5 flex items-baseline justify-between border-b border-navy-50 pb-4">
                <span className="text-sm font-semibold text-muted">{t.name} pricing from</span>
                <span className="text-2xl font-black text-navy-800">
                  {s.priceFrom > 0 ? `$${s.priceFrom}` : "Free quote"}
                </span>
              </div>
              <div className="mt-4">
                <QuoteForm compact defaultService={s.name} defaultTown={t.name} source={`combo-${t.slug}-${s.slug}`} />
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {faqs.length > 0 && (
        <Section className="bg-navy-50/40">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>{t.name} · {s.shortName}</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-navy-900">Questions from {t.name} customers</h2>
          </div>
          <div className="mt-10">
            <FAQ items={faqs} />
          </div>
        </Section>
      )}

      <ReviewsWall limit={3} />

      {/* cross links: other services in this town */}
      <Section>
        <h2 className="text-2xl font-extrabold text-navy-900">More {t.name} services</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {comboServiceSlugs
            .filter((cs) => cs !== s.slug)
            .map((cs) => {
              const os = services.find((x) => x.slug === cs)!;
              return (
                <Link
                  key={cs}
                  href={`/areas/${t.slug}/${cs}`}
                  className="rounded-xl border border-navy-50 bg-white px-4 py-3 text-sm font-semibold text-navy-700 transition hover:border-aqua-200 hover:text-aqua-700"
                >
                  {os.shortName} in {t.name}
                </Link>
              );
            })}
          <Link
            href={`/areas/${t.slug}`}
            className="rounded-xl border border-navy-50 bg-white px-4 py-3 text-sm font-semibold text-aqua-700 transition hover:border-aqua-200"
          >
            All {t.name} services →
          </Link>
        </div>

        {/* up-link into the county hub — completes the silo both ways */}
        {countyBySlug(t.county.toLowerCase().replace(/\s+/g, "-")) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {countyServiceAngle(t.county.toLowerCase().replace(/\s+/g, "-"), s.slug) && (
              <Link
                href={`/areas/${t.county.toLowerCase().replace(/\s+/g, "-")}/${s.slug}`}
                className="btn btn-outline font-bold text-aqua-700"
              >
                <Icon.pin className="h-4 w-4" /> {s.shortName} across {t.county}
              </Link>
            )}
            <Link
              href={`/areas/${t.county.toLowerCase().replace(/\s+/g, "-")}`}
              className="btn btn-outline"
            >
              <Icon.pin className="h-4 w-4" /> All of {t.county}
            </Link>
          </div>
        )}
      </Section>

      <ProjectShowcase bg count={4} title={`${s.shortName} results across North Jersey`} />
      <CTABand title={`Get your free ${s.shortName.toLowerCase()} quote in ${t.name}`} />
    </>
  );
}
