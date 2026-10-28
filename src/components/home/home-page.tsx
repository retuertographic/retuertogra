import type { Metadata } from "next";
import { BlogTeaser } from "@/components/blog/blog-pages";
import { PageShell } from "@/components/layout/page-shell";
import { JsonLd } from "@/components/shop/json-ld";
import { ShopHomePage } from "@/components/shop/shop-home";
import { organizationJsonLd } from "@/components/shop/structured-data";
import { SITE_ORIGIN } from "@/config/site";
import { type Locale, localeConfig, locales } from "@/i18n/config";
import { dictionaries } from "@/i18n/dictionaries";
import { siteHref } from "@/i18n/routing";

const homeAlternates = () =>
  Object.fromEntries(locales.map((l) => [l, siteHref(l)])) as Record<Locale, string>;

export function homeMetadata(locale: Locale): Metadata {
  const { meta } = dictionaries[locale];
  const alternates = homeAlternates();
  return {
    metadataBase: new URL(SITE_ORIGIN),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: alternates[locale],
      languages: { ...alternates, "x-default": alternates.en },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: alternates[locale],
      siteName: "Retuerto Graphic Design",
      locale: localeConfig[locale].ogLocale,
      type: "website",
    },
  };
}

/** Home: the shop home layout plus the blog / glossary block before the final CTA. */
export function HomePage({ locale }: { locale: Locale }) {
  return (
    <PageShell locale={locale} alternates={homeAlternates()} activeHref={siteHref(locale)}>
      <ShopHomePage locale={locale} beforeCta={<BlogTeaser locale={locale} />} />
      <JsonLd data={organizationJsonLd(locale)} />
    </PageShell>
  );
}
