import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Team } from "@/components/sections/team";
import { Quality } from "@/components/sections/quality";
import { StatsBar } from "@/components/sections/stats-bar";
import { FinalCta } from "@/components/sections/final-cta";
import { ImageSlot } from "@/components/ui/image-slot";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/ui/json-ld";
import { buildMetadata, pageSeo } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { factory, team } from "@/config/images";
import { differentiators } from "@/config/content-config";

export const metadata: Metadata = buildMetadata(pageSeo.about);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="About Foxtron"
        title="A Centurion fabrication partner since 1992"
        body="From a small operation to a trusted sheet metal fabrication partner for business, OEM and trade clients across Gauteng."
        crumbs={crumbs}
        image={factory.floor1}
      />

      <section className="section-pad bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-brand-graphite">
              Foxtron Engineering has been fabricating precision sheet metal in Sunderland Ridge,
              Centurion since 1992. Over three decades we&apos;ve grown from a small operation into a
              reliable partner for businesses that need both low-volume prototypes and high-volume
              production runs.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-brand-graphite">
              With laser cutting, CNC bending, punching, welding, assembly and finishing all in-house,
              we control quality and lead time from raw sheet to finished, assembled component.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {differentiators.map((d) => (
                <li key={d.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accentDark">
                    <Check size={15} aria-hidden />
                  </span>
                  <span className="font-medium text-brand-charcoal">{d.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <Reveal>
            <ImageSlot image={team.group} sizes="(max-width:1024px) 100vw, 50vw" className="w-full rounded-3xl" />
          </Reveal>
        </div>
      </section>

      <StatsBar />
      <Team />
      <Quality />
      <FinalCta />
    </>
  );
}
