"use client";

import { m } from "framer-motion";
import { Dot } from "lucide-react";

/**
 * Infinite industrial ticker. Pauses on hover. Reduced-motion users get a
 * static, wrapped row.
 */
export function Marquee({ items, speed = 32 }: { items: string[]; speed?: number }) {
  const doubled = [...items, ...items];
  return (
    <div className="group relative flex overflow-hidden">
      <m.div
        className="flex shrink-0 items-center gap-8 pr-8 motion-reduce:animate-none"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
        style={{ willChange: "transform" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.18em] text-brand-mist">
            {item}
            <Dot className="text-brand-accent" aria-hidden />
          </span>
        ))}
      </m.div>
    </div>
  );
}
