"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BUSINESS, CRM_ORIGIN, crmFormIds } from "@/config/site";
import type { Locale } from "@/i18n/config";
import type { ShopUi } from "@/shop/types";
import { whatsappHref } from "./links";

/**
 * CRM form (crmapi.retuertographicdesign.com), same contract as the one used on
 * retuertoyasociados.com: an iframe per locale whose height follows the
 * `{ height }` message the form posts. Without a form id it shows contact options.
 */
export function CrmForm({ locale, ui, whatsappText }: { locale: Locale; ui: ShopUi; whatsappText: string }) {
  const formId = crmFormIds[locale];
  const frame = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(680);

  useEffect(() => {
    if (!formId) return;
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== CRM_ORIGIN || event.source !== frame.current?.contentWindow) return;
      if (typeof event.data?.height === "number") setHeight(Math.ceil(event.data.height));
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [formId]);

  if (formId) {
    return (
      <iframe
        ref={frame}
        src={`${CRM_ORIGIN}/form/${formId}`}
        title={ui.form.iframeTitle}
        loading="lazy"
        scrolling="no"
        onLoad={() => frame.current?.contentWindow?.postMessage({ tipo: "pedir-alto" }, CRM_ORIGIN)}
        style={{ height }}
        className="w-full border-0"
      />
    );
  }

  const item = "flex items-center gap-3 rounded-[3px] border border-rg-ink/15 bg-white p-4 font-figtree text-base text-rg-ink transition-colors hover:border-rg-green";
  return (
    <div>
      <p className="font-figtree text-base leading-6 text-rg-text">{ui.form.fallback}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <a href={`mailto:${BUSINESS.email}`} className={item}>
          <Mail className="size-5 shrink-0 text-rg-green" aria-hidden="true" />
          <span>
            <span className="block text-sm text-rg-text">{ui.form.email}</span>
            {BUSINESS.email}
          </span>
        </a>
        <a href={whatsappHref(whatsappText)} className={item} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="size-5 shrink-0 text-[#25d366]" aria-hidden="true" />
          <span>
            <span className="block text-sm text-rg-text">{ui.form.whatsapp}</span>
            +34 922 971 723
          </span>
        </a>
        <a href={`tel:${BUSINESS.phoneEs}`} className={item}>
          <Phone className="size-5 shrink-0 text-rg-green" aria-hidden="true" />
          <span>
            <span className="block text-sm text-rg-text">{ui.form.phone}</span>
            +34 922 971 723
          </span>
        </a>
      </div>
    </div>
  );
}
