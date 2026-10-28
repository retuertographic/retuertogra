import { Bot, Code, MapPin, Megaphone, Palette, QrCode, Smartphone, Wrench } from "lucide-react";
import type { Category } from "@/shop/types";

const icons = {
  bot: Bot,
  smartphone: Smartphone,
  code: Code,
  map: MapPin,
  qr: QrCode,
  megaphone: Megaphone,
  palette: Palette,
  wrench: Wrench,
} satisfies Record<Category["icon"], unknown>;

export function CategoryIcon({ icon, className }: { icon: Category["icon"]; className?: string }) {
  const Icon = icons[icon];
  return <Icon className={className} aria-hidden="true" strokeWidth={1.6} />;
}
