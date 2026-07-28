import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { finishes, finishFamilies } from "@/data/finishes";
import { site } from "@/site.config";
import { Icon } from "@/lib/icons";
import { Section, Button, Eyebrow } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/sections";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

const crumbs = [
  { name: "Home", url: "/" },
  { name: "Floor Finishes", url: "/finishes" },
];

export const metadata: Metadata = {
  title: "Epoxy Floor Finishes — Flake, Metallic & Solid Color",
  description:
    "Every epoxy finish we install, shown and explained — flake blends, hand-worked metallics, solid colors and coated-in traffic aisles. What each system is built from, what it costs per square foot, and where it actually suits.",
  alternates: { canonical: "/finishes" },
  openGraph: {
    title: `Epoxy Floor Finishes — ${site.name}`,
    description: "Flake, metallic and solid-color epoxy finishes, with the system spec and price behind each one.",
    images: [{ url: "/og-default.jpg" }],
  },
};

export default function FinishesIndex() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Epoxy floor finishes",
            itemListElement: finishes.map((f, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: f.name,
              url: `${site.url}/finishes/${f.slug}`,
            })),
          },
        ]}
      />

      <PageHero
        eyebrow="Floor Finishes"
        title="Every finish we install, shown and explained"
        sub="Flake blends, hand-worked metallics, solid colors and coated-in traffic aisles — what each system is built from, what it costs, and where it genuinely suits."
        breadcrumbs={crumbs}
      >
        <Button href="/quote" variant="primary" icon="bolt">
          See Samples On Your Floor
        </Button>
      </PageHero>

      {finishFamilies.map((fam, i) => {
        const items = finishes.filter((f) => f.family === fam);
        if (!items.length) return null;
        return (
          <Section key={fam} className={i % 2 === 1 ? "bg-navy-50/40" : undefined}>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>{fam}</Eyebrow>
              <h2 className="mt-3 text-3xl font-extrabold text-navy-900">
                {fam === "Flake" && "Flake systems"}
                {fam === "Metallic" && "Metallic systems"}
                {fam === "Solid color" && "Solid-color systems"}
              </h2>
              <p className="mt-3 text-muted">
                {fam === "Flake" && "Vinyl chips broadcast into the base coat — texture, slip resistance, and the finish that hides the most."}
                {fam === "Metallic" && "Pigment hand-worked through clear resin. One-off by definition, and chosen in person rather than from a photo."}
                {fam === "Solid color" && "Uniform pigmented floors. The sharpest look, the lowest price, and the least forgiving of a rough slab."}
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {items.map((f) => (
                <Link key={f.slug} href={`/finishes/${f.slug}`} className="card card-hover group flex flex-col overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={f.photo}
                      alt={f.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-navy-900/75 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur">
                      {f.family}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-extrabold leading-snug text-navy-800">{f.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{f.lede}</p>
                    <div className="mt-4 flex items-center justify-between border-t border-navy-50 pt-4">
                      <span className="text-sm font-bold text-aqua-700">{f.priceRange}</span>
                      <span className="flex items-center gap-1 text-sm font-bold text-navy-700 transition group-hover:gap-2 group-hover:text-aqua-700">
                        Details <Icon.arrow className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Section>
        );
      })}

      <Section>
        <div className="mx-auto max-w-3xl rounded-2xl border border-aqua-100 bg-aqua-50 p-8 text-center">
          <Icon.pin className="mx-auto h-8 w-8 text-aqua-600" />
          <h2 className="mt-4 text-2xl font-extrabold text-navy-900">
            Photographs are the worst way to choose a floor
          </h2>
          <p className="mt-3 leading-relaxed text-navy-700">
            Every finish on this page looks materially different under warm light versus cool,
            and metallic finishes are hand-worked so no two are alike. That is why the free
            consultation includes physical samples brought to your space and laid on your actual
            slab — in gloss, satin and matte — before anything is ordered.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/quote" variant="primary" icon="bolt">
              Book a Sample Visit
            </Button>
            <Button href={`tel:${site.phoneHref}`} variant="outline" icon="phone">
              {site.phoneDisplay}
            </Button>
          </div>
        </div>
      </Section>

      <CTABand title="Not sure which finish fits your floor?" />
    </>
  );
}
