import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { finishBySlug, finishSlugs, finishes } from "@/data/finishes";
import { serviceBySlug } from "@/data/services";
import { site } from "@/site.config";
import { Icon } from "@/lib/icons";
import { Section, Button, CheckList, Eyebrow } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQ } from "@/components/FAQ";
import { CTABand } from "@/components/sections";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema, articleSchema } from "@/lib/seo";

export function generateStaticParams() {
  return finishSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const f = finishBySlug(slug);
  if (!f) return {};
  return {
    title: `${f.name} — Spec & Cost`,
    description: `${f.lede} How the system is built, what it costs (${f.priceRange}) and where it suits. Installed across North Jersey with a lifetime warranty against peeling.`,
    alternates: { canonical: `/finishes/${f.slug}` },
    openGraph: { title: `${f.name} — ${site.name}`, description: f.lede, images: [{ url: f.photo }] },
  };
}

export default async function FinishPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = finishBySlug(slug);
  if (!f) notFound();

  const service = serviceBySlug(f.service);
  const related = finishes.filter((x) => x.slug !== f.slug && x.family === f.family).slice(0, 3);
  const others = finishes.filter((x) => x.slug !== f.slug && x.family !== f.family).slice(0, 3);
  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Floor Finishes", url: "/finishes" },
    { name: f.name, url: `/finishes/${f.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: f.name,
            description: f.lede,
            url: `${site.url}/finishes/${f.slug}`,
            image: f.photo,
          }),
          faqSchema([f.faq]),
          breadcrumbSchema(crumbs),
        ]}
      />

      <PageHero eyebrow={`${f.family} System`} title={f.name} sub={f.lede} breadcrumbs={crumbs} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <figure className="overflow-hidden rounded-2xl border border-navy-50">
              <Image
                src={f.photo}
                alt={f.alt}
                width={1600}
                height={1200}
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="w-full object-cover"
              />
              <figcaption className="bg-white px-5 py-3 text-sm text-muted">{f.alt}</figcaption>
            </figure>

            <h2 className="mt-10 text-2xl font-extrabold text-navy-900">What you&apos;re looking at</h2>
            {f.body.map((p, i) => (
              <p key={i} className={`text-lg leading-relaxed text-muted ${i === 0 ? "mt-5" : "mt-4"}`}>
                {p}
              </p>
            ))}

            {f.project && (
              <div className="mt-8 rounded-2xl border border-aqua-100 bg-aqua-50 p-6">
                <div className="flex items-center gap-2 text-aqua-800">
                  <Icon.pin className="h-5 w-5" />
                  <span className="font-bold">
                    {f.project.town} · {f.project.size} · {f.project.date}
                  </span>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-700">{f.project.notes}</p>
              </div>
            )}

            <h2 className="mt-10 text-2xl font-extrabold text-navy-900">How the system is built</h2>
            <ol className="mt-5 grid gap-3">
              {f.spec.map((s, i) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-900 text-[11px] font-black text-white">
                    {i + 1}
                  </span>
                  <span className="text-[15px] leading-relaxed text-navy-700">{s}</span>
                </li>
              ))}
            </ol>

            <h2 className="mt-10 text-2xl font-extrabold text-navy-900">Where it suits</h2>
            <CheckList items={f.bestFor} className="mt-5 sm:grid-cols-2" />

            {service && (
              <div className="mt-10 rounded-2xl bg-navy-50/60 p-6">
                <p className="text-navy-700">
                  This finish is part of our{" "}
                  <Link href={`/services/${service.slug}`} className="font-bold text-aqua-700 underline">
                    {service.name.toLowerCase()}
                  </Link>{" "}
                  service. Wondering what makes a floor last?{" "}
                  <Link href="/why-epoxy-floors-fail" className="font-bold text-aqua-700 underline">
                    See why epoxy floors fail
                  </Link>
                  .
                </p>
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="card p-6">
              <div className="flex items-baseline justify-between border-b border-navy-50 pb-4">
                <span className="text-sm font-semibold text-muted">Installed price</span>
                <span className="text-xl font-black text-navy-800">{f.priceRange}</span>
              </div>
              <div className="mt-4">
                <div className="mb-1 flex items-center gap-2 text-navy-800">
                  <Icon.bolt className="h-5 w-5 text-aqua-600" />
                  <span className="font-extrabold">See this on your floor</span>
                </div>
                <p className="mb-3 text-sm text-muted">
                  Free on-site visit with physical samples — gloss, satin and matte, under your
                  own lighting.
                </p>
                <QuoteForm compact defaultService={service?.name} source={`finish-${f.slug}`} />
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="bg-navy-50/40">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>Good Question</Eyebrow>
          <h2 className="mt-3 text-2xl font-extrabold text-navy-900">Before you choose this finish</h2>
          <div className="mt-8">
            <FAQ items={[f.faq]} />
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-extrabold text-navy-900">Other {f.family.toLowerCase()} finishes</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...related, ...others].slice(0, 3).map((o) => (
            <Link key={o.slug} href={`/finishes/${o.slug}`} className="card card-hover group flex flex-col overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={o.photo}
                  alt={o.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-extrabold text-navy-800">{o.name}</h3>
                <p className="mt-1.5 flex-1 text-sm text-muted">{o.lede}</p>
                <span className="mt-3 text-sm font-bold text-aqua-700">{o.priceRange}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/finishes" variant="outline" icon="arrow">
            See every finish
          </Button>
        </div>
      </Section>

      <CTABand title={`Want ${f.name.toLowerCase()} on your floor?`} />
    </>
  );
}
