import type { Metadata } from "next";
import Link from "next/link";
import { costGuides } from "@/data/costs";
import { Section, Button } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { CTABand, ProjectShowcase } from "@/components/sections";
import { Icon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Epoxy Flooring Prices & Cost Guides for NJ (2026)",
  description:
    "Straight answers on what epoxy flooring costs in New Jersey — garage floors, commercial systems, metallic finishes and more. Real North Jersey price ranges, no guessing.",
  alternates: { canonical: "/cost" },
};

export default function CostIndex() {
  return (
    <>
      <PageHero
        eyebrow="Pricing & Cost Guides"
        title="What does epoxy flooring actually cost in NJ?"
        sub="No vague 'it depends.' Here are real North Jersey price ranges and answers to the questions everyone asks before they book."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Pricing", url: "/cost" },
        ]}
      >
        <Button href="/quote" variant="primary" icon="bolt">
          Get an Exact Quote
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {costGuides.map((c) => (
            <Link key={c.slug} href={`/cost/${c.slug}`} className="card card-hover flex flex-col p-7">
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-aqua-100 text-aqua-700">
                  <Icon.badge className="h-6 w-6" />
                </span>
                <h2 className="text-lg font-extrabold leading-snug text-navy-800">{c.question}</h2>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {c.shortAnswer.slice(0, 140)}…
              </p>
              <span className="mt-4 flex items-center gap-1 text-sm font-bold text-aqua-700">
                Read the answer <Icon.arrow className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <ProjectShowcase bg count={4} title="What your money actually buys" sub="Recent North Jersey installs — garages, showrooms and metallic pours." />
      <CTABand title="Want an exact number for your floor?" sub="Skip the ranges — tell us about your space and get a precise, no-obligation quote with an on-site visit." />
    </>
  );
}
