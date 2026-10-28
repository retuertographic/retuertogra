import type { PostMeta } from "@/blog/content";
import { blogUi } from "@/blog/registry";
import type { Locale } from "@/i18n/config";
import { getCategory } from "@/shop/catalog";
import { shopCopy } from "@/shop/i18n";
import type { CategoryId } from "@/shop/types";
import type { IconKey } from "@/components/shop/ui";

/** Serializable article card data (used by server and client components). */
export type PostCardData = {
  id: string;
  href: string;
  title: string;
  description: string;
  category: CategoryId;
  categoryLabel: string;
  icon: IconKey;
  image?: string;
  date: string;
  dateLabel: string;
  minutesLabel: string;
};

export const formatDate = (locale: Locale, iso: string) =>
  new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(iso));

export function postCardData(locale: Locale, post: PostMeta): PostCardData {
  return {
    id: post.id,
    href: post.href,
    title: post.title,
    description: post.description,
    category: post.category,
    categoryLabel: shopCopy[locale].categories[post.category].shortName,
    icon: getCategory(post.category).icon,
    image: post.image,
    date: post.date,
    dateLabel: formatDate(locale, post.date),
    minutesLabel: blogUi[locale].minRead.replace("{n}", String(post.minutes)),
  };
}
