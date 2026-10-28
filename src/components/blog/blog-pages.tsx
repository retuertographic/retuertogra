import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { allPosts, getPost, postAlternates, postMetas } from "@/blog/content";
import { blogHref, blogUi, glossaryAlternates, glossaryHref } from "@/blog/registry";
import { SITE_ORIGIN } from "@/config/site";
import { getTerm, glossaryByLetter } from "@/glossary/terms";
import { type Locale, localeConfig, locales } from "@/i18n/config";
import { siteHref } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { getProduct } from "@/shop/catalog";
import { shopCopy } from "@/shop/i18n";
import { shopRouteHref } from "@/shop/routes";
import { Breadcrumbs, type Crumb } from "@/components/shop/breadcrumbs";
import { JsonLd } from "@/components/shop/json-ld";
import { priceLine } from "@/components/shop/price";
import { ShopCta } from "@/components/shop/shop-home";
import { btn, Container, Eyebrow, Icon, text } from "@/components/shop/ui";
import { BlogBrowser } from "./blog-browser";
import { formatDate, postCardData } from "./card-data";
import { GlossaryBrowser } from "./glossary-browser";
import { PostCard } from "./post-card";

const absolute = (href: string) => (href.startsWith("http") ? href : `${SITE_ORIGIN}${href}`);

function pageMetadata(locale: Locale, title: string, description: string, alternates: Record<Locale, string>, type: "website" | "article", image?: string): Metadata {
  return {
    metadataBase: new URL(SITE_ORIGIN),
    title,
    description,
    alternates: { canonical: alternates[locale], languages: { ...alternates, "x-default": alternates.en } },
    openGraph: {
      title,
      description,
      url: alternates[locale],
      siteName: "Retuerto Graphic Design",
      locale: localeConfig[locale].ogLocale,
      type,
      ...(image ? { images: [absolute(image)] } : {}),
    },
  };
}

export const blogAlternates = () => Object.fromEntries(locales.map((l) => [l, blogHref(l)])) as Record<Locale, string>;

export function blogIndexMetadata(locale: Locale): Metadata {
  const ui = blogUi[locale];
  return pageMetadata(locale, `${ui.title} | Retuerto Graphic Design`, ui.intro, blogAlternates(), "website");
}

export function articleMetadata(locale: Locale, slug: string): Metadata {
  const post = getPost(locale, slug)!;
  return pageMetadata(locale, `${post.title} | Retuerto Graphic Design`, post.description, postAlternates(post.id), "article", post.image);
}

export function glossaryMetadata(locale: Locale): Metadata {
  const g = blogUi[locale].glossary;
  return pageMetadata(locale, `${g.title} | Retuerto Graphic Design`, g.intro, glossaryAlternates(), "website");
}

const homeCrumb = (locale: Locale): Crumb => ({ label: shopCopy[locale].ui.home, href: siteHref(locale) });

function PageHead({ crumbs, eyebrow, title, intro }: { crumbs: Crumb[]; eyebrow: string; title: string; intro: string }) {
  return (
    <section className="relative overflow-hidden bg-surface py-10 min-[1025px]:py-16">
      <span aria-hidden="true" className="absolute -right-24 -top-24 size-64 rounded-full bg-brand-soft min-[1025px]:-right-16 min-[1025px]:-top-40 min-[1025px]:size-[420px]" />
      <Container className="relative">
        <Breadcrumbs items={crumbs} />
        <Eyebrow className="mt-8">{eyebrow}</Eyebrow>
        <h1 className={cn(text.h1, "mt-3")}>{title}</h1>
        <p className={cn(text.body, "mt-5 max-w-[720px]")}>{intro}</p>
      </Container>
    </section>
  );
}

function GlossaryTeaser({ locale }: { locale: Locale }) {
  const g = blogUi[locale].glossary;
  return (
    <a
      href={glossaryHref(locale)}
      className="group flex flex-col gap-4 rounded-[20px] border border-line bg-brand-soft p-5 transition-colors hover:border-brand min-[640px]:flex-row min-[640px]:items-center min-[1025px]:p-6"
    >
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-brand-dark">
        <BookOpen className="size-5" strokeWidth={1.8} aria-hidden="true" />
      </span>
      <span className="flex-1">
        <span className="block font-poppins text-[17px] font-semibold text-ink">{g.teaserTitle}</span>
        <span className="mt-1 block font-figtree text-[15px] leading-[1.5] text-muted">{g.teaserBody}</span>
      </span>
      <span className="inline-flex shrink-0 items-center gap-2 font-figtree text-[15px] font-semibold text-brand-dark">
        {g.name}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </a>
  );
}

