import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { townBySlug, townSlugs, towns, comboServiceSlugs } from "@/data/towns";
import { countyBySlug, countySlugs } from "@/data/counties";
import { CountyView } from "./CountyView";
import { services } from "@/data/services";
import { site } from "@/site.config";
import { Icon } from "@/lib/icons";
import { Container, Section, Button, CheckList, Eyebrow } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { MapEmbed } from "@/components/MapEmbed";
import { ReviewsWall, CTABand, ProjectShowcase } from "@/components/sections";
import { featured } from "@/data/media";
import { FAQ } from "@/components/FAQ";
import { townFaqs } from "@/data/townFaqs";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";

/* This segment serves both towns (/areas/newark) and county hubs
   (/areas/essex-county) — county slugs never collide with town slugs. */
export function generateStaticParams() {
  return [...townSlugs, ...countySlugs].map((town) => ({ town }));
}

export async function generateMetadata({ params }: { params: Promise<{ town: string }> }): Promise<Metadata> {
  const { town } = await params;
  const c = countyBySlug(town);
  if (c) {
    return {
      title: `Epoxy Flooring in ${c.name}, NJ`,
      description: `Professional epoxy flooring across ${c.name}, NJ. Garage, commercial, basement & metallic systems with a lifetime warranty. Licensed, insured, free on-site quotes — call ${site.phoneDisplay}.`,
      alternates: { canonical: `/areas/${c.slug}` },
      openGraph: {
        title: `Epoxy Flooring in ${c.name}, NJ — ${site.name}`,
        description: `Garage, commercial & basement epoxy across ${c.name}. Lifetime warranty, free quotes.`,
        images: [{ url: "/og-default.jpg" }],
      },
    };
  }
  const t = townBySlug(town);
  if (!t) return {};
  return {
    title: `Epoxy Flooring in ${t.name}, NJ`,
    description: `Professional epoxy flooring in ${t.name}, NJ. Garage, commercial, basement & metallic epoxy with a lifetime warranty. Licensed, insured, free quotes. Serving ${t.neighborhoods.slice(0, 3).join(", ")} & all of ${t.name}.`,
    alternates: { canonical: `/areas/${t.slug}` },
    openGraph: {
      title: `Epoxy Flooring in ${t.name}, NJ — ${site.name}`,
      description: `Garage, commercial & basement epoxy in ${t.name}. Lifetime warranty, free quotes.`,
      images: [{ url: "/og-default.jpg" }],
    },
  };
}

