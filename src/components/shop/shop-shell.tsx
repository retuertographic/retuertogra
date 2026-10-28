import { MessageCircle } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import type { Locale } from "@/i18n/config";
import { type NavItem, dictionaries } from "@/i18n/dictionaries";
import { siteHref } from "@/i18n/routing";
import { categories } from "@/shop/catalog";
import { shopCopy } from "@/shop/i18n";
import { type ShopRoute, shopAlternates, shopRouteHref } from "@/shop/routes";
import { whatsappHref } from "./links";

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
  const home = shopRouteHref(locale, { type: "home" });
  return (
    <>
      <SiteHeader locale={locale} nav={shopNav(locale)} strings={dict.header} homeHref={siteHref(locale)} alternates={alternates} />
      <main className="flex-1 overflow-x-hidden">{children}</main>
      <SiteFooter locale={locale} strings={{ ...dict.footer, shop: { label: dict.footer.shop.label, href: home } }} homeHref={siteHref(locale)} alternates={alternates} />
      <a
        href={whatsappHref(whatsappText ?? ui.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ui.floatingWhatsapp}
        title={ui.floatingWhatsapp}
        className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="size-7" aria-hidden="true" />
      </a>
    </>
  );
}
