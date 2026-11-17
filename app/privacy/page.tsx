import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/ui/json-ld";
import { buildMetadata, pageSeo } from "@/lib/metadata";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { site } from "@/config/site-config";
import { pageUpdated } from "@/config/seo-config";

/**
 * POPIA privacy notice. Describes ONLY what this website actually does today
 * (RFQ/contact form → CRM, Vercel hosting, no analytics/ad cookies).
 * ⚠ Client to review/approve, and to confirm the registered Information Officer.
 * Update this page if analytics, ad tags or file-upload storage are added.
 */
export const metadata: Metadata = buildMetadata(pageSeo.privacy);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy" },
];

export default function PrivacyPage() {
  const a = site.address;
  const updated = pageUpdated["/privacy"];
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: pageSeo.privacy.path,
            name: pageSeo.privacy.title,
            description: pageSeo.privacy.description,
          }),
          breadcrumbSchema(crumbs),
        )}
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        body="How we collect, use and protect your personal information, in line with the Protection of Personal Information Act, 2013 (POPIA)."
        crumbs={crumbs}
      />
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl space-y-8 text-brand-graphite [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-brand-ink [&_li]:mt-1.5 [&_p]:mt-3 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6">
          <p className="text-sm text-brand-steel">
            Last updated: <time dateTime={updated}>{updated}</time>
          </p>

          <div>
            <h2>Who we are</h2>
            <p>
              {site.legalName} (registration number {site.registrationNumber}) is the responsible party for personal
              information collected through this website. Address: {a.street}, {a.suburb}, {a.city}, {a.province}{" "}
              {a.postalCode}, {a.country}. Phone: {site.contact.phoneDisplay}. Email:{" "}
              <a href={site.contact.emailHref} className="text-brand-accentDark underline">
                {site.contact.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2>What we collect</h2>
            <p>When you request a quote or contact us, we collect the information you choose to give us:</p>
            <ul>
              <li>your name, company name, email address and phone number;</li>
              <li>job details such as processes, materials, quantities, deadlines and notes;</li>
              <li>the names of any drawing files you attach.</li>
            </ul>
            <p>
              Our hosting provider automatically processes basic technical data (such as IP address and browser type)
              to deliver and secure the website. This website does not use advertising or analytics cookies.
            </p>
          </div>

          <div>
            <h2>Why we use it</h2>
            <ul>
              <li>to respond to your enquiry and prepare a quotation;</li>
              <li>to communicate with you about your order or project;</li>
              <li>to keep business records as required by law.</li>
            </ul>
            <p>We do not sell your personal information or use it for unrelated marketing without your consent.</p>
          </div>

          <div>
            <h2>Who we share it with</h2>
            <p>
              We share information only with service providers (operators) that help us run our business, under
              obligations to keep it confidential and secure: our website hosting provider and our customer-relationship
              management (CRM) system, which receives quote requests. Some of these providers store data outside South
              Africa; where that happens we rely on providers that are bound by data-protection laws or agreements
              offering protection comparable to POPIA.
            </p>
          </div>

          <div>
            <h2>How long we keep it</h2>
            <p>
              We keep enquiry and quotation records for as long as needed to deal with your request and our business
              relationship, and for any period required by law, after which they are deleted or de-identified.
            </p>
          </div>

          <div>
            <h2>Your rights</h2>
            <p>Under POPIA you may:</p>
            <ul>
              <li>ask whether we hold personal information about you and request a copy of it;</li>
              <li>ask us to correct, update or delete it;</li>
              <li>object to its processing, including for direct marketing;</li>
              <li>
                lodge a complaint with the Information Regulator (South Africa) at{" "}
                <a href="https://inforegulator.org.za" className="text-brand-accentDark underline" rel="noopener noreferrer" target="_blank">
                  inforegulator.org.za
                </a>
                .
              </li>
            </ul>
            <p>
              To exercise these rights, contact our Information Officer at{" "}
              <a href={site.contact.emailHref} className="text-brand-accentDark underline">
                {site.contact.email}
              </a>{" "}
              or {site.contact.phoneDisplay}.
            </p>
          </div>

          <div>
            <h2>Security</h2>
            <p>
              The website is served only over encrypted HTTPS, and access to enquiry data is limited to staff who need it
              to handle your request.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