/** Home page section (the home is the shop home plus this blog block). */
export function BlogTeaser({ locale }: { locale: Locale }) {
  const ui = blogUi[locale];
  const posts = postMetas(locale).slice(0, 3);
  return (
    <section className="mb-10 bg-surface py-10 min-[1025px]:mb-24 min-[1025px]:py-24">
      <Container>
        <div className="flex flex-col gap-4 min-[1025px]:flex-row min-[1025px]:items-end min-[1025px]:justify-between">
          <div className="max-w-[640px]">
            <Eyebrow>{ui.home.eyebrow}</Eyebrow>
            <h2 className={cn(text.h2, "mt-3")}>{ui.home.title}</h2>
            <p className={cn(text.body, "mt-3")}>{ui.home.intro}</p>
          </div>
          <a href={blogHref(locale)} className="inline-flex shrink-0 items-center gap-2 font-figtree text-[15px] font-semibold text-brand-dark hover:text-ink">
            {ui.home.viewAll}
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div className="mt-8 grid gap-4 min-[640px]:grid-cols-2 min-[1025px]:mt-12 min-[1025px]:grid-cols-3 min-[1025px]:gap-6">
          {posts.map((p, i) => (
            <div key={p.id} className={cn("flex", i === 2 && "min-[640px]:max-[1024px]:hidden")}>
              <PostCard data={postCardData(locale, p)} />
            </div>
          ))}
        </div>
        <div className="mt-6">
          <GlossaryTeaser locale={locale} />
        </div>
      </Container>
    </section>
  );
}

export function BlogIndexPage({ locale }: { locale: Locale }) {
  const ui = blogUi[locale];
  const posts = postMetas(locale).map((p) => postCardData(locale, p));
  return (
    <>
      <PageHead crumbs={[homeCrumb(locale), { label: ui.blog, href: blogHref(locale) }]} eyebrow={ui.eyebrow} title={ui.title} intro={ui.intro} />
      <section className="py-10 min-[1025px]:py-16">
        <Container>
          <BlogBrowser posts={posts} labels={{ all: ui.all, filter: ui.eyebrow, noResults: ui.noResults }} />
          <div className="mt-10 min-[1025px]:mt-14">
            <GlossaryTeaser locale={locale} />
          </div>
        </Container>
      </section>
      <ShopCta locale={locale} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `${ui.title} · Retuerto Graphic Design`,
          url: absolute(blogHref(locale)),
          inLanguage: locale,
          blogPost: posts.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: absolute(p.href), datePublished: p.date })),
        }}
      />
    </>
  );
}

