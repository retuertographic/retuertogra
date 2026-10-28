"use client";

import Image from "next/image";
import { ChevronDown, Menu, Search, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ASSET_BASE, wooShopUrl } from "@/config/site";
import { type Locale, localeConfig, locales } from "@/i18n/config";
import type { NavItem } from "@/i18n/dictionaries";
import type { Alternates } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { btn } from "./ui";

type ShopHeaderProps = {
  locale: Locale;
  nav: NavItem[];
  /** Shared hamburger menu (see main-menu.ts). */
  menu: NavItem[];
  /** Menu entry for the shop ("Tienda"), marked as current. */
  menuActiveHref?: string;
  /** href of the nav item to mark as active (green underline). */
  activeHref?: string;
  homeHref: string;
  alternates: Alternates;
  quoteHref: string;
  searchHref: string;
  strings: { switchTo: string; cart: string; toggleMenu: string; quote: string; search: string };
  /** Desktop dropdown of the nav item whose href matches: latest articles + glossary. */
  blogMenu: BlogMenu;
};

export type BlogMenu = {
  href: string;
  latestLabel: string;
  allLabel: string;
  glossary: { label: string; href: string };
  posts: { title: string; href: string; category: string; image?: string; minutes: string }[];
};

const circle = "flex size-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-ink";

/** Cart icon: goes straight to the WooCommerce product grid, where orders are paid. */
function CartLink({ label, className }: { label: string; className?: string }) {
  return (
    <a href={wooShopUrl} aria-label={label} title={label} className={className}>
      <ShoppingCart className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
    </a>
  );
}

/** Blog mega dropdown (desktop hover / keyboard focus): latest articles with thumbnails. */
function BlogDropdown({ menu }: { menu: BlogMenu }) {
  return (
    <div className="w-[640px] rounded-2xl border border-line bg-white p-5 shadow-lg">
      <p className="font-figtree text-xs font-bold uppercase tracking-[0.12em] text-brand-dark">{menu.latestLabel}</p>
      <ul className="mt-3 grid grid-cols-3 gap-3">
        {menu.posts.map((post) => (
          <li key={post.href}>
            <a href={post.href} className="group/post block rounded-xl p-1.5 transition-colors hover:bg-surface">
              <span className="relative block aspect-[16/10] overflow-hidden rounded-lg bg-[radial-gradient(circle_at_30%_20%,#a6d46a_0%,var(--brand)_45%,var(--brand-dark)_100%)]">
                {post.image && <Image src={post.image} alt="" fill sizes="190px" className="object-cover transition-transform duration-300 group-hover/post:scale-[1.04]" />}
              </span>
              <span className="mt-2 block font-figtree text-[11px] font-bold uppercase tracking-[0.1em] text-brand-dark">{post.category}</span>
              <span className="mt-1 line-clamp-3 block font-poppins text-sm font-semibold leading-snug text-ink group-hover/post:text-brand-dark">{post.title}</span>
              <span className="mt-1 block font-figtree text-xs text-muted">{post.minutes}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-between border-t border-line pt-4 font-figtree text-sm font-semibold">
        <a href={menu.href} className="text-brand-dark hover:text-ink">{menu.allLabel} →</a>
        <a href={menu.glossary.href} className="text-ink hover:text-brand-dark">{menu.glossary.label} →</a>
      </div>
    </div>
  );
}

export function ShopHeader({ locale, nav, menu, menuActiveHref, activeHref, homeHref, alternates, quoteHref, searchHref, strings, blogMenu }: ShopHeaderProps) {
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
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
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
            if (item.href === blogMenu.href) {
              return (
                <div key={item.label} className="group relative h-full">
                  <a href={item.href} className={link} aria-haspopup="true" aria-current={active ? "page" : undefined}>
                    {item.label}
                    <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" aria-hidden="true" />
                  </a>
                  <div className="invisible absolute right-[-200px] top-full z-50 pt-2 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <BlogDropdown menu={blogMenu} />
                  </div>
                </div>
              );
            }
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
          <CartLink label={strings.cart} className={circle} />
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
          <CartLink label={strings.cart} className={circle} />
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
        <MobileMenu items={menu} activeHref={menuActiveHref} quote={{ href: quoteHref, label: strings.quote }} onNavigate={() => setMenuOpen(false)} />
      )}
    </header>
  );
}
