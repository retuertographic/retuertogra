import { CalendarDays, FileText, MessageCircle, ShoppingCart } from "lucide-react";
import { wooProductUrl } from "@/config/site";
import type { Locale } from "@/i18n/config";
import { shopCopy } from "@/shop/i18n";
import type { Product } from "@/shop/types";
import { buttonStyles } from "./buttons";
import { meetingHref, quoteHref, whatsappHref } from "./links";
import { formatEuro, periodSuffix } from "./price";

/** Price box + calls to action for a product page. */
export function ProductActions({ locale, product }: { locale: Locale; product: Product }) {
  const { ui, products } = shopCopy[locale];
  const text = products[product.id];
  const { price } = product;
  const whatsappText = ui.whatsappProductMessage.replace("{product}", text.name);

  return (
    <div className="border border-rg-ink/15 bg-rg-gray p-6">
      <p className="font-figtree text-sm font-semibold uppercase tracking-wide text-rg-text">{ui.price.label}</p>

      {price.kind === "from" && (
        <p className="mt-2 font-poppins text-3xl font-semibold text-rg-ink">
          <span className="mr-2 text-lg font-medium text-rg-text">{ui.price.from}</span>
          {formatEuro(locale, price.amount)}
          <span className="text-lg font-medium text-rg-text">{periodSuffix(ui, price.period)}</span>
        </p>
      )}

      {price.kind === "tiers" && (
        <dl className="mt-2 space-y-2">
          {price.tiers.map((tier, i) => (
            <div key={i} className="flex items-baseline justify-between gap-4 border-b border-rg-ink/10 pb-2 last:border-0">
              <dt className="font-figtree text-base text-rg-text">{text.priceLabels?.[i]}</dt>
              <dd className="font-poppins text-2xl font-semibold text-rg-ink">
                {formatEuro(locale, tier.amount)}
                <span className="text-base font-medium text-rg-text">{periodSuffix(ui, tier.period)}</span>
              </dd>
            </div>
          ))}
        </dl>
      )}

      {price.kind === "quote" && (
        <>
          <p className="mt-2 font-poppins text-2xl font-semibold text-rg-ink">{ui.price.quote}</p>
          <p className="mt-2 font-figtree text-sm leading-5 text-rg-text">{ui.price.quoteNote}</p>
        </>
      )}

      <div className="mt-6 flex flex-col gap-3">
        {product.woo?.map((plan, i) => (
          <a key={plan.slug} href={wooProductUrl(plan.slug)} className={buttonStyles.primary}>
            <ShoppingCart className="size-5" aria-hidden="true" />
            {ui.cta.buy}
            {product.woo!.length > 1 && (
              <span className="opacity-90">
                · {text.priceLabels?.[i]} {formatEuro(locale, plan.amount)}
                {periodSuffix(ui, plan.period)}
              </span>
            )}
          </a>
        ))}

        <a href={quoteHref(locale)} className={product.woo ? buttonStyles.outline : buttonStyles.primary}>
          <FileText className="size-5" aria-hidden="true" />
          {product.primaryCta === "availability" ? ui.cta.availability : ui.cta.quote}
        </a>

        {(product.primaryCta === "meeting" || price.kind === "quote") && (
          <a href={meetingHref(locale)} className={buttonStyles.outline}>
            <CalendarDays className="size-5" aria-hidden="true" />
            {ui.cta.meeting}
          </a>
        )}

        <a href={whatsappHref(whatsappText)} target="_blank" rel="noopener noreferrer" className={buttonStyles.whatsapp}>
          <MessageCircle className="size-5" aria-hidden="true" />
          {ui.cta.whatsapp}
        </a>
      </div>

      {product.woo && <p className="mt-4 font-figtree text-sm leading-5 text-rg-text">{ui.price.wooNote}</p>}
    </div>
  );
}
