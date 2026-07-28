import type { Metadata } from "next";
import { site } from "@/site.config";
import { Icon } from "@/lib/icons";
import { Section, StarRow, Button } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { ReviewsWall, CTABand, ProjectShowcase } from "@/components/sections";

export const metadata: Metadata = {
  title: "Reviews — Five-Star Epoxy Floors Across North Jersey",
  description: `Read why North Jersey homeowners and businesses rate Jersey Elite Coatings ${site.rating}★. Real floors, honest pricing, lifetime warranty.`,
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer Reviews"
        title={<>Five-star floors across North Jersey</>}
        sub="We earn our reputation one garage, basement, and showroom at a time. Here's what customers tell us."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Reviews", url: "/reviews" },
        ]}
      >
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
            <StarRow className="text-sun-400" />
            <span className="font-bold text-white">{site.rating} / 5</span>
          </span>
          <Button href="/gallery" variant="ghost" icon="arrow">
            See the floors behind them
          </Button>
        </div>
      </PageHero>

      <ReviewsWall limit={7} heading={false} />

      <ProjectShowcase title="The work behind the reviews" sub="Five-star words are nice — here's the proof." count={4} />

      <Section className="bg-navy-50/40">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy-900">Want to be our next 5-star review?</h2>
          <p className="mt-4 text-lg text-muted">
            Join thousands of happy New Jersey customers. Get your free quote today.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/quote" variant="primary" icon="bolt">Get My Free Quote</Button>
            <Button href={`tel:${site.phoneHref}`} variant="outline" icon="phone">{site.phoneDisplay}</Button>
          </div>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
