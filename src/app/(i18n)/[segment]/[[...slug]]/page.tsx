import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage, homeMetadata } from "@/components/home/home-page";
import { LegalPage, legalMetadata } from "@/components/legal/legal-page";
import {
  CategoryPage,
  ContactPage,
  ProductPage,
  ProductsPage,
} from "@/components/shop/pages";
import { ShopHomePage } from "@/components/shop/shop-home";
import { ShopShell } from "@/components/shop/shop-shell";
import { organizationJsonLd, shopMetadata } from "@/components/shop/structured-data";
import { JsonLd } from "@/components/shop/json-ld";
import { type Locale, localeConfig, locales } from "@/i18n/config";
import { resolveSegment } from "@/i18n/routing";
import { type LegalDocId, englishLegalSegments, legalDocIds, legalDocs, resolveLegalSlug } from "@/legal/registry";
import { shopCopy } from "@/shop/i18n";
import { type ShopRoute, allShopRoutes, resolveShopRoute, shopPath } from "@/shop/routes";

type Params = { segment: string; slug?: string[] };

export function generateStaticParams(): Params[] {
  return locales.flatMap((locale) => {
    const { siteSegment, shopSegment } = localeConfig[locale];
    const legalSlugs = legalDocIds.map((id) => legalDocs[locale][id].slug);
    const site = siteSegment
      ? [{ segment: siteSegment, slug: [] }, ...legalSlugs.map((slug) => ({ segment: siteSegment, slug: [slug] }))]
      : legalSlugs.map((slug) => ({ segment: slug, slug: [] })); // English legal pages live at the root
    const shop = allShopRoutes().map((route) => ({ segment: shopSegment, slug: shopPath(locale, route) }));
    return [...site, ...shop];
  });
}

export const dynamicParams = false;

type Resolved =
  | { kind: "home"; locale: Locale }
  | { kind: "legal"; locale: Locale; doc: LegalDocId }
  | { kind: "shop"; locale: Locale; route: ShopRoute };

function resolve({ segment, slug = [] }: Params): Resolved | null {
  if (englishLegalSegments().includes(segment) && slug.length === 0) {
    const doc = resolveLegalSlug("en", segment);
    return doc ? { kind: "legal", locale: "en", doc } : null;
  }
  const area = resolveSegment(segment);
  if (!area) return null;
  if (area.area === "site") {
    if (slug.length === 0) return { kind: "home", locale: area.locale };
    const doc = slug.length === 1 ? resolveLegalSlug(area.locale, slug[0]) : null;
    return doc ? { kind: "legal", locale: area.locale, doc } : null;
  }
  const route = resolveShopRoute(area.locale, slug);
  return route ? { kind: "shop", locale: area.locale, route } : null;
}

export async function generateMetadata({ params }: PageProps<"/[segment]/[[...slug]]">): Promise<Metadata> {
  const resolved = resolve(await params);
  if (!resolved) return {};
  if (resolved.kind === "home") return homeMetadata(resolved.locale);
  if (resolved.kind === "legal") return legalMetadata(resolved.locale, resolved.doc);
  return shopMetadata(resolved.locale, resolved.route);
}

export default async function SegmentPage({ params }: PageProps<"/[segment]/[[...slug]]">) {
  const resolved = resolve(await params);
  if (!resolved) notFound();
  if (resolved.kind === "home") return <HomePage locale={resolved.locale} />;
  if (resolved.kind === "legal") return <LegalPage locale={resolved.locale} id={resolved.doc} />;
  const { locale, route } = resolved;

  const productName = route.type === "product" ? shopCopy[locale].products[route.id].name : null;
  const whatsappText = productName
    ? shopCopy[locale].ui.whatsappProductMessage.replace("{product}", productName)
    : undefined;

  return (
    <ShopShell locale={locale} route={route} whatsappText={whatsappText}>
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
    </ShopShell>
  );
}
