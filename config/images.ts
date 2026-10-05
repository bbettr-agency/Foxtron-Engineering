/**
 * CENTRALIZED IMAGE MANIFEST – Foxtron Engineering
 * ------------------------------------------------------------------
 * The SINGLE source of truth for every image on the site. Components must
 * import from here – never hardcode an image path in a component.
 *
 * Images are redistributed across SECTIONS here, in config – the folder a file
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

/** ready image – real client file assigned. */
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
  // No reversed/white variant supplied – invert `primary` via CSS on dark surfaces until one exists.
  white: slot("/images/logo/foxtron-logo-white.svg", 300, 50, "Foxtron logo (white)", "Foxtron Engineering"),
  // No square icon/monogram supplied – the wordmark is too wide to crop to a favicon. Needs a square mark.
  icon: slot("/images/logo/foxtron-icon.svg", 512, 512, "Foxtron icon", "Foxtron Engineering icon"),
} as const;

// ── Hero (LCP) ───────────────────────────────────────────────────────────────
export const hero = {
  // Branded operator at the fiber laser cell – cinematic, on-brand, back-to-camera.
  main: ready(
    "/images/factory/Untitled-23022.jpg",
    1920,
    1080,
    "Hero – laser cutting in action",
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
  // No dedicated turret-punch photo supplied – using an authentic wide view of the
  // CNC production floor. Alt text describes what is actually shown.
  punch: ready("/images/factory/Untitled-23127.jpg", 1200, 900, "CNC punch", "CNC machinery on the Foxtron Engineering production floor"),
  // No CNC mill/lathe photo supplied – using a genuine finishing-process photo.
  machining: ready("/images/factory/Untitled-23093.jpg", 1200, 900, "Machining & finishing", "Finishing a fabricated sheet metal component at Foxtron Engineering"),
  welding: ready("/images/factory/Untitled-23101.jpg", 1200, 900, "Welding equipment", "MIG/TIG welding equipment at the Foxtron Engineering welding bay"),
  // Only a single context shot of rolling exists – usable but not a strong solo machine photo.
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
    hero: ready("/images/factory/Untitled-23011.jpg", 1600, 1067, "Laser cutting – hero", "Fiber laser cutting head cutting sheet metal with sparks at Foxtron Engineering"),
    detail: ready("/images/factory/Untitled-23010.jpg", 1200, 900, "Laser cutting – detail", "Close-up of the fiber laser cutting head over a nested sheet"),
  },
  "cnc-bending": {
    hero: ready("/images/factory/Untitled-23126.jpg", 1600, 1067, "CNC bending – hero", "Operators folding a large sheet metal panel on a Bystronic CNC press brake"),
    detail: ready("/images/factory/Untitled-23128.jpg", 1200, 900, "CNC bending – detail", "Operator at the CNC press brake control panel during a bending job"),
  },
  "cnc-punching": {
    // No dedicated turret-punch photo supplied – using authentic CNC sheet-metal
    // machinery + a real perforated/punched sheet component. Alt text stays honest.
    hero: ready("/images/factory/Untitled-23127.jpg", 1600, 1067, "CNC punching – hero", "CNC sheet metal machinery on the Foxtron Engineering production floor"),
    detail: ready("/images/factory/Untitled-23131.jpg", 1200, 900, "CNC punching – detail", "Perforated sheet metal components at Foxtron Engineering"),
  },
  "welding-assembly": {
    hero: ready("/images/factory/Untitled-23077.jpg", 1600, 1067, "Welding & assembly – hero", "Welding a steel tube frame under spotlight at the Foxtron Engineering assembly bench"),
    detail: ready("/images/factory/Untitled-23095.jpg", 1200, 900, "Welding & assembly – detail", "Grinding and finishing a fabricated sheet metal enclosure with sparks"),
  },
  machining: {
    // "Machining & finishing" – authentic finishing / surface-treatment photos
    // (matches the certified scope: surface treatment). No false "mill/lathe" claims.
    hero: ready("/images/factory/Untitled-23093.jpg", 1600, 1067, "Machining & finishing – hero", "Finishing a fabricated sheet metal component at Foxtron Engineering"),
    detail: ready("/images/factory/Untitled-23085.jpg", 1200, 900, "Machining & finishing – detail", "Grinding and finishing a fabricated metal part"),
  },
};

// Finished parts/portfolio imagery now lives in the "Finished Work" gallery
// category below (single source – no duplicate projects list).

// ── Gallery categories – the /gallery page + homepage preview ────────────────
// All authentic uploaded Foxtron photography, grouped by what the image shows.
export interface GalleryCategory {
  slug: string;
  name: string;
  blurb: string;
  images: ManagedImage[];
}

