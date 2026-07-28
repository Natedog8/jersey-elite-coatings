/**
 * Services — each drives a /services/[slug] page, the nav mega-menu, the
 * home grid, town×service combos, and Service JSON-LD. Copy + keyword
 * targeting follow the "[service] + north jersey / [town] nj" long-tail
 * pattern from the local SEO playbook.
 */

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: string; // key into lib/icons
  /** photo used on cards + service page hero (public/photos/…) */
  photo: string;
  priceFrom: number;
  priceUnit: string;
  tagline: string;
  /** H1 / hero promise */
  hero: string;
  /** 2–3 sentence intro (SEO body, ~commercial intent) */
  intro: string;
  /** the buyer's pain we remove */
  problem: string;
  /** what's included — bullet proof of thoroughness */
  includes: string[];
  /** spaces / floor types this service covers */
  surfaces: string[];
  /** seasonal / local NJ angle */
  localNote: string;
  /** primary keyword cluster for metadata */
  keywords: string[];
  faq: { q: string; a: string }[];
  popular?: boolean;
  /** long-form authoritative body — the SEO "pillar" article rendered on the
   *  service page. Each section is an H2 + paragraphs. */
  pillar?: { h: string; p: string[] }[];
};

export const services: Service[] = [
  /* ── 1. Garage epoxy — the flagship residential service ─────────── */
  {
    slug: "garage-epoxy-flooring",
    name: "Garage Epoxy Flooring",
    shortName: "Garage Epoxy",
    icon: "home",
    photo: "/photos/red-flake-garage-epoxy-newark-nj.webp",
    priceFrom: 3,
    priceUnit: "per sq ft",
    tagline: "Turn your garage into a showroom that shrugs off tires, salt & spills",
    hero: "Garage Epoxy Flooring That Makes North Jersey Garages Look Like Showrooms",
    intro:
      "Your garage floor takes the worst New Jersey throws at it — road salt, snow melt, oil drips, hot tires. Our 100% solids epoxy and polyaspartic systems seal the concrete under a seamless, high-gloss surface that wipes clean and stays beautiful for decades.",
    problem:
      "Dusty, pitted, oil-stained concrete that tracks grime into the house and makes even a tidy garage feel like a basement.",
    includes: [
      "Diamond grinding — the full-prep step most installers skip",
      "Crack and spall repair before any coating goes down",
      "Moisture testing so the system matches your slab",
      "100% solids epoxy base with your choice of color or flake",
      "Chemical-resistant topcoat rated for hot-tire pickup",
      "Lifetime warranty against peeling & delamination",
    ],
    surfaces: ["2-car garages", "3+ car garages", "Detached garages", "Carriage houses", "Workshops", "Sheds"],
    localNote:
      "North Jersey winters are the real test — road salt and snow melt destroy bare concrete. A properly prepped epoxy floor seals the slab against both, and makes January slush a squeegee job instead of a stain.",
    keywords: [
      "garage epoxy flooring north jersey",
      "garage floor coating nj",
      "epoxy garage floor near me",
      "garage floor epoxy newark nj",
      "polyaspartic garage floor nj",
    ],
    popular: true,
    faq: [
      {
        q: "How much does garage epoxy flooring cost in North Jersey?",
        a: "Most garage epoxy projects run $3–8 per square foot depending on the system — solid color, full-flake, or metallic — and how much prep the slab needs. A typical 2-car garage (about 400 sq ft) lands between $1,200 and $3,200 including surface preparation. Every quote is free and itemized.",
      },
      {
        q: "How long before I can park on my new epoxy floor?",
        a: "You can walk on it in about 24 hours and drive on it after 72 hours. Most residential garages are a 2–3 day project: day one is grinding and repair, day two is the base coat and flake, day three is the topcoat.",
      },
      {
        q: "Will epoxy peel up from hot tires?",
        a: "Cheap DIY kits peel because they're water-based paint over unprepped concrete. We diamond-grind every floor and use 100% solids epoxy with a hot-tire-rated topcoat — and back it with a lifetime warranty against peeling and delamination.",
      },
    ],
    pillar: [
      {
        h: "Why North Jersey garages need more than paint",
        p: [
          "A garage floor in Essex or Bergen County lives a hard life. Every winter it's fed a steady diet of road salt, brine, and snow melt dragged in on your tires. Salt doesn't just stain concrete — it soaks in, refreezes, and pops the surface apart in little craters called spalls. Add oil drips, hot-tire pickup in July, and the dust that bare concrete constantly sheds, and you get the tired, gray floor most homeowners just live with.",
          "Epoxy coating solves all of it at once. A properly installed system seals the slab so salt and oil sit on top of the coating instead of soaking in, gives you a glass-smooth surface that pushes clean with a squeegee, and brightens the whole space — most customers tell us their garage lighting suddenly seems twice as bright, because the floor is finally reflecting it.",
        ],
      },
      {
        h: "Preparation is the whole game",
        p: [
          "Nearly every failed epoxy floor we're called to fix has the same root cause: no mechanical prep. Epoxy doesn't stick to smooth, sealed, or dirty concrete — it needs an open, textured surface to grip. That's why we diamond-grind every floor we coat, no exceptions. Grinding removes old sealers and laitance, opens the pores of the concrete, and levels minor imperfections.",
          "After grinding we repair cracks and spalls with epoxy filler, test the slab for moisture, and only then mix the first coat. It's more work than the roll-and-go kits — and it's the reason we can put a lifetime warranty on adhesion.",
        ],
      },
      {
        h: "Pick your system: solid, flake, or metallic",
        p: [
          "Solid-color epoxy gives you a clean, uniform commercial look and the lowest price point. Full-broadcast flake is the North Jersey favorite — vinyl chips in your choice of blend give the floor texture, hide dust and small imperfections, and add slip resistance. Metallic epoxy is the showpiece: mica pigments moved through clear epoxy create a one-of-a-kind marbled finish that looks more like polished stone than a garage floor.",
          "Whichever you choose, the topcoat matters as much as the color. We finish garages in a chemical-resistant polyaspartic or urethane topcoat rated for hot-tire pickup, gasoline, and salt — the layer that keeps the floor looking new year after year.",
        ],
      },
    ],
  },

  /* ── 2. Polyaspartic / 1-day coatings ───────────────────────────── */
  {
    slug: "polyaspartic-floor-coating",
    name: "Polyaspartic 1-Day Floor Coatings",
    shortName: "1-Day Polyaspartic",
    icon: "bolt",
    photo: "/photos/garage-floor-coating-nj.webp",
    priceFrom: 5,
    priceUnit: "per sq ft",
    tagline: "Ground in the morning, parked on by the weekend — without cutting corners",
    hero: "1-Day Polyaspartic Floor Coating in North Jersey",
    intro:
      "Polyaspartic is a fast-curing, UV-stable cousin of polyurethane that goes down in hours instead of days. Done properly it gives you a garage floor that's walkable the same evening and ready for tires in about 24 hours — with better cold-weather performance and zero yellowing compared to epoxy alone.",
    problem:
      "You need the floor back fast — a car with nowhere else to live, a shop that can't close for three days — but every 'one-day floor' ad sounds too good to be true.",
    includes: [
      "Diamond grinding — same full prep, compressed schedule",
      "Crack and spall repair with fast-set polyurea filler",
      "Moisture testing before a drop of product is mixed",
      "Polyaspartic base coat with full-broadcast flake",
      "UV-stable polyaspartic topcoat — will not amber or yellow",
      "Lifetime warranty against peeling & delamination",
    ],
    surfaces: ["Garages", "Basements", "Patios & porches", "Auto shops", "Retail floors", "Commercial kitchens"],
    localNote:
      "Polyaspartic keeps curing in the cold, which matters in North Jersey. Standard epoxy stalls below about 55°F, so from November through March a polyaspartic system is often the only way to get an unheated garage coated at all.",
    keywords: [
      "polyaspartic floor coating nj",
      "1 day garage floor coating north jersey",
      "one day epoxy garage floor nj",
      "polyaspartic garage floor new jersey",
      "polyurea garage floor coating nj",
    ],
    popular: true,
    faq: [
      {
        q: "Is a 1-day floor coating actually as good as epoxy?",
        a: "For the wear layer, polyaspartic is better — it's UV-stable, more flexible in cold, and more abrasion-resistant than epoxy. What it gives up is film thickness per coat, which is why we still spec an epoxy base on floors that need build. On a sound residential slab, a full polyaspartic system is the stronger floor and it's done in a day.",
      },
      {
        q: "How is it done in one day when epoxy takes three?",
        a: "Chemistry, not shortcuts. Polyaspartic cures in 1–2 hours per coat instead of 12–24, so grinding, base coat, flake broadcast and topcoat all fit inside a single working day. The prep is identical to our epoxy installs — anyone offering a one-day floor without diamond grinding is skipping the part that matters.",
      },
      {
        q: "When can I park on a 1-day polyaspartic floor?",
        a: "You can walk on it the same evening, usually 4–6 hours after the topcoat. Vehicle traffic is safe after about 24 hours — versus 72 hours for a conventional epoxy build. That's the whole reason people choose it.",
      },
      {
        q: "Can you install polyaspartic in an unheated garage in winter?",
        a: "Yes, and it's the main reason we carry it. Polyaspartic keeps curing down to roughly 0°F, where epoxy stops setting properly below about 55°F. From November through March, polyaspartic is what lets us keep installing North Jersey garages that have no heat.",
      },
    ],
    pillar: [
      {
        h: "What polyaspartic actually is",
        p: [
          "Polyaspartic is a polyurea — an aliphatic ester chemistry developed in the 1990s to protect steel bridges from corrosion, then adapted to concrete floors. The property that makes it valuable is cure speed: the reaction can be tuned so a coat sets in one to two hours instead of the twelve to twenty-four an epoxy needs. Stack four fast coats and a floor that used to take three days fits inside one.",
          "Two other properties matter as much for New Jersey. It's aliphatic, meaning UV-stable — it will never amber or yellow the way an epoxy topcoat does in a garage with a sunny door. And it stays flexible and keeps curing in the cold, which is why it's the only system we'll put in an unheated garage in February.",
        ],
      },
      {
        h: "The honest tradeoff nobody advertises",
        p: [
          "Polyaspartic goes down thinner per coat than 100% solids epoxy and it costs more per gallon. On a slab that needs real build — a pitted warehouse floor, a garage with heavy spalling, anywhere you want serious millage between the concrete and the world — an epoxy base coat is still the better and cheaper way to get there.",
          "That's why our default recommendation for a residential garage is a hybrid: epoxy base for build and bond, polyaspartic topcoat for UV stability and hot-tire resistance. Full polyaspartic is the right call when speed is the constraint, when it's too cold for epoxy, or when the slab is sound enough that build isn't the issue. We'll tell you which case you're in at the quote — the honest answer is sometimes the cheaper one.",
        ],
      },
      {
        h: "How to shop a one-day floor quote",
        p: [
          "The national franchises advertising one-day floors are selling real chemistry, but the install quality varies enormously by crew. Three questions separate a floor that lasts twenty years from one that peels in two: Do you diamond-grind, or acid-etch? What does the moisture test read? And is the topcoat aliphatic polyaspartic, or a cheaper aromatic polyurea that will yellow?",
          "Acid etching does not open concrete the way mechanical grinding does, and it's the single most common corner cut on speed-sold floors. We grind every slab, every time — the schedule compresses because of the chemistry, not because we skipped the prep. See the full comparison in our [epoxy vs. polyaspartic guide](/cost/epoxy-vs-polyaspartic).",
        ],
      },
    ],
  },

  /* ── 3. Metallic / decorative ───────────────────────────────────── */
  {
    slug: "metallic-epoxy-flooring",
    name: "Metallic & Decorative Epoxy",
    shortName: "Metallic Epoxy",
    icon: "star",
    photo: "/photos/black-metallic-epoxy-garage.webp",
    priceFrom: 7,
    priceUnit: "per sq ft",
    tagline: "One-of-a-kind marbled floors that look like polished stone",
    hero: "Metallic Epoxy Floors — North Jersey's Most Stunning Concrete Finish",
    intro:
      "Metallic epoxy turns a concrete floor into a piece of art. Mica pigments are hand-moved through self-leveling clear epoxy to create depth, movement, and a marbled, three-dimensional finish no two floors ever share. It's the system we install when a space has to impress.",
    problem:
      "A basement, showroom, or garage that's structurally fine but visually boring — and tile or hardwood would cost more and perform worse on concrete.",
    includes: [
      "Diamond grinding and full substrate preparation",
      "Pigmented base coat matched to your color direction",
      "Hand-worked metallic pours — every floor is unique",
      "Effect work: lava flow, marble veining, galaxy blends",
      "High-build clear topcoat for depth and durability",
      "Optional satin or matte finish for interior living areas",
    ],
    surfaces: ["Garages", "Finished basements", "Showrooms", "Retail floors", "Restaurants & bars", "Man caves & studios"],
    localNote:
      "Metallic installs are temperature-sensitive — we schedule and condition North Jersey installs so the epoxy self-levels perfectly even in winter.",
    keywords: [
      "metallic epoxy floor nj",
      "metallic epoxy flooring north jersey",
      "decorative epoxy flooring nj",
      "designer epoxy floor new jersey",
      "marble epoxy floor nj",
    ],
    faq: [
      {
        q: "How much does a metallic epoxy floor cost?",
        a: "Metallic systems typically run $7–12 per square foot installed, depending on the size of the space, the condition of the concrete, and the complexity of the effect. It's the premium tier of epoxy — and still usually less than quality tile once you include installation.",
      },
      {
        q: "Can you do metallic epoxy in a finished basement or living space?",
        a: "Absolutely — it's one of our most popular basement finishes. We offer satin and matte topcoats that tone down the gloss for living areas, and the seamless surface is ideal over concrete slabs where hardwood or laminate risk moisture problems.",
      },
    ],
  },

  /* ── 4. Flake epoxy systems ─────────────────────────────────────── */
  {
    slug: "flake-epoxy-flooring",
    name: "Flake Epoxy Systems",
    shortName: "Flake Epoxy",
    icon: "spray",
    photo: "/photos/flake-epoxy-floor-speckled.webp",
    priceFrom: 4,
    priceUnit: "per sq ft",
    tagline: "Full-broadcast flake — texture, grip & a finish that hides everything",
    hero: "Full-Flake Epoxy Floors Built for Real New Jersey Garages",
    intro:
      "Full-broadcast flake is the workhorse finish of the epoxy world — vinyl color chips broadcast to complete coverage over a pigmented base, locked under a clear chemical-resistant topcoat. The result is granite-like texture that hides dust, adds slip resistance, and takes daily abuse without showing it.",
    problem:
      "Solid floors show every speck of dust and every drip. Flake floors hide daily life — and still look intentional and high-end.",
    includes: [
      "Diamond grinding and crack repair",
      "Pigmented epoxy base coat",
      "Full-broadcast flake in your choice of blend",
      "Scrape and vacuum for an even, seamless texture",
      "Polyaspartic or urethane clear topcoat",
      "Anti-slip additive standard",
    ],
    surfaces: ["Garages", "Basements", "Laundry rooms", "Locker rooms", "Kennels & vet clinics", "Commercial back-of-house"],
    localNote:
      "Flake blends in grays, blues, and earth tones are the North Jersey go-to — they pair with any garage and hide winter grit between cleanings.",
    keywords: [
      "flake epoxy floor nj",
      "epoxy flake garage floor north jersey",
      "chip epoxy floor new jersey",
      "polyaspartic flake floor nj",
    ],
    faq: [
      {
        q: "What's the difference between flake and solid epoxy?",
        a: "A solid-color floor is smooth, uniform epoxy. A flake floor adds vinyl color chips broadcast into the wet base coat, then locks them under a clear topcoat. Flake costs slightly more but adds texture, slip resistance, and camouflage for dust and small imperfections — which is why it's the most popular garage system we install.",
      },
      {
        q: "Is flake epoxy slippery when wet?",
        a: "Less than almost any other hard floor. The flake itself creates texture, and we add anti-slip aggregate to the topcoat as standard — important for North Jersey winters when cars drip snow melt for hours.",
      },
    ],
  },

  /* ── 5. Commercial ──────────────────────────────────────────────── */
  {
    slug: "commercial-epoxy-flooring",
    name: "Commercial Epoxy Flooring",
    shortName: "Commercial Epoxy",
    icon: "building",
    photo: "/photos/commercial-white-epoxy-floor.webp",
    priceFrom: 4,
    priceUnit: "per sq ft",
    tagline: "Seamless, cleanable floors for retail, offices & showrooms",
    hero: "Commercial Epoxy Flooring for North Jersey Businesses",
    intro:
      "Your floor is part of your brand. We install seamless epoxy systems for showrooms, retail spaces, offices, gyms, and salons across North Jersey — floors that stay glossy under foot traffic, clean up with a mop, and never need waxing, stripping, or grout repair again.",
    problem:
      "Cracked VCT, stained grout lines, and floors that need stripping and waxing every quarter just to look presentable.",
    includes: [
      "After-hours and weekend installation to avoid downtime",
      "Diamond grinding and moisture mitigation",
      "High-build epoxy in brand-matched colors",
      "Line striping, walkways, and logo inlays available",
      "Slip-rated topcoats to meet safety requirements",
      "Maintenance program options for high-traffic spaces",
    ],
    surfaces: ["Showrooms", "Retail & salons", "Gyms & fitness studios", "Offices & lobbies", "Auto shops", "Healthcare & labs"],
    localNote:
      "We schedule commercial installs around your hours — most North Jersey storefront floors are done over a weekend, closed Friday night, open Monday morning.",
    keywords: [
      "commercial epoxy flooring nj",
      "commercial epoxy flooring north jersey",
      "epoxy floor contractor commercial nj",
      "showroom epoxy floor new jersey",
      "retail epoxy flooring newark",
    ],
    popular: true,
    faq: [
      {
        q: "How long does a commercial epoxy install take?",
        a: "Most retail and showroom floors are installed over a weekend — we close the space Friday evening and hand it back Monday morning. Larger spaces are phased in sections so you never lose the whole floor at once. Fast-cure polyaspartic systems can compress the schedule further when downtime is critical.",
      },
      {
        q: "Can you match our brand colors?",
        a: "Yes. Epoxy is pigmented, not painted, so we can match brand colors, add logo inlays, define walkways, and stripe safety zones — all sealed under the same seamless topcoat.",
      },
    ],
  },

  /* ── 6. Industrial ──────────────────────────────────────────────── */
  {
    slug: "industrial-epoxy-flooring",
    name: "Industrial Epoxy Flooring",
    shortName: "Industrial Epoxy",
    icon: "shield",
    photo: "/photos/warehouse-epoxy-high-gloss.webp",
    priceFrom: 4,
    priceUnit: "per sq ft",
    tagline: "Heavy-duty systems for warehouses, plants & forklift traffic",
    hero: "Industrial Epoxy Flooring Rated for North Jersey's Toughest Facilities",
    intro:
      "Warehouses, manufacturing plants, and distribution centers need floors engineered, not decorated. Our industrial systems — high-build epoxy, urethane mortar, and ESD options — stand up to forklift traffic, chemical exposure, thermal shock, and point loads while keeping your facility bright and OSHA-compliant.",
    problem:
      "Dusting slabs, spalled joints, and floor failures that shut down lines and create safety write-ups.",
    includes: [
      "Slab assessment, moisture testing & joint evaluation",
      "Diamond grinding or shot blasting to CSP spec",
      "High-build epoxy or urethane mortar systems",
      "Joint repair and refill with semi-rigid filler",
      "Safety striping, aisle marking & 5S layouts",
      "Phased installation around production schedules",
    ],
    surfaces: ["Warehouses", "Manufacturing", "Distribution centers", "Food & beverage", "Cold storage", "Aircraft hangars"],
    localNote:
      "From Port Newark logistics space to Passaic County manufacturing, we build systems around your traffic, chemistry, and washdown requirements — not a one-size quote.",
    keywords: [
      "industrial epoxy flooring nj",
      "warehouse epoxy floor north jersey",
      "industrial floor coating new jersey",
      "urethane mortar flooring nj",
      "esd epoxy flooring nj",
    ],
    faq: [
      {
        q: "Can you install without shutting down our facility?",
        a: "Yes — phased installation is standard for us. We section the floor, work nights and weekends, and use fast-cure systems where turnaround matters. Many facilities never stop receiving while we work.",
      },
      {
        q: "What system is right for a food production floor?",
        a: "Usually urethane mortar (cementitious urethane) — it handles thermal shock from hot washdowns, tolerates organic acids, and meets USDA/FDA requirements. We'll spec it after seeing your washdown process and temperatures.",
      },
    ],
  },

  /* ── 7. Basement ────────────────────────────────────────────────── */
  {
    slug: "basement-epoxy-flooring",
    name: "Basement Epoxy Flooring",
    shortName: "Basement Epoxy",
    icon: "layers",
    photo: "/photos/basement-epoxy-floor-coating.webp",
    priceFrom: 4,
    priceUnit: "per sq ft",
    tagline: "Moisture-tolerant coatings that finish a basement for good",
    hero: "Basement Epoxy Flooring That Beats North Jersey Moisture",
    intro:
      "Carpet molds. Laminate swells. Tile cracks. A basement slab in New Jersey needs a floor that treats moisture as a design requirement, not a surprise — and that's exactly what a moisture-tolerant epoxy system is. Seamless, waterproof on the surface, easy to clean, and beautiful enough for finished living space.",
    problem:
      "That musty basement smell, efflorescence dust on the slab, and flooring that's been replaced twice already after wet seasons.",
    includes: [
      "Calcium chloride / RH moisture testing first",
      "Moisture-mitigating primer when the slab needs it",
      "Diamond grinding and crack repair",
      "Solid, flake, or metallic finish options",
      "Satin and matte topcoats for living areas",
      "Coved edges available for laundry & utility zones",
    ],
    surfaces: ["Finished basements", "Home gyms", "Laundry rooms", "Utility rooms", "Rec rooms", "Workshops"],
    localNote:
      "High water tables and 100-year-old foundations make North Jersey basements chronically damp. Epoxy over a moisture-mitigating primer is the one floor that doesn't care.",
    keywords: [
      "basement epoxy flooring nj",
      "basement floor coating north jersey",
      "basement floor epoxy new jersey",
      "waterproof basement flooring nj",
    ],
    faq: [
      {
        q: "Can epoxy go over a damp basement slab?",
        a: "We test every basement slab for moisture first. Moderate vapor drive is handled with a moisture-mitigating epoxy primer designed exactly for this; active liquid water needs drainage correction before any floor makes sense. Either way you'll know before we quote — not after the floor fails.",
      },
      {
        q: "Is epoxy warmer than bare concrete?",
        a: "It feels warmer and drier because it seals the damp, dusty surface, and it pairs perfectly with area rugs in living zones. For gyms and rec rooms, most customers add interlocking mats where they train and enjoy the seamless surface everywhere else.",
      },
    ],
  },

  /* ── 8. Restaurant / commercial kitchen ─────────────────────────── */
  {
    slug: "restaurant-kitchen-epoxy-flooring",
    name: "Restaurant Kitchen Epoxy",
    shortName: "Kitchen Epoxy",
    icon: "flame",
    photo: "/photos/red-epoxy-sunroom-floor.webp",
    priceFrom: 6,
    priceUnit: "per sq ft",
    tagline: "Health-code-ready floors that survive the line",
    hero: "Restaurant Kitchen Epoxy Flooring Built for North Jersey Kitchens",
    intro:
      "A commercial kitchen floor has to survive hot oil, dropped pans, nightly degreaser washdowns, and a health inspector's flashlight — all without ever closing for repairs. We install seamless epoxy and urethane mortar systems with integral cove base that meet code, grip when greasy, and clean up fast.",
    problem:
      "Cracked quarry tile and failing grout that traps grease, fails inspections, and can't be fixed without closing the kitchen.",
    includes: [
      "Overnight and between-service installation windows",
      "Urethane mortar or epoxy spec'd to your washdown temps",
      "Integral cove base — no wall/floor seam for grease to hide in",
      "Slip-resistant texture tuned for kitchen safety",
      "Floor drain transitions done right",
      "Fast-cure options: closed after service, open for prep",
    ],
    surfaces: ["Restaurant kitchens", "Prep & dish areas", "Walk-in coolers", "Bars", "Bakeries & cafés", "Commissary kitchens"],
    localNote:
      "North Jersey's restaurant scene doesn't get nights off — our fast-cure systems are chosen so a Friday-night pour is ready for Saturday prep.",
    keywords: [
      "restaurant kitchen epoxy flooring nj",
      "commercial kitchen flooring north jersey",
      "restaurant floor coating new jersey",
      "kitchen epoxy floor contractor nj",
    ],
    faq: [
      {
        q: "Do we have to close the kitchen for the install?",
        a: "Usually just overnight. Fast-cure urethane and polyaspartic systems let us start after close and hand the floor back before morning prep. Larger kitchens are phased zone by zone so the line keeps running.",
      },
      {
        q: "Will the floor pass health inspection?",
        a: "Seamless epoxy with integral cove base is exactly what inspectors want to see — no grout lines to trap grease, no wall seam, and a surface that sanitizes completely. It's the standard spec for new commercial kitchens for a reason.",
      },
    ],
  },
];

