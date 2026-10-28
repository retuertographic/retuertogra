import { ASSET_BASE } from "@/config/site";
import type { Category, CategoryId, Product, ProductId, SolutionGroupId } from "./types";

// Locale-independent catalog: order, prices, WooCommerce links, images.
// To add a product: add its id to productIds (types.ts), an entry here and its
// copy in every src/shop/i18n/<locale>.ts file (TypeScript lists what's missing).

export const categories: Category[] = [
  { id: "automation", icon: "bot", image: `${ASSET_BASE}/expertise-technical.webp` },
  { id: "apps", icon: "smartphone", image: `${ASSET_BASE}/project-geolocated.jpg` },
  { id: "web", icon: "code", image: `${ASSET_BASE}/expertise-creative.webp` },
  { id: "geo", icon: "map" },
  { id: "pos", icon: "qr" },
  { id: "marketing", icon: "megaphone", image: `${ASSET_BASE}/expertise-marketing.webp` },
  { id: "design", icon: "palette", image: `${ASSET_BASE}/project-branding.webp` },
  { id: "maintenance", icon: "wrench", image: `${ASSET_BASE}/catalog-web-maintenance.webp` },
];

export const products: Product[] = [
  // Automation & AI
  { id: "whatsapp-chatbot", category: "automation", price: { kind: "from", amount: 40, period: "month" }, primaryCta: "quote", image: `${ASSET_BASE}/catalog-whatsapp-chatbot.webp`, featured: true },
  { id: "chat-crm", category: "automation", price: { kind: "from", amount: 40, period: "month" }, primaryCta: "quote" },
  { id: "voice-agent", category: "automation", price: { kind: "quote" }, primaryCta: "quote", image: `${ASSET_BASE}/catalog-ai-voice-agent.webp`, featured: true },
  { id: "invoice-automation", category: "automation", price: { kind: "quote" }, primaryCta: "quote" },
  { id: "system-integrations", category: "automation", price: { kind: "quote" }, primaryCta: "meeting" },
  // Web & mobile apps
  { id: "bodyshop-app", category: "apps", price: { kind: "quote" }, primaryCta: "meeting" },
  { id: "citizen-incidents", category: "apps", price: { kind: "quote" }, primaryCta: "meeting", image: `${ASSET_BASE}/project-geolocated.jpg` },
  { id: "oidococina", category: "apps", price: { kind: "quote" }, primaryCta: "quote" },
  { id: "custom-apps", category: "apps", price: { kind: "quote" }, primaryCta: "meeting" },
  // Web development
  { id: "custom-website", category: "web", price: { kind: "quote" }, primaryCta: "quote" },
  // Geolocation & tourism
  { id: "video-guide", category: "geo", price: { kind: "quote" }, primaryCta: "meeting" },
  { id: "canarygps", category: "geo", price: { kind: "quote" }, primaryCta: "quote" },
  // POS integrations
  { id: "menu-pos-sync", category: "pos", price: { kind: "quote" }, primaryCta: "quote" },
  // Marketing, social media & video
  {
    id: "email-marketing",
    category: "marketing",
    price: { kind: "from", amount: 16.9 },
    primaryCta: "buy",
    woo: [
      { slug: "email-marketing-tool-basic", amount: 16.9 },
      { slug: "email-marketing-tool-medium", amount: 25.9 },
    ],
    icon: "mail",
    featured: true,
  },
  { id: "seo-geo-llmo", category: "marketing", price: { kind: "quote" }, primaryCta: "quote", icon: "trending", featured: true },
  { id: "social-content", category: "marketing", price: { kind: "quote" }, primaryCta: "quote", image: `${ASSET_BASE}/expertise-creative.webp` },
  { id: "video-production", category: "marketing", price: { kind: "quote" }, primaryCta: "availability" },
  { id: "ad-campaigns", category: "marketing", price: { kind: "quote" }, primaryCta: "quote", image: `${ASSET_BASE}/project-marketing.webp` },
  // Graphic design
  { id: "brand-identity", category: "design", price: { kind: "quote" }, primaryCta: "quote", image: `${ASSET_BASE}/project-branding.webp` },
  // Maintenance & support
  { id: "web-maintenance", category: "maintenance", price: { kind: "from", amount: 99 }, primaryCta: "quote", image: `${ASSET_BASE}/catalog-web-maintenance.webp`, featured: true },
  {
    id: "data-protection",
    category: "maintenance",
    price: { kind: "tiers", tiers: [{ amount: 180 }, { amount: 150, period: "year" }] },
    primaryCta: "quote",
    image: `${ASSET_BASE}/catalog-data-protection.webp`,
    featured: true,
  },
];

/** Custom solutions on the shop home, grouped in four blocks. */
export const solutionGroups: { id: SolutionGroupId; icon: Category["icon"]; products: ProductId[] }[] = [
  { id: "automation", icon: "bot", products: ["voice-agent", "invoice-automation", "system-integrations", "menu-pos-sync"] },
  { id: "apps", icon: "smartphone", products: ["bodyshop-app", "citizen-incidents", "oidococina", "custom-apps"] },
  { id: "web-geo", icon: "code", products: ["custom-website", "video-guide", "canarygps"] },
  { id: "marketing-design", icon: "megaphone", products: ["seo-geo-llmo", "social-content", "video-production", "ad-campaigns", "brand-identity"] },
];

/** "Subscription" badge for monthly plans, "Custom" for quote-based services. */
export function productBadge(p: Product): "subscription" | "custom" | null {
  if (p.price.kind === "quote") return "custom";
  if (p.price.kind === "from" && p.price.period === "month") return "subscription";
  return null;
}

export const getCategory = (id: CategoryId) => categories.find((c) => c.id === id)!;
export const getProduct = (id: ProductId) => products.find((p) => p.id === id)!;
export const productsInCategory = (id: CategoryId) => products.filter((p) => p.category === id);
export const hasFixedPrice = (p: Product) => p.price.kind !== "quote";
