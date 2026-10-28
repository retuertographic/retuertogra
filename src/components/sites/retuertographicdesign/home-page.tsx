import type { Metadata } from "next";
import { HeroCarousel } from "./hero-carousel";
import { type Locale, dictionaries, localeHref, locales } from "./i18n";
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
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

const siteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN;

export function homeMetadata(locale: Locale): Metadata {
  const { meta } = dictionaries[locale];
  return {
    ...(siteOrigin && { metadataBase: new URL(siteOrigin) }),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localeHref(locale),
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, localeHref(l)])),
        "x-default": localeHref("en"),
      },
    },
  };
}

export function HomePage({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];
  return (
    <>
      <SiteHeader locale={locale} dict={dict} />
      <main className="overflow-x-hidden">
        <div className="pb-[60px] min-[1025px]:pb-[112px]">
          <HeroCarousel dict={dict} />
        </div>
        <ExpertiseSection dict={dict} />
        <WhatWeDoSection dict={dict} />
        <ConnectMindsSection dict={dict} />
        <FeaturedWorkSection dict={dict} />
        <CatalogSection dict={dict} />
        <NewsletterSection dict={dict} />
        <ConnectingExperiencesSection dict={dict} />
        <LetsConnectSection dict={dict} />
      </main>
      <SiteFooter locale={locale} dict={dict} />
    </>
  );
}
