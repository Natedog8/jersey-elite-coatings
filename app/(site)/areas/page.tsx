import type { Metadata } from "next";
import Link from "next/link";
import { counties, townsInCounty } from "@/data/counties";
import { Section, Button } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { CTABand, ProjectShowcase } from "@/components/sections";
import { Icon } from "@/lib/icons";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: "Epoxy Flooring Service Areas — North Jersey",
  description:
    "Jersey Elite Coatings serves all of North Jersey — Newark, Jersey City, Hoboken, Clifton, Paterson, Montclair, Wayne, Livingston, Ridgewood, Paramus, Morristown & more.",
  alternates: { canonical: "/areas" },
};

export default function AreasIndex() {
  return (
    <>
      <PageHero
        eyebrow="North Jersey, NJ"
        title="Local epoxy flooring across North Jersey"
        sub="Based in Newark, installing across Essex, Hudson, Bergen, Passaic & Morris counties. Find your town for local pricing, neighborhoods we cover, and a fast quote."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/areas" },
        ]}
      >
        <Button href="/quote" variant="primary" icon="bolt">
          Get a Free Quote
        </Button>
      </PageHero>

      {counties.map((c, i) => (
        <Section key={c.slug} className={i % 2 === 1 ? "bg-navy-50/40" : undefined}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-navy-900">{c.name}</h2>
              <p className="mt-1 max-w-2xl text-sm text-muted">{c.intro.split(". ")[0] + "."}</p>
            </div>
            <Link href={`/areas/${c.slug}`} className="flex items-center gap-1 text-sm font-bold text-aqua-700 hover:text-aqua-800">
              All of {c.name} <Icon.arrow className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {townsInCounty(c).map((t) => (
              <Link key={t.slug} href={`/areas/${t.slug}`} className="card card-hover flex flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-aqua-100 text-aqua-700">
                    <Icon.pin className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold text-navy-800">{t.name}</h3>
                    <p className="text-xs text-muted">
                      {t.county} · {t.zip}
                    </p>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{t.localColor}</p>
                <span className="mt-4 flex items-center gap-1 text-sm font-bold text-aqua-700">
                  {t.name} services <Icon.arrow className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </Section>
      ))}

      <ProjectShowcase bg count={4} title="Recent floors around North Jersey" />
      <CTABand />
    </>
  );
}
