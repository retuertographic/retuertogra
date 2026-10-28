import { postMetas } from "@/blog/content";
import { blogHref, blogUi, glossaryHref } from "@/blog/registry";
import type { Locale } from "@/i18n/config";
import { type NavItem, dictionaries } from "@/i18n/dictionaries";
import { siteHref } from "@/i18n/routing";
import { categories } from "@/shop/catalog";
import { shopCopy } from "@/shop/i18n";
import { shopRouteHref } from "@/shop/routes";
import type { BlogMenu } from "@/components/shop/shop-header";

// Navigation partials, shared by every page (home, shop, blog, glossary, legal).

/** Desktop navigation bar. */
export function siteNav(locale: Locale): NavItem[] {
  const { ui, categories: categoryCopy } = shopCopy[locale];
  return [
    { label: ui.home, href: siteHref(locale) },
    {
      label: ui.services,
      href: shopRouteHref(locale, { type: "home" }),
      children: categories.map((c) => ({
        label: categoryCopy[c.id].name,
        href: shopRouteHref(locale, { type: "category", id: c.id }),
      })),
    },
    { label: ui.products, href: shopRouteHref(locale, { type: "products" }) },
    { label: blogUi[locale].blog, href: blogHref(locale) },
    { label: ui.contact, href: shopRouteHref(locale, { type: "contact" }) },
  ];
}

/** Hamburger menu (mobile): the same entries, with the shop and blog sub-pages listed. */
export function mainMenu(locale: Locale): NavItem[] {
  const { ui, categories: categoryCopy } = shopCopy[locale];
  const blog = blogUi[locale];
  return [
    { label: ui.home, href: siteHref(locale) },
    {
      label: dictionaries[locale].footer.shop.label,
      href: shopRouteHref(locale, { type: "home" }),
      highlight: true,
      children: [
        { label: ui.products, href: shopRouteHref(locale, { type: "products" }) },
        ...categories.map((c) => ({
          label: categoryCopy[c.id].name,
          href: shopRouteHref(locale, { type: "category", id: c.id }),
        })),
      ],
    },
    {
      label: blog.blog,
      href: blogHref(locale),
      children: [
        { label: blog.menu.allPosts, href: blogHref(locale) },
        ...postMetas(locale)
          .slice(0, 3)
          .map((p) => ({ label: p.title, href: p.href })),
        { label: blog.glossary.name, href: glossaryHref(locale) },
      ],
    },
    { label: ui.contact, href: shopRouteHref(locale, { type: "contact" }) },
  ];
}

/** Desktop "Blog" dropdown: latest articles with thumbnails. */
export function blogMenu(locale: Locale): BlogMenu {
  const blog = blogUi[locale];
  const { categories: categoryCopy } = shopCopy[locale];
  return {
    href: blogHref(locale),
    latestLabel: blog.menu.latest,
    allLabel: blog.menu.allPosts,
    glossary: { label: blog.glossary.name, href: glossaryHref(locale) },
    posts: postMetas(locale)
      .slice(0, 3)
      .map((p) => ({
        title: p.title,
        href: p.href,
        category: categoryCopy[p.category].shortName,
        image: p.image,
        minutes: blog.minRead.replace("{n}", String(p.minutes)),
      })),
  };
}
