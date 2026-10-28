import type { Locale } from "@/i18n/config";
import { type NavItem, dictionaries } from "@/i18n/dictionaries";
import { categories } from "@/shop/catalog";
import { shopCopy } from "@/shop/i18n";
import { shopRouteHref } from "@/shop/routes";

/**
 * Hamburger menu items, shared by every page (main site, legal pages and shop)
 * so the mobile menu is always the same. The shop entry lists its catalogue.
 */
export function mainMenu(locale: Locale): NavItem[] {
  const { ui, categories: categoryCopy } = shopCopy[locale];
  return dictionaries[locale].nav.map((item) =>
    item.highlight
      ? {
          ...item,
          children: [
            { label: ui.products, href: shopRouteHref(locale, { type: "products" }) },
            ...categories.map((c) => ({
              label: categoryCopy[c.id].name,
              href: shopRouteHref(locale, { type: "category", id: c.id }),
            })),
          ],
        }
      : item,
  );
}
