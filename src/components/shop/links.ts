import { BOOKING_URL, BUSINESS } from "@/config/site";
import type { Locale } from "@/i18n/config";
import { shopRouteHref } from "@/shop/routes";

export function whatsappHref(text: string): string {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`;
}

/** Contact page anchor with the quote form (used by "Request a quote"). */
export function quoteHref(locale: Locale): string {
  return shopRouteHref(locale, { type: "contact" }, "#form");
}

export function meetingHref(locale: Locale): string {
  // Without a booking tool, meeting requests go through the contact form.
  return BOOKING_URL ?? quoteHref(locale);
}
