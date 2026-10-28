import { notFound } from "next/navigation";
import { fontVariables } from "@/components/layout/fonts";
import { allSegments, resolveSegment } from "@/i18n/routing";
import "../../globals.css";

// Root layout for every prefixed area: /es and /de (main site) and
// /shop, /tienda, /laden (shop). The segment decides <html lang>.
export function generateStaticParams() {
  return allSegments().map((segment) => ({ segment }));
}

export const dynamicParams = false;

export default async function SegmentRootLayout({ children, params }: LayoutProps<"/[segment]">) {
  const { segment } = await params;
  const resolved = resolveSegment(segment);
  if (!resolved) notFound();

  return (
    <html lang={resolved.locale} className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
