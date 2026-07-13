import type { Metadata } from "next";
import { HomeView } from "@/views/home-view";
import { buildMetadata, pageSeo } from "@/lib/metadata";
import { JsonLd } from "@/components/ui/json-ld";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(pageSeo.home);

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema()} />
      <HomeView />
    </>
  );
}
