import type { Town } from "./towns";

/**
 * Town × service body copy.
 *
 * The combo pages used to carry no copy of their own — just the service's
 * generic intro with a town name interpolated into it, which made all twelve
 * towns for a given service ~0.69 shingle-identical to each other. That is
 * near-duplicate territory across sixty pages.
 *
 * This generates a real body block per page, keyed by the town's `profile`
 * (urban / dense / suburban / estate / commercial-hub) crossed with the
 * service. Towns sharing a profile get the same argument but different facts —
 * name, neighborhoods, hook and county are woven through the prose rather than
 * bolted on — and towns of different profiles get genuinely different content.
 *
 * Measured effect: town×service overlap drops from ~0.69 to roughly the level
 * of the hand-written county pages. See docs note in countyServices.ts.
 */

export type TownServiceAngle = {
  /** H2 for the block */
  heading: string;
  /** two paragraphs of profile + town specific body */
  body: [string, string];
  /** three local proof points */
  local: [string, string, string];
};

type Gen = (t: Town) => TownServiceAngle;

const n = (t: Town, i: number) => t.neighborhoods[i] ?? t.neighborhoods[0];

/* ── Garage epoxy ──────────────────────────────────────────────────── */
const garage: Record<Town["profile"], Gen> = {
  urban: (t) => ({
    heading: `What ${t.name} garages actually need`,
    body: [
      `Garage floors in ${t.name} are mostly older, mostly detached, and mostly have a history — previous coatings, patched sections, and decades of salt tracked in off the street. None of that rules out a beautiful floor. It just means the assessment matters: we need to know what is already on the slab and how sound the concrete is underneath it before anyone talks about color.`,
      `Practically, that means diamond grinding through whatever is there down to clean concrete, routing and filling the cracks, and patching the spalled areas along the door opening where salt does its worst work. Around ${n(t, 0)} and ${n(t, 1)} that prep is routinely half the job — and it is the half that decides whether you are looking at a floor that lasts two decades or two winters.`,
    ],
    local: [
      `Detached and alley garages across ${n(t, 0)} and ${n(t, 1)}`,
      `Older slabs with previous coatings that have to come off first`,
      `Fast scheduling — ${t.name} is minutes from our Newark shop`,
    ],
  }),
  dense: (t) => ({
    heading: `Coating a garage in ${t.name} without a suburban driveway`,
    body: [
      `Most ${t.name} "garages" are not a detached two-car with a driveway to stage on. They are tuck-unders, ground-floor spaces in converted buildings, and shared parking levels — and they sit low, which means moisture is part of the specification rather than an afterthought. We moisture-test before quoting, every time, and where the reading calls for it the system starts on a vapor-barrier primer.`,
      `The other half of the job is access. Around ${t.hook}, there is nowhere to park a trailer and no loading dock, so material staging, permits and equipment access get planned before install day and priced into the quote. For shared and condo garages we handle the building side too — the certificate of insurance your management company will want, elevator scheduling, and low-odor products because people live directly above the slab.`,
    ],
    local: [
      `Tuck-under and ground-floor garages throughout ${n(t, 0)} and ${n(t, 1)}`,
      `Shared and podium parking levels in ${t.name} condo buildings`,
      `Moisture-tested and vapor-primed as standard this close to the water`,
    ],
  }),
  suburban: (t) => ({
    heading: `Why flake is the ${t.name} standard`,
    body: [
      `Ask around ${n(t, 0)} or ${n(t, 1)} and you will find the same floor in a lot of garages: a full-broadcast flake system in a gray, blue or earth-tone blend. There is a practical reason for it. ${t.name} garages take four months a year of road salt and snow melt dripping off the tires, and flake hides the grit that accumulates between cleanings while the sealed surface stops the salt soaking into the concrete at all.`,
      `The texture earns its keep too. A broadcast flake floor has real slip resistance underfoot, which matters on a slab that is wet all winter, and the chips camouflage the small imperfections every forty-year-old suburban slab has. Most ${t.name} two-car garages land between $1,200 and $3,200 installed, with the grinding, crack repair and topcoat included rather than quoted as extras later.`,
    ],
    local: [
      `Two-car postwar and colonial garages across ${n(t, 0)} and ${n(t, 1)}`,
      `Salt-spalled door openings ground out and patched before coating`,
      `Flake blends chosen from physical samples on your own floor`,
    ],
  }),
  estate: (t) => ({
    heading: `${t.name} garages finished to the standard of the house`,
    body: [
      `In ${t.name}, the garage increasingly gets treated as part of the house rather than a place to keep the salt out of the car. That shows up in what people specify: designer flake blends instead of stock gray, stem walls and curbs coated so there is no raw concrete edge showing, steps and aprons finished to match, and metallic upgrades on the bays that actually get seen.`,
      `The building stock pushes the other way, though. A lot of the most desirable ${t.name} homes — especially around ${t.hook} — have original garage slabs that need genuine crack routing, spall repair and levelling before any of the finish work matters. We quote the structural prep and the finish separately so you can see exactly what you are paying for, and decide where the money goes.`,
    ],
    local: [
      `Three-car and estate garages around ${n(t, 0)} and ${n(t, 1)}`,
      `Coated stem walls, curbs, steps and aprons for a fully finished look`,
      `Century-old slabs repaired and levelled before any coating goes down`,
    ],
  }),
  "commercial-hub": (t) => ({
    heading: `Residential and commercial garage floors in ${t.name}`,
    body: [
      `${t.name} keeps us working both sides of the street. The same week can include a homeowner's two-car garage off ${n(t, 0)} and a multi-bay service floor that takes vehicle traffic all day. They are different specifications — the commercial floor needs more film build and a topcoat rated for constant tire contact — but they share the part that decides longevity, which is mechanical preparation.`,
      `For residential work in ${t.name} the answer is usually a full-broadcast flake system: it hides winter grit, adds slip resistance, and shrugs off the road salt that destroys bare concrete. For service bays and fleet garages we build heavier and finish in a chemical-resistant topcoat that handles oil, brake fluid and hot-tire pickup without softening.`,
    ],
    local: [
      `Residential garages throughout ${n(t, 0)} and ${n(t, 1)}`,
      `Service bays and fleet garages along the ${t.name} commercial corridors`,
      `Hot-tire-rated topcoats on every floor, residential or commercial`,
    ],
  }),
};

