import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/config/content-config";

export function Process() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title="From drawing to delivery"
          body="A simple, fast route from enquiry to finished parts — designed to get you an accurate quote and a reliable turnaround."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={(i % 4) * 0.08} as="li" className="relative rounded-2xl bg-brand-bone p-6 ring-1 ring-brand-mist">
              <span className="text-4xl font-extrabold text-brand-accent/25">{s.step}</span>
              <h3 className="mt-2 text-lg font-semibold text-brand-ink">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-graphite">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
