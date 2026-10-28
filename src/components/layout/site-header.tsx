"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ASSET_BASE, wooCartUrl } from "@/config/site";
import { type Locale, localeConfig, locales } from "@/i18n/config";
import type { Dictionary, NavItem } from "@/i18n/dictionaries";
import { AngleDownIcon, BarsIcon, BasketIcon } from "./icons";

export type Alternates = Record<Locale, string>;

type SiteHeaderProps = {
  locale: Locale;
  nav: NavItem[];
  strings: Dictionary["header"];
  homeHref: string;
  /** URL of the current page in every locale (drives the language switcher). */
  alternates: Alternates;
};

function CartButton({ label }: { label: string }) {
  return (
    <a
      href={wooCartUrl}
      aria-label={label}
      className="flex h-[34px] w-[44px] items-center justify-center rounded-[30px] bg-[#1b1e20] text-white"
    >
      <BasketIcon className="size-5" />
    </a>
  );
}

function DesktopNavItem({ item, compact }: { item: NavItem; compact: boolean }) {
  const linkClass = cn(
    "flex items-center gap-1.5 font-figtree text-base leading-6 text-rg-ink transition-colors hover:text-rg-green",
    compact ? "px-3" : "px-5",
    item.highlight && "text-rg-green",
  );
  if (!item.children?.length) {
    return (
      <a href={item.href} className={linkClass}>
        {item.label}
      </a>
    );
  }
  return (
    <div className="group relative">
      <a href={item.href} className={linkClass} aria-haspopup="true">
        {item.label}
        <AngleDownIcon className="size-3 text-rg-green" />
      </a>
      <div className="invisible absolute left-2 top-full z-40 pt-3 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <ul className="w-[300px] border-t-2 border-rg-green bg-white py-2 shadow-lg">
          {item.children.map((child) => (
            <li key={child.href}>
              <a
                href={child.href}
                className="block px-5 py-2 font-figtree text-[15px] leading-5 text-rg-ink hover:bg-rg-gray hover:text-rg-green"
              >
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function SiteHeader({ locale, nav, strings, homeHref, alternates }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const current = localeConfig[locale];
  const others = locales.filter((l) => l !== locale);

  return (
    <header className="relative z-30 bg-white">
      <div className="mx-auto flex h-[84px] max-w-[1060px] items-center px-4 min-[400px]:px-5 min-[1025px]:h-[149px] min-[1025px]:pl-0 min-[1025px]:pr-[42px]">
        <a href={homeHref} className="shrink-0" aria-label="Retuerto Graphic Design">
          <Image
            src={`${ASSET_BASE}/logo.png`}
            alt="Retuerto Graphic Design"
            width={310}
            height={98}
            priority
            className="h-auto w-[104px] min-[360px]:w-[118px] min-[400px]:w-[130px] min-[1025px]:w-[200px]"
          />
        </a>

        <nav className="ml-auto hidden items-center min-[1025px]:flex">
          {nav.map((item) => (
            <DesktopNavItem key={item.label} item={item} compact={nav.length > 5} />
          ))}
          <div className="group relative w-[147px]">
            <span className="flex cursor-default items-center gap-1.5 pl-5 pr-[27px] font-figtree text-base leading-6 text-rg-ink">
              <Image src={`${ASSET_BASE}/${current.flag}`} alt="" width={18} height={12} />
              {current.nativeName}
              <AngleDownIcon className="ml-auto size-3 text-rg-green" />
            </span>
            <div className="invisible absolute left-0 top-full z-40 pt-3 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              {others.map((l) => (
                <a
                  key={l}
                  href={alternates[l]}
                  hrefLang={l}
                  lang={l}
                  title={`${strings.switchTo} ${localeConfig[l].names[locale]}`}
                  className="flex w-[147px] items-center gap-1.5 bg-white py-1 pl-5 font-figtree text-base text-rg-ink hover:text-rg-green"
                >
                  <Image src={`${ASSET_BASE}/${localeConfig[l].flag}`} alt="" width={18} height={12} />
                  {localeConfig[l].nativeName}
                </a>
              ))}
            </div>
          </div>
          <CartButton label={strings.cart} />
        </nav>

        <div className="ml-auto flex items-center gap-1.5 min-[1025px]:hidden">
          {/* Language switcher (mobile): current language in the top bar, others in a dropdown. */}
          <div className="relative">
            <button
              type="button"
              aria-label={`${strings.switchTo}…`}
              aria-expanded={langOpen}
              aria-haspopup="true"
              onClick={() => {
                setLangOpen((open) => !open);
                setMenuOpen(false);
              }}
              className="flex h-[34px] items-center gap-1.5 rounded-[30px] border border-rg-ink/20 px-2.5 font-figtree text-sm font-semibold uppercase text-rg-ink"
            >
              <Image src={`${ASSET_BASE}/${current.flag}`} alt="" width={18} height={12} />
              <span className="hidden min-[360px]:inline">{locale}</span>
              <AngleDownIcon className={cn("size-3 text-rg-green transition-transform", langOpen && "rotate-180")} />
            </button>
            {langOpen && (
              <ul className="absolute right-0 top-full z-40 mt-2 w-[170px] border-t-2 border-rg-green bg-white py-1 shadow-lg">
                {others.map((l) => (
                  <li key={l}>
                    <a
                      href={alternates[l]}
                      hrefLang={l}
                      lang={l}
                      onClick={() => setLangOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 font-figtree text-base text-rg-ink hover:bg-rg-gray hover:text-rg-green"
                    >
                      <Image src={`${ASSET_BASE}/${localeConfig[l].flag}`} alt="" width={18} height={12} />
                      {localeConfig[l].nativeName}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            type="button"
            aria-label={strings.toggleMenu}
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((open) => !open);
              setLangOpen(false);
            }}
            className="flex h-[34px] w-[50px] items-center justify-center bg-[#1b1e20] text-white"
          >
            <BarsIcon className="h-[26px] w-[36px]" />
          </button>
          <CartButton label={strings.cart} />
        </div>
      </div>

      {menuOpen && (
        <nav className="absolute inset-x-0 top-[84px] max-h-[calc(100vh-84px)] overflow-y-auto bg-[#1b1e20] min-[1025px]:hidden">
          {nav.map((item) => (
            <div key={item.label}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/10 px-6 py-3 font-figtree text-base text-white hover:text-rg-green"
              >
                {item.label}
              </a>
              {item.children?.map((child) => (
                <a
                  key={child.href}
                  href={child.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-white/5 py-2.5 pl-10 pr-6 font-figtree text-[15px] text-white/80 hover:text-rg-green"
                >
                  {child.label}
                </a>
              ))}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
