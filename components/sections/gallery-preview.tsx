import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ImageSlot } from "@/components/ui/image-slot";
import { ButtonLink } from "@/components/ui/button";
import { galleryPreview } from "@/config/images";

/** Homepage "Our Work" preview – one representative image per gallery category. */
export function GalleryPreview() {
  return (
    <section id="gallery" className="section-pad bg-brand-bone">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Our work"
            title="Inside the Foxtron workshop"
            body="Real machinery, real processes, real parts – photographed on our floor in Sunderland Ridge, Centurion."
          />
          <Reveal>
            <ButtonLink href="/gallery" variant="ghost" size="md">
              View full gallery <ArrowRight size={18} aria-hidden />
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPreview.map((cat, i) => (
            <Reveal key={cat.slug} delay={(i % 3) * 0.08} as="article">
              <Link
                href={`/gallery#${cat.slug}`}
                className="group block h-full overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-brand-mist transition-shadow hover:shadow-glow"
              >
                <div className="relative overflow-hidden">
                  <ImageSlot
                    image={cat.image}
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-brand-ink/75 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {cat.count} photos
                  </span>
                </div>
                <div className="flex items-start justify-between gap-3 p-5">
                  <div>
                    <h3 className="text-lg font-semibold text-brand-ink">{cat.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-graphite">{cat.blurb}</p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="mt-1 shrink-0 text-brand-steel transition-colors group-hover:text-brand-accent"
                    aria-hidden
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