const g = (file: string, label: string, alt: string, w = 1200, h = 900) =>
  ready(`/images/factory/${file}`, w, h, label, alt);

export const galleryCategories: GalleryCategory[] = [
  {
    slug: "machinery",
    name: "Machinery",
    blurb: "The CNC equipment behind every job – laser, press brakes, welding and forming.",
    images: [
      g("Untitled-23047.jpg", "Fibre laser cutter", "Fibre laser cutting machine at Foxtron Engineering"),
      g("Untitled-23117.jpg", "Fibre laser machine", "Fibre laser cutting machine on the Foxtron workshop floor"),
      g("Untitled-23118.jpg", "CNC press brakes", "Trumpf CNC press brakes for sheet metal bending"),
      g("Untitled-23132.jpg", "Bystronic press brake", "Bystronic CNC press brake in operation"),
      g("Untitled-23048.jpg", "Laser cutting system", "Fibre laser cutting system with dust extraction"),
      g("Untitled-23101.jpg", "Welding equipment", "MIG and TIG welding equipment at the welding bay"),
      g("Untitled-23127.jpg", "CNC production floor", "CNC machinery across the Foxtron production floor"),
      g("Untitled-23102.jpg", "Roll work & forming", "Roll work and forming in the Foxtron workshop"),
    ],
  },
  {
    slug: "laser-cutting",
    name: "Laser Cutting",
    blurb: "Fibre laser cutting in action – clean edges across steel, stainless and aluminium.",
    images: [
      g("Untitled-23011.jpg", "Cutting with sparks", "Fibre laser cutting head cutting sheet metal with sparks"),
      g("Untitled-23010.jpg", "Cutting head", "Close-up of the fibre laser cutting head over a nested sheet"),
      g("Untitled-23037.jpg", "Laser in action", "Laser cutting head firing on the sheet bed"),
      g("Untitled-23013.jpg", "Spark detail", "Laser cutting head mid-cut with sparks"),
      g("Untitled-23008.jpg", "Loading the bed", "Operator loading sheet onto the laser cutting bed"),
      g("Untitled-23040.jpg", "Removing cut parts", "Operator removing laser-cut parts from the nest"),
      g("Untitled-23049.jpg", "Cutting bed", "The laser cutting bed and extraction system"),
      g("Untitled-23019.jpg", "At the controls", "Operator at the laser cutting machine controls"),
    ],
  },
  {
    slug: "cnc-bending",
    name: "CNC Bending",
    blurb: "Press-brake folding – accurate, repeatable angles from prototype to production.",
    images: [
      g("Untitled-23126.jpg", "Folding a panel", "Operators folding a large sheet metal panel on a CNC press brake"),
      g("Untitled-23125.jpg", "Bending in progress", "Bending a large panel on the Bystronic press brake"),
      g("Untitled-23124.jpg", "Long-sheet bending", "Two operators bending a long sheet on the press brake"),
      g("Untitled-23128.jpg", "CNC controls", "Operator at the CNC press brake control panel"),
      g("Untitled-23119.jpg", "Press brake work", "CNC press brake with bent parts on the bench"),
      g("Untitled-23122.jpg", "Bending department", "The CNC bending department at Foxtron Engineering"),
    ],
  },
  {
    slug: "welding-assembly",
    name: "Welding & Assembly",
    blurb: "MIG and TIG welding, fabrication and fitting – parts finished ready to use.",
    images: [
      g("Untitled-23077.jpg", "Tube frame welding", "Welding a steel tube frame at the assembly bench"),
      g("Untitled-23067.jpg", "Live arc", "Welder mid-arc with sparks on a fabricated part"),
      g("Untitled-23055.jpg", "Welding a fixture", "Welder working on a clamped fixture with a live arc"),
      g("Untitled-23061.jpg", "Welding bay", "The Foxtron Engineering welding bay"),
      g("Untitled-23085.jpg", "Finishing sparks", "Grinding and finishing a fabricated part"),
      g("Untitled-23103.jpg", "Frame fabrication", "Welded steel frame on the assembly table"),
      g("Untitled-23141.jpg", "At the bench", "Welder at the fabrication bench"),
      g("Untitled-23093.jpg", "Grinding & finishing", "Finishing a fabricated sheet metal enclosure"),
    ],
  },
  {
    slug: "factory",
    name: "Factory",
    blurb: "Inside the Sunderland Ridge workshop – the floor, the space and the team at work.",
    images: [
      g("Untitled-23082.jpg", "Workshop bay", "Forklift moving through the Foxtron Engineering workshop"),
      g("Untitled-23083.jpg", "Workshop floor", "Wide view of the Foxtron fabrication workshop"),
      g("Untitled-23016.jpg", "Laser cell", "The fibre laser cutting cell in the workshop"),
      g("Untitled-23018.jpg", "Production floor", "The Foxtron production floor in daylight"),
      g("Untitled-23092.jpg", "The workshop", "Wide view of the Foxtron Engineering workshop and roller doors"),
      g("Untitled-23090.jpg", "Logistics", "Forklift and fabrication work on the Foxtron floor"),
      g("Untitled-23106.jpg", "Fabrication in progress", "Fabrication in progress across the workshop"),
      g("Untitled-23059.jpg", "Welding area", "The welding area of the Foxtron workshop"),
    ],
  },
  {
    slug: "finished-work",
    name: "Finished Work",
    blurb: "Real parts and assemblies – laser-cut, folded, welded and finished in Centurion.",
    images: [
      g("Untitled-23098.jpg", "Fabricated enclosure", "Completed fabricated sheet metal housing with machined bore"),
      g("Untitled-23028.jpg", "Laser-cut bracket", "Laser-cut steel bracket with precision bore"),
      g("Untitled-23129.jpg", "Laser-cut parts", "Stacks of precision laser-cut sheet metal parts"),
      g("Untitled-23130.jpg", "Nested parts", "Laser-cut components stacked on the workshop bench"),
      g("Untitled-23057.jpg", "Steel frame", "Welded and fabricated steel frame assembly"),
      g("Untitled-23058.jpg", "Frame assembly", "Fabricated vertical steel frame at the welding station"),
      g("Untitled-23029.jpg", "Machined flange", "Inspecting a machined round flange component"),
      g("Untitled-23131.jpg", "Perforated panels", "Stacked perforated sheet metal panels"),
    ],
  },
];

