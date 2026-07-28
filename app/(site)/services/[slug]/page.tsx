import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, serviceBySlug, serviceSlugs } from "@/data/services";
import { towns } from "@/data/towns";
import { site } from "@/site.config";
import { Icon } from "@/lib/icons";
import { Container, Section, Button, CheckList, Eyebrow } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQ } from "@/components/FAQ";
import { ReviewsWall, CTABand, ProjectShowcase } from "@/components/sections";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

/** Render inline markdown links — [text](/url) — inside pillar paragraphs. */
function renderInline(text: string) {
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <Link key={i++} href={m[2]} className="font-semibold text-red-700 underline underline-offset-2 hover:text-red-800">
        {m[1]}
      </Link>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) return {};
  return {
    title: `${s.name} in North Jersey | From $${s.priceFrom}/sq ft`,
    description: `${s.intro.slice(0, 155)}`,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: `${s.name} — ${site.name}`, description: s.tagline },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) notFound();

  const others = services.filter((x) => x.slug !== s.slug).slice(0, 4);
  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: s.shortName, url: `/services/${s.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: s.name, description: s.intro, url: `${site.url}/services/${s.slug}` }),
          faqSchema(s.faq),
          breadcrumbSchema(crumbs),
        ]}
      />

      <PageHero
        eyebrow="Epoxy Systems · North Jersey"
        title={s.hero}
        sub={s.tagline}
        breadcrumbs={crumbs}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/quote" variant="primary" icon="bolt">
            Get a Free Quote
          </Button>
          <Button href={`tel:${site.phoneHref}`} variant="ghost" icon="phone">
            {site.phoneDisplay}
          </Button>
        </div>
      </PageHero>

      {/* intro + form */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>The Problem We Solve</Eyebrow>
            <p className="mt-3 text-xl font-semibold leading-snug text-navy-800">{s.problem}</p>
            <p className="mt-5 text-lg leading-relaxed text-muted">{s.intro}</p>

            <h2 className="mt-10 text-2xl font-extrabold text-navy-900">What's included</h2>
            <CheckList items={s.includes} className="mt-5 sm:grid-cols-2" />

            <div className="mt-10 rounded-2xl border border-aqua-100 bg-aqua-50 p-6">
              <div className="flex items-center gap-2 text-aqua-800">
                <Icon.pin className="h-5 w-5" />
                <span className="font-bold">Local note</span>
              </div>
              <p className="mt-2 text-[15px] leading-relaxed text-navy-700">{s.localNote}</p>
            </div>

            <h3 className="mt-10 text-lg font-extrabold text-navy-900">Spaces we coat</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {s.surfaces.map((sf) => (
                <span key={sf} className="rounded-full border border-navy-100 bg-white px-3.5 py-1.5 text-sm font-medium text-navy-700">
                  {sf}
                </span>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="card overflow-hidden p-5">
              <img
                src={s.photo}
                alt={`${s.name} — recent North Jersey install`}
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
              <div className="mt-5 flex items-baseline justify-between border-b border-navy-50 pb-4">
                <span className="text-sm font-semibold text-muted">Starting at</span>
                <span className="text-2xl font-black text-navy-800">
                  {s.priceFrom > 0 ? `$${s.priceFrom}` : "Free quote"}
                  {s.priceFrom > 0 && <span className="text-sm font-medium text-muted"> {s.priceUnit}</span>}
                </span>
              </div>
              <div className="mt-4">
                <QuoteForm compact defaultService={s.name} source={`service-${s.slug}`} />
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* pillar / in-depth authority content */}
      {s.pillar && s.pillar.length > 0 && (
        <Section className="pt-0">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>The Complete Guide</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-navy-900">
              {s.shortName} in North Jersey — what to know
            </h2>
            <div className="mt-8 space-y-10">
              {s.pillar.map((sec) => (
                <div key={sec.h}>
                  <h3 className="text-xl font-extrabold text-navy-900">{sec.h}</h3>
                  <div className="mt-3 space-y-4 text-[17px] leading-relaxed text-muted">
                    {sec.p.map((para, i) => (
                      <p key={i}>{renderInline(para)}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/quote" variant="primary" icon="bolt">
                Get a Free {s.shortName} Quote
              </Button>
              <Button href={`tel:${site.phoneHref}`} variant="outline" icon="phone">
                {site.phoneDisplay}
              </Button>
            </div>
          </div>
        </Section>
      )}

      {/* FAQ */}
      {s.faq.length > 0 && (
        <Section className="bg-navy-50/40">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>{s.shortName} FAQ</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-navy-900">Common questions</h2>
          </div>
          <div className="mt-10">
            <FAQ items={s.faq} />
          </div>
        </Section>
      )}

      {/* town links — internal linking for geo SEO */}
      <Section>
        <h2 className="text-2xl font-extrabold text-navy-900">
          {s.shortName} across North Jersey
        </h2>
        <p className="mt-2 text-muted">We install {s.shortName.toLowerCase()} in every corner of North Jersey:</p>
        <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {towns.map((t) => (
            <Link
              key={t.slug}
              href={`/areas/${t.slug}`}
              className="rounded-xl border border-navy-50 bg-white px-4 py-3 text-sm font-semibold text-navy-700 transition hover:border-aqua-200 hover:text-aqua-700"
            >
              {s.shortName} in {t.name}
            </Link>
          ))}
        </div>
      </Section>

      <ReviewsWall limit={3} />

      {/* other services */}
      <Section className="bg-navy-50/40">
        <h2 className="text-2xl font-extrabold text-navy-900">Other services you might need</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((o) => {
            const I = Icon[o.icon as keyof typeof Icon] ?? Icon.spray;
            return (
              <Link key={o.slug} href={`/services/${o.slug}`} className="card card-hover flex items-center gap-3 p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-aqua-100 text-aqua-700">
                  <I className="h-5 w-5" />
                </span>
                <span className="font-bold text-navy-800">{o.shortName}</span>
              </Link>
            );
          })}
        </div>
      </Section>

      <ProjectShowcase bg count={4} title="More North Jersey floors" />
      <CTABand title={`Ready for a showroom-grade ${s.shortName.toLowerCase()} floor?`} />
    </>
  );
}
