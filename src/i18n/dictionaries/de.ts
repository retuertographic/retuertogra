import { shopHref, siteHref } from "../routing";
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
  anchors: { about: "ueber-uns", services: "leistungen", projects: "projekte", contact: "kontakt" },
  nav: [
    { label: "Startseite", href: siteHref("de") },
    { label: "Shop", href: shopHref("de"), highlight: true },
    { label: "Über uns", href: "#ueber-uns" },
    { label: "Leistungen", href: "#leistungen" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  header: { switchTo: "Wechseln zu", cart: "Warenkorb", toggleMenu: "Menü umschalten" },
  hero: {
    title: "Ihr digitales Erlebnis auf neuem Niveau",
    subtitle:
      "Verwandeln Sie Ihre Ideen in beeindruckende Visuals und Strategien, die Ergebnisse liefern.",
    connect: "Kontakt",
    email: "E-Mail",
  },
  carousel: {
    label: "Leistungsübersicht",
    previous: "Vorherige Folie",
    next: "Nächste Folie",
    goTo: "Gehe zu Folie",
  },
  expertise: {
    eyebrow: "Warum wir es tun",
    title: "Unsere Expertise",
    tabs: [
      {
        label: "Kreative Lösungen",
        title: "Ideen in Meisterwerke verwandeln",
        body: "Wir sind spezialisiert auf Werbeentwicklung, Webdesign und App-Lösungen, die das Wesen Ihrer Marke einfangen. Unser Ziel ist es, hochwertige digitale Erlebnisse zu schaffen, die herausstechen – ob durch wirkungsvolle Werbekampagnen, ansprechende Websites oder intuitive mobile Anwendungen.",
      },
      {
        label: "Marketingstrategien",
        title: "Wachstum durch Digitalisierung",
        body: "Unsere digitalen Marketingstrategien sind darauf ausgelegt, Ihre Zielgruppe plattformübergreifend zu erreichen. Wir betreuen Werbekampagnen, die Ihre Reichweite auf Google, Meta und LinkedIn maximieren, und optimieren gleichzeitig Ihren E-Commerce-Auftritt für mehr Conversions.",
      },
      {
        label: "Technische Innovationen",
        title: "Mit Technologie die Zukunft gestalten",
        body: "Wir bieten KI-gestützte Lösungen, die Arbeitsabläufe automatisieren und Ihr Unternehmen voranbringen. Von smarten Chatbots über individuelle Webanwendungen bis hin zu Voice Agents sorgen wir für nahtlose Integrationen, die das Nutzererlebnis verbessern und die Effizienz steigern.",
      },
    ],
  },
  whatWeDo: {
    title: "Was wir tun",
    body: "Wir glauben daran, Erlebnisse zu verbinden – ob Sie informieren, bewerben, unterstützen oder begeistern möchten. Durch das Zusammenspiel von IT und Grafikdesign machen wir Ihre Vision zur Realität und entwickeln Lösungen, die ankommen und inspirieren.",
    values: [
      {
        title: "Unsere Mission",
        body: "Kreativität und Technologie zu vereinen, damit jedes Projekt, das wir umsetzen, Herz und Verstand Ihrer Zielgruppe direkt anspricht.",
      },
      {
        title: "Unsere Werte",
        body: "Wir setzen auf Verbindung, stellen menschenzentrierte Kommunikation und Gestaltung in den Mittelpunkt und streben nach Präzision – immer mit Blick auf das, was als Nächstes kommt.",
      },
    ],
  },
  connectMinds: {
    title: "Verbinden Sie Köpfe mit unseren innovativen Lösungen",
    body: "Von intuitiven mobilen Apps und individueller Webentwicklung bis hin zu automatisierten Werbekampagnen – wir sind die Brücke zwischen Ihrer Marke und Ihren Kunden. Lassen Sie uns Ihre nächste große Vision verwirklichen.",
    cta: "Kontakt",
    href: shopHref("de", ["kontakt"]),
  },
  featured: {
    eyebrow: "Ausgewählte Arbeiten",
    title: "Entdecken Sie unsere innovativen Projekte",
    body: "Wir bringen Kreativität auf das nächste Level: Unser Portfolio zeigt einzigartige Lösungen, die Design und Technologie verbinden.",
    projects: [
      {
        title: "Standortbasierte Web-App",
        body: "Eine nahtlose Webanwendung, die Nutzererlebnis und Interaktion verbessert.",
        tags: ["Webentwicklung", "UX/UI-Design", "Responsive Design"],
        link: "Details ansehen",
      },
      {
        title: "Markenidentität",
        body: "Eine unverwechselbare visuelle Identität, die bei der Zielgruppe Anklang findet.",
        tags: ["Markenstrategie", "Grafikdesign", "Visuelle Assets"],
        link: "Mehr erfahren",
      },
      {
        title: "Marketingkampagne",
        body: "Ein strategischer Ansatz, um die Markenbekanntheit zu steigern und Conversions zu fördern.",
        tags: ["Kampagnenstrategie", "Digitale Anzeigen", "E-Mail-Marketing"],
        link: "Projekt ansehen",
      },
    ],
    seeAll: "Alle Projekte ansehen",
  },
  catalog: {
    title: "Retuertos Wachstumskatalog",
    subtitle: "Werkzeuge zum Messen, Bewegen und Vermarkten",
    details: "Details",
  },
  newsletter: {
    title: "Bleiben Sie mit unseren Insights auf dem Laufenden!",
    body: "Abonnieren Sie unseren Newsletter für Tipps, Neuigkeiten und exklusive Insights, die speziell auf Sie zugeschnitten sind. Bleiben Sie in Verbindung und erweitern Sie Ihr Wissen mit Branchentrends und kreativen Lösungen – direkt in Ihr Postfach.",
    name: "Ihr Name",
    namePlaceholder: "Ihren Namen eingeben",
    email: "Ihre E-Mail",
    emailPlaceholder: "Ihre E-Mail eingeben*",
    submit: "Abonnieren",
  },
  banner: {
    eyebrow: "Wir schließen die Lücke zwischen kreativem Design und technischer Umsetzung",
    title: "Erlebnisse verbinden",
    body: "Ihre Ideen verdienen es, zu glänzen. Wir verwandeln Konzepte in fesselnde Designs, die begeistern und inspirieren. Lassen Sie uns gemeinsam die Zukunft der Kreativität gestalten.",
    appointment: "Termin",
    work: "Unsere Arbeiten",
  },
  contact: {
    title: "Kontakt aufnehmen",
    body: "Wir unterstützen Sie gerne bei Ihren Marketing- und Kreativprojekten. Ob Sie Fragen zu unseren Leistungen haben oder ein neues Projekt besprechen möchten – melden Sie sich einfach. Unser Team hilft Ihnen gerne weiter! Sie finden uns auch in den sozialen Medien. Lassen Sie uns in Verbindung bleiben!",
  },
  footer: {
    about:
      "Unser Ziel ist es, wertvolle Inhalte zu schaffen, die Sie im privaten und beruflichen Alltag nutzen können.",
    quickLinks: "Schnellzugriff",
    home: "Startseite",
    shop: { label: "Shop", href: shopHref("de") },
    payments: "Zahlungsarten",
    information: "Informationen",
    infoLinks: legalFooterLinks("de"),
    connect: "Kontakt",
    esPhone: "Telefon ES: 0034 922971723 (WhatsApp)",
    dePhone: "Telefon DE: 0049 30 31878629",
    email: "E-Mail: info@retuertographicdesign.com",
    hours: "Bürozeiten: 9:00–15:00 Uhr, Mo–Fr",
    copyright: "© 2026 Alle Rechte vorbehalten.",
  },
};
