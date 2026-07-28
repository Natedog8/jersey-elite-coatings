import { towns, type Town } from "@/data/towns";

/**
 * Counties — the mid-tier of the geo silo (home → county → town → town×service).
 * These pages target "[epoxy flooring] [county] nj" terms, which sit between
 * the North-Jersey head term and the town long-tail, and they give every town
 * page a topical parent to link up to.
 */

export type County = {
  slug: string;
  name: string;
  /** "Essex" — without the word County */
  shortName: string;
  seat: string;
  /** unique positioning copy — what epoxy work actually looks like in this county */
  intro: string;
  /** second paragraph — the local floor problems we solve here */
  detail: string;
  faq: { q: string; a: string }[];
};

export const counties: County[] = [
  {
    slug: "essex-county",
    name: "Essex County",
    shortName: "Essex",
    seat: "Newark",
    intro:
      "Essex County is home base — our headquarters is in Newark, which means Essex jobs get the fastest scheduling we offer. No county in New Jersey packs more variety into fewer square miles: Ironbound restaurant kitchens, port-side warehouse space, hundred-year-old Montclair garages, and estate three-car garages in Livingston, all within a twenty-minute drive of our shop.",
    detail:
      "The common thread is old concrete. Most Essex County slabs were poured decades ago, and they've been through a lot of freeze-thaw winters and road salt. That's why every install starts with diamond grinding and moisture testing — on older urban slabs, prep is the difference between a coating that lasts a season and one we can back for life.",
    faq: [
      {
        q: "Do you charge extra to travel within Essex County?",
        a: "No. We're headquartered in Newark, so everywhere in Essex County — Montclair, West Orange, Livingston, the Oranges — is our home turf. No travel fees, and Essex jobs typically get the earliest available slots on our schedule.",
      },
      {
        q: "Can you coat the floor of a pre-war garage in Essex County?",
        a: "Yes — older garages in towns like Montclair and West Orange are a big share of our work. Pre-war slabs usually need extra prep (crack repair, patching, sometimes skim-coating), which we quote up front after seeing the floor. Once prepped correctly, an old slab holds a coating just as well as a new pour.",
      },
      {
        q: "Do you do commercial epoxy work in Newark and the Oranges?",
        a: "All the time — restaurant kitchens, warehouse space, auto shops and showrooms across Newark, East Orange and Irvington. We schedule commercial installs around your operating hours, including overnight and weekend work.",
      },
    ],
  },
  {
    slug: "hudson-county",
    name: "Hudson County",
    shortName: "Hudson",
    seat: "Jersey City",
    intro:
      "Hudson County floors come in two flavors: brownstone-era basements that have been damp since the Roosevelt administration, and brand-new commercial build-outs in Jersey City and Hoboken high-rises. We coat both every month, and they need completely different systems — which is exactly why a one-size franchise approach fails here.",
    detail:
      "Moisture is the defining Hudson County problem. Below-grade slabs this close to the Hudson carry real vapor pressure, so we moisture-test every basement floor and use vapor-barrier primers rated for what the slab actually reads — not what a spec sheet hopes. Parking access and elevator logistics for condo work are things we plan around, not discover on install day.",
    faq: [
      {
        q: "Can you epoxy a damp brownstone basement in Hudson County?",
        a: "Usually yes — but only after a calcium-chloride or RH moisture test tells us what the slab is doing. High readings call for a vapor-barrier primer system under the epoxy. Skipping that test is why so many Hudson County basement coatings bubble and peel within a year.",
      },
      {
        q: "Do you work in Jersey City and Hoboken condo buildings?",
        a: "Yes. We handle the building logistics — COI for the management company, elevator scheduling, floor protection on common areas, and low-odor product options for occupied buildings.",
      },
      {
        q: "How do you handle parking and access for city installs?",
        a: "We've been working Jersey City and Hoboken for years — we plan permits, loading zones and material staging before install day, and it's all baked into the quote. You won't get a surprise charge because a crew couldn't park.",
      },
    ],
  },
  {
    slug: "passaic-county",
    name: "Passaic County",
    shortName: "Passaic",
    seat: "Paterson",
    intro:
      "Passaic County runs from Paterson's mill-era industrial buildings to the commercial corridors along Routes 3 and 46 to quiet suburban garages in Wayne. That mix is our sweet spot: heavy-duty industrial systems where forklifts run, and decorative flake and metallic floors where families park.",
    detail:
      "Paterson's older industrial slabs are some of the hardest-working concrete in the state — oil-soaked, patched, and uneven. We grind them back to clean concrete and build up high-solids systems rated for the traffic they actually take. Out in Wayne and the suburbs, the enemy is winter road salt tracked in on tires, which is exactly what a full-broadcast flake system with a polyaspartic topcoat is built to shrug off.",
    faq: [
      {
        q: "Can you coat an oil-stained shop floor in Paterson?",
        a: "Yes — oil-soaked slabs are standard work for us. We diamond-grind past the contamination, degrease and spot-treat what's left, and test adhesion before coating. An oil stain on the surface is cosmetic; what matters is getting the coating bonded to clean concrete underneath.",
      },
      {
        q: "What's the best garage floor coating for Passaic County winters?",
        a: "A full-broadcast flake system with a polyaspartic or urethane topcoat. Road salt and snowmelt chemicals eat bare concrete, but they wipe straight off a sealed epoxy floor. It's the single most popular system we install in Clifton and Wayne.",
      },
      {
        q: "Do you handle large commercial floors along Route 3 and Route 46?",
        a: "Yes — showrooms, warehouses and retail space across Clifton and the highway corridors. We work nights and weekends so the coating cures without costing you open hours.",
      },
    ],
  },
  {
    slug: "bergen-county",
    name: "Bergen County",
    shortName: "Bergen",
    seat: "Hackensack",
    intro:
      "Bergen County is New Jersey's biggest suburban market, and it shows in the work: three-car garages in Ridgewood and Franklin Lakes that get finished like living space, and retail and showroom floors around the Paramus corridor that have to look perfect under bright lights every single day.",
    detail:
      "Bergen homeowners tend to want the high-end finishes — metallic epoxy, designer flake blends, matching containment curbs — and Bergen businesses need floors that survive relentless foot traffic while looking like glass. Both come down to the same fundamentals we bring everywhere: mechanical prep, commercial-grade materials, and a lifetime warranty against peeling.",
    faq: [
      {
        q: "Do you install metallic epoxy floors in Bergen County?",
        a: "Yes — metallic systems are among our most-requested finishes in Ridgewood, Paramus and the surrounding towns. Every metallic pour is hand-worked and one of a kind, and we bring physical samples to the quote so you can pick the look on your actual floor.",
      },
      {
        q: "Can you coat a retail or showroom floor near the Paramus malls?",
        a: "That's core work for us — high-gloss, high-traffic commercial systems that stay presentable under daily foot traffic. We schedule around retail hours, including overnight installs, so you never close for a floor.",
      },
      {
        q: "How long does a garage epoxy install take in Bergen County?",
        a: "A standard two- or three-car garage runs about two days: grinding and repairs on day one, base coat, flake broadcast and topcoat after. You can walk it in 24 hours and park on it within 3–5 days depending on the system.",
      },
    ],
  },
  {
    slug: "morris-county",
    name: "Morris County",
    shortName: "Morris",
    seat: "Morristown",
    intro:
      "Morris County means bigger floors: estate garages with room for a lift, finished basements that run the footprint of the house, and corporate campuses around Morristown that want back-of-house floors as sharp as the lobby. It's the county where 'garage' most often means 'showroom.'",
    detail:
      "Larger residential floors change the math — more square footage per job means better per-foot pricing, and it makes premium systems like metallics and designer flake blends genuinely worth it. Estate garages also tend to house cars worth protecting, so hot-tire resistance and a topcoat that doesn't yellow matter more here than anywhere else we work.",
    faq: [
      {
        q: "Do you coat large estate garages in Morris County?",
        a: "Yes — multi-bay and oversized garages around Morristown, Harding and Mendham are some of our favorite projects. Larger floors get better per-square-foot pricing, and we regularly install lift-rated systems for collectors.",
      },
      {
        q: "Will epoxy protect the floor under a car lift or collector cars?",
        a: "A properly installed system handles point loads from lifts and jack stands without issue, and a quality urethane or polyaspartic topcoat resists hot-tire pickup — the failure you see with DIY kits. That's covered by our lifetime warranty against peeling and delamination.",
      },
      {
        q: "Can you do a whole finished basement in Morris County?",
        a: "Yes — full-footprint basement floors are common Morris County work. Epoxy and polished-concrete-look systems give you a seamless, moisture-tolerant floor that beats carpet or vinyl below grade, especially in older homes.",
      },
    ],
  },
  {
    slug: "union-county",
    name: "Union County",
    shortName: "Union",
    seat: "Elizabeth",
    intro:
      "Union County packs an unusual amount of range into a small footprint. Elizabeth alone runs from the Bayway refinery belt to port terminal space to blocks of working storefronts, while fifteen minutes west you're in Westfield and Summit coating three-car garages and full-footprint basements. It's the county where our industrial trailer and our residential trailer are most likely to be out on the same morning.",
    detail:
      "Two things shape the work here. The first is water: the Rahway River runs straight through Cranford and Springfield, and enough of this county has a flood story that basement floors get chosen on whether they survive one, not on how they look. The second is age — Union County's housing and industrial stock is largely pre-1960, so slabs need genuine crack routing, spall repair and moisture testing before any coating is worth putting down.",
    faq: [
      {
        q: "Do you cover all of Union County, or only the towns with pages?",
        a: "All of it. Elizabeth, Union, Westfield, Summit and Cranford have their own pages because they're where we work most, but we cover Linden, Rahway, Plainfield, Scotch Plains, Springfield, Berkeley Heights, Clark, Kenilworth, Roselle and everywhere between. Union County is a straight run down the Parkway or Route 22 from our Newark shop — no travel charge.",
      },
      {
        q: "Our Cranford basement has flooded before — is epoxy the right floor?",
        a: "It's the flooring choice that survives it, which is exactly why we install so much of it along the Rahway. Epoxy doesn't absorb, doesn't support mold, and cleans up after water with a wet-vac and a mop instead of a dumpster. What it can't do is stop water getting in — that's a drainage job, and we'll tell you straight if that's what you actually need first.",
      },
      {
        q: "Can you handle industrial floors around Elizabeth and the Bayway corridor?",
        a: "Yes — that corridor is some of the hardest-working concrete in the state, and it's the same work we do at Port Newark ten minutes north. Chemical-resistant high-build epoxy and urethane mortar systems, joint repair with semi-rigid filler, safety striping, and phased installs scheduled around your shifts so production and receiving never stop.",
      },
    ],
  },
];

export const countySlugs = counties.map((c) => c.slug);
export const countyBySlug = (slug: string) => counties.find((c) => c.slug === slug);
export const townsInCounty = (c: County): Town[] => towns.filter((t) => t.county === c.name);
