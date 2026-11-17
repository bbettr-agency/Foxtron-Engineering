/**
 * SITE CONFIG – Foxtron Engineering
 * Business details, contact channels, navigation, CTAs. Single source of truth.
 *
 * Fact tags: [verified] live site · [client-stated] asserted, confirm · [assumed] inference.
 * Nothing marked [assumed] should ship as fact – confirm with client first.
 */

export const site = {
  name: "Foxtron Engineering",
  legalName: "Foxtron Engineering (Pty) Ltd", // [verified] ISO cert – reg 2020/543748/07
  registrationNumber: "2020/543748/07", // [verified] CIPC reg, from the ISO certificate
  // 5-second promise
  tagline: "Precision sheet metal fabrication, built for industry",
  descriptionShort:
    "Laser cutting, CNC bending and metal fabrication in Centurion – from one-off prototypes to full production runs.",
  foundedYear: 1992, // [client-stated] confirm (legacy site said "29 years")
  url: "https://www.foxtronengineering.co.za", // confirm www vs non-www at launch
  ogLocale: "en_ZA",

  // ── Contact [verified from live site – confirm canonical NAP] ──
  contact: {
    phoneDisplay: "012 666 9933",
    phoneHref: "tel:+27126669933",
    email: "info@foxtronengineering.co.za",
    emailHref: "mailto:info@foxtronengineering.co.za",
  },

  address: {
    street: "46 Rowan Nook",
    suburb: "Sunderland Ridge",
    city: "Centurion",
    province: "Gauteng",
    postalCode: "0157",
    country: "South Africa",
    countryCode: "ZA",
    mapQuery: "Foxtron Engineering, 46 Rowan Nook, Sunderland Ridge, Centurion",
    // [assumed] approx coords for Sunderland Ridge – replace with exact GBP pin,
    // then set geoVerified: true. Coordinates are NOT published in schema until verified.
    geo: { lat: -25.8543, lng: 28.1462 },
    geoVerified: false,
  },

  // Mon–Thu 09:00–17:00, Fri 09:00–15:00, weekends closed [verified]
  hours: [
    { days: "Monday – Thursday", time: "09:00 – 17:00" },
    { days: "Friday", time: "09:00 – 15:00" },
    { days: "Saturday – Sunday", time: "Closed" },
  ],
  // machine-readable for LocalBusiness schema
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "09:00", closes: "17:00" },
    { days: ["Friday"], opens: "09:00", closes: "15:00" },
  ],

  areasServed: ["Centurion", "Pretoria", "Midrand", "Johannesburg", "Gauteng"],

  // Official profiles. Add a URL ONLY once the client confirms the profile is theirs.
  // Every non-empty URL is linked in the footer and emitted as schema.org `sameAs`.
  socials: {
    facebook: "", // candidate found in audit: https://www.facebook.com/foxtronengineering – confirm ownership
    instagram: "",
    linkedin: "", // no company page yet – create one, then add it here
  },
  // Google Business Profile share/maps URL (schema `hasMap` + `sameAs`) – confirm with client.
  googleBusinessProfile: "",

  // Search-engine ownership verification tokens (rendered as <meta> tags when set).
  verification: {
    google: "", // Google Search Console HTML-tag token
    bing: "", // Bing Webmaster Tools msvalidate.01 token
  },
  // IndexNow key (Bing/Yandex/Seznam fast indexing). Key file is served at /<key>.txt.
  indexNowKey: "7c372122a142e520d3a6d986db664a49",

  // RFQ response commitment – confirm with client before publishing the SLA
  rfqResponse: "We respond to every RFQ within 1 business day.", // [client-stated] confirm

  // Agency credit (OS standing rule)
  agency: {
    label: "Website Designed & Developed by Bbettr Agency",
    url: "https://www.bbettragency.com",
  },
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Conversion channels: Request a Quote (primary), phone, email.
export const cta = {
  quote: { label: "Request a Quote", href: "/quote" },
  quoteUpload: { label: "Request a Quote / Upload Drawing", href: "/quote" },
  call: { label: site.contact.phoneDisplay, href: site.contact.phoneHref },
  email: { label: site.contact.email, href: site.contact.emailHref },
} as const;
