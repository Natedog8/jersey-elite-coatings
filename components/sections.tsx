import Link from "next/link";
import { site } from "@/site.config";
import { services, type Service } from "@/data/services";
import { towns } from "@/data/towns";
import { reviews } from "@/data/reviews";
import { galleryPhotos, actionPhotos, type Tile } from "@/data/media";
import { Icon } from "@/lib/icons";
import { Section, Eyebrow, Button, StarRow } from "./ui";

/* ── Trust strip — credentials directly under the hero ─────────────── */
export function TrustBar() {
  const items = [
    { icon: "star" as const, label: `${site.rating}★ Rated Service`, sub: "Five-star results" },
    { icon: "shield" as const, label: "Licensed & Insured", sub: "COI on request" },
    { icon: "badge" as const, label: "Lifetime Warranty", sub: "Peeling & delamination" },
    { icon: "clock" as const, label: `${site.jobsCompleted} Projects`, sub: "Since 2010" },
  ];
  return (
    <div className="border-y border-navy-50 bg-navy-50/40">
      <div className="container-x grid grid-cols-2 divide-x divide-navy-100/70 md:grid-cols-4">
        {items.map((it) => {
          const I = Icon[it.icon];
          return (
            <div key={it.label} className="flex items-center gap-3 px-3 py-5 md:px-6">
              <I className="h-7 w-7 shrink-0 text-aqua-600" />
              <div className="leading-tight">
                <div className="text-[13px] font-extrabold text-navy-800 md:text-sm">{it.label}</div>
                <div className="text-xs text-muted">{it.sub}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Service grid ──────────────────────────────────────────────────── */
export function ServiceGrid({ heading = true }: { heading?: boolean }) {
  return (
    <Section id="services">
      {heading && (
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>What We Install</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-900 md:text-4xl">
            One crew for every concrete floor
          </h2>
          <p className="mt-4 text-lg text-muted">
            From showroom garages and finished basements to warehouses and restaurant
            kitchens — engineered systems, installed right the first time.
          </p>
        </div>
      )}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <ServiceCard key={s.slug} s={s} />
        ))}
        {/* filler card keeps the 7-service grid balanced at 4-wide */}
        <Link
          href="/quote"
          className="card card-hover group flex flex-col items-center justify-center gap-3 overflow-hidden p-6 text-center"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-aqua-400 to-aqua-600 text-white shadow-[var(--shadow-glow)]">
            <Icon.bolt className="h-6 w-6" />
          </span>
          <span className="text-lg font-extrabold text-navy-800">Not sure what you need?</span>
          <span className="text-sm leading-relaxed text-muted">
            Tell us about your floor — we'll recommend the right system and price it free.
          </span>
          <span className="flex items-center gap-1 text-sm font-bold text-aqua-700 transition group-hover:gap-2">
            Get a free quote <Icon.arrow className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </Section>
  );
}

export function ServiceCard({ s }: { s: Service }) {
  const I = Icon[s.icon as keyof typeof Icon] ?? Icon.spray;
  return (
    <Link href={`/services/${s.slug}`} className="card card-hover group flex flex-col overflow-hidden">
      <div className="relative h-36 w-full overflow-hidden">
        <img
          src={s.photo}
          alt={`${s.name} — North Jersey`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-aqua-700 shadow-sm backdrop-blur">
          <I className="h-5 w-5" />
        </span>
        {s.popular && (
          <span className="absolute right-3 top-3 rounded-full bg-aqua-600 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            Popular
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-extrabold text-navy-800">{s.shortName}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{s.tagline}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-bold text-aqua-700">
            {s.priceFrom > 0 ? `From $${s.priceFrom}/sq ft` : "Free quote"}
          </span>
          <span className="flex items-center gap-1 text-sm font-bold text-navy-700 transition group-hover:gap-2 group-hover:text-aqua-700">
            Learn more <Icon.arrow className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ── How it works ──────────────────────────────────────────────────── */
export function Steps() {
  const steps = [
    { n: "01", icon: "phone" as const, t: "Free on-site quote", d: "We measure, moisture-test, and bring color samples to your floor. Itemized price on the spot — no games." },
    { n: "02", icon: "spray" as const, t: "Diamond-grind prep", d: "The step DIY kits skip. We grind to bare, open concrete and repair every crack and spall first." },
    { n: "03", icon: "layers" as const, t: "Build the system", d: "100% solids epoxy base, your flake or metallic finish, and a chemical-resistant topcoat." },
    { n: "04", icon: "badge" as const, t: "Backed for life", d: "Walk on it in 24 hours, park in 72 — covered by our lifetime warranty against peeling." },
  ];
  return (
    <Section className="bg-navy-50/40">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>How It Works</Eyebrow>
        <h2 className="mt-3 text-3xl font-extrabold text-navy-900 md:text-4xl">A showroom floor in four steps</h2>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-4">
        {steps.map((s) => {
          const I = Icon[s.icon];
          return (
            <div key={s.n} className="card relative p-6">
              <span className="text-4xl font-black text-aqua-100">{s.n}</span>
              <span className="absolute right-5 top-6 flex h-10 w-10 items-center justify-center rounded-xl bg-aqua-100 text-aqua-700">
                <I className="h-5 w-5" />
              </span>
              <h3 className="mt-2 text-lg font-extrabold text-navy-800">{s.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.d}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ── Reviews wall ──────────────────────────────────────────────────── */
export function ReviewsWall({ limit = 6, heading = true }: { limit?: number; heading?: boolean }) {
  return (
    <Section id="reviews">
      {heading && (
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>North Jersey Loves Its Floors</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-900 md:text-4xl">
            Five-star floors, five-star service
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <StarRow />
            <span className="text-sm font-semibold text-muted">What customers tell us</span>
          </div>
        </div>
      )}
      <div className="mt-12 columns-1 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5">
        {reviews.slice(0, limit).map((r, i) => (
          <figure key={i} className="card break-inside-avoid p-6">
            <StarRow />
            <blockquote className="mt-3 text-[15px] leading-relaxed text-navy-700">"{r.body}"</blockquote>
            <figcaption className="mt-4 flex items-center gap-3 border-t border-navy-50 pt-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-aqua-100 text-sm font-bold text-aqua-700">
                {r.author.charAt(0)}
              </span>
              <span className="text-sm">
                <span className="block font-bold text-navy-800">{r.author}</span>
                <span className="block text-xs text-muted">
                  {r.service} · {r.town}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ── Towns grid ────────────────────────────────────────────────────── */
export function TownsGrid() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Proudly Local</Eyebrow>
        <h2 className="mt-3 text-3xl font-extrabold text-navy-900 md:text-4xl">Serving all of North Jersey</h2>
        <p className="mt-4 text-lg text-muted">
          Based in Newark, installing across Essex, Hudson, Bergen, Passaic &amp; Morris counties — pick your town.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {towns.map((t) => (
          <Link
            key={t.slug}
            href={`/areas/${t.slug}`}
            className="card card-hover flex items-center gap-3 p-4"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-aqua-100 text-aqua-700">
              <Icon.pin className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-bold text-navy-800">{t.name}</span>
              <span className="block text-xs text-muted">{t.county}</span>
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

/* ── Big CTA band ──────────────────────────────────────────────────── */
export function CTABand({
  title = "Ready for the best-looking floor on the block?",
  sub = "Free, no-obligation on-site quote — with real color samples on your actual floor. Most garages installed in 2–3 days.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="section surface-navy grain text-white">
      <div className="container-x relative text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold md:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-navy-100">{sub}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/quote" variant="primary" icon="bolt" className="text-base">
            Get My Free Quote
          </Button>
          <Button href={`tel:${site.phoneHref}`} variant="ghost" icon="phone" className="text-base">
            {site.phoneDisplay}
          </Button>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-navy-200">
          {site.badges.map((b) => (
            <span key={b} className="flex items-center gap-1.5">
              <Icon.check className="h-4 w-4 text-aqua-300" /> {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Project showcase — real install photos ────────────────────────── */
export function ProjectShowcase({
  title = "Recent North Jersey floors",
  sub = "Garage showpieces, commercial installs, metallic pours — a sample of what leaves our trailers every week.",
  count = 8,
  bg = false,
  cta = true,
}: {
  title?: string;
  sub?: string;
  count?: number;
  bg?: boolean;
  cta?: boolean;
}) {
  const items = galleryPhotos.slice(0, count);
  return (
    <Section className={bg ? "bg-navy-50/40" : ""}>
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>The Work</Eyebrow>
        <h2 className="mt-3 text-3xl font-extrabold text-navy-900 md:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-muted">{sub}</p>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {items.map((t) => (
          <figure key={t.src} className="card group overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={t.src}
                alt={t.caption}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {t.service && (
                <span className="absolute left-2.5 top-2.5 rounded-full bg-navy-900/70 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur">
                  {t.service}
                </span>
              )}
            </div>
            <figcaption className="px-3.5 py-3 text-sm font-semibold text-navy-700">{t.caption}</figcaption>
          </figure>
        ))}
      </div>
      {cta && (
        <div className="mt-10 text-center">
          <Button href="/gallery" variant="outline" icon="arrow">
            See the full gallery
          </Button>
        </div>
      )}
    </Section>
  );
}

/* ── Process strip — prep-first proof shots ────────────────────────── */
export function ProcessStrip({ items = actionPhotos.slice(0, 3) }: { items?: Tile[] }) {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Prep Is Everything</Eyebrow>
        <h2 className="mt-3 text-3xl font-extrabold text-navy-900 md:text-4xl">
          Why our floors don't peel
        </h2>
        <p className="mt-4 text-lg text-muted">
          Every floor gets diamond grinding, crack repair, and moisture testing before a drop
          of epoxy is mixed. It's the difference between a coating and a system.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((t) => (
          <figure key={t.src} className="card overflow-hidden">
            <img src={t.src} alt={t.caption} className="aspect-[4/3] w-full object-cover" loading="lazy" />
            <figcaption className="px-4 py-3 text-center text-sm font-semibold text-navy-700">
              {t.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ── Guarantee / value props row ───────────────────────────────────── */
export function ValueProps() {
  const props = [
    { icon: "spray" as const, t: "Diamond-grind prep, always", d: "We mechanically grind every slab to open, bare concrete — the step DIY kits and cut-rate installers skip, and the reason their floors peel." },
    { icon: "shield" as const, t: "Licensed & insured", d: "Jersey Elite Coatings is licensed and insured in New Jersey, with a certificate of insurance available before any project begins." },
    { icon: "pin" as const, t: "Truly local", d: "Based in Newark and installing across North Jersey since 2010. We know these slabs, this salt, and these winters." },
    { icon: "badge" as const, t: "Lifetime warranty", d: site.guarantee },
  ];
  return (
    <Section>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {props.map((p) => {
          const I = Icon[p.icon];
          return (
            <div key={p.t} className="card p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-aqua-400 to-aqua-600 text-white shadow-[var(--shadow-glow)]">
                <I className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-navy-800">{p.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.d}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
