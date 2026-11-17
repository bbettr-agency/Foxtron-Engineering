# GEO Audit Report: Foxtron Engineering

**Audit Date:** 17 November 2026
**URL:** https://www.foxtronengineering.co.za/
**Business Type:** Local Business / B2B Services (precision sheet-metal fabrication, Sunderland Ridge, Centurion, Gauteng)
**Pages Analyzed:** 11 (full sitemap)

---

## Executive Summary

**Overall GEO Score: 49/100 (Poor)**

The new site is technically excellent. It is server-rendered, fast, open to every AI crawler, and has clean meta tags, canonicals and a solid base of LocalBusiness, Service, FAQPage and Breadcrumb schema. That is why Technical scores 90/100.

The weakness is everything *around* the site. AI systems can barely recognise "Foxtron Engineering" as an entity:

- There are no `sameAs` links and no LinkedIn company page.
- Directory listings are inconsistent with each other.
- The name collides with Foxtron Vehicle Technologies, the Foxconn EV company, which is the only "Foxtron" that search and AI results surface.

On top of that, the service pages are thin, and the homepage stat counters reach crawlers as "0+ Years in fabrication". Fixing the entity signals and deepening the service content are the two biggest levers.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 62/100 | 25% | 15.5 |
| Brand Authority | 14/100 | 20% | 2.8 |
| Content E-E-A-T | 38/100 | 20% | 7.6 |
| Technical GEO | 90/100 | 15% | 13.5 |
| Schema & Structured Data | 50/100* | 10% | 5.0 |
| Platform Optimization | 50/100 | 10% | 5.0 |
| **Overall GEO Score** | | | **49/100** |

\*The schema score uses the local-business view. The generic rubric gives 28/100 because it rewards Article and Person markup, which doesn't apply to this site.

---

## Critical Issues (Fix Immediately)

1. **Stat counters render as "0" to crawlers (home, about).**
   - **Problem:** The server HTML contains `<span>0+</span> Years in fabrication`, "0 In-house capabilities" and "0 Metals cut". The real values (years since 1992, 6, 5 in `config/content-config.ts:13-15`) only appear after JavaScript runs. AI crawlers that don't execute JS read false zeros.
   - **Fix:** Render the final number on the server and animate *from* it. Alternatively, put the real value in visually hidden text next to the counter.
2. **Brand entity is barely established.**
   - **Problem:** No Wikipedia/Wikidata, LinkedIn company page, YouTube or Reddit presence was found. Searches for "Foxtron Engineering Centurion" return only Foxtron Vehicle Technologies (Foxconn/Yulon EV).
   - **Fix:** Build a consistent entity footprint (see Brand Authority below) and always use the full form "Foxtron Engineering (Pty) Ltd, Centurion".
3. **No `sameAs` anywhere, in schema or on the page.**
   - **Problem:** `config/site-config.ts:55-58` has empty social URLs. A Facebook page (facebook.com/foxtronengineering) exists and can be linked once the client confirms it is theirs.
   - **Fix:** Add `sameAs` from the confirmed profiles, plus the Google Business Profile link (`hasMap`).

## High Priority Issues

1. **NAP inconsistencies across third-party listings.** These undermine entity confidence.

   | Field | Website | Third-party listings |
   |---|---|---|
   | Street | 46 Rowan **Nook** | 46 Rowan **Place** (iVote) |
   | Area | Centurion | Rosslyn (CCBC directory) |
   | Company type | (Pty) Ltd | CC (D&B) |

   - **Fix:** Correct these listings, then claim Brabys, Yellow Pages SA and Cylex with identical details.
2. **Founding date conflict.**
   - **Problem:** The site states "since 1992" in the About H1, the title tag, the hero and the stats, and the client has not confirmed it. Registry aggregators (b2bhint) show a 1997 incorporation, and the current (Pty) Ltd registration is 2020/543748/07.
   - **Fix:** Confirm with the client, then explain the history in one line on /about (e.g. "trading since X, incorporated Y").
