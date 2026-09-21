import { Phone, ArrowRight, Mail } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { site, cta } from "@/config/site-config";

export function FinalCta() {
  return (
    <section className="section-pad brushed-steel bg-brand-primary">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            Ready to get your parts made?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-mist">
            Send your drawing or describe the job. {site.rfqResponse}
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={cta.quote.href} size="lg">
              {cta.quoteUpload.label} <ArrowRight size={18} aria-hidden />
            </ButtonLink>
            <ButtonLink href={cta.call.href} variant="ghost" size="lg" className="!text-white !ring-white/30 hover:!bg-white/10">
              <Phone size={18} aria-hidden /> {site.contact.phoneDisplay}
            </ButtonLink>
          </div>
          <a href={cta.email.href} className="mt-6 inline-flex items-center gap-2 text-sm text-brand-mist hover:text-white">
            <Mail size={16} aria-hidden /> {site.contact.email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
