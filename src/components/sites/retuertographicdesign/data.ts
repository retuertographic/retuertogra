export const SOURCE_ORIGIN = "https://retuertographicdesign.com";
export const ASSET_BASE = "/sites/retuertographicdesign/images";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: `${SOURCE_ORIGIN}/shop/` },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

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

export const expertiseTabs = [
  {
    label: "Creative Solutions",
    title: "Transforming Ideas into Masterpieces",
    body: "We specialize in advertising development, web design, and app solutions that capture your brand’s essence. Our goal is to create high-quality digital experiences that stand out, whether through impactful promotional campaigns, engaging websites, or intuitive mobile applications.",
    image: `${ASSET_BASE}/expertise-creative.webp`,
    imageFirst: false,
  },
  {
    label: "Marketing Strategies",
    title: "Driving Growth through Digital",
    body: "Our digital marketing strategies are designed to connect with your audience across platforms. We manage ad campaigns that maximize your reach on Google, Meta, and LinkedIn, all while optimizing your e-commerce presence for better conversions.",
    image: `${ASSET_BASE}/expertise-marketing.webp`,
    imageFirst: false,
  },
  {
    label: "Technical Innovations",
    title: "Pioneering the Future with Technology",
    body: "We offer AI-driven solutions, automating workflows that elevate your business. From smart chatbots to custom web applications or voice agents, we ensure seamless integrations that enhance user experiences and drive efficiency.",
    image: `${ASSET_BASE}/expertise-technical.webp`,
    imageFirst: true,
  },
];

export const projects = [
  {
    title: "Geolocated Web App",
    body: "A seamless web application designed to enhance user experience and engagement.",
    tags: ["Web Development", "UX/UI Design", "Responsive Design"],
    link: "See Details",
    image: `${ASSET_BASE}/project-geolocated.jpg`,
  },
  {
    title: "Branding Identity",
    body: "Creating a distinctive visual identity that resonates with the target audience.",
    tags: ["Brand Strategy", "Graphic Design", "Visual Assets"],
    link: "More Info",
    image: `${ASSET_BASE}/project-branding.webp`,
  },
  {
    title: "Marketing Campaign",
    body: "A strategic approach to elevate brand awareness and drive conversions.",
    tags: ["Campaign Strategy", "Digital Ads", "Email Marketing"],
    link: "Explore Project",
    image: `${ASSET_BASE}/project-marketing.webp`,
  },
];

export const catalog = [
  { title: "Web maintenance", price: "99€", image: `${ASSET_BASE}/catalog-web-maintenance.webp` },
  { title: "Data protection platform", price: "180€", image: `${ASSET_BASE}/catalog-data-protection.webp` },
  { title: "AI voice agent", price: "45€", image: `${ASSET_BASE}/catalog-ai-voice-agent.webp` },
  { title: "Whatsapp chatbot", price: "80€", image: `${ASSET_BASE}/catalog-whatsapp-chatbot.webp` },
];

export const footerInfoLinks = [
  { label: "Privacy Policy", href: `${SOURCE_ORIGIN}/privacy-policy/` },
  { label: "Terms of Service", href: `${SOURCE_ORIGIN}/t-c/` },
  { label: "Complianz", href: `${SOURCE_ORIGIN}/compliance/` },
  { label: "FAQ", href: `${SOURCE_ORIGIN}/faq/` },
  { label: "Legal Notice", href: `${SOURCE_ORIGIN}/legal-notice/` },
  { label: "Cookie Policy", href: `${SOURCE_ORIGIN}/cookie-policy/` },
];

export const mapEmbedUrl =
  "https://maps.google.com/maps?q=C.%20de%20Calder%C3%B3n%20de%20la%20Barca%2C%202%2C%20Oficina%203%2C%2038005%20Santa%20Cruz%20de%20Tenerife&t=m&z=14&output=embed&iwloc=near";
