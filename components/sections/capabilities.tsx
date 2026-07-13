import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ImageSlot } from "@/components/ui/image-slot";
import { services } from "@/config/services-config";
import { services as serviceImages } from "@/config/images";

export function Capabilities() {
  return (
    <section id="services" className="section-pad bg-brand-bone">
      <div className="container-page">
        <SectionHeading
          eyebrow="What we do"
          title="Everything you need, under one roof"
          body="Cut, bend, punch, weld, assemble and finish — a complete in-house fabrication workflow means tighter quality control and faster turnaround, with no outsourcing delays."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const image = s.imageKey ? serviceImages[s.imageKey].hero : undefined;
            const inner = (
              <>
                {image && (
                  <div className="overflow-hidden rounded-2xl">
                    <ImageSlot image={image} sizes="(max-width:768px) 100vw, 33vw" className="aspect-[3/2] w-full transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                )}
                <div className="mt-5 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-brand-ink">{s.name}</h3>
                  {s.hasPage && (
                    <ArrowUpRight size={20} className="mt-1 shrink-0 text-brand-steel transition-colors group-hover:text-brand-accent" aria-hidden />
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-brand-graphite">{s.summary}</p>
              </>
            );

            return (
              <Reveal key={s.slug} delay={(i % 3) * 0.08} as="article">
                {s.hasPage ? (
                  <Link
                    href={`/services/${s.slug}`}
                    className="group block h-full rounded-3xl bg-white p-5 shadow-card ring-1 ring-brand-mist transition-shadow hover:shadow-glow"
                  >
                    {inner}
                  </Link>
                ) : (
                  <div className="h-full rounded-3xl bg-white p-5 shadow-card ring-1 ring-brand-mist">{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
