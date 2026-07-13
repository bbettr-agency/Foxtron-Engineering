# Session Handover — Foxtron Engineering

Context for the next session. Read this + `PROJECT_STATUS.md` before working.

> ⚠️ **Read first:** the Client Brief / blueprint (`docs/PHASE-1-BLUEPRINT.md`).

## What this is

A new website for Foxtron Engineering — precision sheet-metal fabrication & engineering in
Sunderland Ridge, Centurion (Gauteng). It replaces a thin 5-page GoHighLevel brochure site.
Primary conversion: **Request a Quote / Submit an RFQ** (+ click-to-call, email). Built on
BBETTR Website OS v2.0. **Stage: Phase 1 approved; image system built; PAUSED for client images
before the Phase 3 build.**

## Hard rules (do not break)

- **No fabrication.** ISO 9001, stats, specs, reviews, lead-times must not appear as fact until
  the client confirms them. Everything tagged `[assumed]` in the blueprint is gated out of copy.
- **Images:** no stock / Unsplash / AI / invented photography. Never overwrite a client asset.
  All image areas use `<ImageSlot>` + `config/images.ts` — no hardcoded paths in components.
- **Signal B2B** throughout (ICP language, "for business and trade") to deflect private/hobby jobs.
- OS standing rules (SYSTEM/00): config-driven copy, Bbettr footer credit, GHL backend.

## Architecture (where things are)

- **Image manifest + status:** `config/images.ts` (single source of truth; `pending`/`ready`).
- **Image slot primitive:** `components/ui/image-slot.tsx`.
- **Image spec/docs:** `public/images/README.md` (filenames, dimensions, ratios, formats, caps).
- **Research/blueprint:** `docs/PHASE-1-BLUEPRINT.md`.
- **Not yet created (Phase 3):** `app/`, `views/`, `components/sections|funnel`, `config/site-config.ts`,
  `config/seo-config.ts`, `config/services-config.ts`, `lib/metadata.ts`, `tailwind.config.ts`.

## Verify before pushing (Phase 3 onward)

```bash
npm run build && npm run lint && npx tsc --noEmit
```
Mobile-check at 360/390/768. Gate 3 checklist in `PIPELINE/gates.md` (OS repo) before launch talk.

## Recently done (this session)

- Ran Phase 1 research (site audit, competitor teardown, SEO/local, B2B buyer psychology) → blueprint.
- Eloff approved the blueprint (Gate 1) and confirmed the permanent repo.
- Built the image system: folder tree, master README manifest, `config/images.ts`, `ImageSlot` primitive.
- Added README, PROJECT_STATUS, this handover.

## Next session — exact starting prompt

> Read `docs/PHASE-1-BLUEPRINT.md`, `PROJECT_STATUS.md`, and `config/images.ts`. If Eloff has
> uploaded real images, flip their `status` to `"ready"` in `config/images.ts`. Then begin **Phase 3**:
> confirm the client-blocked items (ISO, founding year, specs, lead-times, NAP, GHL webhook, final
> service list), scaffold the Next.js 14 app on the pinned OS stack, derive brand tokens from the logo
> (Gate 2), and build pages per the blueprint sitemap — Home first. "Done" for each page = build + lint
> + tsc clean, mobile QA at 360/390/768, and every section answering a named objection from the brief.
> Do not publish any `[assumed]` claim as fact.
