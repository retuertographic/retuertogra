import { GlossaryPopover } from "@/components/blog/glossary-popover";
import { quoteHref, whatsappHref } from "@/components/shop/links";
import { MobileCtaBar } from "@/components/shop/mobile-cta-bar";
import { ShopFooter } from "@/components/shop/shop-footer";
import { ShopHeader } from "@/components/shop/shop-header";
import { blogUi } from "@/blog/registry";
import type { Locale } from "@/i18n/config";
import { dictionaries } from "@/i18n/dictionaries";
import { type Alternates, siteHref } from "@/i18n/routing";
import { shopCopy } from "@/shop/i18n";
import { shopRouteHref } from "@/shop/routes";
import { blogMenu, mainMenu, siteNav } from "./main-menu";

/**
 * Page frame shared by every page: header (desktop nav + hamburger menu),
 * footer, mobile CTA bar and the glossary popover. Change it once here.
 */
export function PageShell({
  locale,
  alternates,
  activeHref,
  whatsappText,
  children,
}: {
  locale: Locale;
  /** URL of the current page in every locale. */
  alternates: Alternates;
  /** href of the highlighted nav item. */
  activeHref?: string;
  whatsappText?: string;
  children: React.ReactNode;
}) {
  const dict = dictionaries[locale];
  const { ui } = shopCopy[locale];
  return (
    <div className="shop-ui flex min-h-full flex-1 flex-col">
      <ShopHeader
        locale={locale}
        nav={siteNav(locale)}
        menu={mainMenu(locale)}
        menuActiveHref={activeHref}
        activeHref={activeHref}
        homeHref={siteHref(locale)}
        alternates={alternates}
        quoteHref={quoteHref(locale)}
        searchHref={shopRouteHref(locale, { type: "home" }, "#buscar")}
        strings={{ ...dict.header, quote: ui.quoteShort, search: ui.search.open }}
        blogMenu={blogMenu(locale)}
      />
      <main className="flex-1 overflow-x-clip">{children}</main>
      <ShopFooter locale={locale} alternates={alternates} />
      <MobileCtaBar quoteHref={quoteHref(locale)} quoteLabel={ui.quoteShort} whatsappHref={whatsappHref(whatsappText ?? ui.whatsappMessage)} />
      <GlossaryPopover labels={{ see: blogUi[locale].glossary.seeInGlossary, close: blogUi[locale].glossary.close }} />
    </div>
  );
}
