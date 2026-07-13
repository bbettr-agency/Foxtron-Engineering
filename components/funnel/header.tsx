"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button";
import { nav, cta, site } from "@/config/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-shadow duration-200",
        scrolled ? "bg-white/95 shadow-card backdrop-blur" : "bg-white",
      )}
    >
      <div className="container-page flex h-[var(--header-h)] items-center justify-between">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-graphite transition-colors hover:text-brand-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={cta.call.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-accent"
          >
            <Phone size={16} aria-hidden /> {site.contact.phoneDisplay}
          </a>
          <ButtonLink href={cta.quote.href}>{cta.quote.label}</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-brand-primary lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden">
          <nav
            aria-label="Mobile"
            className="container-page flex flex-col gap-1 border-t border-brand-mist bg-white pb-6 pt-2"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-brand-graphite hover:bg-brand-mist"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              <ButtonLink href={cta.quote.href} size="lg" className="w-full">
                {cta.quoteUpload.label}
              </ButtonLink>
              <ButtonLink href={cta.call.href} variant="ghost" size="lg" className="w-full">
                <Phone size={18} aria-hidden /> Call {site.contact.phoneDisplay}
              </ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