/** The install sequence, as a HowTo. Mirrors the four steps in <Steps /> — keep
 *  the two in sync. Fed to `howToSchema()` on every service page: rich results
 *  for HowTo are retired, but the node is still one of the cleanest signals an
 *  AI answer engine can extract about how we actually do the work. */
export const installProcess = [
  {
    name: "Free on-site assessment",
    text: "We measure the floor, moisture-test the slab, and bring physical color and flake samples to your space. You get an itemized price on the spot, with any crack or spall repair quoted up front rather than discovered later.",
  },
  {
    name: "Diamond-grind the concrete",
    text: "Every slab is mechanically ground back to open, bare concrete — removing old coatings, sealers and the weak laitance layer. This is the step DIY kits and cut-rate installers replace with acid etching, and it is the single biggest predictor of how long the floor lasts.",
  },
  {
    name: "Repair and prime",
    text: "Cracks are routed and filled with structural epoxy, spalls are patched with epoxy mortar, and control joints are treated. Where the moisture test calls for it, a vapor-mitigating primer goes down before any build coat.",
  },
  {
    name: "Build the system and topcoat",
    text: "A 100% solids epoxy or polyaspartic base goes down, followed by your flake broadcast or hand-worked metallic, then a chemical-resistant topcoat rated for hot-tire pickup. Walk on it in 24 hours, park in 72 — or the same day with a polyaspartic system.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

/** Aliases kept for page-level imports. */
export const serviceBySlug = getService;
export const serviceSlugs = services.map((s) => s.slug);
