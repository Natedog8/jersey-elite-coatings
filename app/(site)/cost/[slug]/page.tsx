import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { costBySlug, costSlugs, costGuides } from "@/data/costs";
import { serviceBySlug } from "@/data/services";
import { site } from "@/site.config";
import { Icon } from "@/lib/icons";
import { Container, Section, Button } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { CTABand, ProjectShowcase } from "@/components/sections";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, speakableSchema, breadcrumbSchema, articleSchema } from "@/lib/seo";

export function generateStaticParams() {
  return costSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = costBySlug(slug);
  if (!c) return {};
  return {
    title: c.question,
    description: c.shortAnswer.slice(0, 158),
    alternates: { canonical: `/cost/${c.slug}` },
    openGraph: { title: c.question, description: c.shortAnswer.slice(0, 158), images: [{ url: "/og-default.jpg" }] },
  };
}

export default async function CostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = costBySlug(slug);
  if (!c) notFound();

  const related = c.relatedService ? serviceBySlug(c.relatedService) : undefined;
  /* keep related links inside the same cluster, then top up from the other */
  const sameCluster = costGuides.filter((x) => x.slug !== c.slug && x.category === c.category);
  const otherCluster = costGuides.filter((x) => x.slug !== c.slug && x.category !== c.category);
  const others = [...sameCluster, ...otherCluster].slice(0, 4);
  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Pricing", url: "/cost" },
    { name: c.question.replace(/\?$/, ""), url: `/cost/${c.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          faqSchema([{ q: c.question, a: c.shortAnswer }]),
          articleSchema({
            headline: c.question,
            description: c.shortAnswer,
            url: `${site.url}/cost/${c.slug}`,
            image: related?.photo,
          }),
          speakableSchema([".speakable"]),
          breadcrumbSchema(crumbs),
        ]}
      />

      <PageHero
        eyebrow={c.category === "price" ? "NJ Cost Guide" : "NJ Buyer's Guide"}
        title={c.question}
        breadcrumbs={crumbs}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="max-w-2xl">
            {/* snippet-bait answer box */}
            <div className="rounded-2xl border-l-4 border-aqua-500 bg-aqua-50 p-6">
              <div className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-aqua-700">
                <Icon.bolt className="h-4 w-4" /> Quick answer
              </div>
              <p className="speakable text-lg font-medium leading-relaxed text-navy-800">{c.shortAnswer}</p>
            </div>

            <p className="mt-7 text-lg leading-relaxed text-muted">{c.intro}</p>

            {c.table && (
              <div className="mt-8 overflow-hidden rounded-2xl border border-navy-50">
                <table className="w-full text-left">
                  <thead className="bg-navy-50/60 text-sm">
                    <tr>
                      <th className="px-5 py-3 font-bold text-navy-800">{c.tableHeads?.[0] ?? "Job"}</th>
                      <th className="px-5 py-3 text-right font-bold text-navy-800">
                        {c.tableHeads?.[1] ?? "Typical price"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-50">
                    {c.table.map((row) => (
                      <tr key={row.label}>
                        <td className="px-5 py-3.5 text-navy-700">{row.label}</td>
                        <td className="px-5 py-3.5 text-right font-bold text-aqua-700">{row.range}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="bg-white px-5 py-3 text-xs text-muted">
                  {c.tableHeads
                    ? "Figures reflect typical North Jersey installs — your floor is quoted on its own condition after an on-site visit."
                    : "Ranges reflect typical North Jersey installs. Your exact price depends on the slab — get a free, firm quote with an on-site visit."}
                </p>
              </div>
            )}

            <h2 className="mt-10 text-2xl font-extrabold text-navy-900">What affects the price</h2>
            <ul className="mt-5 grid gap-3">
              {c.factors.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-aqua-100 text-aqua-700">
                    <Icon.check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-navy-700">{f}</span>
                </li>
              ))}
            </ul>

            {related && (
              <div className="mt-10 rounded-2xl bg-navy-50/60 p-6">
                <p className="text-navy-700">
                  Ready for the real thing?{" "}
                  <Link href={`/services/${related.slug}`} className="font-bold text-aqua-700 underline">
                    See our {related.shortName.toLowerCase()} service →
                  </Link>
                </p>
              </div>
            )}
          </article>

          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="card p-6">
              <h3 className="text-lg font-extrabold text-navy-800">Get your exact price</h3>
              <p className="mt-1 text-sm text-muted">Free, no obligation — with an on-site visit.</p>
              <div className="mt-4">
                <QuoteForm compact defaultService={related?.name} source={`cost-${c.slug}`} />
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="bg-navy-50/40">
        <h2 className="text-2xl font-extrabold text-navy-900">
          {c.category === "price" ? "More pricing questions" : "More questions worth asking"}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {others.map((o) => (
            <Link key={o.slug} href={`/cost/${o.slug}`} className="card card-hover flex items-center justify-between gap-3 p-5">
              <span className="font-bold text-navy-800">{o.question}</span>
              <Icon.arrow className="h-5 w-5 shrink-0 text-aqua-600" />
            </Link>
          ))}
        </div>
      </Section>

      <ProjectShowcase bg count={4} title="See the value for yourself" />
      <CTABand />
    </>
  );
}