3. **Thin service pages.**
   - **Problem:** Once nav and footer are removed, the body copy is about 160 words on laser cutting, about 90 on CNC bending and welding, and about 70 on CNC punching. Only laser cutting has specs.
   - **Fix:** Expand each page to 600+ words with H2 sections (what it is, capacity, materials, tolerances, typical parts, file requirements). Use question-style headings and 40–60-word direct answers. **All figures must come from the client.**
4. **No privacy policy or POPIA notice.** The /quote form collects personal details and drawing uploads. Add a privacy policy page and a consent line on the form, and get the client's POPIA Information Officer details.
5. **Google Business Profile is not linked.** The site quotes Google reviews, but there is no GBP link and no `hasMap`. Confirm the profile, match its NAP exactly, and link it.
6. **Missing schema nodes:**
   - A `WebSite` node.
   - `hasCertification` for ISO 9001:2015 (AfriCert, cert 2024042201, expires 2027-04-21).
   - Guessed `geo` coordinates (`config/site-config.ts:37` is marked `[assumed]`) are published as fact. Remove them until the exact GBP pin is confirmed.
   - Duplicate FAQPage markup on home and /faq. Keep it on /faq only.
7. **Missing security headers.** CSP (start in report-only mode), X-Frame-Options, X-Content-Type-Options, Referrer-Policy and Permissions-Policy are all absent. Add them via `headers()` in `next.config.js`.
8. **No named people.** The team is shown unnamed. With permission, name key staff (e.g. the MD, the quality lead) with their role and experience.
9. **No Bing Webmaster Tools verification or IndexNow.** Bing's index feeds ChatGPT search and Copilot. Verify the site, submit the sitemap, and add an IndexNow key.

## Medium Priority Issues

1. **No `/llms.txt`** (returns 404). Add one listing the services, FAQ, About, ISO certificate and contact facts.
2. **Identical sitemap `lastmod`** on every URL (2026-10-15T13:55:54Z).
   - **Problem:** `app/sitemap.ts` uses `new Date()` at build time, so the dates carry no freshness signal.
   - **Fix:** Use a real per-page date.
3. **robots.txt has no explicit AI-crawler groups.** Everything is allowed via `*`, which works. Explicit `Allow` groups for GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot and Google-Extended document that intent. Also remove the non-standard `Host:` line (`app/robots.ts`).
4. **Services not connected to the business in schema.**
   - **Problem:** The Service nodes have no `@id`, the LocalBusiness has no `hasOfferCatalog`, and the services hub has no `ItemList`.
   - **Fix:** Add all three.
   - **LocalBusiness fields to add:** `description`, `knowsAbout`, a `contactPoint`, a raster logo `ImageObject`, and the telephone in international format (+27 12 666 9933).
5. **Three listed services have no page:** Machining & Finishing, Roll Work and Custom Fabrication. Confirm the scope with the client and build pages, or drop them from the list.
6. **No case studies or project evidence.** The gallery is photos only. Ask the client for 2–4 jobs that can be published (part, material, quantity, turnaround, industry).
7. **Only 2 Google reviews.** Start a review-request process with past clients. Never seed or write reviews, and add no `AggregateRating` until the reviews are countable.
8. **Equipment is named only in image alt text** (e.g. the Bystronic press brake). The old site mentioned a 4 kW fibre laser and Trumpf. Confirm the current machines and name them in the body copy.
9. **Repeated boilerplate.** The same 7 FAQs and the same 6-service block appear on home, /services and /faq. Write a short FAQ specific to each service page.

## Low Priority Issues

1. **Homepage title lacks the brand.** "Laser Cutting & Metal Fabrication Centurion" (44 characters); add "| Foxtron Engineering".
2. **Short meta descriptions** (118–153 characters). Lengthen toward 150–160.
3. **Conflicting robots tags on the 404 page.** It has both `noindex` and `index, follow`. Drop the default in `lib/metadata.ts` for `not-found`.
4. **No visible "last reviewed" dates** on service and spec content.
5. **Company registration number** not shown in the footer or schema (`identifier`).
6. **Unused heavy assets** in the repo: `public/images/certifications/iso-9001.svg` (590 KB) and `public/images/logo/Foxtron Logo.svg+xml`.
7. **Duplicate H3 "Laser Cutting"** in the services grid on home and /services.
8. **Optional extras:** a `speakable` property on the About and Contact pages, and a Content-Signal line in robots.txt.

