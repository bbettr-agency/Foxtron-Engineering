import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { ImageSlot } from "@/components/ui/image-slot";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/ui/json-ld";
import { servicePages, serviceBySlug } from "@/config/services-config";
import { services as serviceImages } from "@/config/images";
import { site, cta } from "@/config/site-config";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = serviceBySlug(params.slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.name} in Centurion`,
    description: `${service.summary} Request a quote across Gauteng.`.slice(0, 155),
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

  return (
    <>
      <JsonLd
        data={[serviceSchema(service.name, service.summary, `/services/${service.slug}`), breadcrumbSchema(crumbs)]}
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
            <p className="text-lg leading-relaxed text-brand-graphite">{service.intro}</p>
            <ul className="mt-8 space-y-3">
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
              <div className="mt-10 overflow-hidden rounded-2xl ring-1 ring-brand-mist">
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
