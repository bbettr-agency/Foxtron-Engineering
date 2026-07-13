import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ImageSlot } from "@/components/ui/image-slot";
import { machinery } from "@/config/images";

const items = [
  { image: machinery.laser, name: "Fibre laser cutting", note: "Large-format bed · steel, stainless, aluminium, brass, copper" },
  { image: machinery.pressBrake, name: "CNC press brakes", note: "Accurate, repeatable bending across the batch" },
  { image: machinery.welding, name: "Welding & assembly", note: "MIG / TIG welding, fabrication and fitting" },
  { image: machinery.rolling, name: "Roll work & forming", note: "Rolling and forming for curved and cylindrical parts" },
];

export function Machinery() {
  return (
    <section className="section-pad bg-brand-ink">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our capability"
          title="The machinery behind the work"
          body="Modern CNC equipment, run by an experienced team — the capacity to take your job from raw sheet to finished, assembled component."
          tone="light"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={(i % 4) * 0.08} as="article" className="group">
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
                <ImageSlot
                  image={it.image}
                  sizes="(max-width:768px) 100vw, 25vw"
                  className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{it.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-brand-steel">{it.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
