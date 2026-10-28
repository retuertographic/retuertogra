import { type Locale, locales } from "@/i18n/config";
import { shopHref } from "@/i18n/routing";
import { categories, getProduct, products } from "./catalog";
import { shopCopy } from "./i18n";
import type { CategoryId, ProductId } from "./types";

export type ShopRoute =
  | { type: "home" }
  | { type: "products" }
  | { type: "contact" }
  | { type: "category"; id: CategoryId }
  | { type: "product"; id: ProductId };

/** URL segments (after /shop, /tienda, /laden…) for a route in a locale. */
export function shopPath(locale: Locale, route: ShopRoute): string[] {
  const copy = shopCopy[locale];
  switch (route.type) {
    case "home":
      return [];
    case "products":
      return [copy.pages.products.slug];
    case "contact":
      return [copy.pages.contact.slug];
    case "category":
      return [copy.categories[route.id].slug];
    case "product": {
      const product = getProduct(route.id);
      return [copy.categories[product.category].slug, copy.products[route.id].slug];
    }
  }
}

export function shopRouteHref(locale: Locale, route: ShopRoute, hash = ""): string {
  return shopHref(locale, shopPath(locale, route), hash);
}

/** The same page in every locale (language switcher + hreflang). */
export function shopAlternates(route: ShopRoute): Record<Locale, string> {
  return Object.fromEntries(locales.map((l) => [l, shopRouteHref(l, route)])) as Record<Locale, string>;
}

export function allShopRoutes(): ShopRoute[] {
  return [
    { type: "home" },
    { type: "products" },
    { type: "contact" },
    ...categories.map((c) => ({ type: "category" as const, id: c.id })),
    ...products.map((p) => ({ type: "product" as const, id: p.id })),
  ];
}

/** Match URL segments to a route; null → 404. */
export function resolveShopRoute(locale: Locale, slug: string[]): ShopRoute | null {
  const key = slug.join("/");
  return allShopRoutes().find((route) => shopPath(locale, route).join("/") === key) ?? null;
}
