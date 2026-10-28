import type { Locale } from "@/i18n/config";
import type { ShopCopy } from "../types";
import { de } from "./de";
import { en } from "./en";
import { es } from "./es";

export const shopCopy: Record<Locale, ShopCopy> = { en, es, de };
