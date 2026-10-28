import Image from "next/image";
import { FacebookIcon, InstagramIcon, LinkedInIcon, XTwitterIcon } from "@/components/layout/icons";
import type { Alternates } from "@/components/layout/site-header";
import { ASSET_BASE, BUSINESS, SOCIAL_LINKS, mapAddress } from "@/config/site";
import { type Locale, locales } from "@/i18n/config";
import { dictionaries } from "@/i18n/dictionaries";
import { siteHref } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { categories } from "@/shop/catalog";
import { shopCopy } from "@/shop/i18n";
import { shopRouteHref } from "@/shop/routes";
import { Container } from "./ui";

const socialIcons = { facebook: FacebookIcon, instagram: InstagramIcon, x: XTwitterIcon, linkedin: LinkedInIcon };
const heading = "font-poppins text-base font-semibold text-ink";
const link = "font-figtree text-[15px] leading-6 text-muted transition-colors hover:text-brand-dark";

/** Shop footer (spec #13): --surface background, 4 columns, no empty payment icons. */
export function ShopFooter({ locale, alternates }: { locale: Locale; alternates: Alternates }) {
  const { footer } = dictionaries[locale];
  const { ui, categories: categoryCopy } = shopCopy[locale];
  const socials = SOCIAL_LINKS.filter((s) => s.url);

  return (
    <footer className="bg-surface pb-[88px] min-[1025px]:pb-0">
      <Container className="grid gap-10 py-14 min-[640px]:grid-cols-2 min-[1025px]:grid-cols-[1.4fr_1fr_1fr_1.2fr] min-[1025px]:gap-12 min-[1025px]:py-20">
        <div>
          <a href={siteHref(locale)} aria-label="Retuerto Graphic Design">
            <Image src={`${ASSET_BASE}/logo.png`} alt="Retuerto Graphic Design" width={310} height={98} className="h-auto w-[150px]" />
          </a>
          <p className={cn(link, "mt-5 max-w-[320px] hover:text-muted")}>{footer.about}</p>
          {socials.length > 0 && (
            <ul className="mt-6 flex gap-2.5">
              {socials.map(({ network, url }) => {
                const Icon = socialIcons[network];
                return (
                  <li key={network}>
                    <a
                      href={url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={network}
                      className="flex size-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-brand hover:text-brand-dark"
                    >
                      <Icon className="size-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div>
          <h2 className={heading}>{ui.services}</h2>
          <ul className="mt-4 space-y-2">
            {categories.map((c) => (
              <li key={c.id}>
                <a href={shopRouteHref(locale, { type: "category", id: c.id })} className={link}>
                  {categoryCopy[c.id].shortName}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={heading}>{footer.information}</h2>
          <ul className="mt-4 space-y-2">
            {footer.infoLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={link}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={heading}>{ui.contact}</h2>
          <ul className="mt-4 space-y-2">
            <li className={cn(link, "hover:text-muted")}>{mapAddress}</li>
            <li>
              <a href={`tel:${BUSINESS.phoneEs}`} className={link}>{footer.esPhone}</a>
            </li>
            <li>
              <a href={`tel:${BUSINESS.phoneDe}`} className={link}>{footer.dePhone}</a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`} className={link}>{footer.email}</a>
            </li>
            <li className={cn(link, "hover:text-muted")}>{footer.hours}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 min-[640px]:flex-row">
          <p className="font-figtree text-sm text-muted">{footer.copyright}</p>
          <ul className="flex items-center gap-2 font-figtree text-sm font-semibold uppercase">
            {locales.map((l, i) => (
              <li key={l} className="flex items-center gap-2">
                {i > 0 && <span className="text-line" aria-hidden="true">·</span>}
                {l === locale ? (
                  <span className="text-brand-dark" aria-current="page">{l}</span>
                ) : (
                  <a href={alternates[l]} hrefLang={l} lang={l} className="text-muted hover:text-ink">{l}</a>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
