# FOXTRON ENGINEERING — PHASE 1 RESEARCH & BLUEPRINT

**Client:** Foxtron Engineering · **Date:** 2026-07-13 · **Compiled by:** Bbettr Agency (Website OS v2.0)
**Status:** DRAFT — awaiting Eloff approval (Gate 1). No design or code until approved.
**Marking rule:** every factual claim tagged `[verified]` (live site/SERP), `[client-stated]` (asserted, unproven), `[assumed]` (inference — may NOT appear in site copy until confirmed).
**Target repo:** github.com/bbettr-agency/Foxtron-Engineering · **Backend:** GoHighLevel

---

## 1. CURRENT WEBSITE AUDIT

Current site is a 5-page GoHighLevel/LeadConnector brochure site. Solid basic facts, thin proof, weak SEO.

**Pages:** Home, About Us, Services, Contact, ISO 9001. Flat nav, no service sub-pages, no blog, no projects.
**Verified facts:** Address 46 Rowan Nook, Sunderland Ridge, Centurion, Gauteng 0157 · Tel 012 666 9933 · info@foxtronengineering.co.za · Hours Mon–Thu 09:00–17:00, Fri 09:00–15:00 · "since 1992" · Team: Anton Lubbe (Director & Shareholder), Monica Kruger (MD), Karl Lubbe (Production Director).

**Critical weaknesses:**
1. **ISO 9001 page proves nothing** — no certificate, certifying body, number, scope, or expiry. Central trust claim is hollow. [verified]
2. **Zero portfolio** — `/projects` and `/gallery` resolve to homepage; no galleries, case studies, client logos, or machinery list. [verified]
3. **Conversion friction** — no form on Home or Services; RFQ form is 5 generic fields (Name/Email/Phone/Service/Details) with **no drawing upload**, no quantity/material/deadline. [verified]
4. **SEO fundamentals missing** — no meta descriptions, no schema, no OpenGraph, no image alt text, no robots.txt. Titles are decent. [verified]
5. **NAP inconsistencies** — email domain (foxtronengineering vs foxgroup), street ("Rowan Nook" vs "Rowan Place" vs "Rowan Noek"), postcode (0157 vs 0037), years (site "1992" vs legacy "29 years") differ across live site, a legacy `index.php` site still indexed, and directories. [verified]
6. **Service naming inconsistent** between Home and Services page. [verified]
7. **No WhatsApp** contact path — unusual for SA B2B. [verified]

---

## 2. BUSINESS-POSITIONING SUMMARY

- **What they do (plain):** Precision sheet-metal fabrication and engineering — laser cutting, CNC bending, CNC punching, CNC machining, welding & assembly, roll work — from one-off prototypes to full production runs, for businesses. [verified]
- **Location reality:** One real premises in Sunderland Ridge, Centurion; serves Gauteng (Pretoria/Midrand/Johannesburg). Hybrid location + service-area business. [verified]
- **Published capability (needs re-confirmation):** laser bed up to 3000×1500mm; mild steel 0.6–22mm, stainless 0.5–12mm, aluminium 0.9–10mm, brass 0.3–10mm, copper 0.4–6mm. [client-stated — verify before publishing]
- **Heritage:** trading since 1992; grew from small operation to fabrication partner handling low-volume prototypes and high-volume runs. [client-stated]
- **Positioning sentence (recommended):** *"Unlike commodity profile-cutters and heavy structural-steel shops, Foxtron is the responsive precision partner that takes you from prototype to production run — fast quotes, clear lead times, ISO-backed quality."*

---

## 3. IDEAL-CLIENT ANALYSIS

Industrial buying is a committee. Four recurring personas:

| Persona | Needs from site | Trigger | Channel |
|---|---|---|---|
| **Design/Project Engineer** (initiator) | Can you make my part — material, tolerance, geometry, volume? | New design/prototype; part failed | RFQ + drawing upload |
| **Procurement/Buyer** | Reliability, lead time, capacity, continuity, pricing process | Supplier failed; cost-down; dual-sourcing | RFQ; compares 2–4 suppliers |
| **Maintenance/MRO** | Turnaround, one-off from a sample | Machine broke; line down | **Click-to-call** (urgent) |
| **Small OEM/Contractor** | Will you scale my volume; partner signals | Launching/scaling product | RFQ + relationship |

**Arrival state:** problem-aware, often drawing-or-broken-part in hand, mid-comparison, time-pressured, screening fast. Site's #1 job in 5 seconds: *"Can they make my thing, and are they a serious business?"*

