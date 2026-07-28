import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { townBySlug, townSlugs, comboServiceSlugs } from "@/data/towns";
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

export function generateStaticParams() {
  return townSlugs.flatMap((town) => comboServiceSlugs.map((service) => ({ town, service })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ town: string; service: string }>;
}): Promise<Metadata> {
  const { town, service } = await params;
  const t = townBySlug(town);
  const s = serviceBySlug(service);
  if (!t || !s) return {};
  return {
    title: `${s.shortName} in ${t.name}, NJ | ${site.shortName}`,
    description: `Professional ${s.name.toLowerCase()} in ${t.name}, NJ. ${s.tagline}. Licensed, insured & backed by a lifetime warranty. Free on-site quotes — call ${site.phoneDisplay}.`,
    alternates: { canonical: `/areas/${t.slug}/${s.slug}` },
  };
}

export default async function ComboPage({
  params,
}: {
  params: Promise<{ town: string; service: string }>;
}) {
  const { town, service } = await params;
  const t = townBySlug(town);
  const s = serviceBySlug(service);
  if (!t || !s || !comboServiceSlugs.includes(service)) notFound();

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
          }),
          faqSchema(s.faq),
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

            <h2 className="mt-10 text-2xl font-extrabold text-navy-900">
              Your {t.name} {s.shortName.toLowerCase()} includes
            </h2>
            <CheckList items={s.includes} className="mt-5 sm:grid-cols-2" />
          </div>

          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="card overflow-hidden p-5">
              <img
                src={s.photo}
                alt={`${s.name} install near ${t.name}, NJ`}
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

      {s.faq.length > 0 && (
        <Section className="bg-navy-50/40">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>{t.name} · {s.shortName}</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-navy-900">Questions from {t.name} customers</h2>
          </div>
          <div className="mt-10">
            <FAQ items={s.faq} />
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
      </Section>

      <ProjectShowcase bg count={4} title={`${s.shortName} results across North Jersey`} />
      <CTABand title={`Get your free ${s.shortName.toLowerCase()} quote in ${t.name}`} />
    </>
  );
}
