/**
 * CENTRALIZED IMAGE MANIFEST — Foxtron Engineering
 * ------------------------------------------------------------------
 * The SINGLE source of truth for every image on the site. Components must
 * import from here — never hardcode an image path in a component.
 *
 * Images are redistributed across SECTIONS here, in config — the folder a file
 * was uploaded into does NOT dictate where it is used. Client originals in
 * /public/images/factory and /public/images/team are never renamed or moved;
 * we simply reference them by their real path and let next/image optimize +
 * `object-cover` crop them to each slot's shape.
 *
 * status:
 *   - "ready"   → a real file is assigned; render it.
 *   - "pending" → no suitable client image yet; <ImageSlot> renders a labeled
 *                 placeholder at the correct dimensions (no broken images, no CLS).
 *
 * width/height describe the SLOT's intended shape (used for aspect-ratio +
 * CLS reservation); `object-cover` crops the real photo to fit without distortion.
 * See public/images/README.md and docs/IMAGE-INVENTORY.md.
 */

export type ImageStatus = "pending" | "ready";

export interface ManagedImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  label: string;
  status: ImageStatus;
}

export const isReady = (img: ManagedImage): boolean => img.status === "ready";

/** pending slot */
const slot = (
  src: string,
  width: number,
  height: number,
  label: string,
  alt: string,
): ManagedImage => ({ src, width, height, label, alt, status: "pending" });

/** ready image — real client file assigned. */
const ready = (
  src: string,
  width: number,
  height: number,
  label: string,
  alt: string,
): ManagedImage => ({ src, width, height, label, alt, status: "ready" });

// ── Brand ───────────────────────────────────────────────────────────────────
export const logo = {
  primary: ready("/images/logo/foxtron-logo.svg", 300, 50, "Foxtron logo", "Foxtron Engineering"),
  // No reversed/white variant supplied — invert `primary` via CSS on dark surfaces until one exists.
  white: slot("/images/logo/foxtron-logo-white.svg", 300, 50, "Foxtron logo (white)", "Foxtron Engineering"),
  // No square icon/monogram supplied — the wordmark is too wide to crop to a favicon. Needs a square mark.
  icon: slot("/images/logo/foxtron-icon.svg", 512, 512, "Foxtron icon", "Foxtron Engineering icon"),
} as const;

// ── Hero (LCP) ───────────────────────────────────────────────────────────────
export const hero = {
  // Branded operator at the fiber laser cell — cinematic, on-brand, back-to-camera.
  main: ready(
    "/images/factory/Untitled-23022.jpg",
    1920,
    1080,
    "Hero — laser cutting in action",
    "Foxtron Engineering operator running the fiber laser cutter at the Centurion workshop",
  ),
  // Reuses `main` (object-cover) on mobile until a dedicated portrait crop is produced.
  mobile: slot("/images/hero/hero-fabrication-mobile.jpg", 1080, 1350, "Hero (mobile)", "Foxtron Engineering laser cutting in progress"),
} as const;

// ── Factory ──────────────────────────────────────────────────────────────────
export const factory = {
  floor1: ready("/images/factory/Untitled-23046.jpg", 1600, 1067, "Workshop floor", "The Foxtron Engineering workshop floor with the fiber laser cutting cell"),
  floor2: ready("/images/factory/Untitled-23083.jpg", 1600, 1067, "Workshop bay", "Wide view of the Foxtron Engineering fabrication workshop with forklift and work benches"),
  // No clean exterior/building shot supplied.
  exterior: slot("/images/factory/factory-exterior.jpg", 1600, 1067, "Premises exterior", "Foxtron Engineering premises in Sunderland Ridge, Centurion"),
} as const;

// ── Machinery ────────────────────────────────────────────────────────────────
export const machinery = {
  laser: ready("/images/factory/Untitled-23047.jpg", 1200, 900, "Fiber laser cutter", "Foxtron Engineering fiber laser cutting machine"),
  pressBrake: ready("/images/factory/Untitled-23118.jpg", 1200, 900, "CNC press brakes", "Trumpf TruBend CNC press brakes for sheet metal bending at Foxtron Engineering"),
  // No dedicated turret-punch photo supplied.
  punch: slot("/images/machinery/cnc-punch.jpg", 1200, 900, "CNC punch", "CNC punching machine for sheet metal components"),
  // No CNC mill/lathe photo supplied.
  machining: slot("/images/machinery/cnc-machine.jpg", 1200, 900, "CNC machining centre", "CNC machining centre"),
  welding: ready("/images/factory/Untitled-23101.jpg", 1200, 900, "Welding equipment", "MIG/TIG welding equipment at the Foxtron Engineering welding bay"),
  // Only a single context shot of rolling exists — usable but not a strong solo machine photo.
  rolling: ready("/images/factory/Untitled-23102.jpg", 1200, 900, "Roll work", "Roll work and forming in the Foxtron Engineering workshop"),
} as const;

