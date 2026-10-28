import { cn } from "@/lib/utils";
import { btn, WhatsAppIcon } from "./ui";

/** Fixed bottom bar on mobile (spec #12): replaces the floating WhatsApp bubble. */
export function MobileCtaBar({ quoteHref, quoteLabel, whatsappHref }: { quoteHref: string; quoteLabel: string; whatsappHref: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 backdrop-blur min-[1025px]:hidden">
      <div className="mx-auto grid max-w-[600px] grid-cols-2 gap-3">
        <a href={quoteHref} className={cn(btn.primary, "px-3")}>{quoteLabel}</a>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={cn(btn.secondary, "border-line px-3 hover:border-ink hover:bg-white hover:text-ink")}>
          <WhatsAppIcon className="size-5 text-wa" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
