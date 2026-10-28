import Image from "next/image";
import { ASSET_BASE, mapAddress } from "./data";
import { type Dictionary, type Locale, languages, localeHref, locales } from "./i18n";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MastercardIcon,
  VisaIcon,
  XTwitterIcon,
} from "./icons";

const socials = [
  { label: "Facebook", Icon: FacebookIcon },
  { label: "Instagram", Icon: InstagramIcon },
  { label: "X", Icon: XTwitterIcon },
  { label: "LinkedIn", Icon: LinkedInIcon },
];

const heading = "font-poppins text-2xl font-semibold leading-[1] text-rg-ink";
const greenLink = "font-figtree text-base leading-6 text-rg-green hover:text-rg-ink";
const contactItem = "font-figtree text-base leading-6 text-rg-text";

export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.footer;
  return (
    <footer className="bg-white">
      <div className="mx-auto grid max-w-[1120px] gap-12 px-6 pt-20 pb-[54px] min-[1025px]:grid-cols-[399px_228px_228px_265px] min-[1025px]:gap-0 min-[1025px]:px-0">
        <div className="min-[1025px]:pr-[89px]">
          <Image
            src={`${ASSET_BASE}/logo.png`}
            alt="Retuerto Graphic Design"
            width={310}
            height={98}
            className="h-auto w-[310px]"
          />
          <p className={`${contactItem} mt-12`}>{t.about}</p>
          <div className="mt-[39px] flex gap-3">
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex size-11 items-center justify-center rounded-full bg-rg-ink text-rg-green transition-transform hover:scale-90"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className={heading}>{t.quickLinks}</h4>
          <ul className="mt-5 flex flex-col gap-4">
            <li>
              <a href={localeHref(locale)} className={greenLink}>{t.home}</a>
            </li>
            <li>
              <a href={t.shop.href} className={greenLink}>{t.shop.label}</a>
            </li>
          </ul>
          <h4 className={`${heading} mt-[30px]`}>{t.payments}</h4>
          <div className="mt-[25px] flex gap-3">
            {[VisaIcon, MastercardIcon].map((Icon, i) => (
              <span
                key={i}
                className="flex size-11 items-center justify-center rounded-full bg-rg-slate text-white"
              >
                <Icon className="size-5" />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className={heading}>{t.information}</h4>
          <ul className="mt-5 flex flex-col gap-4">
            {t.infoLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={greenLink}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={heading}>{t.connect}</h4>
          <ul className="mt-5 flex flex-col gap-5">
            <li className={contactItem}>
              {mapAddress}
            </li>
            <li>
              <a href="tel:0034922971723" className={contactItem}>
                {t.esPhone}
              </a>
            </li>
            <li>
              <a href="tel:00493031878629" className={contactItem}>
                {t.dePhone}
              </a>
            </li>
            <li>
              <a href="mailto:info@retuertographicdesign.com" className={contactItem}>
                {t.email}
              </a>
            </li>
            <li>
              <a href="mailto:info@retuertographicdesign.com" className={contactItem}>
                {t.hours}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-[10px] border-t border-[#ddd] pt-9 pb-[37px] text-center">
        <p className="font-inter text-[14.4px] leading-[1.2] text-rg-text">
          {t.copyright}
        </p>
        <ul className="mt-[59px] flex flex-wrap justify-center gap-x-5 gap-y-2 text-[#444]">
          {locales.map((l) => {
            const label =
              l === locale
                ? languages[l].nativeName
                : `${languages[l].nativeName} (${languages[l].names[locale]})`;
            const content = (
              <>
                <Image src={`${ASSET_BASE}/${languages[l].flag}`} alt="" width={18} height={12} />
                {label}
              </>
            );
            return (
              <li key={l}>
                {l === locale ? (
                  <span className="flex items-center gap-2" aria-current="page">{content}</span>
                ) : (
                  <a href={localeHref(l)} hrefLang={l} lang={l} className="flex items-center gap-2 hover:text-rg-green">
                    {content}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
