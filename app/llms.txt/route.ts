/**
 * /llms.txt – a plain-text map of the site for AI assistants (llmstxt.org).
 * Generated from config so it never drifts from the live content.
 */
import { site } from "@/config/site-config";
import { services, servicePages } from "@/config/services-config";
import { faqs } from "@/config/faqs-config";
import { quality } from "@/config/content-config";
import { pageSeo } from "@/config/seo-config";
import { certificatePdf } from "@/config/images";

export const dynamic = "force-static";

export function GET() {
  const u = (p: string) => `${site.url}${p === "/" ? "" : p}`;
  const a = site.address;
  const laser = services.find((s) => s.slug === "laser-cutting");

  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.legalName} is an ISO 9001:2015-certified precision sheet metal fabrication company in ${a.suburb}, ${a.city}, ${a.province}, South Africa. It offers fibre laser cutting, CNC bending, CNC punching, MIG/TIG welding, assembly, machining and finishing in-house – from one-off prototypes to full production runs – for automotive, construction, electrical, OEM and general engineering clients across ${site.areasServed.join(", ")}.`,
    "",
    "## Key facts",
    `- Legal name: ${site.legalName} (company registration ${site.registrationNumber})`,
    `- Address: ${a.street}, ${a.suburb}, ${a.city}, ${a.province}, ${a.postalCode}, ${a.country}`,
    `- Phone: ${site.contact.phoneDisplay} (+27 12 666 9933)`,
    `- Email: ${site.contact.email}`,
    `- Hours: ${site.hours.map((h) => `${h.days} ${h.time}`).join("; ")}`,
    `- Quality: ISO 9001:2015, certified by AfriCert, certificate ${quality.certNumber}, valid to ${quality.certValidTo} (${u(certificatePdf)})`,
    `- Quotes: upload DXF, DWG, STEP or PDF drawings at ${u("/quote")}. ${site.rfqResponse}`,
    ...(laser?.specs ? [`- Laser cutting capacity: ${laser.specs.map((s) => `${s.label} ${s.value}`).join("; ")}`] : []),
    "",
    "## Services",
    `- [All services](${u("/services")}): ${pageSeo.services.description}`,
    ...servicePages.map((s) => `- [${s.name}](${u(`/services/${s.slug}`)}): ${s.summary}`),
    ...services.filter((s) => !s.hasPage).map((s) => `- ${s.name}: ${s.summary}`),
    "",
    "## Company",
    `- [About](${u("/about")}): ${pageSeo.about.description}`,
    `- [Gallery](${u("/gallery")}): ${pageSeo.gallery.description}`,
    `- [FAQ](${u("/faq")}): ${pageSeo.faq.description}`,
    `- [Contact](${u("/contact")}): ${pageSeo.contact.description}`,
    `- [Request a quote](${u("/quote")}): ${pageSeo.quote.description}`,
    "",
    "## Frequently asked questions",
    ...faqs.map((f) => `- **${f.q}** ${f.a}`),
    "",
    "## Optional",
    `- [Privacy policy](${u("/privacy")}): ${pageSeo.privacy.description}`,
    `- [Sitemap](${u("/sitemap.xml")})`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