export function ArticlePage({ locale, slug }: { locale: Locale; slug: string }) {
  const ui = blogUi[locale];
  const { ui: shopUi, products: productCopy } = shopCopy[locale];
  const post = getPost(locale, slug)!;
  const card = postCardData(locale, post);
  const others = allPosts(locale).filter((p) => p.id !== post.id);
  const related = [...others.filter((p) => p.category === post.category), ...others.filter((p) => p.category !== post.category)].slice(0, 3);
  const product = post.product ? getProduct(post.product) : null;
  const glossaryTerms = post.terms;

  const toc = (
    <ol className="mt-3 space-y-2 border-l-2 border-brand/40 pl-4">
      {post.headings.map((h) => (
        <li key={h.id}>
          <a href={`#${h.id}`} className="font-figtree text-sm leading-5 text-muted hover:text-brand-dark">{h.text}</a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <section className="bg-surface pb-8 pt-10 min-[1025px]:pb-12 min-[1025px]:pt-16">
        <Container>
          <Breadcrumbs items={[homeCrumb(locale), { label: ui.blog, href: blogHref(locale) }, { label: post.title, href: post.href }]} />
          <div className="mt-8 max-w-[880px]">
            <Eyebrow>{card.categoryLabel}</Eyebrow>
            <h1 className={cn(text.h1, "mt-3 min-[1025px]:text-[48px] min-[1025px]:leading-[1.1]")}>{post.title}</h1>
            <p className={cn(text.body, "mt-5")}>{post.description}</p>
            <p className="mt-5 font-figtree text-sm text-muted">
              {ui.updated} <time dateTime={post.date}>{formatDate(locale, post.date)}</time> · {card.minutesLabel}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-8 min-[1025px]:py-14">
        <Container>
          <div className="relative aspect-[16/9] overflow-hidden rounded-[20px] border border-line min-[1025px]:aspect-[21/8]">
            {post.image ? (
              <Image src={post.image} alt="" fill priority sizes="(min-width: 1200px) 1152px, 100vw" className="object-cover" />
            ) : (
              <div className="flex size-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#a6d46a_0%,var(--brand)_45%,var(--brand-dark)_100%)] text-white">
                <span className="flex size-24 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">
                  <Icon name={card.icon} className="size-10" />
                </span>
              </div>
            )}
          </div>

          <div className="mt-10 grid gap-10 min-[1025px]:mt-14 min-[1025px]:grid-cols-[minmax(0,1fr)_320px] min-[1025px]:gap-16">
            <div className="min-w-0">
              {post.headings.length >= 3 && (
                <details className="mb-8 rounded-[20px] border border-line p-4 min-[1025px]:hidden">
                  <summary className="cursor-pointer font-poppins text-base font-semibold text-ink">{ui.toc}</summary>
                  {toc}
                </details>
              )}
              <div className="blog-prose" dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>

            <aside className="space-y-6 min-[1025px]:sticky min-[1025px]:top-28 min-[1025px]:self-start">
              {post.headings.length >= 3 && (
                <nav aria-label={ui.toc} className="hidden min-[1025px]:block">
                  <p className="font-figtree text-xs font-bold uppercase tracking-[0.12em] text-muted">{ui.toc}</p>
                  {toc}
                </nav>
              )}
              {product && (
                <div className="rounded-[20px] border border-line bg-white p-5">
                  <p className="font-figtree text-xs font-bold uppercase tracking-[0.12em] text-brand-dark">{ui.relatedService}</p>
                  <p className="mt-2 font-poppins text-[17px] font-semibold leading-snug text-ink">{productCopy[product.id].name}</p>
                  <p className="mt-2 font-figtree text-sm leading-[1.5] text-muted">{productCopy[product.id].summary}</p>
                  <p className="mt-3 font-poppins text-lg font-bold text-ink">{priceLine(locale, shopUi, product)}</p>
                  <a href={shopRouteHref(locale, { type: "product", id: product.id })} className={cn(btn.primary, "mt-4 w-full")}>
                    {ui.viewService}
                  </a>
                </div>
              )}
              {glossaryTerms.length > 0 && (
                <div>
                  <p className="font-figtree text-xs font-bold uppercase tracking-[0.12em] text-muted">{ui.termsInArticle}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {glossaryTerms.map((id) => {
                      const { term, def } = getTerm(id)!.text[locale];
                      return (
                        <a
                          key={id}
                          href={glossaryHref(locale, id)}
                          data-term={term}
                          data-def={def}
                          className="dic inline-flex h-9 items-center rounded-full border border-line bg-white px-4 font-figtree text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand-dark"
                        >
                          {term}
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-surface py-10 min-[1025px]:py-24">
          <Container>
            <h2 className={text.h2}>{ui.keepReading}</h2>
            <div className="mt-8 grid gap-4 min-[640px]:grid-cols-2 min-[1025px]:mt-12 min-[1025px]:grid-cols-3 min-[1025px]:gap-6">
              {related.map((p) => (
                <PostCard key={p.id} data={postCardData(locale, p)} />
              ))}
            </div>
          </Container>
        </section>
      )}
      <div className="pt-10 min-[1025px]:pt-24">
        <ShopCta locale={locale} />
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: locale,
          mainEntityOfPage: absolute(post.href),
          ...(post.image ? { image: absolute(post.image) } : {}),
          author: { "@type": "Organization", name: "Retuerto Graphic Design" },
          publisher: { "@type": "Organization", name: "Retuerto Graphic Design" },
        }}
      />
    </>
  );
}

export function GlossaryPage({ locale }: { locale: Locale }) {
  const ui = blogUi[locale];
  const g = ui.glossary;
  const posts = allPosts(locale);
  const letters = glossaryByLetter(locale).map(({ letter, entries }) => ({
    letter,
    entries: entries.map((e) => ({
      id: e.id,
      ...e.text[locale],
      posts: posts.filter((p) => p.terms.includes(e.id)).map((p) => ({ title: p.title, href: p.href })),
    })),
  }));
  return (
    <>
      <PageHead crumbs={[homeCrumb(locale), { label: ui.blog, href: blogHref(locale) }, { label: g.name, href: glossaryHref(locale) }]} eyebrow={ui.blog} title={g.title} intro={g.intro} />
      <section className="py-8 min-[1025px]:py-16">
        <Container>
          <GlossaryBrowser letters={letters} labels={{ search: g.search, noResults: g.noResults, appearsIn: g.appearsIn, letters: g.letters }} />
        </Container>
      </section>
      <div className="pt-4 min-[1025px]:pt-8">
        <ShopCta locale={locale} />
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: g.title,
          url: absolute(glossaryHref(locale)),
          inLanguage: locale,
          hasDefinedTerm: letters.flatMap((l) =>
            l.entries.map((e) => ({ "@type": "DefinedTerm", name: e.term, description: e.def, url: absolute(glossaryHref(locale, e.id)) })),
          ),
        }}
      />
    </>
  );
}
