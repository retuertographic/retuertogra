import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { shopCopy } from "@/shop/i18n";
import { shopRouteHref } from "@/shop/routes";
import type { Category, Product } from "@/shop/types";
import { getCategory } from "@/shop/catalog";
import { CategoryIcon } from "./category-icon";
import { priceLine } from "./price";

export function CategoryCard({ locale, category }: { locale: Locale; category: Category }) {
  const copy = shopCopy[locale];
  const text = copy.categories[category.id];
  return (
    <a
      href={shopRouteHref(locale, { type: "category", id: category.id })}
      className="group flex flex-col border border-rg-ink/15 bg-white p-6 transition-colors hover:border-rg-green"
    >
      <span className="flex size-12 items-center justify-center rounded-full bg-rg-green/15 text-rg-green">
        <CategoryIcon icon={category.icon} className="size-6" />
      </span>
      <h3 className="mt-5 font-poppins text-xl font-semibold leading-[1.25] text-rg-ink">{text.name}</h3>
      <p className="mt-3 flex-1 font-figtree text-base leading-6 text-rg-text">{text.summary}</p>
      <span className="mt-5 inline-flex items-center gap-2 font-figtree text-base text-rg-ink underline underline-offset-2 group-hover:text-rg-green">
        {copy.ui.cta.details}
        <ArrowRight className="size-4" aria-hidden="true" />
      </span>
    </a>
  );
}

export function ProductCard({ locale, product }: { locale: Locale; product: Product }) {
  const copy = shopCopy[locale];
  const text = copy.products[product.id];
  const category = getCategory(product.category);
  return (
    <article className="flex flex-col border border-rg-ink bg-white">
      <a href={shopRouteHref(locale, { type: "product", id: product.id })} className="block">
        {product.image ? (
          <Image
            src={product.image}
            alt=""
            width={800}
            height={450}
            className="aspect-[16/9] w-full object-cover"
            sizes="(min-width: 1025px) 400px, 100vw"
          />
        ) : (
          <div className="flex aspect-[16/9] w-full items-center justify-center bg-rg-gray text-rg-green">
            <CategoryIcon icon={category.icon} className="size-14" />
          </div>
        )}
      </a>
      <div className="flex flex-1 flex-col px-6 pt-6 pb-6">
        <p className="font-figtree text-sm font-semibold uppercase tracking-wide text-rg-green">
          {copy.categories[product.category].name}
        </p>
        <h3 className="mt-2 font-poppins text-xl font-semibold leading-[1.25] text-rg-ink">
          <a href={shopRouteHref(locale, { type: "product", id: product.id })} className="hover:text-rg-green">
            {text.name}
          </a>
        </h3>
        <p className="mt-3 flex-1 font-figtree text-base leading-6 text-rg-text">{text.summary}</p>
        <p className="mt-5 font-poppins text-lg font-medium text-rg-ink">{priceLine(locale, copy.ui, product)}</p>
        <a
          href={shopRouteHref(locale, { type: "product", id: product.id })}
          className="mt-4 inline-flex w-fit items-center gap-2 bg-rg-navy px-6 py-3 font-roboto text-base font-medium text-white hover:underline"
        >
          {copy.ui.cta.details}
        </a>
      </div>
    </article>
  );
}