---

## 4. CUSTOMER OBJECTIONS (ranked — each becomes on-page content)

| # | Objection (buyer words) | Answer strategy | Where on page |
|---|---|---|---|
| 1 | Can they make *my* part? | Per-process capability: materials, thickness/size envelope, tolerance, finishes, geometry | Service pages |
| 2 | Will they take my job / am I too small? | "From one-off prototypes & single replacement parts to full production runs — for businesses and trade" | Hero sub, Services, RFQ |
| 3 | Can I trust their quality/tolerances? | Tolerances + QA/inspection process + ISO 9001 shown *near* capabilities | Service pages, Quality |
| 4 | How fast? | Honest lead-time bands (real Foxtron numbers) | Service pages, RFQ, How-we-work |
| 5 | Are they reliable / here in 3 years? | Factory photos, years, named team, address, landline, client logos | About, Trust bar, footer |
| 6 | Do they work with businesses like mine? | Industries-served with sector proof | Industries section/pages |
| 7 | What materials do they handle? | Explicit materials + thickness/grade list | Service pages |
| 8 | What will it cost? | Explain quoting process + price drivers (not a price list) | Quote page, FAQ |
| 9 | Capacity for my volume? | Machinery list + counts + shop size + throughput | Machinery/Capacity |
| 10 | Certified/compliant? | ISO cert shown prominently (real certificate) | Quality page, near RFQ |

**Proof preferences ranked:** capability specs → machinery list → real factory/part photos → capacity numbers → ISO/certs → industries served → tolerances/QA → lead times → logos/case studies → materials list.

---

## 5. COMPETITOR FINDINGS

| Competitor | Location | Positioning | Strength | Weakness |
|---|---|---|---|---|
| **Centurion Profile Cutting** | Centurion | "Laser Cutting Centurion" | **Ranks #1 on the home-turf term** | Thin content, unreliable site, cutting-only, no proof |
| **MNF Steel** | Sunderland Ridge | Steel fabrication | **Same suburb rival** | (general steelworks) |
| **Kare Products** | Pretoria/JHB | "Our stainless reputation" | 1971 heritage, broadest capability + robotic weld/powder coat | Dated ~2009 site, no specs, no RFQ UX |
| **Pegasus Steel** | Germiston/CT | "Precision steel at scale, on time" | **Benchmark site**: 1,250t/mo, ±0.1mm, ISO+B-BBEE, downloadable certs | Heavy/structural/mining framing; not Centurion-local |
| **Laser Options** | Johannesburg | Enclosures/mechatronics niche | Clear vertical specialisation | No certs, basic RFQ |
| **Genex Steel** | Boksburg | "Prototyping to high-volume" | **RFQ exemplar**: accepted formats (DXF/DWG/STEP/PDF), 70MB upload, FAQ | Cutting-led, no galleries |
| **Rhinoworks** | Edenvale | In-house laser + router | Tabulated capability specs | Email-only RFQ, no certs |

**Table stakes Foxtron MUST match:** win/hold "laser cutting Centurion"; published capability specs; ISO shown as a real cert; per-service pages; clear RFQ with accepted file formats; stated turnaround; displayed founding year.

