import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/funnel/header";
import { Footer } from "@/components/funnel/footer";
import { StickyCta } from "@/components/funnel/sticky-cta";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { MotionProvider } from "@/components/motion/motion-provider";
import { JsonLd } from "@/components/ui/json-ld";
import { rootMetadata } from "@/lib/metadata";
import { localBusinessSchema } from "@/lib/schema";

const display = Sora({ subsets: ["latin"], variable: "--font-display", display: "swap", weight: ["400", "500", "600"] });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = rootMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen">
        <SmoothScroll />
        <JsonLd data={localBusinessSchema()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          <main id="main" className="pb-[56px] lg:pb-0">
            {children}
          </main>
          <Footer />
          <StickyCta />
        </MotionProvider>
      </body>
    </html>
  );
}
