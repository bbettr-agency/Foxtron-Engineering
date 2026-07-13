import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/ui/json-ld";
import { buildMetadata, pageSeo } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(pageSeo.faq);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "FAQs", path: "/faq" },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[faqSchema(), breadcrumbSchema(crumbs)]} />
      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions"
        body="Materials, thicknesses, file formats, lead times and how to request a quote."
        crumbs={crumbs}
      />
      <Faq />
      <FinalCta />
    </>
  );
}
