import { shopHref } from "../routing";
import { legalFooterLinks } from "@/legal/registry";
import type { Dictionary } from "./types";

// The source site has no German version; translated from the English copy.
// Legal/shop links fall back to the English source pages.
export const de: Dictionary = {
  meta: {
    title:
      "Retuerto Graphic Design – Erlebnisse verbinden durch Grafikdesign, KI & Automatisierung, Webentwicklung, mobile Apps, Videoproduktion und Werbekampagnen",
    description:
      "Verwandeln Sie Ihre Ideen in beeindruckende Visuals und Strategien, die Ergebnisse liefern.",
  },
  header: { switchTo: "Wechseln zu", cart: "Zum Onlineshop", toggleMenu: "Menü umschalten" },
  footer: {
    about:
      "Unser Ziel ist es, wertvolle Inhalte zu schaffen, die Sie im privaten und beruflichen Alltag nutzen können.",
    shop: { label: "Shop", href: shopHref("de") },
    information: "Informationen",
    infoLinks: legalFooterLinks("de"),
    esPhone: "Telefon ES: 0034 922971723 (WhatsApp)",
    dePhone: "Telefon DE: 0049 30 31878629",
    email: "E-Mail: info@retuertographicdesign.com",
    hours: "Bürozeiten: 9:00–15:00 Uhr, Mo–Fr",
    copyright: "© 2026 Alle Rechte vorbehalten.",
  },
};
