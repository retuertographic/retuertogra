import { Bot, Code, Mail, MapPin, Megaphone, Palette, QrCode, Smartphone, TrendingUp, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

// Shop design system (spec "Rediseño UI · /tienda"). Colors come from the
// --brand/--ink/... variables defined on .shop-ui (globals.css).

const pill =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-center font-figtree text-[15px] font-semibold leading-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export const btn = {
  primary: cn(pill, "bg-brand text-white hover:bg-brand-dark"),
  secondary: cn(pill, "border border-ink bg-transparent text-ink hover:bg-ink hover:text-white"),
  dark: cn(pill, "bg-ink text-white hover:bg-black"),
  light: cn(pill, "bg-white text-ink hover:bg-brand-soft"),
  darkOutline: cn(pill, "border border-white/25 bg-white/5 text-white hover:bg-white/10"),
};

export const chip = {
  base: "inline-flex h-9 shrink-0 items-center rounded-full px-4 font-figtree text-sm font-medium transition-colors",
  active: "bg-ink text-white",
  idle: "border border-line bg-white text-ink hover:border-ink",
};

export const card =
  "rounded-[20px] border border-line bg-white transition-[border-color,box-shadow] duration-200 hover:border-brand hover:shadow-[0_10px_30px_-12px_rgba(132,188,65,0.45)]";

export const text = {
  h1: "font-poppins text-[33px] font-bold leading-[1.08] tracking-[-0.01em] text-ink min-[1025px]:text-[58px]",
  h2: "font-poppins text-[24px] font-bold leading-[1.15] text-ink min-[1025px]:text-[40px]",
  h3: "font-poppins text-[17px] font-semibold leading-[1.3] text-ink min-[1025px]:text-[19px]",
  body: "font-figtree text-[15px] leading-[1.55] text-muted min-[1025px]:text-[17px]",
  small: "font-figtree text-[15px] leading-[1.5] text-muted",
};

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-4 min-[1025px]:px-6", className)}>{children}</div>;
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("eyebrow", className)}>{children}</p>;
}

export type IconKey = "bot" | "smartphone" | "code" | "map" | "qr" | "megaphone" | "palette" | "wrench" | "mail" | "trending";

const icons = {
  bot: Bot,
  smartphone: Smartphone,
  code: Code,
  map: MapPin,
  qr: QrCode,
  megaphone: Megaphone,
  palette: Palette,
  wrench: Wrench,
  mail: Mail,
  trending: TrendingUp,
} satisfies Record<IconKey, unknown>;

export function Icon({ name, className }: { name: IconKey; className?: string }) {
  const Component = icons[name];
  return <Component className={className} strokeWidth={1.8} aria-hidden="true" />;
}

/** 48px icon circle: --brand-soft background, --brand-dark icon. */
export function IconCircle({ name, className, size = "md" }: { name: IconKey; className?: string; size?: "sm" | "md" }) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-dark",
        size === "md" ? "size-12" : "size-10",
        className,
      )}
    >
      <Icon name={name} className={size === "md" ? "size-[22px]" : "size-5"} />
    </span>
  );
}

/** WhatsApp glyph (brand icon). */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.43-9.44 9.43m8.03-17.46A11.27 11.27 0 0 0 12.05.72C5.8.72.7 5.82.7 12.08c0 2 .52 3.95 1.52 5.67L.6 23.28l5.66-1.49a11.3 11.3 0 0 0 5.78 1.47h.01c6.26 0 11.36-5.1 11.36-11.36 0-3.03-1.18-5.89-3.33-8.04" />
    </svg>
  );
}
