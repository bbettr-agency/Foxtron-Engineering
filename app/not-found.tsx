import { Home, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { site, cta } from "@/config/site-config";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-brand-bone">
      <div className="container-page text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink md:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-brand-graphite">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            <Home size={18} aria-hidden /> Back to home
          </ButtonLink>
          <ButtonLink href={cta.call.href} variant="ghost" size="lg">
            <Phone size={18} aria-hidden /> Call {site.contact.phoneDisplay}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
