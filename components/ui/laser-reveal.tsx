"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "@/components/motion/anim";

/**
 * Reveals its children with a clip-path wipe — like a cut opening across the
 * image. A thin accent "cut line" travels ahead of the wipe. Reduced-motion
 * users just see the final image (no wipe).
 */
export function LaserReveal({
  children,
  className,
  direction = "left",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  direction?: "left" | "up";
  delay?: number;
}) {
  const from =
    direction === "left"
      ? { clipPath: "inset(0 100% 0 0)" }
      : { clipPath: "inset(100% 0 0 0)" };
  const to = { clipPath: "inset(0 0% 0 0)" };

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <m.div
        initial={from}
        whileInView={to}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: EASE, delay }}
        className="h-full w-full"
      >
        {children}
      </m.div>
      {/* travelling cut line */}
      <m.span
        aria-hidden
        initial={{ left: "0%", opacity: 0 }}
        whileInView={{ left: "100%", opacity: [0, 1, 1, 0] }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: EASE, delay }}
        className="pointer-events-none absolute top-0 z-10 hidden h-full w-[2px] bg-brand-accentLight shadow-[0_0_18px_2px_rgba(251,146,60,0.7)] motion-safe:block"
        style={{ display: direction === "left" ? undefined : "none" }}
      />
    </div>
  );
}
