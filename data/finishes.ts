/**
 * Floor finishes — the visual catalogue behind /finishes.
 *
 * ⚠️ READ BEFORE EDITING. This is deliberately NOT a dated project log.
 *
 * A project log asserts "we did this job, here, on this date." The photo
 * library these entries are built from is a mix of stock and generated
 * imagery — it was audited on 2026-07-28 and six files were duplicates, one
 * was a granite texture, and one captioned as a grinding shot was a finished
 * floor. Writing customer names, towns and dates onto those images would be
 * manufacturing records, which is the one thing this site has been careful
 * not to do (see the deliberate absence of aggregateRating in lib/seo.ts).
 *
 * So this catalogue makes only claims that are true of the SYSTEM: what the
 * finish is, how it is built up, what it costs, where it suits, how it wears.
 * Every description was written after opening the actual image. Nothing here
 * asserts a specific job.
 *
 * TO CONVERT THIS INTO A REAL PROJECT LOG: add `project: { town, date, size,
 * notes }` to an entry and supply a genuine job photo. The route already
 * renders that block when present. Real jobs beat this every time — this is
 * the honest placeholder that works until those photos exist.
 */

export type Finish = {
  slug: string;
  name: string;
  photo: string;
  alt: string;
  family: "Flake" | "Metallic" | "Solid color";
  /** one-line summary used on the index card */
  lede: string;
  /** what you are actually looking at, then how it wears */
  body: [string, string];
  /** the system, layer by layer */
  spec: string[];
  bestFor: string[];
  priceRange: string;
  /** service slug this finish belongs to */
  service: string;
  faq: { q: string; a: string };
  /** Optional — populate with a REAL job to turn this into a project entry. */
  project?: { town: string; date: string; size: string; notes: string };
};

