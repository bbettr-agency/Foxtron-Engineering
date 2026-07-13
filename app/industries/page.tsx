import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Industries } from "@/components/sections/industries";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/ui/json-ld";
import { buildMetadata, pageSeo } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { factory } from "@/config/images";

export const metadata: Metadata = buildMetadata(pageSeo.industries);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
];

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Industries"
        title="Fabrication for business & industry"
        body="Precision metal parts and assemblies for automotive, construction, electrical, OEM and general engineering clients across Gauteng."
        crumbs={crumbs}
        image={factory.floor2}
      />
      <Industries />
      <FinalCta />
    </>
  );
}
