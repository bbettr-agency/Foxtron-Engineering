# FOXTRON ENGINEERING — IMAGE SYSTEM

**Single source of truth for every image on the site.** All references are centralized in
[`config/images.ts`](../../config/images.ts) — components never hardcode image paths. Until real
images are supplied, every image area renders a labeled blank slot (`components/ui/image-slot.tsx`)
that reserves the correct dimensions, so nothing looks broken.

## Rules (do not break)

- **Client supplies all real photography.** No Unsplash, no stock, no AI-generated images, no
  invented project photos, no temporary placeholders committed as real images.
- **Never overwrite or delete a client asset** once uploaded.
- **Formats:** deliver source as JPG/PNG; the build serves WebP/AVIF automatically via `next/image`.
  Logos and badges as **SVG** where possible (fall back to transparent PNG).
- **Size caps (after optimization):** hero **< 200KB**, any other image **< 120KB**, logo SVG < 40KB.
- **Filenames are SEO assets** — lowercase, hyphenated, descriptive, keyword-natural. Use the exact
  filenames below so `config/images.ts` resolves without edits.
- **Every image needs real `alt` text** describing the actual part/process (set in `config/images.ts`).
- **Dimensions matter for CLS** — deliver at (or above) the stated pixel size and the stated aspect
  ratio so the reserved slot matches the final image (no layout shift).

## How to add real images

1. Export at the filename + dimensions listed below.
2. Drop into the matching `public/images/<folder>/`.
3. In `config/images.ts`, set that entry's `status: "ready"` (from `"pending"`). That's it — the slot
   is replaced by the real image everywhere it's used.

---

## Required images

Legend — **AR** = aspect ratio · sizes are the minimum recommended export.

### logo/  — brand marks
| Filename | Dimensions | AR | Format | Shows |
|---|---|---|---|---|
| `foxtron-logo.svg` | vector (~320×80) | ~4:1 | SVG | Primary logo, dark, transparent bg (light headers/footers) |
| `foxtron-logo-white.svg` | vector (~320×80) | ~4:1 | SVG | Reversed/white logo for dark surfaces |
| `foxtron-icon.svg` | 512×512 | 1:1 | SVG | Icon/monogram for favicon + app icons |

### hero/  — homepage LCP image
| Filename | Dimensions | AR | Format | Shows |
|---|---|---|---|---|
| `hero-fabrication.jpg` | 1920×1080 | 16:9 | JPG | Wide shop-floor / laser cutting in action — the headline visual. Priority-loaded (< 200KB). |
| `hero-fabrication-mobile.jpg` | 1080×1350 | 4:5 | JPG | Optional portrait crop for mobile hero |

### factory/  — the real premises
| Filename | Dimensions | AR | Format | Shows |
|---|---|---|---|---|
| `factory-floor-01.jpg` | 1600×1067 | 3:2 | JPG | Main workshop, machines running |
| `factory-floor-02.jpg` | 1600×1067 | 3:2 | JPG | Second floor angle / assembly area |
| `factory-exterior.jpg` | 1600×1067 | 3:2 | JPG | Building exterior / signage (trust + "we're a real business") |

### machinery/  — capability proof (one clear photo per machine)
| Filename | Dimensions | AR | Format | Shows |
|---|---|---|---|---|
| `laser-cutter.jpg` | 1200×900 | 4:3 | JPG | The laser cutting machine (add model/bed size in caption via config) |
| `press-brake.jpg` | 1200×900 | 4:3 | JPG | CNC press brake / bending |
| `cnc-punch.jpg` | 1200×900 | 4:3 | JPG | CNC punching machine |
| `cnc-machine.jpg` | 1200×900 | 4:3 | JPG | CNC machining centre |
| `welding-bay.jpg` | 1200×900 | 4:3 | JPG | Welding & assembly bay |
| `rolling-machine.jpg` | 1200×900 | 4:3 | JPG | Roll work / plate rolling (optional) |

### services/<service>/  — one hero + one detail per service page
Folders: `laser-cutting`, `cnc-bending`, `cnc-punching`, `welding-assembly`, `machining`.
Per folder:
| Filename | Dimensions | AR | Format | Shows |
|---|---|---|---|---|
| `<service>-hero.jpg` | 1600×1067 | 3:2 | JPG | The process in action (service page hero) |
| `<service>-detail.jpg` | 1200×900 | 4:3 | JPG | Close-up of a finished part / edge quality from that process |

Expected files:
`laser-cutting/laser-cutting-hero.jpg`, `laser-cutting/laser-cutting-detail.jpg` ·
`cnc-bending/cnc-bending-hero.jpg`, `cnc-bending/cnc-bending-detail.jpg` ·
`cnc-punching/cnc-punching-hero.jpg`, `cnc-punching/cnc-punching-detail.jpg` ·
`welding-assembly/welding-assembly-hero.jpg`, `welding-assembly/welding-assembly-detail.jpg` ·
`machining/machining-hero.jpg`, `machining/machining-detail.jpg`.

### projects/ + gallery/  — portfolio
The `/gallery` page and the homepage "Our Work" preview are curated **in config**
(`galleryCategories` in `config/images.ts`) from the uploaded `factory/` and `team/` photography,
grouped into: Machinery · Laser Cutting · CNC Bending · Welding & Assembly · Factory · Finished Work.
Drop new portfolio photos into `projects/` or `gallery/` and add them to the relevant category.

> **Industries imagery is no longer used.** The dedicated `/industries` page was removed in favour
> of the `/gallery` page; the `public/images/industries/` folder was deleted.

### team/  — people (trust + continuity). Optional but recommended.
| Filename | Dimensions | AR | Format | Shows |
|---|---|---|---|---|
| `anton-lubbe.jpg` | 800×800 | 1:1 | JPG | Anton Lubbe — Director & Shareholder |
| `monica-kruger.jpg` | 800×800 | 1:1 | JPG | Monica Kruger — Managing Director |
| `karl-lubbe.jpg` | 800×800 | 1:1 | JPG | Karl Lubbe — Production Director |
| `team-group.jpg` | 1600×1067 | 3:2 | JPG | Team / on the floor (optional) |

### certifications/  — the real proof (currently missing on live site)
| Filename | Dimensions | AR | Format | Shows |
|---|---|---|---|---|
| `iso-9001-certificate.jpg` | 1240×1754 | A4 (≈1:1.41) | JPG | Scan/photo of the **actual ISO 9001 certificate** (body, number, scope, expiry visible) |
| `iso-9001-badge.svg` | 512×512 | 1:1 | SVG | ISO 9001 badge/mark for trust bars |

> ⚠ Blocker: the ISO claim cannot appear as fact until the real certificate is supplied (or the
> certifying body + certificate number confirmed). See PROJECT_STATUS.md.

### gallery/  — general work photos (optional catch-all)
| Filename | Dimensions | AR | Format | Shows |
|---|---|---|---|---|
| `gallery-01.jpg` … `gallery-06.jpg` | 1200×900 | 4:3 | JPG | Additional shop/part photography |

### og/  — social share images (generated by us, not client photos)
| Filename | Dimensions | AR | Format | Shows |
|---|---|---|---|---|
| `og-default.jpg` | 1200×630 | 1.91:1 | JPG | Default OpenGraph/Twitter card (logo + tagline over a shop image) |
| `og-home.jpg` | 1200×630 | 1.91:1 | JPG | Homepage-specific card (optional; else falls back to default) |

---

**Status tracking lives in `config/images.ts`** (`status: "pending" | "ready"`). Run the site with all
`pending` and every area shows a labeled slot at the correct size — safe to build and deploy previews
before real photography arrives.
