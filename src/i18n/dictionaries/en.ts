import { shopHref, siteHref } from "../routing";
import { legalFooterLinks } from "@/legal/registry";
import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title:
      "Retuerto Graphic Design – Connecting experiences through graphic design, AI & automations, web development, mobile apps, video production, and ad campaigns",
    description:
      "Transform your ideas into stunning visuals and strategies that drive results.",
  },
  anchors: { about: "about", services: "services", projects: "projects", contact: "contact" },
  nav: [
    { label: "Home", href: siteHref("en") },
    { label: "Shop", href: shopHref("en"), highlight: true },
    { label: "About", href: siteHref("en", "#about") },
    { label: "Services", href: siteHref("en", "#services") },
    { label: "Contact", href: siteHref("en", "#contact") },
  ],
  header: { switchTo: "Switch to", cart: "Cart", toggleMenu: "Toggle menu" },
  hero: {
    title: "Elevate Your Digital Experience",
    subtitle:
      "Transform your ideas into stunning visuals and strategies that drive results.",
    connect: "Connect",
    email: "Email",
  },
  carousel: {
    label: "Service Showcase",
    previous: "Previous slide",
    next: "Next slide",
    goTo: "Go to slide",
  },
  expertise: {
    eyebrow: "Why we do it",
    title: "Our Expertise",
    tabs: [
      {
        label: "Creative Solutions",
        title: "Transforming Ideas into Masterpieces",
        body: "We specialize in advertising development, web design, and app solutions that capture your brand’s essence. Our goal is to create high-quality digital experiences that stand out, whether through impactful promotional campaigns, engaging websites, or intuitive mobile applications.",
      },
      {
        label: "Marketing Strategies",
        title: "Driving Growth through Digital",
        body: "Our digital marketing strategies are designed to connect with your audience across platforms. We manage ad campaigns that maximize your reach on Google, Meta, and LinkedIn, all while optimizing your e-commerce presence for better conversions.",
      },
      {
        label: "Technical Innovations",
        title: "Pioneering the Future with Technology",
        body: "We offer AI-driven solutions, automating workflows that elevate your business. From smart chatbots to custom web applications or voice agents, we ensure seamless integrations that enhance user experiences and drive efficiency.",
      },
    ],
  },
  whatWeDo: {
    title: "What we do",
    body: "We believe in connecting experiences, whether you’re seeking to inform, promote, support, or engage. Through the synergy of IT and graphic design, we turn your vision into reality, crafting solutions that resonate and inspire.",
    values: [
      {
        title: "Our Mission",
        body: "To bridge creativity and technology, ensuring that every project we undertake speaks directly to your audience's heart and mind.",
      },
      {
        title: "Our Values",
        body: "We prioritize connection, focus on human-centered communication and design, and strive for precision—always looking forward to what’s next.",
      },
    ],
  },
  connectMinds: {
    title: "Connect Minds with Our Innovative Solutions",
    body: "From intuitive mobile apps and custom web development to automated ad campaigns, we are the bridge between your brand and your customers. Let’s bring your next big vision to life.",
    cta: "Connect",
    href: shopHref("en", ["contact"]),
  },
  featured: {
    eyebrow: "Featured Work",
    title: "Explore Our Innovative Projects",
    body: "Taking creativity to the next level, our portfolio showcases unique solutions that blend design and technology.",
    projects: [
      {
        title: "Geolocated Web App",
        body: "A seamless web application designed to enhance user experience and engagement.",
        tags: ["Web Development", "UX/UI Design", "Responsive Design"],
        link: "See Details",
      },
      {
        title: "Branding Identity",
        body: "Creating a distinctive visual identity that resonates with the target audience.",
        tags: ["Brand Strategy", "Graphic Design", "Visual Assets"],
        link: "More Info",
      },
      {
        title: "Marketing Campaign",
        body: "A strategic approach to elevate brand awareness and drive conversions.",
        tags: ["Campaign Strategy", "Digital Ads", "Email Marketing"],
        link: "Explore Project",
      },
    ],
    seeAll: "See All Projects",
  },
  catalog: {
    title: "The Retuerto's Growth Catalog",
    subtitle: "Tools to Measure, Move, and Market",
    details: "Details",
  },
  newsletter: {
    title: "Stay in the loop with our insights!",
    body: "Join our newsletter for tips, updates, and exclusive insights tailored just for you. Stay connected and grow your knowledge with industry trends and creative solutions delivered right to your inbox.",
    name: "Your Name",
    namePlaceholder: "Enter your name",
    email: "Your Email",
    emailPlaceholder: "Enter your email*",
    submit: "Connect",
  },
  banner: {
    eyebrow: "We bridge the gap between creative design and technical execution",
    title: "Connecting experiences",
    body: "Your ideas deserve to shine. We specialize in transforming concepts into captivating designs that engage and inspire. Lets navigate the future of creativity together.",
    appointment: "Appointment",
    work: "See Our Work",
  },
  contact: {
    title: "Let's Connect",
    body: "We’re here to help you with your marketing and creative needs. Whether you have questions about our services or want to discuss a new project, feel free to reach out. Our team is eager to assist you! You can also find us on social media. Let’s connect!",
  },
  footer: {
    about:
      "Our goal is to create insightful and content that you can put to work in personal and professional life.",
    quickLinks: "Quick link",
    home: "Home",
    shop: { label: "Shop", href: shopHref("en") },
    payments: "Payments",
    information: "Information",
    infoLinks: legalFooterLinks("en"),
    connect: "Connect",
    esPhone: "ES Phone: 0034 922971723 (whatsapp)",
    dePhone: "DE Phone: 0049 30 31878629",
    email: "Email: info@retuertographicdesign.com",
    hours: "Office hours: 9:00 -15:00 M-F",
    copyright: "© 2026 Copyright all right reserved.",
  },
};
