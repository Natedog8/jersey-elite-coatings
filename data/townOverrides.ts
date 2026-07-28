import type { TownServiceAngle } from "./townServiceAngles";

/**
 * Per-town bespoke copy — overrides the profile matrix in townServiceAngles.ts.
 *
 * Why: the profile matrix fixed the town×service pages as a group (0.69 → ~0.52
 * shingle overlap), but towns *sharing* a profile still peaked around 0.74
 * against each other, because they were reading the same profile paragraphs
 * with only a name swapped. The "estate" profile is the worst case — seven
 * towns across four counties all share it.
 *
 * So every estate town gets its own copy here, written from what is actually
 * different about that town: Montclair's pre-war arts-district housing stock,
 * West Orange's hillside walkouts and Llewellyn Park, Livingston's flat 1960s
 * subdivisions, Ridgewood's village colonials, Morristown's historic core,
 * Westfield's detached garages, Summit's high-and-dry carriage-era stock.
 *
 * Anything not listed here falls through to the profile matrix, which is the
 * right default — writing bespoke copy for all 17 towns × 5 services would be
 * 85 blocks, and the duplication problem only actually bites within a profile.
 */

type ServiceMap = Partial<Record<string, TownServiceAngle>>;

export const townOverrides: Partial<Record<string, ServiceMap>> = {
  /* ═══ MONTCLAIR — pre-war, hilly, design-literate ═══════════════════ */
  montclair: {
    "garage-epoxy-flooring": {
      heading: "Montclair's garages are older than the cars in them",
      body: [
        "A garage in Upper Montclair or the estate section is frequently a converted carriage house or a 1920s detached structure at the end of a long drive. The slabs are thin by modern standards, often poured in sections, and have moved with a century of freeze-thaw. That history means the prep conversation comes before the color conversation, every time.",
        "It also means we quote the two halves separately. Crack routing, spall repair and leveling on a hundred-year-old Montclair slab can rival the cost of the coating itself, and you deserve to see that split rather than have it buried in one number. Once the slab is sound, this town tends to choose the designer flake blends over stock gray.",
      ],
      local: [
        "Carriage-house and detached garages across Upper Montclair and the estate section",
        "Sectional pre-war slabs routed, filled and leveled before any coating",
        "Designer flake blends and coated stem walls, quoted as separate line items",
      ],
    },
    "polyaspartic-floor-coating": {
      heading: "One-day floors on a Montclair street with nowhere to park",
      body: [
        "Montclair's older blocks were laid out before two-car households, and a lot of homes here have a single narrow drive with no street parking to fall back on. Losing the garage for three days is a genuine logistical problem, which is the practical reason polyaspartic sells well in this town rather than any argument about chemistry.",
        "The detached garages help the case too. Most are unheated, and epoxy stops curing properly below about 55°F, so from November onward a standard system means waiting for spring. Polyaspartic keeps curing near 0°F and hands the floor back the same evening, drivable in roughly a day.",
      ],
      local: [
        "Single-day installs where a narrow Montclair drive is the only parking",
        "Unheated detached and carriage garages coated through the winter",
        "Same grinding and crack repair — only the cure schedule compresses",
      ],
    },
    "commercial-epoxy-flooring": {
      heading: "Floors for Montclair's independent storefronts",
      body: [
        "Bloomfield Avenue, Church Street and Watchung Plaza are independent-retail territory — small galleries, restaurants, studios, boutiques and the odd theater. These are design-conscious tenants in old buildings, and the floor usually has to do two jobs at once: look deliberate, and survive a space with no back-of-house to hide anything in.",
        "Seamless epoxy suits that because it can be specified rather than merely installed — pigment matched to the brand, sheen chosen for the room, no grout or seams interrupting a small footprint. The catch in Montclair is always what the last tenant left down, and that removal is the bulk of the labor on nearly every job here.",
      ],
      local: [
        "Independent retail, galleries and restaurants along Bloomfield Avenue",
        "Studio, café and boutique floors around Church Street and Watchung Plaza",
        "Old tile, adhesive and previous coatings removed mechanically first",
      ],
    },
    "basement-epoxy-flooring": {
      heading: "Montclair basements were built as coal cellars",
      body: [
        "The pre-war housing stock here came with basements meant for a furnace and a coal chute — rubble or block foundations, slabs poured straight onto soil, no vapor barrier because nobody was installing one in 1915. Montclair homeowners now finish those spaces as studios, gyms and rec rooms, and the floor is reliably where it goes wrong.",
        "We test before quoting rather than after. The reading decides whether the slab takes a standard build or needs a mitigating primer engineered for vapor drive, and that is a number rather than a judgment call. If it shows active liquid water instead, we will say so — a coating over standing water is a warranty we would not honor and should not sell.",
      ],
      local: [
        "Rubble and block foundations across Upper Montclair and the South End",
        "Studios, home gyms and rec rooms finished in satin rather than gloss",
        "Calcium chloride or RH testing before a Montclair quote is written",
      ],
    },
    "metallic-epoxy-flooring": {
      heading: "Why metallic caught on in Montclair first",
      body: [
        "This town renovates to a standard and has a genuine appetite for materials that look considered, which is why metallic went from novelty to near-default in Montclair basements faster than anywhere else we work. In satin it reads as honed stone — right at home in a house where the kitchen was done properly and the floor is expected to match.",
        "It is also the correct technical answer below grade, where hardwood and laminate spend their lives fighting vapor from the slab. Every pour is worked by hand, so no two Montclair floors match, and we bring physical samples to the house because the same combination looks entirely different under warm and cool light.",
      ],
      local: [
        "Finished basement studios and gyms throughout Upper Montclair and Glen Ridge border streets",
        "Satin and matte topcoats for rooms that are furnished, not parked in",
        "Samples laid on your own slab under your own lighting before you commit",
      ],
    },
  },

  /* ═══ WEST ORANGE — hillside, walkouts, Llewellyn Park ══════════════ */
  "west-orange": {
    "garage-epoxy-flooring": {
      heading: "West Orange garages sit on a hill, and it shows",
      body: [
        "The elevation change across this town is dramatic, and garage slabs reflect it. Tuck-unders built into a slope, garages half a story below the house, driveways that run downhill into the door — all of which means water arrives at the slab rather than draining away from it. Prep here includes working out where the water goes before deciding on a system.",
        "The stock ranges enormously too, from Llewellyn Park estate structures to Pleasantdale split-level tuck-unders, so there is no standard West Orange garage. What is standard is the salt band inside the door and the crack pattern from a slab that has been settling on a hillside for sixty years. Both get ground out and rebuilt before coating.",
      ],
      local: [
        "Hillside tuck-under garages across Pleasantdale and St. Cloud",
        "Estate garages in Llewellyn Park with original sectional slabs",
        "Drainage and water-path assessed before the system is specified",
      ],
    },
    "polyaspartic-floor-coating": {
      heading: "Fast turnarounds on a West Orange hillside drive",
      body: [
        "A steep West Orange driveway is not somewhere you want to leave two cars parked for three days in February, and for tuck-under garages there is often nowhere else for them to go at all. Compressing the whole install into one working day solves a problem that is genuinely about the topography here rather than about convenience.",
        "Cold is the other factor. Tuck-unders and half-below-grade garages on this hill run colder than the air temperature well into spring, and epoxy needs roughly 55°F at the slab to cure to spec. Polyaspartic keeps curing near 0°F, which is why most of our winter West Orange work uses it.",
      ],
      local: [
        "Single-day installs for tuck-unders with no alternative parking",
        "Cold-slab work on half-below-grade garages through the winter",
        "Walkable the same evening, taking vehicles in about 24 hours",
      ],
    },
    "commercial-epoxy-flooring": {
      heading: "Commercial floors along the West Orange corridors",
      body: [
        "Commercial work here concentrates along Main Street, Northfield Avenue and Eagle Rock Avenue — medical and dental suites, salons, fitness studios, restaurants and the service businesses that fill the older retail blocks. Most of it is retrofit into buildings that have been through several tenants, each of whom left a layer on the floor.",
        "Getting that off mechanically is the majority of the job and the majority of an honest quote. After that, a seamless high-build epoxy in a matched color ends the strip-and-wax cycle permanently. We take these spaces over a weekend where we can, and phase the larger floors so nothing closes for a full trading day.",
      ],
      local: [
        "Medical, dental and professional suites along Northfield and Eagle Rock Avenue",
        "Salons, studios and restaurants through the Main Street retail blocks",
        "Weekend takeovers and phased sections so the business keeps trading",
      ],
    },
    "basement-epoxy-flooring": {
      heading: "Walkout basements change the West Orange calculation",
      body: [
        "Because so many West Orange homes are built into a slope, the basement is frequently a walkout with real windows and a door to the garden — which means homeowners treat it as a proper floor of the house rather than storage. The flooring expectation goes up accordingly, and so does the consequence of getting the moisture question wrong.",
        "A walkout has two moisture stories at once: vapor rising through the slab, and water arriving at the uphill wall from the slope above. We test the slab and look hard at the grading before quoting, because those need different answers and only one of them is a flooring problem. Where the slab is sound, epoxy in satin finishes the room properly.",
      ],
      local: [
        "Walkout and daylight basements throughout the hillside neighborhoods",
        "Uphill wall drainage assessed alongside the slab moisture reading",
        "Home gyms, media rooms and in-law suites finished in satin or matte",
      ],
    },
    "metallic-epoxy-flooring": {
      heading: "Metallic on the West Orange estate side",
      body: [
        "Llewellyn Park and the surrounding estate streets produce the most ambitious metallic requests we get in Essex County — large continuous floors where the point is movement running the length of a room rather than a pattern you notice on a small slab. Those need to be poured with enough people to hold a wet edge across the whole span.",
        "That is a staffing decision as much as a material one. Metallic is worked while the resin is still moving, and a cold joint in the middle of a large West Orange floor is visible permanently and cannot be repaired out afterwards. We size the crew to the floor and say up front if a span needs more people than a standard pour.",
      ],
      local: [
        "Large continuous pours in Llewellyn Park and the estate section",
        "Crews sized to hold a wet edge end to end — no cold joints mid-floor",
        "Satin finishes for walkout living space, gloss for showpiece garages",
      ],
    },
  },

  /* ═══ LIVINGSTON — flat, postwar-to-1970s, three-car garages ════════ */
  livingston: {
    "garage-epoxy-flooring": {
      heading: "Livingston has the biggest garages in Essex County",
      body: [
        "Livingston developed later and flatter than Montclair or West Orange, and the result is a town full of generously sized attached garages on level lots — a lot of three-car bays and very few of the awkward pre-war structures we work around elsewhere in the county. The slabs are newer, sounder, and far more consistent.",
        "That changes the economics in your favor. Less remediation and more square footage means the per-foot price drops, which is exactly why designer flake blends, coated stem walls and matched steps get specified here far more often than in towns where the repair budget eats the finish budget first.",
      ],
      local: [
        "Three-car attached garages throughout Riker Hill, Collins and Broadlawn",
        "Newer, flatter slabs needing less remediation than older Essex towns",
        "Better per-foot pricing on larger floors — upgrades genuinely affordable",
      ],
    },
    "polyaspartic-floor-coating": {
      heading: "A three-car Livingston garage back in service the same day",
      body: [
        "The larger the garage, the more a multi-day install actually costs you. A three-car Livingston bay out of action for three days displaces the whole household's parking and usually the storage and the workshop with it. Polyaspartic collapses that to a single working day — walkable that evening, taking cars in about 24 hours.",
        "Livingston's slabs make it realistic. Because the concrete here is generally newer and sounder than the older Essex towns, there is less repair work to blow the schedule, which is the thing that turns a promised one-day install into two. We still walk the floor first and commit honestly either way.",
      ],
      local: [
        "Multi-bay garages completed inside one working day",
        "Sound, newer slabs — less repair risk to the single-day schedule",
        "Aliphatic topcoats that will not amber behind a sunlit door",
      ],
    },
    "commercial-epoxy-flooring": {
      heading: "Livingston's office parks and medical suites",
      body: [
        "Commercial work in Livingston skews professional rather than retail — medical and dental practices, physical therapy and imaging suites, offices along South Livingston Avenue and the Route 10 corridor, plus the back-of-house of the town's larger institutional buildings. These are spaces where the floor has to be cleanable to a standard, not just presentable.",
        "Seamless epoxy is the right answer for that: no grout lines, no VCT seams lifting at doorways, nothing that needs stripping and re-waxing quarterly, and a surface that sanitizes properly. We work evenings and weekends around practice hours and provide the insurance certificates and product submittals facilities managers ask for.",
      ],
      local: [
        "Medical, dental and therapy suites along South Livingston Avenue",
        "Office and institutional back-of-house around the Route 10 corridor",
        "COIs, submittals and after-hours scheduling handled as standard",
      ],
    },
    "basement-epoxy-flooring": {
      heading: "Big flat basements, and what that does to the price",
      body: [
        "A Livingston basement often runs the full footprint of a large, flat house — fifteen hundred to twenty-five hundred square feet is routine. At that size, seams become the enemy: every transition strip and tile joint is another place for dirt and failure to start across an enormous area, and replacing a failed floor of that size is a serious number.",
        "Epoxy gives you one continuous surface wall to wall regardless of size, and the per-foot cost falls as the area grows. This is the scale at which upgrading to metallic or a designer flake blend costs far less than people assume. We still moisture-test first, because a big slab can read very differently at opposite ends.",
      ],
      local: [
        "Full-footprint basements of 1,500–2,500 sq ft across the town",
        "Golf simulators, gyms and media rooms on one seamless surface",
        "Moisture tested at multiple points — large slabs are rarely uniform",
      ],
    },
    "metallic-epoxy-flooring": {
      heading: "Metallic at Livingston scale",
      body: [
        "Scale flatters metallic, and Livingston has the floors for it. On a small slab you see a pattern; across a three-car garage or a full-footprint basement you see genuine movement, with veining running the length of the room and a depth that reads as stone rather than as a coating on concrete.",
        "Large continuous pours are a manpower question. The resin is worked while it is still moving, so covering a big Livingston span means enough people on the floor to keep a wet edge across all of it. We staff to the floor rather than pouring in sections, because a cold joint through the middle of a metallic floor is permanent.",
      ],
      local: [
        "Three-car showpiece garages around Riker Hill and Cheshire",
        "Full-footprint basement bars, lounges and media rooms",
        "Pours staffed to hold a wet edge across the entire span",
      ],
    },
  },

  /* ═══ RIDGEWOOD — village colonials, old detached garages ═══════════ */
  ridgewood: {
    "garage-epoxy-flooring": {
      heading: "Ridgewood's garages are usually older than the house looks",
      body: [
        "The center-hall colonials this village is known for often came with a detached garage at the end of the drive, and that structure is frequently the oldest concrete on the property — poured decades before the current owners, never sealed, and quietly deteriorating behind a beautifully maintained house. It is the single most common surprise in a Ridgewood quote.",
        "None of that rules out an excellent floor; it just moves the money. Crack routing, spall repair and leveling on an original Upper Ridgewood slab can approach the cost of the coating, so we quote structure and finish separately. Once it is sound, this village overwhelmingly chooses designer flake with the stem walls coated to match.",
      ],
      local: [
        "Original detached garages behind center-hall colonials in Upper Ridgewood",
        "Century-old slabs routed, patched and leveled before any finish work",
        "Coated stem walls, curbs and steps so no raw concrete edge shows",
      ],
    },
    "polyaspartic-floor-coating": {
      heading: "Reading a one-day quote in Ridgewood",
      body: [
        "Ridgewood gets more one-day floor advertising than almost any town we serve, and the chemistry those companies sell is real — we install it too. The variable is what happens before it. Ask any contractor whether they diamond-grind or acid-etch, because etching does not open concrete the way mechanical grinding does and it is the corner most often cut on a speed-sold floor.",
        "Then ask whether the topcoat is aliphatic. Aromatic polyureas are cheaper and amber within a couple of years, which you will notice in a Ridgewood garage with glass panels in the door. We grind every slab and use aliphatic topcoats, which is why our one-day floor prices where it does.",
      ],
      local: [
        "Single-day installs across Upper Ridgewood, Willard and the Heights",
        "Diamond grinding on every slab — never acid etching, regardless of schedule",
        "Aliphatic topcoats that will not yellow behind a glass-panel door",
      ],
    },
    "commercial-epoxy-flooring": {
      heading: "Village storefront floors in Ridgewood",
      body: [
        "The Ridgewood CBD is walkable independent retail — boutiques, restaurants, salons and professional offices in older buildings on a street where people pass several alternatives before reaching your door. A tired floor reads as a tired business in that context, and there is nowhere in a small storefront to hide one.",
        "Seamless epoxy solves it permanently: no grout to discolor, no VCT seam lifting at the threshold where everyone walks, and no quarterly strip-and-wax. The practical constraint is access — these are narrow storefronts with no loading dock, so staging and equipment access get planned and priced before install day rather than discovered on it.",
      ],
      local: [
        "Boutique, restaurant and salon floors through the Ridgewood CBD",
        "Professional and medical suites in the older village buildings",
        "Staging and access planned in advance for narrow storefronts",
      ],
    },
    "basement-epoxy-flooring": {
      heading: "Finishing a Ridgewood basement properly",
      body: [
        "A finished basement in this village is treated as genuine living space — a gym, a playroom, a media room, sometimes an au pair suite. What undermines it is flooring chosen as though the room were above grade. Concrete below grade moves vapor continuously, and carpet, laminate and engineered board all fight that rather than working with it.",
        "Epoxy works with it, and in satin or matte it does not read as a garage floor at all. One piece of practical advice specific to a renovation: do the floor before the walls go up. Coating an open basement lets us run to the perimeter and cove the edges properly, and nobody is protecting finished trim from grinding dust.",
      ],
      local: [
        "Full-footprint finished basements across Willard, Somerville and the Heights",
        "Floors coated before framing so edges can be run and coved properly",
        "Satin and matte finishes for gyms, playrooms and media rooms",
      ],
    },
    "metallic-epoxy-flooring": {
      heading: "Metallic in Ridgewood — see it before you buy it",
      body: [
        "Between the estate streets and the village retail, Ridgewood asks for a lot of metallic work. The one thing we insist on here is samples on site. Metallic is hand-worked, so the same color combination lands differently on every floor, and it looks genuinely different under the warm light of a finished basement than under a garage fixture.",
        "We bring physical samples and lay them on your actual slab, in your actual lighting, in gloss and satin and matte. Choosing from a photograph is how people end up disappointed by a floor that is technically exactly what they asked for — and with a hand-worked finish there is no going back and adjusting it afterwards.",
      ],
      local: [
        "Showpiece garage bays and basement bars throughout the village",
        "Physical samples laid on your own slab, under your own lighting",
        "Gloss, satin and matte compared side by side before anything is ordered",
      ],
    },
  },

  /* ═══ MORRISTOWN — historic core, restaurants, estate edge ══════════ */
  morristown: {
    "garage-epoxy-flooring": {
      heading: "Two very different garages in Morristown",
      body: [
        "Morristown splits cleanly. In the historic core around the Green you have carriage-era and early-twentieth-century structures on tight lots, with thin sectional slabs and genuine access constraints. A mile out toward Normandy Park and Convent Station you are into multi-bay estate garages on open property with room to work.",
        "They are almost different trades. The historic garages are prep-heavy and logistics-heavy, and we quote the repair honestly because it can rival the coating. The estate garages are about finish level and point loads — collector cars, lifts, jack stands — and get built for that rather than for a car's footprint.",
      ],
      local: [
        "Carriage-era garages on tight lots around the Morristown Green",
        "Multi-bay estate garages through Normandy Park and Convent Station",
        "Lift-rated build under jack stands and two-post baseplates",
      ],
    },
    "polyaspartic-floor-coating": {
      heading: "Single-day floors for Morristown's constrained sites",
      body: [
        "Around the Green there is often nowhere to stage equipment and nowhere for the cars to go, so every extra day on site is a genuine imposition rather than an inconvenience. Compressing grinding, base, flake and topcoat into one working day is worth more here than the price difference, and it is why the historic core is mostly polyaspartic work for us.",
        "Out on the estate side the driver is different but points the same way: a four-bay garage out of service for three days displaces four vehicles and usually the workshop too. Either way the prep is unchanged — we grind, route and moisture-test exactly as we would on a three-day install.",
      ],
      local: [
        "Single-day installs where downtown Morristown offers no staging room",
        "Multi-bay estate garages turned around inside one working day",
        "Unheated barns and outbuildings coated through the winter months",
      ],
    },
    "commercial-epoxy-flooring": {
      heading: "Restaurant and retail floors around the Green",
      body: [
        "Downtown Morristown is one of the densest independent restaurant and bar scenes in the region, wrapped around a historic core of older buildings with small footprints and no back-of-house to speak of. Front-of-house floors take heavy foot traffic and get looked at closely, and the buildings rarely offer an easy way to get equipment in.",
        "We work these between services or overnight, stage tight, and run HEPA extraction on the grinders because the demolition phase is what disturbs neighbours in a building like this. Seamless epoxy then ends the strip-and-wax cycle for good, in a pigment matched to the room rather than the nearest stock color.",
      ],
      local: [
        "Restaurant, bar and retail floors ringing the Morristown Green",
        "Overnight and between-service installs with HEPA dust extraction",
        "Professional and medical suites through the surrounding blocks",
      ],
    },
    "basement-epoxy-flooring": {
      heading: "Morristown basements, historic and otherwise",
      body: [
        "In the older parts of town the basements are stone or rubble foundation with slabs poured straight onto soil, and they behave accordingly — steady vapor drive, seasonal damp, efflorescence on the slab. Out toward Morris Township the houses are newer and larger, and the basements run the full footprint as finished living space.",
        "Both start with the same test. A calcium chloride or RH reading decides whether the slab takes a standard build or needs a mitigating primer, and on the historic side that reading is frequently high enough to matter. Where the answer is active liquid water rather than vapor, we say so and point you at drainage first.",
      ],
      local: [
        "Stone and rubble foundations in the historic core and Boonton edge",
        "Full-footprint finished basements out toward Morris Township",
        "Moisture tested and primed to the reading, not to an assumption",
      ],
    },
    "metallic-epoxy-flooring": {
      heading: "Metallic for Morristown collectors and hospitality",
      body: [
        "Two very different clients ask for metallic here. Collector garages out toward Harding and Mendham, where the car is the point and the floor is the backdrop — those get gloss, aliphatic topcoats that never amber, and a build sized for lift and jack-stand point loads.",
        "And the hospitality floors downtown, where a metallic pour reflects light through a small room and photographs extremely well, which matters more every year for a restaurant or bar. Same system underneath, entirely different finish decision on top, and both are hand-worked so no two floors in this town match.",
      ],
      local: [
        "Collector and show garages toward Harding, Mendham and Convent Station",
        "Bar, lounge and restaurant floors around the Green",
        "Aliphatic clear topcoats — no ambering behind glass doors",
      ],
    },
  },

  /* ═══ WESTFIELD — detached garages older than the driveway ══════════ */
  westfield: {
    "garage-epoxy-flooring": {
      heading: "Westfield's detached garages need the most prep in Union County",
      body: [
        "Around Stoneleigh Park and the Gardens, the garage is usually a detached structure at the end of a long drive and is often the oldest concrete on the property. It predates the current driveway, has never been sealed, and has spent decades taking runoff from a slope it was never graded away from. That is the standard Westfield starting point.",
        "It is entirely workable — it just moves where the money goes. Crack routing, spall repair and leveling on an original slab here can approach the cost of the coating, so we quote structure and finish as separate lines. Once the concrete is sound, this town tends to specify designer flake with the stem walls and steps coated to match.",
      ],
      local: [
        "Original detached garages behind the colonials of Stoneleigh Park and the Gardens",
        "Slabs that predate the driveway, routed and rebuilt before coating",
        "Structure and finish quoted separately so you can see the split",
      ],
    },
    "polyaspartic-floor-coating": {
      heading: "One-day installs on a long Westfield drive",
      body: [
        "A detached Westfield garage at the end of a long drive means the cars have nowhere convenient to sit while the floor cures, and the drive itself is often the only overflow parking. Collapsing the install into one working day removes the problem entirely — walkable that evening, taking vehicles in roughly 24 hours.",
        "The cold argument applies with force here too. These detached structures are unheated and run colder than the air well into spring, and epoxy needs about 55°F at the slab to cure to spec. Polyaspartic keeps curing near 0°F, which makes the winter months genuinely workable rather than a waiting game.",
      ],
      local: [
        "Single-day turnarounds where the drive is the only overflow parking",
        "Unheated detached garages coated from November through March",
        "Identical grinding and repair — only the cure schedule compresses",
      ],
    },
    "commercial-epoxy-flooring": {
      heading: "Downtown Westfield storefronts",
      body: [
        "Westfield's downtown is a genuinely walkable independent retail district — boutiques, restaurants, salons and professional offices in older buildings on streets where shoppers pass several alternatives before reaching your door. The floor is part of how the space reads, and in a small storefront there is nowhere to hide a tired one.",
        "Seamless epoxy ends it permanently: no grout to discolor, no VCT seam lifting at the threshold, no quarterly strip-and-wax contract. What shapes the schedule and the price is what the previous tenant left down, and getting that off mechanically is usually the largest single piece of labor on a Westfield retrofit.",
      ],
      local: [
        "Boutique, restaurant and salon floors through downtown Westfield",
        "Professional and medical suites in the older village buildings",
        "Old tile, adhesive and coatings removed to sound concrete first",
      ],
    },
    "basement-epoxy-flooring": {
      heading: "Westfield basements sit between two water tables",
      body: [
        "Westfield is not on the Rahway the way Cranford is, but it is close enough that the low-lying streets behave very differently from the higher ground near the Gardens. Two houses a few blocks apart can read completely differently on a moisture test, which is why we will not quote a Westfield basement from a description over the phone.",
        "We test, then specify. A normal reading takes a standard build; an elevated one gets a mitigating primer engineered for vapor drive. Where a basement is being finished as living space — which is most of them here — we run satin or matte so the floor reads as a room rather than a slab, and coat before the framing goes up.",
      ],
      local: [
        "Moisture readings that vary street by street across the town",
        "Full-footprint finished basements around Stoneleigh Park and Wychwood",
        "Coated before framing so perimeters and coves are done properly",
      ],
    },
    "metallic-epoxy-flooring": {
      heading: "Metallic in Westfield's finished basements",
      body: [
        "Most of the metallic work we do in Union County is here and in Summit, and it is almost always below grade rather than in a garage. A finished Westfield basement is a gym, a media room or a guest suite, and metallic in satin reads as honed stone — appropriate for a room that is furnished rather than parked in.",
        "It is also the right technical call below grade, where hardwood and laminate spend their lives fighting vapor from the slab. Every pour is hand-worked so no two floors match, and we bring samples to the house because the same combination looks entirely different under basement lighting than it does in a photograph.",
      ],
      local: [
        "Basement gyms, bars and media rooms across the Gardens and Brightwood",
        "Satin and matte finishes for furnished below-grade rooms",
        "Hand-worked pours with samples shown on your own slab first",
      ],
    },
  },

  /* ═══ NEWARK — home base, port, Ironbound ══════════════════════════ */
  newark: {
    "garage-epoxy-flooring": {
      heading: "Newark garages, and the advantage of being local",
      body: [
        "Newark garage work is a mix we do not get anywhere else: detached alley garages behind Forest Hill and Vailsburg two-families, tuck-unders under brick row houses, and small shop bays that are technically commercial but priced like a garage. The slabs are old, frequently coated once already, and rarely level.",
        "The advantage is that we are here. Our shop is in Newark, so an Ironbound or North Ward job gets the earliest slot on the calendar and the shortest drive — which matters most when a floor turns out to need more repair than the walkthrough showed and we can restock without losing the day.",
      ],
      local: [
        "Detached alley garages behind Forest Hill and Vailsburg",
        "Tuck-unders and small shop bays across the North Ward and Ironbound",
        "Headquartered here — earliest scheduling and no travel charge",
      ],
    },
    "polyaspartic-floor-coating": {
      heading: "Same-day floors from a shop that's ten minutes away",
      body: [
        "For a Newark shop or service bay, a floor that costs three days of trading is not a floor you install. Polyaspartic compresses grinding, base, flake and topcoat into one working day, or overnight — close after service, reopen in the morning with the floor already taking foot traffic.",
        "Being based in the city is what makes that reliable rather than aspirational. Everything comes from a shop inside the same municipality, so a mid-job restock is twenty minutes round trip instead of an hour and a half. That is the difference between a one-day promise that holds and one that quietly becomes two.",
      ],
      local: [
        "Overnight turnarounds for Ironbound and downtown businesses",
        "Service bays back in use the next morning",
        "Winter work on unheated detached garages across the city",
      ],
    },
    "commercial-epoxy-flooring": {
      heading: "Newark's commercial floors are old, layered and busy",
      body: [
        "Ferry Street, Bloomfield Avenue, Springfield Avenue and downtown carry an unusually dense mix — restaurants, retail, salons, medical suites, auto service — in buildings that are mostly pre-war and have cycled through many tenants. The floor is usually a layer cake of VCT, adhesive, tile mortar and at least one previous coating.",
        "Stripping that back mechanically to sound concrete is the majority of the labor, and it is the line a cheap quote omits. Once the slab is clean, seamless epoxy ends the strip-and-wax cycle for good. We work weekends and overnights because almost nothing in this city can afford to close on a weekday.",
      ],
      local: [
        "Ferry Street and Ironbound restaurant and retail floors",
        "Medical and office suites around University Heights and downtown",
        "Multi-tenant layer cakes stripped to sound concrete first",
      ],
    },
    "basement-epoxy-flooring": {
      heading: "Newark basements under century-old brick",
      body: [
        "The brick two- and three-family stock across Newark came with basements built for a coal furnace — block or rubble foundations, slabs poured straight onto soil, and a century of settling since. They are now laundry rooms, storage, workshops and increasingly finished space, and bare concrete is the wrong floor for any of those.",
        "We test before quoting. The reading decides whether the slab takes a standard build or a vapor-mitigating primer, and on stock this old the reading is frequently high enough to matter. Where it shows active liquid water rather than vapor, we say so — that is a drainage job and coating over it just delays the conversation.",
      ],
      local: [
        "Block and rubble foundations across the North Ward and Weequahic",
        "Laundry, storage and workshop floors that have never been sealed",
        "Moisture tested on century-old slabs before anything is quoted",
      ],
    },
    "metallic-epoxy-flooring": {
      heading: "Metallic for Newark's bars, restaurants and studios",
      body: [
        "Almost all our Newark metallic work is commercial. Bars and restaurants in the Ironbound and downtown, salons, barbershops and studios — spaces where the floor is one of the few surfaces with room to make an impression, and where a pour that reflects light and photographs well earns its cost back in a way a solid color does not.",
        "Underneath the decorative coat it is a full epoxy build, so these old Newark slabs get the same treatment as any other floor here: mechanical grinding, crack and spall repair, and a moisture test before the system is specified. The clear topcoat takes the wear, and a recoat every few years brings the whole floor back.",
      ],
      local: [
        "Bar, restaurant and lounge floors through the Ironbound and downtown",
        "Salon, barbershop and studio floors across the city",
        "Full epoxy build underneath — old slabs prepped, not just covered",
      ],
    },
  },

  /* ═══ ELIZABETH — refinery belt, port, dense commercial ═════════════ */
  elizabeth: {
    "garage-epoxy-flooring": {
      heading: "Elizabeth garages sit in a working city",
      body: [
        "Elizabeth is dense and industrial in a way that shows up on the floors. Garages here are mostly narrow, attached to two- and three-family houses through Elmora and Peterstown, or they are small commercial bays serving the trades that keep the Bayway corridor and the port running. Either way they take heavier use than a suburban garage.",
        "That pushes the specification up. A floor that sees work vehicles, tools and constant in-and-out needs more film build and a topcoat rated for fluid contact, not a residential-weight system. The prep is unchanged — grind, route, patch the salt band by the door — but what goes on top of it is closer to a shop floor than a family garage.",
      ],
      local: [
        "Narrow attached garages through Elmora and Peterstown",
        "Small commercial and trade bays serving the Bayway corridor",
        "Heavier film build and fluid-rated topcoats for working use",
      ],
    },
    "polyaspartic-floor-coating": {
      heading: "Overnight floors for Elizabeth's shift-work businesses",
      body: [
        "A lot of Elizabeth runs on shifts — port-adjacent logistics, trades, service businesses, kitchens. For those, an overnight floor is not a luxury, it is the only version of the job that can happen at all. We start after the last shift and hand the space back before the next one, using fast-cure systems that take foot traffic in hours.",
        "The same argument covers residential work in the winter. These attached and semi-detached garages are unheated, and epoxy stalls below about 55°F. Polyaspartic keeps curing near 0°F, which means we are installing in Elizabeth in January while a standard system would be waiting for April.",
      ],
      local: [
        "Overnight installs scheduled between shifts",
        "Fast-cure systems for kitchens and service bays that cannot close",
        "Winter work on unheated garages across the city",
      ],
    },
    "commercial-epoxy-flooring": {
      heading: "Elizabeth's commercial strips are relentless",
      body: [
        "Elmora Avenue, Morris Avenue and the Peterstown blocks carry some of the busiest independent retail in the county — bakeries, restaurants, markets, salons, barbershops, all trading long hours seven days a week. There is rarely a convenient window, so the work happens overnight and in phases rather than over a comfortable weekend.",
        "The buildings are old and multi-tenanted, so the floor is layered with whatever previous occupants left down. Getting that off mechanically is the bulk of the labor and belongs on the quote as a visible line. What replaces it is seamless, mop-clean, and never needs stripping or waxing again.",
      ],
      local: [
        "Bakery, market and restaurant floors through Elmora and Peterstown",
        "Retail and service floors along Morris Avenue and Route 1&9",
        "Overnight and phased installs for businesses trading seven days",
      ],
    },
    "basement-epoxy-flooring": {
      heading: "Elizabeth basements sit low and work hard",
      body: [
        "Much of Elizabeth is low-lying and close to the water, and the housing stock is old and dense. Basements here are working spaces — laundry, storage, workshops, and in the multi-family houses often shared between units — with slabs poured on grade long before vapor barriers were standard.",
        "So the moisture test is not a formality in this city, it is the whole specification. A normal reading takes a standard build; an elevated one gets a mitigating primer rated to what the slab actually measures. Sealing the concrete stops the dusting and staining that makes these spaces feel unusable, and it cleans up with a mop afterwards.",
      ],
      local: [
        "Low-lying on-grade slabs with genuine vapor drive",
        "Shared basement and laundry floors in multi-family houses",
        "Primed to the measured reading, not to an assumption",
      ],
    },
    "metallic-epoxy-flooring": {
      heading: "Metallic for Elizabeth's storefront businesses",
      body: [
        "Where metallic appears in Elizabeth it is nearly always commercial — a salon, a barbershop, a restaurant or a small retail space along Elmora or Morris Avenue where the owner wants the room to look considerably more expensive than the fit-out budget was. A metallic floor delivers that better than almost any other single decision.",
        "For a space trading seven days, the topcoat is the part that matters. We build the clear heavy and rate it for the traffic the floor actually sees, so the decorative coat underneath is protected and never takes the wear. Every several years a recoat brings it all back without touching the metallic beneath.",
      ],
      local: [
        "Salon, barbershop and restaurant floors along Elmora and Morris Avenue",
        "Heavy clear topcoats sized for seven-day trading",
        "Refreshable with a recoat rather than a rebuild",
      ],
    },
  },

  /* ═══ JERSEY CITY — condo boards, lofts, scale ══════════════════════ */
  "jersey-city": {
    "garage-epoxy-flooring": {
      heading: "In Jersey City the building is half the job",
      body: [
        "Very little garage work here is a homeowner and a driveway. It is a shared parking level in a Newport or Exchange Place building, a podium garage under a Journal Square development, or a ground-floor space in a converted industrial building — which means there is a management company, a board, and a set of rules before there is a floor.",
        "We handle that side as a matter of course: certificates of insurance naming the right parties, elevator and loading-dock booking, floor protection through common areas, resident notice, and phasing so a section of the garage always stays usable. Get us in front of the board early and the approval is usually straightforward.",
      ],
      local: [
        "Shared and podium parking levels at Newport, Exchange Place and Journal Square",
        "COIs, elevator booking and resident notice handled as standard",
        "Phased so residents never lose access to the whole garage",
      ],
    },
    "polyaspartic-floor-coating": {
      heading: "One day is what gets a Jersey City board to say yes",
      body: [
        "In a building with a board, the deciding factor is rarely price — it is how many days residents are inconvenienced. A three-day install means three days of blocked spaces, three elevator bookings and three rounds of complaints. One day is a proposal that gets approved; three is one that gets deferred to the next meeting.",
        "Polyaspartic is also low-odor, which matters more here than anywhere. Solvent smell traveling up a stairwell in an occupied high-rise is a genuine problem, and a same-evening return to service means residents get their spaces back before they notice. We still moisture-test — speed does not change what a damp podium slab will do to a coating.",
      ],
      local: [
        "Single-day installs that clear condo and co-op board approval",
        "Low-odor systems for occupied buildings with shared stairwells",
        "Spaces handed back the same evening rather than days later",
      ],
    },
    "commercial-epoxy-flooring": {
      heading: "Ground-floor retail and office build-outs",
      body: [
        "Jersey City commercial work splits between the new towers and the old streets. Newport and Exchange Place bring office, medical and coworking build-outs on newer slabs where the work is straightforward. Newark Avenue and Grove Street bring ground-floor retail in older buildings where the slab is below street grade and has had four tenants.",
        "The second kind needs a moisture test before a quote, not after. Both kinds need access planning — no parking, no loading dock, narrow frontage — which we price in rather than discovering on install day. Seamless epoxy then removes the grout lines, VCT seams and quarterly waxing permanently.",
      ],
      local: [
        "Office, medical and coworking build-outs at Newport and Exchange Place",
        "Ground-floor retail and restaurants along Newark Avenue and Grove Street",
        "Below-grade storefront slabs tested before the quote is written",
      ],
    },
    "basement-epoxy-flooring": {
      heading: "Below-grade space in a city built on fill",
      body: [
        "Much of downtown Jersey City sits on fill, and the brownstone-era garden levels along the waterfront have been moving vapor since they were built. Anything laid loose over that — carpet, laminate, glued vinyl — is on a countdown from the day it goes in, and it comes out in a dumpster rather than being dried and reused.",
        "Epoxy over a correctly specified mitigating primer does not care. It is seamless, does not absorb, and recovers from a wet season with a wet-vac and a mop. What we will not do is coat over active intrusion — if the slab is taking liquid water, that is drainage and waterproofing work first, and we will tell you rather than sell around it.",
      ],
      local: [
        "Garden-level and below-grade units in Paulus Hook, Van Vorst and Hamilton Park",
        "Fill-built downtown slabs with real vapor drive",
        "Mitigating primers specified to the measured reading",
      ],
    },
    "metallic-epoxy-flooring": {
      heading: "Metallic over a Jersey City loft slab",
      body: [
        "Converted industrial buildings across Downtown and the Heights are full of concrete that owners want to keep as the floor but not keep bare. Metallic threads that exactly: the slab stays the floor, with color, depth and movement worked into it by hand and a sealed seamless surface over the top. Against brick walls and exposed joists it reads correctly where tile never would.",
        "A loft slab is usually the ideal substrate — thick, sound, and already flat. We grind it open, repair what needs repairing, test it, and build the metallic system on top. You keep the concrete floor you bought the place for, and it stops shedding dust and staining permanently.",
      ],
      local: [
        "Converted loft and warehouse residences across Downtown and the Heights",
        "Bar, restaurant and retail floors on Newark Avenue",
        "Existing loft slabs kept and finished rather than covered over",
      ],
    },
  },

  /* ═══ HOBOKEN — mile square, water table, zero parking ══════════════ */
  hoboken: {
    "garage-epoxy-flooring": {
      heading: "Hoboken barely has garages, and that's the whole problem",
      body: [
        "A mile square with almost no off-street parking means a Hoboken garage is a genuinely scarce asset — a tuck-under beneath a brownstone, a ground-floor space in a converted building, or a spot in a shared building garage. They are small, they sit low, and they are worth more per square foot than almost any floor we coat.",
        "Small and low means the specification is dominated by moisture rather than traffic. We moisture-test every Hoboken garage slab, and where the reading calls for it the system starts with a vapor-barrier primer. The floor area is modest enough that the finish upgrade barely moves the total, so most owners take the better system.",
      ],
      local: [
        "Tuck-under garages beneath brownstones across Uptown and Midtown",
        "Shared building garages where a single space is at a premium",
        "Vapor-barrier primers as the default this close to the river",
      ],
    },
    "polyaspartic-floor-coating": {
      heading: "In Hoboken, days on site are the real cost",
      body: [
        "There is nowhere to put a truck, nowhere to stage material, and nowhere for a displaced car to go. Every additional day on a Hoboken job compounds all three problems, which is why the single-day polyaspartic system is our default recommendation here rather than an upsell — it is genuinely the cheaper option once the disruption is priced in.",
        "The catch is that speed cannot outrun the water table. Hoboken's is famously high, and a fast floor over an untreated damp slab blisters exactly as fast as a slow one. We test first and will tell you if the honest answer is that this floor needs a mitigating primer and an extra day.",
      ],
      local: [
        "Single-day installs where there is nowhere to stage or park",
        "Low-odor systems for occupied buildings with units above",
        "Moisture tested first — speed does not beat a high water table",
      ],
    },
    "commercial-epoxy-flooring": {
      heading: "Washington Street storefronts and the space behind them",
      body: [
        "Washington Street is dense, walkable and competitive — restaurants, bars, boutiques and salons where customers pass a dozen alternatives on the way to your door. The frontages are narrow, the back-of-house is minimal, and the floor is a large share of what anyone sees when they walk in.",
        "The practical constraints define the schedule. No loading dock, no parking, permits needed for anything on the street, and neighbors above who notice grinding. We plan staging and access before install day, run HEPA extraction through the demolition phase, and work overnight so the block never sees the disruption.",
      ],
      local: [
        "Restaurant, bar and boutique floors along Washington Street",
        "Street permits and staging arranged before install day",
        "HEPA extraction and overnight scheduling for occupied blocks",
      ],
    },
    "basement-epoxy-flooring": {
      heading: "Everyone in Hoboken already knows about the water",
      body: [
        "This is the one town where nobody needs convincing. The water table is high, the storms are memorable, and garden-level and basement spaces here have been dealing with it for a century. Any flooring that traps moisture against the slab is a decision you make twice, and most people in Hoboken have already made it twice.",
        "Epoxy over a mitigating primer is the finish that recovers instead of being replaced — seamless, non-absorbent, cleaned with a wet-vac and a mop. The limit is worth stating plainly: it survives water, it does not stop water. If the slab is taking on liquid, that is drainage work first, and we will say so rather than warranty something that cannot hold.",
      ],
      local: [
        "Garden-level and below-grade units across the Southwest and Midtown",
        "Floors that recover from a wet season rather than being torn out",
        "Straight answers about what a coating cannot fix",
      ],
    },
    "metallic-epoxy-flooring": {
      heading: "Metallic in a small Hoboken space",
      body: [
        "Hoboken rooms are small, and that changes what metallic does for them. In a compact garden-level unit or a narrow storefront, a reflective floor with depth in it makes the space read considerably larger and brighter than a flat color — it is doing spatial work, not just decorative work, which is why it suits this town.",
        "Small also means affordable. A metallic system prices per square foot at a premium, but on a Hoboken footprint the difference between a standard finish and a showpiece one is often a few hundred dollars rather than a few thousand. The same moisture rules apply underneath — it is a full epoxy build on a properly primed slab.",
      ],
      local: [
        "Compact garden-level and storefront floors made to read larger",
        "Premium finish at a modest total on a small footprint",
        "Full epoxy build with the same vapor management underneath",
      ],
    },
  },

  /* ═══ PATERSON — mills, industry, Silk City ═════════════════════════ */
  paterson: {
    "garage-epoxy-flooring": {
      heading: "Paterson floors have usually had a previous life",
      body: [
        "Garage and shop floors in Paterson tend to come with history — a previous coating, a patched section from a repair nobody documented, decades of oil, and concrete poured when the mills were still running. Nothing about that rules out a good floor, but it does mean we test rather than assume before committing to a system.",
        "That means grinding through whatever is there to clean concrete, degreasing what remains, and pulling an adhesion test on the prepared slab where contamination is deep. Surface oil is cosmetic; oil that has migrated into the concrete is what actually breaks bonds, and testing is the only way to know which one you have.",
      ],
      local: [
        "Detached and shop garages across the Eastside and South Paterson",
        "Previous coatings ground off rather than coated over",
        "Adhesion tested where oil has soaked into the slab",
      ],
    },
    "polyaspartic-floor-coating": {
      heading: "Fast floors for Paterson's working shops",
      body: [
        "For a Paterson shop, downtime is the entire cost of a new floor. A machine shop, a garage bay or a small production space cannot give up three days, so the work happens in one — or overnight, closing after the last shift and reopening with the floor already taking foot traffic.",
        "None of the preparation changes to achieve that. We still grind, still route and fill the cracks, still degrease and test where the slab is contaminated. What changes is cure chemistry: one to two hours between coats instead of twelve to twenty-four. Anyone offering a same-day floor here without mechanical grinding is buying the speed from the wrong place.",
      ],
      local: [
        "Overnight turnarounds for Eastside shops and production space",
        "Single-day installs where a bay cannot be spared for three days",
        "Full grinding and degreasing regardless of the compressed schedule",
      ],
    },
    "commercial-epoxy-flooring": {
      heading: "Paterson's commercial floors work for a living",
      body: [
        "The commercial mix here is dense and practical — markets, bakeries, restaurants, auto service and small manufacturing along Main Street, Market Street and through South Paterson. These are not showroom floors. They need to survive constant traffic, spills and cleaning, and look presentable while doing it.",
        "That points to a heavier build than a retail fit-out elsewhere would need, with a topcoat rated for the actual chemistry the floor sees. The buildings are old and multi-tenanted, so whatever is currently down comes off mechanically first — and on Paterson stock that removal is frequently the single largest line on the quote.",
      ],
      local: [
        "Market, bakery and restaurant floors through Main Street and South Paterson",
        "Auto service and small production floors across the Eastside",
        "Heavier builds and chemistry-rated topcoats for working spaces",
      ],
    },
    "basement-epoxy-flooring": {
      heading: "Paterson basements under mill-era housing",
      body: [
        "The housing stock around the Great Falls and the Eastside is old and densely packed, and the basements match — low ceilings, block or stone foundations, slabs poured directly on soil. Most are storage, laundry and utility space rather than finished rooms, and most have never had anything done to the floor at all.",
        "Sealing the concrete is most of the improvement. It stops the constant dusting, makes the space cleanable with a mop, and brightens a windowless room enough that existing lighting suddenly works. We moisture-test first, because slabs of this age and this close to the river vary far more than their identical exteriors suggest.",
      ],
      local: [
        "Block and stone foundations around the Great Falls district",
        "Storage, laundry and utility floors sealed for the first time",
        "Older riverside slabs tested individually rather than assumed",
      ],
    },
    "metallic-epoxy-flooring": {
      heading: "Metallic where Paterson wants to make an impression",
      body: [
        "Metallic in Paterson is a commercial decision. It goes into salons, barbershops, restaurants and lounges — spaces where the fit-out budget is finite and the floor is the surface with the most square footage to work with. A metallic pour makes a modest room look considerably more expensive than it cost.",
        "The engineering is unchanged from any other floor in this city. It is a full epoxy build on a slab that has usually been through something, so grinding, repair and a moisture test come before the decorative coat. The clear topcoat takes the wear, built heavy for a space that trades every day.",
      ],
      local: [
        "Salon, barbershop and lounge floors across the city",
        "Restaurant and market floors that trade seven days",
        "Full prep underneath — Paterson slabs are never straightforward",
      ],
    },
  },

  /* ═══ PARAMUS — retail corridor, blue laws ══════════════════════════ */
  paramus: {
    "garage-epoxy-flooring": {
      heading: "Paramus garages are quiet, which is the point",
      body: [
        "Behind the retail corridors, Paramus is cul-de-sac suburbia — ranches, splits and colonials with attached two-car garages on decent lots. The slabs are mid-century, generally sound, and the work is refreshingly predictable compared to the older Bergen towns a few miles north.",
        "Predictable means less remediation, which means more of the budget can go into the finish. Designer flake blends, coated stem walls and curbs, steps and aprons done to match — the upgrades that make a garage read as finished rather than merely sealed are genuinely affordable when the slab is not eating the quote first.",
      ],
      local: [
        "Attached two-car garages on the cul-de-sacs behind the retail corridors",
        "Sound mid-century slabs needing less repair than older Bergen stock",
        "Budget available for coated stem walls, curbs and matched steps",
      ],
    },
    "polyaspartic-floor-coating": {
      heading: "Reading the one-day pitch in franchise country",
      body: [
        "Paramus gets more one-day floor advertising than almost anywhere in the state, and the chemistry being sold is real — we install it too. What varies enormously is the preparation. Ask any contractor whether they diamond-grind or acid-etch, because etching does not open concrete the way grinding does and it is the corner most often cut when speed is the selling point.",
        "Then ask whether the topcoat is aliphatic. Cheaper aromatic polyureas amber within a couple of years, which shows badly in a Paramus garage with glass panels in the door. We grind every slab and use aliphatic topcoats, and those two answers are the reason our one-day floor prices where it does.",
      ],
      local: [
        "Single-day installs across the township's residential streets",
        "Diamond grinding on every slab, regardless of the schedule sold",
        "Aliphatic topcoats that hold their color behind a glass-panel door",
      ],
    },
    "commercial-epoxy-flooring": {
      heading: "Bergen's blue laws hand Paramus retail a free window",
      body: [
        "Paramus sits in the only county in the country where most retail is legally closed on Sundays, and for floor work that is a genuine gift. Saturday night to Monday morning is a recurring, guaranteed, zero-revenue-loss window — we take the space at close on Saturday, grind and coat through Sunday, and hand back a finished floor for Monday open.",
        "The floors themselves have to hold up under retail lighting on the Route 4 and 17 corridor, which is unforgiving of seams, patches and wax swirl across a large span. Seamless high-build epoxy in a brand-matched color removes all of it, with striping, walkways and logo inlays under the same topcoat.",
      ],
      local: [
        "Garden State Plaza and Bergen Town Center adjacent retail and showrooms",
        "Sunday-closure installs — the cleanest window in the state",
        "Brand-matched color, walkways and logo inlays under one topcoat",
      ],
    },
    "basement-epoxy-flooring": {
      heading: "Paramus basements are straightforward, and that's rare",
      body: [
        "Compared with the older Bergen towns and the river-adjacent parts of the county, Paramus basements are relatively easy work. Mid-century construction on reasonable ground, poured foundations rather than rubble, and slabs that generally test within normal range. Not always — but far more often than in Hackensack or the low ground toward the Meadowlands.",
        "That keeps the cost down and widens the options. With less remediation required, homeowners here can put the money into the finish, which is why a lot of Paramus basements end up with metallic or a designer flake blend rather than a plain build. We still test every slab, because relatively easy is not the same as assumed.",
      ],
      local: [
        "Mid-century poured foundations testing within normal range",
        "Less remediation, so more budget available for the finish",
        "Finished basements, gyms and playrooms across the township",
      ],
    },
    "metallic-epoxy-flooring": {
      heading: "Metallic on the Paramus retail corridor",
      body: [
        "Showroom and retail metallic is what we do most of in Paramus. On the Route 4 and 17 corridor a metallic floor reflects the store's lighting back through the space, makes a large room feel finished rather than cavernous, and photographs far better than any solid color — which matters for a retailer whose customers arrive via a screen.",
        "The question retailers ask is durability, and the answer is that the metallic layer never takes the wear. The clear topcoat does, built heavy and specified for the traffic the floor actually sees. Every several years a recoat of the clear refreshes the entire floor without disturbing the artwork underneath it.",
      ],
      local: [
        "Showroom and retail floors along the Route 4 and 17 corridors",
        "Salon, spa and boutique floors across the township",
        "High-build clear topcoats, refreshed on a schedule rather than replaced",
      ],
    },
  },

  /* ═══ CLIFTON — postwar density, highway corridors ══════════════════ */
  clifton: {
    "garage-epoxy-flooring": {
      heading: "Clifton has more garages of the same vintage than anywhere",
      body: [
        "Athenia, Allwood and Richfield went up in a concentrated postwar building boom, which means we are usually working on a slab poured within a few years of its neighbors — similar thickness, similar mix, and the same failure pattern in the same place. That predictability is genuinely useful: we can tell you what the floor probably needs before we lift the door.",
        "What it needs is almost always the same. A band of salt-pitted concrete in the first few feet inside the door, some shrinkage cracking through the middle, and a surface that has never been sealed. Grind, route, patch, then a full-broadcast flake system that hides everything the winter brings in behind it.",
      ],
      local: [
        "Postwar two-car garages throughout Athenia, Allwood and Richfield",
        "The same salt-spalled band inside the door, on street after street",
        "Full-broadcast flake — the finish that forgives a Clifton winter",
      ],
    },
    "polyaspartic-floor-coating": {
      heading: "One-day floors for Clifton's two-family houses",
      body: [
        "A lot of Clifton housing is two-family, and that changes the parking math. When a single driveway serves two households there is no realistic way to give up the garage for three days, and no street to absorb the overflow. Collapsing the install into one working day is the difference between the project happening and not.",
        "The cold argument runs alongside it. Most of these garages are unheated, and epoxy stalls below about 55°F, so a standard system is off the table from November through March. Polyaspartic keeps curing near 0°F, which is why the Clifton winter calendar is almost entirely one-day work.",
      ],
      local: [
        "Single-day installs where one driveway serves two households",
        "Unheated garages coated straight through the winter months",
        "Grinding and crack repair unchanged — only the cure compresses",
      ],
    },
    "commercial-epoxy-flooring": {
      heading: "Route 3 and Route 46 are large-format floor country",
      body: [
        "Highway-corridor retail is a different problem from a walkable main street. The showrooms, big-box adjacencies, furniture floors and auto dealers along Route 3 and Route 46 are large open spans under bright light, and at that scale every seam, patch and wax swirl is visible from clear across the room.",
        "Seamless high-build epoxy in a matched color removes all of it and ends the strip-and-wax cycle permanently. Phasing is what keeps you trading through it — we section large Clifton floors, work nights and weekends, and use fast-cure systems in the zones that have to reopen first.",
      ],
      local: [
        "Showroom, retail and dealership floors along Route 3 and Route 46",
        "Large open spans where seams and wax swirl show from across the room",
        "Phased sections and overnight work so the doors stay open",
      ],
    },
    "basement-epoxy-flooring": {
      heading: "Clifton basements are small, old and worth finishing",
      body: [
        "The basements under Clifton's postwar housing are modest — not the full-footprint spaces you get out in Wayne or Livingston — but they are increasingly being finished as gyms, offices and playrooms because the square footage is genuinely needed. In a smaller room the floor is a larger share of what you see.",
        "These slabs were poured on grade without vapor barriers, so the moisture test comes first and the reading decides the system. In a compact space we usually recommend running the coating wall to wall in a lighter satin finish, because a seamless light floor makes a small basement read considerably larger than a dark one with transitions in it.",
      ],
      local: [
        "Compact postwar basements finished as gyms, offices and playrooms",
        "On-grade slabs with no vapor barrier — tested before quoting",
        "Lighter satin finishes to make a small space read larger",
      ],
    },
    "metallic-epoxy-flooring": {
      heading: "Metallic in Clifton is mostly commercial",
      body: [
        "Unlike the estate towns, most of our Clifton metallic work is not residential. It goes into salons, studios, barbershops, showrooms and restaurant floors along the corridors, where the finish has a commercial job to do: throw light around a room, look expensive relative to what it cost, and photograph well.",
        "For a commercial floor the specification shifts to the topcoat. We build the clear heavy and rate it for the traffic the space actually sees, because that layer takes all the wear while the decorative coat sits protected underneath. Every several years a recoat of the clear brings the whole floor back without touching the artwork below it.",
      ],
      local: [
        "Salon, studio and barbershop floors across Clifton",
        "Showroom and restaurant floors on the Route 3 and 46 corridors",
        "Heavy clear topcoats, refreshable without redoing the metallic",
      ],
    },
  },

  /* ═══ WAYNE — lakes, flooding, big lots ═════════════════════════════ */
  wayne: {
    "garage-epoxy-flooring": {
      heading: "Wayne garages are bigger, and so is the salt problem",
      body: [
        "Wayne is larger-lot country — side-entry two- and three-car garages on colonial and split-level homes around Packanack Lake, Pines Lake and Preakness. More square footage means better per-foot pricing, which is why designer flake blends and coated stem walls get specified here more often than in the denser Passaic County towns.",
        "The salt damage is worse here too, and it is a function of the driveways. Long sloped approaches hold snow melt and brine right at the garage threshold, so the pitting band inside the door tends to run deeper than we see closer to the city. It grinds out and rebuilds the same way — it just accounts for more of the prep budget.",
      ],
      local: [
        "Two- and three-car garages around Packanack Lake, Pines Lake and Preakness",
        "Deeper salt spalling from long sloped driveways, ground out and rebuilt",
        "Better per-foot pricing on larger floors — upgrades worth considering",
      ],
    },
    "polyaspartic-floor-coating": {
      heading: "Getting a Wayne garage back the same evening",
      body: [
        "A three-car Wayne garage taken out of service for three days displaces the whole household — and in a town where the garage doubles as the boat, bike and lawn-equipment store, that is more disruptive than it sounds. One working day, walkable that evening, taking vehicles in about 24 hours.",
        "Worth being straight about the trade. Polyaspartic lays down thinner per coat than epoxy, so on a badly spalled Wayne slab a hybrid — epoxy base for film build, polyaspartic topcoat for UV stability and hot-tire resistance — is the better floor for the money. We will tell you which case you are in even though the hybrid prices lower.",
      ],
      local: [
        "Multi-bay garages turned around inside one working day",
        "Unheated detached garages and outbuildings coated in winter",
        "Hybrid epoxy-and-polyaspartic recommended where the slab needs build",
      ],
    },
    "commercial-epoxy-flooring": {
      heading: "Wayne's retail and professional floors",
      body: [
        "Commercial work in Wayne concentrates around the Willowbrook area and the Route 23 and Hamburg Turnpike corridors — retail, medical and dental suites, gyms and studios, veterinary practices. These are spaces where clients spend time close to the floor and notice it, and where the cleaning standard matters as much as the look.",
        "Seamless epoxy answers both: no grout lines, no VCT seams lifting at doorways, nothing needing quarterly stripping, and a surface that sanitizes properly for clinical use. Most of these are retrofits over a previous tenant's floor, so mechanical removal down to sound concrete is the bulk of the labor and belongs on the quote as a visible line.",
      ],
      local: [
        "Retail and showroom floors around Willowbrook and Route 23",
        "Medical, dental and veterinary suites across the township",
        "Gyms and studios where the floor is inspected up close daily",
      ],
    },
    "basement-epoxy-flooring": {
      heading: "In Wayne the basement floor is a flood decision",
      body: [
        "Wayne has a longer and more specific memory of the Passaic River than almost any town in the county. On the flood-aware streets, homeowners are not choosing a basement floor on appearance — they are choosing one that can be recovered rather than skipped into a dumpster. That single requirement eliminates carpet, laminate and glued vinyl outright.",
        "A seamless epoxy floor comes back from water with a wet-vac and a mop. It does not absorb, does not support mold, and is not damaged by water sitting on top of it. We still test for vapor drive from below before quoting, because that is a separate problem from surface flooding and is solved with a mitigating primer rather than a better topcoat.",
      ],
      local: [
        "Flood-aware homes near the Passaic and the lake communities",
        "Floors that recover with a wet-vac instead of being torn out",
        "Vapor drive tested separately from the flooding question",
      ],
    },
    "metallic-epoxy-flooring": {
      heading: "Metallic in Wayne's larger finished basements",
      body: [
        "The bigger basements out here are where metallic makes most sense in Wayne. Across a large span you get genuine movement — veining that runs the length of the room rather than a pattern you notice on a small slab — and in satin it reads as honed stone in a space that is being furnished as a rec room, bar or gym.",
        "The flood question does not go away because the floor is decorative. A metallic system is a full epoxy build, so it carries exactly the same moisture management as any other Wayne basement floor, and it recovers from water the same way. The decorative coat sits on a properly primed and prepared slab, not on bare concrete.",
      ],
      local: [
        "Large finished basements around the lake communities and Preakness",
        "Satin and matte finishes for rec rooms, bars and home gyms",
        "Same vapor management as any other Wayne below-grade floor",
      ],
    },
  },

  /* ═══ UNION — capes and splits, Morris Avenue ═══════════════════════ */
  union: {
    "garage-epoxy-flooring": {
      heading: "Union's garages came off the same postwar drawing board",
      body: [
        "Vauxhall, Battle Hill and the streets off Morris Avenue are cape-and-split-level country, built fast and built alike. The garages are mostly single or narrow two-car, attached, with slabs poured to the same spec across whole blocks — which means the assessment is quick and the surprises are few.",
        "The one thing that varies is how much salt has got into the first few feet inside the door. On a narrow Union garage that band is proportionally a bigger share of the floor than it would be in a wide suburban bay, so getting the repair right matters more to the finished look. Ground out, rebuilt with epoxy mortar, invisible under flake.",
      ],
      local: [
        "Attached single and narrow two-car garages across Vauxhall and Battle Hill",
        "Uniform postwar slabs — fast assessment, few surprises",
        "Salt-damaged door bands rebuilt before the finish goes down",
      ],
    },
    "polyaspartic-floor-coating": {
      heading: "Union is twenty minutes from the shop, which makes one day real",
      body: [
        "A single-day install only holds if nothing sends the crew back to the shop. Union is a short run down Route 22 from Newark, so if a slab turns out to need more repair than the walkthrough showed we can restock mid-morning and still hand the garage back that evening. Distance is the quiet reason one-day promises elsewhere slip to two.",
        "The other half is temperature. These attached garages run cold but not freezing, and epoxy still needs roughly 55°F at the slab to cure to spec — which rules it out for a good part of the year. Polyaspartic keeps curing near 0°F, so the winter months stay bookable.",
      ],
      local: [
        "Short run from our Newark shop — restocking mid-job is realistic",
        "Winter installs on attached garages that run cold",
        "Walkable the same evening, taking cars in about 24 hours",
      ],
    },
    "commercial-epoxy-flooring": {
      heading: "Morris Avenue and the Route 22 corridor",
      body: [
        "Union's commercial spine runs along Morris Avenue and Route 22 — retail, service businesses, restaurants, and a steady amount of work generated by Kean University and the businesses that ring it. Most of it is older retail stock that has cycled through several tenants, each leaving a layer on the floor.",
        "That removal is the bulk of the job. Once the slab is back to clean concrete, seamless epoxy in a matched color ends the strip-and-wax cycle for good. We schedule around trading hours, take smaller spaces over a weekend, and phase the larger floors so nothing closes for a full day of business.",
      ],
      local: [
        "Retail and service floors along Morris Avenue and Route 22",
        "Institutional and campus-adjacent work around Kean University",
        "Multi-tenant floors stripped mechanically to sound concrete first",
      ],
    },
    "basement-epoxy-flooring": {
      heading: "Union basements are dry-ish, old, and dusty",
      body: [
        "Union sits higher than the river towns to its west, so chronic flooding is not the defining issue here the way it is in Cranford. What these basements do have is age and bare concrete — slabs poured on grade without a vapor barrier, shedding dust continuously and staining permanently, in spaces people now want to actually use.",
        "Sealing the slab is most of the win. A seamless epoxy floor stops the dusting, cleans with a mop, and brightens a low-ceilinged postwar basement enough that the existing lighting suddenly works. We still test for vapor drive, because on-grade slabs of this vintage vary more than their identical exteriors suggest.",
      ],
      local: [
        "Postwar on-grade slabs that have never been sealed",
        "Dusting and staining stopped rather than covered up",
        "Lighter finishes to lift low-ceilinged basement spaces",
      ],
    },
    "metallic-epoxy-flooring": {
      heading: "Where metallic fits in a Union home or business",
      body: [
        "Metallic turns up in Union in two places: the occasional finished basement being done properly, and small commercial spaces along Morris Avenue where the floor is one of the few surfaces with room to make an impression — salons, studios, barbershops and small restaurants.",
        "Both get the same system with a different finish decision on top. Gloss for a commercial space where reflectivity is the point; satin or matte for a basement being furnished as a room. It is hand-worked either way, so no two floors match, and we bring samples to the space rather than asking you to choose from a photograph.",
      ],
      local: [
        "Salon, studio and small restaurant floors along Morris Avenue",
        "Finished basement rec rooms and bars in satin or matte",
        "Samples brought to the space — sheen changes it more than color",
      ],
    },
  },

  /* ═══ CRANFORD — the Rahway River runs through it ═══════════════════ */
  cranford: {
    "garage-epoxy-flooring": {
      heading: "Cranford garages sit low, and that changes the prep",
      body: [
        "A lot of Cranford is close to the Rahway and only a little above it, and garage slabs on those blocks behave accordingly — higher moisture content, more efflorescence, and a greater chance that what looks like ordinary staining is actually vapor coming up through the concrete. We moisture-test garage slabs here far more often than in a typical suburban town.",
        "That is a specification question, not an obstacle. A normal reading takes a standard build; an elevated one gets a vapor-barrier primer under the system. Skipping that step on a low-lying Cranford slab is how a garage floor blisters within a year, and it is entirely avoidable for the cost of a test.",
      ],
      local: [
        "Low-lying slabs near the Rahway with genuine vapor drive",
        "Moisture testing on garage floors, not just basements",
        "Vapor-barrier primers specified to the actual reading",
      ],
    },
    "polyaspartic-floor-coating": {
      heading: "Fast turnarounds on Cranford's tight downtown lots",
      body: [
        "The blocks around Riverside and Brookside Place are older and tighter than the postwar towns nearby — narrow drives, detached garages, and not much room to leave two cars parked while a floor cures. A single-day install removes that problem rather than working around it.",
        "There is a Cranford-specific caveat worth stating. Speed does not change the physics of a damp slab, and on the low ground here that is a live issue. We moisture-test before committing to a one-day schedule, because a fast floor over an untreated wet slab fails exactly as fast as a slow one.",
      ],
      local: [
        "Single-day installs on tight lots around Riverside and Brookside Place",
        "Moisture tested before a one-day schedule is promised",
        "Unheated detached garages coated through the winter",
      ],
    },
    "commercial-epoxy-flooring": {
      heading: "Downtown Cranford's walkable storefronts",
      body: [
        "Cranford's downtown is a compact, genuinely walkable retail district around the train station — restaurants, boutiques, salons and professional offices in older buildings where shoppers pass several alternatives on the way to your door. In a small storefront the floor is a large share of the room and there is nowhere to hide a tired one.",
        "Seamless epoxy ends the problem permanently: no grout to discolor, no VCT seam lifting at the threshold, no quarterly strip-and-wax. The constraints here are access and river-adjacency — narrow storefronts with no loading dock, and ground floors low enough that we test the slab before quoting rather than after.",
      ],
      local: [
        "Restaurant, boutique and salon floors around the train station",
        "Professional suites in the older downtown buildings",
        "Ground-floor slabs moisture-tested given the river proximity",
      ],
    },
    "basement-epoxy-flooring": {
      heading: "The Rahway decides what floor goes in a Cranford basement",
      body: [
        "Cranford is the town where this question has an unambiguous answer. Enough of it has flooded, and recently enough, that a basement floor here is chosen on what happens after the next storm rather than on how it looks the week it goes in. Carpet, laminate and glued vinyl all end up in a dumpster; that is not a hypothetical on these blocks.",
        "A seamless epoxy floor comes back with a wet-vac and a mop. It does not absorb, does not support mold, and is not damaged by water sitting on top of it. Be clear on the limit though — it is the flooring decision that survives a flood, not a flood-proofing measure. It will not keep water out, and we will say so rather than let you believe otherwise.",
      ],
      local: [
        "Flood-recovery flooring along Riverside, Lincoln Park and Osceola",
        "Floors that survive standing water and clean up rather than tear out",
        "Honest limits stated up front — this is not waterproofing",
      ],
    },
    "metallic-epoxy-flooring": {
      heading: "Metallic below grade in a flood-aware town",
      body: [
        "Metallic in Cranford is almost entirely basement work, and the appeal is the same combination that drives every below-grade decision in this town: it looks like honed stone in a furnished room, and it survives water. Those two things rarely come together in a floor finish, which is why it does well here.",
        "Because the substrate matters more on low ground, the prep is heavier than it would be elsewhere. Metallic is self-leveling and hides nothing underneath it, so a Cranford slab needs proper repair, leveling and a vapor-barrier primer specified to its actual reading before the decorative coat is worth putting down.",
      ],
      local: [
        "Finished basement bars, gyms and media rooms in satin",
        "Slabs leveled and primed properly — metallic hides no defect",
        "A decorative floor that still recovers from standing water",
      ],
    },
  },

  /* ═══ SUMMIT — high and dry, carriage-era stock ═════════════════════ */
  summit: {
    "garage-epoxy-flooring": {
      heading: "Summit sits high, so the problem here is age not water",
      body: [
        "Summit is on some of the highest ground in Union County, which spares it most of the flooding conversation that dominates Cranford and Springfield. What it does not spare is age. The Northside and the streets off Springfield Avenue are full of carriage-era and early-twentieth-century garages with thin, sectional slabs that have moved for a hundred years.",
        "So the assessment here is about the concrete rather than the water table. Routing and filling cracks, rebuilding spalled sections, and leveling where the slab has settled unevenly is most of the work, and we quote it separately from the finish. Once sound, an old Summit slab holds a coating exactly as well as a new pour.",
      ],
      local: [
        "Carriage-era and pre-war garages throughout the Northside and Brayton",
        "Sectional slabs leveled and rebuilt before any finish decision",
        "High ground — moisture is usually the smaller half of the problem here",
      ],
    },
    "polyaspartic-floor-coating": {
      heading: "Winter installs for Summit's unheated garages",
      body: [
        "The detached and carriage-era garages that characterise this town are almost universally unheated, and epoxy stops curing properly below about 55°F. That takes a standard system off the table from November through March — which is exactly when a lot of Summit homeowners want the project done, with the garden furniture away and the schedule quiet.",
        "Polyaspartic keeps curing down near 0°F, so those months stay workable. It also hands the garage back the same evening, which matters on the narrower Northside lots where there is no comfortable place to leave two cars for three days. Same grinding, same crack work, compressed cure.",
      ],
      local: [
        "Unheated carriage garages coated through the winter months",
        "Single-day turnarounds on narrow Northside lots",
        "Aliphatic topcoats that hold their color behind a sunlit door",
      ],
    },
    "commercial-epoxy-flooring": {
      heading: "Springfield Avenue and Summit's professional core",
      body: [
        "Summit's commercial spine is Springfield Avenue and the blocks around the train station — restaurants, boutiques, salons, and a heavy concentration of medical, dental and professional suites serving a commuter town. These are small, well-kept spaces where the finish level is expected to match the rest of the street.",
        "Seamless epoxy suits that: pigment matched to the brand, sheen chosen for the room, no grout lines or VCT seams, and a surface that sanitizes properly for the clinical spaces. Most of these are retrofits, so removing whatever the last tenant left down is the bulk of the labor and it belongs on the quote as a visible line.",
      ],
      local: [
        "Restaurant, boutique and salon floors along Springfield Avenue",
        "Medical, dental and professional suites near the train station",
        "Weekend and after-hours installs so nothing loses a trading day",
      ],
    },
    "basement-epoxy-flooring": {
      heading: "Old foundations, not high water, in Summit",
      body: [
        "Summit's elevation means most basements here are not fighting a water table the way the low ground along the Rahway is. What they are fighting is age — stone and rubble foundations, slabs poured directly onto soil with no vapor barrier, and grading that has shifted over a century of settling.",
        "That still produces real vapor drive, just from a different cause, so the test happens either way. Where the reading is normal the slab takes a standard build; where it is elevated we prime for it. Because so many Summit basements are being finished as living space, we usually run satin or matte and coat before the walls go up.",
      ],
      local: [
        "Stone and rubble foundations across the Northside and Franklin Hill",
        "Vapor drive from old construction rather than from a high water table",
        "Satin finishes for basements being finished as proper rooms",
      ],
    },
    "metallic-epoxy-flooring": {
      heading: "Metallic below grade in Summit",
      body: [
        "The metallic requests we get in Summit are almost entirely for below-grade living space — gyms, media rooms, bars and guest suites in basements that are being finished to the same standard as the floors above. In satin it reads as honed stone, which is the point in a room that is going to be furnished.",
        "The older housing stock here makes the substrate work matter more than in a newer town. A hundred-year-old Summit basement slab needs genuine repair and leveling before a self-leveling metallic will sit correctly, because the finish shows every imperfection underneath it rather than hiding them the way flake does.",
      ],
      local: [
        "Basement gyms, bars and guest suites through the Northside and Beekman",
        "Older slabs leveled properly first — metallic hides nothing",
        "Satin and matte topcoats for furnished below-grade rooms",
      ],
    },
  },
};
