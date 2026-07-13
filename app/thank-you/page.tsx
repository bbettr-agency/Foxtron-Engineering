import type { Metadata } from "next";
import { CheckCircle2, Phone, Home } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { buildMetadata, pageSeo } from "@/lib/metadata";
import { site, cta } from "@/config/site-config";

export const metadata: Metadata = {
  ...buildMetadata(pageSeo.thankYou),
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[70vh] items-center bg-brand-bone">
      <div className="container-page">
        <div className="mx-auto max-w-xl text-center">
          <CheckCircle2 size={56} className="mx-auto text-success" aria-hidden />
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
            Thank you — we&apos;ve got your request
          </h1>
          <p className="mt-4 text-lg text-brand-graphite">
            A member of the Foxtron team will review your enquiry and get back to you. {site.rfqResponse}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={cta.call.href} size="lg">
              <Phone size={18} aria-hidden /> Call {site.contact.phoneDisplay}
            </ButtonLink>
            <ButtonLink href="/" variant="ghost" size="lg">
              <Home size={18} aria-hidden /> Back to home
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