---

## Category Deep Dives

### AI Citability (62/100)

**Strong passages (likely to be quoted):**
- **FAQ answers (~75/100):** question headings, 1–3 sentence answers, concrete numbers (material thickness limits, file formats, "quote within 1 business day").
- **Laser-cutting spec table (~80/100):** bed 3000 × 1500 mm; mild steel 0.6–22 mm, stainless 0.5–12 mm, aluminium 0.9–10 mm, brass 0.3–10 mm, copper 0.4–6 mm.
- **ISO block (~78/100):** ISO 9001:2015, AfriCert, certificate 2024042201, valid to 21 April 2027.

**Weak passages:**
- CNC Bending, Punching and Welding pages (~30–35/100): marketing bullets with no numbers, definitions or question headings.
- Stat strip: renders as zeros (see Critical 1).
- No process definitions anywhere (e.g. "What is CNC press-brake bending?").

**Rewrite examples (facts from the site only):**

> **Home stat strip →** "Foxtron Engineering has fabricated sheet metal in Sunderland Ridge, Centurion since 1992. It runs six in-house capabilities (laser cutting, CNC bending, CNC punching, welding, assembly and finishing) and cuts five metals: mild steel, stainless steel, aluminium, brass and copper." *(only once 1992 is confirmed)*

> **Laser Cutting intro →** "**What can Foxtron laser cut?** Foxtron's fibre laser cuts sheets up to 3000 × 1500 mm: mild steel 0.6–22 mm, stainless steel 0.5–12 mm, aluminium 0.9–10 mm, brass 0.3–10 mm and copper 0.4–6 mm. It handles one-off profiles through to nested production runs, cut from your DXF, DWG, STEP or PDF files in Centurion, Gauteng."

> **CNC Bending intro →** "**What does Foxtron's CNC bending service do?** Foxtron folds sheet and plate on CNC press brakes at its ISO 9001:2015-certified workshop in Centurion, from single brackets to full production runs. Parts are usually laser-cut in-house first and then bent on the same floor, with no outsourcing between cutting and folding. Send DXF, DWG, STEP or PDF drawings for a quote within 1 business day."

### Brand Authority (14/100)

| Platform | Status |
|---|---|
| Wikipedia / Wikidata | Not found |
| Reddit | Not found |
| YouTube | Not found |
| LinkedIn | No company page; only employee profiles that name the firm |
| Facebook | facebook.com/foxtronengineering found (not linked from the site) |
| Google Business Profile | Not confirmed via search (site quotes Google reviews, so one likely exists) |
| Directories found | CCBC (filed under Rosslyn), ZoomInfo, D&B ("CC"), b2bhint (reg. M1997019801), iVote ("Rowan Place"), givingmore |
| Directories not found | Yellow Pages SA, Brabys, Snupit, Cylex, news coverage |
| Industry media | None (competitors are featured on metalworkingnews.info) |

**Name collision:** "Foxtron" is dominated by Foxtron Vehicle Technologies, which has a Wikipedia article. Consistent use of "Foxtron Engineering" together with "Centurion" and "sheet metal" across every profile is essential for AI disambiguation.

*Caveat:* web search was US-centred, so South African directory and local-pack checks are not definitive.

### Content E-E-A-T (38/100)

| Dimension | Score | Notes |
|---|---|---|
| Experience | 9/25 | Real workshop photos and 2 reviews; no case studies or named projects |
| Expertise | 7/25 | No named people or credentials; specs only for laser cutting |
| Authoritativeness | 8/25 | Real ISO 9001 certificate (strong); no memberships, media mentions or sameAs |
| Trustworthiness | 14/25 | Full NAP, hours, HTTPS and certificate PDF; no privacy policy, registration number or terms |

**Topical gaps:** fabrication buyers ask AI about the following, and the site doesn't answer:
- Tolerances
- Bend rules (minimum flange, inside radius)
- File preparation
- Lead times
- Cost drivers
- Material grades (304/316, 3CR12, 5083)
- Finishing options
- Minimum orders
- Delivery
- Laser cutting vs punching

