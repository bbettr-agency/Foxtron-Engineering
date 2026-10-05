import type { Metadata } from "next";
import { Phone, Mail, Clock, Check } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { RfqForm } from "@/components/funnel/rfq-form";
import { JsonLd } from "@/components/ui/json-ld";
import { buildMetadata, pageSeo } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { site, cta } from "@/config/site-config";

export const metadata: Metadata = buildMetadata(pageSeo.quote);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Request a Quote", path: "/quote" },
];

const reassurance = [
  "Upload your DXF, DWG, STEP or PDF – or just describe the job",
  "For businesses, OEMs and trade",
  site.rfqResponse,
];

export default function QuotePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Request a Quote"
        title="Tell us about your job"
        body="A few quick questions so we can quote accurately. Have a drawing? Upload it and we'll come back to you fast."
        crumbs={crumbs}
      />

      <section className="section-pad bg-brand-bone">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <ul className="space-y-3">
              {reassurance.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accentDark">
                    <Check size={15} aria-hidden />
                  </span>
                  <span className="text-brand-charcoal">{r}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3 rounded-2xl bg-white p-6 shadow-card ring-1 ring-brand-mist">
              <p className="text-sm font-semibold text-brand-ink">Prefer to talk?</p>
              <a href={cta.call.href} className="flex items-center gap-3 text-brand-graphite hover:text-brand-accent">
                <Phone size={18} className="text-brand-accentDark" aria-hidden /> {site.contact.phoneDisplay}
              </a>
              <a href={cta.email.href} className="flex items-center gap-3 text-brand-graphite hover:text-brand-accent">
                <Mail size={18} className="text-brand-accentDark" aria-hidden /> {site.contact.email}
              </a>
              <p className="flex items-center gap-3 text-brand-steel">
                <Clock size={18} className="text-brand-accentDark" aria-hidden /> {site.hours[0].days}: {site.hours[0].time}
              </p>
            </div>
          </div>

          <RfqForm />
        </div>
      </section>
    </>
  );
}