/* ── Polyaspartic / 1-day ──────────────────────────────────────────── */
const poly: Record<Town["profile"], Gen> = {
  urban: (t) => ({
    heading: `One-day floors in ${t.name}`,
    body: [
      `A genuine one-day floor depends on the crew arriving with everything it needs and nothing going back to the shop mid-morning. ${t.name} is close enough to our Newark base that if a slab turns out to need more crack work than the walkthrough showed, we can pull extra material and still finish on schedule — which is simply not true of a crew that drove ninety minutes to get to you.`,
      `The second reason polyaspartic matters here is that a lot of ${t.name} garages are detached and unheated. Epoxy effectively stops curing below about 55°F, so from November through March a standard system means either renting heat or waiting for spring. Polyaspartic keeps curing down near 0°F, which is why most of our winter work in ${t.name} is polyaspartic rather than epoxy.`,
    ],
    local: [
      `Same-day turnarounds for ${t.name} shops that cannot lose a bay`,
      `Winter installs on unheated detached garages around ${n(t, 0)}`,
      `Walkable the same evening, drivable in about 24 hours`,
    ],
  }),
  dense: (t) => ({
    heading: `The least disruptive option for an occupied ${t.name} building`,
    body: [
      `In ${t.name} the real cost of a floor is time on site. Every extra day is another blocked parking space, another elevator reservation, and another set of residents walking past equipment. Compressing grinding, base coat, flake and topcoat into a single working day turns a three-day disruption into one — and in a building with a board to satisfy, that is often what gets the job approved at all.`,
      `Polyaspartic helps on two other fronts here. It is low-odor, which matters when solvent smell can travel up a stairwell in an occupied building, and the fast return to service means residents get their spaces back the same night. What speed does not change is the physics of a damp slab: around ${t.hook} we still moisture-test first, because a fast floor over an untreated wet slab fails just as fast as a slow one.`,
    ],
    local: [
      `Single-day installs in occupied ${t.name} buildings`,
      `Low-odor systems for work above and below living units`,
      `Spaces handed back the same evening, not three days later`,
    ],
  }),
  suburban: (t) => ({
    heading: `When a one-day floor is worth it in ${t.name} — and when it isn't`,
    body: [
      `There are two situations where polyaspartic genuinely earns its premium in ${t.name}. The first is cold: if the garage is unheated and it is November, epoxy will not cure to spec and polyaspartic will, so it is not really a choice. The second is availability — if the garage is where two cars live, three days without it is a real problem and one day is not.`,
      `Outside those two cases we will usually tell you to spend the money differently. If you have a spring weekend free and the garage can sit, a hybrid system — epoxy base for film build, polyaspartic topcoat for UV stability and hot-tire resistance — gives you a thicker floor for less. That is the honest recommendation for most ${t.name} garages, and it is the one we make even though it prices lower.`,
    ],
    local: [
      `Winter installs across ${n(t, 0)}, ${n(t, 1)} and the rest of ${t.name}`,
      `Hybrid epoxy-and-polyaspartic systems where speed is not the constraint`,
      `Same diamond grinding and crack repair — only the cure time changes`,
    ],
  }),
  estate: (t) => ({
    heading: `Larger ${t.name} garages, back in service the same day`,
    body: [
      `The bigger the garage, the more it costs to lose it. A three- or four-bay garage in ${t.name} out of service for three days means several vehicles displaced, and on properties where the garage is also the workshop and the storage, that ripples through the whole week. A polyaspartic system puts the floor back the same evening and takes vehicle traffic in about 24 hours.`,
      `There is a second reason it suits ${t.name}. The topcoat we use is aliphatic polyaspartic, which is UV-stable and will never amber — and ambering is exactly what you notice on a garage with glass doors or a west-facing opening, especially when a car has been sitting on one spot for months. Around ${t.hook}, that tends to matter more than the schedule does.`,
    ],
    local: [
      `Multi-bay garages completed inside a single working day`,
      `Aliphatic topcoats that will not yellow behind glass doors`,
      `Unheated barns, outbuildings and detached shops coated year-round`,
    ],
  }),
  "commercial-hub": (t) => ({
    heading: `Fast-cure floors for ${t.name} businesses`,
    body: [
      `For a business in ${t.name}, floor downtime is lost revenue, and that is the whole case for polyaspartic. A service bay, a retail floor or a back-of-house space can be ground, coated and back in use inside one working day — or overnight, closing after business and reopening in the morning with the floor already taking foot traffic.`,
      `The prep does not change to make that happen. We still diamond-grind, still route and fill the cracks, still moisture-test the slab. What changes is the cure chemistry: one to two hours between coats instead of twelve to twenty-four. Anyone in ${t.name} offering a same-day floor without mechanical grinding is buying the speed somewhere else, and it will show up as adhesion failure inside a few years.`,
    ],
    local: [
      `Overnight installs for ${t.name} retail, service and back-of-house floors`,
      `Single-day turnarounds along the ${t.name} commercial corridors`,
      `Full diamond grinding — the schedule compresses, the prep does not`,
    ],
  }),
};

