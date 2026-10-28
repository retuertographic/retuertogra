// Supported languages. To add one: add it here, give it a site/shop segment,
// then add its dictionary (src/i18n/dictionaries) and shop copy (src/shop/i18n).
// TypeScript flags every place that still needs the new locale.
export const locales = ["en", "es", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export type LocaleConfig = {
  /** First URL segment of the main site (`null` = served from "/"). */
  siteSegment: string | null;
  /** First URL segment of the shop (e.g. /shop, /tienda, /laden). */
  shopSegment: string;
  nativeName: string;
  flag: string;
  /** Open Graph locale. */
  ogLocale: string;
  /** Language names as written in each locale (WPML-style switcher labels). */
  names: Record<Locale, string>;
};

export const localeConfig: Record<Locale, LocaleConfig> = {
  en: {
    siteSegment: null,
    shopSegment: "shop",
    nativeName: "English",
    flag: "flag-en.svg",
    ogLocale: "en_GB",
    names: { en: "English", es: "Inglés", de: "Englisch" },
  },
  es: {
    siteSegment: "es",
    shopSegment: "tienda",
    nativeName: "Español",
    flag: "flag-es.svg",
    ogLocale: "es_ES",
    names: { en: "Spanish", es: "Español", de: "Spanisch" },
  },
  de: {
    siteSegment: "de",
    shopSegment: "laden",
    nativeName: "Deutsch",
    flag: "flag-de.svg",
    ogLocale: "de_DE",
    names: { en: "German", es: "Alemán", de: "Deutsch" },
  },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
