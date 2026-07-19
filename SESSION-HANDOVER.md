# Session Handover — Foxtron Engineering

Context for the next session. Read this + `PROJECT_STATUS.md` before working.

> ⚠️ **Read first:** `docs/PHASE-1-BLUEPRINT.md` and `docs/IMAGE-INVENTORY.md`.

## What this is

A new website for Foxtron Engineering — precision sheet-metal fabrication in Centurion, replacing a
thin GoHighLevel brochure site. Primary conversion: **Request a Quote / RFQ** (+ click-to-call,
email). Built on BBETTR Website OS v2.0. **Stage: Phase 3 build complete and
browser-verified; awaiting client facts + extra imagery before deploy.**

## Hard rules (do not break)

- **No fabrication.** ISO 9001, specs, lead-times, stats stay framed from verified/client-stated
  facts only. Only the 2 genuine Google reviews appear. No rating schema until reviews are countable.
- **Images:** no stock/AI; client originals never overwritten. Everything via `<ImageSlot>` +
  `config/images.ts` (`pending`/`ready`). Missing → labeled placeholder stays.
- **Config-driven:** no copy/contact/spec hardcoded in components — all in `config/`.
- OS standing rules: GHL backend, Bbettr footer credit.

## Architecture (where things are)

- **Pages:** `app/**/page.tsx` · homepage composition in `views/home-view.tsx` (section order).
- **Sections:** `components/sections/*` · **Funnel:** `components/funnel/*` (header, footer, sticky-cta, rfq-form).
- **UI primitives:** `components/ui/*` (button, section-heading, reveal, count-up, image-slot, logo, json-ld).
- **Content:** `config/site-config.ts`, `services-config.ts`, `content-config.ts`, `faqs-config.ts`, `seo-config.ts`, `images.ts`.
- **SEO/schema:** `lib/metadata.ts`, `lib/schema.ts`; JSON-LD injected per page + LocalBusiness in `app/layout.tsx`.
- **RFQ transport:** `app/api/rfq/route.ts` → `GHL_WEBHOOK_URL` (server env; demo-mode if unset) → `/thank-you`.
- **Brand tokens:** `tailwind.config.ts` — steel `#1F2933` + accent `#EA580C`/`#C2410C` (await sign-off).

## Verify before pushing

```bash
npm run build && npm run lint && npx tsc --noEmit   # all currently pass
```
Preview: `foxtron-dev` (OS worktree launch.json). Mobile-check 360/390/768. Full Gate 3 in `PIPELINE/gates.md`.

## Recently done (this session)

- Reviewed all 124 factory + 7 team images (vision agents); assigned to sections in `config/images.ts`.
- Built the full site (Phase 3): 11 page types, sections, multi-step RFQ, SEO/schema, sitemap/robots.
- Verified in browser: desktop + mobile, no console errors, no 360px overflow, RFQ API returns ok.

## Next session — exact starting prompt

> Read `PROJECT_STATUS.md`. If Eloff has provided: (a) team identity mapping → set `team.anton/monica/karl`
> in `config/images.ts` to the right files + status "ready"; (b) real ISO certificate / specs / founding
> year / NAP / GHL webhook → update `config/*` and flip the relevant claims from framed to factual.
> Then: crop a square favicon from the logo's fox-plate, compose OG images, wire GTM/Ads conversion
> events, run Lighthouse (mobile ≥90) + axe (zero critical), deploy to Vercel from `main`, set
> `GHL_WEBHOOK_URL`, submit sitemap. "Done" = Gate 3 + Gate 4 in `PIPELINE/gates.md` pass.
