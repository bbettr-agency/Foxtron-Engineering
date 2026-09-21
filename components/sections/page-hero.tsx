import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ImageSlot } from "@/components/ui/image-slot";
import type { ManagedImage } from "@/config/images";

interface Crumb {
  name: string;
  path: string;
}

export function PageHero({
  eyebrow,
  title,
  body,
  crumbs,
  image,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  crumbs: Crumb[];
  image?: ManagedImage;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-ink">
      {image && (
        <div className="absolute inset-0">
          <ImageSlot image={image} priority sizes="100vw" className="h-full w-full" />
          {/* symmetric scrim to match the centered layout */}
          <div className="absolute inset-0 bg-brand-ink/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/70 via-transparent to-brand-ink/90" />
        </div>
      )}
      <div className="container-page relative flex flex-col items-center py-20 text-center md:py-28">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center justify-center gap-1 text-sm text-brand-steel">
            {crumbs.map((c, i) => (
              <li key={c.path} className="flex items-center gap-1">
                {i > 0 && <ChevronRight size={14} aria-hidden />}
                {i < crumbs.length - 1 ? (
                  <Link href={c.path} className="hover:text-brand-accentLight">
                    {c.name}
                  </Link>
                ) : (
                  <span className="text-brand-mist">{c.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {eyebrow && <p className="eyebrow eyebrow--center mt-6">{eyebrow}</p>}
        <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {body && <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-mist md:text-lg">{body}</p>}
      </div>
    </section>
  );
}
