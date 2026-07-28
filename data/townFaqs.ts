import type { Town } from "./towns";

/**
 * Town FAQs that are genuinely differentiated by each town's real character
 * (`profile` + `hook` + actual neighborhoods), not city-name-swapped boilerplate.
 * This keeps location pages above the playbook's unique-content bar and gives
 * AI answer engines real, town-specific facts to cite. Answers run 40–90 words.
 */
export function townFaqs(t: Town): { q: string; a: string }[] {
  const n0 = t.neighborhoods[0];
  const n1 = t.neighborhoods[1] ?? t.neighborhoods[0];
  const n2 = t.neighborhoods[2] ?? n1;

  // Q1 — coverage, grounded in the town's actual neighborhoods (unique per town)
  const coverage = {
    q: `What parts of ${t.name} do you service?`,
    a: `All of ${t.name} and the ${t.zip} area — including ${n0}, ${n1} and ${n2}. We're a North Jersey crew based in Newark, so we cover ${t.hook} along with every street in between, usually with same-week availability for on-site quotes.`,
  };

  // Q2/Q3 — driven by the town's defining profile (genuinely different content)
  const byProfile: Record<Town["profile"], { q: string; a: string }[]> = {
    urban: [
      {
        q: `Do you handle commercial and industrial floors in ${t.name}, or just garages?`,
        a: `Both, constantly. In ${t.name} our week usually mixes ${t.hook} with residential garages and basements. Commercial installs are scheduled around your operating hours — overnight for kitchens, weekends for retail — so the business never loses a full day of trade.`,
      },
      {
        q: `Can you coat the floor of an older ${t.name} building with a rough slab?`,
        a: `Yes — older slabs are our specialty. We diamond-grind through decades of paint, sealers and contamination, repair spalls and cracks with epoxy mortar, and moisture-test before choosing the system. The rougher the history, the more the prep matters, and prep is the part we never skip.`,
      },
    ],
    dense: [
      {
        q: `My ${t.name} building has ground-floor moisture — can epoxy handle it?`,
        a: `Usually, yes. Around ${t.hook}, ground-level and below-grade slabs see real vapor drive, so we start every job with a moisture test. Moderate readings get a moisture-mitigating epoxy primer engineered exactly for this; only active liquid water needs drainage work first — and we'll tell you honestly which case you have.`,
      },
      {
        q: `Can you work in an occupied ${t.name} building without disrupting neighbors?`,
        a: `Yes. Our grinders run with HEPA dust extraction, the 100% solids epoxies we use are low-odor compared to old solvent coatings, and we stage equipment tightly — important on ${t.name}'s blocks. Most residential units are done in 2–3 quiet working days.`,
      },
    ],
    suburban: [
      {
        q: `What's the most popular garage floor finish in ${t.name}?`,
        a: `Full-broadcast flake, without question. Around ${n0} and ${n1}, gray, blue and earth-tone flake blends are the neighborhood standard — they hide winter grit between cleanings, add slip resistance, and make a ${t.name} garage look finished instead of just painted. Most 2-car garages run $1,200–$3,200 installed.`,
      },
      {
        q: `Our ${t.name} driveway salt destroyed the garage slab edge — can you fix that?`,
        a: `That's classic North Jersey salt spalling and yes — we repair it as part of prep. Pitted and flaking areas get ground out and patched with epoxy mortar before coating, and the finished floor seals the slab so salt and snow melt can never soak in again.`,
      },
    ],
    estate: [
      {
        q: `We're finishing our basement in ${t.name} — is epoxy really nice enough for living space?`,
        a: `It's become the signature finish for exactly that. In ${t.name} — especially around ${t.hook} — metallic epoxy with a satin topcoat reads as polished stone, not garage floor. It's seamless, moisture-proof over concrete, and pairs beautifully with area rugs in home gyms, studios and rec rooms.`,
      },
      {
        q: `Can you match a specific look for our ${t.name} home — colors, finish, sheen?`,
        a: `Yes — that's what the free color consultation is for. We bring flake blends, metallic samples and sheen options to your home so you can see them on your actual floor in your actual light. Solid, flake or metallic, gloss to matte — the system is built around your spec.`,
      },
    ],
    "commercial-hub": [
      {
        q: `Can you install a commercial floor in ${t.name} without closing the business?`,
        a: `That's how we schedule every ${t.name} commercial job. For ${t.hook}, we close the space Friday night and hand it back Monday morning — or phase larger floors zone by zone. Fast-cure polyaspartic systems compress the timeline further when downtime is expensive.`,
      },
      {
        q: `Do you do industrial-grade floors near ${t.name} — forklifts, machinery, washdowns?`,
        a: `Yes. Warehouses and production space around ${t.name} get engineered systems — high-build epoxy or urethane mortar rated for forklift traffic, chemical exposure and hot washdowns, with safety striping and 5S layouts available. We spec the system to your traffic and chemistry, not from a one-size menu.`,
      },
    ],
  };

  // Q4 — pricing + trust (kept consistent, but framed to the town)
  const pricing = {
    q: `How much does epoxy flooring cost in ${t.name}, and are you insured?`,
    a: `Most ${t.name} garages run $1,200–$3,200 for a full flake system ($3–8 per square foot), with metallic and commercial systems quoted on site — always free and itemized. And yes: Jersey Elite Coatings is licensed and insured in New Jersey, with a certificate of insurance available on request.`,
  };

  return [coverage, ...byProfile[t.profile], pricing];
}
