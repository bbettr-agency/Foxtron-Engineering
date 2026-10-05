import Link from "next/link";
import { logo } from "@/config/images";
import { cn } from "@/lib/utils";

/** Brand wordmark. SVG served directly (no raster optimization needed). */
export function Logo({ className, invert = false }: { className?: string; invert?: boolean }) {
  return (
    <Link href="/" aria-label="Foxtron Engineering – home" className="inline-flex items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.primary.src}
        alt={logo.primary.alt}
        width={logo.primary.width}
        height={logo.primary.height}
        className={cn("h-9 w-auto md:h-10", invert && "brightness-0 invert", className)}
      />
    </Link>
  );
}
