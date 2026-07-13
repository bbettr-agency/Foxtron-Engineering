import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ImageSlot } from "@/components/ui/image-slot";
import { projects } from "@/config/images";

export function Projects() {
  const shown = projects.slice(0, 6);
  return (
    <section id="work" className="section-pad bg-brand-bone">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our work"
          title="Real parts, made in Centurion"
          body="A selection of components and assemblies from the Foxtron floor — laser-cut, folded, welded and finished."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {shown.map((p, i) => (
            <Reveal key={p.src} delay={(i % 3) * 0.06} className="group overflow-hidden rounded-2xl ring-1 ring-brand-mist">
              <ImageSlot
                image={p}
                sizes="(max-width:768px) 50vw, 33vw"
                className="aspect-square w-full transition-transform duration-500 group-hover:scale-[1.05]"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
