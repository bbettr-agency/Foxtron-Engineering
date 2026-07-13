import { Factory, Layers, Target, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { differentiators } from "@/config/content-config";

const icons = [Factory, Layers, Target, ShieldCheck];

export function WhyUs() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Foxtron"
          title="A fabrication partner you can rely on"
          body="Serious industrial buyers need capability, consistency and accountability. That's what we're built for."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {differentiators.map((d, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={d.title} delay={(i % 2) * 0.08} as="article" className="flex gap-4 rounded-2xl bg-brand-bone p-6 ring-1 ring-brand-mist">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accentDark">
                  <Icon size={22} aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-ink">{d.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-graphite">{d.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
