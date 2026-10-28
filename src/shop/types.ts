export const categoryIds = [
  "automation",
  "apps",
  "web",
  "geo",
  "pos",
  "marketing",
  "design",
  "maintenance",
] as const;
export type CategoryId = (typeof categoryIds)[number];

export const productIds = [
  "chat-crm",
  "invoice-automation",
  "whatsapp-chatbot",
  "voice-agent",
  "system-integrations",
  "bodyshop-app",
  "citizen-incidents",
  "oidococina",
  "custom-apps",
  "custom-website",
  "video-guide",
  "canarygps",
  "menu-pos-sync",
  "social-content",
  "video-production",
  "ad-campaigns",
  "email-marketing",
  "seo-geo-llmo",
  "brand-identity",
  "web-maintenance",
  "data-protection",
] as const;
export type ProductId = (typeof productIds)[number];

export type BillingPeriod = "month" | "year";

/** Prices in euros. Copy for each tier/line lives in the product's locale file. */
export type Price =
  | { kind: "from"; amount: number; period?: BillingPeriod }
  | { kind: "tiers"; tiers: { amount: number; period?: BillingPeriod }[] }
  | { kind: "quote" };

export type PrimaryCta = "buy" | "quote" | "meeting" | "availability";

export type Product = {
  id: ProductId;
  category: CategoryId;
  price: Price;
  primaryCta: PrimaryCta;
  /** WooCommerce products where the purchase happens (slug of /product/<slug>/). */
  woo?: { slug: string; amount: number; period?: BillingPeriod }[];
  image?: string;
  /** Icon for the image placeholder when there is no photo (defaults to the category icon). */
  icon?: "mail" | "trending";
  /** Shown on the shop home and in the main-site catalog. */
  featured?: boolean;
};

export const solutionGroupIds = ["automation", "apps", "web-geo", "marketing-design"] as const;
export type SolutionGroupId = (typeof solutionGroupIds)[number];

export type Category = {
  id: CategoryId;
  icon: "bot" | "smartphone" | "code" | "map" | "qr" | "megaphone" | "palette" | "wrench";
  image?: string;
};

// ---- Copy (one object per locale in src/shop/i18n) ----

export type CategoryCopy = {
  slug: string;
  name: string;
  /** Short label for cards, menus and the footer. */
  shortName: string;
  /** Filter chip label. */
  chip: string;
  /** One short line for the compact category cards. */
  shortSummary: string;
  /** One sentence for cards and meta descriptions. */
  summary: string;
  /** Commercial description shown on the category page. */
  description: string;
  services: string[];
};

export type ProductCopy = {
  slug: string;
  name: string;
  /** Short name for lists (solutions, hero price cards). Defaults to `name`. */
  shortName?: string;
  summary: string;
  problem: string;
  features: string[];
  audience: string;
  /** Labels for each price tier (Price.kind === "tiers") or Woo plan, in order. */
  priceLabels?: string[];
  /** Extra pricing/scope notes (what affects the price, what is excluded…). */
  notes?: string[];
};

export type ShopUi = {
  shopName: string;
  breadcrumbHome: string;
  services: string;
  products: string;
  projects: string;
  about: string;
  contact: string;
  home: string;
  cta: {
    buy: string;
    quote: string;
    meeting: string;
    details: string;
    availability: string;
    whatsapp: string;
    inquiry: string;
    woo: string;
  };
  price: {
    label: string;
    from: string;
    quote: string;
    quoteNote: string;
    perMonth: string;
    perYear: string;
    wooNote: string;
  };
  sections: {
    problem: string;
    features: string;
    audience: string;
    notes: string;
    servicesIncluded: string;
    solutions: string;
    otherCategories: string;
    relatedProducts: string;
  };
  form: {
    title: string;
    intro: string;
    iframeTitle: string;
    fallback: string;
    email: string;
    whatsapp: string;
    phone: string;
  };
  /** Short "Request a quote" label for the header and mobile bar. */
  quoteShort: string;
  /** Location shown in the hero eyebrow. */
  location: string;
  trust: { long: string; short: string }[];
  search: { placeholder: string; label: string; open: string; all: string; noResults: string; results: string; result: string };
  badges: { subscription: string; custom: string };
  viewServices: string;
  viewAllServices: string;
  viewCatalog: string;
  featuredEyebrow: string;
  ctaEyebrow: string;
  steps: { title: string; items: { title: string; body: string }[] };
  solutionGroups: Record<SolutionGroupId, string>;
  /** Prefilled WhatsApp text. */
  whatsappMessage: string;
  /** Prefilled WhatsApp text on a product page; "{product}" is replaced. */
  whatsappProductMessage: string;
  floatingWhatsapp: string;
};

export type ShopPageCopy = {
  home: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    /** Hero title, split so the second part can be highlighted. */
    titleLead: string;
    titleAccent: string;
    intro: string;
    categoriesTitle: string;
    categoriesIntro: string;
    featuredTitle: string;
    featuredIntro: string;
    customTitle: string;
    customHeading: string;
    customNote: string;
    ctaTitle: string;
    ctaBody: string;
  };
  products: {
    slug: string;
    metaTitle: string;
    metaDescription: string;
    title: string;
    intro: string;
    pricedTitle: string;
    customTitle: string;
  };
  contact: {
    slug: string;
    metaTitle: string;
    metaDescription: string;
    title: string;
    intro: string;
    meetingTitle: string;
    meetingBody: string;
  };
};

export type ShopCopy = {
  ui: ShopUi;
  pages: ShopPageCopy;
  categories: Record<CategoryId, CategoryCopy>;
  products: Record<ProductId, ProductCopy>;
};
