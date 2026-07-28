# Jersey Elite Coatings — jerseyelitecoatings.com

North Jersey epoxy flooring marketing site. Next.js 15 (App Router) + Tailwind 4,
deployed on Vercel, leads via Resend.

## Stack
- `site.config.ts` — ALL business facts (phone, address, hours, badges, tracking IDs)
- `data/` — services, towns, FAQs, cost guides, testimonials, media registry
- `app/(site)/` — pages: home, services/[slug], areas/[town]（+ town×service combos）, cost/[slug], gallery, reviews, about, contact, quote, privacy
- `app/api/quote/route.ts` — lead intake → Resend email (+ optional CRM webhook)
- 301 redirects from the legacy static-site URLs live in `next.config.mjs`

## Env (Vercel)
- `RESEND_API_KEY` — required for lead emails
- `LEAD_TO_EMAIL` — defaults to site.email (info@jerseyelitecoatings.com)
- `LEAD_FROM_EMAIL` — set once jerseyelitecoatings.com is verified in Resend
- `LEAD_WEBHOOK_URL` — optional CRM/Zapier forward

## Dev
```
pnpm install
pnpm dev
```

## Notes
- No aggregateRating/Review JSON-LD on purpose — testimonial data isn't from a
  review platform. Re-enable in `lib/seo.ts` when the GBP has real reviews.
- Photos are optimized WebP in `public/photos` with keyword-rich filenames.