**Gap map (Foxtron's openings — nobody in Gauteng does these well):**
1. **A real drawing-upload RFQ** (drag DXF/STEP → callback in X hrs). Every rival is "email us" or a bare form.
2. **Project galleries / case studies / client logos** — the biggest untapped trust + SEO surface.
3. **Dedicated industry pages** (electrical enclosures, automotive brackets, OEM sub-assembly).
4. **A content layer** (material guides, DFM/DXF prep, laser-vs-plasma) for cheap long-tail wins.
5. **Lead-time + "prototype-friendly" positioning** — the space between Pegasus's "at scale" and commodity cutters.

---

## 6. SEO OPPORTUNITIES (keyword clusters → pages)

| Cluster | Primary terms | Intent | Priority | Page |
|---|---|---|---|---|
| A. Core service | sheet metal fabrication, laser cutting services, custom metal fabrication | Commercial | High | Home + Services hub |
| B. **Local** | laser cutting Centurion, steel fabrication Centurion, sheet metal fabrication Pretoria/Gauteng | Local commercial | **Highest ROI** | Home + service pages (geo) + GBP |
| C. Service-specific | laser cutting, CNC bending, CNC punching, CNC machining, welding, profile cutting, custom brackets | Commercial | High/Med | Individual service pages |
| D. **Procurement** | request a quote laser cutting, RFQ sheet metal, upload DXF for quote, laser cutting cost | Transactional | High | /quote |
| E. Industry | fabrication for OEM/automotive/electrical/construction | Commercial | Med | /industries (Phase 2) |

*"Profile cutting" = secondary term on the laser page, not its own page. No exact volumes pulled — validate with Keyword Planner/DataForSEO before finalising.*

---

## 7. LOCAL SEO STRATEGY

- **GBP first (highest ROI, 4–8 wks):** primary category **Metal fabricator**; secondaries Laser cutting service / Welder / Manufacturer / Machine shop. Geo-tagged real photos, services, service areas (Centurion, Pretoria, Midrand, JHB, Gauteng), messaging on.
- **Fix NAP first (blocker):** lock one canonical format — *Foxtron Engineering, 46 Rowan Nook, Sunderland Ridge, Centurion, 0157 · 012 666 9933* — replicate byte-for-byte everywhere; kill/redirect the legacy `index.php` site.
- **Citations (priority):** GBP → Bing Places → Apple Maps → Facebook → Brabys → SAYellow/Yellosa → Cylex SA → Hotfrog → ShowMe → Snupit → nichemarket.
- **Reviews:** systematic Google-review requests after each B2B job (WhatsApp/email link), steady cadence, respond to all — out-review CPC/MNF/JRD locally.
- **No thin suburb doorway pages** — one strong local entity + service-area copy; build area pages later only if genuinely unique.

---

## 8. RECOMMENDED SITEMAP

```
/                          Home — brand + core + local + primary CTA
/services                  Services hub (links every spoke)
  /services/laser-cutting        [HIGH] (+ "profile cutting" secondary)
  /services/cnc-bending          [HIGH]
  /services/cnc-punching         [MED]
  /services/cnc-machining        [MED]
  /services/welding-assembly     [MED]
  /services/custom-components     [MED] (prototype → production runs)
  (/services/rolling — optional; else a section on the hub)
/industries                Phase 2 hub — build spokes only with real project depth
/about                     1992 origin, team, ISO, machinery, capacity — E-E-A-T
/quote                     RFQ + drawing/DXF upload — bottom-funnel conversion
/contact                   NAP, map, hours, LocalBusiness schema
/faq                       FAQPage schema (materials, lead times, MOQ, file formats)
/thank-you                 conversion confirmation (tracking)
```

Rolling and standalone "assembly" fold into hub/welding (thin alone). Industries = Phase 2, evidence-gated.

---

## 9. HOMEPAGE CONVERSION JOURNEY

1. **Hero** — what/who/why + dual CTA. Headline names processes + audience; sub-line covers "prototype to production, in-house laser/bending/welding/machining, for business & trade." Primary CTA **"Request a Quote / Upload Your Drawing"**; secondary **click-to-call** in header/hero. Real shop-floor image (blank slot until supplied).
2. **Trust bar** — years since 1992, ISO 9001, industries, "in-house."
3. **Capabilities by process** — cards → service pages, each teasing materials/envelope/tolerance.
4. **Machinery & capacity** — list + counts + photos + numbers.
5. **Industries served** — who we work with.
6. **Quality & ISO** — real certificate + QA process.
7. **Proof** — project gallery / case studies / logos / testimonials (only real).
8. **How we quote** — RFQ process + lead-time bands + accepted file formats + response SLA.
9. **RFQ form + contact block** — phone, email, address, map, hours.
10. **Final CTA** + sticky mobile Call/Quote/WhatsApp bar.

---

## 10. PAGE-BY-PAGE PURPOSE

- **Home** — answer the 5-second question; route to quote/call. Cluster A/B.
- **Services hub** — capability overview; distribute to spokes. Cluster A.
- **Service pages** — deep, spec-rich, geo-flavoured; each answers objections 1/3/4/7; RFQ CTA. Cluster C/B.
- **Industries (P2)** — sector fit + proof; qualify high-value buyers. Cluster E.
- **About** — heritage, team, machinery, capacity, ISO; trust/continuity (objection 5). E-E-A-T.
- **Quote** — RFQ workflow + upload; the primary conversion. Cluster D.
- **Contact** — NAP, map, hours, LocalBusiness schema.
- **FAQ** — materials, lead times, MOQ, file formats; FAQPage schema (GEO/AI Overviews).
- **Thank-you** — confirmation + conversion tracking.

---

## 11. TRUST STRATEGY

Distribute proof throughout; **certs/QA badges adjacent to capabilities and the RFQ form, not just the footer.** Priority proof to source from client: real factory/machine/part photos, the actual ISO 9001 certificate (body + number + scope + expiry), machinery list with specs, capacity numbers, confirmed founding year, industries with examples, consented client logos/testimonials. Show the shop floor — don't describe it. **No fabricated reviews/stats/credentials** (OS standing rule).

---

## 12. CTA STRATEGY

- **Two primary paths everywhere:** "Request a Quote / Upload Your Drawing" + **click-to-call** (`tel:`). Add WhatsApp (SA norm).
- Specific button copy ("Get My Quote," "Upload Your Drawing"), never "Submit."
- Primary CTA above the fold; repeated after trust, capabilities, FAQ.
- **Accent color reserved for the primary CTA only** (OS token rule); WhatsApp green `#25D366` the only other action color.
- **Sticky mobile bar:** Call + Quote + WhatsApp.

---

## 13. RFQ / FORM STRATEGY

**Multi-step RFQ (3 short steps)** — converts better *and* qualifies. Technical questions first, contact + company last.

- **Step 1 — What you need:** process (multi-select, req) · part/project description (req) · material (opt) · **quantity band** one-off / 2–50 / 50–500 / 500+ / ongoing (req, key qualifier) · **file upload** DXF/DWG/STEP/PDF/photo (prominent, opt).
- **Step 2 — Timeline & context:** required-by date/urgency (req) · industry/application (opt) · business or personal (neutral, opt — soft filter).
- **Step 3 — Who you are:** name (req) · **company name** (req — best low-friction B2B gate) · email (req) · phone (opt) · role (opt).

**Rules:** allow prominent drawing upload (100MB CAD); ask contact last; state accepted formats; **response SLA on the form** ("We respond to RFQs within 1 business day"); RFQ CTA on every service page; conditional fields (e.g. tolerance only if machining). **Qualification via clarity, not a "no hobbyists" sign** — ICP language + business-outcome framing + company-name/quantity/timeline fields let private jobs self-select out.

**Backend:** native multi-step form → **GoHighLevel inbound webhook** → CRM contact + workflow notification + lead routing → `/thank-you` redirect. No secrets in frontend; `.env.example` in repo, values in Vercel. (File-upload transport to GHL to be confirmed in build — likely upload to storage + URL in webhook payload.)

---

## 14. IMAGE REQUIREMENTS

Centralized image system (Step 2 deliverable). Folders:
```
public/images/logo · hero · factory · machinery · services/{laser-cutting,cnc-bending,cnc-punching,welding-assembly,machining} · projects · team · certifications · industries · gallery · og
```
Each folder gets a README documenting: required images, exact filenames (SEO-named, e.g. `laser-cutting-mild-steel-centurion.jpg`), dimensions, aspect ratios, formats (WebP/AVIF, hero <200KB, others <120KB), and what each must show. **All paths centralized in `config/images` — no hardcoded paths in components.** Until real images arrive: deliberate labeled blank slots (never broken). **No Unsplash, no stock, no AI images, no invented photography** (client rule). Client supplies all real images after folders exist.

---

## 15. COMPONENT ARCHITECTURE (per OS SYSTEM/02)

```
app/            routes, layout.tsx (metadata + JSON-LD), sitemap.ts, robots.ts
views/          page compositions (section order)
components/
  sections/     hero, trust-bar, capabilities, machinery, industries, quality, proof, quote-process, faq, final-cta
  funnel/       header, footer, multi-step RFQ form, sticky mobile bar, WhatsApp
  ui/           button, section-heading, icon, count-up, spec-table, image-slot
config/         site-config, seo-config, services-config, industries, trust, faqs, images, schema inputs
lib/            metadata.ts, utils
public/images/  per §14
PROJECT_STATUS.md · SESSION-HANDOVER.md · README.md (records OS version)
```
Components harvested from proven SHOWCASE patterns, not invented. **Config rule absolute: no copy/contact/stat/URL hardcoded in a component.**

---

## 16. CONFIG ARCHITECTURE

All content in `config/`: site details, services (with specs/materials/tolerances per service), navigation, CTAs, industries, trust/proof, FAQs, reviews, projects, images, SEO metadata, contact details, schema inputs. Each service entry carries its own keyword cluster, spec table, and RFQ pre-fill.

---

## 17. TECHNICAL SEO PLAN

- **Stack:** Next.js 14 / React 18 / Tailwind / Framer Motion / TS strict (OS pinned).
- **Rendering:** SSG/SSR App Router — primary copy crawlable without JS.
- **Metadata:** unique `<title>` (<60), meta description (<155) per page (geo+service pattern); self-referencing canonical; single host (pick www/non-www, 301 rest); no trailing-slash dupes.
- **Schema (JSON-LD):** LocalBusiness/Organization (Home/Contact, NAP+geo+hours+areaServed+sameAs), Service (each service page), FAQPage (FAQ + service pages), BreadcrumbList (deep pages). Review schema only from consented real reviews.
- **Semantic HTML:** one H1/page, no skipped levels, `<nav>/<main>/<footer>`, descriptive anchors.
- **Sitemap/robots:** dynamic `app/sitemap.ts` + `robots.ts` pointing to sitemap.
- **Images:** `next/image`, WebP/AVIF, descriptive filenames + alt, width/height (no CLS).
- **Internal linking:** hub-and-spoke — Home → Services hub → spokes; spokes ↔ related services; every service → /quote; persistent footer with services + NAP.
- **CWV budgets (mobile, HARD):** LCP <2.5s, CLS <0.1, INP <200ms, TTFB <800ms; Lighthouse ≥90 (target 95); first-load JS <150KB gz.
- **Redirects:** map/301 legacy `index.php` URLs; preserve any ranking pages.

---

## 18. TRACKING PLAN

- GHL inbound webhook → CRM contact + workflow notify + routing + `/thank-you`.
- Google Ads conversion tracking on RFQ submit (thank-you page) + phone-call + email-click events.
- Click-to-call tracking (`tel:` events) and email-click tracking.
- GTM via `next/script` `afterInteractive` (perf); events: rfq_submit, call_click, whatsapp_click, email_click.
- Search Console: verify property, submit sitemap. GA4 organic. No secrets in frontend.

---

## 19. MOBILE STRATEGY

Mobile-first (SA mobile-heavy, variable connections). Sticky footer bar (Call + Quote + WhatsApp); tap targets ≥44px; full-width thumb-friendly buttons; step-split RFQ with correct `inputMode` keyboards; real `tel:` links; LCP hero renders at mobile crop; lighter motion (shorter distances, no parallax); load <2.5s. QA at 360/390/768px — no horizontal scroll.

---

## 20. RISKS, ASSUMPTIONS & MISSING CLIENT INFORMATION

**Must confirm before build (blockers):**
1. **ISO 9001** — real certificate (body, number, scope, expiry) or we cannot claim it. Currently unproven.
2. **Founding year / heritage** — "1992" (site) vs "29 years" (legacy) conflict. Confirm the single true figure.
3. **Capability specs** — confirm laser bed size + per-material thickness ranges before publishing.
4. **Lead-time bands** — real turnaround per service (none stated anywhere).
5. **Canonical NAP** — confirm exact address/street/postcode/email; decide www vs non-www.
6. **GHL** — inbound webhook URL, workflow, lead routing; confirm file-upload handling.
7. **Real images** — all photography (client-supplied after folders created).
8. **Service list** — final canonical set (Home vs Services page disagree).
9. **Company profile / brochure / price-driver info** — for accurate quote-process copy.
10. **Industries** — real project evidence to justify industry pages (else fold in).
11. **Reviews/logos** — consented real testimonials + client logos.
12. **Access:** domain, Vercel, GBP, analytics, Google Ads.

**Assumptions (may NOT reach copy until confirmed):** positioning sentence, persona mix, MOQ framing, lead-time examples, and all specs pending client confirmation.

**Risks:** losing "laser cutting Centurion" to CPC if local SEO slips; legacy `index.php` duplicate content; over-claiming "instant quote" without real tooling (position as "fast RFQ, quote within 24h"); attracting low-value private jobs if ICP framing is weak.

---

## NEXT STEPS (Website OS pipeline)

- **Gate 1** (this doc) → **your approval.**
- **Step 2 — Image system:** create folders + READMEs + `config/images` + labeled blank slots → **you upload real images.**
- **Step 3 — Build:** only after approval + real images. Then verify (desktop/mobile/forms/CTAs/SEO/schema/a11y/links/images), build, lint, typecheck, document, commit, deploy.

**Recommended workspace:** `~/Documents/Foxtron-Engineering` (separate from the OS repo), repo `bbettr-agency/Foxtron-Engineering`, Vercel project, OS v2.0 recorded in README.
