import { Phone, ArrowRight, Check } from "lucide-react";
import { ImageSlot } from "@/components/ui/image-slot";
import { ButtonLink } from "@/components/ui/button";
import { hero } from "@/config/images";
import { site, cta } from "@/config/site-config";

const proofPoints = [
  "In-house laser, bending, welding & assembly",
  "One-off prototypes to full production runs",
  "Serving business across Gauteng since 1992",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-ink">
      {/* Background image (LCP) */}
      <div className="absolute inset-0">
        <ImageSlot image={hero.main} priority sizes="100vw" className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-brand-ink/85 to-brand-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-transparent to-transparent" />
      </div>

      <div className="container-page relative py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="eyebrow">Precision metal fabrication · Centurion</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
            Precision sheet metal fabrication, built for industry
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-mist">
            Laser cutting, CNC bending and metal fabrication under one roof in Centurion — from a
            single prototype to full production runs. {site.rfqResponse}
          </p>

          <ul className="mt-7 space-y-2.5">
            {proofPoints.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm text-brand-mist md:text-base">
                <Check size={18} className="shrink-0 text-brand-accentLight" aria-hidden />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={cta.quote.href} size="lg">
              {cta.quoteUpload.label} <ArrowRight size={18} aria-hidden />
            </ButtonLink>
            <ButtonLink href={cta.call.href} variant="ghost" size="lg" className="!text-white !ring-white/30 hover:!bg-white/10">
              <Phone size={18} aria-hidden /> {site.contact.phoneDisplay}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