**Recommended content (client-supplied figures only):**
1. Sheet-metal bending design guide
2. "Preparing files for a fast quote"
3. "What drives fabrication cost"
4. Lead times
5. Tolerances held, and the inspection method under ISO 9001
6. Materials guide
7. Laser cutting vs CNC punching
8. 2–4 case studies
9. Pages for Machining & Finishing and Roll Work
10. A short FAQ for each service page

### Technical GEO (90/100)

| Area | Score | Notes |
|---|---|---|
| Rendering / SSR | 97 | Next.js pre-rendered from the Vercel cache; all content and JSON-LD in raw HTML |
| Meta & indexability | 92 | Self-canonicals, `index, follow`, `lang="en-ZA"`, full OG/Twitter tags |
| Crawlability | 85 | Sitemap OK; identical lastmods; no llms.txt |
| Security headers | 70 | HSTS only |
| Performance | 85 | AVIF/WebP, preloaded hero with `fetchpriority`, async scripts, woff2 fonts; field CWV not yet measured |
| Mobile | 95 | Responsive, viewport set |
| URL structure | 95 | Short, lowercase, hyphenated, at most 2 levels deep |
| Status / redirects / 404 | 90 | non-www → www single 308; trailing slash → 308; legacy `/index.php/...` URLs redirect; real 404s |

The GPTBot user-agent gets a 200 response.

**Not tested:** http→https (container limitation) and field Core Web Vitals. Check those in PageSpeed Insights or Search Console after launch.

### Schema & Structured Data (50/100)

**Present (valid JSON-LD, server-rendered):**
- LocalBusiness on every page, with PostalAddress, GeoCoordinates, OpeningHours and areaServed
- BreadcrumbList on inner pages
- FAQPage on home and /faq
- Service on the 4 service pages

**Missing or incorrect:**
- `sameAs` (critical)
- `WebSite` node
- `hasCertification` (ISO 9001)
- `hasOfferCatalog` and Service `@id`s
- `knowsAbout` and `additionalType` (metal fabrication)
- `contactPoint`
- Raster logo
- Per-page WebPage/AboutPage/ContactPage nodes in one `@graph`
- Assumed `geo` coordinates published as fact
- Duplicate FAQPage on home

**Correctly omitted:** AggregateRating and Review (only 2 reviews), and Article and Person markup.

Example additions for `lib/schema.ts`:

```json
{"@type":"WebSite","@id":"https://www.foxtronengineering.co.za/#website","url":"https://www.foxtronengineering.co.za","name":"Foxtron Engineering","inLanguage":"en-ZA","publisher":{"@id":"https://www.foxtronengineering.co.za/#organization"}}
```

```json
"hasCertification":{"@type":"Certification","name":"ISO 9001:2015","certificationIdentification":"2024042201","issuedBy":{"@type":"Organization","name":"AfriCert"},"expires":"2027-04-21","certificationStatus":"https://schema.org/CertificationActive"}
```

### Platform Optimization (50/100)

| Platform | Score | Top fix |
|---|---|---|
| Google AI Overviews | 60 | Question-led H2s and 40–60-word answers on the service pages |
| ChatGPT Search | 55 | `sameAs` and consistent entity naming; Bing indexing |
| Perplexity | 50 | Community and industry mentions; visible dates |
| Bing Copilot | 47 | Bing Webmaster Tools, IndexNow, LinkedIn company page |
| Gemini | 38 | Link the GBP and add `hasMap`; short YouTube machine videos |

**Competitors surfacing for "laser cutting / sheet metal fabrication Centurion":**
- Calculus
- Eezi Laser (Pretoria)
- Press Dynamik (Midrand)
- World Power Products
- BoerBoel Laser Cutting, Lasercraft, Profile Cutting Services (featured on metalworkingnews.info)
- Directory pages: thebusinessdirectory.co.za

Foxtron does not appear.

---

## Quick Wins (Implement This Week)

