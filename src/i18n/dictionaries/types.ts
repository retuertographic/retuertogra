// Shape of the shared site copy (header, footer, home page) for one locale.
// TypeScript fails the build if a locale is missing a key.
/** Menu entry shared by the header partial; `children` renders a dropdown. */
export type NavItem = { label: string; href: string; highlight?: boolean; children?: NavItem[] };
type Tab = { label: string; title: string; body: string };
type Project = { title: string; body: string; tags: string[]; link: string };

export type Dictionary = {
  meta: { title: string; description: string };
  anchors: { about: string; services: string; projects: string; contact: string };
  nav: NavItem[];
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
