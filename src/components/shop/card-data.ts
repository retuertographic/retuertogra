import type { Locale } from "@/i18n/config";
import { getCategory, getProduct, productBadge, solutionGroups } from "@/shop/catalog";
import { shopCopy } from "@/shop/i18n";
import { shopRouteHref } from "@/shop/routes";
import type { Category, CategoryId, Product, ProductId, SolutionGroupId } from "@/shop/types";
import { formatEuro, periodSuffix } from "./price";
import type { IconKey } from "./ui";

// Plain, serialisable view models shared by server pages and the client filter.

export type ProductCardData = {
  id: ProductId;
  href: string;
  category: CategoryId;
  categoryLabel: string;
  name: string;
  summary: string;
  priceLabel: string;
  priceMain: string;
  priceSuffix: string;
  isQuote: boolean;
  badge: { kind: "subscription" | "custom"; label: string } | null;
  image?: string;
  placeholder: { icon: IconKey; tone: "brand" | "dark" };
  /** Cart button for products with a price, arrow for custom quotes. */
  action: "cart" | "arrow";
  search: string;
};

export type SolutionItemData = { id: ProductId; href: string; name: string; category: CategoryId; search: string };
export type SolutionGroupData = { id: SolutionGroupId; title: string; icon: IconKey; items: SolutionItemData[] };
export type CategoryCardData = { id: CategoryId; href: string; icon: IconKey; name: string; summary: string; chip: string };

export const normalize = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

export function productCardData(locale: Locale, product: Product): ProductCardData {
  const { ui, products, categories } = shopCopy[locale];
  const text = products[product.id];
  const cat = categories[product.category];
  const { price } = product;
  let priceLabel = ui.price.label;
  let priceMain = ui.price.quote;
  let priceSuffix = "";
  if (price.kind === "from") {
    priceLabel = ui.price.from;
    priceMain = formatEuro(locale, price.amount);
    priceSuffix = periodSuffix(ui, price.period);
  } else if (price.kind === "tiers") {
    priceMain = formatEuro(locale, price.tiers[0].amount);
    priceSuffix = periodSuffix(ui, price.tiers[0].period);
  }
  const badge = productBadge(product);
  return {
    id: product.id,
    href: shopRouteHref(locale, { type: "product", id: product.id }),
    category: product.category,
    categoryLabel: cat.shortName,
    name: text.name,
    summary: text.summary,
    priceLabel,
    priceMain,
    priceSuffix,
    isQuote: price.kind === "quote",
    badge: badge ? { kind: badge, label: ui.badges[badge] } : null,
    image: product.image,
    placeholder: {
      icon: product.icon ?? getCategory(product.category).icon,
      tone: price.kind === "quote" ? "dark" : "brand",
    },
    action: price.kind === "quote" ? "arrow" : "cart",
    search: normalize([text.name, text.shortName, text.summary, ...text.features, cat.name, cat.shortName, cat.chip].filter(Boolean).join(" ")),
  };
}

export function solutionGroupsData(locale: Locale): SolutionGroupData[] {
  const { ui, products, categories } = shopCopy[locale];
  return solutionGroups.map((group) => ({
    id: group.id,
    title: ui.solutionGroups[group.id],
    icon: group.icon,
    items: group.products.map((id) => {
      const product = getProduct(id);
      const text = products[id];
      return {
        id,
        href: shopRouteHref(locale, { type: "product", id }),
        name: text.shortName ?? text.name,
        category: product.category,
        search: normalize([text.name, text.shortName, text.summary, categories[product.category].name].filter(Boolean).join(" ")),
      };
    }),
  }));
}

export function categoryCardData(locale: Locale, category: Category): CategoryCardData {
  const text = shopCopy[locale].categories[category.id];
  return {
    id: category.id,
    href: shopRouteHref(locale, { type: "category", id: category.id }),
    icon: category.icon,
    name: text.shortName,
    summary: text.shortSummary,
    chip: text.chip,
  };
}
