import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { site, nav, cta } from "@/config/site-config";
import { servicePages } from "@/config/services-config";

export function Footer() {
  const year = new Date().getFullYear();
  const a = site.address;

  return (
    <footer className="brushed-steel bg-brand-ink text-brand-mist">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo invert className="h-10" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-steel">
            {site.descriptionShort}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {servicePages.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-brand-mist hover:text-brand-accentLight">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-brand-mist hover:text-brand-accentLight">
                All services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-brand-mist hover:text-brand-accentLight">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/quote" className="text-brand-mist hover:text-brand-accentLight">
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="shrink-0 text-brand-accentLight" aria-hidden />
              <span>
                {a.street}, {a.suburb}, {a.city}, {a.province} {a.postalCode}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 text-brand-accentLight" aria-hidden />
              <a href={cta.call.href} className="hover:text-brand-accentLight">
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="shrink-0 text-brand-accentLight" aria-hidden />
              <a href={cta.email.href} className="hover:text-brand-accentLight">
                {site.contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock size={18} className="shrink-0 text-brand-accentLight" aria-hidden />
              <span>
                {site.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-brand-steel sm:flex-row">
          <p>
            © {year} {site.name}. Serving {site.areasServed.slice(0, -1).join(", ")} & {site.areasServed.at(-1)}.
          </p>
          <a href={site.agency.url} target="_blank" rel="noopener noreferrer" className="hover:text-brand-mist">
            {site.agency.label}
          </a>
        </div>
      </div>
    </footer>
  );
}
