# Project Status — Foxtron Engineering

**Last updated:** 2026-10-05
**Owner:** Bbettr Agency
**Client:** Foxtron Engineering (Pty) Ltd (Sunderland Ridge, Centurion, Gauteng)
**Type:** Full website (redesign) · Engineering / metal fabrication
**Repo:** `bbettr-agency/Foxtron-Engineering` · branch `main` · **OS version:** v2.0.0-phase1
**Live:** not deployed · Local preview: `npm run dev`

---

## Status: PRE-LAUNCH QA COMPLETE — domain-ready except the GHL webhook

The site passed a full pre-launch QA pass (visual, mobile, images, SEO, a11y, performance,
links, console). Build + lint + typecheck clean. The ONE remaining launch dependency is the
GoHighLevel inbound webhook (RFQ currently runs in demo mode).

## ✅ Complete

- Phase 1 research & blueprint → `docs/PHASE-1-BLUEPRINT.md`
- Full build: Home, Services hub + 4 service spokes, Gallery, About, Quote, Contact, FAQ, Thank-you, 404
- Custom motion system (Lenis smooth scroll, parallax hero, interactive capabilities spotlight,
  laser-reveal, brushed-steel/rivet motif) — all `prefers-reduced-motion` safe
- Centered hero + page-heroes; lightened typography (Sora 400/500/600, no weight > 600)
- **ISO 9001:2015 Quality section** — real AfriCert assurance mark + certificate (cert 2024042201,
  valid to 21 Apr 2027, SANAS/IAF accredited) + downloadable PDF. [verified from supplied cert]
- **Images:** every visible slot filled with authentic Foxtron photography; CNC punching + machining
  use closest honest process photos; team shown unnamed (no identity guessing); OG images + favicon
  (fox-plate) added. **No visible placeholders. No broken images.**
- SA en-dash copy throughout; verified facts only (legal name, reg, NAP from the ISO certificate)

## QA results (2026-10-05)

| Area | Result |
|---|---|
| Build / lint / typecheck | ✅ pass |
| Lighthouse (home, mobile) | A11y **100** · Best-practices **100** · SEO **100** · Perf **99** (devtools throttle, LCP 2.0s); 87–88 under Lighthouse's pessimistic simulated model |
| Pending placeholders rendered | **0** on every page |
| Broken internal links | **0** · broken images **0** |
| 1 H1 / canonical / OG per page | ✅ all pages |
| Responsive | ✅ 360 / 390 / 768 / 1440 — no overflow |
| RFQ form | ✅ multi-step + validation + submit → /thank-you. **Demo mode (no webhook).** |
| WhatsApp in production | **none** |
| Industries in production | **none** (replaced by Gallery) |

## 🔑 Before go-live / client inputs

- [ ] **GoHighLevel inbound webhook URL** → set `GHL_WEBHOOK_URL` in Vercel (RFQ is demo-mode until then).
      File uploads currently capture the file NAME only; binary transfer (GHL media / storage) is a follow-up.
- [ ] Deploy to Vercel from `main`; connect domain; submit sitemap to Search Console.
- [ ] `www` vs non-www canonical decision (currently `https://www.foxtronengineering.co.za`).
- [ ] Confirm "since 1992" heritage (client's own published claim; ISO reg is 2020/543748/07).
- [ ] Social profile URLs (Facebook/Instagram/LinkedIn) — footer slots ready, currently hidden.
- [ ] Optional: team member names (portraits shown unnamed until confirmed); exact GBP map pin.

## Notes / decisions

- 4 config image slots remain `pending` (logo-white, square-icon-svg, mobile-hero, factory-exterior)
  — none are rendered anywhere, so there are no visible placeholders.
- No fabricated facts; ISO/NAP/legal-name now verified from the supplied certificate.
- Brand tokens (steel + industrial orange) still await Eloff's explicit sign-off per SYSTEM/01.
