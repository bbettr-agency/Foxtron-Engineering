import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Capabilities } from "@/components/sections/capabilities";
import { Machinery } from "@/components/sections/machinery";
import { Process } from "@/components/sections/process";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/ui/json-ld";
import { buildMetadata, pageSeo } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { hero } from "@/config/images";

export const metadata: Metadata = buildMetadata(pageSeo.services);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Our capabilities"
        title="In-house fabrication, end to end"
        body="Laser cutting, CNC bending, punching, welding, assembly and finishing — a complete workflow under one roof in Centurion."
        crumbs={crumbs}
        image={hero.main}
      />
      <Capabilities />
      <Machinery />
      <Process />
      <FinalCta />
    </>
  );
}
