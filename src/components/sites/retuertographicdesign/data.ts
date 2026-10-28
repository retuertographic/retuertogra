// Locale-independent data: assets, outbound URLs and layout flags.
// All copy lives in i18n.ts.
export const SOURCE_ORIGIN = "https://retuertographicdesign.com";
// basePath is prepended manually: next/image and inline background URLs do not add it.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const ASSET_BASE = `${BASE_PATH}/sites/retuertographicdesign/images`;

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

// Same order as the expertise tabs in each dictionary.
export const expertiseMedia = [
  { image: `${ASSET_BASE}/expertise-creative.webp`, imageFirst: false },
  { image: `${ASSET_BASE}/expertise-marketing.webp`, imageFirst: false },
  { image: `${ASSET_BASE}/expertise-technical.webp`, imageFirst: true },
];

// Same order as the featured projects in each dictionary.
export const projectImages = [
  `${ASSET_BASE}/project-geolocated.jpg`,
  `${ASSET_BASE}/project-branding.webp`,
  `${ASSET_BASE}/project-marketing.webp`,
];

// Same order as the catalog products in each dictionary.
export const catalogImages = [
  `${ASSET_BASE}/catalog-web-maintenance.webp`,
  `${ASSET_BASE}/catalog-data-protection.webp`,
  `${ASSET_BASE}/catalog-ai-voice-agent.webp`,
  `${ASSET_BASE}/catalog-whatsapp-chatbot.webp`,
];

export const shopDetailsUrl = `${SOURCE_ORIGIN}/shopx/`;

export const mapAddress =
  "C. de Calderón de la Barca, 2, Oficina 3, 38005 Santa Cruz de Tenerife";

export const mapEmbedUrl =
  "https://maps.google.com/maps?q=C.%20de%20Calder%C3%B3n%20de%20la%20Barca%2C%202%2C%20Oficina%203%2C%2038005%20Santa%20Cruz%20de%20Tenerife&t=m&z=14&output=embed&iwloc=near";
