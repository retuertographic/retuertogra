import Image from "next/image";
import { ArrowRight, CalendarDays, Check } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { categories, getCategory, getProduct, hasFixedPrice, products, productsInCategory } from "@/shop/catalog";
import { shopCopy } from "@/shop/i18n";
import { shopRouteHref } from "@/shop/routes";
import type { CategoryId, ProductId } from "@/shop/types";
import { Breadcrumbs, type Crumb } from "./breadcrumbs";
import { categoryCardData, productCardData } from "./card-data";
import { CrmForm } from "./crm-form";
import { JsonLd } from "./json-ld";
import { meetingHref, quoteHref, whatsappHref } from "./links";
import { ProductActions } from "./product-actions";
import { ProductCard } from "./product-card";
import { ShopCta } from "./shop-home";
import { serviceJsonLd } from "./structured-data";
import { btn, card, Container, Eyebrow, Icon, IconCircle, text, WhatsAppIcon } from "./ui";

const home = (locale: Locale): Crumb => ({
  label: shopCopy[locale].ui.breadcrumbHome,
  href: shopRouteHref(locale, { type: "home" }),
});

function PageIntro({ crumbs, eyebrow, title, intro, children }: { crumbs: Crumb[]; eyebrow?: string; title: string; intro?: string; children?: React.ReactNode }) {
  return (
    <section className="bg-surface py-10 min-[1025px]:py-16">
      <Container>
        <Breadcrumbs items={crumbs} />
        {eyebrow && <Eyebrow className="mt-8">{eyebrow}</Eyebrow>}
        <h1 className={cn(text.h1, eyebrow ? "mt-3" : "mt-8", "max-w-[900px]")}>{title}</h1>
        {intro && <p className={cn(text.body, "mt-5 max-w-[760px]")}>{intro}</p>}
        {children}
      </Container>
    </section>
  );
}

function ProductGrid({ locale, ids }: { locale: Locale; ids: ProductId[] }) {
  return (
    <div className="grid gap-4 min-[640px]:grid-cols-2 min-[1025px]:grid-cols-3 min-[1025px]:gap-6">
      {ids.map((id) => (
        <ProductCard key={id} data={productCardData(locale, getProduct(id))} />
      ))}
    </div>
  );
}

function FormSection({ locale, whatsappText }: { locale: Locale; whatsappText: string }) {
  const { ui } = shopCopy[locale];
  return (
    <section id="form" className="scroll-mt-24 bg-surface py-10 min-[1025px]:py-24">
      <Container className="max-w-[900px]">
        <h2 className={text.h2}>{ui.form.title}</h2>
        <p className={cn(text.body, "mt-3")}>{ui.form.intro}</p>
        <div className="mt-8">
          <CrmForm locale={locale} ui={ui} whatsappText={whatsappText} />
        </div>
      </Container>
    </section>
  );
}

function CategoryGrid({ locale, exclude }: { locale: Locale; exclude?: CategoryId }) {
  return (
    <div className="grid grid-cols-2 gap-3 min-[1025px]:grid-cols-4 min-[1025px]:gap-5">
      {categories
        .filter((c) => c.id !== exclude)
        .slice(0, 4)
        .map((c) => {
          const data = categoryCardData(locale, c);
          return (
            <a key={c.id} href={data.href} className={cn(card, "group flex flex-col p-4 min-[1025px]:p-6")}>
              <IconCircle name={data.icon} />
              <h3 className={cn(text.h3, "mt-4 hyphens-auto break-words")}>{data.name}</h3>
              <p className="mt-1.5 hidden font-figtree text-sm leading-[1.5] text-muted min-[1025px]:block">{data.summary}</p>
            </a>
          );
        })}
    </div>
  );
}

