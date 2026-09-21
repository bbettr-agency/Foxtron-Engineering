# Project Status — Foxtron Engineering

**Last updated:** 2026-07-13
**Owner:** Bbettr Agency
**Client:** Foxtron Engineering (Sunderland Ridge, Centurion, Gauteng)
**Type:** Full website (redesign of current GoHighLevel brochure site) · Engineering / metal fabrication
**Repo:** `bbettr-agency/Foxtron-Engineering` · branch `main` · **OS version:** v2.0.0-phase1
**Live:** not deployed · Local preview: `npm run dev` (port 3000)

---

## ✅ Complete

- [x] Phase 1 — Research & blueprint. Approved 2026-07-13. → `docs/PHASE-1-BLUEPRINT.md`
- [x] Image system — folders, README manifest, `config/images.ts`, `ImageSlot` primitive.
- [x] Image assignment — all 124 factory + 7 team images reviewed; strongest assigned per slot. → `docs/IMAGE-INVENTORY.md`
- [x] Phase 3 build — Next.js 14 app on pinned OS stack. Build + lint + typecheck all pass; first-load JS ~137KB.
  - Brand tokens (steel/charcoal + industrial-orange accent) in `tailwind.config.ts`
  - Config-driven content: site, services, content, faqs, seo configs
  - Pages: Home, Services hub, Service spokes (laser-cutting, cnc-bending, welding-assembly, cnc-punching), Gallery, About, Quote, Contact, FAQ, Thank-you, 404
  - Multi-step RFQ form → `/api/rfq` → GHL webhook (demo-mode fallback) → `/thank-you`
  - Header + mobile nav, footer, sticky mobile CTA bar (Call/Request a Quote)
  - SEO: per-page metadata + canonical + OG, `sitemap.ts`, `robots.ts`, JSON-LD (LocalBusiness/Service/FAQPage/Breadcrumb)
  - Verified in browser: desktop + mobile (no horizontal scroll at 360px), no console errors, RFQ path returns ok

## 🔨 In progress

- [ ] Awaiting client inputs (below) to finalize copy/proof and deploy.

## ⏳ Pending

- [ ] Favicon + white logo variant (crop the fox-plate mark from the logo for a square icon)
- [ ] OG/social images (compose from logo + workshop photo)
- [ ] Google Ads / GTM conversion tracking wiring (event hooks present via `data-analytics`)
- [ ] Deploy to Vercel from `main`; set `GHL_WEBHOOK_URL`; submit sitemap to Search Console
- [ ] 301 map for legacy `index.php` URLs (redesign)

## 🔑 Client-blocked (waiting on client)

- [ ] **Team identity mapping** — which of `team/Untitled-231xx.jpg` is Anton Lubbe / Monica Kruger / Karl Lubbe (leader cards show placeholders until mapped).
- [ ] **Real ISO 9001 certificate** (body, number, scope, expiry) — claim currently framed as an "approach"; certificate slot is a placeholder.
- [ ] **Founding year** confirm (1992 vs legacy "29 years").
- [ ] **Capability specs** confirm (laser bed + material thicknesses currently [client-stated] from old site).
- [ ] **Lead-time bands** + RFQ response SLA confirm.
- [ ] **Canonical NAP** (street/postcode/email) + www vs non-www decision.
- [ ] **GoHighLevel** inbound webhook URL + workflow + file-upload handling (form sends file NAME only until storage wired).
- [ ] **Extra imagery**: CNC punching, CNC machining, factory exterior, industry-specific shots (placeholders remain).
- [ ] **Social profile URLs** (Facebook/Instagram/LinkedIn).
- [ ] Access: domain, Vercel, GBP, analytics, Google Ads.

## Gate results

| Gate | Status | Date | Notes |
|---|---|---|---|
| 1 Research | ✅ passed | 2026-07-13 | Brief approved; claims tagged |
| 2 Pre-build | ✅ passed | 2026-07-13 | Sitemap, tokens, section plan all mapped to blueprint |
| 3 Verify | 🟡 partial | 2026-07-13 | build/lint/tsc pass; browser-verified desktop+mobile. TODO: Lighthouse/axe run, real content, favicon/OG |
| 4 Launch | ⏳ | | pending deploy + client facts |

## Motion / craft pass (2026-09-21)

- Elevated from clean-but-templated to a custom, "alive" feel: parallax hero with
  word-stagger headline + capability ticker + scroll cue; interactive capabilities
  spotlight (hover swaps the large image) with mobile card fallback; drawn stat
  underlines; process connector that draws in; laser-reveal image wipes; brushed-steel
  texture + rivet motif on dark panels; cut-line eyebrows.
- **New runtime dep — `lenis` (~4KB, justified):** premium inertial smooth scroll;
  fully disabled under `prefers-reduced-motion`. Reason logged here per OS discipline.
- **Bundle discipline:** all motion components use Framer's `LazyMotion` + `m.*` with the
  `domAnimation` feature set → homepage first-load JS **132KB** (was 156KB before LazyMotion;
  under the 150KB budget). All routes ≤ 132KB.
- Verified on the **production** build (`next start`): zero console errors, hover-swap works,
  no 360/390px overflow, mobile spotlight→cards fallback correct. (Dev-mode showed transient
  chunk-404/HMR noise after adding Lenis — absent in production.)

## Known notes / decisions

- **No fabrication:** ISO/specs/lead-times/stats framed from verified/client-stated facts only; assumed items gated. Only the 2 genuine Google reviews used. No AggregateRating schema (no countable reviews yet).
- **Brand tokens** (steel #1F2933 + accent orange #EA580C/#C2410C) await Eloff's explicit sign-off per SYSTEM/01.
- **RFQ file upload** currently captures filename only — real drawing transport (storage + URL in webhook) is a follow-up.
- **Images redistributed via config** — client originals in `public/images/factory|team` are untouched; `config/images.ts` points at them.
- Local preview served via the OS worktree `.claude/launch.json` (`foxtron-dev`) — not committed to this repo.
