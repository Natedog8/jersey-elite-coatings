/**
 * Towns — the geo-SEO + map-pack engine. One strong page per town drives
 * the "[epoxy flooring] [town] nj" long-tail terms, and supports the
 * matching Google Business Profile service areas.
 */

export type Town = {
  slug: string;
  name: string;
  /** zip(s) we headline for this town */
  zip: string;
  county: string;
  population: string;
  /** neighborhoods / sections — fuels hyper-local long-tail */
  neighborhoods: string[];
  /** a true local detail that makes the page read as a neighbor, not a bot */
  localColor: string;
  /** drive-time framing */
  nearby: string[];
  /** defining local character — drives genuinely town-specific copy */
  profile: "urban" | "dense" | "suburban" | "estate" | "commercial-hub";
  /** a concrete, true local hook used in tailored copy */
  hook: string;
};

export const towns: Town[] = [
  {
    slug: "newark",
    name: "Newark",
    zip: "07102",
    county: "Essex County",
    population: "~310,000",
    neighborhoods: ["Ironbound", "Forest Hill", "Vailsburg", "Weequahic", "North Ward"],
    localColor:
      "From Ironbound restaurant kitchens to Forest Hill garages and warehouse space near the port, Newark floors work harder than almost anywhere in the state — and our headquarters is right here.",
    nearby: ["Jersey City", "East Orange", "Harrison"],
    profile: "urban",
    hook: "the restaurant kitchens of the Ironbound and the logistics warehouses feeding Port Newark",
  },
  {
    slug: "jersey-city",
    name: "Jersey City",
    zip: "07302",
    county: "Hudson County",
    population: "~290,000",
    neighborhoods: ["Downtown", "The Heights", "Journal Square", "Greenville", "Paulus Hook"],
    localColor:
      "Jersey City mixes brownstone-era basements with new commercial build-outs — two very different slabs, and we coat both every month.",
    nearby: ["Hoboken", "Bayonne", "Newark"],
    profile: "dense",
    hook: "the converted lofts and new retail build-outs from Paulus Hook to Journal Square",
  },
  {
    slug: "hoboken",
    name: "Hoboken",
    zip: "07030",
    county: "Hudson County",
    population: "~60,000",
    neighborhoods: ["Uptown", "Midtown", "Southwest", "Waterfront"],
    localColor:
      "Hoboken basements flood — everyone here knows it. A moisture-tolerant epoxy floor is the one finish that comes back from a wet season with a mop instead of a dumpster.",
    nearby: ["Jersey City", "Weehawken", "Union City"],
    profile: "dense",
    hook: "the garden-level units and commercial kitchens that deal with Hoboken's famous water table",
  },
  {
    slug: "clifton",
    name: "Clifton",
    zip: "07013",
    county: "Passaic County",
    population: "~90,000",
    neighborhoods: ["Athenia", "Allwood", "Richfield", "Lakeview", "Botany Village"],
    localColor:
      "Clifton's mix of tidy postwar garages and Route 3 commercial space keeps our crews busy — flake garage floors on the residential streets, seamless commercial systems along the highway corridors.",
    nearby: ["Passaic", "Paterson", "Montclair"],
    profile: "suburban",
    hook: "the postwar garages of Athenia and Allwood and the commercial corridors along Route 3 and Route 46",
  },
  {
    slug: "paterson",
    name: "Paterson",
    zip: "07501",
    county: "Passaic County",
    population: "~160,000",
    neighborhoods: ["Eastside", "Hillcrest", "Great Falls district", "South Paterson"],
    localColor:
      "The Silk City still makes things — Paterson's mills and industrial buildings need floors rated for machinery, forklifts, and washdowns, and that's exactly the work we love.",
    nearby: ["Clifton", "Wayne", "Hawthorne"],
    profile: "commercial-hub",
    hook: "the converted mills around the Great Falls and the working industrial space on the Eastside",
  },
  {
    slug: "montclair",
    name: "Montclair",
    zip: "07042",
    county: "Essex County",
    population: "~40,000",
    neighborhoods: ["Upper Montclair", "Watchung Plaza", "South End", "Estate section"],
    localColor:
      "Montclair homeowners finish their basements properly — and metallic epoxy has become the signature floor for the town's home gyms, studios, and rec rooms.",
    nearby: ["Clifton", "West Orange", "Bloomfield"],
    profile: "estate",
    hook: "the century-old homes of Upper Montclair with basements finally being finished right",
  },
  {
    slug: "wayne",
    name: "Wayne",
    zip: "07470",
    county: "Passaic County",
    population: "~55,000",
    neighborhoods: ["Packanack Lake", "Pines Lake", "Mountain View", "Preakness"],
    localColor:
      "Wayne's lakeside neighborhoods and larger colonial garages are flake-floor country — and the flood-prone spots near the Passaic River make moisture-tested basement systems essential.",
    nearby: ["Clifton", "Paterson", "Pompton Lakes"],
    profile: "suburban",
    hook: "the lake communities of Packanack and Pines Lake and the flood-aware homes near the Passaic",
  },
  {
    slug: "west-orange",
    name: "West Orange",
    zip: "07052",
    county: "Essex County",
    population: "~48,000",
    neighborhoods: ["Llewellyn Park", "Gregory", "Pleasantdale", "St. Cloud"],
    localColor:
      "From Llewellyn Park estates to Pleasantdale split-levels, West Orange garages and basements get the full range — solid color to full metallic showpieces.",
    nearby: ["Montclair", "Livingston", "South Orange"],
    profile: "estate",
    hook: "the estate garages of Llewellyn Park and the hillside homes with basements that earn their keep",
  },
  {
    slug: "livingston",
    name: "Livingston",
    zip: "07039",
    county: "Essex County",
    population: "~31,000",
    neighborhoods: ["Riker Hill", "Collins", "Broadlawn", "Cheshire"],
    localColor:
      "Livingston's three-car garages are made for showroom floors — full-flake systems with matching baseboards are the neighborhood standard we get asked for most.",
    nearby: ["West Orange", "Millburn", "Florham Park"],
    profile: "estate",
    hook: "the three-car garages off Riker Hill and the finished basements every Livingston listing brags about",
  },
  {
    slug: "ridgewood",
    name: "Ridgewood",
    zip: "07450",
    county: "Bergen County",
    population: "~26,000",
    neighborhoods: ["Upper Ridgewood", "Willard", "Somerville", "Heights"],
    localColor:
      "Ridgewood's classic center-hall colonials hide surprisingly hardworking garages — and the village's older slabs need the crack repair and grinding prep we never skip.",
    nearby: ["Glen Rock", "Wyckoff", "Paramus"],
    profile: "estate",
    hook: "the center-hall colonials of Upper Ridgewood and their century-old garage slabs",
  },
  {
    slug: "paramus",
    name: "Paramus",
    zip: "07652",
    county: "Bergen County",
    population: "~27,000",
    neighborhoods: ["Ridgewood border", "Behnke", "Dunkerhook", "Route 17 corridor"],
    localColor:
      "Paramus is retail country — showroom and back-of-house epoxy along the Route 4 and 17 corridors, and clean flake garages in the neighborhoods behind them.",
    nearby: ["Ridgewood", "Fair Lawn", "Hackensack"],
    profile: "commercial-hub",
    hook: "the showrooms of the Route 4/17 retail corridor and the cul-de-sac garages behind them",
  },
  {
    slug: "morristown",
    name: "Morristown",
    zip: "07960",
    county: "Morris County",
    population: "~20,000",
    neighborhoods: ["The Green", "Franklin Corners", "Normandy Park", "Convent Station"],
    localColor:
      "Morristown mixes historic downtown restaurants with Morris County estate garages — overnight kitchen installs near the Green, weekend garage transformations a mile out.",
    nearby: ["Madison", "Florham Park", "Hanover"],
    profile: "estate",
    hook: "the restaurant kitchens around the Green and the estate garages of Normandy Park",
  },
  {
    slug: "elizabeth",
    name: "Elizabeth",
    zip: "07201",
    county: "Union County",
    population: "~137,000",
    neighborhoods: ["Elmora", "Peterstown", "Bayway", "Midtown", "North Elizabeth"],
    localColor:
      "Elizabeth works for a living — the Bayway refinery belt, the port terminals, and blocks of two-families and shops in Elmora and Peterstown. The floors here take industrial punishment and get coated around shift schedules.",
    nearby: ["Newark", "Linden", "Union"],
    profile: "urban",
    hook: "the Bayway industrial belt and the working storefronts of Elmora and Peterstown",
  },
  {
    slug: "union",
    name: "Union",
    zip: "07083",
    county: "Union County",
    population: "~60,000",
    neighborhoods: ["Vauxhall", "Battle Hill", "Putnam Manor", "Larchmont"],
    localColor:
      "Union is postwar cape-and-split-level country, which means thousands of two-car garages of almost identical vintage — and almost identical salt damage along the door opening.",
    nearby: ["Springfield", "Elizabeth", "Kenilworth"],
    profile: "suburban",
    hook: "the postwar garages off Morris Avenue and the Vauxhall and Battle Hill streets behind it",
  },
  {
    slug: "westfield",
    name: "Westfield",
    zip: "07090",
    county: "Union County",
    population: "~30,000",
    neighborhoods: ["Stoneleigh Park", "The Gardens", "Wychwood", "Brightwood"],
    localColor:
      "Westfield's center-hall colonials come with detached garages that are often older than the driveway — and basements that homeowners are now finishing to the same standard as the rest of the house.",
    nearby: ["Cranford", "Scotch Plains", "Garwood"],
    profile: "estate",
    hook: "the center-hall colonials around Stoneleigh Park and the Gardens",
  },
  {
    slug: "summit",
    name: "Summit",
    zip: "07901",
    county: "Union County",
    population: "~22,000",
    neighborhoods: ["Northside", "Franklin Hill", "Brayton", "Beekman"],
    localColor:
      "Summit sits high and dry compared to most of Union County, but the housing stock is old — carriage-era garages and stone-foundation basements that need real prep before they take a coating.",
    nearby: ["New Providence", "Chatham", "Berkeley Heights"],
    profile: "estate",
    hook: "the hilltop homes off Springfield Avenue and the Northside's carriage-era garages",
  },
  {
    slug: "cranford",
    name: "Cranford",
    zip: "07016",
    county: "Union County",
    population: "~24,000",
    neighborhoods: ["Riverside", "Brookside Place", "Lincoln Park", "Osceola"],
    localColor:
      "In Cranford the Rahway River is the whole conversation. Half the town has a basement flood story, and it drives every flooring decision made below grade here.",
    nearby: ["Westfield", "Garwood", "Kenilworth"],
    profile: "suburban",
    hook: "the Rahway River blocks around Riverside and Brookside Place",
  },
];

export function getTown(slug: string) {
  return towns.find((t) => t.slug === slug);
}

/** Aliases + combo config for page-level imports. */
export const townBySlug = getTown;
export const townSlugs = towns.map((t) => t.slug);
/** Services that get a dedicated town×service combo page (highest-intent pairs). */
export const comboServiceSlugs = [
  "garage-epoxy-flooring",
  "polyaspartic-floor-coating",
  "commercial-epoxy-flooring",
  "basement-epoxy-flooring",
  "metallic-epoxy-flooring",
];
