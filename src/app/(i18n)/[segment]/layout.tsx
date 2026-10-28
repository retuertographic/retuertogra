import { notFound } from "next/navigation";
import { fontVariables } from "@/components/layout/fonts";
import { allSegments, resolveSegment } from "@/i18n/routing";
import { englishLegalSegments } from "@/legal/registry";
import "../../globals.css";

// Root layout for every prefixed area: /es and /de (main site), /shop, /tienda,
// /laden (shop) and the English legal pages (/privacy-policy…). The segment
// decides <html lang>.
export function generateStaticParams() {
  return [...allSegments(), ...englishLegalSegments()].map((segment) => ({ segment }));
}

export const dynamicParams = false;

export default async function SegmentRootLayout({ children, params }: LayoutProps<"/[segment]">) {
  const { segment } = await params;
  const resolved = resolveSegment(segment) ?? (englishLegalSegments().includes(segment) ? { locale: "en" } : null);
  if (!resolved) notFound();

  return (
    <html lang={resolved.locale} className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
