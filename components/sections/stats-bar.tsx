import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { stats } from "@/config/content-config";

export function StatsBar() {
  return (
    <section className="border-b border-brand-mist bg-white">
      <div className="container-page grid grid-cols-2 gap-8 py-12 md:grid-cols-4 md:py-14">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center md:text-left">
            <div className="text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
              {"displayValue" in s && s.displayValue ? (
                s.displayValue
              ) : (
                <CountUp value={s.value as number} suffix={s.suffix} />
              )}
            </div>
            <div className="mt-1 text-sm font-semibold text-brand-charcoal">{s.label}</div>
            <div className="mt-0.5 text-xs text-brand-steel">{s.note}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
