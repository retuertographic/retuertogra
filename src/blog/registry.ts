import { type Locale, defaultLocale, locales } from "@/i18n/config";
import { siteHref } from "@/i18n/routing";

// Blog and glossary routes + interface copy. Articles live in
// src/content/blog/<locale>/<slug>.md (see src/blog/content.ts).

/** Section slugs under the main site: /blog/ (en), /es/blog/, /de/blog/… */
export const blogSlug: Record<Locale, string> = { en: "blog", es: "blog", de: "blog" };
export const glossarySlug: Record<Locale, string> = { en: "glossary", es: "diccionario", de: "glossar" };

const sectionHref = (locale: Locale, path: string[]) => {
  const base = siteHref(locale);
  return `${base}${path.join("/")}/`;
};

export function blogHref(locale: Locale, postSlug?: string): string {
  return sectionHref(locale, postSlug ? [blogSlug[locale], postSlug] : [blogSlug[locale]]);
}

export function glossaryHref(locale: Locale, termId?: string): string {
  return sectionHref(locale, [glossarySlug[locale]]) + (termId ? `#t-${termId}` : "");
}

export const glossaryAlternates = () =>
  Object.fromEntries(locales.map((l) => [l, glossaryHref(l)])) as Record<Locale, string>;

/** English blog/glossary pages are top-level URLs, served by app/(i18n)/[segment]. */
export const englishBlogSegments = () => [blogSlug[defaultLocale], glossarySlug[defaultLocale]];

export type BlogUi = {
  blog: string;
  eyebrow: string;
  title: string;
  intro: string;
  all: string;
  readMore: string;
  minRead: string;
  updated: string;
  toc: string;
  keepReading: string;
  relatedService: string;
  viewService: string;
  termsInArticle: string;
  noResults: string;
  loadMore: string;
  home: { eyebrow: string; title: string; intro: string; viewAll: string };
  menu: { allPosts: string; latest: string };
  glossary: {
    name: string;
    title: string;
    intro: string;
    search: string;
    noResults: string;
    seeInGlossary: string;
    appearsIn: string;
    close: string;
    letters: string;
    teaserTitle: string;
    teaserBody: string;
  };
};

export const blogUi: Record<Locale, BlogUi> = {
  es: {
    blog: "Blog",
    eyebrow: "Noticias y guías",
    title: "Blog",
    intro: "Ideas prácticas sobre automatización, inteligencia artificial, webs, marketing y diseño para negocios que quieren crecer en digital.",
    all: "Todo",
    readMore: "Leer artículo",
    minRead: "{n} min de lectura",
    updated: "Publicado el",
    toc: "En este artículo",
    keepReading: "Sigue leyendo",
    relatedService: "Servicio relacionado",
    viewService: "Ver el servicio",
    termsInArticle: "Términos de este artículo",
    noResults: "No hay artículos en esta categoría todavía.",
    loadMore: "Ver más artículos",
    home: {
      eyebrow: "Blog",
      title: "Ideas prácticas para tu negocio digital",
      intro: "Guías breves y sin tecnicismos para decidir mejor antes de invertir.",
      viewAll: "Ver todos los artículos",
    },
    menu: { allPosts: "Todos los artículos", latest: "Últimos artículos" },
    glossary: {
      name: "Diccionario",
      title: "Diccionario de términos digitales",
      intro: "Los términos que aparecen en nuestros servicios y artículos, explicados en lenguaje claro. Si echas en falta alguno, pregúntanos.",
      search: "Buscar un término",
      noResults: "No hay ningún término que coincida con tu búsqueda.",
      seeInGlossary: "Ver en el diccionario",
      appearsIn: "Aparece en",
      close: "Cerrar",
      letters: "Índice alfabético",
      teaserTitle: "¿Algún término que no te suena?",
      teaserBody: "Consulta el diccionario: CRM, GEO, PWA, webhook y más, explicados sin tecnicismos.",
    },
  },
  en: {
    blog: "Blog",
    eyebrow: "News and guides",
    title: "Blog",
    intro: "Practical ideas on automation, artificial intelligence, websites, marketing and design for businesses that want to grow online.",
    all: "All",
    readMore: "Read article",
    minRead: "{n} min read",
    updated: "Published on",
    toc: "In this article",
    keepReading: "Keep reading",
    relatedService: "Related service",
    viewService: "View the service",
    termsInArticle: "Terms in this article",
    noResults: "There are no articles in this category yet.",
    loadMore: "Show more articles",
    home: {
      eyebrow: "Blog",
      title: "Practical ideas for your digital business",
      intro: "Short, jargon-free guides to help you decide before you invest.",
      viewAll: "View all articles",
    },
    menu: { allPosts: "All articles", latest: "Latest articles" },
    glossary: {
      name: "Glossary",
      title: "Glossary of digital terms",
      intro: "The terms used in our services and articles, explained in plain language. If one is missing, just ask us.",
      search: "Search for a term",
      noResults: "No term matches your search.",
      seeInGlossary: "See in the glossary",
      appearsIn: "Appears in",
      close: "Close",
      letters: "Alphabetical index",
      teaserTitle: "Not sure what a term means?",
      teaserBody: "Check the glossary: CRM, GEO, PWA, webhook and more, explained without jargon.",
    },
  },
  de: {
    blog: "Blog",
    eyebrow: "News und Ratgeber",
    title: "Blog",
    intro: "Praktische Ideen zu Automatisierung, künstlicher Intelligenz, Websites, Marketing und Design für Unternehmen, die digital wachsen wollen.",
    all: "Alle",
    readMore: "Artikel lesen",
    minRead: "{n} Min. Lesezeit",
    updated: "Veröffentlicht am",
    toc: "In diesem Artikel",
    keepReading: "Weiterlesen",
    relatedService: "Passende Leistung",
    viewService: "Leistung ansehen",
    termsInArticle: "Begriffe in diesem Artikel",
    noResults: "In dieser Kategorie gibt es noch keine Artikel.",
    loadMore: "Weitere Artikel anzeigen",
    home: {
      eyebrow: "Blog",
      title: "Praktische Ideen für Ihr digitales Geschäft",
      intro: "Kurze Ratgeber ohne Fachjargon, damit Sie vor einer Investition besser entscheiden.",
      viewAll: "Alle Artikel ansehen",
    },
    menu: { allPosts: "Alle Artikel", latest: "Neueste Artikel" },
    glossary: {
      name: "Glossar",
      title: "Glossar digitaler Begriffe",
      intro: "Die Begriffe aus unseren Leistungen und Artikeln, verständlich erklärt. Fehlt einer? Fragen Sie uns.",
      search: "Begriff suchen",
      noResults: "Kein Begriff passt zu Ihrer Suche.",
      seeInGlossary: "Im Glossar ansehen",
      appearsIn: "Kommt vor in",
      close: "Schließen",
      letters: "Alphabetischer Index",
      teaserTitle: "Ein Begriff ist Ihnen unklar?",
      teaserBody: "Schauen Sie ins Glossar: CRM, GEO, PWA, Webhook und mehr, ohne Fachjargon erklärt.",
    },
  },
};
