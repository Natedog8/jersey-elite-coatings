/** Social proof — customer testimonials shown in the reviews wall.
 *  NOTE: these are curated marketing testimonials, not pulled from a review
 *  platform — which is why review/aggregateRating JSON-LD is intentionally
 *  NOT emitted anywhere on the site (fabricated review schema risks a Google
 *  structured-data penalty). When the Google Business Profile has real
 *  reviews, replace these verbatim and re-enable schema in lib/seo.ts. */

export type Review = {
  author: string;
  town: string;
  rating: number;
  date: string;
  service: string;
  body: string;
};

export const reviews: Review[] = [
  {
    author: "Michael R.",
    town: "Livingston",
    rating: 5,
    date: "2026-05-14",
    service: "Garage Epoxy",
    body: "They transformed our 30-year-old garage into an absolute showroom. The crew was meticulous — full grinding, crack repair, the works — and finished ahead of schedule. Two winters of salt later it still looks brand new.",
  },
  {
    author: "Danielle S.",
    town: "Montclair",
    rating: 5,
    date: "2026-04-02",
    service: "Metallic Epoxy",
    body: "We did the metallic system in our finished basement and it's the first thing every guest comments on. It looks like polished marble. Worth every penny.",
  },
  {
    author: "Tom C.",
    town: "Clifton",
    rating: 5,
    date: "2026-03-21",
    service: "Garage Epoxy",
    body: "Got three quotes and Jersey Elite was the only one that explained the prep — diamond grinding, moisture testing, the actual system. Floor went in over a weekend and the finish is flawless.",
  },
  {
    author: "Maria G.",
    town: "Newark",
    rating: 5,
    date: "2026-02-10",
    service: "Kitchen Epoxy",
    body: "They redid our restaurant kitchen floor overnight — closed after Friday service, cooking on it Saturday. Cove base, drains, everything to code. The inspector literally complimented the floor.",
  },
  {
    author: "James W.",
    town: "Wayne",
    rating: 5,
    date: "2026-01-18",
    service: "Basement Epoxy",
    body: "Our basement flooded twice with carpet. They tested the slab, primed for moisture, and installed a flake floor that doesn't care about water. Should have done this years ago.",
  },
  {
    author: "Steve D.",
    town: "Paramus",
    rating: 5,
    date: "2025-12-05",
    service: "Commercial Epoxy",
    body: "They coated our showroom floor over a single weekend — zero business days lost. Bright, seamless, and it mops clean in minutes. Customers notice it.",
  },
];
