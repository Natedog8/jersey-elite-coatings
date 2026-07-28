import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceGrid, CTABand, ProjectShowcase } from "@/components/sections";
import { Button } from "@/components/ui";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: "Epoxy Flooring Services in North Jersey — Garage, Commercial & More",
  description:
    "Explore Jersey Elite Coatings' full menu — garage, commercial, industrial, basement, metallic, flake and restaurant kitchen epoxy flooring across North Jersey.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>Every concrete floor, coated the right way</>}
        sub="Diamond-ground prep, 100% solids systems, and a lifetime warranty on all of it. Serving every town in North Jersey."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
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
      <ServiceGrid heading={false} />
      <ProjectShowcase bg count={8} title="See these systems installed" />
      <CTABand />
    </>
  );
}
