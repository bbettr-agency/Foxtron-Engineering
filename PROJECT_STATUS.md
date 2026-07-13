# Project Status — Foxtron Engineering

**Last updated:** 2026-07-13
**Owner:** Bbettr Agency
**Client:** Foxtron Engineering (Sunderland Ridge, Centurion, Gauteng)
**Type:** Full website (redesign of current GoHighLevel brochure site) · Engineering / metal fabrication
**Repo:** `bbettr-agency/Foxtron-Engineering` · branch `main` · **OS version:** v2.0.0-phase1
**Playbook:** none yet (no engineering-fabrication playbook in OS) — brief in `docs/PHASE-1-BLUEPRINT.md`
**Live:** not deployed · Preview port: 3000 (Phase 3)

---

## ✅ Complete

- [x] Phase 1 — Research & blueprint (audit, competitors, SEO/local, buyer psychology). Approved by Eloff 2026-07-13. → `docs/PHASE-1-BLUEPRINT.md`
- [x] Image system — folder tree, `public/images/README.md` manifest, centralized `config/images.ts`, `components/ui/image-slot.tsx` labeled-slot primitive.

## 🔨 In progress

- [ ] (paused) Awaiting real client images before Phase 3 build.

## ⏳ Pending

- [ ] Phase 3 — scaffold Next.js app (pinned OS stack), brand tokens, build pages/sections per blueprint sitemap.
- [ ] Multi-step RFQ form → GoHighLevel webhook → /thank-you + conversion tracking.
- [ ] Technical SEO (schema, sitemap, robots, metadata), CWV, a11y, mobile QA.
- [ ] 301 map for legacy `index.php` URLs.

## 🔑 Client-blocked (waiting on client)

- [ ] **Real photography** — all images per `public/images/README.md` (hero, factory, machinery, services, projects, industries, team, certifications, gallery).
- [ ] **ISO 9001 certificate** — actual certificate (body, number, scope, expiry). Claim cannot appear as fact until supplied.
- [ ] **Founding year** — confirm "1992" vs legacy "29 years".
- [ ] **Capability specs** — confirm laser bed size + per-material thickness ranges before publishing.
- [ ] **Lead-time bands** — real turnaround per service.
- [ ] **Canonical NAP** — exact street/postcode/email; www vs non-www decision.
- [ ] **GoHighLevel** — inbound webhook URL, workflow, lead routing, file-upload handling.
- [ ] **Final service list** (Home vs Services page currently disagree).
- [ ] **Reviews / client logos** — consented, real only.
- [ ] Access: domain, Vercel, GBP, analytics, Google Ads.

## Gate results

| Gate | Status | Date | Notes |
|---|---|---|---|
| 1 Research | ✅ passed | 2026-07-13 | Brief approved; claims tagged verified/client-stated/assumed |
| 2 Pre-build | pending | | brand tokens + section plan next |
| 3 Verify | | | Lighthouse: __ / CWV: LCP __ CLS __ INP __ |
| 4 Launch | | | |

## Known notes / decisions

- **No fabricated proof** (OS standing rule): ISO, stats, reviews, specs stay out of copy until `verified`. All `[assumed]` blueprint items are gated.
- **Positioning:** responsive precision partner, prototype→production — between commodity cutters and heavy structural-steel shops. Signals B2B to deflect low-value private jobs.
- **Local SEO priority:** win/hold "laser cutting Centurion" (CPC currently ranks #1); MNF Steel is a same-suburb rival.
- **Image status** is tracked in `config/images.ts` (`pending`/`ready`) — all currently `pending`.
