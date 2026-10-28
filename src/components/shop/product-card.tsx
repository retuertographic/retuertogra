import Image from "next/image";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductCardData } from "./card-data";
import { card, Icon, text } from "./ui";

/** Product card (spec #6–#8). Works in server and client components. */
export function ProductCard({ data, priority }: { data: ProductCardData; priority?: boolean }) {
  return (
    <article className={cn(card, "group relative flex flex-col overflow-hidden")}>
      <div className="relative aspect-[16/9] overflow-hidden">
        {data.image ? (
          <Image
            src={data.image}
            alt=""
            fill
            priority={priority}
            sizes="(min-width: 1025px) 380px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className={cn(
              "flex size-full items-center justify-center",
              data.placeholder.tone === "brand"
                ? "bg-[radial-gradient(circle_at_30%_20%,#a6d46a_0%,var(--brand)_45%,var(--brand-dark)_100%)]"
                : "bg-[radial-gradient(circle_at_70%_30%,#3a3a3a_0%,var(--ink)_60%,#141414_100%)]",
            )}
          >
            <span
              className={cn(
                "flex size-20 items-center justify-center rounded-full ring-1",
                data.placeholder.tone === "brand" ? "bg-white/20 text-white ring-white/40" : "bg-brand/15 text-brand ring-brand/40",
              )}
            >
              <Icon name={data.placeholder.icon} className="size-8" />
            </span>
          </div>
        )}
        {data.badge && (
          <span
            className={cn(
              "absolute left-3 top-3 rounded-full px-3 py-1 font-figtree text-xs font-bold",
              data.badge.kind === "subscription" ? "bg-brand text-white" : "bg-white text-ink",
            )}
          >
            {data.badge.label}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 min-[1025px]:p-6">
        <p className="font-figtree text-xs font-bold uppercase tracking-[0.1em] text-brand-dark">{data.categoryLabel}</p>
        <h3 className={cn(text.h3, "mt-2")}>
          {/* Stretched link: the whole card opens the product page. */}
          <a href={data.href} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
            {data.name}
          </a>
        </h3>
        <p className="mt-2 line-clamp-3 font-figtree text-[15px] leading-[1.5] text-muted">{data.summary}</p>

        <div className="mt-auto pt-5">
        <div className="flex items-end justify-between gap-4 border-t border-line pt-4">
          <div>
            <p className="font-figtree text-xs text-muted">{data.priceLabel}</p>
            <p className="mt-0.5 font-poppins font-bold text-ink">
              <span className={data.isQuote ? "text-[17px]" : "text-[24px]"}>{data.priceMain}</span>
              {data.priceSuffix && <span className="ml-1 font-figtree text-sm font-normal text-muted">{data.priceSuffix}</span>}
            </p>
          </div>
          <span
            aria-hidden="true"
            className={cn(
              "relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full transition-colors",
              data.action === "cart" ? "bg-brand text-white group-hover:bg-brand-dark" : "bg-ink text-white group-hover:bg-black",
            )}
          >
            {data.action === "cart" ? <ShoppingCart className="size-5" strokeWidth={1.8} /> : <ArrowRight className="size-5" strokeWidth={1.8} />}
          </span>
        </div>
        </div>
      </div>
    </article>
  );
}
