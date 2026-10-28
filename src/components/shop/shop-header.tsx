"use client";

import Image from "next/image";
import { ChevronDown, Menu, Search, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Alternates } from "@/components/layout/site-header";
import { ASSET_BASE, wooCartUrl } from "@/config/site";
import { type Locale, localeConfig, locales } from "@/i18n/config";
import type { NavItem } from "@/i18n/dictionaries";
import { cn } from "@/lib/utils";
import { btn } from "./ui";

type ShopHeaderProps = {
  locale: Locale;
  nav: NavItem[];
  /** href of the nav item to mark as active (green underline). */
  activeHref?: string;
  homeHref: string;
  alternates: Alternates;
  quoteHref: string;
  searchHref: string;
  strings: { switchTo: string; cart: string; toggleMenu: string; quote: string; search: string };
  /** Items in the WooCommerce cart (the cart lives on the WooCommerce site). */
  cartCount?: number;
};

const circle = "flex size-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-ink";

function CartLink({ label, count, className }: { label: string; count: number; className?: string }) {
  return (
    <a href={wooCartUrl} aria-label={`${label} (${count})`} className={cn("relative", className)}>
      <ShoppingCart className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
      <span className="absolute -right-1 -top-1 flex size-[18px] items-center justify-center rounded-full bg-brand font-figtree text-[10px] font-bold text-white">
        {count}
      </span>
    </a>
  );
}

export function ShopHeader({ locale, nav, activeHref, homeHref, alternates, quoteHref, searchHref, strings, cartCount = 0 }: ShopHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const current = localeConfig[locale];
  const others = locales.filter((l) => l !== locale);

  // Close the language dropdown on outside click / Escape.
  useEffect(() => {
    if (!langOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!(e.target as Element).closest("[data-lang-menu]")) setLangOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLangOpen(false);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [langOpen]);

  const langMenu = (
    <div data-lang-menu className="relative">
      <button
        type="button"
        aria-expanded={langOpen}
        aria-haspopup="true"
        aria-label={`${strings.switchTo}…`}
        onClick={() => {
          setLangOpen((o) => !o);
          setMenuOpen(false);
        }}
        className={cn(
          "flex items-center gap-1.5 font-figtree text-sm font-semibold uppercase text-ink",
          "size-10 justify-center rounded-full border border-line bg-white min-[1025px]:size-auto min-[1025px]:h-10 min-[1025px]:border-0 min-[1025px]:bg-transparent min-[1025px]:px-2",
        )}
      >
        <Image src={`${ASSET_BASE}/${current.flag}`} alt="" width={18} height={12} />
        <span className="hidden min-[1025px]:inline">{locale}</span>
        <ChevronDown className={cn("hidden size-3.5 text-brand-dark transition-transform min-[1025px]:block", langOpen && "rotate-180")} />
      </button>
      {langOpen && (
        <ul className="absolute right-0 top-full z-50 mt-2 w-[180px] overflow-hidden rounded-2xl border border-line bg-white py-1 shadow-lg">
          {others.map((l) => (
            <li key={l}>
              <a
                href={alternates[l]}
                hrefLang={l}
                lang={l}
                onClick={() => setLangOpen(false)}
                className="flex items-center gap-2.5 px-4 py-2.5 font-figtree text-[15px] text-ink hover:bg-surface"
              >
                <Image src={`${ASSET_BASE}/${localeConfig[l].flag}`} alt="" width={18} height={12} />
                {localeConfig[l].nativeName}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center gap-4 px-4 min-[1025px]:h-20 min-[1025px]:px-6">
        <a href={homeHref} className="shrink-0" aria-label="Retuerto Graphic Design">
          <Image
            src={`${ASSET_BASE}/logo.png`}
            alt="Retuerto Graphic Design"
            width={310}
            height={98}
            priority
            className="h-auto w-[104px] min-[360px]:w-[118px] min-[1025px]:w-[150px]"
          />
        </a>

        {/* Desktop */}
        <nav className="ml-auto hidden h-full items-center min-[1025px]:flex" aria-label="Main">
          {nav.map((item) => {
            const active = item.href === activeHref;
            const link = cn(
              "relative flex h-full items-center gap-1 px-3 font-figtree text-[15px] font-medium transition-colors xl:px-4",
              active ? "text-brand-dark after:absolute after:inset-x-3 after:bottom-0 after:h-[3px] after:rounded-full after:bg-brand xl:after:inset-x-4" : "text-ink hover:text-brand-dark",
            );
            if (!item.children?.length) {
              return (
                <a key={item.label} href={item.href} className={link} aria-current={active ? "page" : undefined}>
                  {item.label}
                </a>
              );
            }
            return (
              <div key={item.label} className="group relative h-full">
                <a href={item.href} className={link} aria-haspopup="true" aria-current={active ? "page" : undefined}>
                  {item.label}
                  <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" aria-hidden="true" />
                </a>
                <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="w-[300px] rounded-2xl border border-line bg-white p-2 shadow-lg">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <a href={child.href} className="block rounded-xl px-4 py-2.5 font-figtree text-[15px] text-ink hover:bg-brand-soft hover:text-brand-dark">
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 min-[1025px]:flex">
          {langMenu}
          <CartLink label={strings.cart} count={cartCount} className={circle} />
          <a href={quoteHref} className={cn(btn.primary, "h-11 px-5")}>
            {strings.quote}
          </a>
        </div>

        {/* Mobile */}
        <div className="ml-auto flex items-center gap-1.5 min-[1025px]:hidden">
          <a href={searchHref} aria-label={strings.search} className={circle}>
            <Search className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
          </a>
          {langMenu}
          <CartLink label={strings.cart} count={cartCount} className={circle} />
          <button
            type="button"
            aria-label={strings.toggleMenu}
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((o) => !o);
              setLangOpen(false);
            }}
            className="flex size-10 items-center justify-center rounded-full bg-ink text-white"
          >
            {menuOpen ? <X className="size-[18px]" aria-hidden="true" /> : <Menu className="size-[18px]" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-white px-4 pb-6 pt-2 shadow-lg min-[1025px]:hidden" aria-label="Main">
          {nav.map((item) => (
            <div key={item.label} className="border-b border-line last:border-0">
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={cn("block py-3.5 font-figtree text-base font-semibold", item.href === activeHref ? "text-brand-dark" : "text-ink")}
              >
                {item.label}
              </a>
              {item.children?.length ? (
                <ul className="pb-3">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <a href={child.href} onClick={() => setMenuOpen(false)} className="block py-2 pl-4 font-figtree text-[15px] text-muted hover:text-brand-dark">
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
          <a href={quoteHref} onClick={() => setMenuOpen(false)} className={cn(btn.primary, "mt-4 w-full")}>
            {strings.quote}
          </a>
        </nav>
      )}
    </header>
  );
}
