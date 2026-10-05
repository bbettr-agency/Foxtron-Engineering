/**
 * CONTENT CONFIG – Foxtron Engineering
 * Trust proof, stats, testimonials, differentiators, process.
 * Only [verified]/[client-stated] facts. No fabricated stats or reviews.
 */

import { site } from "@/config/site-config";

const yearsInBusiness = new Date().getFullYear() - site.foundedYear; // derived from [client-stated] 1992

// ── Headline stats (honest; derived from verified facts) ──
export const stats = [
  { value: yearsInBusiness, suffix: "+", label: "Years in fabrication", note: "Established 1992" },
  { value: 6, suffix: "", label: "In-house capabilities", note: "Cut · bend · punch · weld · assemble · finish" },
  { value: 5, suffix: "", label: "Metals cut", note: "Steel, stainless, aluminium, brass, copper" },
  { value: null, suffix: "", label: "Prototype to production", note: "One-offs to full runs", displayValue: "1→∞" },
] as const;

// ── Differentiators (each verifiable) ──
export const differentiators = [
  {
    title: "Everything in-house",
    body: "Laser cutting, CNC bending, punching, welding, assembly and finishing under one roof – no outsourcing, no hand-offs, tighter control of quality and lead time.",
  },
  {
    title: "Prototype to production",
    body: "From a single replacement part or prototype to full production runs – we're set up for both, for businesses and trade.",
  },
  {
    title: "Precision you can repeat",
    body: "Fibre laser accuracy and CNC-controlled bending mean clean edges and consistent results across the whole batch.",
  },
  {
    title: "Established since 1992",
    body: "Three decades of fabrication experience for automotive, construction, electrical, OEM and general engineering clients across Gauteng.",
  },
];

// ── Testimonials – ONLY the two genuine reviews from the live site ──
export const testimonials = [
  { quote: "Very speedy service!!! Will always return.", name: "Riaan Rademan", source: "Google review" },
  { quote: "Great service! All the staff are friendly.", name: "Stephanie Cook", source: "Google review" },
];

// ── How the RFQ / project journey works ──
export const processSteps = [
  {
    step: "01",
    title: "Send your drawing or enquiry",
    body: "Upload a DXF, DWG, STEP or PDF – or just describe the job. Tell us the material, quantity and deadline.",
  },
  {
    step: "02",
    title: "We quote",
    body: `We review your requirements and get a clear quote back to you. ${site.rfqResponse}`,
  },
  {
    step: "03",
    title: "We fabricate",
    body: "Cut, bend, punch, weld, assemble and finish – all in-house, with quality checked along the way.",
  },
  {
    step: "04",
    title: "Quality check & delivery",
    body: "Your finished parts are checked and dispatched, ready to use – across Centurion, Pretoria and greater Gauteng.",
  },
];

// ── Quality / ISO messaging ──
// [verified] from the supplied ISO 9001:2015 certificate (AfriCert, cert 2024042201,
// issued 22 Apr 2024, valid to 21 Apr 2027; SANAS/IAF accredited).
export const quality = {
  heading: "ISO 9001:2015 certified quality",
  body: "Foxtron Engineering holds ISO 9001:2015 certification for its sheet-metal design and fabrication – independently assessed and issued by AfriCert, a SANAS- and IAF-accredited certification body. Every job runs on consistent, documented processes with inspection before it leaves the floor.",
  points: [
    "ISO 9001:2015 certified – AfriCert, certificate 2024042201",
    "SANAS- and IAF-accredited certification body",
    "In-process and final inspection on every job",
    "Consistent, repeatable results across the batch",
  ],
  certNumber: "2024042201",
  certValidTo: "21 April 2027",
};
