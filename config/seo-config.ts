/**
 * SEO CONFIG – Foxtron Engineering
 * Per-page title/description. Titles < 60 chars, descriptions < 155.
 * Geo + service pattern, natural language (no keyword stuffing).
 */

import { site } from "@/config/site-config";

export const defaultSeo = {
  siteName: site.name,
  titleTemplate: "%s | Foxtron Engineering",
  defaultTitle: "Laser Cutting & Metal Fabrication Centurion | Foxtron Engineering",
  defaultDescription:
    "Precision laser cutting, CNC bending and metal fabrication in Centurion. From prototypes to production runs for business – request a quote today.",
  ogImageAlt: "Foxtron Engineering – precision sheet metal fabrication in Centurion",
};

export interface PageSeo {
  title: string;
  description: string;
  path: string;
}

export const pageSeo: Record<string, PageSeo> = {
  home: {
    // absolute title (no template) – brand included explicitly, < 60 chars
    title: "Laser Cutting & Fabrication Centurion | Foxtron Engineering",
    description:
      "Precision laser cutting, CNC bending and metal fabrication in Centurion. Prototypes to production runs for business – request a quote today.",
    path: "/",
  },
  services: {
    title: "Laser, Bending & Welding Services",
    description:
      "Laser cutting, CNC bending, punching, welding and assembly under one roof in Centurion. See Foxtron Engineering's in-house fabrication capabilities.",
    path: "/services",
  },
  about: {
    title: "About – Metal Fabrication Since 1992",
    description:
      "A Centurion sheet metal fabrication partner since 1992, serving automotive, construction, electrical and OEM clients across Gauteng.",
    path: "/about",
  },
  gallery: {
    title: "Our Work – Fabrication Gallery",
    description:
      "See inside the Foxtron Engineering workshop in Centurion: machinery, laser cutting, CNC bending, welding and finished fabrication work.",
    path: "/gallery",
  },
  quote: {
    title: "Request a Quote – Upload Your Drawing",
    description:
      "Get a fabrication quote from Foxtron Engineering. Upload your DXF, DWG, STEP or PDF drawing and we'll respond within one business day.",
    path: "/quote",
  },
  contact: {
    title: "Contact Us – Centurion Workshop",
    description:
      "Contact Foxtron Engineering in Sunderland Ridge, Centurion. Call 012 666 9933, email us, or request a fabrication quote across Gauteng.",
    path: "/contact",
  },
  faq: {
    title: "FAQs – Materials, Lead Times & Files",
    description:
      "Common questions on materials, thicknesses, file formats, minimum orders and how to request a quote from Foxtron Engineering in Centurion.",
    path: "/faq",
  },
  privacy: {
    title: "Privacy Policy – POPIA",
    description:
      "How Foxtron Engineering collects, uses and protects personal information submitted through this website and our quote form, in line with POPIA.",
    path: "/privacy",
  },
  thankYou: {
    title: "Thank You – We've Received Your Request",
    description: "Thanks for your enquiry. The Foxtron Engineering team will be in touch shortly.",
    path: "/thank-you",
  },
};

/**
 * Last meaningful content change per route (ISO date). Drives sitemap <lastmod>
 * and the WebPage `dateModified` schema. UPDATE THE DATE WHEN A PAGE'S CONTENT CHANGES –
 * never stamp build time (crawlers learn to ignore dates that always change).
 */
export const pageUpdated: Record<string, string> = {
  "/": "2026-11-17",
  "/services": "2026-11-17",
  "/services/laser-cutting": "2026-11-17",
  "/services/cnc-bending": "2026-11-17",
  "/services/welding-assembly": "2026-11-17",
  "/services/cnc-punching": "2026-11-17",
  "/gallery": "2026-10-15",
  "/about": "2026-11-17",
  "/quote": "2026-11-17",
  "/contact": "2026-10-15",
  "/faq": "2026-10-15",
  "/privacy": "2026-11-17",
};
