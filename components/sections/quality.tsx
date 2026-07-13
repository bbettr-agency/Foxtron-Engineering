import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ImageSlot } from "@/components/ui/image-slot";
import { quality } from "@/config/content-config";
import { certifications } from "@/config/images";

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
        </div>

        <Reveal className="mx-auto w-full max-w-sm">
          <div className="rounded-3xl bg-brand-bone p-4 shadow-card ring-1 ring-brand-mist">
            <ImageSlot image={certifications.iso9001} sizes="(max-width:1024px) 100vw, 400px" className="w-full rounded-2xl" fit="contain" />
            <p className="mt-3 text-center text-xs text-brand-steel">ISO 9001 certificate available on request.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
