import type { Metadata } from "next";
import { site } from "@/config/site-config";
import { defaultSeo, pageSeo, type PageSeo } from "@/config/seo-config";
import { og } from "@/config/images";

const BASE = site.url;

/** Build Next.js Metadata for a page from seo-config, with canonical + OG. */
export function buildMetadata(seo: PageSeo): Metadata {
  const canonical = `${BASE}${seo.path === "/" ? "" : seo.path}`;
  const ogImage = `${BASE}${og.default.src}`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: defaultSeo.siteName,
      title: seo.title,
      description: seo.description,
      url: canonical,
      locale: site.ogLocale,
      images: [{ url: ogImage, width: og.default.width, height: og.default.height, alt: defaultSeo.ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImage],
    },
  };
}

/** Root metadata (used by app/layout.tsx). */
export function rootMetadata(): Metadata {
  return {
    metadataBase: new URL(BASE),
    title: {
      default: defaultSeo.defaultTitle,
      template: defaultSeo.titleTemplate,
    },
    description: defaultSeo.defaultDescription,
    applicationName: site.name,
    authors: [{ name: "Bbettr Agency", url: site.agency.url }],
    robots: { index: true, follow: true },
  };
}

export { pageSeo };
