import { notFound } from "next/navigation";
import { fontVariables } from "@/components/sites/retuertographicdesign/fonts";
import { defaultLocale, isLocale, locales } from "@/components/sites/retuertographicdesign/i18n";
import "../../globals.css";

// English is served from "/" by the (en) route group; only the other locales get a prefix.
export function generateStaticParams() {
  return locales.filter((lang) => lang !== defaultLocale).map((lang) => ({ lang }));
}

export const dynamicParams = false;

export default async function LocaleRootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang) || lang === defaultLocale) notFound();

  return (
    <html lang={lang} className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
