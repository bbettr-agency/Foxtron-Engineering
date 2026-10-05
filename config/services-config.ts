/**
 * SERVICES CONFIG – Foxtron Engineering
 * Each service = one hub card + (for the priority ones) a spoke page.
 * Specs are [client-stated] from Foxtron's current site – confirm before launch.
 */

import { services as serviceImages } from "@/config/images";

export interface ServiceSpec {
  label: string;
  value: string;
}

export interface Service {
  slug: keyof typeof serviceImages | "cnc-machining" | "custom-components";
  name: string;
  /** one-line hub summary */
  summary: string;
  /** service-page intro paragraph */
  intro: string;
  /** bullet capabilities/benefits */
  points: string[];
  /** spec table (client-stated) */
  specs?: ServiceSpec[];
  /** primary SEO term for the page */
  keyword: string;
  /** does a dedicated spoke page exist? */
  hasPage: boolean;
  /** image config key (services record) – undefined if no imagery yet */
  imageKey?: keyof typeof serviceImages;
}

export const services: Service[] = [
  {
    slug: "laser-cutting",
    name: "Laser Cutting",
    summary:
      "High-precision fibre laser cutting with clean edges and repeatable accuracy across a wide range of metals.",
    intro:
      "Our fibre laser cutting delivers clean, burr-minimised edges and tight, repeatable accuracy – from intricate one-off profiles to high-volume nested production. We cut mild steel, stainless, aluminium, brass and copper to your drawings.",
    points: [
      "Fibre laser cutting for mild steel, stainless, aluminium, brass and copper",
      "Large-format bed for sizeable sheets and nested production runs",
      "Clean edges and consistent, repeatable profiles",
      "Cut straight from your DXF, DWG, STEP or PDF drawings",
    ],
    // [client-stated] – from Foxtron's current site; confirm current machine capacity
    specs: [
      { label: "Bed size (up to)", value: "3000 × 1500 mm" },
      { label: "Mild steel", value: "0.6 – 22 mm" },
      { label: "Stainless steel", value: "0.5 – 12 mm" },
      { label: "Aluminium", value: "0.9 – 10 mm" },
      { label: "Brass / Copper", value: "0.3 – 10 mm / 0.4 – 6 mm" },
    ],
    keyword: "laser cutting Centurion",
    hasPage: true,
    imageKey: "laser-cutting",
  },
  {
    slug: "cnc-bending",
    name: "CNC Bending",
    summary:
      "CNC press-brake bending for accurate angles, structural integrity and consistent, repeatable folds.",
    intro:
      "Using CNC press brakes, we fold sheet and plate to precise angles with consistent results across the batch – from single brackets to full production quantities.",
    points: [
      "CNC press-brake folding for accurate, repeatable angles",
      "Handles prototype quantities through to production runs",
      "Consistent results across the full batch",
      "Works seamlessly with our in-house laser cutting",
    ],
    keyword: "CNC bending services",
    hasPage: true,
    imageKey: "cnc-bending",
  },
  {
    slug: "welding-assembly",
    name: "Welding & Assembly",
    summary:
      "Professional MIG/TIG welding, fabrication and assembly – delivering finished, ready-to-use components.",
    intro:
      "Our welding and assembly bay turns cut and folded parts into finished, ready-to-use components and sub-assemblies – welded, fitted and quality-checked before they leave the floor.",
    points: [
      "MIG and TIG welding of steel, stainless and aluminium",
      "Fabrication of frames, enclosures and sub-assemblies",
      "Assembly and insert installation for finished components",
      "Quality-checked before dispatch",
    ],
    keyword: "industrial welding and assembly",
    hasPage: true,
    imageKey: "welding-assembly",
  },
  {
    slug: "cnc-punching",
    name: "CNC Punching",
    summary:
      "Efficient CNC punching for repeatable, cost-effective sheet metal components at speed.",
    intro:
      "CNC punching gives us fast, repeatable forming of sheet metal components – an efficient, cost-effective route for the right high-volume parts.",
    points: [
      "Fast, repeatable sheet metal punching",
      "Cost-effective for suitable high-volume parts",
      "Consistent hole patterns and forms",
    ],
    keyword: "CNC punching services",
    hasPage: true,
    imageKey: "cnc-punching", // imagery pending → placeholder
  },
  {
    slug: "cnc-machining",
    name: "Machining & Finishing",
    summary:
      "Additional machining and surface finishing to enhance durability, function and overall part quality.",
    intro:
      "Machining and finishing services complete the job – enhancing durability, function and the final quality of your components.",
    points: [
      "Machining and finishing operations",
      "Surface treatment for durability and function",
      "Final-quality finishing on fabricated parts",
    ],
    keyword: "precision machining",
    hasPage: false, // folded into hub – imagery + scope pending
    imageKey: "machining", // imagery pending → placeholder
  },
  {
    slug: "custom-components",
    name: "Custom Components & Production Runs",
    summary:
      "End-to-end fabrication from a single prototype to full production – for businesses and trade.",
    intro:
      "From a single replacement part or prototype through to full production runs, we handle the whole job in-house – cut, folded, welded, assembled and finished.",
    points: [
      "One-off prototypes and single replacement parts",
      "Low-volume batches through to high-volume production",
      "Complete in-house workflow – cut, bend, weld, assemble, finish",
      "For businesses, OEMs and trade",
    ],
    keyword: "custom metal fabrication",
    hasPage: false, // represented on hub + home; no standalone page initially
  },
];

export const serviceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

/** Services that get a dedicated SEO spoke page. */
export const servicePages = services.filter((s) => s.hasPage);
