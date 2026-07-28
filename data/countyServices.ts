/**
 * County × service angles — the copy engine behind /areas/[county]/[service].
 *
 * These pages target the "[service] [county] nj" terms that businesses and
 * homeowners actually search ("commercial epoxy flooring bergen county"),
 * sitting between the county hub and the town×service long-tail.
 *
 * ⚠️ EVERY block here is written from scratch for that specific county AND
 * that specific service. Nothing is city-name-swapped boilerplate — thirty-five
 * near-identical pages would be a duplicate-content liability, not an asset.
 * If you add a county or service, write real copy for it or leave it out:
 * `countyServiceAngle()` returns undefined and the route 404s by design.
 */

export type CountyServiceAngle = {
  /** one-sentence hero support line */
  lede: string;
  /** two paragraphs of body copy specific to this county + this service */
  body: [string, string];
  /** three hyper-local proof points — real corridors, towns, building stock */
  local: [string, string, string];
  /** one FAQ that could only appear on this county × service page */
  faq: { q: string; a: string };
};

/** [countySlug][serviceSlug] */
export const countyServiceAngles: Record<string, Record<string, CountyServiceAngle>> = {
  /* ══════════════════════════════════════════════════════════════════
     ESSEX COUNTY — home base. Old urban slabs, port logistics, estates.
     ══════════════════════════════════════════════════════════════════ */
  "essex-county": {
    "garage-epoxy-flooring": {
      lede: "Essex County garages are older than almost anywhere else we work — which makes prep, not product, the thing that decides how your floor ages.",
      body: [
        "A garage slab in Montclair or West Orange was very likely poured before 1960. It has been through seventy winters of freeze-thaw, decades of road salt tracked in off Bloomfield Avenue, and at least one previous owner's weekend with a box-store paint kit. That history is not a problem — it's just information. It tells us how much grinding, crack routing and patching the floor needs before a coating goes anywhere near it.",
        "Because our shop is in Newark, Essex garages get our shortest drive and our earliest schedule slots. Practically, that means we can come back the next morning if a slab reads high on moisture and needs a mitigating primer, instead of pushing you two weeks out. Most two-car garages here finish in two to three days, or one with a polyaspartic system.",
      ],
      local: [
        "Pre-war carriage-house garages in Upper Montclair and Llewellyn Park",
        "Three-car estate garages around Riker Hill in Livingston",
        "Detached alley garages in Newark's Forest Hill and Vailsburg",
      ],
      faq: {
        q: "My Essex County garage floor was painted by the previous owner — can you go over it?",
        a: "Not over it — through it. Old garage paint has to come off completely, and that's exactly what diamond grinding does. We grind the slab back to clean, open concrete, which removes the paint, the sealer underneath it, and the laitance layer in one pass. Failed paint is one of the most common things we find on older Essex garages and it adds no cost beyond normal prep.",
      },
    },
    "polyaspartic-floor-coating": {
      lede: "Being ten minutes from your driveway is what makes a genuine one-day floor possible in Essex County.",
      body: [
        "A one-day floor only works if the crew arrives at seven with everything they need and nothing goes back to the shop. From Newark, that's a straightforward morning for anywhere in Essex — Irvington, the Oranges, Bloomfield, Livingston. If a slab turns out to need more crack work than the walkthrough showed, we can pull additional material mid-morning and still finish on schedule, which is not true when a crew has driven ninety minutes to get to you.",
        "Essex also has a lot of unheated detached garages, and that is where polyaspartic earns its price. Epoxy effectively stops curing below about 55°F, so a standard system means either waiting for spring or renting heat. Polyaspartic keeps setting down near 0°F, which is why our December-through-March Essex calendar is almost entirely polyaspartic work.",
      ],
      local: [
        "Unheated detached garages across Bloomfield, Nutley and Belleville",
        "Same-day turnarounds for Newark auto shops that can't lose a bay",
        "Winter installs in the Oranges when epoxy won't cure",
      ],
      faq: {
        q: "Can you do a one-day garage floor in Newark in the middle of winter?",
        a: "Yes — that's the specific problem polyaspartic solves. We've installed Essex County garages in January with the slab reading in the thirties. The chemistry keeps curing where epoxy would stay tacky and eventually fail. We still moisture-test first, because a cold slab and a wet slab are different problems and only one of them is fixable with chemistry.",
      },
    },
    "commercial-epoxy-flooring": {
      lede: "Essex County commercial floors mean Ironbound kitchens, Newark retail, and back-of-house space that has to be presentable by Monday.",
      body: [
        "The commercial mix in Essex is unusually dense and unusually varied. Inside a few square miles you have restaurant row on Ferry Street, medical and office space around University Heights, salons and retail along Bloomfield Avenue, and auto service everywhere. What they share is that none of them can afford to close. Our commercial scheduling here is built around that: Friday-night start, Monday-morning handback, or overnight for anything that trades during the day.",
        "Newark's commercial building stock also skews old, which means we spend more time on substrate than we would in a new build-out. Old VCT and its adhesive, layers of previous coatings, and slabs that have been patched several times all have to come off mechanically. It's the unglamorous half of the job and it's the half that determines whether the floor is still glossy in year eight.",
      ],
      local: [
        "Ferry Street and Ironbound restaurant and retail build-outs",
        "Medical, dental and office suites around University Heights",
        "Salons, gyms and storefronts along Bloomfield and Springfield Avenues",
      ],
      faq: {
        q: "Can you install a commercial epoxy floor in Newark without closing for a week?",
        a: "Almost always. Most Essex County retail and office floors are done over a single weekend — we take the space Friday evening and hand it back Monday morning. For restaurants and anything trading seven days, we work overnight between service and use fast-cure polyaspartic so the floor is walkable before morning prep. Larger floors get phased zone by zone so you never lose the whole space at once.",
      },
    },
    "industrial-epoxy-flooring": {
      lede: "Port Newark and the Route 21 industrial corridor put more forklift hours on concrete than anywhere else in New Jersey.",
      body: [
        "Essex County industrial floors are working floors. Warehouse and distribution space feeding Port Newark and Newark Liberty runs equipment across the same slab every hour the building is open, and the failure mode is almost always the same: joints spall, the edges break down, and the damage spreads outward from there. A coating alone doesn't fix that. Joint repair with semi-rigid filler has to happen first, or you're just painting over the problem.",
        "We spec Essex industrial systems from the actual traffic and chemistry, not a catalog tier. High-build epoxy handles most warehouse and light-manufacturing duty. Urethane mortar goes down where there's thermal shock or hot washdown — food and beverage, mostly. ESD systems where electronics are handled. The assessment is free and it includes a moisture test, because a slab-on-grade poured in 1968 rarely has a vapor barrier under it.",
      ],
      local: [
        "Distribution and 3PL warehouse space around Port Newark and Doremus Avenue",
        "Light manufacturing along the Route 21 and McCarter Highway corridor",
        "Truck-service bays and fleet garages across Irvington and East Orange",
      ],
      faq: {
        q: "Our Newark warehouse can't stop receiving — can you coat around us?",
        a: "Yes, and it's how most Essex industrial work gets done. We section the floor and phase the install so racking aisles and dock doors stay reachable, work nights and weekends where the schedule allows, and use fast-cure systems in the areas that have to come back online first. We'll walk the floor with your operations lead and build the phasing plan before we quote it.",
      },
    },
    "basement-epoxy-flooring": {
      lede: "Century-old Essex County foundations mean the moisture test matters more here than the color chart does.",
      body: [
        "The housing stock in Montclair, Glen Ridge, the Oranges and Maplewood is largely pre-war, and those basements were built as utility space — rubble or block foundations, slabs poured directly on soil with no vapor barrier, and grading that has shifted over a century. When homeowners finish them now, the floor is where it goes wrong. Carpet holds moisture, laminate cups and swells, and tile pops off the slab within a few seasons.",
        "Epoxy is the finish that treats the moisture as a design input instead of a surprise. We run a calcium chloride or relative-humidity test before quoting, and the reading dictates the system: normal readings take a standard build, elevated readings get a moisture-mitigating primer engineered for vapor drive. If we find active liquid water, we'll tell you to fix the drainage first — no coating survives standing water and we'd rather lose the job than warranty that.",
      ],
      local: [
        "Pre-war stone-foundation basements in Montclair and Glen Ridge",
        "Finished home gyms and studios across Maplewood and South Orange",
        "Hillside walkout basements in West Orange and the Caldwells",
      ],
      faq: {
        q: "Our 1920s Montclair basement gets damp in spring — is epoxy the wrong call?",
        a: "It's usually the right call, but only after testing. Seasonal dampness on an old Essex County slab is normally vapor drive rather than liquid intrusion, and that's exactly what a moisture-mitigating primer under the epoxy is built for. What epoxy cannot fix is water actually entering the space — a failed french drain, a cracked foundation wall, a grading problem. We test first and tell you which one you have before you spend anything.",
      },
    },
    "metallic-epoxy-flooring": {
      lede: "Metallic has become the default finish for Essex County basements that are being finished properly for the first time.",
      body: [
        "Montclair, Glen Ridge and West Orange homeowners tend to renovate to a standard, and a finished basement in one of these houses is treated as real living space — a gym, a studio, a family room — not storage with a carpet remnant. Metallic epoxy suits that brief better than any other floor over concrete. Mica pigments hand-moved through clear resin read as polished stone, and because it's seamless it works over a slab where hardwood or laminate would be a moisture gamble.",
        "For living space we usually take the gloss down. A satin or matte topcoat keeps the depth and movement of the metallic without the wet-look shine that suits a garage but feels wrong in a den. Every pour is worked by hand, so no two Essex floors we've done look alike — which is the point, and also why we bring samples to your house rather than asking you to pick from a photo.",
      ],
      local: [
        "Finished basement gyms and studios throughout Montclair and Glen Ridge",
        "Estate-section garages in West Orange finished to living-space standard",
        "Restaurant and bar floors in the Ironbound and downtown Newark",
      ],
      faq: {
        q: "Is metallic epoxy too flashy for a finished basement in Montclair?",
        a: "Not in satin or matte. The high-gloss look you've seen in garage photos comes from the topcoat, not the metallic itself — drop the sheen and the same floor reads like honed stone or poured concrete with movement in it. We bring physical samples in gloss, satin and matte to the quote so you can see all three under your own basement lighting, which changes the answer more than people expect.",
      },
    },
    "restaurant-kitchen-epoxy-flooring": {
      lede: "The Ironbound alone keeps a kitchen-flooring crew busy — and none of those kitchens can close.",
      body: [
        "Essex County has one of the densest restaurant concentrations in the state, and the kitchens behind them are mostly older spaces with quarry tile that has been patched more than once. Grout lines are where it fails: grease works into them, they crack at the drain transitions, and eventually an inspector writes it up. A seamless urethane mortar or epoxy floor with integral cove base removes the seam entirely — there is nowhere for grease to hide and nothing to regrout.",
        "The install has to fit between services. We start after close, and with a fast-cure system the floor is ready for morning prep. Larger kitchens get phased so the line keeps running on one side while we work the other. We spec from your actual washdown temperature and chemistry, because a kitchen running hot caustic washdown nightly needs urethane mortar, not a standard epoxy build that will thermally shock and debond.",
      ],
      local: [
        "Ferry Street and Ironbound kitchens working seven days a week",
        "Downtown Newark hotel, hospital and institutional kitchens",
        "Bakeries, cafés and commissary space across the Oranges and Bloomfield",
      ],
      faq: {
        q: "Will a new kitchen floor in Newark pass a Board of Health inspection?",
        a: "Seamless epoxy or urethane mortar with integral cove base is the spec inspectors want to see — no grout lines trapping grease, no wall-to-floor seam, a surface that sanitizes completely, and slip resistance appropriate for a wet kitchen. It's the standard for new commercial kitchen construction. We also detail the floor drain transitions properly, which is the spot most retrofits get written up for.",
      },
    },
  },

  /* ══════════════════════════════════════════════════════════════════
     HUDSON COUNTY — moisture, density, logistics, building logistics.
     ══════════════════════════════════════════════════════════════════ */
  "hudson-county": {
    "garage-epoxy-flooring": {
      lede: "Most Hudson County 'garages' are a shared parking level, a one-car tuck-under, or a converted ground floor — and each one coats differently.",
      body: [
        "Hudson has the least conventional garage stock in North Jersey. In Hoboken and downtown Jersey City you're far more likely to be coating a tuck-under under a brownstone, a ground-floor space in a converted industrial building, or a level of a shared condo garage than a detached suburban two-car. All three sit low, close to the river, and carry more vapor drive than a slab up in the Heights.",
        "That changes the sequence, not the standard. We moisture-test every Hudson floor before quoting, and where the reading calls for it the system starts with a vapor-barrier primer. For shared and condo garages we handle the building side — certificate of insurance for the management company, elevator and loading-dock scheduling, floor protection on the common areas, and low-odor products because people live above the work.",
      ],
      local: [
        "Tuck-under garages beneath Hoboken and Paulus Hook brownstones",
        "Shared parking levels in Newport, Exchange Place and Journal Square buildings",
        "Detached and driveway garages up in the Heights and Greenville",
      ],
      faq: {
        q: "Can you coat the parking level of a condo building in Jersey City?",
        a: "Yes — shared and podium-level garages are regular Hudson County work for us. What makes it work is the planning: we provide the COI your management company will ask for, schedule around resident access so a section is always usable, phase the install so nobody is without parking, and use low-odor systems because people are living directly above the slab. Get us in front of the board early and the approval is usually straightforward.",
      },
    },
    "polyaspartic-floor-coating": {
      lede: "In an occupied Hudson County building, the fastest system on the market is also the least disruptive one.",
      body: [
        "Time on site is the real cost in Hudson County. Every extra day in a Hoboken or Jersey City building is another day of blocked parking spots, another elevator reservation, another set of residents walking past your equipment. A polyaspartic system compresses grinding, base, flake and topcoat into a single working day, which turns a three-day disruption into one — and that alone is often what gets a board to say yes.",
        "It helps that polyaspartic is low-odor and aliphatic. In an occupied building, solvent smell travelling up a stairwell is a genuine problem, and a fast return-to-service means residents get their spaces back the same night. For garden-level and below-grade Hudson floors we still lead with the moisture test — speed doesn't change the physics of vapor drive, and a fast floor over a wet slab fails just as fast.",
      ],
      local: [
        "Single-day installs in occupied Hoboken and Downtown Jersey City buildings",
        "Overnight turnarounds for Union City and West New York ground-floor retail",
        "Cold-weather work on unheated Bayonne and Greenville garages",
      ],
      faq: {
        q: "We can only block the garage for one day — is that realistic in Hoboken?",
        a: "For a sound slab, yes. A full polyaspartic system goes in inside one working day: grind in the morning, base and flake midday, topcoat in the afternoon, walkable that evening and drivable in about 24 hours. The honest caveat is that a slab needing significant crack or spall repair adds time no chemistry can remove — we'll tell you which you have at the walkthrough, before you schedule anything with the building.",
      },
    },
    "commercial-epoxy-flooring": {
      lede: "Jersey City and Hoboken retail floors get judged under bright lights by people who just walked past three other options.",
      body: [
        "The commercial corridors here — Washington Street, Newark Avenue, Grove Street, Bergenline — are pedestrian-first and competitive. A floor that looks tired reads as a business that is tired. Seamless epoxy solves that permanently: no grout to discolor, no VCT seams lifting at the door, no quarterly strip-and-wax cycle. It cleans with a mop and it stays looking new under the kind of foot traffic these blocks generate.",
        "Ground-floor retail in Hudson County is also frequently below street grade or built into an older structure, which brings us back to moisture. We test before we quote. The other constant is access — most of these spaces have no parking, no loading dock and a narrow storefront, so material staging and equipment access get planned in advance and priced in. You should not be getting a change order because a crew couldn't park.",
      ],
      local: [
        "Washington Street and Newark Avenue storefronts and restaurants",
        "Office, medical and coworking build-outs at Exchange Place and Newport",
        "Bergenline Avenue retail across Union City and West New York",
      ],
      faq: {
        q: "How do you handle parking and material access for a storefront install in Hoboken?",
        a: "We plan it before install day and it's included in the quote. That means pulling street-opening or reserved-space permits where the town requires them, scheduling deliveries against the block's loading windows, and staging materials tight so we're not occupying the sidewalk. We've been working these streets for years — surprise access charges are a sign a contractor doesn't do it often.",
      },
    },
    "industrial-epoxy-flooring": {
      lede: "Secaucus and the Meadowlands edge run some of the busiest distribution floors on the East Coast.",
      body: [
        "Hudson County industrial work is dominated by logistics. Distribution and 3PL space around Secaucus, Kearny and the Route 1&9 corridor sits inside a day's drive of a third of the country's population, and those floors reflect it — constant pallet-jack and forklift traffic, heavy point loads at racking legs, and joints that break down long before the field of the slab does.",
        "We assess Hudson industrial floors joint-first. Semi-rigid filler in the control joints, spall repair at the edges, and only then the coating system — high-build epoxy for general warehouse duty, urethane mortar where there's washdown or thermal cycling. Much of this building stock is on fill close to the water table, so the moisture test isn't a formality here; an unmitigated slab will push a coating off no matter how good the product is.",
      ],
      local: [
        "Distribution and cold-storage floors across Secaucus and the Meadowlands",
        "Manufacturing and fabrication space in Kearny and along Route 1&9",
        "Fleet maintenance and truck bays in Bayonne and North Bergen",
      ],
      faq: {
        q: "Why do the joints in our Secaucus warehouse floor keep breaking down?",
        a: "Because wheel loads hit an unsupported edge. Hard-wheeled forklifts and pallet jacks crossing an open control joint impact the corner directly, and once a chip starts it spreads along the joint fast. The fix is semi-rigid joint filler — it fills the joint flush so the wheel rolls across instead of dropping into it, while still allowing the slab to move. We repair joints as a standard part of any industrial system here, and it's usually the single highest-value thing we do on the floor.",
      },
    },
    "basement-epoxy-flooring": {
      lede: "Everyone in Hudson County already knows their basement is damp — the question is only what to do about it.",
      body: [
        "This is the county where basement moisture is not an edge case. Hoboken's water table is famously high, much of downtown Jersey City is built on fill, and the brownstone-era garden levels along the waterfront have been dealing with vapor drive since they were built. Any flooring that traps moisture against the slab — carpet, laminate, glued vinyl — is on a countdown from the day it's installed.",
        "Epoxy over a properly specified moisture-mitigating primer is the finish that doesn't care. It's seamless, it cleans up after a wet season with a mop rather than a dumpster, and it can be finished in satin for living space. What we won't do is coat over active water intrusion. If the slab is taking on liquid, that's a drainage and waterproofing job first, and we'll say so at the quote rather than warranty something that can't hold.",
      ],
      local: [
        "Garden-level and below-grade units throughout Hoboken",
        "Brownstone basements in Paulus Hook, Van Vorst and Hamilton Park",
        "Ground-floor storage and utility rooms in Union City and Weehawken",
      ],
      faq: {
        q: "Our Hoboken basement took water in the last big storm — can it still be coated?",
        a: "It depends on whether the water came up through the slab, in through the walls, or from outside grade — and those are three different jobs. Epoxy over a mitigating primer handles vapor coming up through concrete very well. It does not stop a foundation wall leaking or a sewer backup. We test and inspect before quoting, and if the honest answer is 'fix the drainage first,' that's the answer you'll get.",
      },
    },
    "metallic-epoxy-flooring": {
      lede: "Metallic reads as a design finish in a Jersey City loft — and as a moisture-proof one, which matters more here.",
      body: [
        "Converted industrial buildings in Jersey City and Hoboken are full of exposed concrete that owners want to keep exposed but not keep bare. Metallic epoxy is the finish that threads it: the slab stays the floor, but with depth, color and movement worked into it by hand, and a seamless sealed surface over the top. In a loft where the walls are brick and the ceiling is joists, it reads correctly in a way tile never does.",
        "It's also doing real work. A metallic system is a full epoxy build, which means the same vapor management as any other Hudson floor — the decorative layer sits on top of a properly primed and prepared slab. Bars and restaurants in the county have taken to it for the same combination of reasons: it photographs beautifully and it sanitizes with a mop.",
      ],
      local: [
        "Converted loft and warehouse residences across Downtown and the Heights",
        "Bar, restaurant and lounge floors on Newark Avenue and Washington Street",
        "Retail and showroom space at Newport and Exchange Place",
      ],
      faq: {
        q: "Can metallic epoxy go over the existing concrete in a Jersey City loft?",
        a: "That's the normal case here, and it's the right substrate for it — a loft slab is usually thick, sound and already the floor. We diamond-grind it flat and open, repair what needs repairing, moisture-test it, and build the metallic system on top. You keep the concrete floor you bought the place for and it stops shedding dust, staining and reading as unfinished.",
      },
    },
    "restaurant-kitchen-epoxy-flooring": {
      lede: "A Hudson County kitchen renovation is half flooring spec and half building logistics.",
      body: [
        "The kitchens behind Washington Street and Newark Avenue are small, busy and usually in older buildings. Quarry tile with failing grout is the standard starting point, and the standard endpoint is a seamless urethane mortar or epoxy floor with integral cove base — code-friendly, greaseproof, and repairable without closing. We spec from your washdown process, because a kitchen going hot and caustic every night needs mortar, not a thin build.",
        "The other half of the job is getting in and out. These are ground-floor and basement kitchens in occupied buildings with no loading access, often with residents directly above. We work between services, stage tight, run HEPA extraction on the grinders, and use fast-cure systems so the floor is back before morning prep. The install plan gets agreed with you — and where relevant, with the building — before we start.",
      ],
      local: [
        "Washington Street and Newark Avenue restaurant kitchens",
        "Bergenline Avenue bakeries, cafés and taquerías",
        "Hotel, catering and commissary kitchens near Exchange Place",
      ],
      faq: {
        q: "Can you redo our kitchen floor overnight with residents living upstairs?",
        a: "Yes, and it's most of what we do in Hudson. The two things that make it work are HEPA dust extraction on the grinders — which keeps the demolition phase contained rather than filling a stairwell — and low-odor fast-cure systems that don't push solvent smell into the building. We start after close and hand the kitchen back for morning prep.",
      },
    },
  },

  /* ══════════════════════════════════════════════════════════════════
     PASSAIC COUNTY — mill-era industry, highway retail, lake suburbs.
     ══════════════════════════════════════════════════════════════════ */
  "passaic-county": {
    "garage-epoxy-flooring": {
      lede: "Passaic County garages take the full brunt of North Jersey road salt, and flake is the finish built to shrug it off.",
      body: [
        "From the postwar streets of Athenia and Allwood out to the lake neighborhoods of Wayne, this is flake-floor country. The reason is winter. Salt and brine come home on the tires, drip onto the slab, and soak into bare concrete where they refreeze and pop the surface apart. A full-broadcast flake system with a polyaspartic topcoat seals the slab so the same slush wipes off instead of soaking in.",
        "Flake also suits how these garages get used. Gray, blue and earth-tone blends hide the grit that accumulates between cleanings, the texture adds slip resistance for a floor that's wet four months a year, and the chips camouflage the minor imperfections every forty-year-old slab has. Most two-car garages here run $1,200–$3,200 installed, prep included.",
      ],
      local: [
        "Postwar two-car garages across Athenia, Allwood and Richfield",
        "Lake-community garages around Packanack Lake and Pines Lake in Wayne",
        "Larger colonial and split-level garages in Totowa, Hawthorne and Little Falls",
      ],
      faq: {
        q: "The edge of my Clifton garage slab is crumbling from salt — is it too far gone?",
        a: "Almost certainly not. Salt spalling attacks the top layer of concrete, and it's usually shallow even when it looks alarming. We grind out the damaged material, patch it with epoxy mortar, and rebuild the surface before coating — the repaired area disappears entirely under a flake system. Slabs are only genuinely beyond coating when there's structural movement, which is rare and which we'd flag before quoting.",
      },
    },
    "polyaspartic-floor-coating": {
      lede: "Passaic County's unheated garages are the reason we keep a polyaspartic line at all.",
      body: [
        "A large share of the garages in Clifton, Wayne and Hawthorne are unheated and detached, and homeowners here want them done in the off-season when the cars are out less and the project is convenient. That's exactly when epoxy stops working. Below about 55°F an epoxy build stalls, stays soft and never reaches spec. Polyaspartic keeps curing down near 0°F, which turns a four-month dead zone in the calendar into working months.",
        "The other draw is simple availability of the space. If the garage is the only place two cars can live, three days without it is a genuine problem. A polyaspartic system is walkable the evening of install and takes vehicles in about 24 hours. Same grinding, same crack repair, same moisture test — the schedule compresses because of the chemistry, not because anything was skipped.",
      ],
      local: [
        "Winter installs on unheated garages across Clifton and Passaic",
        "One-day turnarounds for Wayne homeowners with nowhere to park",
        "Fast-cure floors for Route 46 auto and service bays",
      ],
      faq: {
        q: "Is a one-day floor worth the extra cost over standard epoxy in Wayne?",
        a: "It's worth it in two situations and not really in a third. If it's too cold for epoxy to cure, or if you genuinely can't lose the garage for three days, polyaspartic is buying you something real. If you have a spring weekend free and the garage can sit, a hybrid epoxy base with a polyaspartic topcoat gives you more film thickness for less money. We'll tell you which case you're in rather than defaulting to the pricier one.",
      },
    },
    "commercial-epoxy-flooring": {
      lede: "The Route 3, 46 and 23 corridors are where Passaic County does business — and where floors get judged.",
      body: [
        "Highway-corridor retail is a different animal from a walkable main street. Showrooms, big-box adjacencies, auto dealers, gyms and furniture floors along Route 3 and Route 46 are large open spans under bright light, which means every seam, patch and wax swirl is visible from across the room. Seamless high-build epoxy in a brand-matched color eliminates all of it, and it never needs stripping or waxing again.",
        "Passaic commercial buildings also tend to have been through several tenants, so the substrate is a layer cake — old VCT and adhesive, tile mortar, previous coatings, patches. That all comes off mechanically before anything goes down. On the operations side we schedule around trading hours, phase large floors in sections, and can add line striping, walkway definition and logo inlays under the same topcoat.",
      ],
      local: [
        "Showroom and retail floors along the Route 3 and Route 46 corridors",
        "Auto dealerships and service departments across Clifton and Totowa",
        "Gyms, studios and medical suites in Wayne and Little Falls",
      ],
      faq: {
        q: "Can you match our brand colors for a showroom floor on Route 46?",
        a: "Yes — epoxy is pigmented rather than painted, so we mix to your brand spec rather than picking the closest stock color. We can also inlay a logo, define walkways and stripe safety zones, all sealed under the same seamless topcoat so there's nothing to peel or wear off. For a showroom we'd usually recommend seeing a drawdown sample under your actual lighting before committing the whole floor.",
      },
    },
    "industrial-epoxy-flooring": {
      lede: "Paterson's mill-era industrial slabs are the hardest-working, hardest-prepped concrete in North Jersey.",
      body: [
        "The Silk City still makes things, and the buildings it makes them in are a hundred years old. Paterson industrial slabs come to us oil-soaked, patched in three different eras, uneven, and frequently with no vapor barrier under them because nobody was installing one in 1915. None of that rules out a coating. It just means the prep is the majority of the job, and anyone quoting this floor without walking it is guessing.",
        "We diamond-grind past the contamination to clean concrete, degrease and spot-treat what remains, and pull adhesion tests before committing to a system. Oil on the surface is cosmetic; oil that has migrated into the slab is the thing that actually breaks bonds, and testing is the only way to know which you have. From there it's high-build epoxy for general duty or urethane mortar where there's washdown, thermal cycling or aggressive chemistry.",
      ],
      local: [
        "Converted mill and manufacturing space around the Great Falls district",
        "Machine shops and fabrication floors on Paterson's Eastside",
        "Warehouse and light-industrial space in Totowa, Wayne and Woodland Park",
      ],
      faq: {
        q: "Our Paterson shop floor is soaked in decades of oil — will a coating even stick?",
        a: "Usually yes, but we prove it before we promise it. Grinding removes the contaminated surface layer, degreasing pulls what's left near the top, and then we run an adhesion test on the prepared slab rather than assuming. Deeply oil-saturated concrete occasionally needs a moisture-and-contamination-tolerant primer, and in rare cases a section has to be cut out and re-poured. You'll know which before you commit to the job.",
      },
    },
    "basement-epoxy-flooring": {
      lede: "Passaic River flood memory shapes how people in this county choose a basement floor.",
      body: [
        "Wayne, Little Falls, Pompton Lakes and the low-lying parts of Paterson have a long collective memory of what the Passaic can do. Homeowners in the flood-aware neighborhoods aren't choosing a basement floor on looks alone — they're choosing one that survives a bad season. That single requirement rules out carpet, laminate and glued vinyl, all of which have to be torn out and landfilled after they get wet.",
        "A seamless epoxy floor over a properly primed slab comes back from water with a wet-vac and a mop. It doesn't hold moisture, it doesn't support mold growth, and it doesn't delaminate because it got wet from above. We still test for vapor drive from below before quoting, and where the slab reads high we build the system on a moisture-mitigating primer. It's the practical floor for a basement in this county.",
      ],
      local: [
        "Flood-aware homes near the Passaic River in Wayne and Little Falls",
        "Finished basements and home gyms across Clifton and Hawthorne",
        "Utility and laundry rooms in older Paterson and Passaic two-families",
      ],
      faq: {
        q: "If our Wayne basement floods again, does the epoxy floor survive it?",
        a: "The floor itself, yes — that's the main reason people here choose it. Epoxy isn't damaged by water sitting on top of it, doesn't absorb, and cleans up with a wet-vac and a mop rather than a dumpster. What it can't do is stop water entering the space or protect anything else down there. It's the flooring decision that survives a flood, not a flood-proofing measure.",
      },
    },
    "metallic-epoxy-flooring": {
      lede: "Metallic is the finish Passaic County reaches for when a space has to make an impression.",
      body: [
        "Most of our metallic work in this county isn't residential — it's commercial. Showrooms along Route 3 and 46, salons and studios in Clifton and Wayne, restaurant and bar floors in Paterson and Passaic. In a retail environment a metallic floor does something a solid color can't: it draws the eye down, reflects light through the whole space, and photographs extremely well, which matters more every year.",
        "On the residential side it turns up in Wayne and Totowa basements being finished as real living space, usually in satin. Either way the install is the same discipline: full mechanical prep, a pigmented base, mica pigments hand-worked through self-leveling clear resin, then a high-build clear topcoat. Metallic is temperature-sensitive while it levels, so we condition the space rather than pouring into whatever the weather is doing.",
      ],
      local: [
        "Retail and auto showroom floors on the Route 3 and Route 46 corridors",
        "Salons, barbershops and studios across Clifton and Wayne",
        "Bar, lounge and restaurant floors in Paterson and Passaic",
      ],
      faq: {
        q: "Will a metallic floor hold up to retail foot traffic on Route 46?",
        a: "Yes — the wear layer doing the work is the clear topcoat, not the decorative coat, and we build commercial metallic floors with a high-build topcoat rated for exactly this. The metallic effect sits protected underneath it. For very high-traffic retail we'll also recommend a maintenance program: a recoat of the clear every several years refreshes the whole floor without touching the artwork below.",
      },
    },
    "restaurant-kitchen-epoxy-flooring": {
      lede: "Paterson and Clifton kitchens run hot washdown nightly — which points at mortar, not a thin epoxy build.",
      body: [
        "Passaic County's restaurant scene is heavily represented by kitchens that clean aggressively: hot water, caustic degreaser, every night. That's thermal shock, and it's what separates a floor that lasts from one that debonds in eighteen months. A standard epoxy build isn't the right answer for those kitchens. Cementitious urethane mortar is — it tolerates the temperature swing, resists organic acids and meets USDA and FDA requirements.",
        "Where washdown is gentler, a seamless epoxy system with integral cove base does the job at a lower price point. Either way the cove base is non-negotiable: the wall-to-floor seam is where grease accumulates and where inspections get written up. We install between services or overnight, and phase larger kitchens zone by zone so the line never fully stops.",
      ],
      local: [
        "South Paterson and Main Street kitchens washing down nightly",
        "Clifton and Passaic bakeries, delis and commissary kitchens",
        "Route 46 and Route 3 restaurant and franchise build-outs",
      ],
      faq: {
        q: "What's the difference between urethane mortar and epoxy for a Paterson kitchen?",
        a: "Temperature tolerance, mostly. Urethane mortar is cementitious — it expands and contracts at close to the same rate as the concrete under it, so a 180°F washdown followed by cold air doesn't shear it off the slab. Epoxy is more rigid and can debond under that cycle. If you wash down hot every night, mortar is the correct spec even though it costs more; if you're mopping and degreasing at moderate temperature, epoxy with cove base is plenty.",
      },
    },
  },

  /* ══════════════════════════════════════════════════════════════════
     BERGEN COUNTY — suburban scale, retail corridors, blue laws.
     ══════════════════════════════════════════════════════════════════ */
  "bergen-county": {
    "garage-epoxy-flooring": {
      lede: "Bergen County garages get finished to living-space standard more often than anywhere else we work.",
      body: [
        "In Ridgewood, Wyckoff, Franklin Lakes and Saddle River, the garage is increasingly treated as part of the house. That shows up in what gets specified: designer flake blends rather than stock gray, coated stem walls and containment curbs so there's no raw concrete edge visible, matching steps and aprons, and metallic upgrades on the bays that get seen. It's a different brief from sealing a slab, and it changes the quote.",
        "The building stock cuts the other way, though. A lot of Bergen's most desirable homes are older center-hall colonials with original garage slabs, and those slabs need genuine crack routing, spall repair and leveling before any of the finish work matters. We quote the prep separately and honestly so you can see what you're paying for structure versus what you're paying for looks.",
      ],
      local: [
        "Three-car and estate garages in Franklin Lakes, Saddle River and Alpine",
        "Century-old colonial garage slabs across Upper Ridgewood and Tenafly",
        "Two-car suburban garages throughout Fair Lawn, Paramus and Wyckoff",
      ],
      faq: {
        q: "Can you coat the walls and steps too, so there's no bare concrete showing?",
        a: "Yes — coating the stem walls, curbs, steps and apron to match is one of the most-requested upgrades in Bergen and it's what makes a garage read as finished rather than sealed. Vertical surfaces use the same system with a thixotropic additive so it doesn't sag. It adds materially to the square footage being coated, so we price it as a line item and you can take it or leave it.",
      },
    },
    "polyaspartic-floor-coating": {
      lede: "The franchises advertising one-day floors are loudest in Bergen County — here's how to read their quotes.",
      body: [
        "If you live in Bergen you have seen the ads and probably had a flyer. The chemistry those companies sell is real and we install it too. The variable is prep. Ask any one-day contractor a single question: do you diamond-grind, or acid-etch? Etching is faster and cheaper and it does not open concrete the way mechanical grinding does, and it is the most common corner cut on speed-sold floors. Everything else on the quote matters less than that answer.",
        "The second question is whether the topcoat is aliphatic polyaspartic or a cheaper aromatic polyurea. Aromatic ambers — it goes yellow — and in a Bergen garage with a glass door or a west-facing opening you'll see it inside two years. We grind every slab and we use aliphatic topcoats, which is why our one-day floor costs what it does and why we can warranty it for life.",
      ],
      local: [
        "Single-day garage installs across Ridgewood, Glen Rock and Ho-Ho-Kus",
        "Winter work on unheated garages in Mahwah, Ramsey and Oakland",
        "Overnight retail and showroom floors along the Route 4 and 17 corridors",
      ],
      faq: {
        q: "How is your one-day floor different from the national franchises advertising in Bergen County?",
        a: "Two concrete things. We diamond-grind every slab rather than acid-etching, which is the difference between a coating that's mechanically keyed into open concrete and one that's sitting on a smooth surface hoping. And we use aliphatic polyaspartic topcoats, which will not yellow — the cheaper aromatic polyureas amber within a couple of years in a sunlit garage. Ask any competitor those two questions and compare the answers, not the price.",
      },
    },
    "commercial-epoxy-flooring": {
      lede: "Bergen County's blue laws hand retail a free install window every single week.",
      body: [
        "Bergen is the only county in the country where most retail is legally closed on Sundays, and for floor work that is a genuine gift. Saturday night to Monday morning is a guaranteed, recurring, no-lost-revenue window — we take the space when you close Saturday, grind, coat and cure through Sunday, and hand back a finished floor for Monday open. No franchise-mandated closure, no lost trading day, no phased compromise.",
        "The floors themselves have to earn their keep under retail lighting. The Route 4 and 17 corridor is showroom country, and a seamless high-build epoxy in a brand-matched color eliminates the VCT seams, grout lines and wax swirl that make a space look dated. No stripping, no waxing, no quarterly maintenance contract — just a mop.",
      ],
      local: [
        "Garden State Plaza and Bergen Town Center adjacent retail and showrooms",
        "Auto dealerships and service drives along Routes 4, 17 and 46",
        "Medical, dental and office suites throughout Hackensack and Englewood",
      ],
      faq: {
        q: "Can you install our Paramus store's floor over a Sunday closure?",
        a: "That's the ideal Bergen County schedule and we build around it deliberately. We take the space Saturday at close, run grinding and prep Saturday night, coat Sunday, and let it cure overnight for a Monday open. Because Bergen retail is closed Sunday anyway, you lose no trading hours at all — it's the cleanest commercial install window in the state and it's the reason we schedule Bergen retail work on weekends by default.",
      },
    },
    "industrial-epoxy-flooring": {
      lede: "Teterboro hangars and the Carlstadt–Moonachie industrial belt are Bergen's other economy.",
      body: [
        "Behind the retail, Bergen County runs a serious industrial base — the Carlstadt, Moonachie, Little Ferry and South Hackensack corridor is dense with warehousing, light manufacturing and distribution, and Teterboro adds aviation. Hangar floors are their own specification: fuel and hydraulic resistance, static control where avionics are serviced, and a finish bright enough to work under without adding lighting.",
        "For the warehouse belt the priorities are ordinary and unglamorous — joint repair first, then a high-build epoxy or urethane mortar matched to the traffic, then safety striping and aisle layout. Much of this ground is former meadowland on fill, so slab moisture is a live issue and we test rather than assume. Installs get phased around receiving so the docks stay live.",
      ],
      local: [
        "Aircraft hangar and MRO floors at and around Teterboro",
        "Warehouse and distribution space in Carlstadt, Moonachie and South Hackensack",
        "Food production and cold storage across Little Ferry and Ridgefield",
      ],
      faq: {
        q: "What system do you use for an aircraft hangar floor at Teterboro?",
        a: "Generally a high-build epoxy with a chemical-resistant urethane topcoat rated for jet fuel, hydraulic fluid and Skydrol, finished light so the hangar works without extra lighting. Where avionics are serviced we spec a static-dissipative system instead, which requires a grounded conductive layer under the coating. Point loads from jacks and tugs drive the film build, so we size the system from your actual equipment rather than a standard tier.",
      },
    },
    "basement-epoxy-flooring": {
      lede: "Bergen County basements are finished as real square footage — and the floor is what makes that hold up.",
      body: [
        "A finished basement in Ridgewood, Wyckoff or Tenafly is a home gym, a media room, a playroom, an au pair suite. It's counted as living space by everyone except the assessor. What undermines that is flooring chosen as though the room were above grade — carpet that holds moisture and smells within a few seasons, laminate that cups, engineered wood that gaps. Concrete below grade moves vapor, and those materials all fight it.",
        "Epoxy works with it instead. A moisture-mitigating primer where the slab reads high, then a seamless build finished in satin or matte so it reads as a floor rather than a garage. It's warm underfoot compared to bare concrete, it takes area rugs beautifully, and it will not have to be pulled out and replaced after a wet spring. For home gyms we'll usually pair it with interlocking mats in the lifting zone and leave the rest seamless.",
      ],
      local: [
        "Full-footprint finished basements in Wyckoff, Ridgewood and Ho-Ho-Kus",
        "Home gyms and golf simulator rooms across Franklin Lakes and Mahwah",
        "Below-grade in-law and au pair suites in Teaneck, Fort Lee and Englewood",
      ],
      faq: {
        q: "We're finishing a basement in Ridgewood — should the floor go in before or after the walls?",
        a: "Before, in almost every case. Coating the slab while the space is open means we can run right to the perimeter and cove the edges properly, we're not protecting finished drywall and trim from grinding dust, and your framers aren't working over a finished floor. If the basement is already framed we can still work — it just costs more in masking and protection than it does in coating.",
      },
    },
    "metallic-epoxy-flooring": {
      lede: "Metallic is the most-requested finish in Bergen County, and the one that most needs to be seen in person.",
      body: [
        "Between the showroom corridor and the estate towns, Bergen asks for more metallic work than any other county we serve. In a garage it turns the floor into the feature. In a retail or salon space it reflects light through the room and photographs like polished stone. In a basement, dropped to satin, it reads as honed concrete with depth and movement worked through it.",
        "The one thing we insist on is samples on site. Metallic is a hand-worked finish — pigments are moved through self-leveling clear resin, so the same color combination lands differently on every floor, and it looks completely different under warm and cool light. We bring physical samples to the quote and lay them on your actual slab, in your actual lighting, because choosing from a photograph is how people end up disappointed with a floor that's technically exactly what they asked for.",
      ],
      local: [
        "Showpiece garage floors in Franklin Lakes, Saddle River and Alpine",
        "Salon, spa and boutique retail floors around Paramus and Englewood",
        "Basement bars, lounges and media rooms across Wyckoff and Mahwah",
      ],
      faq: {
        q: "Can you match a metallic floor to a photo we found?",
        a: "We can get close to the palette and the character, but we can't reproduce a specific floor — and no honest installer can. Metallic is hand-worked, so the veining and movement are one-off by definition; that's the appeal and it's also the limit. What we do is bring samples in the color direction you're after, work them on your slab under your lighting, and agree the look before install day rather than discovering it during.",
      },
    },
    "restaurant-kitchen-epoxy-flooring": {
      lede: "Bergen County kitchens skew new-build and franchise — which means the spec is usually written before we arrive.",
      body: [
        "A lot of our Bergen kitchen work is new construction and franchise build-out along the retail corridors, where the flooring is already specified in the drawings. That's fine by us — seamless urethane mortar or epoxy with integral cove base is what those specs almost always call for, and we install to spec with documentation. Where we add value is catching the details drawings routinely miss: drain transitions, threshold terminations, and the coving detail at equipment plinths.",
        "For independent kitchens in Hackensack, Fort Lee, Englewood and Ridgewood the job is more often a retrofit over failing quarry tile. That means tile and mortar removal down to sound concrete before anything else happens, which is the bulk of the labor. We install between services or overnight, and the Sunday retail closure that helps Bergen stores doesn't apply to restaurants — so we schedule around your actual slowest service, not a calendar assumption.",
      ],
      local: [
        "Franchise and new-build kitchen floors along the Route 4 and 17 corridors",
        "Independent restaurant retrofits in Hackensack, Fort Lee and Englewood",
        "Country club, catering and banquet kitchens across the county",
      ],
      faq: {
        q: "Our architect already specified the kitchen floor — can you just install it?",
        a: "Yes, and we'll install exactly what's specified with submittals and documentation for the GC. We will flag it if we think the spec is wrong for the application — a thin epoxy build under a nightly hot washdown is the usual one — but it's your call and your architect's, and we'll do the work either way. The details we'd ask to review are drain transitions, cove terminations and equipment plinths, which drawings tend to leave to the installer.",
      },
    },
  },

  /* ══════════════════════════════════════════════════════════════════
     MORRIS COUNTY — scale, corporate campuses, estates, I-80 logistics.
     ══════════════════════════════════════════════════════════════════ */
  "morris-county": {
    "garage-epoxy-flooring": {
      lede: "Morris County garages are big enough that the per-square-foot math changes what's worth doing.",
      body: [
        "A four-bay estate garage in Harding or Mendham is two or three times the floor of a standard suburban two-car, and that scale works in your favor. Mobilization, grinding setup and crew time don't scale linearly with area, so the price per square foot falls as the floor grows. It's why premium systems — designer flake blends, metallic, coated walls and curbs — are genuinely affordable here in a way they aren't on a 400-square-foot slab.",
        "These garages also tend to hold cars worth protecting, which changes the spec at the top of the system. Hot-tire pickup and topcoat ambering matter much more when the vehicle sits in one spot for months at a time. We finish collector garages in aliphatic polyaspartic that won't yellow, and we build for the point loads from lifts and jack stands rather than assuming a car's footprint.",
      ],
      local: [
        "Multi-bay estate and collector garages in Harding, Mendham and Chester",
        "Lift-equipped home shops across Randolph, Denville and Rockaway",
        "Larger colonial garages throughout Parsippany, Morris Plains and Madison",
      ],
      faq: {
        q: "Will the floor hold up under a two-post lift in my Morris County garage?",
        a: "Yes, with the right build. A lift concentrates the entire vehicle weight onto four small baseplates, so what matters is film thickness and compressive strength at those points, not the field of the floor. We spec a high-build system under the lift footprint and confirm the slab itself is thick enough — most residential slabs are four inches, which is adequate for a standard two-post, but we check rather than assume. Point-load performance is covered under the same lifetime adhesion warranty.",
      },
    },
    "polyaspartic-floor-coating": {
      lede: "On a Morris County estate garage, one day versus three is the difference between a project and an inconvenience.",
      body: [
        "The larger the garage, the more it costs you to lose it. A four-bay garage out of service for three days means four vehicles displaced, and on properties where the garage is also the workshop and the storage, that ripples. A polyaspartic system compresses the whole install into a single working day — grind in the morning, base and broadcast midday, topcoat in the afternoon, walkable that evening and drivable in about 24 hours.",
        "Morris also has a lot of unheated outbuildings, barns and detached shops, and those are a straightforward no for epoxy from November onward. Polyaspartic keeps curing near 0°F, so the winter months stay workable. Worth being straight about the tradeoff: polyaspartic lays down thinner per coat than epoxy, so on a rough or heavily spalled slab a hybrid epoxy base with a polyaspartic topcoat is the better floor for the money.",
      ],
      local: [
        "Single-day installs on multi-bay garages across Morristown and Madison",
        "Unheated barn, outbuilding and detached shop floors in Harding and Chester",
        "Fast turnarounds for Parsippany and Whippany commercial tenants",
      ],
      faq: {
        q: "Can you do a four-bay garage in one day, or is that only for small floors?",
        a: "Four bays is realistic for a one-day polyaspartic install provided the slab is sound and we bring enough crew — it's a manpower question more than a chemistry one. What breaks the schedule is unexpected repair: significant crack routing, spall patching or leveling adds time that no fast-cure product removes. We walk the floor before quoting specifically so we can commit to one day or tell you honestly that it's two.",
      },
    },
    "commercial-epoxy-flooring": {
      lede: "Parsippany's corporate corridor wants back-of-house floors that look like the lobby.",
      body: [
        "Morris County has one of the densest concentrations of corporate campus space in New Jersey — Parsippany, Whippany, Florham Park, Morris Plains. The work we get called for there is rarely the lobby itself; it's the space behind it. Mail and print rooms, server and equipment rooms, cafeteria back-of-house, fitness centers, loading and receiving. All of it is now visible to employees, and the VCT-and-wax standard those buildings were built to looks exactly its age.",
        "Seamless epoxy replaces the whole maintenance cycle. No stripping, no waxing, no seams lifting at doorways, and a surface that takes rolling loads without denting. Facilities managers care about two things beyond looks — downtime and documentation — so we phase around occupancy, work nights and weekends, and provide the submittals, SDS and warranty paperwork corporate procurement will ask for.",
      ],
      local: [
        "Corporate campus back-of-house in Parsippany, Whippany and Florham Park",
        "Downtown Morristown retail, restaurant and office build-outs",
        "Medical, veterinary and lab floors around Morristown and Denville",
      ],
      faq: {
        q: "Can you work with our facilities team's insurance and documentation requirements?",
        a: "Yes — corporate work in Morris County is a regular part of what we do and the paperwork is routine. We provide certificates of insurance naming the required additional insureds, product submittals and SDS sheets, written warranty documentation, and a phasing plan agreed with facilities before mobilization. If your building requires badged access, escorted work or specific after-hours windows, that gets built into the schedule and the price up front.",
      },
    },
    "industrial-epoxy-flooring": {
      lede: "The I-80 and Route 46 warehouse belt through Mount Olive and Rockaway runs on floors nobody thinks about until they fail.",
      body: [
        "Western Morris County has quietly become significant distribution territory. The warehouse and light-industrial stock along I-80 through Mount Olive, Roxbury, Rockaway and Dover is newer than what we see in Paterson or Newark, which changes the job: slabs are generally sound and flatter, so less remediation, but the traffic volumes are higher and the joint loading is more punishing.",
        "That makes joint treatment the priority. Semi-rigid filler flush in the control joints stops hard-wheeled traffic from impacting an open edge, which is where nearly all warehouse floor damage starts. Above that, high-build epoxy for general duty or urethane mortar where there's washdown or thermal cycling, plus aisle striping and 5S layout. Morris also has real pharmaceutical and lab presence, which brings its own spec — cleanroom-compatible finishes, coved bases, and documented systems.",
      ],
      local: [
        "Distribution and 3PL floors along the I-80 corridor in Mount Olive and Roxbury",
        "Pharmaceutical, lab and cleanroom floors around Whippany and Parsippany",
        "Machine shops and fabrication space in Dover, Rockaway and Wharton",
      ],
      faq: {
        q: "Do you install cleanroom-compatible floors for Morris County lab and pharma space?",
        a: "Yes. That's a self-leveling epoxy or urethane system with integral coved base, no seams or joints where particulates can collect, and a finish specified for the cleaning chemistry and the classification you're validating to. Documentation matters as much as the floor — we provide product submittals, batch records and installation documentation for your validation package, which is usually the part that trips up a general flooring contractor.",
      },
    },
    "basement-epoxy-flooring": {
      lede: "Morris County basements run the full footprint of the house, which makes seamless the only sensible finish.",
      body: [
        "Basements out here are large. A full-footprint basement under a Randolph or Mendham colonial can easily run 1,500 to 2,500 square feet, and at that scale the flooring decision is a significant number. It's also the scale at which seams become the enemy — every transition strip, tile joint and laminate gap is another place for dirt, moisture and failure to start across an enormous area.",
        "Epoxy gives you one continuous surface from wall to wall regardless of size, and the per-square-foot cost drops as the area grows. Well water and older septic-era foundations are common in the western half of the county, so we moisture-test before quoting and prime accordingly. For the increasingly standard Morris basement program — gym, golf simulator, media room, bar — we'll typically run a satin metallic or a subtle flake and let the space above it do the talking.",
      ],
      local: [
        "Full-footprint finished basements in Randolph, Mendham and Chester",
        "Golf simulator, gym and media rooms across Denville and Morris Township",
        "Older stone-foundation basements in Morristown and Boonton",
      ],
      faq: {
        q: "Does a 2,000 square foot basement cost the same per foot as a garage?",
        a: "No — it comes in meaningfully lower per square foot. Mobilization, grinder setup, edging and crew time are largely fixed costs, so spreading them across 2,000 feet instead of 400 drops the per-foot number substantially. Large Morris County basements are among the best value-per-foot work we quote, and it's the scale at which upgrading to metallic or a designer flake blend costs much less than people assume.",
      },
    },
    "metallic-epoxy-flooring": {
      lede: "On a Morris County estate floor, metallic stops being a garage finish and becomes the room.",
      body: [
        "Scale flatters metallic. On a small slab you see a pattern; across a six-hundred-square-foot garage or a full-footprint basement you see movement — veining that runs the length of the room, pooling and depth that reads as stone rather than coating. That's why the most ambitious metallic work we do is in this county, and why we pour these floors with two people working the resin so the effect stays continuous across the span.",
        "Collector garages are the other driver. When the car is the point, the floor is the backdrop, and a hand-worked metallic under good lighting does more for the space than any amount of cabinetry. We finish those in aliphatic polyaspartic so the clear never ambers, and we build for the point loads from lifts and stands. For basement living space we drop to satin and the same floor reads completely differently.",
      ],
      local: [
        "Collector and show garages in Harding, Mendham and Chester",
        "Basement bars, lounges and media rooms across Randolph and Denville",
        "Restaurant, retail and salon floors around the Morristown Green",
      ],
      faq: {
        q: "Can a metallic floor run continuously across a very large Morris County basement?",
        a: "Yes, and large is where it looks best — but it's a manpower question. Metallic is worked while the resin is still moving, so covering a big span continuously means enough people on the floor to keep a wet edge across the whole pour. We staff these accordingly rather than pouring in sections, because a cold joint in the middle of a metallic floor is visible forever and cannot be repaired out.",
      },
    },
    "restaurant-kitchen-epoxy-flooring": {
      lede: "Morristown restaurants, corporate cafeterias and country club kitchens all need the same floor for different reasons.",
      body: [
        "The kitchen work in Morris County splits three ways. Downtown Morristown around the Green is dense independent restaurant space, mostly retrofits over failing quarry tile, installed overnight between services. The corporate campuses in Parsippany and Florham Park have cafeteria and catering kitchens that can be done over a weekend when the building is empty — the easiest scheduling we get anywhere. And the county's country clubs run banquet kitchens that are seasonal, which means a genuine shutdown window in the off-season.",
        "The spec is consistent even when the scheduling isn't: seamless urethane mortar or epoxy, integral cove base, slip-resistant texture tuned for a wet kitchen, and drain transitions detailed properly. We size the system from your washdown temperature and chemistry. Where a kitchen goes hot and caustic nightly, mortar is the right call regardless of what the budget would prefer.",
      ],
      local: [
        "Independent restaurant kitchens around the Morristown Green",
        "Corporate cafeteria and catering kitchens in Parsippany and Florham Park",
        "Country club and banquet kitchens across Morris Township and Mendham",
      ],
      faq: {
        q: "Our club kitchen is closed for the season — how much can you get done in that window?",
        a: "A seasonal shutdown is the best scheduling scenario there is, and it lets us do things we'd otherwise have to compromise on: full tile and mortar demolition down to sound concrete, proper slab repair, full cove base detail, and unhurried cure times between coats. Most banquet kitchens are comfortably done inside a week with that access. Book it early — off-season windows fill from the previous autumn.",
      },
    },
  },

  /* ══════════════════════════════════════════════════════════════════
     UNION COUNTY — refinery belt, river flooding, old slabs, west-side estates.
     ══════════════════════════════════════════════════════════════════ */
  "union-county": {
    "garage-epoxy-flooring": {
      lede: "Union County garage slabs are mostly postwar, mostly identical, and mostly failing in exactly the same place.",
      body: [
        "Drive through Union, Roselle, Kenilworth or Clark and you are looking at thousands of garages poured within about fifteen years of each other. That uniformity is useful: we know before we arrive what the slab is likely to be, roughly how thick, and where the damage will be. It is almost always the last three feet at the door opening, where seventy winters of road salt have been dragged in and left to freeze.",
        "That band of pitted, flaking concrete is not a reason to replace the slab. We grind out the damaged surface layer, rebuild it with epoxy mortar, and the repair vanishes under a full-broadcast flake system. West of the Parkway — Westfield, Summit, Scotch Plains — the garages are older and more varied, so those get more crack routing and leveling before the finish work starts.",
      ],
      local: [
        "Postwar two-car garages across Union, Roselle, Kenilworth and Clark",
        "Salt-spalled door openings ground out and rebuilt before coating",
        "Older detached and carriage garages in Westfield, Summit and Cranford",
      ],
      faq: {
        q: "Why does the concrete by my Union County garage door look worse than the rest?",
        a: "Because that's where the salt lands. Snow melt and brine drip off the tires in the first few feet inside the door, soak into the concrete, then refreeze and pop the surface apart — it's called salt spalling and it's the single most common thing we repair in this county. It's usually shallow. We grind the damaged layer out, patch with epoxy mortar, and it disappears under flake.",
      },
    },
    "polyaspartic-floor-coating": {
      lede: "Union County is a short run down the Parkway, which is what makes a true single-day install realistic here.",
      body: [
        "A one-day floor only holds together if the crew arrives with everything and never goes back to the shop. Union County is twenty minutes from Newark down the Parkway or Route 22, so if a slab turns out to need more repair than the walkthrough showed, we can restock mid-morning and still hand the garage back that evening. Distance is the quiet reason so many one-day promises slip to two.",
        "The other draw here is the weather window. A large share of Union County garages are unheated and detached, and epoxy stops curing properly below about 55°F. Polyaspartic keeps curing down near 0°F, which turns November through March from a dead zone into working months — and those are exactly the months homeowners here want the garage dealt with.",
      ],
      local: [
        "Winter installs on unheated garages across Union, Cranford and Roselle",
        "Same-day turnarounds for Elizabeth and Linden service bays",
        "Walkable the same evening, drivable in roughly 24 hours",
      ],
      faq: {
        q: "Is a one-day floor in Union County actually done in one day, or is that marketing?",
        a: "On a sound slab it's genuinely one day — the chemistry cures in one to two hours per coat instead of twelve to twenty-four, so grinding, base, flake and topcoat all fit inside a working day. What breaks the schedule is repair: significant crack routing or spall patching adds time no product removes. We walk the floor before quoting precisely so we can commit to one day or tell you honestly it's two.",
      },
    },
    "commercial-epoxy-flooring": {
      lede: "From Elizabeth storefronts to the Route 22 corridor, Union County commercial floors get retrofitted more often than they get built new.",
      body: [
        "Very little of the commercial space here is a fresh build-out. Retail along Route 22 and Springfield Avenue, the storefronts of Elmora and Peterstown, and the medical and office suites through Westfield and Summit have all had several tenants, and each one left something on the floor. Old VCT and its adhesive, tile mortar, sheet vinyl, a previous coating — it all has to come off mechanically before anything new goes on.",
        "That removal is the majority of the labor and the majority of the honest quote. Once the slab is back to clean concrete, a seamless high-build epoxy in a brand-matched color ends the strip-and-wax cycle permanently. We schedule around trading hours across the county — weekends for retail, overnight for anything open seven days, phased sections for larger floors.",
      ],
      local: [
        "Retail and showroom floors along the Route 22 and Route 1&9 corridors",
        "Storefronts and restaurants through Elmora, Peterstown and downtown Elizabeth",
        "Medical, dental and professional suites in Westfield, Summit and Cranford",
      ],
      faq: {
        q: "There's old tile and glue on our Union County shop floor — is that included in the quote?",
        a: "It should be, and in ours it is — as a visible line item rather than buried. Removing old VCT, adhesive, tile mortar or a failing coating down to sound concrete is usually the largest single piece of labor on a retrofit here. If a competing quote is dramatically cheaper, this is almost always the line that's missing from it, and it will come back as a change order.",
      },
    },
    "industrial-epoxy-flooring": {
      lede: "The Bayway belt and the Route 1&9 corridor run chemical-exposure floors that a standard warehouse system won't survive.",
      body: [
        "Union County's industrial base is heavier than most of North Jersey's. Around Bayway, Linden and the Route 1&9 corridor you have refining, chemical handling, fuel distribution and port-adjacent logistics, and those floors face exposures a general warehouse never sees — solvents, fuels, acids, and washdown that is neither gentle nor occasional. Specifying a standard high-build epoxy into that environment is how floors fail in eighteen months.",
        "We spec from the actual chemistry and the actual traffic. Chemical-resistant novolac epoxies where the exposure is aggressive, urethane mortar where there's thermal shock or hot washdown, ESD systems where static matters. Joint repair with semi-rigid filler comes first regardless, because in a facility running hard-wheeled traffic the joints fail long before the field of the slab does.",
      ],
      local: [
        "Chemical, fuel and refining-adjacent floors around Bayway and Linden",
        "Distribution and 3PL warehouse space along Route 1&9 and the Turnpike",
        "Machine shops and fabrication floors in Elizabeth, Rahway and Plainfield",
      ],
      faq: {
        q: "Our Elizabeth plant handles solvents — will a normal epoxy floor hold up?",
        a: "Often not. Standard epoxy handles oils, water and mild chemicals well, but aggressive solvents and acids will soften and lift it. That exposure calls for a novolac epoxy or a urethane mortar rated for your specific chemistry. Bring us the list of what actually contacts the floor and at what concentration and temperature, and we'll spec to it — this is exactly the situation where a generic quote costs you the floor twice.",
      },
    },
    "basement-epoxy-flooring": {
      lede: "Along the Rahway River, the basement floor question isn't how it looks — it's what happens after the next storm.",
      body: [
        "Cranford, Springfield, Kenilworth and the low ground through Union have a long, specific memory of the Rahway. Homeowners on those blocks are not choosing a basement floor on appearance; they are choosing one that can be recovered rather than replaced. That single requirement rules out carpet, laminate and glued vinyl, all of which come out in a dumpster once they've been wet.",
        "A seamless epoxy floor over a properly primed slab comes back with a wet-vac and a mop. It doesn't absorb, doesn't support mold, and isn't damaged by water sitting on top of it. We still test for vapor drive from below before quoting, because that's a different problem from surface flooding and it's handled with a mitigating primer. What we won't do is coat over active intrusion and call it solved.",
      ],
      local: [
        "Flood-aware homes along the Rahway River in Cranford and Springfield",
        "Full-footprint finished basements in Westfield, Summit and Scotch Plains",
        "Older stone and block foundations across Elizabeth and Roselle",
      ],
      faq: {
        q: "If the Rahway comes up again, does the epoxy floor in our Cranford basement survive?",
        a: "The floor itself, yes — that's exactly why it's the standard choice on those blocks. Epoxy isn't damaged by standing water, doesn't absorb it, and cleans up with a wet-vac and a mop. Be clear on what it is though: it's the flooring decision that survives a flood, not a flood-proofing measure. It won't protect anything else down there and it won't keep water out.",
      },
    },
    "metallic-epoxy-flooring": {
      lede: "Metallic work in Union County concentrates on the western side, where basements are being finished as real rooms.",
      body: [
        "Westfield, Summit, Scotch Plains and Berkeley Heights are where the metallic requests come from, and almost always for below-grade living space rather than garages. A finished basement in one of these houses is a gym, a media room or a guest suite, and metallic in a satin or matte topcoat reads as honed stone rather than a coated slab — which is what people actually want in a room they're furnishing.",
        "It's also the right technical answer below grade, where hardwood and laminate are fighting vapor drive from day one. The system is a full epoxy build with the decorative coat on top, so the moisture management is identical to any other basement floor we do here. We bring samples and lay them on your own slab, because metallic reads completely differently under warm and cool light.",
      ],
      local: [
        "Finished basement gyms, bars and media rooms in Westfield and Summit",
        "Showpiece garage bays across Scotch Plains and Berkeley Heights",
        "Salon, studio and restaurant floors around downtown Westfield and Cranford",
      ],
      faq: {
        q: "Will a metallic floor look out of place in a Westfield basement?",
        a: "Not in satin or matte. The wet-look gloss people associate with metallic comes from the topcoat, not the metallic itself — take the sheen down and the same pour reads like honed stone or poured concrete with movement in it. We bring gloss, satin and matte samples to the quote and lay them on your slab under your own basement lighting, which changes the answer more than most people expect.",
      },
    },
    "restaurant-kitchen-epoxy-flooring": {
      lede: "Elizabeth's restaurant density and the county's institutional kitchens both need the same seamless, cove-based floor.",
      body: [
        "Union County kitchen work splits between independent restaurants — heavily concentrated through Elizabeth's Elmora and Peterstown blocks and along Route 22 — and institutional kitchens in the county's schools, hospitals and care facilities. The independents are retrofits over failing quarry tile, where cracked grout has been trapping grease for years and the inspector has finally written it up.",
        "The fix is the same in both: seamless urethane mortar or epoxy with integral cove base, so there is no grout line and no wall-to-floor seam for grease to collect in. We spec from your washdown temperature — a kitchen going hot and caustic nightly needs mortar, not a thin epoxy build that will thermally shock off the slab. Restaurants get worked between services; institutional kitchens get done in a scheduled break.",
      ],
      local: [
        "Independent restaurant kitchens through Elmora, Peterstown and Route 22",
        "School, hospital and care-facility kitchens across the county",
        "Bakeries, delis and commissary space in Union, Linden and Rahway",
      ],
      faq: {
        q: "Can you do a school or institutional kitchen in Union County over a scheduled break?",
        a: "That's the ideal window and it lets us do the job properly rather than in compressed overnight stages — full tile and mortar demolition down to sound concrete, real slab repair, complete cove base detail, and unhurried cure between coats. Most institutional kitchens are comfortably finished inside a week with that access. Book it early; summer and winter break slots fill months ahead.",
      },
    },
  },
};

/** Which services get a county-level combo page. Flake is deliberately excluded —
 *  it would cannibalize the garage pages on effectively the same county query. */
export const countyComboServiceSlugs = [
  "garage-epoxy-flooring",
  "polyaspartic-floor-coating",
  "commercial-epoxy-flooring",
  "industrial-epoxy-flooring",
  "basement-epoxy-flooring",
  "metallic-epoxy-flooring",
  "restaurant-kitchen-epoxy-flooring",
] as const;

export function countyServiceAngle(countySlug: string, serviceSlug: string): CountyServiceAngle | undefined {
  return countyServiceAngles[countySlug]?.[serviceSlug];
}
