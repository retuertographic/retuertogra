import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage, BlogIndexPage, GlossaryPage, articleMetadata, blogAlternates, blogIndexMetadata, glossaryMetadata } from "@/components/blog/blog-pages";
import { HomePage, homeMetadata } from "@/components/home/home-page";
import { PageShell } from "@/components/layout/page-shell";
import { allPosts, postAlternates } from "@/blog/content";
import { blogHref, blogSlug, glossaryAlternates, glossarySlug } from "@/blog/registry";
import { LegalPage, legalMetadata } from "@/components/legal/legal-page";
import {
  CategoryPage,
  ContactPage,
  ProductPage,
  ProductsPage,
} from "@/components/shop/pages";
import { ShopHomePage } from "@/components/shop/shop-home";
import { organizationJsonLd, shopMetadata } from "@/components/shop/structured-data";
import { JsonLd } from "@/components/shop/json-ld";
import { type Locale, localeConfig, locales } from "@/i18n/config";
import { resolveSegment } from "@/i18n/routing";
import { type LegalDocId, englishLegalSegments, legalDocIds, legalDocs, resolveLegalSlug } from "@/legal/registry";
import { shopCopy } from "@/shop/i18n";
import { type ShopRoute, allShopRoutes, resolveShopRoute, shopAlternates, shopPath, shopRouteHref } from "@/shop/routes";

type Params = { segment: string; slug?: string[] };

export function generateStaticParams(): Params[] {
  return locales.flatMap((locale) => {
    const { siteSegment, shopSegment } = localeConfig[locale];
    const legalSlugs = legalDocIds.map((id) => legalDocs[locale][id].slug);
    const blogPaths = [[blogSlug[locale]], ...allPosts(locale).map((p) => [blogSlug[locale], p.slug]), [glossarySlug[locale]]];
    const site = siteSegment
      ? [
          { segment: siteSegment, slug: [] },
          ...legalSlugs.map((slug) => ({ segment: siteSegment, slug: [slug] })),
          ...blogPaths.map((path) => ({ segment: siteSegment, slug: path })),
        ]
      : [
          // English legal, blog and glossary pages live at the root
          ...legalSlugs.map((slug) => ({ segment: slug, slug: [] })),
          ...blogPaths.map(([first, ...rest]) => ({ segment: first, slug: rest })),
        ];
    const shop = allShopRoutes().map((route) => ({ segment: shopSegment, slug: shopPath(locale, route) }));
    return [...site, ...shop];
  });
}

export const dynamicParams = false;

type Resolved =
  | { kind: "home"; locale: Locale }
  | { kind: "legal"; locale: Locale; doc: LegalDocId }
  | { kind: "blog"; locale: Locale; slug?: string }
  | { kind: "glossary"; locale: Locale }
  | { kind: "shop"; locale: Locale; route: ShopRoute };

function resolveSitePath(locale: Locale, path: string[]): Resolved | null {
  const [first, second, ...rest] = path;
  if (rest.length) return null;
  if (first === glossarySlug[locale] && !second) return { kind: "glossary", locale };
  if (first === blogSlug[locale]) {
    if (!second) return { kind: "blog", locale };
    return allPosts(locale).some((p) => p.slug === second) ? { kind: "blog", locale, slug: second } : null;
  }
  const doc = path.length === 1 ? resolveLegalSlug(locale, first) : null;
  return doc ? { kind: "legal", locale, doc } : null;
}

function resolve({ segment, slug = [] }: Params): Resolved | null {
  if (segment === blogSlug.en || segment === glossarySlug.en) return resolveSitePath("en", [segment, ...slug]);
  if (englishLegalSegments().includes(segment) && slug.length === 0) {
    const doc = resolveLegalSlug("en", segment);
    return doc ? { kind: "legal", locale: "en", doc } : null;
  }
  const area = resolveSegment(segment);
  if (!area) return null;
  if (area.area === "site") {
    if (slug.length === 0) return { kind: "home", locale: area.locale };
    return resolveSitePath(area.locale, slug);
  }
  const route = resolveShopRoute(area.locale, slug);
  return route ? { kind: "shop", locale: area.locale, route } : null;
}

export async function generateMetadata({ params }: PageProps<"/[segment]/[[...slug]]">): Promise<Metadata> {
  const resolved = resolve(await params);
  if (!resolved) return {};
  if (resolved.kind === "home") return homeMetadata(resolved.locale);
  if (resolved.kind === "legal") return legalMetadata(resolved.locale, resolved.doc);
  if (resolved.kind === "blog") return resolved.slug ? articleMetadata(resolved.locale, resolved.slug) : blogIndexMetadata(resolved.locale);
  if (resolved.kind === "glossary") return glossaryMetadata(resolved.locale);
  return shopMetadata(resolved.locale, resolved.route);
}

export default async function SegmentPage({ params }: PageProps<"/[segment]/[[...slug]]">) {
  const resolved = resolve(await params);
  if (!resolved) notFound();
  if (resolved.kind === "home") return <HomePage locale={resolved.locale} />;
  if (resolved.kind === "legal") return <LegalPage locale={resolved.locale} id={resolved.doc} />;
  if (resolved.kind === "blog") {
    const { locale, slug } = resolved;
    const post = slug ? allPosts(locale).find((p) => p.slug === slug)! : null;
    return (
      <PageShell locale={locale} alternates={post ? postAlternates(post.id) : blogAlternates()} activeHref={blogHref(locale)}>
        {post ? <ArticlePage locale={locale} slug={post.slug} /> : <BlogIndexPage locale={locale} />}
      </PageShell>
    );
  }
  if (resolved.kind === "glossary") {
    return (
      <PageShell locale={resolved.locale} alternates={glossaryAlternates()} activeHref={blogHref(resolved.locale)}>
        <GlossaryPage locale={resolved.locale} />
      </PageShell>
    );
  }
  const { locale, route } = resolved;

  const productName = route.type === "product" ? shopCopy[locale].products[route.id].name : null;
  const whatsappText = productName
    ? shopCopy[locale].ui.whatsappProductMessage.replace("{product}", productName)
    : undefined;

  return (
    <PageShell locale={locale} alternates={shopAlternates(route)} activeHref={activeNavHref(locale, route)} whatsappText={whatsappText}>
      {route.type === "home" && (
        <>
          <ShopHomePage locale={locale} />
          <JsonLd data={organizationJsonLd(locale)} />
        </>
      )}
      {route.type === "products" && <ProductsPage locale={locale} />}
      {route.type === "contact" && <ContactPage locale={locale} />}
      {route.type === "category" && <CategoryPage locale={locale} id={route.id} />}
      {route.type === "product" && <ProductPage locale={locale} id={route.id} />}
    </PageShell>
  );
}

/** Shop nav item to underline: Products, Contact or Services (everything else). */
function activeNavHref(locale: Locale, route: ShopRoute): string {
  if (route.type === "products") return shopRouteHref(locale, { type: "products" });
  if (route.type === "contact") return shopRouteHref(locale, { type: "contact" });
  return shopRouteHref(locale, { type: "home" });
}
