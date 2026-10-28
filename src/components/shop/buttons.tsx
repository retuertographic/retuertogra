import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[3px] px-6 py-3 text-center font-figtree text-base leading-6 transition-colors";

export const buttonStyles = {
  primary: cn(base, "border border-rg-green bg-rg-green text-white hover:bg-rg-green-dark"),
  navy: cn(base, "bg-rg-navy text-white hover:bg-rg-navy/90"),
  outline: cn(base, "border border-rg-ink text-rg-ink hover:bg-rg-ink hover:text-white"),
  outlineLight: cn(base, "border border-white text-white hover:bg-white hover:text-rg-ink"),
  whatsapp: cn(base, "bg-[#25d366] text-white hover:bg-[#1ebe5a]"),
};
