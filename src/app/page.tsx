import { HeroCarousel } from "@/components/sites/retuertographicdesign/hero-carousel";
import {
  CatalogSection,
  ConnectMindsSection,
  ConnectingExperiencesSection,
  ExpertiseSection,
  FeaturedWorkSection,
  LetsConnectSection,
  NewsletterSection,
  WhatWeDoSection,
} from "@/components/sites/retuertographicdesign/sections";
import { SiteFooter } from "@/components/sites/retuertographicdesign/site-footer";
import { SiteHeader } from "@/components/sites/retuertographicdesign/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden">
        <div className="pb-[60px] min-[1025px]:pb-[112px]">
          <HeroCarousel />
        </div>
        <ExpertiseSection />
        <WhatWeDoSection />
        <ConnectMindsSection />
        <FeaturedWorkSection />
        <CatalogSection />
        <NewsletterSection />
        <ConnectingExperiencesSection />
        <LetsConnectSection />
      </main>
      <SiteFooter />
    </>
  );
}
