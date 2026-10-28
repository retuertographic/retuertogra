import Image from "next/image";
import { ArrowRight, CalendarDays, CircleCheck, FileText } from "lucide-react";
import { ASSET_BASE } from "@/config/site";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { categories, getProduct, products } from "@/shop/catalog";
import { shopCopy } from "@/shop/i18n";
import { shopRouteHref } from "@/shop/routes";
import { categoryCardData, productCardData, solutionGroupsData } from "./card-data";
import { meetingHref, quoteHref, whatsappHref } from "./links";
import { priceLine } from "./price";
import { ShopCatalog } from "./shop-catalog";
import { btn, card, Container, Eyebrow, IconCircle, text, WhatsAppIcon } from "./ui";

/** Floating price cards next to the hero photo. */
const heroProducts = [
  { id: "whatsapp-chatbot" as const, icon: "bot" as const, className: "left-0 top-[14%]" },
  { id: "web-maintenance" as const, icon: "wrench" as const, className: "left-[4%] bottom-[16%]" },
];

function Hero({ locale }: { locale: Locale }) {
  const { ui, pages, products: productCopy } = shopCopy[locale];
  const t = pages.home;
  return (
    <section className="relative overflow-hidden bg-surface">
      {/* Brand circle motif (mobile: soft circle top-right; desktop: large circle behind the photo). */}
      <span aria-hidden="true" className="absolute -right-24 -top-24 size-64 rounded-full bg-brand-soft min-[1025px]:hidden" />
      <Container className="relative grid items-center gap-10 pb-10 pt-10 min-[1025px]:min-h-[600px] min-[1025px]:grid-cols-[1.05fr_1fr] min-[1025px]:pb-28 min-[1025px]:pt-16">
        <div>
          <Eyebrow>
            <span className="min-[1025px]:hidden">{ui.breadcrumbHome}</span>
            <span className="hidden min-[1025px]:inline">{t.eyebrow}</span> · {ui.location}
          </Eyebrow>
          <h1 className={cn(text.h1, "mt-4")}>
            {t.titleLead} <span className="block text-brand-dark">{t.titleAccent}</span>
          </h1>
          <p className={cn(text.body, "mt-5 max-w-[540px]")}>{t.intro}</p>
          <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row">
            <a href={shopRouteHref(locale, { type: "products" })} className={btn.primary}>
              {ui.products}
              <ArrowRight className="size-[18px]" aria-hidden="true" />
            </a>
            <a href={quoteHref(locale)} className={btn.secondary}>
              {ui.cta.quote}
            </a>
          </div>
          {/* 3 · Trust row */}
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {ui.trust.map((item) => (
              <li key={item.long} className="flex items-center gap-1.5 font-figtree text-sm text-ink">
                <CircleCheck className="size-4 text-brand" strokeWidth={1.8} aria-hidden="true" />
                <span className="min-[1025px]:hidden">{item.short}</span>
                <span className="hidden min-[1025px]:inline">{item.long}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Teide photo in a ringed circle + floating price cards (desktop only) */}
        <div className="relative hidden h-[520px] min-[1025px]:block">
          <span aria-hidden="true" className="absolute -bottom-40 -right-40 size-[440px] rounded-full bg-brand" />
          <div className="absolute right-0 top-1/2 size-[440px] -translate-y-1/2 overflow-hidden rounded-full bg-white shadow-[0_30px_60px_-30px_rgba(35,35,35,0.45)] ring-[10px] ring-white">
            <Image
              src={`${ASSET_BASE}/hero-1.webp`}
              alt=""
              fill
              priority
              sizes="440px"
              className="object-cover object-[28%_center]"
            />
          </div>
          {heroProducts.map(({ id, icon, className }) => (
            <a
              key={id}
              href={shopRouteHref(locale, { type: "product", id })}
              className={cn(card, "absolute flex items-center gap-3 rounded-2xl px-4 py-3 shadow-[0_18px_40px_-20px_rgba(35,35,35,0.35)]", className)}
            >
              <IconCircle name={icon} size="sm" className="rounded-xl" />
              <span>
                <span className="block font-figtree text-xs text-muted">{productCopy[id].shortName ?? productCopy[id].name}</span>
                <span className="block font-poppins text-[15px] font-bold text-ink">{priceLine(locale, ui, getProduct(id))}</span>
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Categories({ locale }: { locale: Locale }) {
  const { ui, pages } = shopCopy[locale];
  return (
    <section className="py-10 min-[1025px]:py-24">
      <Container>
        <div className="flex flex-col gap-4 min-[1025px]:flex-row min-[1025px]:items-end min-[1025px]:justify-between">
          <div>
            <Eyebrow>{pages.home.categoriesTitle}</Eyebrow>
            <h2 className={cn(text.h2, "mt-3 max-w-[520px]")}>{pages.home.categoriesIntro}</h2>
          </div>
          <a href={shopRouteHref(locale, { type: "products" })} className="inline-flex shrink-0 items-center gap-2 font-figtree text-[15px] font-semibold text-brand-dark hover:text-ink">
            {ui.viewAllServices}
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 min-[1025px]:mt-12 min-[1025px]:grid-cols-4 min-[1025px]:gap-5">
          {categories.map((c) => {
            const data = categoryCardData(locale, c);
            return (
              <a key={c.id} href={data.href} className={cn(card, "group flex flex-col p-4 min-[1025px]:p-6")}>
                <IconCircle name={data.icon} />
                <h3 className={cn(text.h3, "mt-4 hyphens-auto break-words")}>{data.name}</h3>
                <p className="mt-1.5 hidden font-figtree text-sm leading-[1.5] text-muted min-[1025px]:block">{data.summary}</p>
                <span className="mt-auto hidden items-center justify-between pt-5 min-[1025px]:flex">
                  <span className="font-figtree text-sm font-semibold text-brand-dark">{ui.viewServices}</span>
                  <span className="flex size-9 items-center justify-center rounded-full border border-line text-ink transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                    <ArrowRight className="size-4" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function Steps({ locale }: { locale: Locale }) {
  const { steps } = shopCopy[locale].ui;
  return (
    <div className="mt-10 min-[1025px]:mt-12">
      <h3 className="sr-only">{steps.title}</h3>
      <ol className="grid gap-3 min-[1025px]:grid-cols-3 min-[1025px]:gap-6">
        {steps.items.map((step, i) => (
          <li key={step.title} className="flex gap-4 rounded-[20px] bg-surface p-5 min-[1025px]:p-6">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand font-poppins text-base font-bold text-white">{i + 1}</span>
            <span>
              <span className="block font-poppins text-[17px] font-semibold text-ink">{step.title}</span>
              <span className="mt-1 block font-figtree text-[15px] leading-[1.5] text-muted">{step.body}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Final CTA (spec #11): dark rounded block with the green circle motif. */
export function ShopCta({ locale }: { locale: Locale }) {
  const { ui, pages } = shopCopy[locale];
  return (
    <section className="pb-10 min-[1025px]:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-ink px-6 py-10 min-[1025px]:grid min-[1025px]:grid-cols-[1fr_300px] min-[1025px]:items-center min-[1025px]:gap-12 min-[1025px]:px-14 min-[1025px]:py-16">
          <span aria-hidden="true" className="absolute -bottom-32 -right-24 size-[340px] rounded-full bg-brand min-[1025px]:-bottom-24 min-[1025px]:-right-10 min-[1025px]:size-[420px]" />
          <div className="relative">
            <Eyebrow className="text-brand">{ui.ctaEyebrow}</Eyebrow>
            <h2 className={cn(text.h2, "mt-3 text-white")}>{pages.home.ctaTitle}</h2>
            <p className="mt-4 max-w-[520px] font-figtree text-[15px] leading-[1.55] text-white/70 min-[1025px]:text-[17px]">{pages.home.ctaBody}</p>
          </div>
          <div className="relative mt-8 flex flex-col gap-3 min-[1025px]:mt-0">
            <a href={quoteHref(locale)} className={btn.light}>
              <FileText className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
              {ui.cta.quote}
            </a>
            <a href={meetingHref(locale)} className={cn(btn.dark, "border border-white/15")}>
              <CalendarDays className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
              {ui.cta.meeting}
            </a>
            <a href={whatsappHref(ui.whatsappMessage)} target="_blank" rel="noopener noreferrer" className={cn(btn.dark, "border border-white/15")}>
              <WhatsAppIcon className="size-[18px] text-wa" />
              {ui.cta.whatsapp}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Shop home; the site home reuses it and adds the blog block through `beforeCta`. */
export function ShopHomePage({ locale, beforeCta }: { locale: Locale; beforeCta?: React.ReactNode }) {
  const { ui, pages, categories: categoryCopy } = shopCopy[locale];
  const t = pages.home;
  return (
    <>
      <Hero locale={locale} />
      <ShopCatalog
        copy={{
          search: ui.search,
          products: {
            eyebrow: ui.featuredEyebrow,
            title: t.featuredTitle,
            intro: t.featuredIntro,
            link: { label: ui.viewCatalog, href: shopRouteHref(locale, { type: "products" }) },
          },
          spotlight: { view: ui.viewServices, quote: ui.cta.quote, quoteHref: quoteHref(locale) },
          solutions: { eyebrow: t.customTitle, title: t.customHeading, note: t.customNote },
        }}
        chips={categories.map((c) => ({
          id: c.id,
          label: categoryCopy[c.id].chip,
          name: categoryCopy[c.id].name,
          description: categoryCopy[c.id].description,
          services: categoryCopy[c.id].services,
          href: shopRouteHref(locale, { type: "category", id: c.id }),
          icon: c.icon,
          image: c.image,
        }))}
        products={products.filter((p) => p.featured).map((p) => productCardData(locale, p))}
        allProducts={products.map((p) => productCardData(locale, p))}
        groups={solutionGroupsData(locale)}
        categories={<Categories locale={locale} />}
        steps={<Steps locale={locale} />}
      />
      {beforeCta}
      <ShopCta locale={locale} />
    </>
  );
}
