import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { mainMenu } from "@/components/layout/main-menu";
import { quoteHref } from "@/components/shop/links";
import { shopCopy } from "@/shop/i18n";
import { SITE_ORIGIN } from "@/config/site";
import { type Locale, localeConfig, locales } from "@/i18n/config";
import { dictionaries } from "@/i18n/dictionaries";
import { siteHref } from "@/i18n/routing";
import { HeroCarousel } from "./hero-carousel";
import {
  CatalogSection,
  ConnectMindsSection,
  ConnectingExperiencesSection,
  ExpertiseSection,
  FeaturedWorkSection,
  LetsConnectSection,
  NewsletterSection,
  WhatWeDoSection,
} from "./sections";

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

export function HomePage({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];
  const alternates = homeAlternates();
  const homeHref = siteHref(locale);
  return (
    <>
      <SiteHeader locale={locale} nav={dict.nav} strings={dict.header} homeHref={homeHref} alternates={alternates} menu={mainMenu(locale)} quote={{ href: quoteHref(locale), label: shopCopy[locale].ui.quoteShort }} />
      <main className="overflow-x-hidden">
        <div className="pb-[60px] min-[1025px]:pb-[112px]">
          <HeroCarousel dict={dict} />
        </div>
        <ExpertiseSection dict={dict} />
        <WhatWeDoSection dict={dict} />
        <ConnectMindsSection dict={dict} />
        <FeaturedWorkSection dict={dict} />
        <CatalogSection dict={dict} locale={locale} />
        <NewsletterSection dict={dict} />
        <ConnectingExperiencesSection dict={dict} />
        <LetsConnectSection dict={dict} />
      </main>
      <SiteFooter locale={locale} strings={dict.footer} homeHref={homeHref} alternates={alternates} />
    </>
  );
}
