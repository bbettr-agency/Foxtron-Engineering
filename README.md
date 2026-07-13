# Foxtron Engineering — Website

Precision sheet-metal fabrication & engineering website for **Foxtron Engineering**
(Sunderland Ridge, Centurion, Gauteng). Built on the **BBETTR Website OS v2.0**.

Primary conversion: **Request a Quote / Submit an RFQ** (+ click-to-call, email).

## Status

**Phase 2 — Image system in place. Awaiting real client images before the full build (Phase 3).**

- ✅ Phase 1 — Research & blueprint approved → [`docs/PHASE-1-BLUEPRINT.md`](docs/PHASE-1-BLUEPRINT.md)
- ✅ Image system — folders, manifest, centralized config, labeled slots
- ⏳ Client to upload real photography (see below)
- ⏳ Phase 3 — full site build (after images)

## Image system

Every image is declared in [`config/images.ts`](config/images.ts) and rendered through
[`components/ui/image-slot.tsx`](components/ui/image-slot.tsx). Until real files are
supplied, each area shows a labeled, dimension-reserved placeholder (no broken images, no CLS).

**To add real images:** follow [`public/images/README.md`](public/images/README.md) — drop the
file into the matching folder using the exact filename, then set that entry's `status` to
`"ready"` in `config/images.ts`.

> Rules: no stock / Unsplash / AI images / invented photography. Client assets are never
> overwritten once uploaded.

## Stack (per OS SYSTEM/02, wired in Phase 3)

Next.js 14 · React 18 · TypeScript (strict) · Tailwind · Framer Motion · `next/image` ·
GoHighLevel backend (RFQ → webhook) · Vercel (auto-deploy from `main`).

## Repo

`github.com/bbettr-agency/Foxtron-Engineering` · **OS version:** v2.0.0-phase1

See [`PROJECT_STATUS.md`](PROJECT_STATUS.md) and [`SESSION-HANDOVER.md`](SESSION-HANDOVER.md).

---

Website Designed & Developed by [Bbettr Agency](https://www.bbettragency.com)
