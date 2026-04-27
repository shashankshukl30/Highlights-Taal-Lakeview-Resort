# Highlights Taal Lakeview Resort — website

Conversion-focused marketing site for Highlights Taal Lakeview Resort &
Events Place, Mataas na Kahoy, Batangas, Philippines.

Built by [Digiocular](https://digiocular.com).

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript** strict
- **Tailwind v4** (CSS-first design tokens in `src/app/globals.css`)
- **Framer Motion** + **Lenis** smooth-scroll
- **Embla Carousel** for galleries
- **Radix UI** for dialogs and accordions
- **Resend** for transactional email + audience newsletter
- **@vercel/analytics** + **@vercel/speed-insights**, plus optional **PostHog**
- Hosted on **Vercel**

## Local dev

```bash
npm install
npm run dev
```

The dev server boots on `http://localhost:3000` (or pass `--port 3030` if 3000 is busy).

## Production build

```bash
npm run build
npm start
```

## Environment variables

```
# Reservations
RESEND_API_KEY=re_xxx
ENQUIRY_TO_EMAIL=stay@highlightslakeview.com
ENQUIRY_FROM_EMAIL=Highlights Lakeview Website <onboarding@resend.dev>

# Newsletter
RESEND_AUDIENCE_ID=<uuid from Resend dashboard>

# Analytics (optional)
NEXT_PUBLIC_POSTHOG_KEY=phc_xxx
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

Without `RESEND_API_KEY`, the enquiry/newsletter routes return `{ ok: true, dev: true }` and log to the console — no submissions lost in dev.

## Routes

| Route | Notes |
|---|---|
| `/` | Homepage — hero, pillars, featured rooms, dining, testimonials, events, closing CTA |
| `/rooms` | Catalogue of all five rooms |
| `/rooms/[slug]` | Per-room detail page with gallery, booking card, FAQ, related rooms |
| `/about` | Brand story + the grounds + press strip |
| `/dining` | The kitchen + breakfast + dietary note |
| `/events` | Weddings, family reunions, corporate retreats |
| `/journal` | Editorial posts |
| `/journal/[slug]` | Individual post |
| `/contact` | Reservations + enquiry form |
| `/contact/sent` | Post-conversion thank-you (noindex) |
| `/policies/[slug]` | Reservations / cancellation / privacy |

## Content editing

Non-engineers edit copy in `src/content/`:

- `site.ts` — brand, contact, nav, testimonials, partners, social
- `rooms.ts` — five room records (and the data backing related-rooms)
- `journal.ts` — journal posts
- `faq.ts` — room-page FAQs

Components read from these and degrade gracefully if a field is empty.

## What's intentionally NOT in v1

- Real online booking + payments (Stripe / Stayflexi etc.)
- Multilingual switcher (EN only for v1)
- Logged-in customer dashboard
- AI itinerary builder
- CMS-backed content (TS files are deliberately the source of truth for v1)

These are masterplanned for Phase 2 — see PLAYBOOK §15.

## Pre-launch checklist

See `D:/DIGIOCULAR/PLAYBOOK.md` §14 for the full QA list. Before shipping:

- [ ] Replace logo placeholder (`public/logo.svg`, `public/logo-mark.svg`) with the real brand mark
- [ ] Swap Unsplash placeholders for real on-site photography
- [ ] Confirm phone, email, address with the client
- [ ] Confirm room names, descriptions, rates, inclusions
- [ ] Replace placeholder testimonials with verbatim Google + Facebook reviews
- [ ] Set up Resend domain + audience UUID
- [ ] Verify `next/image` remote hosts in `next.config.ts` cover any new image CDN
