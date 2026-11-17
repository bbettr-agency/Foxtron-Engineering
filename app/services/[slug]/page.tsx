import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight, FileText, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { ImageSlot } from "@/components/ui/image-slot";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/ui/json-ld";
import { servicePages, serviceBySlug } from "@/config/services-config";
import { services as serviceImages } from "@/config/images";
import { site, cta } from "@/config/site-config";
import { quality } from "@/config/content-config";
import { pageUpdated } from "@/config/seo-config";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

/** Summary + location CTA, trimmed on a word boundary to ≤ 160 chars. */
function metaDescription(summary: string) {
  const full = `${summary} Based in Centurion – request a quote across Gauteng.`;
  if (full.length <= 160) return full;
  const withCta = `${summary} Request a quote across Gauteng.`;
  if (withCta.length <= 160) return withCta;
  return summary.length <= 160 ? summary : `${summary.slice(0, 157).replace(/\s+\S*$/, "")}…`;
}

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = serviceBySlug(params.slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.name} in Centurion`,
    description: metaDescription(service.summary),
    path: `/services/${service.slug}`,
  });
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceBySlug(params.slug);
  if (!service || !service.hasPage) notFound();

  const images = service.imageKey ? serviceImages[service.imageKey] : undefined;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ];
  const others = servicePages.filter((s) => s.slug !== service.slug);
  const path = `/services/${service.slug}`;
  const updated = pageUpdated[path];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path,
            name: `${service.name} in Centurion | ${site.name}`,
            description: service.summary,
            speakable: true,
          }),
          serviceSchema(service.slug, service.name, service.intro),
          breadcrumbSchema(crumbs),
        )}
      />
      <PageHero
        eyebrow="Service"
        title={`${service.name} in Centurion`}
        body={service.summary}
        crumbs={crumbs}
        image={images?.hero}
      />

      <section className="section-pad bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            {service.question && (
              <h2 className="text-2xl font-semibold tracking-tight text-brand-ink md:text-3xl">{service.question}</h2>
            )}
            <p data-speakable className="mt-4 text-lg leading-relaxed text-brand-graphite">
              {service.intro}
            </p>

            <h2 className="mt-10 text-xl font-semibold text-brand-ink">{service.name} capabilities at a glance</h2>
            <ul className="mt-5 space-y-3">
              {service.points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accentDark">
                    <Check size={15} aria-hidden />
                  </span>
                  <span className="text-brand-charcoal">{p}</span>
                </li>
              ))}
            </ul>

            {service.specs && (
              <h2 className="mt-10 text-xl font-semibold text-brand-ink">{service.name} capacity and materials</h2>
            )}
            {service.specs && (
              <div className="mt-5 overflow-hidden rounded-2xl ring-1 ring-brand-mist">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">{service.name} capability specifications</caption>
                  <tbody className="divide-y divide-brand-mist">
                    {service.specs.map((spec) => (
                      <tr key={spec.label}>
                        <th scope="row" className="bg-brand-bone px-4 py-3 font-semibold text-brand-charcoal">
                          {spec.label}
                        </th>
                        <td className="px-4 py-3 text-brand-graphite">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="bg-brand-bone px-4 py-2 text-xs text-brand-steel">
                  Guide figures – send your part and we&apos;ll confirm exact capacity.
                </p>
              </div>
            )}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl bg-brand-bone p-5 ring-1 ring-brand-mist">
                <FileText size={20} className="text-brand-accentDark" aria-hidden />
                <h2 className="mt-3 text-base font-semibold text-brand-ink">What do I need to send for a quote?</h2>
                <p className="mt-2 text-sm leading-relaxed text-brand-graphite">
                  A DXF, DWG, STEP or PDF drawing plus the material, quantity and deadline. No drawing yet? Send a
                  sketch, photo or sample part. {site.rfqResponse}
                </p>
              </div>
              <div className="rounded-2xl bg-brand-bone p-5 ring-1 ring-brand-mist">
                <ShieldCheck size={20} className="text-brand-accentDark" aria-hidden />
                <h2 className="mt-3 text-base font-semibold text-brand-ink">Why choose Foxtron for {service.name.toLowerCase()}?</h2>
                <p className="mt-2 text-sm leading-relaxed text-brand-graphite">
                  ISO 9001:2015 certified by AfriCert (certificate {quality.certNumber}). Cutting, bending, punching,
                  welding and assembly all happen in-house in Centurion, from one-off prototypes to production runs.
                </p>
              </div>
            </div>

            {service.faqs && service.faqs.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-semibold text-brand-ink">{service.name} questions</h2>
                <div className="mt-5 divide-y divide-brand-mist border-y border-brand-mist">
                  {service.faqs.map((f) => (
                    <div key={f.q} className="py-5">
                      <h3 className="font-semibold text-brand-charcoal">{f.q}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-brand-graphite">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {updated && (
              <p className="mt-8 text-xs text-brand-steel">
                Page last updated <time dateTime={updated}>{formatDate(updated)}</time>
              </p>
            )}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={cta.quote.href} size="lg">
                {cta.quoteUpload.label} <ArrowRight size={18} aria-hidden />
              </ButtonLink>
              <ButtonLink href={cta.call.href} variant="ghost" size="lg">
                Call {site.contact.phoneDisplay}
              </ButtonLink>
            </div>
          </div>

          {images && (
            <Reveal className="space-y-6">
              <ImageSlot image={images.detail} sizes="(max-width:1024px) 100vw, 40vw" className="w-full rounded-3xl" />
              <div className="rounded-3xl bg-brand-ink p-7 text-brand-mist">
                <h2 className="text-lg font-semibold text-white">Other capabilities</h2>
                <ul className="mt-4 space-y-2">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link href={`/services/${o.slug}`} className="inline-flex items-center gap-2 hover:text-brand-accentLight">
                        <ArrowRight size={15} aria-hidden /> {o.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
