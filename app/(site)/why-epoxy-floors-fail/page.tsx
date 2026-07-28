import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { failureModes, severityStyle } from "@/data/failures";
import { site } from "@/site.config";
import { Icon } from "@/lib/icons";
import { Section, Button, Eyebrow } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQ } from "@/components/FAQ";
import { CTABand } from "@/components/sections";
import { featured } from "@/data/media";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, articleSchema, breadcrumbSchema, speakableSchema } from "@/lib/seo";

const crumbs = [
  { name: "Home", url: "/" },
  { name: "Why Epoxy Floors Fail", url: "/why-epoxy-floors-fail" },
];

const SHORT_ANSWER =
  "Almost every failed epoxy floor comes down to one of three things: the concrete was never mechanically ground, the slab was never moisture-tested, or the topcoat was never rated for the job. Peeling in clean sheets means no bond. Bubbles mean moisture. Lifting where the tires sit means the wrong topcoat.";

export const metadata: Metadata = {
  title: "Why Epoxy Floors Fail — Peeling, Bubbling & Hot-Tire Pickup",
  description:
    "Diagnose a failing epoxy floor in minutes. What peeling, blistering, yellowing, hot-tire pickup and chipping actually mean, whether each one is repairable, and what it costs to put right in North Jersey.",
  alternates: { canonical: "/why-epoxy-floors-fail" },
  openGraph: {
    title: "Why Epoxy Floors Fail — A North Jersey Diagnostic Guide",
    description: SHORT_ANSWER,
    images: [{ url: "/og-default.jpg" }],
  },
};

const faqs = [
  {
    q: "Why is my epoxy floor peeling?",
    a: "If the underside of the peeling piece is smooth, clean gray concrete, the coating never bonded — the slab was acid-etched or not prepped at all instead of diamond-ground. Epoxy needs an open, textured surface to key into. This is the most common epoxy failure there is, and the only real fix is grinding it off and starting again properly.",
  },
  {
    q: "Can you fix a failed epoxy floor, or does it all have to come off?",
    a: "It depends entirely on whether the bond failed. Yellowing, worn traffic paths and cracks that telegraphed through are usually repairable — we abrade and recoat, and the floor comes back for a fraction of a replacement. Peeling, moisture blistering and under-cured coatings mean the bond or the chemistry failed, and those have to be removed and rebuilt.",
  },
  {
    q: "How much does it cost to remove a failed epoxy floor in NJ?",
    a: "Removal typically adds $1–2 per square foot on top of the new floor, because grinding off a failed coating is slower than grinding bare concrete. On a 400 sq ft two-car garage that's roughly $400–800 extra. It's the hidden cost of a cheap first quote — you end up paying for preparation twice.",
  },
  {
    q: "My DIY epoxy kit failed after one winter. Is that normal?",
    a: "Unfortunately yes. Box-store kits are typically around 50% solids water-based product applied over an acid-etched slab, and one to three years is their realistic lifespan in New Jersey conditions. It isn't that you did it badly — the kit doesn't include the two things that decide longevity, which are mechanical grinding and a moisture test.",
  },
  {
    q: "Do you charge to look at a floor that's already failed?",
    a: "No. Failure assessments are free, same as any other quote. We'll tell you what caused it, whether it's repairable or has to come off, and what each option costs — including when the honest answer is that your floor is fine and just needs a topcoat refresh.",
  },
];

export default function WhyEpoxyFloorsFailPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: "Why Epoxy Floors Fail — Peeling, Bubbling & Hot-Tire Pickup",
            description: SHORT_ANSWER,
            url: `${site.url}/why-epoxy-floors-fail`,
          }),
          faqSchema(faqs),
          speakableSchema([".speakable"]),
          breadcrumbSchema(crumbs),
        ]}
      />

      <PageHero
        eyebrow="Diagnostic Guide"
        title={
          <>
            Why epoxy floors <span className="text-gradient">fail</span>
          </>
        }
        sub="Peeling, bubbling, yellowing, lifting where you park. Find your symptom below, learn what actually caused it, and see whether it can be saved."
        breadcrumbs={crumbs}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/quote" variant="primary" icon="bolt">
            Free Failure Assessment
          </Button>
          <Button href={`tel:${site.phoneHref}`} variant="ghost" icon="phone">
            {site.phoneDisplay}
          </Button>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-2xl">
            <div className="rounded-2xl border-l-4 border-aqua-500 bg-aqua-50 p-6">
              <div className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-aqua-700">
                <Icon.bolt className="h-4 w-4" /> The short answer
              </div>
              <p className="speakable text-lg font-medium leading-relaxed text-navy-800">{SHORT_ANSWER}</p>
            </div>

            <p className="mt-7 text-lg leading-relaxed text-muted">
              We get called to failed floors constantly, and it is almost never because the
              homeowner did something wrong. It is because the part of the job that decides
              whether a floor lasts twenty years or two — the preparation — is invisible once
              the coating is down, which makes it the easiest place for a cheap quote to save
              money.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Below is how we diagnose a floor on site. Match your symptom, and you will know
              roughly what happened and what it takes to put right before anyone quotes you.
              Two of the eight are cheap fixes, and one is not a failure at all.
            </p>
          </div>

          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="card overflow-hidden p-5">
              <Image
                src={featured.process.src}
                alt="Epoxy being poured onto a mechanically prepared concrete slab"
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
              <div className="mt-5">
                <div className="mb-1 flex items-center gap-2 text-navy-800">
                  <Icon.shield className="h-5 w-5 text-aqua-600" />
                  <span className="font-extrabold">Free failure assessment</span>
                </div>
                <p className="mb-3 text-sm text-muted">
                  Send us a photo or we&apos;ll come look. We&apos;ll tell you what failed and whether it
                  needs a recoat or a rebuild.
                </p>
                <QuoteForm compact source="why-floors-fail" />
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* the diagnostic list */}
      <Section className="bg-navy-50/40">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Find Your Symptom</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-900">Eight ways an epoxy floor fails</h2>
          <p className="mt-3 text-muted">
            Ordered roughly by how often we see them in North Jersey.
          </p>
        </div>

        <div className="mt-12 grid gap-6">
          {failureModes.map((f, i) => (
            <article key={f.slug} id={f.slug} className="card scroll-mt-28 p-7 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-sm font-black text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold leading-snug text-navy-900">
                      &ldquo;{f.symptom}&rdquo;
                    </h3>
                    <p className="mt-1.5 font-semibold text-aqua-700">{f.verdict}</p>
                  </div>
                </div>
                <span
                  className={`shrink-0 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide ${severityStyle[f.severity]}`}
                >
                  {f.severity}
                </span>
              </div>

              <ul className="mt-6 grid gap-3 md:pl-13">
                {f.cause.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua-400" />
                    <span className="text-[15px] leading-relaxed text-navy-700">{c}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border border-navy-50 bg-navy-50/50 p-5 md:ml-13">
                <div className="mb-1.5 flex items-center gap-2 text-sm font-bold text-navy-800">
                  <Icon.check className="h-4 w-4 text-aqua-600" /> How it gets put right
                </div>
                <p className="text-[15px] leading-relaxed text-navy-700">{f.fix}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* the prevention argument */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Preventing All Of It</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-900">
            Three questions that predict whether a floor lasts
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Every failure on this page traces back to one of three decisions made before the
            first coat went down. Ask any contractor these — including us — and compare the
            answers rather than the prices.
          </p>

          <div className="mt-8 grid gap-5">
            {[
              {
                q: "Do you diamond-grind, or acid-etch?",
                a: "Grinding mechanically opens the concrete so the coating keys into it. Etching is a chemical roughening that leaves residue behind and does not open the pore structure. This one question predicts the most common failure on this page, and it is the reason we grind every floor with no exceptions.",
              },
              {
                q: "What did the moisture test read?",
                a: "If a contractor cannot answer this, they did not run one. A calcium chloride or relative-humidity test tells you whether the slab needs a vapor-mitigating primer. Slabs poured before the 1980s usually have no vapor barrier under them, and unmitigated vapor is what pushes a coating off from beneath.",
              },
              {
                q: "Is the topcoat aliphatic?",
                a: "Aliphatic polyaspartic and urethane topcoats are UV-stable and will not amber. Cheaper aromatic polyureas are sold as fast topcoats and yellow within a couple of years in any garage with a glass door or a sunny opening. It is a straight yes-or-no question with a real cost attached.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-aqua-100 bg-aqua-50 p-6">
                <h3 className="font-extrabold text-navy-900">{item.q}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-700">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-navy-50/60 p-6">
            <p className="text-navy-700">
              More on the tradeoffs in our{" "}
              <Link href="/cost/diy-epoxy-kit-vs-professional" className="font-bold text-aqua-700 underline">
                DIY kit vs. professional guide
              </Link>
              ,{" "}
              <Link href="/cost/epoxy-vs-polyaspartic" className="font-bold text-aqua-700 underline">
                epoxy vs. polyaspartic
              </Link>
              , and{" "}
              <Link href="/cost/epoxy-over-painted-garage-floor" className="font-bold text-aqua-700 underline">
                coating over a painted floor
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-navy-50/40">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Common Questions</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-900">Failed floors — answered</h2>
        </div>
        <div className="mt-10">
          <FAQ items={faqs} />
        </div>
      </Section>

      <CTABand
        title="Send us a photo of the floor"
        sub="Failure assessments are free. We'll tell you what caused it, whether it can be recoated or has to come off, and what each option costs — including when the answer is that you don't need us."
      />
    </>
  );
}
