import Image from "next/image";
import { CalendarDays, Check, FileText, MessageCircle } from "lucide-react";
import { ASSET_BASE } from "@/config/site";
import type { Locale } from "@/i18n/config";
import { categories, getCategory, getProduct, hasFixedPrice, products, productsInCategory } from "@/shop/catalog";
import { shopCopy } from "@/shop/i18n";
import { shopRouteHref } from "@/shop/routes";
import type { CategoryId, ProductId } from "@/shop/types";
import { Breadcrumbs, type Crumb } from "./breadcrumbs";
import { buttonStyles } from "./buttons";
import { CategoryCard, ProductCard } from "./cards";
import { CategoryIcon } from "./category-icon";
import { CrmForm } from "./crm-form";
import { JsonLd } from "./json-ld";
import { meetingHref, quoteHref, whatsappHref } from "./links";
import { ProductActions } from "./product-actions";
import { Container, headingStyles as h } from "./section";
import { serviceJsonLd } from "./structured-data";

const home = (locale: Locale): Crumb => ({
  label: shopCopy[locale].ui.breadcrumbHome,
  href: shopRouteHref(locale, { type: "home" }),
});

function QuoteBand({ locale }: { locale: Locale }) {
  const { ui, pages } = shopCopy[locale];
  return (
    <section className="relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${ASSET_BASE}/cta-bg.webp)` }}>
      <div className="absolute inset-0 bg-rg-blue opacity-70" />
      <Container className="relative py-16 text-center text-white min-[1025px]:py-20">
        <h2 className="font-poppins text-[28px] font-semibold leading-[1.2] min-[1025px]:text-[40px]">{pages.home.ctaTitle}</h2>
        <p className="mx-auto mt-4 max-w-[700px] font-figtree text-base leading-6">{pages.home.ctaBody}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href={quoteHref(locale)} className={buttonStyles.primary}>
            <FileText className="size-5" aria-hidden="true" />
            {ui.cta.quote}
          </a>
          <a href={meetingHref(locale)} className={buttonStyles.outlineLight}>
            <CalendarDays className="size-5" aria-hidden="true" />
            {ui.cta.meeting}
          </a>
          <a href={whatsappHref(ui.whatsappMessage)} target="_blank" rel="noopener noreferrer" className={buttonStyles.whatsapp}>
            <MessageCircle className="size-5" aria-hidden="true" />
            {ui.cta.whatsapp}
          </a>
        </div>
      </Container>
    </section>
  );
}

function FormSection({ locale, whatsappText }: { locale: Locale; whatsappText: string }) {
  const { ui } = shopCopy[locale];
  return (
    <section id="form" className="scroll-mt-6 bg-rg-gray py-16 min-[1025px]:py-20">
      <Container className="max-w-[900px]">
        <h2 className={h.h2}>{ui.form.title}</h2>
        <p className={`${h.body} mt-3`}>{ui.form.intro}</p>
        <div className="mt-8">
          <CrmForm locale={locale} ui={ui} whatsappText={whatsappText} />
        </div>
      </Container>
    </section>
  );
}

