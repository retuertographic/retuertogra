import Image from "next/image";
import Link from "next/link";
import { ASSET_BASE, SOURCE_ORIGIN, footerInfoLinks } from "./data";
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

export function SiteFooter() {
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
          <p className={`${contactItem} mt-12`}>
            Our goal is to create insightful and content that you can put to
            work in personal and professional life.
          </p>
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
          <h4 className={heading}>Quick link</h4>
          <ul className="mt-5 flex flex-col gap-4">
            <li>
              <Link href="/" className={greenLink}>Home</Link>
            </li>
            <li>
              <a href={`${SOURCE_ORIGIN}/shop/`} className={greenLink}>Shop</a>
            </li>
          </ul>
          <h4 className={`${heading} mt-[30px]`}>Payments</h4>
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
          <h4 className={heading}>Information</h4>
          <ul className="mt-5 flex flex-col gap-4">
            {footerInfoLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={greenLink}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={heading}>Connect</h4>
          <ul className="mt-5 flex flex-col gap-5">
            <li className={contactItem}>
              C. de Calderón de la Barca, 2, Oficina 3, 38005 Santa Cruz de Tenerife
            </li>
            <li>
              <a href="tel:0034922971723" className={contactItem}>
                ES Phone: 0034 922971723 (whatsapp)
              </a>
            </li>
            <li>
              <a href="tel:00493031878629" className={contactItem}>
                DE Phone: 0049 30 31878629
              </a>
            </li>
            <li>
              <a href="mailto:info@retuertographicdesign.com" className={contactItem}>
                Email: info@retuertographicdesign.com
              </a>
            </li>
            <li>
              <a href="mailto:info@retuertographicdesign.com" className={contactItem}>
                Office hours: 9:00 -15:00 M-F
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-[10px] border-t border-[#ddd] pt-9 pb-[37px] text-center">
        <p className="font-inter text-[14.4px] leading-[1.2] text-rg-text">
          © 2026 Copyright all right reserved.
        </p>
        <ul className="mt-[59px] flex justify-center gap-5 text-[#444]">
          <li className="flex items-center gap-2">
            <Image src={`${ASSET_BASE}/flag-en.svg`} alt="" width={18} height={12} />
            English
          </li>
          <li>
            <a href={`${SOURCE_ORIGIN}/es/`} className="flex items-center gap-2 hover:text-rg-green">
              <Image src={`${ASSET_BASE}/flag-es.svg`} alt="" width={18} height={12} />
              Español (Spanish)
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
