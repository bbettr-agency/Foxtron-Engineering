import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { ButtonLink } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";
import { buildMetadata, pageSeo } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { site, cta } from "@/config/site-config";

export const metadata: Metadata = buildMetadata(pageSeo.contact);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function ContactPage() {
  const a = site.address;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(a.mapQuery)}&output=embed`;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Contact"
        title="Get in touch with Foxtron"
        body="Call, email or request a quote — we're here Monday to Friday and respond fast."
        crumbs={crumbs}
      />

      <section className="section-pad bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex gap-4">
              <MapPin className="mt-1 shrink-0 text-brand-accentDark" aria-hidden />
              <div>
                <h2 className="font-semibold text-brand-ink">Visit us</h2>
                <p className="text-brand-graphite">
                  {a.street}, {a.suburb}
                  <br />
                  {a.city}, {a.province} {a.postalCode}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 shrink-0 text-brand-accentDark" aria-hidden />
              <div>
                <h2 className="font-semibold text-brand-ink">Call</h2>
                <a href={cta.call.href} className="text-brand-graphite hover:text-brand-accent">
                  {site.contact.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="mt-1 shrink-0 text-brand-accentDark" aria-hidden />
              <div>
                <h2 className="font-semibold text-brand-ink">Email</h2>
                <a href={cta.email.href} className="text-brand-graphite hover:text-brand-accent">
                  {site.contact.email}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-1 shrink-0 text-brand-accentDark" aria-hidden />
              <div>
                <h2 className="font-semibold text-brand-ink">Hours</h2>
                {site.hours.map((h) => (
                  <p key={h.days} className="text-brand-graphite">
                    {h.days}: {h.time}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <ButtonLink href={cta.quote.href} size="lg">
                Request a Quote
              </ButtonLink>
              <ButtonLink href={cta.email.href} variant="ghost" size="lg">
                <Mail size={18} aria-hidden /> Email us
              </ButtonLink>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl ring-1 ring-brand-mist">
            <iframe
              title="Foxtron Engineering location map"
              src={mapSrc}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