// ── Services (keyed by service slug) ─────────────────────────────────────────
type ServiceSlug =
  | "laser-cutting"
  | "cnc-bending"
  | "cnc-punching"
  | "welding-assembly"
  | "machining";

interface ServiceImagePair {
  hero: ManagedImage;
  detail: ManagedImage;
}

export const services: Record<ServiceSlug, ServiceImagePair> = {
  "laser-cutting": {
    hero: ready("/images/factory/Untitled-23011.jpg", 1600, 1067, "Laser cutting — hero", "Fiber laser cutting head cutting sheet metal with sparks at Foxtron Engineering"),
    detail: ready("/images/factory/Untitled-23010.jpg", 1200, 900, "Laser cutting — detail", "Close-up of the fiber laser cutting head over a nested sheet"),
  },
  "cnc-bending": {
    hero: ready("/images/factory/Untitled-23126.jpg", 1600, 1067, "CNC bending — hero", "Operators folding a large sheet metal panel on a Bystronic CNC press brake"),
    detail: ready("/images/factory/Untitled-23128.jpg", 1200, 900, "CNC bending — detail", "Operator at the CNC press brake control panel during a bending job"),
  },
  "cnc-punching": {
    // No CNC punching photography supplied.
    hero: slot("/images/services/cnc-punching/cnc-punching-hero.jpg", 1600, 1067, "CNC punching — hero", "CNC punching machine forming sheet metal components"),
    detail: slot("/images/services/cnc-punching/cnc-punching-detail.jpg", 1200, 900, "CNC punching — detail", "Punched sheet metal component detail"),
  },
  "welding-assembly": {
    hero: ready("/images/factory/Untitled-23077.jpg", 1600, 1067, "Welding & assembly — hero", "Welding a steel tube frame under spotlight at the Foxtron Engineering assembly bench"),
    detail: ready("/images/factory/Untitled-23095.jpg", 1200, 900, "Welding & assembly — detail", "Grinding and finishing a fabricated sheet metal enclosure with sparks"),
  },
  machining: {
    // No CNC mill/lathe machining photography supplied.
    hero: slot("/images/services/machining/machining-hero.jpg", 1600, 1067, "Machining — hero", "CNC machining of a metal component"),
    detail: slot("/images/services/machining/machining-detail.jpg", 1200, 900, "Machining — detail", "Machined metal part detail"),
  },
};

// ── Projects / portfolio (real finished parts & assemblies) ──────────────────
export const projects: ManagedImage[] = [
  ready("/images/factory/Untitled-23098.jpg", 1200, 900, "Fabricated enclosure", "Completed fabricated sheet metal housing with machined bore"),
  ready("/images/factory/Untitled-23028.jpg", 1200, 900, "Laser-cut bracket", "Laser-cut steel bracket with precision bore"),
  ready("/images/factory/Untitled-23129.jpg", 1200, 900, "Laser-cut parts", "Stacks of precision laser-cut sheet metal parts"),
  ready("/images/factory/Untitled-23130.jpg", 1200, 900, "Nested cut parts", "Laser-cut components stacked on the workshop bench"),
  ready("/images/factory/Untitled-23057.jpg", 1200, 900, "Fabricated steel frame", "Welded and fabricated steel frame assembly"),
  ready("/images/factory/Untitled-23103.jpg", 1200, 900, "Welded frame", "Welded rectangular steel frame on the assembly table"),
  ready("/images/factory/Untitled-23029.jpg", 1200, 900, "Machined flange", "Inspecting a machined round flange component"),
  ready("/images/factory/Untitled-23058.jpg", 1200, 900, "Steel frame assembly", "Fabricated vertical steel frame at the welding station"),
];

// ── Industries (no sector-specific photography supplied yet) ─────────────────
export const industries = {
  automotive: slot("/images/industries/automotive.jpg", 1200, 800, "Automotive", "Automotive sheet metal parts fabricated by Foxtron Engineering"),
  construction: slot("/images/industries/construction.jpg", 1200, 800, "Construction", "Construction and architectural metal fabrication"),
  electrical: slot("/images/industries/electrical.jpg", 1200, 800, "Electrical", "Electrical enclosures and panels"),
  oem: slot("/images/industries/oem.jpg", 1200, 800, "OEM", "OEM sub-assembly and production parts"),
  generalEngineering: slot("/images/industries/general-engineering.jpg", 1200, 800, "General engineering", "General engineering fabrication work"),
} as const;

