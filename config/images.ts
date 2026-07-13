/**
 * CENTRALIZED IMAGE MANIFEST — Foxtron Engineering
 * ------------------------------------------------------------------
 * The SINGLE source of truth for every image on the site. Components must
 * import from here — never hardcode an image path in a component.
 *
 * Each entry declares the file path, intended dimensions (for CLS-safe slots),
 * alt text (SEO + a11y), and a status:
 *   - "pending" → no real file yet; <ImageSlot> renders a labeled placeholder
 *                 at the correct dimensions.
 *   - "ready"   → the real file exists in /public/images; render it.
 *
 * To go live with an image: drop the file into /public/images/<...> using the
 * exact filename in `src`, then flip `status` to "ready". See public/images/README.md.
 */

export type ImageStatus = "pending" | "ready";

export interface ManagedImage {
  /** Public path, resolves under /public. */
  src: string;
  /** Real, descriptive alt text (part/process). Required before status "ready". */
  alt: string;
  /** Intrinsic width in px — reserves layout to prevent CLS. */
  width: number;
  /** Intrinsic height in px. */
  height: number;
  /** Short human label shown on the blank slot until the real image arrives. */
  label: string;
  status: ImageStatus;
}

/** Helper: is a real file present for this image? */
export const isReady = (img: ManagedImage): boolean => img.status === "ready";

const img = (
  src: string,
  width: number,
  height: number,
  label: string,
  alt: string,
): ManagedImage => ({ src, width, height, label, alt, status: "pending" });

// ── Brand ───────────────────────────────────────────────────────────────────
export const logo = {
  primary: img("/images/logo/foxtron-logo.svg", 320, 80, "Foxtron logo", "Foxtron Engineering"),
  white: img("/images/logo/foxtron-logo-white.svg", 320, 80, "Foxtron logo (white)", "Foxtron Engineering"),
  icon: img("/images/logo/foxtron-icon.svg", 512, 512, "Foxtron icon", "Foxtron Engineering icon"),
} as const;

// ── Hero ─────────────────────────────────────────────────────────────────────
export const hero = {
  main: img(
    "/images/hero/hero-fabrication.jpg",
    1920,
    1080,
    "Hero — fabrication in action",
    "Precision sheet metal fabrication on the Foxtron Engineering workshop floor in Centurion",
  ),
  mobile: img(
    "/images/hero/hero-fabrication-mobile.jpg",
    1080,
    1350,
    "Hero (mobile)",
    "Foxtron Engineering laser cutting in progress",
  ),
} as const;

// ── Factory ──────────────────────────────────────────────────────────────────
export const factory = {
  floor1: img("/images/factory/factory-floor-01.jpg", 1600, 1067, "Workshop floor", "Foxtron Engineering workshop floor with fabrication machinery"),
  floor2: img("/images/factory/factory-floor-02.jpg", 1600, 1067, "Assembly area", "Foxtron Engineering assembly and finishing area"),
  exterior: img("/images/factory/factory-exterior.jpg", 1600, 1067, "Premises exterior", "Foxtron Engineering premises in Sunderland Ridge, Centurion"),
} as const;

// ── Machinery ────────────────────────────────────────────────────────────────
export const machinery = {
  laser: img("/images/machinery/laser-cutter.jpg", 1200, 900, "Laser cutter", "CNC laser cutting machine at Foxtron Engineering"),
  pressBrake: img("/images/machinery/press-brake.jpg", 1200, 900, "CNC press brake", "CNC press brake for sheet metal bending"),
  punch: img("/images/machinery/cnc-punch.jpg", 1200, 900, "CNC punch", "CNC punching machine for sheet metal components"),
  machining: img("/images/machinery/cnc-machine.jpg", 1200, 900, "CNC machining centre", "CNC machining centre"),
  welding: img("/images/machinery/welding-bay.jpg", 1200, 900, "Welding bay", "Welding and assembly bay"),
  rolling: img("/images/machinery/rolling-machine.jpg", 1200, 900, "Rolling machine", "Plate rolling machine for roll work"),
} as const;

// ── Services (keyed by service slug) ─────────────────────────────────────────
type ServiceSlug =
  | "laser-cutting"
  | "cnc-bending"
  | "cnc-punching"
  | "welding-assembly"
  | "machining";

const serviceImages = (slug: ServiceSlug, label: string, altHero: string, altDetail: string) => ({
  hero: img(`/images/services/${slug}/${slug}-hero.jpg`, 1600, 1067, `${label} — hero`, altHero),
  detail: img(`/images/services/${slug}/${slug}-detail.jpg`, 1200, 900, `${label} — detail`, altDetail),
});

