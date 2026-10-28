import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Breadcrumbs } from "@/components/shop/breadcrumbs";
import { JsonLd } from "@/components/shop/json-ld";
import { SITE_ORIGIN } from "@/config/site";
import { type Locale, localeConfig } from "@/i18n/config";
import { dictionaries } from "@/i18n/dictionaries";
import { siteHref } from "@/i18n/routing";
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
    <ol className="mt-3 space-y-2 border-l-2 border-rg-green/40 pl-4">
      {headings.map((h) => (
        <li key={h.id}>
          <a href={`#${h.id}`} className="font-figtree text-sm leading-5 text-rg-text hover:text-rg-green">{h.text}</a>
        </li>
      ))}
    </ol>
  );
}

export function LegalPage({ locale, id }: { locale: Locale; id: LegalDocId }) {
  const dict = dictionaries[locale];
  const meta = legalDocs[locale][id];
  const alternates = legalAlternates(id);
  const homeHref = siteHref(locale);
  const { html, headings, faq } = loadLegalDoc(locale, id);
  const notice = meta.translated ? translationNotice[locale] : null;
  const showToc = headings.length >= 6 && id !== "faq";

  return (
    <>
      <SiteHeader locale={locale} nav={dict.nav} strings={dict.header} homeHref={homeHref} alternates={alternates} />
      <main className="flex-1 overflow-x-hidden">
        <section className="bg-rg-gray py-10 min-[1025px]:py-14">
          <div className="mx-auto w-full max-w-[1280px] px-4 min-[1025px]:px-10">
            <Breadcrumbs items={[{ label: homeLabel[locale], href: homeHref }, { label: meta.title, href: legalHref(locale, id) }]} />
            <h1 className="mt-6 font-poppins text-[32px] font-semibold leading-[1.2] text-rg-ink min-[1025px]:text-5xl">{meta.title}</h1>
          </div>
        </section>

        <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-4 py-12 min-[1025px]:grid-cols-[260px_1fr] min-[1025px]:gap-16 min-[1025px]:px-10 min-[1025px]:py-16">
          {showToc ? (
            <nav aria-label={tocLabel[locale]} className="min-[1025px]:sticky min-[1025px]:top-6 min-[1025px]:max-h-[calc(100vh-3rem)] min-[1025px]:self-start min-[1025px]:overflow-y-auto">
              {/* Mobile: collapsed so the text starts right away. */}
              <details className="border border-rg-ink/15 p-4 min-[1025px]:hidden">
                <summary className="cursor-pointer font-poppins text-lg font-semibold text-rg-ink">{tocLabel[locale]}</summary>
                <TocList headings={headings} />
              </details>
              {/* Desktop: always visible sidebar. */}
              <div className="hidden min-[1025px]:block">
                <p className="font-poppins text-lg font-semibold text-rg-ink">{tocLabel[locale]}</p>
                <TocList headings={headings} />
              </div>
            </nav>
          ) : (
            <div className="hidden min-[1025px]:block" />
          )}

          <article className="min-w-0 max-w-[820px]">
            {notice && (
              <p className="mb-8 border-l-4 border-rg-green bg-rg-green/10 px-4 py-3 font-figtree text-sm leading-5 text-rg-ink">
                {notice.text}{" "}
                <a href={legalHref("es", id)} hrefLang="es" className="font-semibold underline underline-offset-2 hover:text-rg-green">
                  {notice.link}
                </a>
              </p>
            )}
            <div className="legal-prose" dangerouslySetInnerHTML={{ __html: html }} />
          </article>
        </div>
      </main>
      <SiteFooter locale={locale} strings={dict.footer} homeHref={homeHref} alternates={alternates} />
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
    </>
  );
}
