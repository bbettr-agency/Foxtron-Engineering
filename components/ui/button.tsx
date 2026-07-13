import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 ease-reveal focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  // Accent = the conversion color, reserved for primary CTAs (OS rule).
  primary: "bg-brand-accentDark text-white hover:bg-brand-accent hover:-translate-y-0.5 shadow-accent",
  secondary: "bg-brand-primary text-white hover:bg-brand-primaryLight hover:-translate-y-0.5",
  ghost: "bg-transparent text-brand-primary ring-1 ring-inset ring-brand-steel/40 hover:bg-brand-mist",
  whatsapp: "bg-whatsapp text-white hover:brightness-95 hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-sm min-h-[44px]",
  lg: "px-7 py-4 text-base min-h-[52px]",
};

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
  "aria-label"?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
  ...rest
}: ButtonLinkProps) {
  const cls = cn(base, variants[variant], sizes[size], className);
  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
