import { shopHref } from "../routing";
import { legalFooterLinks } from "@/legal/registry";
import type { Dictionary } from "./types";

// Copy taken from https://retuertographicdesign.com/es/ (the source's Spanish version).
export const es: Dictionary = {
  meta: {
    title:
      "Retuerto Graphic Design – Conectando experiencias a través del diseño gráfico, IA y automatizaciones, desarrollo web, apps móviles, producción de vídeo y campañas publicitarias",
    description:
      "Transforma tus ideas en proyectos impactantes y estrategias que generen resultados",
  },
  header: {
    switchTo: "Cambiar a",
    cart: "Ir a la tienda online",
    toggleMenu: "Menú conmutador hamburguesa",
  },
  footer: {
    about:
      "Nuestro objetivo es crear contenido valioso y útil que lo puedas aplicar en tu empresa y objetivos profesionales",
    shop: { label: "Tienda", href: shopHref("es") },
    information: "Información",
    infoLinks: legalFooterLinks("es"),
    esPhone: "ES-Teléfono: 0034 922971723 (whatsapp)",
    dePhone: "DE-Teléfono: 0049 30 31878629",
    email: "Email: info@retuertographicdesign.com",
    hours: "Horario de oficina: 9:00 - 15:00 L - V",
    copyright: "© 2026 Todos los derechos reservados.",
  },
};