export function CategoryPage({ locale, id }: { locale: Locale; id: CategoryId }) {
  const { ui, categories: categoryCopy } = shopCopy[locale];
  const category = getCategory(id);
  const t = categoryCopy[id];
  const items = productsInCategory(id);
  return (
    <>
      <section className="bg-surface py-10 min-[1025px]:py-16">
        <Container>
          <Breadcrumbs items={[home(locale), { label: t.name, href: shopRouteHref(locale, { type: "category", id }) }]} />
          <div className="mt-8 grid items-center gap-10 min-[1025px]:grid-cols-[1fr_440px]">
            <div>
              <IconCircle name={category.icon} />
              <h1 className={cn(text.h1, "mt-5")}>{t.name}</h1>
              <p className={cn(text.body, "mt-5")}>{t.description}</p>
              <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row">
                <a href={quoteHref(locale)} className={btn.primary}>{ui.cta.quote}</a>
                <a href={meetingHref(locale)} className={btn.secondary}>{ui.cta.meeting}</a>
              </div>
            </div>
            {category.image && (
              <div className="relative mx-auto aspect-square w-full max-w-[440px] overflow-hidden rounded-full ring-[10px] ring-white">
                <Image src={category.image} alt="" fill className="object-cover" sizes="(min-width: 1025px) 440px, 90vw" />
              </div>
            )}
          </div>
        </Container>
      </section>

      <section className="py-10 min-[1025px]:py-24">
        <Container>
          <h2 className={text.h2}>{ui.sections.servicesIncluded}</h2>
          <ul className="mt-8 grid gap-x-10 gap-y-4 min-[640px]:grid-cols-2">
            {t.services.map((s) => (
              <li key={s} className="flex gap-3 font-figtree text-[15px] leading-[1.55] text-muted min-[1025px]:text-[17px]">
                <Check className="mt-0.5 size-5 shrink-0 text-brand" strokeWidth={1.8} aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {items.length > 0 && (
        <section className="bg-surface py-10 min-[1025px]:py-24">
          <Container>
            <h2 className={text.h2}>{ui.sections.solutions}</h2>
            <div className="mt-8 min-[1025px]:mt-12">
              <ProductGrid locale={locale} ids={items.map((p) => p.id)} />
            </div>
          </Container>
        </section>
      )}

      <section className="py-10 min-[1025px]:py-24">
        <Container>
          <h2 className={text.h2}>{ui.sections.otherCategories}</h2>
          <div className="mt-8 min-[1025px]:mt-12">
            <CategoryGrid locale={locale} exclude={id} />
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
  const t = productCopy[id];
  const card = productCardData(locale, product);
  const related = productsInCategory(product.category).filter((p) => p.id !== id).slice(0, 3);
  const whatsappText = ui.whatsappProductMessage.replace("{product}", t.name);
  return (
    <>
      <section className="bg-surface pb-8 pt-10 min-[1025px]:pb-12 min-[1025px]:pt-16">
        <Container>
          <Breadcrumbs
            items={[
              home(locale),
              { label: categoryCopy[product.category].name, href: shopRouteHref(locale, { type: "category", id: product.category }) },
              { label: t.name, href: shopRouteHref(locale, { type: "product", id }) },
            ]}
          />
          <div className="mt-8 max-w-[860px]">
            <Eyebrow>{categoryCopy[product.category].shortName}</Eyebrow>
            <h1 className={cn(text.h1, "mt-3")}>{t.name}</h1>
            <p className={cn(text.body, "mt-5")}>{t.summary}</p>
          </div>
        </Container>
      </section>

      <section className="py-10 min-[1025px]:py-16">
        <Container>
          <div className="grid items-start gap-10 min-[1025px]:grid-cols-[1fr_380px] min-[1025px]:gap-16">
            <div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-[20px] border border-line">
                {product.image ? (
                  <Image src={product.image} alt="" fill className="object-cover" sizes="(min-width: 1025px) 760px, 100vw" />
                ) : (
                  <div
                    className={cn(
                      "flex size-full items-center justify-center",
                      card.placeholder.tone === "brand"
                        ? "bg-[radial-gradient(circle_at_30%_20%,#a6d46a_0%,var(--brand)_45%,var(--brand-dark)_100%)] text-white"
                        : "bg-[radial-gradient(circle_at_70%_30%,#3a3a3a_0%,var(--ink)_60%,#141414_100%)] text-brand",
                    )}
                  >
                    <span className="flex size-24 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">
                      <Icon name={card.placeholder.icon} className="size-10" />
                    </span>
                  </div>
                )}
              </div>

              <h2 className={cn(text.h2, "mt-12")}>{ui.sections.problem}</h2>
              <p className={cn(text.body, "mt-4")}>{t.problem}</p>

              <h2 className={cn(text.h2, "mt-12")}>{ui.sections.features}</h2>
              <ul className="mt-6 grid gap-x-8 gap-y-3 min-[640px]:grid-cols-2">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3 font-figtree text-[15px] leading-[1.55] text-muted min-[1025px]:text-[17px]">
                    <Check className="mt-0.5 size-5 shrink-0 text-brand" strokeWidth={1.8} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <h2 className={cn(text.h2, "mt-12")}>{ui.sections.audience}</h2>
              <p className={cn(text.body, "mt-4")}>{t.audience}</p>

              {t.notes && (
                <>
                  <h2 className={cn(text.h2, "mt-12")}>{ui.sections.notes}</h2>
                  <ul className="mt-4 space-y-2">
                    {t.notes.map((n) => (
                      <li key={n} className={text.body}>{n}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            {/* Price and CTAs right under the title on mobile; sticky sidebar on desktop. */}
            <aside className="order-first min-[1025px]:sticky min-[1025px]:top-28 min-[1025px]:order-none">
              <ProductActions locale={locale} product={product} />
            </aside>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-surface py-10 min-[1025px]:py-24">
          <Container>
            <h2 className={text.h2}>{ui.sections.relatedProducts}</h2>
            <div className="mt-8 min-[1025px]:mt-12">
              <ProductGrid locale={locale} ids={related.map((p) => p.id)} />
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
  const groups = [
    { title: t.pricedTitle, ids: products.filter(hasFixedPrice).map((p) => p.id) },
    { title: t.customTitle, ids: products.filter((p) => !hasFixedPrice(p)).map((p) => p.id) },
  ];
  return (
    <>
      <PageIntro crumbs={[home(locale), { label: t.title, href: shopRouteHref(locale, { type: "products" }) }]} title={t.title} intro={t.intro} />
      {groups.map((group, i) => (
        <section key={group.title} className={cn("py-10 min-[1025px]:py-24", i % 2 === 1 && "bg-surface")}>
          <Container>
            <h2 className={text.h2}>{group.title}</h2>
            <div className="mt-8 min-[1025px]:mt-12">
              <ProductGrid locale={locale} ids={group.ids} />
            </div>
          </Container>
        </section>
      ))}
      <div className="pt-10 min-[1025px]:pt-0">
        <ShopCta locale={locale} />
      </div>
    </>
  );
}

export function ContactPage({ locale }: { locale: Locale }) {
  const { ui, pages } = shopCopy[locale];
  const t = pages.contact;
  return (
    <>
      <PageIntro crumbs={[home(locale), { label: t.title, href: shopRouteHref(locale, { type: "contact" }) }]} title={t.title} intro={t.intro} />
      <section id="form" className="scroll-mt-24 py-10 min-[1025px]:py-24">
        <Container className="max-w-[900px]">
          <h2 className={text.h2}>{ui.form.title}</h2>
          <p className={cn(text.body, "mt-3")}>{ui.form.intro}</p>
          <div className="mt-8">
            <CrmForm locale={locale} ui={ui} whatsappText={ui.whatsappMessage} />
          </div>
        </Container>
      </section>
      <section id="meeting" className="scroll-mt-24 pb-10 min-[1025px]:pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-[28px] bg-ink px-6 py-10 text-center min-[1025px]:px-14 min-[1025px]:py-16">
            <span aria-hidden="true" className="absolute -bottom-32 -right-24 size-[340px] rounded-full bg-brand" />
            <div className="relative">
              <h2 className={cn(text.h2, "text-white")}>{t.meetingTitle}</h2>
              <p className="mx-auto mt-4 max-w-[640px] font-figtree text-[15px] leading-[1.55] text-white/70 min-[1025px]:text-[17px]">{t.meetingBody}</p>
              <div className="mt-8 flex flex-col justify-center gap-3 min-[480px]:flex-row">
                <a href={meetingHref(locale)} className={btn.light}>
                  <CalendarDays className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
                  {ui.cta.meeting}
                </a>
                <a href={whatsappHref(ui.whatsappMessage)} target="_blank" rel="noopener noreferrer" className={cn(btn.dark, "border border-white/15")}>
                  <WhatsAppIcon className="size-[18px] text-wa" />
                  {ui.cta.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <a href={shopRouteHref(locale, { type: "home" })} className="sr-only">
        {ui.breadcrumbHome}
        <ArrowRight aria-hidden="true" />
      </a>
    </>
  );
}
