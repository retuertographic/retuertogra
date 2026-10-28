import { BASE_PATH, MAIN_ORIGIN, SHOP_ORIGIN } from "@/config/site";
import { type Locale, localeConfig, locales } from "./config";

export type Area = "site" | "shop";

/** URL of the current page in every locale (drives the language switcher and hreflang). */
export type Alternates = Record<Locale, string>;

/** Locale and area served under a first URL segment (/es, /tienda, /laden…). */
export function resolveSegment(segment: string): { locale: Locale; area: Area } | null {
  for (const locale of locales) {
    const config = localeConfig[locale];
    if (config.siteSegment === segment) return { locale, area: "site" };
    if (config.shopSegment === segment) return { locale, area: "shop" };
  }
  return null;
}

/** Every first segment handled by the app/(i18n)/[segment] root layout. */
export function allSegments(): string[] {
  return locales.flatMap((locale) => {
    const { siteSegment, shopSegment } = localeConfig[locale];
    return siteSegment ? [siteSegment, shopSegment] : [shopSegment];
  });
}

function join(parts: (string | null | undefined)[]): string {
  const path = parts.filter(Boolean).join("/");
  return path ? `/${path}/` : "/";
}

/** Main-site page path, e.g. siteHref("es") → "/es/", siteHref("en", "#about"). */
export function siteHref(locale: Locale, hash = ""): string {
  return `${MAIN_ORIGIN}${BASE_PATH}${join([localeConfig[locale].siteSegment])}${hash}`;
}

/** Shop page path, e.g. shopHref("es", ["automatizaciones"]) → "/tienda/automatizaciones/". */
export function shopHref(locale: Locale, path: string[] = [], hash = ""): string {
  return `${SHOP_ORIGIN}${BASE_PATH}${join([localeConfig[locale].shopSegment, ...path])}${hash}`;
}
