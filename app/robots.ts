import type { MetadataRoute } from "next";
import { site } from "@/config/site-config";

const disallow = ["/api/", "/thank-you"];

/**
 * AI search & assistant crawlers are explicitly allowed (documents intent and
 * protects against accidental blocking). Training-only crawlers are allowed too –
 * citation by AI systems is a goal for this site.
 */
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
  "Amazonbot",
  "meta-externalagent",
  "DuckAssistBot",
  "MistralAI-User",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      { userAgent: aiCrawlers, allow: "/", disallow },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
