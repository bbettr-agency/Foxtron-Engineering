import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ImageSlot } from "@/components/ui/image-slot";
import { team, teamRoster } from "@/config/images";

// Named leaders [verified from live site]. Photo identity is UNCONFIRMED, so each
// leader card shows a labeled placeholder until the client maps a portrait to a
// name (config/images.ts team.anton/monica/karl). Names + roles are real facts.
const leaders = [
  { name: "Anton Lubbe", role: "Director & Shareholder", image: team.anton },
  { name: "Monica Kruger", role: "Managing Director", image: team.monica },
  { name: "Karl Lubbe", role: "Production Director", image: team.karl },
];

export function Team() {
  return (
    <section id="team" className="section-pad bg-brand-bone">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our people"
          title="The team behind the work"
          body="An established, hands-on team that has grown Foxtron from a small operation into a trusted fabrication partner."
        />

        {/* Leadership */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((l, i) => (
            <Reveal key={l.name} delay={(i % 3) * 0.08} as="article" className="overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-brand-mist">
              <ImageSlot image={l.image} sizes="(max-width:768px) 100vw, 33vw" className="aspect-[4/5] w-full" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-brand-ink">{l.name}</h3>
                <p className="text-sm text-brand-accentDark">{l.role}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Full team grid */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {teamRoster.map((p, i) => (
            <Reveal key={p.src} delay={(i % 7) * 0.05} className="overflow-hidden rounded-2xl ring-1 ring-brand-mist">
              <ImageSlot image={p} sizes="(max-width:768px) 50vw, 14vw" className="aspect-[4/5] w-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
