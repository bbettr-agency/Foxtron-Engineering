"use client";

import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { Phone, ArrowRight, Check, ChevronDown } from "lucide-react";
import { ImageSlot } from "@/components/ui/image-slot";
import { ButtonLink } from "@/components/ui/button";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { Marquee } from "@/components/ui/marquee";
import { hero } from "@/config/images";
import { site, cta } from "@/config/site-config";
import { EASE, stagger, fadeUp } from "@/components/motion/anim";

const proofPoints = [
  "In-house laser, bending, welding & assembly",
  "One-off prototypes to full production runs",
  "Serving business across Gauteng since 1992",
];

const ticker = [
  "Laser Cutting",
  "CNC Bending",
  "CNC Punching",
  "Welding & Assembly",
  "Machining & Finishing",
  "Roll Work",
  "Custom Fabrication",
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.65]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-brand-ink">
      {/* Parallax background (LCP — loads instantly, only transforms) */}
      <m.div style={{ y: imgY }} className="absolute inset-0 -bottom-24">
        <ImageSlot image={hero.main} priority sizes="100vw" className="h-full w-full" />
      </m.div>
      <m.div style={{ opacity: overlayOpacity }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-brand-ink/85 to-brand-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-transparent to-brand-ink/30" />
      </m.div>

      <div className="container-page relative flex min-h-[92vh] flex-col justify-center pt-28 pb-16 md:min-h-screen">
        <div className="max-w-2xl">
          <m.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            Precision metal fabrication · Centurion
          </m.p>

          <AnimatedHeading
            as="h1"
            text="Precision sheet metal fabrication, built for"
            highlight="industry."
            className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl"
          />

          <m.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-brand-mist"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
          >
            Laser cutting, CNC bending and metal fabrication under one roof in Centurion — from a
            single prototype to full production runs. {site.rfqResponse}
          </m.p>

          <m.ul
            className="mt-8 space-y-2.5"
            variants={stagger(0.1, 0.6)}
            initial="hidden"
            animate="show"
          >
            {proofPoints.map((p) => (
              <m.li key={p} variants={fadeUp} className="flex items-center gap-3 text-sm text-brand-mist md:text-base">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent/20">
                  <Check size={13} className="text-brand-accentLight" aria-hidden />
                </span>
                {p}
              </m.li>
            ))}
          </m.ul>

          <m.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 1 }}
          >
            <ButtonLink href={cta.quote.href} size="lg" className="group">
              {cta.quoteUpload.label}
              <ArrowRight size={18} aria-hidden className="transition-transform duration-200 group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink href={cta.call.href} variant="ghost" size="lg" className="!text-white !ring-white/30 hover:!bg-white/10">
              <Phone size={18} aria-hidden /> {site.contact.phoneDisplay}
            </ButtonLink>
          </m.div>
        </div>

        {/* Scroll cue */}
        <m.div
          className="absolute bottom-28 left-1/2 hidden -translate-x-1/2 lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <m.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown className="text-brand-mist/60" aria-hidden />
          </m.div>
        </m.div>
      </div>

      {/* Capability ticker anchored to the base of the hero */}
      <div className="relative border-y border-white/10 bg-brand-ink/70 py-4 backdrop-blur-sm">
        <Marquee items={ticker} />
      </div>
    </section>
  );
}
