"use client";

import { m } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/config/content-config";
import { EASE, viewportOnce } from "@/components/motion/anim";

export function Process() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title="From drawing to delivery"
          body="A simple, fast route from enquiry to finished parts – designed to get you an accurate quote and a reliable turnaround."
        />

        <div className="relative mt-16">
          {/* drawn connector line (desktop) */}
          <div className="absolute left-0 right-0 top-6 hidden lg:block">
            <div className="relative mx-[12.5%] h-px bg-brand-mist">
              <m.div
                className="absolute inset-y-0 left-0 origin-left bg-brand-accent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 1.4, ease: EASE }}
                style={{ width: "100%" }}
              />
            </div>
          </div>

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((s, i) => (
              <m.li
                key={s.step}
                className="relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.18 }}
              >
                <m.span
                  className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-accent bg-white text-sm font-semibold text-brand-accentDark"
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, ease: EASE, delay: i * 0.18 + 0.2 }}
                >
                  {s.step}
                </m.span>
                <h3 className="mt-5 text-lg font-semibold text-brand-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-graphite">{s.body}</p>
              </m.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
