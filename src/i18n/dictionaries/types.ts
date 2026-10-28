// Shape of the shared site copy (home metadata, header, footer) for one locale.
// TypeScript fails the build if a locale is missing a key.
/** Menu entry shared by the header partial; `children` renders a dropdown. */
export type NavItem = { label: string; href: string; highlight?: boolean; children?: NavItem[] };

export type Dictionary = {
  meta: { title: string; description: string };
  header: { switchTo: string; cart: string; toggleMenu: string };
  footer: {
    about: string;
    shop: { label: string; href: string };
    information: string;
    infoLinks: { label: string; href: string }[];
    esPhone: string;
    dePhone: string;
    email: string;
    hours: string;
    copyright: string;
  };
};
