/**
 * Cost guides — the featured-snippet / People-Also-Ask capture hub.
 * Each answers a real PAA question from the NJ epoxy SERPs with a
 * direct, NJ-specific answer (position-zero bait) + a price table.
 */

export type CostGuide = {
  slug: string;
  question: string; // exact PAA phrasing — the H1
  shortAnswer: string; // the snippet-bait first paragraph (40–60 words, direct)
  intro: string;
  factors: string[];
  table?: { label: string; range: string }[];
  relatedService?: string; // service slug to CTA into
  keywords: string[];
};

export const costGuides: CostGuide[] = [
  {
    slug: "epoxy-flooring-cost-nj",
    question: "How Much Does Epoxy Flooring Cost in NJ?",
    shortAnswer:
      "In New Jersey, professionally installed epoxy flooring typically costs $3–8 per square foot for residential garages and basements, and $4–10 per square foot for commercial and industrial systems. A standard 2-car garage (about 400 sq ft) runs $1,200–$3,200 installed, including diamond grinding and surface preparation.",
    intro:
      "If you've searched for a price and gotten a vague 'it depends,' here's a straight New Jersey answer — what North Jersey homeowners and businesses actually pay, and what moves the number up or down.",
    factors: [
      "System choice — solid color, full flake, or metallic",
      "Slab condition: cracks, spalls, old coatings to remove",
      "Moisture levels (basements may need a mitigating primer)",
      "Square footage — larger floors cost less per foot",
    ],
    table: [
      { label: "Solid-color epoxy", range: "$3 – $5 / sq ft" },
      { label: "Full-broadcast flake system", range: "$4 – $8 / sq ft" },
      { label: "Metallic / designer epoxy", range: "$7 – $12 / sq ft" },
      { label: "Typical 2-car garage (≈400 sq ft)", range: "$1,200 – $3,200" },
    ],
    relatedService: "garage-epoxy-flooring",
    keywords: ["epoxy flooring cost nj", "how much does epoxy flooring cost", "epoxy floor price new jersey"],
  },
  {
    slug: "garage-floor-epoxy-cost",
    question: "How Much Does It Cost to Epoxy a Garage Floor?",
    shortAnswer:
      "Epoxying a garage floor in North Jersey costs $1,200–$3,200 for a typical 2-car garage, or $3–8 per square foot installed. The price includes diamond grinding, crack repair, a 100% solids epoxy base with your choice of color or flake, and a chemical-resistant topcoat rated for hot tires.",
    intro:
      "The garage is the most popular epoxy project in New Jersey — here's exactly what it costs by garage size, and why professional installation outlasts a DIY kit by a decade or more.",
    factors: [
      "Garage size — 1-car, 2-car, or 3+ car",
      "Finish level: solid color vs. full flake vs. metallic",
      "Concrete condition — repairs are quoted up front",
      "Steps, aprons & stem walls if you want them coated to match",
    ],
    table: [
      { label: "1-car garage (≈250 sq ft)", range: "$800 – $2,000" },
      { label: "2-car garage (≈400 sq ft)", range: "$1,200 – $3,200" },
      { label: "3-car garage (≈600+ sq ft)", range: "$1,900 – $4,800" },
      { label: "Metallic upgrade", range: "+$2 – $4 / sq ft" },
    ],
    relatedService: "garage-epoxy-flooring",
    keywords: ["garage floor epoxy cost", "cost to epoxy 2 car garage", "garage epoxy price nj"],
  },
  {
    slug: "epoxy-vs-polyaspartic",
    question: "Epoxy vs. Polyaspartic Floor Coating — Which Is Better?",
    shortAnswer:
      "Epoxy and polyaspartic aren't competitors — the best floors use both. Epoxy is the stronger, thicker base that bonds to concrete; polyaspartic is the UV-stable, fast-curing topcoat that resists hot tires and yellowing. A hybrid system — epoxy base, polyaspartic topcoat — delivers the best durability for New Jersey garages.",
    intro:
      "'One-day polyaspartic floors' are heavily advertised, so buyers ask us this constantly. Here's the honest breakdown of what each chemistry does well — and why we usually spec them together.",
    factors: [
      "Epoxy: thicker build, stronger concrete bond, best value per mil",
      "Polyaspartic: UV-stable (no yellowing), cures in hours, flexible in cold",
      "One-day floors trade thickness for speed — fine sometimes, not always",
      "Hybrid epoxy base + polyaspartic topcoat = the best of both",
    ],
    table: [
      { label: "Epoxy base + urethane topcoat", range: "$3 – $6 / sq ft" },
      { label: "Epoxy base + polyaspartic topcoat", range: "$4 – $8 / sq ft" },
      { label: "Full polyaspartic (1-day) system", range: "$5 – $9 / sq ft" },
    ],
    relatedService: "garage-epoxy-flooring",
    keywords: ["epoxy vs polyaspartic", "polyaspartic floor coating nj", "polyaspartic vs epoxy garage floor"],
  },
  {
    slug: "how-long-does-epoxy-flooring-last",
    question: "How Long Does Epoxy Flooring Last?",
    shortAnswer:
      "Professionally installed epoxy flooring lasts 15–20 years in a residential garage and 10–15 years in high-traffic commercial spaces before needing a topcoat refresh. The single biggest factor is surface preparation — floors installed over diamond-ground concrete last several times longer than roll-on kits over bare slab.",
    intro:
      "Longevity is where professional epoxy earns its price. Here's what determines an epoxy floor's lifespan in New Jersey conditions — and what our lifetime adhesion warranty covers.",
    factors: [
      "Surface prep: diamond grinding vs. acid etch vs. nothing",
      "System thickness — 100% solids vs. water-based kits",
      "Topcoat quality (urethane / polyaspartic wear layer)",
      "Traffic: daily parking vs. forklifts vs. foot traffic",
    ],
    table: [
      { label: "DIY box-store kit", range: "1 – 3 years" },
      { label: "Professional residential system", range: "15 – 20 years" },
      { label: "Commercial system (high traffic)", range: "10 – 15 years" },
      { label: "Adhesion (peeling/delamination)", range: "Lifetime warranty" },
    ],
    relatedService: "garage-epoxy-flooring",
    keywords: ["how long does epoxy flooring last", "epoxy floor lifespan", "does epoxy flooring wear out"],
  },
  {
    slug: "is-epoxy-flooring-worth-it",
    question: "Is Epoxy Flooring Worth It?",
    shortAnswer:
      "For a concrete floor you use every day, yes — epoxy is one of the highest-value finishes per dollar. At $3–8 per square foot it costs less than tile, seals concrete against New Jersey road salt and oil permanently, cleans with a mop, and adds finished, showroom-quality square footage to your home.",
    intro:
      "Fair question for any four-figure home project. Here's the honest value math North Jersey homeowners run — including when epoxy is NOT the right answer.",
    factors: [
      "Cheaper installed than porcelain tile — with no grout to fail",
      "Seals concrete against salt, oil & moisture damage permanently",
      "Effectively finishes a garage or basement as usable square footage",
      "Not right for: badly heaving slabs, or active liquid-water basements (fix drainage first — we'll tell you)",
    ],
    relatedService: "garage-epoxy-flooring",
    keywords: ["is epoxy flooring worth it", "epoxy floor pros and cons", "should i epoxy my garage floor"],
  },
  {
    slug: "epoxy-over-cracked-concrete",
    question: "Can You Epoxy Over Cracked Concrete?",
    shortAnswer:
      "Yes — cracked concrete is normal and repairable. We diamond-grind the slab, rout and fill cracks with structural epoxy filler, patch spalls, and level imperfections before coating. Hairline and shrinkage cracks disappear entirely; only actively moving structural cracks need honest evaluation before a coating makes sense.",
    intro:
      "Almost every North Jersey slab we see has cracks — freeze-thaw guarantees it. Here's how repair actually works and what's included in every quote.",
    factors: [
      "Hairline / shrinkage cracks: routed, filled & invisible under flake",
      "Spalls and salt pitting: patched with epoxy mortar",
      "Control joints: honored or filled based on your preference",
      "Actively moving structural cracks: flagged honestly before we coat",
    ],
    relatedService: "garage-epoxy-flooring",
    keywords: ["epoxy over cracked concrete", "can you epoxy a cracked garage floor", "concrete crack repair epoxy"],
  },
];

export const costBySlug = (slug: string) => costGuides.find((c) => c.slug === slug);
export const costSlugs = costGuides.map((c) => c.slug);
