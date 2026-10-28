import { SOURCE_ORIGIN } from "@/config/site";
import { shopHref, siteHref } from "../routing";
import type { Dictionary } from "./types";

// Copy taken from https://retuertographicdesign.com/es/ (the source's Spanish version).
export const es: Dictionary = {
  meta: {
    title:
      "Retuerto Graphic Design – Conectando experiencias a través del diseño gráfico, IA y automatizaciones, desarrollo web, apps móviles, producción de vídeo y campañas publicitarias",
    description:
      "Transforma tus ideas en proyectos impactantes y estrategias que generen resultados",
  },
  anchors: { about: "sobre", services: "servicios", projects: "proyectos", contact: "contacto" },
  nav: [
    { label: "Inicio", href: siteHref("es") },
    { label: "Sobre", href: "#sobre" },
    { label: "Servicios", href: "#servicios" },
    { label: "Tienda", href: shopHref("es"), highlight: true },
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
    href: shopHref("es", ["contacto"]),
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
    shop: { label: "Tienda", href: shopHref("es") },
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
