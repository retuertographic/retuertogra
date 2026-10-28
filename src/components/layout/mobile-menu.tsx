import type { NavItem } from "@/i18n/dictionaries";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  items: NavItem[];
  /** href of the current section, highlighted in green. */
  activeHref?: string;
  quote: { href: string; label: string };
  onNavigate: () => void;
};

/** Hamburger dropdown panel (below 1025px). Rendered by both the site and the shop header. */
export function MobileMenu({ items, activeHref, quote, onNavigate }: MobileMenuProps) {
  return (
    <nav
      aria-label="Main"
      className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-y border-line bg-white px-4 pb-6 pt-2 shadow-lg min-[1025px]:hidden"
    >
      {items.map((item) => (
        <div key={item.label} className="border-b border-line last:border-0">
          <a
            href={item.href}
            onClick={onNavigate}
            aria-current={item.href === activeHref ? "page" : undefined}
            className={cn(
              "block py-3.5 font-figtree text-base font-semibold",
              item.href === activeHref || item.highlight ? "text-brand-dark" : "text-ink",
            )}
          >
            {item.label}
          </a>
          {item.children?.length ? (
            <ul className="pb-3">
              {item.children.map((child) => (
                <li key={child.href}>
                  <a
                    href={child.href}
                    onClick={onNavigate}
                    className="block py-2 pl-4 font-figtree text-[15px] text-[#6b6f76] hover:text-brand-dark"
                  >
                    {child.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
      <a
        href={quote.href}
        onClick={onNavigate}
        className="mt-4 flex h-12 w-full items-center justify-center rounded-full bg-brand font-figtree text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark"
      >
        {quote.label}
      </a>
    </nav>
  );
}
