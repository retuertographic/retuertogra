import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { Breadcrumbs } from "@/components/shop/breadcrumbs";
import { Container, text } from "@/components/shop/ui";
import { JsonLd } from "@/components/shop/json-ld";
import { SITE_ORIGIN } from "@/config/site";
import { type Locale, localeConfig } from "@/i18n/config";
import { siteHref } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { loadLegalDoc } from "@/legal/content";
import { type LegalDocId, legalAlternates, legalDocs, legalHref, translationNotice } from "@/legal/registry";

const homeLabel: Record<Locale, string> = { en: "Home", es: "Inicio", de: "Startseite" };
const tocLabel: Record<Locale, string> = { en: "Contents", es: "Contenido", de: "Inhalt" };

export function legalMetadata(locale: Locale, id: LegalDocId): Metadata {
  const meta = legalDocs[locale][id];
  const alternates = legalAlternates(id);
  const title = `${meta.title} | Retuerto Graphic Design`;
  return {
    metadataBase: new URL(SITE_ORIGIN),
    title,
    description: meta.description,
    alternates: { canonical: alternates[locale], languages: { ...alternates, "x-default": alternates.en } },
    openGraph: {
      title,
      description: meta.description,
      url: alternates[locale],
      siteName: "Retuerto Graphic Design",
      locale: localeConfig[locale].ogLocale,
      type: "article",
    },
  };
}

function TocList({ headings }: { headings: { id: string; text: string }[] }) {
  return (
    <ol className="mt-3 space-y-2 border-l-2 border-brand/40 pl-4">
      {headings.map((h) => (
        <li key={h.id}>
          <a href={`#${h.id}`} className="font-figtree text-sm leading-5 text-muted hover:text-brand-dark">{h.text}</a>
        </li>
      ))}
    </ol>
  );
}

export function LegalPage({ locale, id }: { locale: Locale; id: LegalDocId }) {
  const meta = legalDocs[locale][id];
  const alternates = legalAlternates(id);
  const homeHref = siteHref(locale);
  const { html, headings, faq } = loadLegalDoc(locale, id);
  const notice = meta.translated ? translationNotice[locale] : null;
  const showToc = headings.length >= 6 && id !== "faq";

  return (
    <PageShell locale={locale} alternates={alternates}>
        <section className="bg-surface py-10 min-[1025px]:py-16">
          <Container>
            <Breadcrumbs items={[{ label: homeLabel[locale], href: homeHref }, { label: meta.title, href: legalHref(locale, id) }]} />
            <h1 className={cn(text.h1, "mt-8")}>{meta.title}</h1>
          </Container>
        </section>

        <Container className="grid gap-10 py-12 min-[1025px]:grid-cols-[260px_1fr] min-[1025px]:gap-16 min-[1025px]:py-16">
          {showToc ? (
            <nav aria-label={tocLabel[locale]} className="min-[1025px]:sticky min-[1025px]:top-28 min-[1025px]:max-h-[calc(100vh-8rem)] min-[1025px]:self-start min-[1025px]:overflow-y-auto">
              {/* Mobile: collapsed so the text starts right away. */}
              <details className="rounded-[20px] border border-line p-4 min-[1025px]:hidden">
                <summary className="cursor-pointer font-poppins text-base font-semibold text-ink">{tocLabel[locale]}</summary>
                <TocList headings={headings} />
              </details>
              {/* Desktop: always visible sidebar. */}
              <div className="hidden min-[1025px]:block">
                <p className="font-figtree text-xs font-bold uppercase tracking-[0.12em] text-muted">{tocLabel[locale]}</p>
                <TocList headings={headings} />
              </div>
            </nav>
          ) : (
            <div className="hidden min-[1025px]:block" />
          )}

          <article className="min-w-0 max-w-[820px]">
            {notice && (
              <p className="mb-8 rounded-r-xl border-l-4 border-brand bg-brand-soft px-4 py-3 font-figtree text-sm leading-5 text-ink">
                {notice.text}{" "}
                <a href={legalHref("es", id)} hrefLang="es" className="font-semibold underline underline-offset-2 hover:text-brand-dark">
                  {notice.link}
                </a>
              </p>
            )}
            <div className="legal-prose" dangerouslySetInnerHTML={{ __html: html }} />
          </article>
        </Container>
      {faq.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            inLanguage: locale,
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }}
        />
      )}
    </PageShell>
  );
}
