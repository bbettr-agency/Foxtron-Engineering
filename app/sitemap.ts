import type { MetadataRoute } from "next";
import { site } from "@/config/site-config";
import { servicePages } from "@/config/services-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticPaths = ["", "/services", "/about", "/industries", "/quote", "/contact", "/faq"];

  const routes: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p === "/quote" ? 0.9 : 0.7,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = servicePages.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...routes, ...serviceRoutes];
}
