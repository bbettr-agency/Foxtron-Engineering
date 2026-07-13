import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/config/content-config";

export function Testimonials() {
  return (
    <section className="section-pad bg-brand-mist">
      <div className="container-page">
        <SectionHeading eyebrow="What clients say" title="Trusted for speed and service" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.08} as="article" className="rounded-3xl bg-white p-7 shadow-card">
              <Quote size={28} className="text-brand-accent" aria-hidden />
              <p className="mt-4 text-lg font-medium leading-relaxed text-brand-charcoal">“{t.quote}”</p>
              <footer className="mt-5 text-sm">
                <span className="font-semibold text-brand-ink">{t.name}</span>
                <span className="text-brand-steel"> · {t.source}</span>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