/* ── Commercial ────────────────────────────────────────────────────── */
const commercial: Record<Town["profile"], Gen> = {
  urban: (t) => ({
    heading: `Commercial floors in ${t.name} that cannot close`,
    body: [
      `The commercial mix in ${t.name} is dense and varied — restaurants, retail, medical and office suites, auto service, all within a few blocks of each other. What they have in common is that none of them can afford to shut for a week. We schedule around that by default: Friday-night start and Monday-morning handback for most retail and office floors, overnight work for anything trading seven days.`,
      `The buildings here also tend to be old, which means we spend more time on the substrate than we would in a new build-out. Old VCT and its adhesive, tile mortar, previous coatings and patches from three different tenants all have to come off mechanically before anything goes down. That removal is the bulk of the labor on a ${t.name} retrofit, and it is exactly what a suspiciously cheap quote has left out.`,
    ],
    local: [
      `Restaurant, retail and salon floors across ${n(t, 0)} and ${n(t, 1)}`,
      `Medical, dental and office suites throughout ${t.name}`,
      `Weekend and overnight installs so you never lose a trading day`,
    ],
  }),
  dense: (t) => ({
    heading: `Storefront floors in ${t.name}`,
    body: [
      `${t.name} retail is pedestrian-first and competitive — people walk past several alternatives before they reach your door, and a tired floor reads as a tired business. Seamless epoxy fixes that permanently: no grout to discolor, no VCT seams lifting at the threshold where everyone walks, and no quarterly strip-and-wax cycle to budget for. It cleans with a mop and stays presentable under the foot traffic these blocks generate.`,
      `Two ${t.name} specifics shape the job. Ground-floor retail here is often below street grade or built into an older structure, so we moisture-test before quoting rather than after. And with no parking and no loading dock, material staging and equipment access get planned in advance and priced in — you should not be seeing a change order because a crew could not park near ${n(t, 0)}.`,
    ],
    local: [
      `Storefront and restaurant floors around ${n(t, 0)} and ${n(t, 1)}`,
      `Office, medical and coworking build-outs across ${t.name}`,
      `Permits, staging and access planned before install day, not on it`,
    ],
  }),
  suburban: (t) => ({
    heading: `Retail, medical and studio floors across ${t.name}`,
    body: [
      `Commercial work in ${t.name} skews toward the spaces people spend time in — medical and dental suites, gyms and studios, salons, veterinary practices, and retail along the main corridors. Those floors get judged up close under bright light, which is where seamless epoxy separates itself from VCT: no seams, no grout lines, no wax swirl, and nothing that needs stripping and re-waxing every quarter.`,
      `Because most ${t.name} commercial spaces have had a previous tenant, the job usually starts with removal — old tile, adhesive, sheet vinyl or a failing coating, all taken off mechanically down to sound concrete. We schedule around your hours, phase larger floors in sections, and can add line striping, walkway definition and brand-matched color under the same seamless topcoat.`,
    ],
    local: [
      `Medical, dental and veterinary suites throughout ${t.name}`,
      `Gyms, studios and salons around ${n(t, 0)} and ${n(t, 1)}`,
      `Brand-matched color, striping and logo inlays sealed under one topcoat`,
    ],
  }),
  estate: (t) => ({
    heading: `Commercial epoxy for ${t.name} businesses`,
    body: [
      `${t.name}'s commercial space is smaller-format and design-conscious — boutique retail, restaurants, professional offices, fitness studios and salons where the finish level is expected to match the town. A seamless epoxy floor works there because it can be specified rather than merely installed: brand-matched pigment, a chosen sheen, defined walkways, and no grout or seams interrupting the space.`,
      `Scheduling tends to be the easy part here. Most ${t.name} businesses have a genuine slow period or a closed day, so we take the space then and hand it back finished — usually Friday evening to Monday morning. What takes the time is removal: whatever the previous tenant left down has to come off mechanically before the new system goes on, and we quote that honestly after seeing it.`,
    ],
    local: [
      `Boutique retail, restaurants and offices around ${n(t, 0)}`,
      `Fitness studios, salons and professional suites across ${t.name}`,
      `Specified finishes — brand color, sheen and walkway definition`,
    ],
  }),
  "commercial-hub": (t) => ({
    heading: `Large-format commercial floors in ${t.name}`,
    body: [
      `${t.name} is where the bigger commercial floors are — showrooms, retail boxes, dealerships and back-of-house space along ${t.hook}. These are large open spans under bright light, which is an unforgiving combination: every seam, patch and wax swirl is visible from across the room. High-build seamless epoxy in a brand-matched color removes all of it and never needs stripping or waxing again.`,
      `At this scale, phasing is what keeps you trading. We section the floor and work nights and weekends so the space stays open, and where turnaround is critical we use fast-cure systems that let a zone come back the same night. Line striping, walkway definition, safety zones and logo inlays all go under the same topcoat, so there is nothing applied on top to wear off.`,
    ],
    local: [
      `Showroom, retail and dealership floors along ${t.hook}`,
      `Phased installs that keep large ${t.name} spaces trading throughout`,
      `Striping, walkways and logo inlays sealed beneath the topcoat`,
    ],
  }),
};

