import { type Locale, defaultLocale, locales } from "@/i18n/config";
import { siteHref } from "@/i18n/routing";

// Legal and information pages. Content lives in src/content/legal/<locale>/<id>.md.
// English and Spanish slugs match the old WordPress URLs so existing links keep working.
export const legalDocIds = ["privacy", "terms", "compliance", "faq", "legal-notice", "cookies"] as const;
export type LegalDocId = (typeof legalDocIds)[number];

export type LegalDocMeta = {
  slug: string;
  title: string;
  description: string;
  /**
   * Translated legal text: shows a notice that the Spanish version prevails.
   * (On the old site these pages only existed in Spanish.)
   */
  translated?: boolean;
};

export const legalDocs: Record<Locale, Record<LegalDocId, LegalDocMeta>> = {
  en: {
    privacy: { slug: "privacy-policy", title: "Privacy Policy", description: "How Retuerto Graphic Design collects, uses and protects your personal data.", translated: true },
    terms: { slug: "t-c", title: "Terms & Conditions", description: "Terms and conditions of sale, privacy, returns and purchase process.", translated: true },
    compliance: { slug: "compliance", title: "Compliance", description: "General terms and conditions of contract and privacy policy of Retuerto Graphic Design." },
    faq: { slug: "faq", title: "FAQ", description: "Answers to frequently asked questions about our services, pricing and support." },
    "legal-notice": { slug: "legal-notice", title: "Legal Notice", description: "Legal notice and owner information of retuertographicdesign.com.", translated: true },
    cookies: { slug: "cookie-policy", title: "Cookie Policy", description: "What cookies are, which types exist and how to manage them.", translated: true },
  },
  es: {
    privacy: { slug: "privacy-policy", title: "Política de privacidad", description: "Cómo recoge, usa y protege Retuerto Graphic Design tus datos personales." },
    terms: { slug: "t-c", title: "Términos y condiciones", description: "Condiciones de venta, privacidad, devoluciones y proceso de compra." },
    compliance: { slug: "cumplimiento", title: "Cumplimiento", description: "Condiciones generales de contratación y política de privacidad de Retuerto Graphic Design." },
    faq: { slug: "faq", title: "Preguntas frecuentes", description: "Respuestas a las preguntas más habituales sobre nuestros servicios, precios y soporte." },
    "legal-notice": { slug: "legal-notice", title: "Aviso legal", description: "Aviso legal y datos del titular de retuertographicdesign.com." },
    cookies: { slug: "cookie-policy", title: "Política de cookies", description: "Qué son las cookies, qué tipos existen y cómo gestionarlas." },
  },
  de: {
    privacy: { slug: "datenschutz", title: "Datenschutzerklärung", description: "Wie Retuerto Graphic Design Ihre personenbezogenen Daten erhebt, nutzt und schützt.", translated: true },
    terms: { slug: "agb", title: "Allgemeine Geschäftsbedingungen", description: "Verkaufsbedingungen, Datenschutz, Rückgabe und Kaufvorgang.", translated: true },
    compliance: { slug: "compliance", title: "Compliance", description: "Allgemeine Vertragsbedingungen und Datenschutzerklärung von Retuerto Graphic Design.", translated: true },
    faq: { slug: "faq", title: "FAQ", description: "Antworten auf häufige Fragen zu unseren Leistungen, Preisen und zum Support." },
    "legal-notice": { slug: "impressum", title: "Impressum", description: "Impressum und Angaben zum Inhaber von retuertographicdesign.com.", translated: true },
    cookies: { slug: "cookie-richtlinie", title: "Cookie-Richtlinie", description: "Was Cookies sind, welche Arten es gibt und wie Sie sie verwalten.", translated: true },
  },
};

/** Notice shown on translated legal texts (the Spanish text is the binding one). */
export const translationNotice: Record<Locale, { text: string; link: string }> = {
  en: { text: "This document is a translation provided for information purposes. In case of discrepancy, the Spanish version prevails.", link: "Read the Spanish version" },
  es: { text: "Este documento es una traducción con fines informativos. En caso de discrepancia, prevalece la versión en español.", link: "Ver la versión en español" },
  de: { text: "Dieses Dokument ist eine Übersetzung zu Informationszwecken. Im Fall von Abweichungen ist die spanische Fassung maßgeblich.", link: "Spanische Fassung lesen" },
};

/** Legal page URL: /privacy-policy/ (en), /es/cumplimiento/, /de/impressum/… */
export function legalHref(locale: Locale, id: LegalDocId): string {
  const slug = legalDocs[locale][id].slug;
  return locale === defaultLocale ? siteHref(locale).replace(/\/$/, `/${slug}/`) : `${siteHref(locale)}${slug}/`;
}

export function legalAlternates(id: LegalDocId): Record<Locale, string> {
  return Object.fromEntries(locales.map((l) => [l, legalHref(l, id)])) as Record<Locale, string>;
}

export function resolveLegalSlug(locale: Locale, slug: string): LegalDocId | null {
  return legalDocIds.find((id) => legalDocs[locale][id].slug === slug) ?? null;
}

/** English legal pages are top-level URLs (/privacy-policy/…), served by app/(i18n)/[segment]. */
export const englishLegalSegments = () => legalDocIds.map((id) => legalDocs[defaultLocale][id].slug);

/** Footer "Information" links. */
export function legalFooterLinks(locale: Locale) {
  return legalDocIds.map((id) => ({ label: legalDocs[locale][id].title, href: legalHref(locale, id) }));
}
