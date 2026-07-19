/**
 * SEO CONFIG — Foxtron Engineering
 * Per-page title/description. Titles < 60 chars, descriptions < 155.
 * Geo + service pattern, natural language (no keyword stuffing).
 */

import { site } from "@/config/site-config";

export const defaultSeo = {
  siteName: site.name,
  titleTemplate: "%s | Foxtron Engineering",
  defaultTitle: "Laser Cutting & Metal Fabrication Centurion | Foxtron Engineering",
  defaultDescription:
    "Precision laser cutting, CNC bending and metal fabrication in Centurion. From prototypes to production runs for business — request a quote today.",
  ogImageAlt: "Foxtron Engineering — precision sheet metal fabrication in Centurion",
};

export interface PageSeo {
  title: string;
  description: string;
  path: string;
}

export const pageSeo: Record<string, PageSeo> = {
  home: {
    title: "Laser Cutting & Metal Fabrication Centurion",
    description:
      "Precision laser cutting, CNC bending and metal fabrication in Centurion. Prototypes to production runs for business. Request a quote from Foxtron Engineering.",
    path: "/",
  },
  services: {
    title: "Fabrication Services — Laser, Bending, Welding",
    description:
      "Laser cutting, CNC bending, punching, welding and assembly under one roof in Centurion. See Foxtron Engineering's in-house fabrication capabilities.",
    path: "/services",
  },
  about: {
    title: "About Foxtron Engineering — Fabrication Since 1992",
    description:
      "A Centurion sheet metal fabrication partner since 1992, serving automotive, construction, electrical and OEM clients across Gauteng.",
    path: "/about",
  },
  gallery: {
    title: "Our Work — Fabrication Gallery",
    description:
      "See inside the Foxtron Engineering workshop in Centurion: machinery, laser cutting, CNC bending, welding and finished fabrication work.",
    path: "/gallery",
  },
  quote: {
    title: "Request a Quote — Upload Your Drawing",
    description:
      "Get a fabrication quote from Foxtron Engineering. Upload your DXF, DWG, STEP or PDF drawing and we'll respond within one business day.",
    path: "/quote",
  },
  contact: {
    title: "Contact Foxtron Engineering, Centurion",
    description:
      "Contact Foxtron Engineering in Sunderland Ridge, Centurion. Call 012 666 9933, email us, or request a fabrication quote across Gauteng.",
    path: "/contact",
  },
  faq: {
    title: "Fabrication FAQs — Materials, Lead Times, Files",
    description:
      "Common questions on materials, thicknesses, file formats, minimum orders and how to request a quote from Foxtron Engineering in Centurion.",
    path: "/faq",
  },
  thankYou: {
    title: "Thank You — We've Received Your Request",
    description: "Thanks for your enquiry. The Foxtron Engineering team will be in touch shortly.",
    path: "/thank-you",
  },
};