/* ── Basement ──────────────────────────────────────────────────────── */
const basement: Record<Town["profile"], Gen> = {
  urban: (t) => ({
    heading: `${t.name} basements and the moisture question`,
    body: [
      `Basements in ${t.name} are mostly old, mostly built as utility space, and mostly poured directly on soil with no vapor barrier — because nobody was installing one when these houses went up. That is not a reason to avoid finishing them. It is a reason to treat the moisture as a design input, which is precisely what a properly specified epoxy system does and what carpet, laminate and glued vinyl all fail to do.`,
      `We test before we quote. A calcium chloride or relative-humidity reading tells us whether the slab needs a standard build or a moisture-mitigating primer engineered for vapor drive, and that decision gets made on a number rather than a guess. If the test shows active liquid water rather than vapor, we will tell you to fix the drainage first — we would rather lose the job than warranty a floor over standing water.`,
    ],
    local: [
      `Older stone and block foundations across ${n(t, 0)} and ${n(t, 1)}`,
      `Calcium chloride or RH testing before any ${t.name} basement quote`,
      `Satin and matte finishes for basements being used as living space`,
    ],
  }),
  dense: (t) => ({
    heading: `Below-grade floors in ${t.name}`,
    body: [
      `Nobody in ${t.name} needs convincing that below-grade space is damp. Between the water table and the age of the building stock around ${t.hook}, garden-level and basement slabs here have been moving vapor since they were poured. Any flooring laid loose over that — carpet, laminate, glued vinyl — is on a countdown from the day it goes down, and it ends in a dumpster rather than a repair.`,
      `Epoxy over a correctly specified mitigating primer is the finish that does not care. It is seamless, it does not absorb, and after a wet season it comes back with a wet-vac and a mop. What it will not do is stop water entering the space, and we are direct about that distinction: if the slab is taking on liquid water, that is a drainage and waterproofing job first, and coating over it just hides the problem for a season.`,
    ],
    local: [
      `Garden-level and below-grade units throughout ${n(t, 0)}`,
      `Vapor-barrier primers matched to the actual moisture reading`,
      `Storage, utility and laundry rooms finished to be usable again`,
    ],
  }),
  suburban: (t) => ({
    heading: `Finishing a ${t.name} basement so it stays finished`,
    body: [
      `The pattern we see across ${t.name} is a basement that has been finished once already and had the floor replaced after a wet season. Carpet holds the moisture and starts to smell, laminate cups at the seams, and tile pops off the slab within a few years. None of those materials were designed to sit on concrete that is moving vapor upward, which is what a slab-on-grade does by default.`,
      `A seamless epoxy floor is the one that survives it. It does not absorb, does not support mold growth, and cleans up after water rather than being landfilled because of it. For ${t.name} homes near lower ground or older grading we will always test the slab first and prime accordingly. For a gym, we will usually run the epoxy wall to wall and add interlocking mats only in the lifting zone.`,
    ],
    local: [
      `Finished basements, gyms and rec rooms across ${n(t, 0)} and ${n(t, 1)}`,
      `Moisture testing before quoting, on every ${t.name} basement`,
      `Seamless floors that survive a wet season instead of being replaced`,
    ],
  }),
  estate: (t) => ({
    heading: `${t.name} basements as genuine living space`,
    body: [
      `A finished basement in ${t.name} is a home gym, a media room, a studio or a guest suite — it is counted as living space by everyone except the assessor. What undermines that is flooring chosen as though the room were above grade. Concrete below grade moves vapor continuously, and hardwood, laminate and engineered board all fight it rather than working with it.`,
      `Epoxy works with it, and in satin or matte it does not read as a garage floor at all. Around ${t.hook}, metallic finishes in a lower sheen are the most common choice — they read as honed stone, sit beautifully under area rugs, and give you one continuous surface across a large footprint with no transition strips interrupting it. The gloss you have seen in garage photos is the topcoat, and it is optional.`,
    ],
    local: [
      `Full-footprint finished basements around ${n(t, 0)} and ${n(t, 1)}`,
      `Home gyms, media rooms and studios finished in satin or matte`,
      `Better per-square-foot pricing as the floor area grows`,
    ],
  }),
  "commercial-hub": (t) => ({
    heading: `Basement and lower-level floors in ${t.name}`,
    body: [
      `Lower-level space in ${t.name} does real work — storage, utility, prep and back-of-house as often as living space, and in the older buildings around ${t.hook} it is frequently the least finished part of the property. That is usually a flooring problem rather than a structural one. Bare concrete sheds dust continuously, stains permanently, and is nearly impossible to clean properly.`,
      `Sealing it changes what the space can be used for. A seamless epoxy floor cleans with a mop, takes rolling loads without denting, and brightens a windowless room enough that the existing lighting suddenly works. We moisture-test first, because below-grade slabs in ${t.name} vary enormously, and we prime to whatever the reading actually says rather than to whatever would be convenient.`,
    ],
    local: [
      `Below-grade storage, utility and back-of-house space across ${t.name}`,
      `Residential basements throughout ${n(t, 0)} and ${n(t, 1)}`,
      `Dust-free, mop-clean surfaces in rooms that were bare concrete`,
    ],
  }),
};

