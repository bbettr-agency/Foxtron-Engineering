import type { MetadataRoute } from "next";
import { site } from "@/config/site-config";
import { servicePages } from "@/config/services-config";
import { pageUpdated } from "@/config/seo-config";

/** lastModified comes from real per-page content dates (config/seo-config.ts → pageUpdated). */
const lastMod = (path: string) => (pageUpdated[path] ? new Date(`${pageUpdated[path]}T00:00:00Z`) : undefined);

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticPaths = ["", "/services", "/gallery", "/about", "/quote", "/contact", "/faq", "/privacy"];

  const routes: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${base}${p}`,
    lastModified: lastMod(p || "/"),
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p === "/quote" ? 0.9 : p === "/privacy" ? 0.3 : 0.7,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = servicePages.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: lastMod(`/services/${s.slug}`),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...routes, ...serviceRoutes];
}
