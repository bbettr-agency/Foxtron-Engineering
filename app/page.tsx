import type { Metadata } from "next";
import { HomeView } from "@/views/home-view";
import { buildMetadata, pageSeo } from "@/lib/metadata";
import { JsonLd } from "@/components/ui/json-ld";
import { graph, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(pageSeo.home);

// FAQPage markup lives on /faq only (the home page shows the same questions visually).
export default function HomePage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/", name: pageSeo.home.title, description: pageSeo.home.description }),
        )}
      />
      <HomeView />
    </>
  );
}
