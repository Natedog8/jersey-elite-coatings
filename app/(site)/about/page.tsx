import type { Metadata } from "next";
import { site } from "@/site.config";
import { Section, Eyebrow } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { ValueProps, Steps, CTABand, ProjectShowcase } from "@/components/sections";
import { actionPhotos, featured } from "@/data/media";

export const metadata: Metadata = {
  title: "About Us — North Jersey Epoxy Flooring Since 2010",
  description:
    "Jersey Elite Coatings is a locally owned epoxy flooring company based in Newark, NJ — tons of floors installed across North Jersey since 2010, every one backed by a lifetime warranty.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const stats = [
    { n: "Tons", l: "of floors done" },
    { n: "2010", l: "Serving NJ since" },
    { n: `${site.rating}★`, l: "Rated service" },
    { n: "Lifetime", l: "Adhesion warranty" },
  ];
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>Locally owned, and <span className="text-gradient">obsessed with floors.</span></>}
        sub="A Newark-based epoxy flooring crew that's been transforming New Jersey concrete since 2010 — your hardworking neighbors who treat every slab like their own."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-navy-900">
              Built on prep, kept by warranty
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Jersey Elite Coatings started with a simple observation: most failed epoxy
                floors in New Jersey didn't fail because of the epoxy. They failed because
                somebody skipped the preparation. So we built the company around the
                unglamorous part — diamond grinding, crack repair, moisture testing — and made
                a promise most installers won't: a lifetime warranty against peeling and
                delamination.
              </p>
              <p>
                Since 2010 that approach has carried us through a mountain of projects —
                showroom garages in Livingston and Ridgewood, finished basements in Montclair,
                restaurant kitchens in the Ironbound, and warehouse floors from Paterson to
                Port Newark. Different floors, same system: prep it right, install
                commercial-grade materials, stand behind it for life.
              </p>
              <p>
                We're a local, licensed and insured crew — not a franchise, not subcontractors.
                The people who quote your floor are the people who grind it, coat it, and hand
                it back to you looking like a showroom.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-navy-900 shadow-[var(--shadow-lift)]">
              <img
                src={featured.team.src}
                alt="Jersey Elite Coatings crew installing an epoxy floor in North Jersey"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-sm font-bold text-navy-800 shadow-sm backdrop-blur">
              On the job · North Jersey
            </span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="card flex flex-col items-center justify-center p-8 text-center">
              <span className="text-4xl font-black text-aqua-600">{s.n}</span>
              <span className="mt-2 text-sm font-semibold text-muted">{s.l}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="card mx-auto max-w-3xl bg-navy-900 p-10 text-center text-white sm:p-12">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-aqua-300">
            <span className="h-1.5 w-1.5 rounded-full bg-aqua-400" />
            The promise
          </span>
          <p className="mt-4 text-xl font-semibold leading-relaxed sm:text-2xl">
            {site.guarantee}
          </p>
          <p className="mt-5 text-lg leading-relaxed text-white/80">
            That's not marketing — it's how we've kept New Jersey customers coming back, and
            referring their neighbors, since 2010.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <Eyebrow>On The Job</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-900">The work behind the shine</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {actionPhotos.slice(0, 3).map((p) => (
            <figure key={p.src} className="card overflow-hidden">
              <img src={p.src} alt={p.caption} className="aspect-[3/4] w-full object-cover" loading="lazy" />
              <figcaption className="px-4 py-3 text-center text-sm font-semibold text-navy-700">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <ValueProps />
      <ProjectShowcase bg count={4} title="Work we're proud of" />
      <Steps />
      <CTABand />
    </>
  );
}
