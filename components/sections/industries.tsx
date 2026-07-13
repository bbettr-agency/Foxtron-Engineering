import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ImageSlot } from "@/components/ui/image-slot";
import { industries } from "@/config/content-config";

export function Industries() {
  return (
    <section id="industries" className="section-pad bg-brand-bone">
      <div className="container-page">
        <SectionHeading
          eyebrow="Industries we serve"
          title="Trusted across industry"
          body="We fabricate precision metal parts and assemblies for a broad range of business and trade clients across Gauteng."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.key} delay={(i % 3) * 0.08} as="article" className="group overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-brand-mist">
              <ImageSlot
                image={ind.image}
                sizes="(max-width:768px) 100vw, 33vw"
                className="aspect-[3/2] w-full transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-brand-ink">{ind.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-graphite">{ind.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
