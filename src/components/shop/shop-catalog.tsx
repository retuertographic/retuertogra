"use client";

import { ArrowRight, Minus, Plus, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { CategoryId, SolutionGroupId } from "@/shop/types";
import { normalize, type ProductCardData, type SolutionGroupData } from "./card-data";
import { ProductCard } from "./product-card";
import { card, chip, Container, Eyebrow, IconCircle, text } from "./ui";

type Copy = {
  search: { placeholder: string; label: string; all: string; noResults: string };
  products: { eyebrow: string; title: string; intro: string; link: { label: string; href: string } };
  solutions: { eyebrow: string; title: string; note: string };
};

type Props = {
  copy: Copy;
  chips: { id: CategoryId; label: string }[];
  products: ProductCardData[];
  groups: SolutionGroupData[];
  /** Server-rendered category grid, placed between the search bar and the products. */
  categories: React.ReactNode;
  /** Server-rendered "how we work" steps, after the solutions. */
  steps: React.ReactNode;
};

/**
 * Search bar + category chips (spec #4) that filter the product grid and the
 * custom solutions on the client.
 */
export function ShopCatalog({ copy, chips, products, groups, categories, steps }: Props) {
  const [category, setCategory] = useState<CategoryId | "all">("all");
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<SolutionGroupId | undefined>(groups[0]?.id);
  const input = useRef<HTMLInputElement>(null);

  // The header search button links to #buscar: reveal the input (hidden on mobile) and focus it.
  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === "#buscar") {
        setSearchOpen(true);
        requestAnimationFrame(() => input.current?.focus({ preventScroll: true }));
      }
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const q = normalize(query.trim());
  const matches = (item: { category: CategoryId; search: string }) =>
    (category === "all" || item.category === category) && (!q || item.search.includes(q));

  const visibleProducts = products.filter(matches);
  const visibleGroups = groups.map((g) => ({ ...g, items: g.items.filter(matches) })).filter((g) => g.items.length > 0);
  const filtering = category !== "all" || q !== "";

  const empty = (
    <p className="rounded-[20px] border border-dashed border-line bg-white px-6 py-10 text-center font-figtree text-[15px] text-muted">
      {copy.search.noResults}
    </p>
  );

  return (
    <>
      {/* 3 · Search bar, overlapping the hero */}
      <div id="buscar" className="relative z-10 scroll-mt-24 min-[1025px]:-mt-12">
        <Container className="px-0 min-[1025px]:px-6">
          <div className="border-y border-line bg-white py-3 min-[1025px]:flex min-[1025px]:items-center min-[1025px]:gap-4 min-[1025px]:rounded-[20px] min-[1025px]:border min-[1025px]:p-3 min-[1025px]:shadow-[0_18px_40px_-20px_rgba(35,35,35,0.25)]">
            <label className={cn("relative mx-4 mb-3 min-[1025px]:mx-0 min-[1025px]:mb-0 min-[1025px]:block min-[1025px]:w-[300px] min-[1025px]:shrink-0", searchOpen || q ? "block" : "hidden")}>
              <span className="sr-only">{copy.search.label}</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" strokeWidth={1.8} aria-hidden="true" />
              <input
                ref={input}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={copy.search.placeholder}
                className="h-11 w-full rounded-full border border-transparent bg-surface pl-11 pr-4 font-figtree text-[15px] text-ink outline-none placeholder:text-muted focus:border-brand"
              />
            </label>
            <div role="group" aria-label={copy.search.label} className="no-scrollbar flex gap-2 overflow-x-auto px-4 min-[1025px]:flex-wrap min-[1025px]:px-0">
              <button type="button" aria-pressed={category === "all"} onClick={() => setCategory("all")} className={cn(chip.base, category === "all" ? chip.active : chip.idle)}>
                {copy.search.all}
              </button>
              {chips.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={category === c.id}
                  onClick={() => setCategory(c.id)}
                  className={cn(chip.base, category === c.id ? chip.active : chip.idle)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {categories}

      {/* 5 · Products */}
      <section className="bg-surface py-10 min-[1025px]:py-24">
        <Container>
          <div className="flex flex-col gap-4 min-[1025px]:flex-row min-[1025px]:items-end min-[1025px]:justify-between">
            <div className="max-w-[640px]">
              <Eyebrow>{copy.products.eyebrow}</Eyebrow>
              <h2 className={cn(text.h2, "mt-3")}>{copy.products.title}</h2>
              <p className={cn(text.body, "mt-3")}>{copy.products.intro}</p>
            </div>
            <a href={copy.products.link.href} className="inline-flex shrink-0 items-center gap-2 font-figtree text-[15px] font-semibold text-brand-dark hover:text-ink">
              {copy.products.link.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-8 min-[1025px]:mt-12" aria-live="polite">
            {visibleProducts.length ? (
              <div className="grid gap-4 min-[640px]:grid-cols-2 min-[1025px]:grid-cols-3 min-[1025px]:gap-6">
                {visibleProducts.map((p, i) => (
                  <ProductCard key={p.id} data={p} priority={i < 3} />
                ))}
              </div>
            ) : (
              empty
            )}
          </div>
        </Container>
      </section>

      {/* 6 · Custom solutions + how we work */}
      <section className="py-10 min-[1025px]:py-24">
        <Container>
          <div className="flex flex-col gap-3 min-[1025px]:flex-row min-[1025px]:items-end min-[1025px]:justify-between min-[1025px]:gap-10">
            <div>
              <Eyebrow>{copy.solutions.eyebrow}</Eyebrow>
              <h2 className={cn(text.h2, "mt-3")}>{copy.solutions.title}</h2>
            </div>
            <p className={cn(text.small, "max-w-[360px]")}>{copy.solutions.note}</p>
          </div>

          <div className="mt-8 min-[1025px]:mt-12" aria-live="polite">
            {visibleGroups.length ? (
              <div className="grid gap-3 min-[1025px]:grid-cols-4 min-[1025px]:gap-6">
                {visibleGroups.map((group) => {
                  const open = filtering || openGroup === group.id;
                  return (
                    <div key={group.id} className={cn(card, "overflow-hidden hover:shadow-none min-[1025px]:p-5")}>
                      <button
                        type="button"
                        aria-expanded={open}
                        onClick={() => setOpenGroup(openGroup === group.id ? undefined : group.id)}
                        className="flex w-full items-center gap-3 p-4 text-left min-[1025px]:pointer-events-none min-[1025px]:p-0"
                      >
                        <IconCircle name={group.icon} size="sm" />
                        <span className="flex-1 font-poppins text-[17px] font-semibold text-ink">{group.title}</span>
                        <span className="text-muted min-[1025px]:hidden" aria-hidden="true">
                          {open ? <Minus className="size-5" /> : <Plus className="size-5" />}
                        </span>
                      </button>
                      <ul className={cn("border-t border-line min-[1025px]:mt-4 min-[1025px]:block min-[1025px]:border-0", open ? "block" : "hidden")}>
                        {group.items.map((item) => (
                          <li key={item.id} className="border-b border-dashed border-line last:border-0 min-[1025px]:border-0">
                            <a href={item.href} className="group/item flex items-center justify-between gap-3 px-4 py-3 font-figtree text-[15px] text-ink transition-colors hover:text-brand-dark min-[1025px]:px-0 min-[1025px]:py-2">
                              {item.name}
                              <ArrowRight className="size-4 shrink-0 text-muted transition-transform group-hover/item:translate-x-0.5 group-hover/item:text-brand-dark" strokeWidth={1.8} aria-hidden="true" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            ) : (
              empty
            )}
          </div>

          {steps}
        </Container>
      </section>
    </>
  );
}