/* ── Metallic ──────────────────────────────────────────────────────── */
const metallic: Record<Town["profile"], Gen> = {
  urban: (t) => ({
    heading: `Metallic floors in ${t.name}`,
    body: [
      `Most of our metallic work in ${t.name} is commercial — bars, restaurants, salons and retail floors where the space has to make an impression and the floor is one of the few surfaces with room to do it. A metallic pour draws the eye down, reflects light through the whole room, and photographs extremely well, which matters more every year for a business that lives partly on social media.`,
      `It is a full epoxy build underneath the decorative layer, so it gets the same discipline as any other floor here: mechanical grinding, crack and spall repair, and a moisture test on older ${t.name} slabs before anything goes down. The effect coat sits on top of a properly prepared system, protected by a high-build clear topcoat that takes the actual wear.`,
    ],
    local: [
      `Bar, restaurant and lounge floors across ${n(t, 0)} and ${n(t, 1)}`,
      `Salon, studio and retail floors throughout ${t.name}`,
      `Hand-worked pours — no two ${t.name} floors come out the same`,
    ],
  }),
  dense: (t) => ({
    heading: `Metallic over the concrete you already have in ${t.name}`,
    body: [
      `Converted buildings around ${t.hook} are full of exposed concrete that owners want to keep exposed but not keep bare. Metallic epoxy threads that: the slab stays the floor, but with colour, depth and movement worked into it by hand and a sealed seamless surface over the top. In a space where the walls are brick and the ceiling is joists, it reads correctly in a way tile never does.`,
      `It is also doing practical work in ${t.name}. A metallic system is a full epoxy build, which means it carries the same vapor management as any other floor this close to the water — the decorative layer sits on a properly primed and prepared slab, not directly on raw concrete. Bars and restaurants here have taken to it for both reasons at once: it looks like stone and it sanitizes with a mop.`,
    ],
    local: [
      `Converted loft and warehouse residences across ${n(t, 0)}`,
      `Bar, restaurant and retail floors throughout ${t.name}`,
      `Seamless and sealed — the concrete stops shedding dust for good`,
    ],
  }),
  suburban: (t) => ({
    heading: `Where metallic fits in a ${t.name} home`,
    body: [
      `In ${t.name} metallic usually turns up in two places: the garage bay that gets seen, and the basement that is being finished as real living space. They call for different treatments of the same system. A garage floor is finished in gloss, where the depth and the wet look are the point. A basement is usually taken down to satin, where the same pour reads as honed stone instead.`,
      `Either way it is hand-worked — mica pigments moved through self-levelling clear resin, which is why no two floors match and why we bring physical samples to your house rather than asking you to choose from a photograph. It looks genuinely different under warm and cool light, so we lay the samples on your actual slab, in your actual lighting, before anything is ordered.`,
    ],
    local: [
      `Showpiece garage bays around ${n(t, 0)} and ${n(t, 1)}`,
      `Finished basements, bars and rec rooms in satin or matte`,
      `Samples brought to your floor, under your own lighting`,
    ],
  }),
  estate: (t) => ({
    heading: `Metallic as the finish ${t.name} actually asks for`,
    body: [
      `${t.name} asks for more metallic work than almost anywhere else we install. The reason is scale as much as taste — on a small slab you see a pattern, but across a three-car garage or a full-footprint basement you see movement, with veining that runs the length of the room and a depth that reads as stone rather than coating. Around ${t.hook} it has become close to the default for a space being finished properly.`,
      `Large continuous pours are a manpower question, not just a material one. Metallic is worked while the resin is still moving, so covering a big span means enough people on the floor to keep a wet edge across the whole thing. We staff accordingly rather than pouring in sections, because a cold joint in the middle of a metallic floor is visible permanently and cannot be repaired out afterwards.`,
    ],
    local: [
      `Three-car and showpiece garages around ${n(t, 0)} and ${n(t, 1)}`,
      `Basement bars, lounges and media rooms in satin and matte`,
      `Large continuous pours staffed to hold a wet edge end to end`,
    ],
  }),
  "commercial-hub": (t) => ({
    heading: `Metallic floors that earn their keep in ${t.name}`,
    body: [
      `Along ${t.hook}, a metallic floor is a commercial decision rather than a decorative one. In a showroom or retail space it reflects light through the room, makes the space read larger, and photographs better than any solid colour will — which is why we install more of it for ${t.name} businesses than for ${t.name} homeowners.`,
      `The question people ask is whether it survives the traffic, and the answer is that the metallic layer never takes the wear in the first place. The clear topcoat does, and for commercial work we build that heavy and specify it for the traffic the floor actually sees. Every several years a recoat of the clear refreshes the whole floor without touching the artwork underneath it.`,
    ],
    local: [
      `Showroom and retail floors along ${t.hook}`,
      `Salon, studio and hospitality floors throughout ${t.name}`,
      `High-build clear topcoats, refreshable without redoing the floor`,
    ],
  }),
};

const matrix: Record<string, Record<Town["profile"], Gen>> = {
  "garage-epoxy-flooring": garage,
  "polyaspartic-floor-coating": poly,
  "commercial-epoxy-flooring": commercial,
  "basement-epoxy-flooring": basement,
  "metallic-epoxy-flooring": metallic,
};

export function townServiceAngle(t: Town, serviceSlug: string): TownServiceAngle | undefined {
  return matrix[serviceSlug]?.[t.profile]?.(t);
}
