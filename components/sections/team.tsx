import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ImageSlot } from "@/components/ui/image-slot";
import { teamRoster } from "@/config/images";

// Genuine studio portraits of the Foxtron team. Identities are not published
// without client confirmation, so portraits are shown without individual names.
export function Team() {
  return (
    <section id="team" className="section-pad bg-brand-bone">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our people"
          title="The team behind the work"
          body="An established, hands-on team that has grown Foxtron from a small operation into a trusted fabrication partner for business across Gauteng."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {teamRoster.map((p, i) => (
            <Reveal
              key={p.src}
              delay={(i % 4) * 0.06}
              className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-brand-mist"
            >
              <ImageSlot image={p} sizes="(max-width:768px) 50vw, 25vw" className="aspect-[4/5] w-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
