import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ImageSlot } from "@/components/ui/image-slot";
import { LaserReveal } from "@/components/ui/laser-reveal";
import { machinery } from "@/config/images";

const items = [
  { image: machinery.laser, name: "Fibre laser cutting", note: "Large-format bed · steel, stainless, aluminium, brass, copper" },
  { image: machinery.pressBrake, name: "CNC press brakes", note: "Accurate, repeatable bending across the batch" },
  { image: machinery.punch, name: "CNC punching", note: "Fast, repeatable forming for high-volume sheet components" },
  { image: machinery.welding, name: "Welding & assembly", note: "MIG / TIG welding, fabrication and fitting" },
  { image: machinery.machining, name: "Machining & finishing", note: "Machining, surface treatment and final finishing" },
  { image: machinery.rolling, name: "Roll work & forming", note: "Rolling and forming for curved and cylindrical parts" },
];

export function Machinery() {
  return (
    <section className="section-pad brushed-steel bg-brand-ink">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our capability"
          title="The machinery behind the work"
          body="Modern CNC equipment, run by an experienced team — the capacity to take your job from raw sheet to finished, assembled component."
          tone="light"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={(i % 3) * 0.08} as="article" className="group">
              <LaserReveal delay={(i % 3) * 0.06} className="rounded-2xl ring-1 ring-white/10">
                <ImageSlot
                  image={it.image}
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="aspect-[4/3] w-full transition-transform duration-[600ms] ease-reveal group-hover:scale-[1.05]"
                />
              </LaserReveal>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-xs font-bold tabular-nums text-brand-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-white">{it.name}</h3>
              </div>
              <p className="mt-1 pl-7 text-sm leading-relaxed text-brand-steel">{it.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
