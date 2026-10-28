import { BASE_PATH, SOURCE_ORIGIN } from "./data";

export const locales = ["en", "es", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Path of the cloned homepage for a locale (English lives at the root). */
export function localeHref(locale: Locale): string {
  return locale === defaultLocale ? `${BASE_PATH}/` : `${BASE_PATH}/${locale}/`;
}

/** Language switcher metadata, mirroring the WPML labels on the source site. */
export const languages: Record<
  Locale,
  { nativeName: string; flag: string; names: Record<Locale, string> }
> = {
  en: {
    nativeName: "English",
    flag: "flag-en.svg",
    names: { en: "English", es: "Inglés", de: "Englisch" },
  },
  es: {
    nativeName: "Español",
    flag: "flag-es.svg",
    names: { en: "Spanish", es: "Español", de: "Spanisch" },
  },
  de: {
    nativeName: "Deutsch",
    flag: "flag-de.svg",
    names: { en: "German", es: "Alemán", de: "Deutsch" },
  },
};

type NavLink = { label: string; href: string; highlight?: boolean };
type Tab = { label: string; title: string; body: string };
type Project = { title: string; body: string; tags: string[]; link: string };
type Product = { title: string; price: string };

export type Dictionary = {
  meta: { title: string; description: string };
  anchors: { about: string; services: string; contact: string };
  nav: NavLink[];
  header: { switchTo: string; cart: string; toggleMenu: string };
  hero: { title: string; subtitle: string; connect: string; email: string };
  carousel: { label: string; previous: string; next: string; goTo: string };
  expertise: { eyebrow: string; title: string; tabs: Tab[] };
  whatWeDo: {
    title: string;
    body: string;
    values: { title: string; body: string }[];
  };
  connectMinds: { title: string; body: string; cta: string; href: string };
  featured: {
    eyebrow: string;
    title: string;
    body: string;
    projects: Project[];
    seeAll: string;
  };
  catalog: {
    title: string;
    subtitle: string;
    products: Product[];
    details: string;
  };
  newsletter: {
    title: string;
    body: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    submit: string;
  };
  banner: {
    eyebrow: string;
    title: string;
    body: string;
    appointment: string;
    work: string;
  };
  contact: { title: string; body: string };
  footer: {
    about: string;
    quickLinks: string;
    home: string;
    shop: { label: string; href: string };
    payments: string;
    information: string;
    infoLinks: { label: string; href: string }[];
    connect: string;
    esPhone: string;
    dePhone: string;
    email: string;
    hours: string;
    copyright: string;
  };
};

const en: Dictionary = {
  meta: {
    title:
      "Retuerto Graphic Design – Connecting experiences through graphic design, AI & automations, web development, mobile apps, video production, and ad campaigns",
    description:
      "Transform your ideas into stunning visuals and strategies that drive results.",
  },
  anchors: { about: "about", services: "services", contact: "contact" },
  nav: [
    { label: "Home", href: localeHref("en") },
    { label: "Shop", href: `${SOURCE_ORIGIN}/shop/`, highlight: true },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
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
    href: `${SOURCE_ORIGIN}/contact/`,
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
    products: [
      { title: "Web maintenance", price: "99€" },
      { title: "Data protection platform", price: "180€" },
      { title: "AI voice agent", price: "45€" },
      { title: "Whatsapp chatbot", price: "80€" },
    ],
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
    shop: { label: "Shop", href: `${SOURCE_ORIGIN}/shop/` },
    payments: "Payments",
    information: "Information",
    infoLinks: [
      { label: "Privacy Policy", href: `${SOURCE_ORIGIN}/privacy-policy/` },
      { label: "Terms of Service", href: `${SOURCE_ORIGIN}/t-c/` },
      { label: "Complianz", href: `${SOURCE_ORIGIN}/compliance/` },
      { label: "FAQ", href: `${SOURCE_ORIGIN}/faq/` },
      { label: "Legal Notice", href: `${SOURCE_ORIGIN}/legal-notice/` },
      { label: "Cookie Policy", href: `${SOURCE_ORIGIN}/cookie-policy/` },
    ],
    connect: "Connect",
    esPhone: "ES Phone: 0034 922971723 (whatsapp)",
    dePhone: "DE Phone: 0049 30 31878629",
    email: "Email: info@retuertographicdesign.com",
    hours: "Office hours: 9:00 -15:00 M-F",
    copyright: "© 2026 Copyright all right reserved.",
  },
};

// Copy taken from https://retuertographicdesign.com/es/ (the source's Spanish version).
const es: Dictionary = {
  meta: {
    title:
      "Retuerto Graphic Design – Conectando experiencias a través del diseño gráfico, IA y automatizaciones, desarrollo web, apps móviles, producción de vídeo y campañas publicitarias",
    description:
      "Transforma tus ideas en proyectos impactantes y estrategias que generen resultados",
  },
  anchors: { about: "sobre", services: "servicios", contact: "contacto" },
  nav: [
    { label: "Inicio", href: localeHref("es") },
    { label: "Sobre", href: "#sobre" },
    { label: "Servicios", href: "#servicios" },
    { label: "Tienda", href: `${SOURCE_ORIGIN}/es/tienda/`, highlight: true },
    { label: "Contacto", href: "#contacto" },
  ],
  header: {
    switchTo: "Cambiar a",
    cart: "Carrito",
    toggleMenu: "Menú conmutador hamburguesa",
  },
  hero: {
    title: "Mejora tu experiencia digital",
    subtitle:
      "Transforma tus ideas en proyectos impactantes y estrategias que generen resultados",
    connect: "Conectar",
    email: "Correo electrónico",
  },
  carousel: {
    label: "Muestra de servicios",
    previous: "Diapositiva anterior",
    next: "Diapositiva siguiente",
    goTo: "Ir a la diapositiva",
  },
  expertise: {
    eyebrow: "Por qué lo hacemos",
    title: "Especialistas",
    tabs: [
      {
        label: "Soluciones creativas",
        title: "Transformando ideas en obras maestras",
        body: "Nos especializamos en desarrollo publicitario, diseño web y soluciones de aplicaciones que capturan la esencia de tu marca. Nuestro objetivo es crear experiencias digitales de alta calidad que destaquen, ya sea a través de campañas promocionales impactantes, sitios web atractivos o aplicaciones móviles intuitivas.",
      },
      {
        label: "Estrategias de Marketing",
        title: "Impulsando el crecimiento a través de lo digital",
        body: "Nuestras estrategias de marketing digital están diseñadas para conectar con tu público objetivo en todas las plataformas. Gestionamos campañas publicitarias que maximizan tu alcance en Google, Meta y LinkedIn, a la vez que optimizamos tu presencia en el comercio electrónico para lograr mejores conversiones.",
      },
      {
        label: "Innovaciones técnicas",
        title: "Innovando para el futuro con la tecnología",
        body: "Ofrecemos soluciones basadas en IA que automatizan flujos de trabajo para impulsar su negocio. Desde chatbots inteligentes hasta aplicaciones web personalizadas o agentes de voz, garantizamos integraciones perfectas que mejoran la experiencia del usuario y aumentan la eficiencia.",
      },
    ],
  },
  whatWeDo: {
    title: "Lo que hacemos",
    body: "Creemos en conectar experiencias, ya sea para informar, promocionar, apoyar o involucrar. Mediante la sinergia de la tecnología informática y el diseño gráfico, convertimos tu visión en realidad, creando soluciones que conectan e inspiran.",
    values: [
      {
        title: "Nuestra misión",
        body: "Nuestro objetivo es unir la creatividad y la tecnología, garantizando que cada proyecto que emprendemos conecte directamente con el corazón y la mente de su público.",
      },
      {
        title: "Nuestros valores",
        body: "Priorizamos la conexión, nos centramos en la comunicación y el diseño centrados en el ser humano y nos esforzamos por la precisión, siempre mirando hacia el futuro.",
      },
    ],
  },
  connectMinds: {
    title: "Conecta mentes con nuestras soluciones innovadoras.",
    body: "Desde aplicaciones móviles intuitivas y desarrollo web a medida hasta campañas publicitarias automatizadas, somos el puente entre tu marca y tus clientes. Hagamos realidad tu próxima gran visión.",
    cta: "Conectar",
    href: `${SOURCE_ORIGIN}/es/contact/`,
  },
  featured: {
    eyebrow: "Trabajo destacado",
    title: "Descubre nuestros proyectos innovadores",
    body: "Llevando la creatividad al siguiente nivel, nuestro portafolio muestra soluciones únicas que combinan diseño y tecnología.",
    projects: [
      {
        title: "Aplicación web geolocalizada",
        body: "Una aplicación web fluida diseñada para mejorar la experiencia y la interacción del usuario.",
        tags: ["Desarrollo web", "UX/UI Design", "Diseño adaptable"],
        link: "Ver detalles",
      },
      {
        title: "Identidad de marca",
        body: "Crear una identidad visual distintiva que conecte con el público objetivo.",
        tags: ["Estrategia de marca", "Diseño gráfico", "Recursos visuales"],
        link: "Más información",
      },
      {
        title: "Campaña de marketing",
        body: "Un enfoque estratégico para aumentar el reconocimiento de marca e impulsar las conversiones.",
        tags: ["Estrategia de campaña", "Anuncios digitales", "Email Marketing"],
        link: "Ver proyecto",
      },
    ],
    seeAll: "Ver todos los proyectos",
  },
  catalog: {
    title: "Catálogo de Retuerto",
    subtitle: "Herramientas para medir, avanzar y monetizar.",
    products: [
      { title: "Mantenimiento web", price: "99€" },
      { title: "Plataforma de protección de datos", price: "180€" },
      { title: "Agente de voz de IA", price: "45€" },
      { title: "Chatbot de WhatsApp", price: "80€" },
    ],
    details: "Detalles",
  },
  newsletter: {
    title: "¡Mantente informado con nuestras novedades!",
    body: "Únete a nuestro boletín para recibir consejos, actualizaciones y contenido exclusivo hecho especialmente para ti. Mantente conectado y amplía tus conocimientos con las últimas tendencias del sector y soluciones creativas que llegarán directamente a tu correo.",
    name: "Tu nombre",
    namePlaceholder: "Introduce tu nombre",
    email: "Tu correo electrónico",
    emailPlaceholder: "Introduce tu correo electrónico*",
    submit: "Conectar",
  },
  banner: {
    eyebrow: "Cerramos la brecha entre el diseño creativo y la ejecución técnica.",
    title: "Conectando experiencias",
    body: "Tus ideas merecen brillar. Nos especializamos en transformar conceptos en diseños cautivadores que atraen e inspiran. Naveguemos juntos hacia el futuro de la creatividad.",
    appointment: "Cita",
    work: "Ver Nuestro Trabajo",
  },
  contact: {
    title: "Conectemos",
    body: "Estamos aquí para ayudarte con tus necesidades de marketing y creatividad. Si tienes preguntas sobre nuestros servicios o quieres hablar sobre un nuevo proyecto, no dudes en contactarnos. ¡Nuestro equipo está listo para ayudarte! También puedes encontrarnos en las redes sociales. ¡Conectemos!",
  },
  footer: {
    about:
      "Nuestro objetivo es crear contenido valioso y útil que lo puedas aplicar en tu empresa y objetivos profesionales",
    quickLinks: "Enlaces rápidos",
    home: "Inicio",
    shop: { label: "Tienda", href: `${SOURCE_ORIGIN}/es/tienda/` },
    payments: "Pagos",
    information: "Información",
    infoLinks: [
      { label: "Política de Privacidad", href: `${SOURCE_ORIGIN}/es/privacy-policy/` },
      { label: "Condiciones de servicio", href: `${SOURCE_ORIGIN}/es/t-c/` },
      { label: "Cumplimientos", href: `${SOURCE_ORIGIN}/es/cumplimiento/` },
      { label: "FAQ", href: `${SOURCE_ORIGIN}/faq/` },
      { label: "Aviso legal", href: `${SOURCE_ORIGIN}/es/legal-notice/` },
      { label: "Política de cookies", href: `${SOURCE_ORIGIN}/es/cookie-policy/` },
    ],
    connect: "Conectar",
    esPhone: "ES-Teléfono: 0034 922971723 (whatsapp)",
    dePhone: "DE-Teléfono: 0049 30 31878629",
    email: "Email: info@retuertographicdesign.com",
    hours: "Horario de oficina: 9:00 - 15:00 L - V",
    copyright: "© 2026 Todos los derechos reservados.",
  },
};

// The source site has no German version; translated from the English copy.
// Legal/shop links fall back to the English source pages.
const de: Dictionary = {
  meta: {
    title:
      "Retuerto Graphic Design – Erlebnisse verbinden durch Grafikdesign, KI & Automatisierung, Webentwicklung, mobile Apps, Videoproduktion und Werbekampagnen",
    description:
      "Verwandeln Sie Ihre Ideen in beeindruckende Visuals und Strategien, die Ergebnisse liefern.",
  },
  anchors: { about: "ueber-uns", services: "leistungen", contact: "kontakt" },
  nav: [
    { label: "Startseite", href: localeHref("de") },
    { label: "Shop", href: `${SOURCE_ORIGIN}/shop/`, highlight: true },
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
    href: `${SOURCE_ORIGIN}/contact/`,
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
    products: [
      { title: "Website-Wartung", price: "99€" },
      { title: "Datenschutz-Plattform", price: "180€" },
      { title: "KI-Sprachassistent", price: "45€" },
      { title: "WhatsApp-Chatbot", price: "80€" },
    ],
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
    shop: { label: "Shop", href: `${SOURCE_ORIGIN}/shop/` },
    payments: "Zahlungsarten",
    information: "Informationen",
    infoLinks: [
      { label: "Datenschutzerklärung", href: `${SOURCE_ORIGIN}/privacy-policy/` },
      { label: "AGB", href: `${SOURCE_ORIGIN}/t-c/` },
      { label: "Compliance", href: `${SOURCE_ORIGIN}/compliance/` },
      { label: "FAQ", href: `${SOURCE_ORIGIN}/faq/` },
      { label: "Impressum", href: `${SOURCE_ORIGIN}/legal-notice/` },
      { label: "Cookie-Richtlinie", href: `${SOURCE_ORIGIN}/cookie-policy/` },
    ],
    connect: "Kontakt",
    esPhone: "Telefon ES: 0034 922971723 (WhatsApp)",
    dePhone: "Telefon DE: 0049 30 31878629",
    email: "E-Mail: info@retuertographicdesign.com",
    hours: "Bürozeiten: 9:00–15:00 Uhr, Mo–Fr",
    copyright: "© 2026 Alle Rechte vorbehalten.",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, es, de };
