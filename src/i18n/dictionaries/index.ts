import type { Locale } from "../config";
import { de } from "./de";
import { en } from "./en";
import { es } from "./es";
import type { Dictionary } from "./types";

export type { Dictionary, NavItem } from "./types";

export const dictionaries: Record<Locale, Dictionary> = { en, es, de };
