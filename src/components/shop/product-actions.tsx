import { CalendarDays, FileText, ShoppingCart } from "lucide-react";
import { wooProductUrl } from "@/config/site";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { shopCopy } from "@/shop/i18n";
import type { Product } from "@/shop/types";
import { meetingHref, quoteHref, whatsappHref } from "./links";
import { formatEuro, periodSuffix } from "./price";
import { btn, WhatsAppIcon } from "./ui";

/** Price box + calls to action for a product page. */
export function ProductActions({ locale, product }: { locale: Locale; product: Product }) {
  const { ui, products } = shopCopy[locale];
  const text = products[product.id];
  const { price } = product;
  const whatsappText = ui.whatsappProductMessage.replace("{product}", text.name);

  return (
    <div className="rounded-[20px] border border-line bg-white p-6">
      <p className="font-figtree text-xs font-bold uppercase tracking-[0.12em] text-muted">{ui.price.label}</p>

      {price.kind === "from" && (
        <p className="mt-3">
          <span className="block font-figtree text-xs text-muted">{ui.price.from}</span>
          <span className="font-poppins text-[32px] font-bold leading-none text-ink">{formatEuro(locale, price.amount)}</span>
          <span className="font-figtree text-base text-muted">{periodSuffix(ui, price.period)}</span>
        </p>
      )}

      {price.kind === "tiers" && (
        <dl className="mt-3 space-y-3">
          {price.tiers.map((tier, i) => (
            <div key={i} className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
              <dt className="font-figtree text-[15px] text-muted">{text.priceLabels?.[i]}</dt>
              <dd className="font-poppins text-2xl font-bold text-ink">
                {formatEuro(locale, tier.amount)}
                <span className="font-figtree text-sm font-normal text-muted">{periodSuffix(ui, tier.period)}</span>
              </dd>
            </div>
          ))}
        </dl>
      )}

      {price.kind === "quote" && (
        <>
          <p className="mt-3 font-poppins text-2xl font-bold text-ink">{ui.price.quote}</p>
          <p className="mt-2 font-figtree text-sm leading-5 text-muted">{ui.price.quoteNote}</p>
        </>
      )}

      <div className="mt-6 flex flex-col gap-3">
        {product.woo?.map((plan, i) => (
          <a key={plan.slug} href={wooProductUrl(plan.slug)} className={cn(btn.primary, "h-auto min-h-12 py-3")}>
            <ShoppingCart className="size-[18px] shrink-0" strokeWidth={1.8} aria-hidden="true" />
            <span>
              {ui.cta.buy}
              {product.woo!.length > 1 && (
                <span className="opacity-90">
                  {" "}· {text.priceLabels?.[i]} {formatEuro(locale, plan.amount)}
                  {periodSuffix(ui, plan.period)}
                </span>
              )}
            </span>
          </a>
        ))}

        <a href={quoteHref(locale)} className={product.woo ? btn.secondary : btn.primary}>
          <FileText className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
          {product.primaryCta === "availability" ? ui.cta.availability : ui.cta.quote}
        </a>

        {(product.primaryCta === "meeting" || price.kind === "quote") && (
          <a href={meetingHref(locale)} className={btn.secondary}>
            <CalendarDays className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
            {ui.cta.meeting}
          </a>
        )}

        <a href={whatsappHref(whatsappText)} target="_blank" rel="noopener noreferrer" className={cn(btn.secondary, "border-line")}>
          <WhatsAppIcon className="size-[18px] text-wa" />
          {ui.cta.whatsapp}
        </a>
      </div>

      {product.woo && <p className="mt-4 font-figtree text-sm leading-5 text-muted">{ui.price.wooNote}</p>}
    </div>
  );
}
