/**
 * ImageSlot – the single primitive for rendering managed images.
 *
 * Feed it an entry from `config/images.ts`:
 *   - status "ready" → renders the real optimized <Image> (next/image).
 *   - status "pending" → renders a labeled, dimension-accurate placeholder so
 *     the layout is reserved (no CLS) and nothing looks broken before the
 *     client uploads real photography.
 *
 * Components must NOT reference raw image paths – always go through here + config.
 */

import Image from "next/image";
import type { ManagedImage } from "@/config/images";

interface ImageSlotProps {
  image: ManagedImage;
  /** Tailwind classes for the wrapper (aspect, radius, etc.). */
  className?: string;
  /** Object-fit for the real image. Default "cover". */
  fit?: "cover" | "contain";
  /** Set true for the LCP image (hero) only. */
  priority?: boolean;
  /** Responsive sizes attribute for next/image. */
  sizes?: string;
  /** Optional caption shown under a pending slot (e.g. machine spec). */
  hint?: string;
}

export function ImageSlot({
  image,
  className = "",
  fit = "cover",
  priority = false,
  sizes = "100vw",
  hint,
}: ImageSlotProps) {
  const ratio = `${image.width} / ${image.height}`;

  if (image.status === "ready") {
    return (
      <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: ratio }}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          className={fit === "cover" ? "object-cover" : "object-contain"}
        />
      </div>
    );
  }

  // Pending: labeled placeholder. Reserves exact aspect ratio → no layout shift
  // when the real image is dropped in and status flips to "ready".
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-1 overflow-hidden border border-dashed border-slate-300 bg-slate-50 text-slate-400 ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`${image.alt} (image pending)`}
      data-image-status="pending"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.2em]">Image</span>
      <span className="px-4 text-center text-sm font-medium text-slate-500">{image.label}</span>
      <span className="text-[10px] text-slate-400">
        {image.width}×{image.height}
      </span>
      {hint ? <span className="mt-1 px-4 text-center text-[11px] text-slate-400">{hint}</span> : null}
    </div>
  );
}
