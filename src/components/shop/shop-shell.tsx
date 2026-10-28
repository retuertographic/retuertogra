import type { Locale } from "@/i18n/config";
import { type NavItem, dictionaries } from "@/i18n/dictionaries";
import { shopHref, siteHref } from "@/i18n/routing";
import { categories } from "@/shop/catalog";
import { shopCopy } from "@/shop/i18n";
import { type ShopRoute, shopAlternates, shopRouteHref } from "@/shop/routes";
import { mainMenu } from "@/components/layout/main-menu";
import { quoteHref, whatsappHref } from "./links";
import { MobileCtaBar } from "./mobile-cta-bar";
import { ShopFooter } from "./shop-footer";
import { ShopHeader } from "./shop-header";

/** Shop menu, built from the catalog so new categories appear automatically. */
export function shopNav(locale: Locale): NavItem[] {
  const { ui, categories: categoryCopy } = shopCopy[locale];
  const { anchors } = dictionaries[locale];
  return [
    { label: ui.home, href: siteHref(locale) },
    {
      label: ui.services,
      href: shopRouteHref(locale, { type: "home" }),
      children: categories.map((c) => ({
        label: categoryCopy[c.id].name,
        href: shopRouteHref(locale, { type: "category", id: c.id }),
      })),
    },
    { label: ui.products, href: shopRouteHref(locale, { type: "products" }) },
    { label: ui.projects, href: siteHref(locale, `#${anchors.projects}`) },
    { label: ui.about, href: siteHref(locale, `#${anchors.about}`) },
    { label: ui.contact, href: shopRouteHref(locale, { type: "contact" }) },
  ];
}

function activeNavHref(locale: Locale, route: ShopRoute): string {
  if (route.type === "products") return shopRouteHref(locale, { type: "products" });
  if (route.type === "contact") return shopRouteHref(locale, { type: "contact" });
  return shopRouteHref(locale, { type: "home" }); // "Services"
}

export function ShopShell({
  locale,
  route,
  whatsappText,
  children,
}: {
  locale: Locale;
  route: ShopRoute;
  whatsappText?: string;
  children: React.ReactNode;
}) {
  const dict = dictionaries[locale];
  const { ui } = shopCopy[locale];
  const alternates = shopAlternates(route);
  return (
    <div className="shop-ui flex min-h-full flex-1 flex-col">
      <ShopHeader
        locale={locale}
        nav={shopNav(locale)}
        menu={mainMenu(locale)}
        menuActiveHref={shopHref(locale)}
        activeHref={activeNavHref(locale, route)}
        homeHref={siteHref(locale)}
        alternates={alternates}
        quoteHref={quoteHref(locale)}
        searchHref={shopRouteHref(locale, { type: "home" }, "#buscar")}
        strings={{ ...dict.header, quote: ui.quoteShort, search: ui.search.open }}
      />
      <main className="flex-1 overflow-x-clip">{children}</main>
      <ShopFooter locale={locale} alternates={alternates} />
      <MobileCtaBar quoteHref={quoteHref(locale)} quoteLabel={ui.quoteShort} whatsappHref={whatsappHref(whatsappText ?? ui.whatsappMessage)} />
    </div>
  );
}