export const services: Record<ServiceSlug, ReturnType<typeof serviceImages>> = {
  "laser-cutting": serviceImages(
    "laser-cutting",
    "Laser cutting",
    "Laser cutting mild steel sheet at Foxtron Engineering, Centurion",
    "Clean laser-cut edge on a finished sheet metal part",
  ),
  "cnc-bending": serviceImages(
    "cnc-bending",
    "CNC bending",
    "CNC press brake bending sheet metal at Foxtron Engineering",
    "Precision-bent sheet metal component",
  ),
  "cnc-punching": serviceImages(
    "cnc-punching",
    "CNC punching",
    "CNC punching machine forming sheet metal components",
    "Punched sheet metal component detail",
  ),
  "welding-assembly": serviceImages(
    "welding-assembly",
    "Welding & assembly",
    "Welding and assembly of a fabricated metal component",
    "Welded and assembled metal sub-assembly",
  ),
  machining: serviceImages(
    "machining",
    "Machining",
    "CNC machining of a metal component at Foxtron Engineering",
    "Machined metal part detail",
  ),
};

// ── Projects / portfolio ─────────────────────────────────────────────────────
export const projects: ManagedImage[] = Array.from({ length: 8 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return img(
    `/images/projects/project-${n}.jpg`,
    1200,
    900,
    `Project ${n}`,
    `Foxtron Engineering fabrication project ${n}`, // replace with real part/sector description per project
  );
});

// ── Industries ───────────────────────────────────────────────────────────────
export const industries = {
  automotive: img("/images/industries/automotive.jpg", 1200, 800, "Automotive", "Automotive sheet metal parts fabricated by Foxtron Engineering"),
  construction: img("/images/industries/construction.jpg", 1200, 800, "Construction", "Construction and architectural metal fabrication"),
  electrical: img("/images/industries/electrical.jpg", 1200, 800, "Electrical", "Electrical enclosures and panels"),
  oem: img("/images/industries/oem.jpg", 1200, 800, "OEM", "OEM sub-assembly and production parts"),
  generalEngineering: img("/images/industries/general-engineering.jpg", 1200, 800, "General engineering", "General engineering fabrication work"),
} as const;

// ── Team ─────────────────────────────────────────────────────────────────────
export const team = {
  anton: img("/images/team/anton-lubbe.jpg", 800, 800, "Anton Lubbe", "Anton Lubbe, Director & Shareholder at Foxtron Engineering"),
  monica: img("/images/team/monica-kruger.jpg", 800, 800, "Monica Kruger", "Monica Kruger, Managing Director at Foxtron Engineering"),
  karl: img("/images/team/karl-lubbe.jpg", 800, 800, "Karl Lubbe", "Karl Lubbe, Production Director at Foxtron Engineering"),
  group: img("/images/team/team-group.jpg", 1600, 1067, "Team", "The Foxtron Engineering team"),
} as const;

// ── Certifications ───────────────────────────────────────────────────────────
// NOTE: ISO claim may not render as fact until the real certificate is supplied.
export const certifications = {
  iso9001: img("/images/certifications/iso-9001-certificate.jpg", 1240, 1754, "ISO 9001 certificate", "Foxtron Engineering ISO 9001 quality management certificate"),
  iso9001Badge: img("/images/certifications/iso-9001-badge.svg", 512, 512, "ISO 9001", "ISO 9001 certified"),
} as const;

// ── Gallery ──────────────────────────────────────────────────────────────────
export const gallery: ManagedImage[] = Array.from({ length: 6 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return img(`/images/gallery/gallery-${n}.jpg`, 1200, 900, `Gallery ${n}`, `Foxtron Engineering fabrication work ${n}`);
});

// ── Open Graph (produced by us, not client photography) ──────────────────────
export const og = {
  default: img("/images/og/og-default.jpg", 1200, 630, "OG default", "Foxtron Engineering — precision sheet metal fabrication"),
  home: img("/images/og/og-home.jpg", 1200, 630, "OG home", "Foxtron Engineering — precision sheet metal fabrication in Centurion"),
} as const;

/** Flat registry — useful for audits ("which images are still pending?"). */
export const allImages: ManagedImage[] = [
  ...Object.values(logo),
  ...Object.values(hero),
  ...Object.values(factory),
  ...Object.values(machinery),
  ...Object.values(services).flatMap((s) => [s.hero, s.detail]),
  ...projects,
  ...Object.values(industries),
  ...Object.values(team),
  ...Object.values(certifications),
  ...gallery,
  ...Object.values(og),
];

export const pendingImages = (): ManagedImage[] => allImages.filter((i) => i.status === "pending");
