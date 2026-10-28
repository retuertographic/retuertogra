import { ASSET_BASE } from "@/config/site";

// Home page media. Order matches the copy arrays in each dictionary.
export const heroSlides = [
  {
    image: `${ASSET_BASE}/hero-1.webp`,
    overlay: "bg-white",
    title: "text-rg-ink",
    subtitle: "text-rg-text",
  },
  {
    image: `${ASSET_BASE}/hero-2.jpg`,
    overlay: "bg-rg-green",
    title: "text-white",
    subtitle: "text-white",
  },
];

export const expertiseMedia = [
  { image: `${ASSET_BASE}/expertise-creative.webp`, imageFirst: false },
  { image: `${ASSET_BASE}/expertise-marketing.webp`, imageFirst: false },
  { image: `${ASSET_BASE}/expertise-technical.webp`, imageFirst: true },
];

export const projectImages = [
  `${ASSET_BASE}/project-geolocated.jpg`,
  `${ASSET_BASE}/project-branding.webp`,
  `${ASSET_BASE}/project-marketing.webp`,
];

// Shop products shown in the home "Growth Catalog" carousel (names, prices and
// images come from the shop catalog, so they always match the product pages).
export const homeCatalogProducts = ["web-maintenance", "data-protection", "voice-agent", "whatsapp-chatbot"] as const;
