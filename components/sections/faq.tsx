import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/config/faqs-config";

export function Faq() {
  return (
    <section id="faq" className="section-pad bg-white">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.4fr]">
        <SectionHeading
          eyebrow="FAQs"
          title="Answers before you ask"
          body="The things industrial buyers usually want to know before requesting a quote. Still unsure? Just call us."
        />
        <div className="divide-y divide-brand-mist border-t border-brand-mist">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                <span className="text-base font-semibold text-brand-ink md:text-lg">{f.q}</span>
                <Plus
                  size={20}
                  className="mt-1 shrink-0 text-brand-accent transition-transform duration-200 group-open:rotate-45"
                  aria-hidden
                />
              </summary>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-brand-graphite md:text-base">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
