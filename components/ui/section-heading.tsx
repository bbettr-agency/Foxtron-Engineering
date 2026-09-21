import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  tone?: "dark" | "light"; // light = for dark backgrounds
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        align === "center" ? "mx-auto text-center" : "text-left",
        "max-w-3xl",
        className,
      )}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={cn(
          "mt-3 text-3xl font-semibold leading-[1.08] tracking-tight md:text-4xl lg:text-5xl",
          tone === "light" ? "text-white" : "text-brand-ink",
        )}
      >
        {title}
      </h2>
      {body && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            tone === "light" ? "text-brand-mist" : "text-brand-graphite",
            align === "center" && "mx-auto",
            "max-w-prose",
          )}
        >
          {body}
        </p>
      )}
    </Reveal>
  );
}