1. **Server-render the real stat numbers** on home and about. This removes false "0" facts for every AI crawler.
2. **Add `sameAs` and a footer social link** for the confirmed Facebook page, plus a `WebSite` node and ISO `hasCertification` in `lib/schema.ts`. This is the first step toward entity recognition.
3. **Publish `/llms.txt`** and real per-page sitemap `lastmod` dates, then submit the sitemap to Google Search Console and Bing Webmaster Tools.
4. **Add the brand to the homepage title**, remove the assumed `geo` coordinates and the duplicate home FAQPage, and fix the 404 robots tag.
5. **Add security headers** in `next.config.js` and a privacy policy / POPIA notice on /quote.

## 30-Day Action Plan

### Week 1: Fix false signals and the technical basics
- [ ] Server-render the stat counters (home, about)
- [ ] Add security headers; add explicit AI-bot groups to robots.txt and remove `Host:`
- [ ] Publish llms.txt; add real sitemap lastmods; add the brand to the homepage title
- [ ] Schema: WebSite, hasCertification, sameAs (confirmed profiles only); remove assumed geo; drop the home FAQPage

### Week 2: Entity and listings
- [ ] Confirm with the client: Google Business Profile, Facebook ownership, founding year (1992 vs 1997), exact map pin
- [ ] Create a LinkedIn company page; link the GBP (`hasMap`) and all profiles via `sameAs`
- [ ] Correct the iVote / CCBC / D&B listings; claim Brabys, Yellow Pages SA and Cylex with identical NAP
- [ ] Verify in Bing Webmaster Tools and enable IndexNow

### Week 3: Deepen service content
- [ ] Collect client specs for bending, punching, welding and tolerances
- [ ] Rewrite the 4 service pages to 600+ words with question-led H2s and a short FAQ per page
- [ ] Add Service `@id`s and `hasOfferCatalog`; name the equipment in body copy
- [ ] Publish a privacy policy page

### Week 4: Proof and authority
- [ ] Publish 2–4 approved case studies; name key staff (with permission)
- [ ] Publish "Preparing files for a fast quote" and a bending design guide
- [ ] Launch a Google review-request process
- [ ] Pitch an editorial feature to metalworkingnews.info; record 2–3 short machine videos for YouTube

---

## Appendix: Pages Analyzed

| URL | Title | GEO Issues |
|---|---|---|
| / | Laser Cutting & Metal Fabrication Centurion | 4 (zero counters, no brand in title, duplicate FAQPage, duplicate H3) |
| /services | Laser, Bending & Welding Services \| Foxtron Engineering | 3 (repeated home blocks, no ItemList, 3 services without pages) |
| /services/laser-cutting | Laser Cutting in Centurion \| Foxtron Engineering | 2 (thin, no question headings) |
| /services/cnc-bending | CNC Bending in Centurion \| Foxtron Engineering | 3 (very thin, no specs, no question headings) |
| /services/cnc-punching | CNC Punching in Centurion \| Foxtron Engineering | 3 (very thin, no specs, no question headings) |
| /services/welding-assembly | Welding & Assembly in Centurion \| Foxtron Engineering | 3 (very thin, no specs or qualifications, no question headings) |
| /gallery | Our Work – Fabrication Gallery \| Foxtron Engineering | 1 (no case-study context) |
| /about | About – Metal Fabrication Since 1992 \| Foxtron Engineering | 3 (zero counters, unconfirmed 1992, unnamed team) |
| /quote | Request a Quote – Upload Your Drawing \| Foxtron Engineering | 1 (no privacy/POPIA notice) |
| /contact | Contact Us – Centurion Workshop \| Foxtron Engineering | 2 (assumed geo, no GBP link) |
| /faq | FAQs – Materials, Lead Times & Files \| Foxtron Engineering | 1 (generic FAQs repeated sitewide) |

**Fetch failures:** none (all 11 returned 200). The first homepage request hit a transient connection reset and succeeded on retry.

**Not crawled:** `/api/` and `/thank-you`, which robots.txt disallows.

**Limitations:**
- http→https not tested.
- No field Core Web Vitals.
- Brand and competitor checks used a US-based web search, so South African local results may differ.