/** Flat list of every gallery image. */
export const galleryAll: ManagedImage[] = galleryCategories.flatMap((c) => c.images);

/** One representative image per category – used by the homepage preview. */
export const galleryPreview = galleryCategories.map((c) => ({
  slug: c.slug,
  name: c.name,
  blurb: c.blurb,
  image: c.images[0],
  count: c.images.length,
}));

// ── Team ─────────────────────────────────────────────────────────────────────
// 7 studio portraits supplied; identities NOT yet confirmed by the client, so
// named-leader slots stay pending (we will not label a face with an unverified
// name). Until then, `teamRoster` holds all 7 as an un-named team grid.
// Identities not published without client confirmation – individual portraits
// are shown unnamed via `teamRoster`. Only the group photo is keyed here.
export const team = {
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
  // Full ISO 9001:2015 certificate (AfriCert) – square SVG canvas, shown object-contain.
  iso9001: ready("/images/certifications/iso-9001.svg", 1000, 1000, "ISO 9001:2015 certificate", "Foxtron Engineering (Pty) Ltd ISO 9001:2015 certificate issued by AfriCert, certificate number 2024042201"),
  // Assurance mark badge (black on light surfaces).
  assuranceMark: ready("/images/certifications/foxtron-assurance-mark-black.png", 1709, 880, "ISO 9001 Quality Management", "ISO 9001 Quality Management assurance mark – AfriCert Certification and Assurance, certificate 2024042201"),
  // White variant for dark surfaces.
  assuranceMarkWhite: ready("/images/certifications/foxtron-assurance-mark-white.png", 1709, 880, "ISO 9001 Quality Management", "ISO 9001 Quality Management assurance mark (white) – AfriCert Certification and Assurance"),
} as const;

/** Path to the downloadable certificate (not an image slot). */
export const certificatePdf = "/images/certifications/foxtron-iso-9001-certificate.pdf";

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
  default: ready("/images/og/og-default.jpg", 1200, 630, "OG default", "Foxtron Engineering – precision sheet metal fabrication"),
  home: ready("/images/og/og-home.jpg", 1200, 630, "OG home", "Foxtron Engineering – precision sheet metal fabrication in Centurion"),
} as const;

/** Flat registry – useful for audits ("which images are still pending?"). */
export const allImages: ManagedImage[] = [
  ...Object.values(logo),
  ...Object.values(hero),
  ...Object.values(factory),
  ...Object.values(machinery),
  ...Object.values(services).flatMap((s) => [s.hero, s.detail]),
  ...galleryAll,
  ...Object.values(team),
  ...teamRoster,
  ...Object.values(certifications),
  ...gallery,
  ...Object.values(og),
];

export const pendingImages = (): ManagedImage[] => allImages.filter((i) => i.status === "pending");
export const readyImages = (): ManagedImage[] => allImages.filter((i) => i.status === "ready");
