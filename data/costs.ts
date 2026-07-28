/**
 * Cost guides & buyer's guides — the featured-snippet / People-Also-Ask
 * capture hub. Each answers a real PAA question from the NJ epoxy SERPs with
 * a direct, NJ-specific answer (position-zero bait) + a price or comparison
 * table where one helps.
 *
 * `category` splits the hub into commercial-intent pricing pages and
 * informational buyer's guides — same URL space, separate sections on /cost,
 * so the pricing cluster doesn't get diluted by the research cluster.
 */

export type CostGuide = {
  slug: string;
  category: "price" | "guide";
  question: string; // exact PAA phrasing — the H1
  shortAnswer: string; // the snippet-bait first paragraph (40–60 words, direct)
  intro: string;
  factors: string[];
  table?: { label: string; range: string }[];
  /** optional second column header when the table isn't about price */
  tableHeads?: [string, string];
  relatedService?: string; // service slug to CTA into
  keywords: string[];
};

export const costGuides: CostGuide[] = [
  {
    slug: "epoxy-flooring-cost-nj",
    category: "price",
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
    category: "price",
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
    category: "guide",
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
    category: "guide",
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
    category: "guide",
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
    category: "guide",
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

  /* ── Commercial pricing ─────────────────────────────────────────── */
  {
    slug: "commercial-epoxy-flooring-cost-nj",
    category: "price",
    question: "How Much Does Commercial Epoxy Flooring Cost in NJ?",
    shortAnswer:
      "Commercial epoxy flooring in New Jersey runs $4–10 per square foot installed, and industrial urethane mortar systems $8–15. A 2,000 sq ft retail or showroom floor typically lands between $9,000 and $16,000, including removal of existing VCT or tile, diamond grinding, and after-hours installation so you never close during business hours.",
    intro:
      "Commercial quotes vary far more than residential ones, and the reason is almost always what's already on the floor. Here's how North Jersey commercial pricing actually breaks down, and which line items are worth questioning.",
    factors: [
      "Existing floor removal — VCT, adhesive, tile mortar and old coatings all come off mechanically",
      "System spec: standard epoxy, high-build, ESD, or urethane mortar for washdown",
      "After-hours, overnight and phased scheduling to avoid downtime",
      "Extras that are usually worth it: line striping, walkway definition, logo inlays, integral cove base",
      "Square footage — a 10,000 sq ft warehouse prices very differently per foot than a 900 sq ft salon",
    ],
    table: [
      { label: "Retail / office / showroom epoxy", range: "$4 – $8 / sq ft" },
      { label: "Warehouse & industrial high-build", range: "$5 – $10 / sq ft" },
      { label: "Urethane mortar (kitchens, washdown)", range: "$8 – $15 / sq ft" },
      { label: "ESD / static-dissipative systems", range: "$9 – $16 / sq ft" },
      { label: "Typical 2,000 sq ft retail floor", range: "$9,000 – $16,000" },
    ],
    relatedService: "commercial-epoxy-flooring",
    keywords: [
      "commercial epoxy flooring cost nj",
      "warehouse epoxy floor cost new jersey",
      "commercial epoxy price per square foot",
      "industrial floor coating cost nj",
    ],
  },

  /* ── Seasonal ───────────────────────────────────────────────────── */
  {
    slug: "epoxy-flooring-in-winter-nj",
    category: "guide",
    question: "Can You Install Epoxy Flooring in Winter in NJ?",
    shortAnswer:
      "Yes — but not with standard epoxy in an unheated space. Epoxy effectively stops curing below about 55°F, so New Jersey winter installs are done either in a heated garage or with a polyaspartic system, which keeps curing down near 0°F. Winter is also the easiest time to get on a contractor's schedule.",
    intro:
      "Most North Jersey homeowners assume floor coating is a spring job and wait five months for no reason. Here's what actually changes in the cold, and when waiting is genuinely the right call.",
    factors: [
      "Epoxy needs roughly 55°F+ slab temperature to cure to spec — below that it stays soft and under-cured",
      "Polyaspartic keeps curing near 0°F, which is why it's our default November–March system",
      "Slab temperature matters more than air temperature — concrete lags the weather by days",
      "Dew point matters too: coating a cold slab in humid air risks condensation under the film",
      "The real winter advantage: shorter lead times, and the garage is emptier anyway",
    ],
    table: [
      { label: "Heated garage, any system", range: "Install any time" },
      { label: "Unheated garage, polyaspartic", range: "Down to ≈0°F" },
      { label: "Unheated garage, standard epoxy", range: "Wait for 55°F+" },
      { label: "Typical winter lead time", range: "Shorter than spring" },
    ],
    relatedService: "polyaspartic-floor-coating",
    keywords: [
      "epoxy flooring in winter nj",
      "can you epoxy a garage floor in cold weather",
      "winter garage floor coating new jersey",
      "epoxy temperature requirements",
    ],
  },

  /* ── Comparison ─────────────────────────────────────────────────── */
  {
    slug: "epoxy-vs-tile-vs-mats",
    category: "guide",
    question: "Epoxy vs. Tile vs. Garage Floor Mats — Which Is Best?",
    shortAnswer:
      "For a New Jersey garage, epoxy wins on cost, durability and maintenance. Interlocking tiles and roll-out mats are cheaper up front and removable, but they trap salt, water and grit underneath — which keeps damaging the concrete you were trying to protect. Epoxy bonds to the slab and seals it permanently.",
    intro:
      "These are the three real options for a garage floor, and the honest comparison depends on one question: do you want to protect the concrete, or just cover it?",
    factors: [
      "Epoxy: bonded and sealed — nothing gets underneath it, and the slab is genuinely protected",
      "Interlocking tiles: fast, DIY-friendly, removable — but seams let salt water through to the slab",
      "Roll-out mats: cheapest and fully reversible — the right call in a rental, and only there",
      "Moisture is the tiebreaker: anything laid loose over concrete traps what comes up through it",
      "Resale: a coated floor reads as a finished space; mats read as a temporary fix",
    ],
    tableHeads: ["Option", "Typical cost & lifespan"],
    table: [
      { label: "Professional epoxy / polyaspartic", range: "$3–8 / sq ft · 15–20 yrs" },
      { label: "Interlocking PVC tiles", range: "$2–5 / sq ft · 5–10 yrs" },
      { label: "Roll-out vinyl mats", range: "$1–3 / sq ft · 3–7 yrs" },
      { label: "Porcelain tile over concrete", range: "$10–20 / sq ft · grout fails first" },
    ],
    relatedService: "garage-epoxy-flooring",
    keywords: [
      "epoxy vs garage floor tiles",
      "epoxy vs garage mats",
      "best garage floor covering nj",
      "garage floor tiles vs epoxy coating",
    ],
  },

  /* ── Substrate question ─────────────────────────────────────────── */
  {
    slug: "epoxy-over-painted-garage-floor",
    category: "guide",
    question: "Can You Epoxy Over a Painted Garage Floor?",
    shortAnswer:
      "Not over it — through it. Existing garage paint has to be removed completely before a new coating goes down, because epoxy bonds to concrete, not to paint. Diamond grinding takes off the paint, the sealer beneath it, and the weak surface layer of the slab in a single pass. On most garages it adds no cost beyond normal prep.",
    intro:
      "This is the single most common question we get from buyers of older North Jersey homes, and the answer people are hoping for — 'just go over it' — is the answer that guarantees the new floor fails.",
    factors: [
      "Epoxy is only as strong as what it's stuck to — coating over paint means your floor is held on by the paint",
      "Diamond grinding removes paint, sealer and laitance together; a separate stripping step is rarely needed",
      "Pre-1978 homes: paint may contain lead, which changes the containment and disposal requirements",
      "Thick, well-bonded industrial coatings occasionally get shot-blasted instead of ground",
      "What we won't do: 'scuff and recoat' over paint, no matter how good it looks today",
    ],
    relatedService: "garage-epoxy-flooring",
    keywords: [
      "epoxy over painted garage floor",
      "can you epoxy over paint",
      "remove garage floor paint before epoxy",
      "epoxy over existing coating",
    ],
  },

  /* ── Maintenance ────────────────────────────────────────────────── */
  {
    slug: "how-to-maintain-an-epoxy-floor",
    category: "guide",
    question: "How Do You Clean and Maintain an Epoxy Floor?",
    shortAnswer:
      "Sweep or dust-mop weekly, and damp-mop with warm water and a pH-neutral cleaner as needed — that's the whole routine. Never use vinegar, citrus or acid-based cleaners, which dull the topcoat over time, and skip steel wool or abrasive pads. A properly installed North Jersey garage floor needs nothing else for 15–20 years.",
    intro:
      "Epoxy's biggest practical advantage is how little it asks of you. Here's the honest maintenance routine — and the three things people do that actually shorten a floor's life.",
    factors: [
      "Weekly: dust-mop or soft-bristle sweep — grit underfoot is the main source of micro-scratching",
      "As needed: warm water and a pH-neutral cleaner; a squeegee makes winter slush a two-minute job",
      "Avoid: vinegar, citrus, and acidic cleaners — they gradually dull the topcoat",
      "Avoid: steel wool, abrasive pads, and soap-based cleaners that leave a slippery film",
      "Every 5–10 years in heavy traffic: a clear topcoat refresh restores the gloss without redoing the floor",
    ],
    tableHeads: ["Task", "How often"],
    table: [
      { label: "Dust-mop or sweep", range: "Weekly" },
      { label: "Damp-mop, pH-neutral cleaner", range: "Monthly or as needed" },
      { label: "Squeegee winter salt & slush", range: "After heavy snow" },
      { label: "Clear topcoat refresh (commercial)", range: "Every 5–10 years" },
    ],
    relatedService: "garage-epoxy-flooring",
    keywords: [
      "how to clean epoxy floor",
      "epoxy floor maintenance",
      "best cleaner for epoxy garage floor",
      "epoxy floor care",
    ],
  },

  /* ── Timeline ───────────────────────────────────────────────────── */
  {
    slug: "how-long-does-epoxy-installation-take",
    category: "guide",
    question: "How Long Does It Take to Install an Epoxy Floor?",
    shortAnswer:
      "A standard 2-car garage takes 2–3 days with an epoxy system, or a single working day with polyaspartic. You can walk on an epoxy floor about 24 hours after the final coat and park on it after 72; a polyaspartic floor is walkable the same evening and takes vehicles in roughly 24 hours.",
    intro:
      "Timeline drives more decisions than price does — especially if the garage is where two cars live. Here's the real schedule for each system, and what actually causes a job to run long.",
    factors: [
      "Day one is always prep: diamond grinding, crack routing, spall repair, moisture testing",
      "Epoxy needs 12–24 hours between coats; polyaspartic needs 1–2, which is the whole difference",
      "Cure ≠ dry: walkable in 24 hours, drivable in 72 for a standard epoxy build",
      "What causes overruns: unexpected crack and spall repair, old coatings, high moisture readings",
      "Commercial floors are phased or done over a weekend, so the space rarely loses a trading day",
    ],
    tableHeads: ["System", "On site → back in service"],
    table: [
      { label: "Full polyaspartic (1-day)", range: "1 day · drive in ≈24 hrs" },
      { label: "Epoxy base + polyaspartic topcoat", range: "2 days · drive in ≈48 hrs" },
      { label: "Full epoxy + urethane topcoat", range: "2–3 days · drive in 72 hrs" },
      { label: "Commercial retail floor", range: "Fri close → Mon open" },
    ],
    relatedService: "polyaspartic-floor-coating",
    keywords: [
      "how long does epoxy flooring take",
      "epoxy garage floor installation time",
      "how long before you can park on epoxy",
      "epoxy floor cure time",
    ],
  },

  /* ── DIY comparison ─────────────────────────────────────────────── */
  {
    slug: "diy-epoxy-kit-vs-professional",
    category: "guide",
    question: "Is a DIY Epoxy Kit Worth It, or Should You Hire a Pro?",
    shortAnswer:
      "A $150 box-store kit lasts 1–3 years in a New Jersey garage; a professionally installed system lasts 15–20. The difference isn't the epoxy — it's the preparation. Kits rely on acid etching, which doesn't open concrete the way diamond grinding does, and they're typically 50% solids water-based product versus 100% solids.",
    intro:
      "We get called to fix failed DIY floors constantly, and it's almost never because the homeowner did a sloppy job. It's because the kit can't include the two things that actually matter.",
    factors: [
      "Prep: kits etch with acid; professionals diamond-grind to open, bare concrete. This is the whole ballgame",
      "Product: most kits are ~50% solids water-based; we install 100% solids at several times the film thickness",
      "Moisture: no kit tells you to test the slab, and vapor drive is what pushes coatings off from beneath",
      "Removal cost: a failed DIY floor has to be ground off before it can be redone — you pay for prep twice",
      "When DIY genuinely makes sense: a shed, a workshop you don't mind redoing, or a floor you're testing a color on",
    ],
    tableHeads: ["Approach", "Cost & realistic lifespan"],
    table: [
      { label: "Box-store DIY kit (2-car)", range: "$150 – $400 · 1–3 yrs" },
      { label: "Premium DIY kit + rented grinder", range: "$600 – $1,000 · 3–7 yrs" },
      { label: "Professional epoxy system", range: "$1,200 – $3,200 · 15–20 yrs" },
      { label: "Grinding off a failed DIY floor", range: "$1 – $2 / sq ft added" },
    ],
    relatedService: "garage-epoxy-flooring",
    keywords: [
      "diy epoxy vs professional",
      "are epoxy kits worth it",
      "rustoleum garage floor kit review",
      "why did my diy epoxy floor peel",
    ],
  },
];

export const costBySlug = (slug: string) => costGuides.find((c) => c.slug === slug);
export const costSlugs = costGuides.map((c) => c.slug);

/** The two clusters, for the /cost hub and for related-links that stay on topic. */
export const priceGuides = costGuides.filter((c) => c.category === "price");
export const buyerGuides = costGuides.filter((c) => c.category === "guide");
