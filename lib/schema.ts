/**
 * JSON-LD structured data. Only [verified]/[client-stated] facts.
 * Review/AggregateRating schema is intentionally omitted until there are
 * genuine, consented, countable reviews (no fabricated ratings).
 */
import { site } from "@/config/site-config";
import { faqs } from "@/config/faqs-config";
import { og } from "@/config/images";

const BASE = site.url;
const ORG_ID = `${BASE}/#organization`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: BASE,
    telephone: site.contact.phoneDisplay,
    email: site.contact.email,
    image: `${BASE}${og.default.src}`,
    logo: `${BASE}/images/logo/foxtron-logo.svg`,
    foundingDate: String(site.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.street}, ${site.address.suburb}`,
      addressLocality: site.address.city,
      addressRegion: site.address.province,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.geo.lat,
      longitude: site.address.geo.lng,
    },
    areaServed: site.areasServed.map((a) => ({ "@type": "AdministrativeArea", name: a })),
    openingHoursSpecification: site.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: `${BASE}${path}`,
    areaServed: site.areasServed.map((a) => ({ "@type": "AdministrativeArea", name: a })),
    provider: { "@type": "LocalBusiness", "@id": ORG_ID, name: site.name },
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${BASE}${it.path === "/" ? "" : it.path}`,
    })),
  };
}
