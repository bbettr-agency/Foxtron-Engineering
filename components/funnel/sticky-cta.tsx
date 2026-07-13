"use client";

import { Phone, FileText, MessageCircle } from "lucide-react";
import { cta } from "@/config/site-config";

/** Sticky mobile action bar — Call · Quote · WhatsApp. Hidden on lg+. */
export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-mist bg-white/95 backdrop-blur lg:hidden">
      <div className="grid grid-cols-3">
        <a
          href={cta.call.href}
          className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 py-2 text-xs font-semibold text-brand-primary"
          data-analytics="call_click"
        >
          <Phone size={20} aria-hidden />
          Call
        </a>
        <a
          href={cta.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 border-x border-brand-mist py-2 text-xs font-semibold text-whatsapp"
          data-analytics="whatsapp_click"
        >
          <MessageCircle size={20} aria-hidden />
          WhatsApp
        </a>
        <a
          href={cta.quote.href}
          className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 bg-brand-accentDark py-2 text-xs font-semibold text-white"
          data-analytics="quote_click"
        >
          <FileText size={20} aria-hidden />
          Quote
        </a>
      </div>
    </div>
  );
}
