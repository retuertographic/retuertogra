import fs from "node:fs";
import path from "node:path";
import { Marked, type Tokens } from "marked";
import { ASSET_BASE } from "@/config/site";
import { type Locale, locales } from "@/i18n/config";
import { getTerm } from "@/glossary/terms";
import { getProduct } from "@/shop/catalog";
import { shopRouteHref } from "@/shop/routes";
import type { CategoryId, ProductId } from "@/shop/types";
import { blogHref, glossaryHref } from "./registry";

// Blog articles: src/content/blog/<locale>/<slug>.md, read at build time.
//
// Front matter (one "key: value" per line):
//   id        shared by the translations of the same article
//   title, description, date (YYYY-MM-DD), category (shop category id)
//   product   related shop product id (optional)
//   image     file in public/sites/retuertographicdesign/images (optional)
//
// In the body:
//   [[visible text|term-id]]   glossary term (definition on hover / tap)
//   [text](product:<id>)  [text](category:<id>)  [text](post:<id>)  [text](glossary:<id>)

export type PostMeta = {
  id: string;
  slug: string;
  locale: Locale;
  title: string;
  description: string;
  date: string;
  category: CategoryId;
  product?: ProductId;
  image?: string;
  minutes: number;
  href: string;
};

export type Post = PostMeta & { html: string; headings: { id: string; text: string }[]; terms: string[] };

const dir = (locale: Locale) => path.join(process.cwd(), "src", "content", "blog", locale);

function parse(file: string): { data: Record<string, string>; body: string } {
  const source = fs.readFileSync(file, "utf8");
  const match = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error(`Missing front matter in ${file}`);
  const data = Object.fromEntries(
    match[1]
      .split("\n")
      .filter((line) => line.includes(":"))
      .map((line) => {
        const i = line.indexOf(":");
        return [line.slice(0, i).trim(), line.slice(i + 1).trim().replace(/^"(.*)"$/, "$1")];
      }),
  );
  return { data, body: match[2] };
}

const cache = new Map<Locale, Post[]>();

/** All articles of a language, newest first. */
export function allPosts(locale: Locale): Post[] {
  const cached = cache.get(locale);
  if (cached) return cached;
  const files = fs.existsSync(dir(locale)) ? fs.readdirSync(dir(locale)).filter((f) => f.endsWith(".md")) : [];
  const posts = files
    .map((f) => render(locale, f.replace(/\.md$/, ""), parse(path.join(dir(locale), f))))
    .sort((a, b) => b.date.localeCompare(a.date));
  cache.set(locale, posts);
  return posts;
}

export const postMetas = (locale: Locale): PostMeta[] =>
  allPosts(locale).map(({ html: _html, headings: _h, terms: _t, ...meta }) => meta); // eslint-disable-line @typescript-eslint/no-unused-vars

export const getPost = (locale: Locale, slug: string) => allPosts(locale).find((p) => p.slug === slug);

/** URL of the same article in every language (falls back to the blog index). */
export function postAlternates(id: string): Record<Locale, string> {
  return Object.fromEntries(
    locales.map((l) => [l, allPosts(l).find((p) => p.id === id)?.href ?? blogHref(l)]),
  ) as Record<Locale, string>;
}

const escapeAttr = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function render(locale: Locale, slug: string, { data, body }: { data: Record<string, string>; body: string }): Post {
  const terms: string[] = [];

  // [[text|term-id]] → glossary link carrying its definition for the popover.
  const withTerms = body.replace(/\[\[([^\]|]+)\|([a-z0-9-]+)\]\]/g, (_, label: string, id: string) => {
    const term = getTerm(id);
    if (!term) throw new Error(`Unknown glossary term "${id}" in ${locale}/${slug}.md`);
    if (!terms.includes(id)) terms.push(id);
    const { term: name, def } = term.text[locale];
    return `<a class="dic" href="${glossaryHref(locale, id)}" data-term="${escapeAttr(name)}" data-def="${escapeAttr(def)}">${label}</a>`;
  });

  const headings: Post["headings"] = [];
  const marked = new Marked({
    gfm: true,
    renderer: {
      heading(token: Tokens.Heading) {
        const id = token.text
          .toLowerCase()
          .normalize("NFD")
          .replace(/[̀-ͯ]/g, "")
          .replace(/<[^>]+>/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "");
        if (token.depth === 2) headings.push({ id, text: token.text.replace(/<[^>]+>/g, "") });
        return `<h${token.depth} id="${id}">${this.parser.parseInline(token.tokens)}</h${token.depth}>\n`;
      },
      link(token: Tokens.Link) {
        const href = resolveLink(locale, token.href, slug);
        const external = /^https?:\/\//.test(href);
        const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
        return `<a href="${href}"${attrs}>${this.parser.parseInline(token.tokens)}</a>`;
      },
    },
  });

  const words = body.split(/\s+/).length;
  return {
    id: data.id ?? slug,
    slug,
    locale,
    title: data.title,
    description: data.description,
    date: data.date,
    category: data.category as CategoryId,
    product: (data.product || undefined) as ProductId | undefined,
    image: data.image ? `${ASSET_BASE}/${data.image}` : undefined,
    minutes: Math.max(1, Math.ceil(words / 200)),
    href: blogHref(locale, slug),
    html: marked.parse(withTerms, { async: false }),
    headings,
    terms,
  };
}

function resolveLink(locale: Locale, href: string, slug: string): string {
  const [kind, id] = href.split(":");
  switch (kind) {
    case "product":
      getProduct(id as ProductId); // throws on typos at build time
      return shopRouteHref(locale, { type: "product", id: id as ProductId });
    case "category":
      return shopRouteHref(locale, { type: "category", id: id as CategoryId });
    case "glossary":
      return glossaryHref(locale, id);
    case "post": {
      const target = fs
        .readdirSync(dir(locale))
        .map((f) => ({ slug: f.replace(/\.md$/, ""), data: parse(path.join(dir(locale), f)).data }))
        .find((p) => p.data.id === id);
      if (!target) throw new Error(`Unknown post "${id}" linked from ${locale}/${slug}.md`);
      return blogHref(locale, target.slug);
    }
    default:
      return href;
  }
}
