"use client";

import { m } from "framer-motion";
import { stagger, lineChild, viewportOnce } from "@/components/motion/anim";
import { cn } from "@/lib/utils";

/**
 * Heading whose words reveal in a staggered sweep (mask + rise) instead of a
 * flat fade-up. Falls back gracefully — words are plain text for reduced m.
 * `as` picks the tag; pass the full class string for size/tone.
 */
export function AnimatedHeading({
  text,
  as = "h2",
  className,
  highlight,
}: {
  text: string;
  as?: "h1" | "h2";
  className?: string;
  /** optional trailing word(s) rendered in the accent color */
  highlight?: string;
}) {
  const Tag = m[as];
  const words = text.split(" ");

  return (
    <Tag
      className={cn(className)}
      variants={stagger(0.06)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <m.span variants={lineChild} className="inline-block">
            {w}
            {i < words.length - 1 || highlight ? " " : ""}
          </m.span>
        </span>
      ))}
      {highlight && (
        <span className="inline-block overflow-hidden align-bottom">
          <m.span variants={lineChild} className="inline-block text-brand-accent">
            {highlight}
          </m.span>
        </span>
      )}
    </Tag>
  );
}
