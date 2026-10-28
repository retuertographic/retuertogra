import fs from "node:fs";
import path from "node:path";
import { Marked, type Tokens } from "marked";
import type { Locale } from "@/i18n/config";
import type { LegalDocId } from "./registry";

export type Heading = { id: string; text: string };
export type FaqItem = { question: string; answer: string };

const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);

const plain = (text: string) => text.replace(/\*\*|__|[*_`]/g, "").trim();

/** Reads and renders src/content/legal/<locale>/<id>.md at build time. */
export function loadLegalDoc(locale: Locale, id: LegalDocId) {
  const file = path.join(process.cwd(), "src", "content", "legal", locale, `${id}.md`);
  const source = fs.readFileSync(file, "utf8");

  const headings: Heading[] = [];
  const used = new Map<string, number>();
  const uniqueId = (text: string) => {
    const base = slugify(text) || "section";
    const n = used.get(base) ?? 0;
    used.set(base, n + 1);
    return n ? `${base}-${n + 1}` : base;
  };

  const marked = new Marked({
    gfm: true,
    breaks: true,
    renderer: {
      heading(token: Tokens.Heading) {
        const text = plain(token.text);
        const id = uniqueId(text);
        if (token.depth === 2) headings.push({ id, text });
        return `<h${token.depth} id="${id}">${this.parser.parseInline(token.tokens)}</h${token.depth}>\n`;
      },
      link(token: Tokens.Link) {
        const external = /^https?:\/\//.test(token.href);
        const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
        return `<a href="${token.href}"${attrs}>${this.parser.parseInline(token.tokens)}</a>`;
      },
    },
  });

  const html = marked.parse(source, { async: false });
  return { html, headings, faq: id === "faq" ? extractFaq(marked, source) : [] };
}

/** "### Question" followed by paragraphs → FAQPage items for structured data. */
function extractFaq(marked: Marked, source: string): FaqItem[] {
  const items: FaqItem[] = [];
  let current: FaqItem | null = null;
  for (const token of marked.lexer(source)) {
    if (token.type === "heading") {
      if (current) items.push(current);
      current = token.depth === 3 ? { question: plain(token.text), answer: "" } : null;
    } else if (current && token.type === "paragraph") {
      current.answer = [current.answer, plain(token.text)].filter(Boolean).join(" ");
    }
  }
  if (current) items.push(current);
  return items.filter((item) => item.answer);
}
