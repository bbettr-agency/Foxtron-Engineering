import { Hero } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { Capabilities } from "@/components/sections/capabilities";
import { Machinery } from "@/components/sections/machinery";
import { WhyUs } from "@/components/sections/why-us";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import { Quality } from "@/components/sections/quality";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

/** Homepage section order = the buyer journey (blueprint §9). */
export function HomeView() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Capabilities />
      <Machinery />
      <WhyUs />
      <GalleryPreview />
      <Quality />
      <Process />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
