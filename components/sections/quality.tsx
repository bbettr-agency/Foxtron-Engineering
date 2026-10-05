import { Check, FileText } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ImageSlot } from "@/components/ui/image-slot";
import { quality } from "@/config/content-config";
import { certifications, certificatePdf } from "@/config/images";

export function Quality() {
  return (
    <section id="quality" className="section-pad bg-white">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Quality & standards" title={quality.heading} body={quality.body} />
          <ul className="mt-8 space-y-3">
            {quality.points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accentDark">
                  <Check size={15} aria-hidden />
                </span>
                <span className="text-brand-graphite">{p}</span>
              </li>
            ))}
          </ul>
          <a
            href={certificatePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-accentDark hover:text-brand-accent"
          >
            <FileText size={16} aria-hidden />
            View our ISO 9001 certificate
          </a>
        </div>

        <Reveal className="mx-auto w-full max-w-md">
          <div className="rounded-3xl bg-brand-bone p-8 shadow-card ring-1 ring-brand-mist md:p-10">
            <ImageSlot
              image={certifications.assuranceMark}
              sizes="(max-width:1024px) 90vw, 420px"
              className="w-full"
              fit="contain"
            />
            <div className="mt-6 border-t border-brand-mist pt-5 text-center">
              <p className="text-sm font-semibold text-brand-ink">Certificate {quality.certNumber}</p>
              <p className="mt-0.5 text-xs text-brand-steel">Issued by AfriCert · valid to {quality.certValidTo}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
