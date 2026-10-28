import type { Locale } from "@/i18n/config";
import type { ShopUi, BillingPeriod, Product } from "@/shop/types";

export function formatEuro(locale: Locale, amount: number): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
  }).format(amount);
}

export function periodSuffix(ui: ShopUi, period?: BillingPeriod): string {
  if (period === "month") return ui.price.perMonth;
  if (period === "year") return ui.price.perYear;
  return "";
}

/** Short price line for cards: "Desde 40 €/mes", "180 €", "Presupuesto a medida". */
export function priceLine(locale: Locale, ui: ShopUi, product: Product): string {
  const { price } = product;
  if (price.kind === "from") {
    return `${ui.price.from} ${formatEuro(locale, price.amount)}${periodSuffix(ui, price.period)}`;
  }
  if (price.kind === "tiers") {
    const first = price.tiers[0];
    return `${formatEuro(locale, first.amount)}${periodSuffix(ui, first.period)}`;
  }
  return ui.price.quote;
}

/** Lowest price, for structured data. */
export function lowestPrice(product: Product): number | null {
  const { price } = product;
  if (price.kind === "from") return price.amount;
  if (price.kind === "tiers") return Math.min(...price.tiers.map((t) => t.amount));
  return null;
}
