import type { Locale } from "@/i18n/config";

// Central, locale-independent configuration. Copy lives in src/i18n and src/shop/i18n.

/** The current WordPress site (legacy pages still linked from the new site). */
export const SOURCE_ORIGIN = "https://retuertographicdesign.com";

// basePath is prepended manually: next/image and inline background URLs do not add it.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const ASSET_BASE = `${BASE_PATH}/sites/retuertographicdesign/images`;

/**
 * Origins used to build links between the main site and the shop. Empty means
 * "same host" (one deployment serves both). When the shop moves to
 * shop.retuertographicdesign.com, set NEXT_PUBLIC_SHOP_ORIGIN / NEXT_PUBLIC_MAIN_ORIGIN.
 */
export const MAIN_ORIGIN = process.env.NEXT_PUBLIC_MAIN_ORIGIN ?? "";
export const SHOP_ORIGIN = process.env.NEXT_PUBLIC_SHOP_ORIGIN ?? "";

/** Absolute origin for canonical URLs, sitemap and structured data. */
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || "https://retuertographic.github.io";

export const BUSINESS = {
  name: "Retuerto Graphic Design",
  email: "info@retuertographicdesign.com",
  phoneEs: "+34922971723",
  phoneDe: "+493031878629",
  /** WhatsApp number in international format without "+" (wa.me links). */
  whatsapp: "34922971723",
  address: {
    street: "C. de Calderón de la Barca, 2, Oficina 3",
    postalCode: "38005",
    city: "Santa Cruz de Tenerife",
    country: "ES",
  },
};

/** WooCommerce checkout. Buy buttons link to `${WOO_ORIGIN}/product/<slug>/`. */
export const WOO_ORIGIN = process.env.NEXT_PUBLIC_WOO_ORIGIN || SOURCE_ORIGIN;
export const wooProductUrl = (slug: string) => `${WOO_ORIGIN}/product/${slug}/`;
export const wooCartUrl = `${WOO_ORIGIN}/cart/`;

/**
 * CRM forms (crmapi.retuertographicdesign.com/form/<id>), one per locale.
 * `null` shows the email/WhatsApp fallback until the form exists in the CRM.
 */
export const CRM_ORIGIN = "https://crmapi.retuertographicdesign.com";
export const crmFormIds: Record<Locale, string | null> = {
  en: null,
  es: null,
  de: null,
};

/** Meeting booking page (Calendly, CRM calendar…). `null` falls back to the contact page. */
export const BOOKING_URL: string | null = null;

export const shopDetailsUrl = `${SOURCE_ORIGIN}/shopx/`;

export const mapAddress =
  "C. de Calderón de la Barca, 2, Oficina 3, 38005 Santa Cruz de Tenerife";

export const mapEmbedUrl =
  "https://maps.google.com/maps?q=C.%20de%20Calder%C3%B3n%20de%20la%20Barca%2C%202%2C%20Oficina%203%2C%2038005%20Santa%20Cruz%20de%20Tenerife&t=m&z=14&output=embed&iwloc=near";
