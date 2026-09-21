"use client";

import { useState } from "react";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ImageSlot } from "@/components/ui/image-slot";
import { services } from "@/config/services-config";
import { services as serviceImages } from "@/config/images";
import { EASE } from "@/components/motion/anim";
import { cn } from "@/lib/utils";

export function Capabilities() {
  const [active, setActive] = useState(0);
  const activeService = services[active];
  const activeImage = activeService.imageKey ? serviceImages[activeService.imageKey].hero : undefined;

  return (
    <section id="services" className="section-pad bg-brand-bone">
      <div className="container-page">
        <SectionHeading
          eyebrow="What we do"
          title="Everything you need, under one roof"
          body="Cut, bend, punch, weld, assemble and finish — a complete in-house workflow means tighter quality control and faster turnaround, with no outsourcing delays."
        />

        {/* Desktop: interactive spotlight */}
        <div className="mt-14 hidden gap-12 lg:grid lg:grid-cols-[0.85fr_1fr]">
          <div className="sticky top-28 self-start">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-brand-ink shadow-glow rivets">
              <AnimatePresence mode="wait">
                <m.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="absolute inset-0"
                >
                  {activeImage ? (
                    <ImageSlot image={activeImage} sizes="40vw" className="h-full w-full" />
                  ) : (
                    <div className="flex h-full items-center justify-center text-brand-steel">Image coming soon</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/85 via-transparent to-transparent" />
                </m.div>
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accentLight">
                  {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-2xl font-semibold text-white">{activeService.name}</h3>
                <p className="mt-2 max-w-sm text-sm text-brand-mist">{activeService.summary}</p>
              </div>
            </div>
          </div>

          <ul className="divide-y divide-brand-steel/15 border-t border-brand-steel/15">
            {services.map((s, i) => {
              const isActive = i === active;
              const Row = (
                <div
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={cn(
                    "group flex items-center gap-5 py-6 transition-all duration-300",
                    isActive ? "pl-4" : "pl-0",
                  )}
                >
                  <span
                    className={cn(
                      "text-lg font-semibold tabular-nums transition-colors",
                      isActive ? "text-brand-accent" : "text-brand-steel/50",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span
                      className={cn(
                        "block text-2xl font-semibold tracking-tight transition-colors md:text-3xl",
                        isActive ? "text-brand-ink" : "text-brand-graphite",
                      )}
                    >
                      {s.name}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300",
                      isActive
                        ? "border-brand-accent bg-brand-accent text-white"
                        : "border-brand-steel/25 text-brand-steel",
                    )}
                  >
                    {s.hasPage ? <ArrowUpRight size={20} aria-hidden /> : <span className="h-1.5 w-1.5 rounded-full bg-current" />}
                  </span>
                </div>
              );
              return (
                <li key={s.slug}>
                  {s.hasPage ? <Link href={`/services/${s.slug}`}>{Row}</Link> : Row}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile: stacked cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:hidden">
          {services.map((s, i) => {
            const image = s.imageKey ? serviceImages[s.imageKey].hero : undefined;
            const inner = (
              <>
                {image && (
                  <div className="overflow-hidden rounded-2xl">
                    <ImageSlot image={image} sizes="(max-width:640px) 100vw, 50vw" className="aspect-[3/2] w-full" />
                  </div>
                )}
                <div className="mt-4 flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-brand-ink">{s.name}</h3>
                  {s.hasPage && <ArrowUpRight size={18} className="mt-1 shrink-0 text-brand-accent" aria-hidden />}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-graphite">{s.summary}</p>
              </>
            );
            return (
              <Reveal key={s.slug} delay={(i % 2) * 0.08} as="article">
                {s.hasPage ? (
                  <Link href={`/services/${s.slug}`} className="block h-full rounded-3xl bg-white p-4 shadow-card ring-1 ring-brand-mist">
                    {inner}
                  </Link>
                ) : (
                  <div className="h-full rounded-3xl bg-white p-4 shadow-card ring-1 ring-brand-mist">{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10">
          <Link href="/services" className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-accentDark">
            Explore all services
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
