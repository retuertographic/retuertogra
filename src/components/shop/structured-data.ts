import type { Metadata } from "next";
import { BUSINESS, SITE_ORIGIN, wooProductUrl } from "@/config/site";
import { type Locale, localeConfig } from "@/i18n/config";
import { siteHref } from "@/i18n/routing";
import { getProduct } from "@/shop/catalog";
import { shopCopy } from "@/shop/i18n";
import { type ShopRoute, shopAlternates, shopRouteHref } from "@/shop/routes";
import { lowestPrice } from "./price";

const absolute = (href: string) => (href.startsWith("http") ? href : `${SITE_ORIGIN}${href}`);

export function organizationJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS.name,
    url: absolute(siteHref(locale)),
    email: BUSINESS.email,
    telephone: BUSINESS.phoneEs,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      postalCode: BUSINESS.address.postalCode,
      addressLocality: BUSINESS.address.city,
      addressCountry: BUSINESS.address.country,
    },
  };
}

export function serviceJsonLd(locale: Locale, route: Extract<ShopRoute, { type: "category" | "product" }>) {
  const copy = shopCopy[locale];
  const provider = { "@type": "Organization", name: BUSINESS.name, url: absolute(siteHref(locale)) };
  const url = absolute(shopRouteHref(locale, route));

  if (route.type === "category") {
    const text = copy.categories[route.id];
    return { "@context": "https://schema.org", "@type": "Service", name: text.name, description: text.summary, url, provider, inLanguage: locale };
  }

  const product = getProduct(route.id);
  const text = copy.products[route.id];
  const price = lowestPrice(product);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: text.name,
    description: text.summary,
    url,
    provider,
    inLanguage: locale,
    category: copy.categories[product.category].name,
    areaServed: "ES",
    ...(price !== null && {
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price,
        url: product.woo ? wooProductUrl(product.woo[0].slug) : url,
        ...(product.price.kind === "from" && {
          priceSpecification: { "@type": "PriceSpecification", minPrice: price, priceCurrency: "EUR" },
        }),
      },
    }),
  };
}

/** <title>, description, canonical, hreflang and Open Graph for a shop page. */
export function shopMetadata(locale: Locale, route: ShopRoute): Metadata {
  const copy = shopCopy[locale];
  let title: string;
  let description: string;
  switch (route.type) {
    case "home":
      ({ metaTitle: title, metaDescription: description } = copy.pages.home);
      break;
    case "products":
      ({ metaTitle: title, metaDescription: description } = copy.pages.products);
      break;
    case "contact":
      ({ metaTitle: title, metaDescription: description } = copy.pages.contact);
      break;
    case "category":
      title = `${copy.categories[route.id].name} | ${copy.ui.shopName}`;
      description = copy.categories[route.id].summary;
      break;
    case "product":
      title = `${copy.products[route.id].name} | ${copy.ui.shopName}`;
      description = copy.products[route.id].summary;
      break;
  }
  const alternates = shopAlternates(route);
  return {
    metadataBase: new URL(SITE_ORIGIN),
    title,
    description,
    alternates: {
      canonical: alternates[locale],
      languages: { ...alternates, "x-default": alternates.en },
    },
    openGraph: {
      title,
      description,
      url: alternates[locale],
      siteName: copy.ui.shopName,
      locale: localeConfig[locale].ogLocale,
      type: "website",
    },
  };
}