// ── Team ─────────────────────────────────────────────────────────────────────
// 7 studio portraits supplied; identities NOT yet confirmed by the client, so
// named-leader slots stay pending (we will not label a face with an unverified
// name). Until then, `teamRoster` holds all 7 as an un-named team grid.
export const team = {
  anton: slot("/images/team/anton-lubbe.jpg", 800, 1000, "Anton Lubbe", "Anton Lubbe, Director & Shareholder at Foxtron Engineering"),
  monica: slot("/images/team/monica-kruger.jpg", 800, 1000, "Monica Kruger", "Monica Kruger, Managing Director at Foxtron Engineering"),
  karl: slot("/images/team/karl-lubbe.jpg", 800, 1000, "Karl Lubbe", "Karl Lubbe, Production Director at Foxtron Engineering"),
  group: ready("/images/factory/Untitled-23111.jpg", 1600, 1067, "The Foxtron team", "The Foxtron Engineering team at the Centurion workshop"),
} as const;

/** All 7 supplied studio portraits (identity unconfirmed). Ordered by strongest first. */
export const teamRoster: ManagedImage[] = [
  ready("/images/team/Untitled-23137.jpg", 800, 1000, "Team member", "Foxtron Engineering team member"),
  ready("/images/team/Untitled-23133.jpg", 800, 1000, "Team member", "Foxtron Engineering team member"),
  ready("/images/team/Untitled-23136.jpg", 800, 1000, "Team member", "Foxtron Engineering team member"),
  ready("/images/team/Untitled-23135.jpg", 800, 1000, "Team member", "Foxtron Engineering team member"),
  ready("/images/team/Untitled-23139.jpg", 800, 1000, "Team member", "Foxtron Engineering team member"),
  ready("/images/team/Untitled-23138.jpg", 800, 1000, "Team member", "Foxtron Engineering team member"),
  ready("/images/team/Untitled-23140.jpg", 800, 1000, "Team member", "Foxtron Engineering team member"),
];

// ── Certifications (real ISO certificate still required) ─────────────────────
export const certifications = {
  iso9001: slot("/images/certifications/iso-9001-certificate.jpg", 1240, 1754, "ISO 9001 certificate", "Foxtron Engineering ISO 9001 quality management certificate"),
  iso9001Badge: slot("/images/certifications/iso-9001-badge.svg", 512, 512, "ISO 9001", "ISO 9001 certified"),
} as const;

// ── Gallery (general work photography) ───────────────────────────────────────
export const gallery: ManagedImage[] = [
  ready("/images/factory/Untitled-23016.jpg", 1200, 900, "Laser cell", "The fiber laser cutting cell at Foxtron Engineering"),
  ready("/images/factory/Untitled-23061.jpg", 1200, 900, "Welding bay", "Welding bay with live arc at Foxtron Engineering"),
  ready("/images/factory/Untitled-23090.jpg", 1200, 900, "Workshop logistics", "Forklift and fabrication work on the Foxtron Engineering floor"),
  ready("/images/factory/Untitled-23093.jpg", 1200, 900, "Finishing", "Grinding and finishing a fabricated part with sparks"),
  ready("/images/factory/Untitled-23068.jpg", 1200, 900, "Fabrication team", "A Foxtron Engineering fabricator at the welding bench"),
  ready("/images/factory/Untitled-23106.jpg", 1200, 900, "Fabrication floor", "Fabrication in progress across the Foxtron Engineering workshop"),
];

// ── Open Graph (produced by us; compose from logo + a workshop photo) ────────
export const og = {
  default: slot("/images/og/og-default.jpg", 1200, 630, "OG default", "Foxtron Engineering — precision sheet metal fabrication"),
  home: slot("/images/og/og-home.jpg", 1200, 630, "OG home", "Foxtron Engineering — precision sheet metal fabrication in Centurion"),
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
  ...teamRoster,
  ...Object.values(certifications),
  ...gallery,
  ...Object.values(og),
];

export const pendingImages = (): ManagedImage[] => allImages.filter((i) => i.status === "pending");
export const readyImages = (): ManagedImage[] => allImages.filter((i) => i.status === "ready");
