# IMAGE INVENTORY — Foxtron Engineering

**Date:** 2026-07-13 · Assets reviewed visually (every factory + team image) and assigned to
sections in `config/images.ts`. Client originals are never renamed/moved — assignments reference
real paths and `next/image` crops to each slot.

## 1. What was uploaded

| Group | Count | Notes |
|---|---|---|
| Logo | 1 | `Foxtron Logo.svg+xml` — wide wordmark SVG. Copied to a servable `foxtron-logo.svg` (original kept). |
| Factory | 124 | Real workshop photography. Heavily **laser cutting** + **welding/assembly** + **CNC bending (press brakes)**; plus finished parts, forklift/logistics, and full-staff group photos. |
| Team | 7 | Studio head-and-shoulders portraits, 769×1024, consistent grey backdrop. |

**Processes actually documented in the photos:** laser cutting (extensive — HSG G3015X + branded
"Foxtron ONE LASER" fiber laser), CNC bending (Trumpf TruBend, ACCURL, Bystronic Xpress 160,
CoastOne press brakes), welding & assembly (MIG/TIG, tube frames, grinding), roll work (one context
shot only), finished parts, forklift logistics, and team/group shots.
**Not documented:** CNC punching, CNC machining (mill/lathe), a clean building exterior, and any
sector-specific "industries" imagery.

## 2. Where each image is used (assignments — all `ready` in config)

| Slot | File | Why |
|---|---|---|
| **Hero (main)** | `factory/Untitled-23022.jpg` | Branded operator at the fiber laser, cinematic, back-to-camera. Alternates: 23047, 23126, 23077. |
| Machinery — laser | `factory/Untitled-23047.jpg` | Clean full-machine profile, warehouse lighting. |
| Machinery — press brake | `factory/Untitled-23118.jpg` | Well-lit Trumpf press-brake overview, branding readable. |
| Machinery — welding | `factory/Untitled-23101.jpg` | Labeled welders + gas bottle, no people (clean equipment shot). |
| Machinery — rolling | `factory/Untitled-23102.jpg` | Only roll-work context shot (marginal — see notes). |
| Service — laser cutting | hero `23011` (head + sparks), detail `23010` (cutting head) | Best process + detail. |
| Service — CNC bending | hero `23126` (two workers folding panel), detail `23128` (CNC controls) | Scale + control detail. |
| Service — welding & assembly | hero `23077` (spotlit tube-frame weld), detail `23095` (grinding sparks) | Dramatic + close-up. |
| Factory floor | `23046`, `23083` | Best wide machine-in-shop + workshop bay. |
| Projects (8) | `23098, 23028, 23129, 23130, 23057, 23103, 23029, 23058` | Real finished parts & assemblies (housing, bracket, laser-cut stacks, frames, machined flange). |
| Gallery (6) | `23016, 23061, 23090, 23093, 23068, 23106` | Strong general workshop variety. |
| Team — group | `factory/Untitled-23111.jpg` | Best-lit full-staff group photo. |
| Team roster (7) | `team/23137, 23133, 23136, 23135, 23139, 23138, 23140` | All studio portraits, strongest first. **Names NOT assigned — identity unconfirmed.** |
| Logo (header/footer/nav) | `logo/foxtron-logo.svg` | Servable copy of the uploaded wordmark. |

## 3. Slots still MISSING (placeholders remain)

| Slot | Status | Needed |
|---|---|---|
| CNC punching (service hero + detail, machinery) | pending | No punch photos supplied. |
| CNC machining (service hero + detail, machinery) | pending | No mill/lathe photos supplied. |
| Factory exterior | pending | No clean building-exterior shot. |
| Industries (automotive, construction, electrical, OEM, general) | pending | No sector-specific imagery. |
| Team named portraits (Anton, Monica, Karl) | pending | 7 faces exist but **identity mapping unconfirmed** — see decision below. |
| Logo — white/reversed | pending | For dark footer (interim: CSS-invert the wordmark). |
| Logo — square icon / favicon | pending | Wordmark too wide to crop to a favicon; needs a square mark. |
| ISO 9001 certificate + badge | pending | Real certificate (body, number, scope, expiry) — trust blocker. |
| OG / social images | pending | We produce these (logo + workshop photo); not client photography. |

## 4. Should be cropped / optimized before launch

- **Source resolution ceiling:** all photos are ~1024px on the long edge and 200–330KB JPGs. Fine for
  cards/detail; the **hero is below ideal 1920px width** — it will upscale slightly. `next/image`
  re-encodes to WebP/AVIF and resizes at runtime, so page weight stays within budget, but a
  higher-res hero export would be ideal if available.
- **SEO filenames:** files keep their `Untitled-####.jpg` names. Optional pre-launch pass: export
  SEO-named crops (e.g. `laser-cutting-centurion.jpg`) — minor SEO gain; alt text already carries the
  weight.
- **Dark/moody exposures:** several welding/laser shots are intentionally underexposed (e.g. 23071–23076,
  23105). Fine for hero/gallery; brighten if used behind text.
- **Team portraits:** two (23138 puffer jacket, 23140 off-angle/gilet) break the warm-polo set's
  consistency — colour-match + tighter crop if shown alongside the others.
- **Privacy/consent:** many shots show identifiable staff faces — confirm consent to publish.
- **Rolling (23102):** weak solo machine shot; consider a dedicated roll-work photo, or fold rolling
  into the services hub rather than a standalone page.
