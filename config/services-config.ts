/**
 * SERVICES CONFIG – Foxtron Engineering
 * Each service = one hub card + (for the priority ones) a spoke page.
 * Specs are [client-stated] from Foxtron's current site – confirm before launch.
 */

import { services as serviceImages } from "@/config/images";
import type { Faq } from "@/config/faqs-config";

export interface ServiceSpec {
  label: string;
  value: string;
}

export interface Service {
  slug: keyof typeof serviceImages | "cnc-machining" | "custom-components";
  name: string;
  /** one-line hub summary */
  summary: string;
  /** question-style H2 that the intro answers directly (AI-citable answer block) */
  question?: string;
  /** service-page intro paragraph – a self-contained 40–70 word answer to `question` */
  intro: string;
  /** service-specific FAQs (built ONLY from facts stated elsewhere on the site) */
  faqs?: Faq[];
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
      "High-precision fibre laser cutting with clean edges and repeatable accuracy across mild steel, stainless, aluminium, brass and copper.",
    question: "What can Foxtron laser cut?",
    intro:
      "Foxtron Engineering's fibre laser cuts sheets up to 3000 × 1500 mm: mild steel 0.6–22 mm, stainless steel 0.5–12 mm, aluminium 0.9–10 mm, brass 0.3–10 mm and copper 0.4–6 mm. It handles one-off profiles through to nested production runs, cut with clean, burr-minimised edges from your DXF, DWG, STEP or PDF files at our workshop in Centurion, Gauteng.",
    faqs: [
      {
        q: "What is the largest sheet you can laser cut?",
        a: "Our fibre laser bed takes sheets up to 3000 × 1500 mm, which suits large panels as well as nested production runs of smaller parts.",
      },
      {
        q: "How thick can you laser cut mild steel and stainless steel?",
        a: "As a guide, mild steel from 0.6 to 22 mm and stainless steel from 0.5 to 12 mm. Send your drawing and material and we'll confirm the exact capacity for your part.",
      },
      {
        q: "Do you laser cut one-off parts and prototypes?",
        a: "Yes. We cut single replacement parts and prototypes as well as full production runs, for businesses, OEMs and trade.",
      },
    ],
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
      "CNC press-brake bending for accurate angles, structural integrity and consistent, repeatable folds – from prototypes to production runs.",
    question: "What does Foxtron's CNC bending service do?",
    intro:
      "Foxtron Engineering folds sheet and plate on CNC press brakes at its ISO 9001:2015-certified workshop in Centurion, from single brackets to full production runs. Parts are usually laser-cut in-house first and then bent on the same floor, so there is no outsourcing between cutting and folding – and angles stay consistent across the whole batch.",
    faqs: [
      {
        q: "Can you bend parts that you have laser cut?",
        a: "Yes – that is our usual workflow. Parts are laser cut and then folded on our CNC press brakes in the same Centurion workshop, with no hand-off to another supplier.",
      },
      {
        q: "Do you do CNC bending for small quantities?",
        a: "Yes. We bend prototype and one-off quantities as well as full production runs, with CNC control keeping every fold in the batch consistent.",
      },
      {
        q: "What do I need to send for a bending quote?",
        a: "A DXF, DWG, STEP or PDF drawing with the material, thickness and quantity. No drawing yet? Send a sketch, photo or sample part and we'll help.",
      },
    ],
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
      "Professional MIG/TIG welding, fabrication and assembly of steel, stainless and aluminium – delivering finished, ready-to-use components.",
    question: "What welding and assembly work does Foxtron do?",
    intro:
      "Foxtron Engineering's welding and assembly bay in Centurion turns cut and folded parts into finished, ready-to-use components and sub-assemblies. We MIG and TIG weld steel, stainless steel and aluminium, fabricate frames and enclosures, install inserts and fit assemblies – and every job is quality-checked under our ISO 9001:2015 system before it leaves the floor.",
    faqs: [
      {
        q: "Which welding processes do you offer?",
        a: "MIG and TIG welding of steel, stainless steel and aluminium, as part of our in-house fabrication and assembly service.",
      },
      {
        q: "Can you supply finished, assembled components?",
        a: "Yes. We fabricate frames, enclosures and sub-assemblies, install inserts and assemble components so they arrive ready to use.",
      },
      {
        q: "Can you cut, bend and weld the same job?",
        a: "Yes. Laser cutting, CNC bending, welding and assembly all happen under one roof in Centurion, so there are no outsourcing delays between steps.",
      },
    ],
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
      "Efficient CNC punching for repeatable, cost-effective sheet metal components with consistent hole patterns and forms, at speed.",
    question: "When is CNC punching the right choice?",
    intro:
      "CNC punching is a fast, repeatable way to produce sheet metal components with consistent hole patterns and forms. At Foxtron Engineering in Centurion it is an efficient, cost-effective route for suitable high-volume parts, and sits alongside our fibre laser – so each job can be routed to the process that suits the part best.",
    faqs: [
      {
        q: "Is CNC punching cheaper than laser cutting?",
        a: "For suitable high-volume parts with repeated hole patterns and forms, punching is often the more cost-effective route. Send your drawing and quantity and we'll recommend the best process.",
      },
      {
        q: "What parts suit CNC punching?",
        a: "Sheet metal components that need consistent hole patterns and forms, produced in volume – where speed and repeatability matter most.",
      },
      {
        q: "Can punched parts be bent and assembled too?",
        a: "Yes. Punched parts can go straight on to CNC bending, welding and assembly in the same workshop.",
      },
    ],
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
