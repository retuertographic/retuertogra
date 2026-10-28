import { ChevronRight } from "lucide-react";
import { SITE_ORIGIN } from "@/config/site";
import { JsonLd } from "./json-ld";

export type Crumb = { label: string; href: string };

const absolute = (href: string) => (href.startsWith("http") ? href : `${SITE_ORIGIN}${href}`);

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="font-figtree text-sm text-rg-text">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="size-3.5 text-rg-text/60" aria-hidden="true" />}
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-rg-ink">{item.label}</span>
            ) : (
              <a href={item.href} className="hover:text-rg-green">{item.label}</a>
            )}
          </li>
        ))}
      </ol>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            item: absolute(item.href),
          })),
        }}
      />
    </nav>
  );
}
