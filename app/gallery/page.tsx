import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/ui/json-ld";
import { buildMetadata, pageSeo } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { factory } from "@/config/images";

export const metadata: Metadata = buildMetadata(pageSeo.gallery);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
];

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Our work"
        title="Inside the Foxtron workshop"
        body="Machinery, processes and finished parts — photographed on our floor in Sunderland Ridge, Centurion."
        crumbs={crumbs}
        image={factory.floor1}
      />
      <GalleryGrid />
      <FinalCta />
    </>
  );
}
