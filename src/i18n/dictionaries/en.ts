import { shopHref } from "../routing";
import { legalFooterLinks } from "@/legal/registry";
import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title:
      "Retuerto Graphic Design – Connecting experiences through graphic design, AI & automations, web development, mobile apps, video production, and ad campaigns",
    description:
      "Transform your ideas into stunning visuals and strategies that drive results.",
  },
  header: { switchTo: "Switch to", cart: "Go to the online shop", toggleMenu: "Toggle menu" },
  footer: {
    about:
      "Our goal is to create insightful and content that you can put to work in personal and professional life.",
    shop: { label: "Shop", href: shopHref("en") },
    information: "Information",
    infoLinks: legalFooterLinks("en"),
    esPhone: "ES Phone: 0034 922971723 (whatsapp)",
    dePhone: "DE Phone: 0049 30 31878629",
    email: "Email: info@retuertographicdesign.com",
    hours: "Office hours: 9:00 -15:00 M-F",
    copyright: "© 2026 Copyright all right reserved.",
  },
};