export const finishes: Finish[] = [
  {
    slug: "gray-full-flake-garage",
    name: "Gray Full-Flake Garage Floor",
    photo: "/photos/garage-floor-coating-nj.webp",
    alt: "Gray full-flake epoxy floor in a two-car residential garage with a car parked on it",
    family: "Flake",
    lede: "The most-installed floor in North Jersey, and the default recommendation for a family garage.",
    body: [
      "This is a gray flake blend broadcast to full coverage over a pigmented base and locked under a clear topcoat. The mid-tone gray is doing practical work: it hides the winter grit and tyre dust that accumulate between cleanings far better than a solid color, while still reading as a deliberate, finished surface rather than a painted slab.",
      "Note where the coating stops at the door line — the apron beyond it is bare concrete. That is a choice, not an oversight. Exterior aprons see UV, freeze-thaw and plough damage that an interior system is not built for, so unless you specifically want the apron done in an exterior-rated product, terminating cleanly at the threshold is the longer-lasting answer.",
    ],
    spec: [
      "Diamond-ground slab, cracks routed and filled, spalls rebuilt",
      "Pigmented 100% solids epoxy base coat",
      "Full-broadcast vinyl flake to refusal, scraped and vacuumed",
      "Clear polyaspartic or urethane topcoat with anti-slip aggregate",
    ],
    bestFor: ["Two-car family garages", "Daily-driver parking", "Homes with kids and bikes", "Anywhere road salt comes in"],
    priceRange: "$4 – $8 / sq ft",
    service: "garage-epoxy-flooring",
    faq: {
      q: "Why gray rather than something with more color?",
      a: "Because it hides the most. A gray blend camouflages the grit, salt residue and tyre marks that a garage floor collects between cleanings, so it looks good on an ordinary Tuesday rather than only the week it was installed. Blues and earth tones do the same job; solid colors and very light blends show everything.",
    },
  },
  {
    slug: "blue-black-flake-with-coved-base",
    name: "Blue & Black Flake With Coved Base",
    photo: "/photos/blue-metallic-epoxy-floor.webp",
    alt: "Blue, black and white full-broadcast flake garage floor with a coved flake base running up the wall",
    family: "Flake",
    lede: "A heavier flake broadcast, with the finish carried up the wall so there is no raw edge.",
    body: [
      "This is a denser broadcast than a standard flake floor — the chips are larger and laid to complete refusal, which gives the surface a granite-like depth and noticeably more texture underfoot. The blue, black and white blend has enough contrast to disguise almost anything that lands on it.",
      "The detail worth copying is at the wall. The flake system runs up into a coved base rather than stopping at the slab edge, which removes the dirt-trapping joint between floor and wall entirely and makes the whole garage read as a finished room. It is the single upgrade that most changes how a garage feels, and it costs less than people expect.",
    ],
    spec: [
      "Diamond-ground slab with full crack and spall repair",
      "Pigmented epoxy base, carried up the wall for the cove",
      "Heavy full-broadcast flake in a three-color blend",
      "Two clear coats — high-build, with anti-slip in the final pass",
    ],
    bestFor: ["Garages finished as living space", "High-traffic residential floors", "Hiding an uneven older slab", "Workshops"],
    priceRange: "$5 – $9 / sq ft",
    service: "flake-epoxy-flooring",
    faq: {
      q: "What does the coved base add?",
      a: "It removes the floor-to-wall joint, which is where dirt, salt and water collect and where a mop can never quite reach. Practically it makes the floor easier to clean and much harder to damage at the edges; visually it is what makes a garage stop looking like a coated slab and start looking like a finished room.",
    },
  },
  {
    slug: "red-flake-shop-bay",
    name: "Red Flake Shop Bay",
    photo: "/photos/red-flake-garage-epoxy-newark-nj.webp",
    alt: "Red epoxy floor with black and white flake in a single-bay shop garage with a roll-up door",
    family: "Flake",
    lede: "A saturated color base with a light flake broadcast — built for a working bay, not a family garage.",
    body: [
      "The base here is a strong pigmented red with black and white flake broadcast lightly rather than to refusal, so the color stays dominant and the chips read as speckle. In a commercial bay that is a deliberate choice: the color makes the space feel bright and intentional under artificial light, and the light broadcast keeps the surface easier to squeegee than a heavy texture would be.",
      "A working bay changes the specification underneath. Vehicle traffic, dropped tools and dragged equipment mean more film build than a residential garage needs, and the topcoat has to handle oil, brake fluid and hot-tire contact without softening. The floor is smoother than a full-broadcast system, so we increase the anti-slip loading in the topcoat to compensate.",
    ],
    spec: [
      "Diamond-ground and degreased, adhesion-tested on contaminated slabs",
      "High-build pigmented epoxy base in a saturated color",
      "Light decorative flake broadcast for speckle rather than texture",
      "Chemical-resistant topcoat rated for hot-tire pickup and fluids",
    ],
    bestFor: ["Service and repair bays", "Fleet and equipment garages", "Detailing shops", "Single-bay commercial spaces"],
    priceRange: "$5 – $9 / sq ft",
    service: "polyaspartic-floor-coating",
    faq: {
      q: "Will a strong color like this hide oil and dirt in a working bay?",
      a: "Less well than a mid-tone flake blend, and that is the trade. A saturated color buys you brightness and a sharp look under shop lighting, but it shows more between cleanings. If your bay sees constant fluid contact and you want the floor to look good with minimal upkeep, a darker full-broadcast flake is the more forgiving choice.",
    },
  },
  {
    slug: "blue-gray-marbled-garage",
    name: "Blue-Gray Marbled Garage Floor",
    photo: "/photos/garage-epoxy-floor-hero.webp",
    alt: "Blue-gray marbled high-gloss epoxy floor in a two-car garage with the door open to autumn trees",
    family: "Metallic",
    lede: "Movement worked through the resin so the floor reads as stone rather than as a coating.",
    body: [
      "This is a metallic system — pigment suspended in clear resin and moved by hand while it is still self-leveling, which produces the veining and tonal drift you can see running the length of the bay. No two floors made this way are alike, and the effect cannot be reproduced from a photograph, only approximated in the same color direction.",
      "It is worth seeing what daylight does to it. With the door open, a metallic floor picks up and throws light in a way a flat color never does, which is most of the appeal and also the reason it needs to be chosen in the actual space. The same pour looks like a different floor under a garage fixture at night.",
    ],
    spec: [
      "Diamond-ground slab, leveled — metallic hides no imperfection",
      "Pigmented epoxy base coat in the ground tone",
      "Hand-worked metallic coat, moved while the resin is live",
      "High-build clear topcoat, aliphatic so it will not amber",
    ],
    bestFor: ["Showpiece garage bays", "Garages with glass or open doors", "Finished basements in satin", "Feature rooms"],
    priceRange: "$7 – $12 / sq ft",
    service: "metallic-epoxy-flooring",
    faq: {
      q: "Can you match a metallic floor to a photo I've seen?",
      a: "We can match the palette and the character, but not reproduce a specific floor — nobody honestly can. The veining is created by hand while the resin moves, so it is one-off by definition. What we do instead is work samples in your color direction on your own slab, under your own lighting, and agree the look before install day.",
    },
  },
  {
    slug: "copper-metallic-interior",
    name: "Copper Metallic Interior Floor",
    photo: "/photos/gold-metallic-epoxy-install.webp",
    alt: "Copper and bronze metallic epoxy floor being hand-worked by two installers in an interior room",
    family: "Metallic",
    lede: "A warm metallic taken indoors — the same system, finished for a room you furnish.",
    body: [
      "This is a copper and bronze metallic mid-install, which is the only moment the effect can be influenced. Two people are working the resin simultaneously, and that is not for speed — it is to keep a wet edge across the whole span. Stop and restart in the middle of a metallic pour and the join is visible permanently and cannot be repaired out.",
      "Indoors the finish decision usually changes. A gloss topcoat gives the wet, reflective look that suits a garage; drop to satin or matte and the same floor reads as honed stone, which is what most people want in a basement, studio or living space. The color underneath is identical — only the sheen moves.",
    ],
    spec: [
      "Ground and leveled slab, moisture tested if below grade",
      "Pigmented base coat establishing the ground tone",
      "Metallic coat worked wet-edge by two installers across the span",
      "Clear topcoat in gloss, satin or matte to suit the room",
    ],
    bestFor: ["Finished basements", "Studios and home offices", "Retail and salon floors", "Bars and hospitality"],
    priceRange: "$8 – $13 / sq ft",
    service: "metallic-epoxy-flooring",
    faq: {
      q: "Why does a metallic floor need two installers?",
      a: "Because it has to be worked while the resin is still moving. Once it starts to set, anything you do to it shows as a hard edge, so the whole area has to stay live until the effect is finished. On larger floors that means more people, not more time — which is why we size the crew to the span rather than pouring it in sections.",
    },
  },
  {
    slug: "two-tone-showroom",
    name: "Two-Tone Showroom Floor",
    photo: "/photos/showroom-gold-flake-epoxy.webp",
    alt: "Automotive showroom floor in two tones — black with gold fleck against high-gloss white",
    family: "Metallic",
    lede: "Two colors used as zoning — the dark field defines display, the light field defines circulation.",
    body: [
      "This is a deliberate two-tone layout rather than a decorative accident. The black section with gold fleck sits under the display area and the high-gloss white handles circulation, which does the space-planning job that carpet tiles or floor vinyl would do in a lesser fit-out — without a single seam or transition strip between them.",
      "Both fields are mirror-finished, and that is the real specification decision here. A gloss this high shows every imperfection in the substrate beneath it, so the slab preparation on a floor like this is more demanding than the coating. It also throws the room's lighting back up, which is the point in a showroom and a genuine consideration anywhere staff work all day.",
    ],
    spec: [
      "Slab ground flat — high gloss magnifies every substrate defect",
      "Color fields masked and laid separately with no transition strip",
      "Decorative fleck broadcast into the dark field only",
      "High-build clear topcoat across both fields for a continuous surface",
    ],
    bestFor: ["Auto and equipment showrooms", "Retail with defined zones", "Reception and display areas", "Brand-color fit-outs"],
    priceRange: "$7 – $12 / sq ft",
    service: "commercial-epoxy-flooring",
    faq: {
      q: "Can you lay out zones in our brand colors like this?",
      a: "Yes — epoxy is pigmented rather than painted, so we mix to your brand spec instead of picking the nearest stock color, and color fields, walkways, safety zones and logo inlays all go down under one continuous topcoat. There is nothing sitting on the surface to wear off, and no seam between the colors.",
    },
  },
  {
    slug: "high-gloss-white-commercial",
    name: "High-Gloss White Commercial Floor",
    photo: "/photos/commercial-white-epoxy-floor.webp",
    alt: "High-gloss white epoxy floor running the length of a large open commercial space",
    family: "Solid color",
    lede: "The brightest floor we install — and the most demanding to prepare properly.",
    body: [
      "A white floor at this gloss level is the hardest finish to execute well, because there is nothing to hide behind. Every roller mark, every substrate ripple and every speck of contamination reads. It is also transformative in a large space: the floor becomes a second light source, and rooms of this size routinely need less artificial lighting afterwards.",
      "That brightness is why it turns up in food production, labs, clean assembly and showroom back-of-house — anywhere seeing clearly matters and anywhere a floor needs to be visibly, provably clean. The maintenance trade is real: white shows dirt sooner than any other color, which is exactly why the sectors that choose it do so on purpose.",
    ],
    spec: [
      "Slab ground flat and vacuumed obsessively — white shows everything",
      "Moisture tested; primed where the reading calls for it",
      "High-build pigmented epoxy, applied in controlled passes",
      "Clear topcoat, slip-rated to the space's safety requirement",
    ],
    bestFor: ["Food production and prep", "Labs and clean assembly", "Warehouse and showroom back-of-house", "Large low-light spaces"],
    priceRange: "$5 – $9 / sq ft",
    service: "commercial-epoxy-flooring",
    faq: {
      q: "Is a white floor impractical for a working space?",
      a: "It shows dirt sooner than any other color — but that is often the reason it is chosen. In food production, labs and clean assembly, a floor that visibly shows contamination is a feature, not a flaw. For a space where the priority is looking tidy with minimum upkeep, a mid-tone gray or a flake blend is the more forgiving specification.",
    },
  },
  {
    slug: "gray-warehouse-floor",
    name: "Light Gray Warehouse Floor",
    photo: "/photos/warehouse-epoxy-high-gloss.webp",
    alt: "Light gray high-gloss epoxy floor running between bollards in a steel-frame warehouse",
    family: "Solid color",
    lede: "The workhorse industrial specification — light, seamless and built around the joints.",
    body: [
      "A light gray high-build epoxy across a large industrial span, finished glossy so the space stays bright under high-bay lighting. The color choice is functional rather than aesthetic: lighter floors bounce light, which improves visibility around moving equipment and reduces what you spend keeping a building of this size lit.",
      "The part that decides how long a floor like this survives is not visible in a photograph. Control joints have to be filled with semi-rigid filler so hard-wheeled traffic rolls across them instead of impacting an open edge — joint spalling is where nearly all warehouse floor failure starts, and it spreads along the joint fast once a chip begins.",
    ],
    spec: [
      "Slab assessed for moisture, joints and existing damage first",
      "Control joints filled flush with semi-rigid filler",
      "Diamond grinding or shot blasting to the required profile",
      "High-build epoxy, with safety striping and aisle marking as needed",
    ],
    bestFor: ["Warehouses and distribution", "Manufacturing floors", "Forklift and pallet-jack traffic", "Aircraft hangars"],
    priceRange: "$5 – $10 / sq ft",
    service: "industrial-epoxy-flooring",
    faq: {
      q: "Why do warehouse floors always fail at the joints first?",
      a: "Because a hard wheel crossing an open control joint impacts the corner directly rather than rolling over it, and once a chip starts it spreads along the joint quickly. Semi-rigid filler fills the joint flush so the wheel rolls across, while still allowing the slab to move. On an industrial floor it is usually the highest-value thing we do.",
    },
  },
  {
    slug: "green-traffic-aisle",
    name: "Color-Coded Traffic Aisle",
    photo: "/photos/green-epoxy-warehouse-floor.webp",
    alt: "Warehouse floor with a green traffic aisle coated down the center and gray to either side",
    family: "Solid color",
    lede: "Wayfinding built into the floor itself, rather than painted on top of it.",
    body: [
      "The green running down the center of this warehouse is not a stripe applied over a finished floor — it is a separate color field laid as part of the system, with the clear topcoat carried across both. That matters because surface-applied line marking is a wear item: it gets scuffed by the exact traffic it is there to direct, and it needs redoing.",
      "Coating the aisle into the floor makes the wayfinding as durable as the floor. It is the same principle behind 5S layouts, equipment footprints and safety zoning, and it is far cheaper to specify at install than to add later, because the alternative afterwards is masking and coating over a cured surface that then has to be abraded first.",
    ],
    spec: [
      "Layout agreed with your operations lead before any coating",
      "Color fields masked and laid as part of the base system",
      "Aisle, zone and equipment-footprint marking to your 5S plan",
      "Single clear topcoat carried across every field — nothing to wear off",
    ],
    bestFor: ["Pedestrian and forklift separation", "5S and lean layouts", "Safety and hazard zoning", "Equipment footprints"],
    priceRange: "$5 – $10 / sq ft",
    service: "industrial-epoxy-flooring",
    faq: {
      q: "Is coated-in marking better than painted line striping?",
      a: "Considerably, and it is cheaper over the life of the floor. Painted stripes sit on the surface and are worn away by the traffic they direct, so they need periodic redoing. A coated-in color field is part of the system with the topcoat over it, so it wears at the same rate as the rest of the floor. Specify it at install — adding it later costs much more.",
    },
  },
  {
    slug: "solid-gray-garage",
    name: "Solid Gray Garage Floor",
    photo: "/photos/garage-epoxy-flake-floor.webp",
    alt: "Solid light gray high-gloss epoxy floor in a residential garage fitted with white cabinetry",
    family: "Solid color",
    lede: "The clean, uniform option — lowest cost, sharpest look, least forgiving.",
    body: [
      "No flake, no metallic, just a uniform pigmented floor finished to a high gloss. In a garage fitted out with cabinetry and storage this is often the right call: the floor recedes and the fit-out becomes the feature, where a busy flake blend would compete with it. It is also the least expensive professional system we install.",
      "The honest caveat is that a solid color hides nothing. Every speck of dust, every tyre mark and every drip shows against an unbroken field, and any unevenness in the slab beneath telegraphs through a gloss finish. On an older or patched slab a flake blend is the more forgiving specification, and it is why we ask to see the concrete before recommending solid.",
    ],
    spec: [
      "Diamond-ground slab — a gloss solid shows every substrate flaw",
      "Crack and spall repair, leveled flat rather than merely filled",
      "Pigmented 100% solids epoxy base in your chosen color",
      "Clear topcoat rated for hot-tire pickup",
    ],
    bestFor: ["Garages with fitted cabinetry", "A clean commercial look", "Newer, flatter slabs", "Tighter budgets"],
    priceRange: "$3 – $5 / sq ft",
    service: "garage-epoxy-flooring",
    faq: {
      q: "Should I choose solid color or flake?",
      a: "It comes down to your slab and your tolerance for cleaning. Solid is cheaper and sharper-looking but shows dust, marks and any unevenness underneath. Flake costs a little more, hides all three, and adds slip resistance. On a newer, flat slab in a garage you keep tidy, solid is excellent; on an older or repaired slab, flake is the safer specification.",
    },
  },
];

export const finishBySlug = (slug: string) => finishes.find((f) => f.slug === slug);
export const finishSlugs = finishes.map((f) => f.slug);
export const finishFamilies = ["Flake", "Metallic", "Solid color"] as const;
