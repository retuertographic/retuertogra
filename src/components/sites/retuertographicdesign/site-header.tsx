"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ASSET_BASE, SOURCE_ORIGIN, navLinks } from "./data";
import { AngleDownIcon, BarsIcon, BasketIcon } from "./icons";

function CartButton() {
  return (
    <a
      href="#"
      aria-label="Cart"
      className="flex h-[34px] w-[44px] items-center justify-center rounded-[30px] bg-[#1b1e20] text-white"
    >
      <BasketIcon className="size-5" />
    </a>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-30 bg-white">
      <div className="mx-auto flex h-[169px] max-w-[1060px] flex-wrap items-start px-5 pt-[30px] min-[1025px]:h-[149px] min-[1025px]:flex-nowrap min-[1025px]:items-center min-[1025px]:pl-0 min-[1025px]:pr-[42px] min-[1025px]:pt-0">
        <Link href="/" className="shrink-0" aria-label="Retuerto Graphic Design">
          <Image
            src={`${ASSET_BASE}/logo.png`}
            alt="Retuerto Graphic Design"
            width={310}
            height={98}
            priority
            className="h-auto w-[130px] min-[1025px]:w-[200px]"
          />
        </Link>

        <nav className="ml-auto hidden items-center min-[1025px]:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "px-5 font-figtree text-base leading-6 text-rg-ink transition-colors hover:text-rg-green",
                link.label === "Shop" && "text-rg-green",
              )}
            >
              {link.label}
            </a>
          ))}
          <div className="group relative w-[147px]">
            <span className="flex cursor-default items-center gap-1.5 pl-5 pr-[27px] font-figtree text-base leading-6 text-rg-ink">
              <Image src={`${ASSET_BASE}/flag-en.svg`} alt="" width={18} height={12} />
              English
              <AngleDownIcon className="ml-auto size-3 text-rg-green" />
            </span>
            <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100">
              <a
                href={`${SOURCE_ORIGIN}/es/`}
                className="flex w-[147px] items-center gap-1.5 bg-white py-1 pl-5 font-figtree text-base text-rg-ink hover:text-rg-green"
                title="Switch to Spanish"
              >
                <Image src={`${ASSET_BASE}/flag-es.svg`} alt="Spanish" width={18} height={12} />
                Español
              </a>
            </div>
          </div>
          <CartButton />
        </nav>

        <div className="ml-auto flex items-center gap-1 min-[1025px]:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-[34px] w-[56px] items-center justify-center bg-[#1b1e20] text-white"
          >
            <BarsIcon className="h-[30px] w-[42px]" />
          </button>
          <CartButton />
        </div>

        <a
          href={`${SOURCE_ORIGIN}/es/`}
          className="mt-[34px] block w-full min-[1025px]:hidden"
          aria-label="Switch to Spanish"
        >
          <Image src={`${ASSET_BASE}/flag-es.svg`} alt="Spanish" width={18} height={12} />
        </a>
      </div>

      {menuOpen && (
        <nav className="absolute inset-x-0 top-[100px] bg-[#1b1e20] min-[1025px]:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/10 px-6 py-3 font-figtree text-base text-white hover:text-rg-green"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
