import type { Metadata } from "next";
import { fontVariables } from "@/components/sites/retuertographicdesign/fonts";
import { localeHref } from "@/components/sites/retuertographicdesign/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 – Retuerto Graphic Design",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col items-center justify-center gap-6 p-6 text-center">
        <h1 className="font-poppins text-5xl font-semibold text-rg-ink">404</h1>
        <p className="font-figtree text-base text-rg-text">This page does not exist.</p>
        <a
          href={localeHref("en")}
          className="rounded-[3px] bg-rg-green px-6 py-3 font-figtree text-base text-white"
        >
          Home
        </a>
      </body>
    </html>
  );
}
