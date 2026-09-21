"use client";

import { m } from "framer-motion";
import { CountUp } from "@/components/ui/count-up";
import { stats } from "@/config/content-config";
import { EASE, viewportOnce } from "@/components/motion/anim";

export function StatsBar() {
  return (
    <section className="border-b border-brand-mist bg-white">
      <div className="container-page grid grid-cols-2 gap-x-8 gap-y-10 py-14 md:grid-cols-4 md:py-16">
        {stats.map((s, i) => (
          <m.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
            className="text-center md:text-left"
          >
            {/* drawn accent rule */}
            <m.span
              className="mx-auto mb-4 block h-[3px] w-10 origin-left rounded-full bg-brand-accent md:mx-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 + 0.15 }}
            />
            <div className="text-4xl font-semibold tracking-tight text-brand-ink md:text-5xl">
              {"displayValue" in s && s.displayValue ? (
                s.displayValue
              ) : (
                <CountUp value={s.value as number} suffix={s.suffix} />
              )}
            </div>
            <div className="mt-2 text-sm font-semibold text-brand-charcoal">{s.label}</div>
            <div className="mt-0.5 text-xs text-brand-steel">{s.note}</div>
          </m.div>
        ))}
      </div>
    </section>
  );
}