export function ShopHomePage({ locale }: { locale: Locale }) {
  const { ui, pages } = shopCopy[locale];
  const t = pages.home;
  const featured = products.filter((p) => p.featured);
  const custom = products.filter((p) => !hasFixedPrice(p));
  return (
    <>
      <section className="relative flex min-h-[520px] items-center bg-cover bg-center" style={{ backgroundImage: `url(${ASSET_BASE}/hero-1.webp)` }}>
        <div className="absolute inset-0 bg-white opacity-60" />
        <Container className="relative py-16 text-center">
          <p className={h.eyebrow}>{t.eyebrow}</p>
          <h1 className={`${h.h1} mx-auto mt-5 max-w-[900px]`}>{t.title}</h1>
          <p className="mx-auto mt-6 max-w-[760px] font-poppins text-lg font-medium leading-[1.5] text-rg-text">{t.intro}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={shopRouteHref(locale, { type: "products" })} className={buttonStyles.primary}>
              {ui.products}
            </a>
            <a href={quoteHref(locale)} className={buttonStyles.outline}>
              {ui.cta.quote}
            </a>
          </div>
        </Container>
      </section>

      <section className="py-16 min-[1025px]:py-24">
        <Container>
          <h2 className={`${h.h2} text-center`}>{t.categoriesTitle}</h2>
          <p className={`${h.body} mt-3 text-center`}>{t.categoriesIntro}</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 min-[1025px]:grid-cols-4">
            {categories.map((c) => (
              <CategoryCard key={c.id} locale={locale} category={c} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-rg-gray py-16 min-[1025px]:py-24">
        <Container>
          <h2 className={`${h.h2} text-center`}>{t.featuredTitle}</h2>
          <p className={`${h.body} mt-3 text-center`}>{t.featuredIntro}</p>
          <div className="mt-12 grid items-start gap-8 sm:grid-cols-2 min-[1025px]:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.id} locale={locale} product={p} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 min-[1025px]:py-24">
        <Container>
          <h2 className={`${h.h2} text-center`}>{t.customTitle}</h2>
          <p className={`${h.body} mt-3 text-center`}>{t.customIntro}</p>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 min-[1025px]:grid-cols-3">
            {custom.map((p) => (
              <li key={p.id}>
                <a
                  href={shopRouteHref(locale, { type: "product", id: p.id })}
                  className="flex h-full items-start gap-4 border border-rg-ink/15 p-5 transition-colors hover:border-rg-green"
                >
                  <CategoryIcon icon={getCategory(p.category).icon} className="mt-0.5 size-6 shrink-0 text-rg-green" />
                  <span>
                    <span className="block font-poppins text-lg font-medium leading-[1.3] text-rg-ink">
                      {shopCopy[locale].products[p.id].name}
                    </span>
                    <span className="mt-1 block font-figtree text-sm leading-5 text-rg-text">{shopCopy[locale].products[p.id].summary}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <QuoteBand locale={locale} />
    </>
  );
}

export function CategoryPage({ locale, id }: { locale: Locale; id: CategoryId }) {
  const { ui, categories: categoryCopy } = shopCopy[locale];
  const category = getCategory(id);
  const text = categoryCopy[id];
  const items = productsInCategory(id);
  return (
    <>
      <section className="bg-rg-gray py-12 min-[1025px]:py-16">
        <Container>
          <Breadcrumbs items={[home(locale), { label: text.name, href: shopRouteHref(locale, { type: "category", id }) }]} />
          <div className="mt-8 grid items-center gap-10 min-[1025px]:grid-cols-[1fr_480px]">
            <div>
              <span className="flex size-14 items-center justify-center rounded-full bg-rg-green/15 text-rg-green">
                <CategoryIcon icon={category.icon} className="size-7" />
              </span>
              <h1 className={`${h.h1} mt-6`}>{text.name}</h1>
              <p className="mt-6 font-poppins text-lg font-medium leading-[1.5] text-rg-text">{text.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={quoteHref(locale)} className={buttonStyles.primary}>{ui.cta.quote}</a>
                <a href={meetingHref(locale)} className={buttonStyles.outline}>{ui.cta.meeting}</a>
              </div>
            </div>
            {category.image && (
              <Image src={category.image} alt="" width={960} height={720} className="aspect-[4/3] w-full object-cover" sizes="(min-width: 1025px) 480px, 100vw" />
            )}
          </div>
        </Container>
      </section>

      <section className="py-16 min-[1025px]:py-20">
        <Container>
          <h2 className={h.h2}>{ui.sections.servicesIncluded}</h2>
          <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {text.services.map((s) => (
              <li key={s} className="flex gap-3 font-figtree text-base leading-6 text-rg-text">
                <Check className="mt-0.5 size-5 shrink-0 text-rg-green" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {items.length > 0 && (
        <section className="bg-rg-gray py-16 min-[1025px]:py-20">
          <Container>
            <h2 className={h.h2}>{ui.sections.solutions}</h2>
            <div className="mt-10 grid items-start gap-8 sm:grid-cols-2 min-[1025px]:grid-cols-3">
              {items.map((p) => (
                <ProductCard key={p.id} locale={locale} product={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-16 min-[1025px]:py-20">
        <Container>
          <h2 className={h.h2}>{ui.sections.otherCategories}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 min-[1025px]:grid-cols-4">
            {categories.filter((c) => c.id !== id).slice(0, 4).map((c) => (
              <CategoryCard key={c.id} locale={locale} category={c} />
            ))}
          </div>
        </Container>
      </section>

      <FormSection locale={locale} whatsappText={ui.whatsappMessage} />
      <JsonLd data={serviceJsonLd(locale, { type: "category", id })} />
    </>
  );
}

export function ProductPage({ locale, id }: { locale: Locale; id: ProductId }) {
  const { ui, categories: categoryCopy, products: productCopy } = shopCopy[locale];
  const product = getProduct(id);
  const text = productCopy[id];
  const category = getCategory(product.category);
  const related = productsInCategory(product.category).filter((p) => p.id !== id).slice(0, 3);
  const whatsappText = ui.whatsappProductMessage.replace("{product}", text.name);
  return (
    <>
      <section className="py-12 min-[1025px]:py-16">
        <Container>
          <Breadcrumbs
            items={[
              home(locale),
              { label: categoryCopy[product.category].name, href: shopRouteHref(locale, { type: "category", id: product.category }) },
              { label: text.name, href: shopRouteHref(locale, { type: "product", id }) },
            ]}
          />
          <div className="mt-8 max-w-[860px]">
            <p className="font-figtree text-sm font-semibold uppercase tracking-wide text-rg-green">{categoryCopy[product.category].name}</p>
            <h1 className={`${h.h1} mt-3`}>{text.name}</h1>
            <p className="mt-6 font-poppins text-lg font-medium leading-[1.5] text-rg-text">{text.summary}</p>
          </div>
          <div className="mt-8 grid items-start gap-10 min-[1025px]:grid-cols-[1fr_400px] min-[1025px]:gap-16">
            <div>
              {product.image ? (
                <Image src={product.image} alt="" width={1280} height={720} className="aspect-[16/9] w-full object-cover" sizes="(min-width: 1025px) 760px, 100vw" />
              ) : (
                <div className="flex aspect-[16/9] w-full items-center justify-center bg-rg-gray text-rg-green">
                  <CategoryIcon icon={category.icon} className="size-20" />
                </div>
              )}

              <h2 className={`${h.h2} mt-12`}>{ui.sections.problem}</h2>
              <p className={`${h.body} mt-4`}>{text.problem}</p>

              <h2 className={`${h.h2} mt-12`}>{ui.sections.features}</h2>
              <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {text.features.map((f) => (
                  <li key={f} className="flex gap-3 font-figtree text-base leading-6 text-rg-text">
                    <Check className="mt-0.5 size-5 shrink-0 text-rg-green" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <h2 className={`${h.h2} mt-12`}>{ui.sections.audience}</h2>
              <p className={`${h.body} mt-4`}>{text.audience}</p>

              {text.notes && (
                <>
                  <h2 className={`${h.h2} mt-12`}>{ui.sections.notes}</h2>
                  <ul className="mt-4 space-y-2">
                    {text.notes.map((n) => (
                      <li key={n} className={h.body}>{n}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            {/* Price and CTAs right under the title on mobile; sticky sidebar on desktop. */}
            <aside className="order-first min-[1025px]:sticky min-[1025px]:top-6 min-[1025px]:order-none">
              <ProductActions locale={locale} product={product} />
            </aside>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-rg-gray py-16 min-[1025px]:py-20">
          <Container>
            <h2 className={h.h2}>{ui.sections.relatedProducts}</h2>
            <div className="mt-10 grid items-start gap-8 sm:grid-cols-2 min-[1025px]:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} locale={locale} product={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <FormSection locale={locale} whatsappText={whatsappText} />
      <JsonLd data={serviceJsonLd(locale, { type: "product", id })} />
    </>
  );
}

export function ProductsPage({ locale }: { locale: Locale }) {
  const { pages } = shopCopy[locale];
  const t = pages.products;
  const priced = products.filter(hasFixedPrice);
  const custom = products.filter((p) => !hasFixedPrice(p));
  return (
    <>
      <section className="bg-rg-gray py-12 min-[1025px]:py-16">
        <Container>
          <Breadcrumbs items={[home(locale), { label: t.title, href: shopRouteHref(locale, { type: "products" }) }]} />
          <h1 className={`${h.h1} mt-8`}>{t.title}</h1>
          <p className="mt-4 font-poppins text-lg font-medium leading-[1.5] text-rg-text">{t.intro}</p>
        </Container>
      </section>
      {[
        { title: t.pricedTitle, items: priced },
        { title: t.customTitle, items: custom },
      ].map((group) => (
        <section key={group.title} className="py-14 min-[1025px]:py-20">
          <Container>
            <h2 className={h.h2}>{group.title}</h2>
            <div className="mt-10 grid items-start gap-8 sm:grid-cols-2 min-[1025px]:grid-cols-3">
              {group.items.map((p) => (
                <ProductCard key={p.id} locale={locale} product={p} />
              ))}
            </div>
          </Container>
        </section>
      ))}
      <QuoteBand locale={locale} />
    </>
  );
}

export function ContactPage({ locale }: { locale: Locale }) {
  const { ui, pages } = shopCopy[locale];
  const t = pages.contact;
  return (
    <>
      <section className="bg-rg-gray py-12 min-[1025px]:py-16">
        <Container>
          <Breadcrumbs items={[home(locale), { label: t.title, href: shopRouteHref(locale, { type: "contact" }) }]} />
          <h1 className={`${h.h1} mt-8`}>{t.title}</h1>
          <p className="mt-4 font-poppins text-lg font-medium leading-[1.5] text-rg-text">{t.intro}</p>
        </Container>
      </section>
      <section id="form" className="scroll-mt-6 py-16 min-[1025px]:py-20">
        <Container className="max-w-[900px]">
          <h2 className={h.h2}>{ui.form.title}</h2>
          <p className={`${h.body} mt-3`}>{ui.form.intro}</p>
          <div className="mt-8">
            <CrmForm locale={locale} ui={ui} whatsappText={ui.whatsappMessage} />
          </div>
        </Container>
      </section>
      <section id="meeting" className="scroll-mt-6 bg-rg-green py-16 text-white min-[1025px]:py-20">
        <Container className="max-w-[900px] text-center">
          <h2 className="font-poppins text-[28px] font-semibold leading-[1.2] min-[1025px]:text-[40px]">{t.meetingTitle}</h2>
          <p className="mx-auto mt-4 max-w-[640px] font-figtree text-base leading-6">{t.meetingBody}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={meetingHref(locale)} className={buttonStyles.outlineLight}>
              <CalendarDays className="size-5" aria-hidden="true" />
              {ui.cta.meeting}
            </a>
            <a href={whatsappHref(ui.whatsappMessage)} target="_blank" rel="noopener noreferrer" className={buttonStyles.whatsapp}>
              <MessageCircle className="size-5" aria-hidden="true" />
              {ui.cta.whatsapp}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
