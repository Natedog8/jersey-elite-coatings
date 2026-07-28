/**
 * Epoxy floor failure modes — the diagnostic content behind
 * /why-epoxy-floors-fail.
 *
 * Strategic note: someone searching "why is my epoxy floor peeling" has a
 * failed floor right now and is a buyer today, not in six months. Nobody
 * else in the North Jersey market has this page. It also does double duty —
 * every prep argument the rest of the site makes ("we diamond-grind, we
 * moisture-test") is abstract until a reader sees what happens when you
 * don't, so this page is where the site's core claim gets its evidence.
 *
 * Each entry is written as a diagnosis: what you're seeing → what caused it
 * → whether it can be saved. The honesty is the point; several answers here
 * are "this one is cheap to fix" and one is "you don't need us yet".
 */

export type FailureMode = {
  slug: string;
  /** what the customer sees, in their words */
  symptom: string;
  /** one-line plain-English verdict, used as the card subtitle */
  verdict: string;
  /** the actual mechanism */
  cause: string[];
  /** how it gets put right */
  fix: string;
  /** honest severity for the repair conversation */
  severity: "Full redo" | "Repairable" | "Partial redo" | "Not a failure";
};

export const failureModes: FailureMode[] = [
  {
    slug: "peeling-in-sheets",
    symptom: "It's lifting in sheets, and the underside is clean gray concrete",
    verdict: "No mechanical prep. The coating never bonded to the slab in the first place.",
    cause: [
      "Look at the back of a lifted piece: if it's smooth and clean, the epoxy never keyed into the concrete — it sat on top of it.",
      "The cause is almost always acid etching instead of diamond grinding, or coating straight over a sealed or previously painted slab.",
      "Etching roughens the very top of the surface chemically. It does not open the pore structure the way mechanical grinding does, and it leaves residue behind that has to be neutralized and rinsed perfectly — which rarely happens on site.",
      "This is the single most common failure we're called to, and it's the reason we grind every floor with no exceptions.",
    ],
    fix: "The whole coating has to come off and the floor starts again — grind to bare open concrete, repair, moisture-test, rebuild. Removal typically adds $1–2 per square foot over a normal install, which is the real cost of the cheaper quote you took the first time.",
    severity: "Full redo",
  },
  {
    slug: "bubbles-and-blisters",
    symptom: "Bubbles, blisters or a bumpy 'orange peel' surface",
    verdict: "Usually moisture pushing up through the slab. Sometimes the coating was rolled too fast.",
    cause: [
      "Concrete on grade moves water vapor upward continuously unless there's an intact vapor barrier beneath it — and slabs poured before the 1980s usually have none.",
      "That vapor has nowhere to go once the slab is sealed, so it collects under the film and lifts it into domes. Press one: if it's soft and there's moisture underneath, that's your answer.",
      "The tell is location. Moisture blistering appears in patches, often worse near walls, in the middle of the slab, or wherever the ground outside sits highest.",
      "The other cause is mechanical — rolling too aggressively whips air into the resin. That version is uniform across the whole floor rather than patchy, and it shows up within hours of install.",
    ],
    fix: "Moisture blistering means the affected coating comes off and the floor is rebuilt on a moisture-mitigating primer specified to what a calcium chloride or RH test actually reads. Skipping the test and simply recoating guarantees a repeat.",
    severity: "Full redo",
  },
  {
    slug: "hot-tire-pickup",
    symptom: "The coating lifts and sticks to the tires where you park",
    verdict: "Wrong topcoat — usually a water-based DIY kit. Classic and completely preventable.",
    cause: [
      "Tires come off a summer road hot and soft, then cool and contract against the floor. A coating that softens under heat gets gripped and pulled up with them.",
      "Water-based and single-part epoxy kits from a box store have neither the film thickness nor the heat resistance to resist it. This is the defining failure of the DIY garage kit.",
      "It also happens with correctly specified epoxy that had no proper topcoat at all — the base coat was never meant to be the wear surface.",
      "It shows up as two rectangles exactly where the car sits, which makes it one of the easiest failures to diagnose from a photo.",
    ],
    fix: "The affected area comes off and the floor gets rebuilt with a 100% solids base and a polyaspartic or urethane topcoat rated for hot-tire pickup. If the rest of the floor is genuinely well bonded we can sometimes treat just the parking bays, but the color match is never perfect and we'll say so before you decide.",
    severity: "Partial redo",
  },
  {
    slug: "yellowing",
    symptom: "It's gone yellow or amber, mostly near the door or windows",
    verdict: "UV hitting a topcoat that was never UV-stable. Cosmetic, not structural.",
    cause: [
      "Epoxy is aromatic, which means ultraviolet light breaks it down chemically and it ambers. It's a property of the resin, not a defect in the batch.",
      "The pattern gives it away: worst at the garage door opening, under windows, or in the arc of a west-facing door, and unchanged in the dark corners.",
      "A UV-stable aliphatic polyaspartic or urethane topcoat exists precisely to prevent this. Cheaper aromatic polyureas are sold as fast topcoats and will amber within a couple of years.",
      "Good news: the floor underneath is usually structurally fine. This is a wear-layer problem, not a bond problem.",
    ],
    fix: "If the coating is still well bonded — and after ambering it usually is — the floor gets abraded and recoated with an aliphatic topcoat. That's a fraction of a full replacement, and it's the cheapest genuine repair on this page.",
    severity: "Repairable",
  },
  {
    slug: "cracks-showing-through",
    symptom: "Old cracks have reappeared straight through the new coating",
    verdict: "The cracks were coated over instead of routed and filled.",
    cause: [
      "A coating is a film a few millimeters thick. It has no structural capacity to bridge a crack in a four-inch slab, and it was never going to.",
      "Cracks have to be chased open into a V, cleaned out, and filled with a structural epoxy or polyurea filler that bonds to both faces before anything goes over the top.",
      "Where a crack is still actively moving — seasonal, thermal, or settlement — even a correct repair may telegraph eventually. That's a slab issue and no coating solves it.",
      "Control joints are a separate case. They're supposed to move, so filling them rigidly and coating straight across is a mistake that shows up the same way.",
    ],
    fix: "The affected areas are opened up, filled properly, and the coating is patched and blended. On a flake floor the repair genuinely disappears; on a solid color it's visible, so we'll usually recommend recoating the full bay for an even finish.",
    severity: "Repairable",
  },
  {
    slug: "soft-or-tacky",
    symptom: "It never fully hardened — still soft, tacky, or marks under a fingernail",
    verdict: "A mixing or temperature problem. The chemistry never completed.",
    cause: [
      "Two-part epoxy cures by reaction, not by drying. Get the ratio wrong or under-mix it and part of the batch has nothing to react with — it will stay soft indefinitely.",
      "Cold does the same thing. Below roughly 55°F an epoxy build stalls, and a slab is often ten degrees colder than the air in the room because concrete lags the weather by days.",
      "The 'not quite mixed' version shows as soft patches and streaks. The cold version is uniformly soft across the whole floor.",
      "Amine blush — a waxy, sometimes blotchy film from curing in high humidity — looks similar but wipes back with the right cleaner and is far less serious.",
    ],
    fix: "Under-cured epoxy cannot be rescued by waiting or by adding heat after the fact. It has to be ground off and reinstalled — in the cold-weather case, with a polyaspartic system that cures down near 0°F instead.",
    severity: "Full redo",
  },
  {
    slug: "chipping-at-the-door",
    symptom: "It's crumbling and chipping in the first few feet inside the garage door",
    verdict: "Salt-damaged concrete underneath, coated over instead of rebuilt.",
    cause: [
      "Snow melt and road brine drip off the tires in the first few feet inside the door, soak into the concrete, refreeze and blow the surface apart. That's salt spalling.",
      "Coating over spalled concrete puts a sound film on an unsound substrate. The coating is fine — the concrete beneath it is failing and taking the coating with it.",
      "This is the most predictable failure in New Jersey, and the most predictable place: the same band by the door on garage after garage.",
      "It's also why the perimeter and door edge need more prep attention than the middle of the floor, not less.",
    ],
    fix: "The damaged concrete gets ground out to sound material, rebuilt with epoxy mortar, and re-coated. Done properly it disappears entirely under a flake system, and the sealed floor stops salt reaching the slab again.",
    severity: "Repairable",
  },
  {
    slug: "dull-traffic-paths",
    symptom: "It's dull and worn where people walk, glossy everywhere else",
    verdict: "Normal wear on the sacrificial layer. Your floor is working as designed.",
    cause: [
      "The topcoat is a wear layer. It is meant to take the abrasion so the color and flake beneath it don't — dulling in the traffic path is the system doing its job.",
      "It shows up sooner in commercial spaces, and grit is the real culprit: sand and dirt underfoot act like sandpaper, which is why a weekly dust-mop genuinely extends the interval.",
      "Worth checking it's actually wear and not chemical dulling — vinegar, citrus and acidic cleaners gradually etch a topcoat and produce a similar look across the whole floor rather than in a path.",
      "If the color or flake layer is exposed, that's past due rather than routine, and it should be recoated soon.",
    ],
    fix: "Abrade and apply a fresh clear topcoat. The color and flake underneath are untouched, so the whole floor comes back looking new for a fraction of a replacement. Most commercial floors want this every 5–10 years; most residential garages never need it.",
    severity: "Not a failure",
  },
];

export const failureBySlug = (slug: string) => failureModes.find((f) => f.slug === slug);

/** Severity → badge styling on the page. */
export const severityStyle: Record<FailureMode["severity"], string> = {
  "Full redo": "bg-red-100 text-red-800 border-red-200",
  "Partial redo": "bg-orange-100 text-orange-800 border-orange-200",
  Repairable: "bg-amber-100 text-amber-800 border-amber-200",
  "Not a failure": "bg-emerald-100 text-emerald-800 border-emerald-200",
};
