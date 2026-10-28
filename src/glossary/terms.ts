import type { Locale } from "@/i18n/config";

// Glossary of terms ("Diccionario"). One entry per concept, written in the
// three languages. Articles link to an entry with [[visible text|term-id]];
// adding a term here makes it available everywhere.

export type GlossaryText = { term: string; def: string };
export type GlossaryEntry = { id: string; text: Record<Locale, GlossaryText> };

export const glossary: GlossaryEntry[] = [
  {
    id: "agente-voz",
    text: {
      es: { term: "Agente de voz con IA", def: "Asistente telefónico que entiende lo que dice quien llama y responde con voz natural. Puede atender consultas, tomar reservas o pasar la llamada a una persona." },
      en: { term: "AI voice agent", def: "A phone assistant that understands what the caller says and answers in a natural voice. It can handle enquiries, take bookings or transfer the call to a person." },
      de: { term: "KI-Sprachagent", def: "Telefonassistent, der versteht, was der Anrufer sagt, und mit natürlicher Stimme antwortet. Er beantwortet Anfragen, nimmt Reservierungen an oder leitet an eine Person weiter." },
    },
  },
  {
    id: "api",
    text: {
      es: { term: "API", def: "Interfaz que permite que dos programas se comuniquen e intercambien datos de forma automática, por ejemplo una web y un CRM." },
      en: { term: "API", def: "An interface that lets two programs talk to each other and exchange data automatically, for example a website and a CRM." },
      de: { term: "API", def: "Schnittstelle, über die zwei Programme automatisch miteinander kommunizieren und Daten austauschen, zum Beispiel eine Website und ein CRM." },
    },
  },
  {
    id: "automatizacion",
    text: {
      es: { term: "Automatización", def: "Uso de software para que una tarea repetitiva se haga sola siguiendo unas reglas definidas, sin intervención manual." },
      en: { term: "Automation", def: "Using software so that a repetitive task runs on its own, following defined rules, without manual work." },
      de: { term: "Automatisierung", def: "Einsatz von Software, damit eine wiederkehrende Aufgabe nach festen Regeln von selbst erledigt wird, ohne manuelle Arbeit." },
    },
  },
  {
    id: "backlink",
    text: {
      es: { term: "Backlink", def: "Enlace desde otra web hacia la tuya. Los enlaces de sitios relevantes y fiables ayudan al posicionamiento en buscadores." },
      en: { term: "Backlink", def: "A link from another website to yours. Links from relevant, trustworthy sites help search engine rankings." },
      de: { term: "Backlink", def: "Ein Link von einer anderen Website auf Ihre. Links von relevanten, vertrauenswürdigen Seiten verbessern das Suchmaschinenranking." },
    },
  },
  {
    id: "branding",
    text: {
      es: { term: "Branding", def: "Trabajo de construir cómo se percibe una marca: nombre, identidad visual, tono de comunicación y experiencia que ofrece." },
      en: { term: "Branding", def: "The work of shaping how a brand is perceived: its name, visual identity, tone of voice and the experience it offers." },
      de: { term: "Branding", def: "Die Arbeit daran, wie eine Marke wahrgenommen wird: Name, visuelle Identität, Tonalität und das Erlebnis, das sie bietet." },
    },
  },
  {
    id: "carta-digital",
    text: {
      es: { term: "Carta digital", def: "Menú de un restaurante que se consulta desde el móvil, normalmente al escanear un código QR en la mesa." },
      en: { term: "Digital menu", def: "A restaurant menu viewed on a mobile phone, usually by scanning a QR code on the table." },
      de: { term: "Digitale Speisekarte", def: "Speisekarte eines Restaurants, die auf dem Handy aufgerufen wird, meist über einen QR-Code am Tisch." },
    },
  },
  {
    id: "chatbot",
    text: {
      es: { term: "Chatbot", def: "Programa que conversa por escrito con los usuarios en una web o en una app de mensajería y responde de forma automática." },
      en: { term: "Chatbot", def: "A program that chats in writing with users on a website or a messaging app and answers automatically." },
      de: { term: "Chatbot", def: "Programm, das auf einer Website oder in einer Messaging-App schriftlich mit Nutzern kommuniziert und automatisch antwortet." },
    },
  },
  {
    id: "cms",
    text: {
      es: { term: "CMS", def: "Gestor de contenidos: herramienta que permite editar textos, imágenes y páginas de una web sin programar, como WordPress." },
      en: { term: "CMS", def: "Content management system: a tool for editing a website's text, images and pages without coding, such as WordPress." },
      de: { term: "CMS", def: "Content-Management-System: Werkzeug, mit dem sich Texte, Bilder und Seiten einer Website ohne Programmierung bearbeiten lassen, etwa WordPress." },
    },
  },
  {
    id: "codigo-qr",
    text: {
      es: { term: "Código QR", def: "Código cuadrado que el móvil lee con la cámara para abrir un enlace o mostrar información. Si es dinámico, su destino se puede cambiar sin reimprimirlo." },
      en: { term: "QR code", def: "A square code a phone reads with its camera to open a link or show information. A dynamic QR code can change its destination without reprinting." },
      de: { term: "QR-Code", def: "Quadratischer Code, den das Handy mit der Kamera liest, um einen Link zu öffnen oder Informationen anzuzeigen. Bei dynamischen Codes lässt sich das Ziel ohne Neudruck ändern." },
    },
  },
  {
    id: "copia-seguridad",
    text: {
      es: { term: "Copia de seguridad", def: "Duplicado de los archivos y la base de datos de una web o un sistema que permite restaurarlos si algo falla." },
      en: { term: "Backup", def: "A copy of a website's or system's files and database that lets you restore them if something goes wrong." },
      de: { term: "Datensicherung", def: "Kopie der Dateien und der Datenbank einer Website oder eines Systems, mit der sich alles wiederherstellen lässt, wenn etwas schiefgeht." },
    },
  },
  {
    id: "core-web-vitals",
    text: {
      es: { term: "Core Web Vitals", def: "Métricas de Google que miden la velocidad de carga, la rapidez de respuesta al interactuar y la estabilidad visual de una página." },
      en: { term: "Core Web Vitals", def: "Google metrics that measure a page's loading speed, how quickly it responds to interaction and its visual stability." },
      de: { term: "Core Web Vitals", def: "Google-Kennzahlen für Ladegeschwindigkeit, Reaktionszeit bei Interaktionen und visuelle Stabilität einer Seite." },
    },
  },
  {
    id: "crm",
    text: {
      es: { term: "CRM", def: "Software para gestionar la relación con los clientes: contactos, conversaciones, oportunidades de venta y seguimientos." },
      en: { term: "CRM", def: "Customer relationship management software: contacts, conversations, sales opportunities and follow-ups in one place." },
      de: { term: "CRM", def: "Software für das Kundenbeziehungsmanagement: Kontakte, Gespräche, Verkaufschancen und Nachverfolgung an einem Ort." },
    },
  },
  {
    id: "cta",
    text: {
      es: { term: "Llamada a la acción (CTA)", def: "Botón o mensaje que invita a dar un paso concreto: comprar, pedir presupuesto, llamar o reservar." },
      en: { term: "Call to action (CTA)", def: "A button or message that invites a specific next step: buy, request a quote, call or book." },
      de: { term: "Call to Action (CTA)", def: "Schaltfläche oder Hinweis, der zu einem konkreten Schritt auffordert: kaufen, Angebot anfordern, anrufen oder buchen." },
    },
  },
  {
    id: "dominio",
    text: {
      es: { term: "Dominio", def: "Dirección de una web en internet, como retuertographicdesign.com. Se registra a nombre del titular y se renueva periódicamente." },
      en: { term: "Domain", def: "A website's address on the internet, such as retuertographicdesign.com. It is registered to its owner and renewed periodically." },
      de: { term: "Domain", def: "Die Adresse einer Website im Internet, etwa retuertographicdesign.com. Sie wird auf den Inhaber registriert und regelmäßig verlängert." },
    },
  },
  {
    id: "embudo",
    text: {
      es: { term: "Embudo de conversión", def: "Etapas que recorre un cliente potencial desde que conoce una marca hasta que compra o contrata." },
      en: { term: "Conversion funnel", def: "The stages a potential customer goes through from discovering a brand to buying or signing up." },
      de: { term: "Conversion-Funnel", def: "Die Phasen, die ein potenzieller Kunde vom ersten Kontakt mit einer Marke bis zum Kauf durchläuft." },
    },
  },
  {
    id: "email-marketing",
    text: {
      es: { term: "Email marketing", def: "Envío de campañas y comunicaciones por correo electrónico a personas que han dado su consentimiento, con el objetivo de informar y vender." },
      en: { term: "Email marketing", def: "Sending campaigns and messages by email to people who have given their consent, to inform them and drive sales." },
      de: { term: "E-Mail-Marketing", def: "Versand von Kampagnen und Mitteilungen per E-Mail an Personen, die eingewilligt haben, um zu informieren und zu verkaufen." },
    },
  },
  {
    id: "geo",
    text: {
      es: { term: "GEO", def: "Generative Engine Optimization: optimización de contenidos para que los asistentes de IA los entiendan y los citen en sus respuestas." },
      en: { term: "GEO", def: "Generative Engine Optimization: optimising content so that AI assistants understand it and cite it in their answers." },
      de: { term: "GEO", def: "Generative Engine Optimization: Optimierung von Inhalten, damit KI-Assistenten sie verstehen und in ihren Antworten zitieren." },
    },
  },
  {
    id: "geolocalizacion",
    text: {
      es: { term: "Geolocalización", def: "Identificación de la ubicación de un dispositivo para mostrar contenidos o servicios según dónde está el usuario." },
      en: { term: "Geolocation", def: "Identifying a device's location in order to show content or services based on where the user is." },
      de: { term: "Geolokalisierung", def: "Bestimmung des Standorts eines Geräts, um Inhalte oder Dienste abhängig vom Aufenthaltsort des Nutzers anzuzeigen." },
    },
  },
  {
    id: "hosting",
    text: {
      es: { term: "Hosting", def: "Servicio que guarda los archivos de una web en servidores conectados a internet para que esté disponible a cualquier hora." },
      en: { term: "Hosting", def: "A service that stores a website's files on servers connected to the internet so it is available at any time." },
      de: { term: "Hosting", def: "Dienst, der die Dateien einer Website auf mit dem Internet verbundenen Servern bereitstellt, damit sie jederzeit erreichbar ist." },
    },
  },
  {
    id: "ia-generativa",
    text: {
      es: { term: "IA generativa", def: "Inteligencia artificial capaz de crear texto, imágenes, audio o código a partir de unas instrucciones." },
      en: { term: "Generative AI", def: "Artificial intelligence that can create text, images, audio or code from instructions." },
      de: { term: "Generative KI", def: "Künstliche Intelligenz, die auf Anweisung Texte, Bilder, Audio oder Code erzeugen kann." },
    },
  },
  {
    id: "identidad-visual",
    text: {
      es: { term: "Identidad visual", def: "Conjunto de elementos gráficos que representan a una marca: logotipo, colores, tipografías y estilo de imágenes." },
      en: { term: "Visual identity", def: "The set of graphic elements that represent a brand: logo, colours, typefaces and image style." },
      de: { term: "Visuelle Identität", def: "Die grafischen Elemente, die eine Marke darstellen: Logo, Farben, Schriften und Bildstil." },
    },
  },
  {
    id: "integracion",
    text: {
      es: { term: "Integración", def: "Conexión entre dos sistemas para que compartan datos automáticamente y no haya que copiarlos a mano." },
      en: { term: "Integration", def: "A connection between two systems so they share data automatically and nobody has to copy it by hand." },
      de: { term: "Integration", def: "Verbindung zweier Systeme, damit sie Daten automatisch austauschen und nichts von Hand übertragen werden muss." },
    },
  },
  {
    id: "kpi",
    text: {
      es: { term: "KPI", def: "Indicador clave de rendimiento: métrica que se elige para comprobar si un objetivo avanza, como las solicitudes recibidas al mes." },
      en: { term: "KPI", def: "Key performance indicator: a metric chosen to check whether a goal is progressing, such as enquiries received per month." },
      de: { term: "KPI", def: "Leistungskennzahl: eine Messgröße, an der man sieht, ob ein Ziel vorankommt, etwa die Zahl der Anfragen pro Monat." },
    },
  },
  {
    id: "landing-page",
    text: {
      es: { term: "Landing page", def: "Página creada para un objetivo concreto, normalmente una campaña, con un único mensaje y una llamada a la acción clara." },
      en: { term: "Landing page", def: "A page built for one specific goal, usually a campaign, with a single message and a clear call to action." },
      de: { term: "Landingpage", def: "Seite für ein bestimmtes Ziel, meist eine Kampagne, mit einer einzigen Botschaft und einer klaren Handlungsaufforderung." },
    },
  },
  {
    id: "llm",
    text: {
      es: { term: "LLM", def: "Modelo de lenguaje de gran tamaño: IA entrenada con grandes volúmenes de texto que entiende y genera lenguaje natural. Es la base de asistentes como ChatGPT." },
      en: { term: "LLM", def: "Large language model: AI trained on huge amounts of text that understands and generates natural language. It powers assistants such as ChatGPT." },
      de: { term: "LLM", def: "Großes Sprachmodell: KI, die mit riesigen Textmengen trainiert wurde und natürliche Sprache versteht und erzeugt. Grundlage von Assistenten wie ChatGPT." },
    },
  },
  {
    id: "llmo",
    text: {
      es: { term: "LLMO", def: "Optimización para modelos de lenguaje: trabajar los contenidos y la presencia de una marca para que los asistentes de IA la mencionen de forma correcta." },
      en: { term: "LLMO", def: "Large language model optimisation: working on a brand's content and presence so that AI assistants mention it accurately." },
      de: { term: "LLMO", def: "Optimierung für Sprachmodelle: Inhalte und Präsenz einer Marke so gestalten, dass KI-Assistenten sie korrekt erwähnen." },
    },
  },
  {
    id: "manual-marca",
    text: {
      es: { term: "Manual de marca", def: "Documento que explica cómo usar la identidad visual: versiones del logotipo, colores, tipografías, aplicaciones y usos incorrectos." },
      en: { term: "Brand guidelines", def: "A document explaining how to use the visual identity: logo versions, colours, typefaces, applications and what to avoid." },
      de: { term: "Markenhandbuch", def: "Dokument, das die Anwendung der visuellen Identität erklärt: Logovarianten, Farben, Schriften, Anwendungen und Fehlanwendungen." },
    },
  },
  {
    id: "palabra-clave",
    text: {
      es: { term: "Palabra clave", def: "Término o frase que la gente escribe en un buscador y para la que una web quiere aparecer." },
      en: { term: "Keyword", def: "A word or phrase people type into a search engine and that a website wants to rank for." },
      de: { term: "Keyword", def: "Begriff oder Wortgruppe, die Menschen in eine Suchmaschine eingeben und für die eine Website gefunden werden möchte." },
    },
  },
  {
    id: "plugin",
    text: {
      es: { term: "Plugin", def: "Complemento que añade funciones a un CMS o a un programa. Cada plugin debe mantenerse actualizado para no abrir fallos de seguridad." },
      en: { term: "Plugin", def: "An add-on that extends a CMS or program. Each plugin has to be kept up to date so it does not open security holes." },
      de: { term: "Plugin", def: "Erweiterung, die einem CMS oder Programm Funktionen hinzufügt. Jedes Plugin muss aktuell gehalten werden, damit keine Sicherheitslücken entstehen." },
    },
  },
  {
    id: "pwa",
    text: {
      es: { term: "PWA", def: "Aplicación web progresiva: web que se instala en el móvil y funciona como una app, sin pasar por las tiendas de aplicaciones." },
      en: { term: "PWA", def: "Progressive web app: a website that installs on a phone and works like an app, without going through the app stores." },
      de: { term: "PWA", def: "Progressive Web-App: Website, die sich auf dem Handy installieren lässt und wie eine App funktioniert, ohne App-Store." },
    },
  },
  {
    id: "responsive",
    text: {
      es: { term: "Diseño responsive", def: "Diseño que adapta una web a cualquier tamaño de pantalla, del móvil al ordenador." },
      en: { term: "Responsive design", def: "Design that adapts a website to any screen size, from phone to desktop." },
      de: { term: "Responsive Design", def: "Gestaltung, die eine Website an jede Bildschirmgröße anpasst, vom Handy bis zum Desktop." },
    },
  },
  {
    id: "rgpd",
    text: {
      es: { term: "RGPD", def: "Reglamento General de Protección de Datos de la Unión Europea, que regula cómo se recogen, guardan y usan los datos personales." },
      en: { term: "GDPR", def: "The European Union's General Data Protection Regulation, which governs how personal data is collected, stored and used." },
      de: { term: "DSGVO", def: "Datenschutz-Grundverordnung der Europäischen Union: regelt, wie personenbezogene Daten erhoben, gespeichert und genutzt werden." },
    },
  },
  {
    id: "roi",
    text: {
      es: { term: "ROI", def: "Retorno de la inversión: relación entre lo que genera una acción y lo que ha costado." },
      en: { term: "ROI", def: "Return on investment: the relationship between what an action brings in and what it cost." },
      de: { term: "ROI", def: "Kapitalrendite: Verhältnis zwischen dem, was eine Maßnahme einbringt, und dem, was sie gekostet hat." },
    },
  },
  {
    id: "seo",
    text: {
      es: { term: "SEO", def: "Posicionamiento en buscadores: trabajo técnico y de contenidos para que una web aparezca en los resultados orgánicos (no pagados) de Google y otros buscadores." },
      en: { term: "SEO", def: "Search engine optimisation: technical and content work so a website appears in the organic (unpaid) results of Google and other search engines." },
      de: { term: "SEO", def: "Suchmaschinenoptimierung: technische und inhaltliche Arbeit, damit eine Website in den organischen (unbezahlten) Ergebnissen von Google und anderen Suchmaschinen erscheint." },
    },
  },
  {
    id: "ssl",
    text: {
      es: { term: "Certificado SSL", def: "Certificado que cifra la conexión entre el navegador y la web. Se reconoce por el candado y la dirección que empieza por https." },
      en: { term: "SSL certificate", def: "A certificate that encrypts the connection between the browser and the website, shown by the padlock and an address starting with https." },
      de: { term: "SSL-Zertifikat", def: "Zertifikat, das die Verbindung zwischen Browser und Website verschlüsselt. Erkennbar am Schloss-Symbol und an der Adresse mit https." },
    },
  },
  {
    id: "tpv",
    text: {
      es: { term: "TPV", def: "Terminal punto de venta: sistema con el que un negocio registra ventas, gestiona productos y cobra." },
      en: { term: "POS", def: "Point of sale: the system a business uses to record sales, manage products and take payments." },
      de: { term: "Kassensystem (POS)", def: "System, mit dem ein Geschäft Verkäufe erfasst, Produkte verwaltet und kassiert." },
    },
  },
  {
    id: "ux",
    text: {
      es: { term: "Experiencia de usuario (UX)", def: "Cómo vive una persona el uso de un producto digital: si le resulta fácil, rápido y útil." },
      en: { term: "User experience (UX)", def: "How a person experiences using a digital product: whether it is easy, fast and useful." },
      de: { term: "User Experience (UX)", def: "Wie eine Person die Nutzung eines digitalen Produkts erlebt: ob es einfach, schnell und nützlich ist." },
    },
  },
  {
    id: "webhook",
    text: {
      es: { term: "Webhook", def: "Aviso automático que un sistema envía a otro cuando ocurre algo, por ejemplo un pago recibido o un formulario enviado." },
      en: { term: "Webhook", def: "An automatic notification one system sends to another when something happens, such as a payment received or a form submitted." },
      de: { term: "Webhook", def: "Automatische Benachrichtigung, die ein System an ein anderes sendet, wenn etwas passiert, etwa ein Zahlungseingang oder ein abgeschicktes Formular." },
    },
  },
  {
    id: "whatsapp-business",
    text: {
      es: { term: "WhatsApp Business", def: "Versión de WhatsApp para empresas. Su plataforma para empresas permite conectar el número a un software, trabajar con varios agentes y automatizar respuestas." },
      en: { term: "WhatsApp Business", def: "WhatsApp for companies. Its business platform lets you connect the number to software, work with several agents and automate replies." },
      de: { term: "WhatsApp Business", def: "WhatsApp-Version für Unternehmen. Über die Business-Plattform lässt sich die Nummer an Software anbinden, mit mehreren Mitarbeitenden nutzen und automatisieren." },
    },
  },
];

export const getTerm = (id: string) => glossary.find((t) => t.id === id);

/** Entries sorted alphabetically in the given language, grouped by initial. */
export function glossaryByLetter(locale: Locale): { letter: string; entries: GlossaryEntry[] }[] {
  const sorted = [...glossary].sort((a, b) => a.text[locale].term.localeCompare(b.text[locale].term, locale));
  const groups = new Map<string, GlossaryEntry[]>();
  for (const entry of sorted) {
    const letter = entry.text[locale].term.normalize("NFD")[0].toUpperCase();
    groups.set(letter, [...(groups.get(letter) ?? []), entry]);
  }
  return [...groups].map(([letter, entries]) => ({ letter, entries }));
}
