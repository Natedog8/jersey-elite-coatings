import type { Town } from "./towns";
import type { Service } from "./services";

/**
 * Town × service FAQs.
 *
 * Why this exists: the combo pages used to render `service.faq` verbatim, which
 * meant every town emitted byte-identical FAQPage schema for the same service —
 * twelve near-duplicate pages per service, on our highest-count page type. This
 * generates two questions that are specific to *this town* and *this service*
 * before falling back to the service's general FAQ, so each combo page carries
 * a unique answer block that Google and AI answer engines can actually cite.
 *
 * Answers run 45–95 words and lean on the town's real `profile`, `hook` and
 * neighborhoods rather than swapping a city name into a template.
 */

type QA = { q: string; a: string };

/** Per-service generators. Each returns two town-specific Q&As. */
const byService: Record<string, (t: Town) => [QA, QA]> = {
  "garage-epoxy-flooring": (t) => [
    {
      q: `How long does a garage epoxy install take in ${t.name}?`,
      a: `Two to three days for a standard ${t.name} garage: grinding and crack repair on day one, base coat and flake broadcast on day two, topcoat on day three. You can walk on it 24 hours after the final coat and park on it in about 72. If you can't lose the garage that long, our one-day polyaspartic system does the whole thing in a single working day.`,
    },
    t.profile === "estate"
      ? {
          q: `Can you finish the walls, steps and apron of our ${t.name} garage to match?`,
          a: `Yes, and around ${t.hook} it's the upgrade people ask for most. Coating the stem walls, curbs, steps and driveway apron in the same system removes every visible edge of raw concrete, which is what makes a garage read as finished rather than just sealed. Vertical surfaces get a thixotropic additive so the coating doesn't sag. We price it as a separate line so you can decide.`,
        }
      : {
          q: `Will an epoxy floor survive ${t.name} winters and road salt?`,
          a: `That's exactly what it's for. Road salt and brine soak into bare concrete, refreeze, and pop the surface apart — the pitting you see along garage door openings all over ${t.name}. A properly ground and coated floor seals the slab so salt sits on top of the coating instead of in it, and January slush becomes a squeegee job. It's backed by our lifetime warranty against peeling.`,
        },
  ],

  "polyaspartic-floor-coating": (t) => [
    {
      q: `Can you really coat a ${t.name} garage floor in one day?`,
      a: `Yes, on a sound slab. Polyaspartic cures in one to two hours per coat instead of twelve to twenty-four, so grinding, base coat, flake and topcoat all fit inside one working day in ${t.name} — walkable that evening, drivable in about 24 hours. The honest exception is a floor needing significant crack or spall repair; that adds time no chemistry can remove, and we'll tell you at the walkthrough.`,
    },
    {
      q: `Can you install a polyaspartic floor in ${t.name} during winter?`,
      a: `Yes — it's the main reason we carry it. Epoxy effectively stops curing below about 55°F, which rules out most unheated ${t.name} garages from November through March. Polyaspartic keeps curing down near 0°F, so we install through the winter here without renting heat. We still moisture-test first: a cold slab and a wet slab are different problems and only one is solved by chemistry.`,
    },
  ],

  "commercial-epoxy-flooring": (t) => [
    {
      q: `Can you install a commercial floor in ${t.name} without closing the business?`,
      a: `That's how we schedule nearly every commercial job in ${t.name}. Most retail and office floors are done over a weekend — we take the space Friday evening and hand it back Monday morning. Anything trading seven days gets overnight work between closing and opening, and larger floors are phased zone by zone so you never lose the whole space at once.`,
    },
    {
      q: `What's underneath most ${t.name} commercial floors, and does it have to come out?`,
      a: `Usually old VCT and its adhesive, sometimes tile mortar or a previous coating, occasionally all three layered up from different tenants. It all comes off mechanically before we coat — epoxy bonds to clean, open concrete and nothing else. That removal is the majority of the labor on a ${t.name} retrofit, and it's the part a suspiciously cheap quote is leaving out.`,
    },
  ],

  "industrial-epoxy-flooring": (t) => [
    {
      q: `Can you coat our ${t.name} facility without shutting down production?`,
      a: `Yes — phased installation is the default for industrial work around ${t.name}. We section the floor so racking aisles and dock doors stay reachable, work nights and weekends where your schedule allows, and use fast-cure systems in the zones that have to come back online first. We walk the floor with your operations lead and agree the phasing plan before the quote is written.`,
    },
    {
      q: `Our ${t.name} slab is old and has no vapor barrier — is that a dealbreaker?`,
      a: `No, but it changes the system. Industrial slabs poured before vapor barriers were standard push moisture up continuously, and a coating applied over that without mitigation will blister and release. We run a calcium chloride or RH test as part of the assessment and, where the reading calls for it, build on a moisture-mitigating primer rated for what your slab actually measures.`,
    },
  ],

  "basement-epoxy-flooring": (t) => [
    {
      q: `Is our ${t.name} basement too damp for an epoxy floor?`,
      a: `Probably not, but we test rather than guess. Most ${t.name} basement dampness is vapor drive coming up through the slab, and a moisture-mitigating primer under the epoxy is engineered for exactly that. Active liquid water — a failing drain, a cracked wall, a grading problem — needs fixing first, and we'll say so plainly at the quote instead of coating over it and warrantying something that can't hold.`,
    },
    {
      q: `Is epoxy nice enough for finished living space in a ${t.name} home?`,
      a: `In satin or matte, yes — the wet-look gloss you've seen on garage floors comes from the topcoat, not the system. Around ${t.hook}, metallic and subtle flake finishes in a lower sheen read as honed stone and work well under area rugs in gyms, studios and rec rooms. Seamless and moisture-tolerant over concrete is a genuine advantage below grade that hardwood and laminate can't match.`,
    },
  ],

  "metallic-epoxy-flooring": (t) => [
    {
      q: `Can we see metallic samples before committing on our ${t.name} floor?`,
      a: `Always — we bring physical samples to the quote and lay them on your actual slab in ${t.name}, under your actual lighting. Metallic looks genuinely different in warm versus cool light, and choosing from a photograph is how people end up disappointed by a floor that's technically exactly what they asked for. Gloss, satin and matte samples come too, because sheen changes the character more than color does.`,
    },
    {
      q: `Will two ${t.name} metallic floors ever look the same?`,
      a: `No, and that's the point. Mica pigments are hand-moved through self-leveling clear resin, so the veining and movement are one-off by definition — we can match a palette and a character, but not reproduce a specific floor, and no honest installer can claim otherwise. What we do agree before install day is the color direction and the intensity of the effect, worked on a sample on your own slab.`,
    },
  ],

  "restaurant-kitchen-epoxy-flooring": (t) => [
    {
      q: `How long will our ${t.name} kitchen be out of service?`,
      a: `Usually just overnight. We start after close, and fast-cure urethane and polyaspartic systems have the floor ready for morning prep. Larger ${t.name} kitchens are phased zone by zone so the line keeps running on one side while we work the other. A full retrofit over failing quarry tile takes longer, because the tile and mortar have to come out down to sound concrete first.`,
    },
    {
      q: `Do we need urethane mortar or is epoxy enough for a ${t.name} kitchen?`,
      a: `It comes down to your washdown. If the kitchen goes hot and caustic nightly, urethane mortar is the correct spec — it's cementitious, so it expands and contracts with the slab under it and won't shear off from thermal shock. If you're mopping and degreasing at moderate temperature, seamless epoxy with integral cove base is plenty and costs less. We spec from your actual process, not a menu tier.`,
    },
  ],

  "flake-epoxy-flooring": (t) => [
    {
      q: `What flake blend is most popular in ${t.name}?`,
      a: `Grays, blues and earth tones, consistently — around ${t.hook} they're close to the neighborhood standard. The practical reason is that a mid-tone blend hides the winter grit and dust that accumulate between cleanings far better than a solid color does, while still looking intentional. We bring the full blend deck to the quote so you can see the options at full-broadcast density rather than as a chip sample.`,
    },
    {
      q: `Is a flake floor slippery when it gets wet in ${t.name}?`,
      a: `Less than almost any other hard surface. The broadcast flake creates texture in the floor itself, and we add anti-slip aggregate to the topcoat as standard — which matters in ${t.name} where cars drip snow melt onto the slab for hours at a time. If you want more grip than standard, say so at the quote and we'll increase the aggregate loading.`,
    },
  ],
};

/**
 * Two town-specific Q&As followed by the service's general FAQ. Falls back
 * gracefully to the service FAQ alone if a service has no generator yet.
 */
export function comboFaqs(t: Town, s: Service): QA[] {
  const gen = byService[s.slug];
  return gen ? [...gen(t), ...s.faq] : s.faq;
}
