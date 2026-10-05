"use client";

import { Phone, FileText } from "lucide-react";
import { cta } from "@/config/site-config";

/** Sticky mobile action bar – Call · Request a Quote. Hidden on lg+. */
export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-mist bg-white/95 backdrop-blur lg:hidden">
      <div className="grid grid-cols-2">
        <a
          href={cta.call.href}
          className="flex min-h-[56px] items-center justify-center gap-2 py-2 text-sm font-semibold text-brand-primary"
          data-analytics="call_click"
        >
          <Phone size={18} aria-hidden />
          Call
        </a>
        <a
          href={cta.quote.href}
          className="flex min-h-[56px] items-center justify-center gap-2 bg-brand-accentDark py-2 text-sm font-semibold text-white"
          data-analytics="quote_click"
        >
          <FileText size={18} aria-hidden />
          Request a Quote
        </a>
      </div>
    </div>
  );
}
