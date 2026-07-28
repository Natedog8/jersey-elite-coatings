import { site } from "@/site.config";
import { towns } from "@/data/towns";

const ORG_ID = `${site.url}/#business`;

/** HowTo node — still useful for AI extraction even post rich-result retirement. */
export function howToSchema(opts: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

/** Speakable — flags the answer blocks for voice assistants / AEO. */
export function speakableSchema(cssSelectors: string[] = [".speakable"]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: { "@type": "SpeakableSpecification", cssSelector: cssSelectors },
  };
}

/** Core LocalBusiness / HomeAndConstructionBusiness node — emit once site-wide.
 *  NOTE: no aggregateRating / Review nodes on purpose — the testimonials in
 *  data/reviews.ts are curated marketing copy, and fabricated review schema is
 *  a Google structured-data penalty risk. Re-enable only with real GBP data. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    telephone: `+${site.phoneHref.replace(/^\+/, "")}`,
    email: site.email,
    image: `${site.url}/og-default.jpg`,
    logo: `${site.url}/logo.png`,
    priceRange: "$$",
    slogan: site.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.lat,
      longitude: site.address.lng,
    },
    areaServed: towns.map((t) => ({
      "@type": "City",
      name: `${t.name}, NJ`,
    })),
    openingHoursSpecification: site.hours
      .filter((h) => h.open !== "Closed")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: h.open,
        closes: h.close,
      })),
    sameAs: [site.social.facebook, site.social.instagram, site.gbpUrl].filter(Boolean),
  };
}

/** WebSite node with SearchAction — entity graph + sitelinks search box. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${site.url}/areas?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  areaName?: string;
  /** "City" for towns, "AdministrativeArea" for counties. Defaults to City. */
  areaType?: "City" | "AdministrativeArea";
  image?: string;
  /** entry price in USD per sq ft — emitted as an Offer price floor */
  priceFrom?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    ...(opts.image ? { image: opts.image.startsWith("http") ? opts.image : `${site.url}${opts.image}` } : {}),
    provider: { "@type": "LocalBusiness", "@id": ORG_ID, name: site.name },
    areaServed: opts.areaName
      ? { "@type": opts.areaType ?? "City", name: `${opts.areaName}, NJ` }
      : { "@type": "AdministrativeArea", name: "North Jersey, NJ" },
    ...(opts.priceFrom
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: opts.priceFrom,
              priceCurrency: "USD",
              unitText: "square foot",
              valueAddedTaxIncluded: false,
            },
            availableAtOrFrom: { "@id": ORG_ID },
          },
        }
      : {}),
  };
}

/** Catalog of everything we sell, hung off the business node. Helps search
 *  engines and AI assistants resolve "what does this company actually do". */
export function offerCatalogSchema(
  items: { name: string; description: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": ORG_ID,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${site.name} — Epoxy Flooring Services`,
      itemListElement: items.map((it, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: it.name,
          description: it.description,
          url: `${site.url}${it.url}`,
        },
      })),
    },
  };
}

/** Article node for the buyer's guides — gives the guide hub real entity
 *  weight and gives AI answer engines an author/publisher to attribute. */
export function articleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    image: `${site.url}${opts.image ?? "/og-default.jpg"}`,
    author: { "@type": "Organization", "@id": ORG_ID, name: site.name },
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
    isAccessibleForFree: true,
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.url}`,
    })),
  };
}

/** Render-ready <script> JSON. Use in a server component. */
export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