export default async function TownPage({ params }: { params: Promise<{ town: string }> }) {
  const { town } = await params;
  const c = countyBySlug(town);
  if (c) return <CountyView county={c} />;
  const t = townBySlug(town);
  if (!t) notFound();

  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/areas" },
    { name: t.name, url: `/areas/${t.slug}` },
  ];
  const combos = comboServiceSlugs.map((cs) => services.find((s) => s.slug === cs)!).filter(Boolean);
  const faqs = townFaqs(t);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `Epoxy Flooring in ${t.name}, NJ`,
            description: `Epoxy floor coating installation serving ${t.name}, NJ — garages, commercial spaces, basements and more.`,
            url: `${site.url}/areas/${t.slug}`,
            areaName: t.name,
          }),
          faqSchema(faqs),
          breadcrumbSchema(crumbs),
        ]}
      />

      <PageHero
        eyebrow={`${t.name} · ${t.county}, NJ`}
        title={
          <>
            Epoxy Flooring in <span className="text-gradient">{t.name}</span>
          </>
        }
        sub={`Showroom-grade epoxy floors for ${t.name} homes and businesses — from ${t.neighborhoods.slice(0, 2).join(" to ")} and everywhere between.`}
        breadcrumbs={crumbs}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/quote" variant="primary" icon="bolt">
            Free {t.name} Quote
          </Button>
          <Button href={`tel:${site.phoneHref}`} variant="ghost" icon="phone">
            {site.phoneDisplay}
          </Button>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>Your Neighborhood Pros</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-navy-900">
              Why {t.name} calls Jersey Elite
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{t.localColor}</p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              We're a local, licensed &amp; insured crew — not a national franchise. We know
              {" "}{t.name}'s slabs, the road salt that eats them every winter, and exactly which
              system fits each floor. Every install is backed by our lifetime warranty against
              peeling and delamination.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: "shield" as const, t: "Licensed & insured", d: "COI available on request" },
                { icon: "clock" as const, t: "Fast local scheduling", d: "Same-week on-site quotes" },
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

            <h3 className="mt-10 text-lg font-extrabold text-navy-900">
              {t.name} neighborhoods we serve
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {t.neighborhoods.map((n) => (
                <span key={n} className="rounded-full border border-navy-100 bg-white px-3.5 py-1.5 text-sm font-medium text-navy-700">
                  {n}
                </span>
              ))}
              <span className="rounded-full border border-navy-100 bg-white px-3.5 py-1.5 text-sm font-medium text-navy-700">
                + all of {t.name}
              </span>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="card overflow-hidden p-5">
              <Image
                src={featured.hero.src}
                alt={`Epoxy garage floor installed near ${t.name}, NJ`}
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
              <div className="mt-5">
                <div className="mb-3 flex items-center gap-2 text-navy-800">
                  <Icon.bolt className="h-5 w-5 text-aqua-600" />
                  <span className="font-extrabold">Free {t.name} quote</span>
                </div>
                <QuoteForm compact defaultTown={t.name} source={`town-${t.slug}`} />
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* services in this town */}
      <Section className="bg-navy-50/40">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{t.name} Services</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-900">What we install in {t.name}</h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const I = Icon[s.icon as keyof typeof Icon] ?? Icon.spray;
            const isCombo = comboServiceSlugs.includes(s.slug);
            const href = isCombo ? `/areas/${t.slug}/${s.slug}` : `/services/${s.slug}`;
            return (
              <Link key={s.slug} href={href} className="card card-hover flex flex-col gap-2 p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-aqua-100 text-aqua-700">
                  <I className="h-5 w-5" />
                </span>
                <span className="font-bold text-navy-800">
                  {s.shortName} in {t.name}
                </span>
                <span className="text-sm text-muted">{s.tagline}</span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* town-specific FAQ */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{t.name} Questions</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-900">
            Epoxy flooring in {t.name} — answered
          </h2>
        </div>
        <div className="mt-10">
          <FAQ items={faqs} />
        </div>
      </Section>

      <ReviewsWall limit={3} />

      {/* map + nearby towns */}
      <Section>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <Eyebrow>On The Map</Eyebrow>
            <h2 className="mt-3 text-2xl font-extrabold text-navy-900">Serving {t.name} & {t.zip}</h2>
            <p className="mt-3 text-muted">
              We're a Newark-based North Jersey crew covering all of {t.name} — including {t.hook}.
              No national franchise, no out-of-town subcontractors.
            </p>
          </div>
          <MapEmbed query={`${t.name}, NJ ${t.zip}`} title={`Epoxy flooring service area in ${t.name}, NJ`} />
        </div>
      </Section>

      {/* nearby towns + county hub */}
      <Section className="bg-navy-50/40">
        <h2 className="text-2xl font-extrabold text-navy-900">Also serving near {t.name}</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {countySlugs.includes(t.county.toLowerCase().replace(" ", "-")) && (
            <Link href={`/areas/${t.county.toLowerCase().replace(" ", "-")}`} className="btn btn-outline font-bold text-aqua-700">
              <Icon.pin className="h-4 w-4" /> All of {t.county}
            </Link>
          )}
          {t.nearby.map((n) => {
            const match = towns.find((x) => x.name === n);
            return match ? (
              <Link key={n} href={`/areas/${match.slug}`} className="btn btn-outline">
                <Icon.pin className="h-4 w-4" /> {n}
              </Link>
            ) : (
              <span key={n} className="btn btn-outline opacity-70">
                <Icon.pin className="h-4 w-4" /> {n}
              </span>
            );
          })}
        </div>
      </Section>

      <ProjectShowcase bg count={4} title={`Recent floors near ${t.name}`} />
      <CTABand title={`${t.name}'s best-looking floor is one visit away`} />
    </>
  );
}
