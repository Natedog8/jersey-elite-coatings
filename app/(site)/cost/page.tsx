import type { Metadata } from "next";
import Link from "next/link";
import { priceGuides, buyerGuides, type CostGuide } from "@/data/costs";
import { Section, Button, Eyebrow } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { CTABand, ProjectShowcase } from "@/components/sections";
import { Icon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Epoxy Flooring Prices & Buyer's Guides — NJ",
  description:
    "Straight answers on what epoxy flooring costs in New Jersey — garage floors, commercial systems, metallic finishes — plus buyer's guides on winter installs, DIY kits, maintenance and how epoxy compares to tile and mats.",
  alternates: { canonical: "/cost" },
};

function GuideCard({ c, icon }: { c: CostGuide; icon: "badge" | "bolt" }) {
  const I = Icon[icon];
  return (
    <Link href={`/cost/${c.slug}`} className="card card-hover flex flex-col p-7">
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-aqua-100 text-aqua-700">
          <I className="h-6 w-6" />
        </span>
        <h3 className="text-lg font-extrabold leading-snug text-navy-800">{c.question}</h3>
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{c.shortAnswer.slice(0, 140)}…</p>
      <span className="mt-4 flex items-center gap-1 text-sm font-bold text-aqua-700">
        Read the answer <Icon.arrow className="h-4 w-4" />
      </span>
    </Link>
  );
}

export default function CostIndex() {
  return (
    <>
      <PageHero
        eyebrow="Pricing & Buyer's Guides"
        title="What does epoxy flooring actually cost in NJ?"
        sub="No vague 'it depends.' Here are real North Jersey price ranges — plus honest answers to everything people research before they book."
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
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Real North Jersey Prices</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-900">What it costs</h2>
          <p className="mt-3 text-muted">
            Actual installed price ranges for residential and commercial work — the numbers we
            quote from, not national averages.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {priceGuides.map((c) => (
            <GuideCard key={c.slug} c={c} icon="badge" />
          ))}
        </div>
      </Section>

      <Section className="bg-navy-50/40">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Before You Book</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-900">Buyer's guides</h2>
          <p className="mt-3 text-muted">
            The questions worth answering before you sign anything — including the ones where
            our honest answer is "don't."
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {buyerGuides.map((c) => (
            <GuideCard key={c.slug} c={c} icon="bolt" />
          ))}
        </div>
      </Section>

      <ProjectShowcase count={4} title="What your money actually buys" sub="Recent North Jersey installs — garages, showrooms and metallic pours." />
      <CTABand title="Want an exact number for your floor?" sub="Skip the ranges — tell us about your space and get a precise, no-obligation quote with an on-site visit." />
    </>
  );
}
