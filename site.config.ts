/**
 * Jersey Elite Coatings — central business configuration.
 *
 * ▸ EVERYTHING the client needs to swap lives here: phone, address, hours,
 *   trust badges, social links, Google Business Profile URL, tracking IDs.
 *   Change it once and it propagates across every page + all schema markup.
 */

export const site = {
  name: "Jersey Elite Coatings",
  shortName: "Jersey Elite",
  legalName: "Jersey Elite Group LLC",
  tagline: "North Jersey's Premier Epoxy Flooring & Concrete Coatings",
  domain: "www.jerseyelitecoatings.com",
  url: "https://www.jerseyelitecoatings.com",

  // ── Contact ──────────────────────────────────────────────────────────
  phoneDisplay: "(973) 378-1192",
  phoneHref: "+19733781192", // E.164, no spaces
  email: "info@jerseyelitecoatings.com",

  // ── Location / service area ──────────────────────────────────────────
  address: {
    street: "8 Lombardy Street, Suite 249",
    city: "Newark",
    region: "NJ",
    regionName: "New Jersey",
    postalCode: "07102",
    county: "North Jersey",
    lat: 40.735657,
    lng: -74.172367,
  },

  hours: [
    { day: "Monday", open: "08:00", close: "18:00" },
    { day: "Tuesday", open: "08:00", close: "18:00" },
    { day: "Wednesday", open: "08:00", close: "18:00" },
    { day: "Thursday", open: "08:00", close: "18:00" },
    { day: "Friday", open: "08:00", close: "18:00" },
    { day: "Saturday", open: "09:00", close: "16:00" },
    { day: "Sunday", open: "Closed", close: "Closed" },
  ],

  // ── Reputation (surfaced in trust bars — no fabricated schema counts) ─
  rating: 5.0,
  yearsLine: "Serving New Jersey since 2010",
  jobsCompleted: "10,000+",

  // ── Trust / credentials ─────────────────────────────────────────────
  licensed: true,
  insured: true,
  licenseLine: "Licensed & Insured · New Jersey",
  /** The warranty promise — the anchor trust claim across the site. */
  guarantee:
    "Every floor we install is backed by our lifetime warranty against peeling and delamination. If your coating ever fails from adhesion loss, we come back and make it right.",
  badges: [
    "Licensed & Insured",
    "Lifetime Warranty",
    "Free On-Site Quotes",
    "10,000+ Projects Completed",
  ],

  // ── Conversion offer (shown on hero + CTA bands) ─────────────────────
  offer: {
    headline: "Free Color & Flake Consultation",
    subtext: "Included with every on-site quote — see real samples on your floor.",
  },

  // ── Links ────────────────────────────────────────────────────────────
  gbpUrl: "", // TODO: REAL — Google Business Profile URL
  bookingUrl: "/quote",
  social: {
    facebook: "", // TODO: REAL
    instagram: "", // TODO: REAL
  },

  // ── Analytics / tracking (PPC + LSA) ─────────────────────────────────
  tracking: {
    gtmId: "", // TODO: REAL  e.g. "GTM-XXXXXX"
    googleAdsId: "", // TODO: REAL  e.g. "AW-XXXXXXXXX"
    callRailSwap: false,
  },
} as const;

export type Site = typeof site;
