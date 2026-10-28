import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage, homeMetadata } from "@/components/sites/retuertographicdesign/home-page";
import { defaultLocale, isLocale } from "@/components/sites/retuertographicdesign/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  return isLocale(lang) ? homeMetadata(lang) : {};
}

export default async function LocalizedHome({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang) || lang === defaultLocale) notFound();
  return <HomePage locale={lang} />;
}
