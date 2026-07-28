import type { Metadata } from "next";
import Image from "next/image";
import { Section, Eyebrow, Button } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/sections";
import { galleryPhotos, actionPhotos } from "@/data/media";

export const metadata: Metadata = {
  title: "Epoxy Flooring Project Gallery — North Jersey",
  description:
    "See the floors. Garage epoxy, metallic pours, commercial and basement installs from Jersey Elite Coatings projects across North Jersey.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Project Gallery"
        title="The floors speak for themselves"
        sub="Garage showpieces, metallic pours, commercial installs and basements — a look at what leaves our trailers every week across North Jersey."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" },
        ]}
      >
        <Button href="/quote" variant="primary" icon="bolt">
          Get a Floor Like These
        </Button>
      </PageHero>

      {/* Finished floors */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Finished Floors</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-900 md:text-4xl">
            Recent installs
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {galleryPhotos.map((t) => (
            <figure key={t.src} className="card group overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={t.src}
                  alt={t.caption}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                {t.service && (
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-navy-900/70 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur">
                    {t.service}
                  </span>
                )}
              </div>
              <figcaption className="px-3.5 py-3 text-sm font-semibold text-navy-700">
                {t.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Process / on-the-job */}
      <Section className="bg-navy-50/40">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>On The Job</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-900 md:text-4xl">
            The process behind the shine
          </h2>
          <p className="mt-4 text-lg text-muted">
            Diamond grinding, hand-worked metallic pours, detail topcoats — the prep and
            craft that make a floor last decades.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {actionPhotos.map((p) => (
            <figure key={p.src} className="card overflow-hidden">
              <Image src={p.src} alt={p.caption} width={900} height={1200} sizes="(min-width: 640px) 25vw, 100vw" className="aspect-[3/4] w-full object-cover" />
              <figcaption className="px-4 py-3 text-center text-sm font-semibold text-navy-700">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
