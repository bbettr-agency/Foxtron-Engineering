/**
 * FAQ CONFIG – Foxtron Engineering
 * Answers the industrial buyer's pre-RFQ objections (blueprint §4).
 * Used on the FAQ section + FAQPage schema. Keep answers honest; specifics
 * marked [client-stated] should be confirmed before launch.
 */

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "What materials and thicknesses can you cut?",
    a: "We cut mild steel, stainless steel, aluminium, brass and copper. As a guide, our laser handles mild steel up to around 22 mm, stainless up to 12 mm and aluminium up to 10 mm. Send us your part and material and we'll confirm.",
  },
  {
    q: "Do you take on small jobs and one-offs, or only production runs?",
    a: "Both. We handle single replacement parts and prototypes right through to full production runs – for businesses, OEMs and trade.",
  },
  {
    q: "What file formats do you need for a quote?",
    a: "DXF, DWG, STEP and PDF drawings all work well. No drawing yet? Send a sketch, photo or a sample part and we'll help.",
  },
  {
    q: "How do I request a quote?",
    a: "Use our Request a Quote form to upload your drawing and job details, call us on 012 666 9933, or email info@foxtronengineering.co.za. We aim to respond to every RFQ within one business day.",
  },
  {
    q: "Which areas do you serve?",
    a: "We're based in Sunderland Ridge, Centurion and serve businesses across Pretoria, Midrand, Johannesburg and greater Gauteng.",
  },
  {
    q: "What services do you offer in-house?",
    a: "Laser cutting, CNC bending, CNC punching, welding and assembly, plus machining and finishing – the full workflow under one roof, so there are no outsourcing delays.",
  },
  {
    q: "Do you work with businesses in my industry?",
    a: "We regularly fabricate for automotive, construction, electrical, OEM and general engineering clients. If you need precision metal parts, we can likely help.",
  },
];
