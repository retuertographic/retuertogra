import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/config/site";
import { type Locale, locales } from "@/i18n/config";
import { siteHref } from "@/i18n/routing";
import { legalAlternates, legalDocIds } from "@/legal/registry";
import { allShopRoutes, shopAlternates } from "@/shop/routes";

export const dynamic = "force-static";

const absolute = (href: string) => (href.startsWith("http") ? href : `${SITE_ORIGIN}${href}`);

function entries(alternates: Record<Locale, string>, priority: number): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, absolute(alternates[l])]));
  return locales.map((l) => ({
    url: absolute(alternates[l]),
    changeFrequency: "monthly",
    priority,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const home = Object.fromEntries(locales.map((l) => [l, siteHref(l)])) as Record<Locale, string>;
  return [
    ...entries(home, 1),
    ...legalDocIds.flatMap((id) => entries(legalAlternates(id), id === "faq" ? 0.5 : 0.3)),
    ...allShopRoutes().flatMap((route) =>
      entries(shopAlternates(route), route.type === "home" ? 0.9 : route.type === "product" ? 0.7 : 0.8),
    ),
  ];
}
