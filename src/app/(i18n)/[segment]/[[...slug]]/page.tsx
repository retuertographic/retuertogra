import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage, homeMetadata } from "@/components/home/home-page";
import {
  CategoryPage,
  ContactPage,
  ProductPage,
  ProductsPage,
  ShopHomePage,
} from "@/components/shop/pages";
import { ShopShell } from "@/components/shop/shop-shell";
import { organizationJsonLd, shopMetadata } from "@/components/shop/structured-data";
import { JsonLd } from "@/components/shop/json-ld";
import { localeConfig, locales } from "@/i18n/config";
import { resolveSegment } from "@/i18n/routing";
import { shopCopy } from "@/shop/i18n";
import { allShopRoutes, resolveShopRoute, shopPath } from "@/shop/routes";

type Params = { segment: string; slug?: string[] };

export function generateStaticParams(): Params[] {
  return locales.flatMap((locale) => {
    const { siteSegment, shopSegment } = localeConfig[locale];
    const site = siteSegment ? [{ segment: siteSegment, slug: [] }] : [];
    const shop = allShopRoutes().map((route) => ({ segment: shopSegment, slug: shopPath(locale, route) }));
    return [...site, ...shop];
  });
}

export const dynamicParams = false;

function resolve({ segment, slug = [] }: Params) {
  const area = resolveSegment(segment);
  if (!area) return null;
  if (area.area === "site") return slug.length === 0 ? { ...area, route: null } : null;
  const route = resolveShopRoute(area.locale, slug);
  return route ? { ...area, route } : null;
}

export async function generateMetadata({ params }: PageProps<"/[segment]/[[...slug]]">): Promise<Metadata> {
  const resolved = resolve(await params);
  if (!resolved) return {};
  return resolved.route ? shopMetadata(resolved.locale, resolved.route) : homeMetadata(resolved.locale);
}

export default async function SegmentPage({ params }: PageProps<"/[segment]/[[...slug]]">) {
  const resolved = resolve(await params);
  if (!resolved) notFound();
  const { locale, route } = resolved;
  if (!route) return <HomePage locale={locale} />;

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
