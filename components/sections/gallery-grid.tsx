import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ImageSlot } from "@/components/ui/image-slot";
import { galleryCategories } from "@/config/images";
import { cn } from "@/lib/utils";

/** Full gallery – every category, each an anchored section. */
export function GalleryGrid() {
  return (
    <>
      {/* Category jump-nav */}
      <nav aria-label="Gallery categories" className="sticky top-[var(--header-h)] z-30 border-b border-brand-mist bg-white/95 backdrop-blur">
        <div className="container-page flex gap-2 overflow-x-auto py-3">
          {galleryCategories.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-brand-charcoal ring-1 ring-brand-steel/25 transition-colors hover:bg-brand-mist"
            >
              {c.name}
            </a>
          ))}
        </div>
      </nav>

      {galleryCategories.map((cat, ci) => (
        <section
          key={cat.slug}
          id={cat.slug}
          className={cn("section-pad scroll-mt-32", ci % 2 === 0 ? "bg-brand-bone" : "bg-white")}
        >
          <div className="container-page">
            <SectionHeading eyebrow={`${cat.images.length} photos`} title={cat.name} body={cat.blurb} />

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
              {cat.images.map((img, i) => (
                <Reveal
                  key={img.src}
                  delay={(i % 4) * 0.06}
                  className="group overflow-hidden rounded-2xl ring-1 ring-brand-mist"
                >
                  <figure className="relative">
                    <ImageSlot
                      image={img}
                      sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
                      className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-ink/85 to-transparent p-3 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {img.label}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
