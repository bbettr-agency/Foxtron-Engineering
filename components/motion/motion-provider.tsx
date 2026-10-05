"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Loads only the `domAnimation` feature set (animations, variants, exit,
 * gestures) instead of the full Framer bundle – keeps first-load JS lean.
 * All motion components use `m.*` (not `motion.*`) so features come from here.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
