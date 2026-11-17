/**
 * JSON-LD structured data. Only [verified]/[client-stated] facts.
 * Review/AggregateRating schema is intentionally omitted until there are
 * genuine, consented, countable reviews (no fabricated ratings).
 *
 * Entity graph (linked by @id):
 *   #website ──publisher──▶ #organization ◀──provider── /services/<slug>#service
 *   <page>#webpage ──isPartOf──▶ #website, ──about──▶ #organization
 */
import { site } from "@/config/site-config";
import { faqs, type Faq } from "@/config/faqs-config";
import { services, servicePages } from "@/config/services-config";
import { quality } from "@/config/content-config";
import { pageUpdated } from "@/config/seo-config";
import { og, hero, certificatePdf } from "@/config/images";

const BASE = site.url;
export const ORG_ID = `${BASE}/#organization`;
export const WEBSITE_ID = `${BASE}/#website`;

const abs = (path: string) => `${BASE}${path === "/" ? "" : path}`;
const serviceId = (slug: string) => `${BASE}/services/${slug}#service`;
const areaServed = () => site.areasServed.map((a) => ({ "@type": "AdministrativeArea", name: a }));

/** Confirmed official profile URLs (empty config values are skipped – never invented). */
export function sameAsUrls(): string[] {
  const urls: string[] = [...Object.values(site.socials), site.googleBusinessProfile];
  return urls.filter(Boolean);
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: BASE,
    name: site.name,
    description: site.descriptionShort,
    inLanguage: "en-ZA",
    publisher: { "@id": ORG_ID },
  };
}

export function localBusinessSchema() {
  const sameAs = sameAsUrls();
  return {
    "@type": "LocalBusiness",
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    description: site.descriptionShort,
    url: BASE,
    telephone: site.contact.phoneHref.replace("tel:", ""),
    email: site.contact.email,
    image: [`${BASE}${og.default.src}`, `${BASE}${hero.main.src}`],
    logo: {
      "@type": "ImageObject",
      url: `${BASE}/images/logo/foxtron-icon.png`,
      width: 512,
      height: 512,
    },
    foundingDate: String(site.foundedYear),
    identifier: {
      "@type": "PropertyValue",
      propertyID: "CIPC company registration number",
      value: site.registrationNumber,
    },
    knowsAbout: [
      "Sheet metal fabrication",
      "Fibre laser cutting",
      "CNC bending",
      "CNC press brake folding",
      "CNC punching",
      "MIG welding",
      "TIG welding",
      "Metal assembly",
      "ISO 9001 quality management",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.street}, ${site.address.suburb}`,
      addressLocality: site.address.city,
      addressRegion: site.address.province,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
    // Coordinates are published only once confirmed against the Google Business Profile pin.
    ...(site.address.geoVerified
      ? { geo: { "@type": "GeoCoordinates", latitude: site.address.geo.lat, longitude: site.address.geo.lng } }
      : {}),
    ...(site.googleBusinessProfile ? { hasMap: site.googleBusinessProfile } : {}),
    ...(sameAs.length ? { sameAs } : {}),
    areaServed: areaServed(),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: site.contact.phoneHref.replace("tel:", ""),
      email: site.contact.email,
      areaServed: "ZA",
      availableLanguage: ["en"],
    },
    openingHoursSpecification: site.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    hasCertification: {
      "@type": "Certification",
      name: "ISO 9001:2015 Quality Management System",
      certificationIdentification: quality.certNumber,
      issuedBy: { "@type": "Organization", name: "AfriCert" },
      validFrom: quality.certIssued,
      expires: quality.certExpires,
      certificationStatus: "https://schema.org/CertificationActive",
      about: { "@type": "Thing", name: "Sheet-metal design and fabrication" },
      url: `${BASE}${certificatePdf}`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sheet metal fabrication services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: s.hasPage
          ? { "@id": serviceId(s.slug) }
          : { "@type": "Service", name: s.name, description: s.summary },
      })),
    },
  };
}

/** Sitewide graph rendered once in app/layout.tsx. */
export function siteGraph() {
  return { "@context": "https://schema.org", "@graph": [websiteSchema(), localBusinessSchema()] };
}

type PageType = "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "FAQPage";

/** Per-page node: names the page, links it to the site + business, and carries dateModified. */
export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
  type?: PageType;
  speakable?: boolean;
  extra?: Record<string, unknown>;
}) {
  const url = abs(opts.path);
  return {
    "@type": opts.type ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    inLanguage: "en-ZA",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    ...(pageUpdated[opts.path] ? { dateModified: pageUpdated[opts.path] } : {}),
    ...(opts.speakable
      ? { speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "[data-speakable]"] } }
      : {}),
    ...(opts.extra ?? {}),
  };
}

export function serviceSchema(slug: string, name: string, description: string) {
  const path = `/services/${slug}`;
  return {
    "@type": "Service",
    "@id": serviceId(slug),
    name,
    description,
    serviceType: name,
    url: abs(path),
    areaServed: areaServed(),
    provider: { "@id": ORG_ID },
    mainEntityOfPage: { "@id": `${abs(path)}#webpage` },
  };
}

/** ItemList of the service spokes (services hub). */
export function serviceListSchema() {
  return {
    "@type": "ItemList",
    name: "Foxtron Engineering services",
    itemListElement: servicePages.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: abs(`/services/${s.slug}`),
      name: s.name,
    })),
  };
}

/** Question/answer list. Used as `mainEntity` of a FAQPage node. */
export function faqEntities(list: Faq[] = faqs) {
  return list.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  }));
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

/** Wrap page nodes in one @graph (single @context, one script tag). */
export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
