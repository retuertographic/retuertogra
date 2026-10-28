"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { normalize } from "@/components/shop/card-data";

export type GlossaryLetter = {
  letter: string;
  entries: { id: string; term: string; def: string; posts: { title: string; href: string }[] }[];
};

/** Glossary: search box + A–Z index (sticky, scrollable on mobile) + term cards. */
export function GlossaryBrowser({
  letters,
  labels,
}: {
  letters: GlossaryLetter[];
  labels: { search: string; noResults: string; appearsIn: string; letters: string };
}) {
  const [query, setQuery] = useState("");
  const q = normalize(query.trim());
  const visible = letters
    .map((l) => ({ ...l, entries: l.entries.filter((e) => !q || normalize(`${e.term} ${e.def}`).includes(q)) }))
    .filter((l) => l.entries.length > 0);

  return (
    <>
      <div className="sticky top-16 z-30 -mx-4 border-b border-line bg-white/95 px-4 py-3 backdrop-blur min-[1025px]:top-20 min-[1025px]:mx-0 min-[1025px]:rounded-[20px] min-[1025px]:border min-[1025px]:p-3">
        <div className="min-[1025px]:flex min-[1025px]:items-center min-[1025px]:gap-4">
          <label className="relative block min-[1025px]:w-[300px] min-[1025px]:shrink-0">
            <span className="sr-only">{labels.search}</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" strokeWidth={1.8} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={labels.search}
              className="h-11 w-full rounded-full border border-transparent bg-surface pl-11 pr-4 font-figtree text-[15px] text-ink outline-none placeholder:text-muted focus:border-brand"
            />
          </label>
          <nav aria-label={labels.letters} className="no-scrollbar mt-3 flex gap-1 overflow-x-auto min-[1025px]:mt-0 min-[1025px]:flex-wrap">
            {letters.map(({ letter }) => {
              const enabled = visible.some((l) => l.letter === letter);
              return enabled ? (
                <a key={letter} href={`#letra-${letter}`} className="flex size-9 shrink-0 items-center justify-center rounded-full font-poppins text-sm font-semibold text-ink transition-colors hover:bg-brand-soft hover:text-brand-dark">
                  {letter}
                </a>
              ) : (
                <span key={letter} aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center rounded-full font-poppins text-sm font-semibold text-line">
                  {letter}
                </span>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="mt-8 space-y-10 min-[1025px]:mt-12" aria-live="polite">
        {visible.length === 0 && (
          <p className="rounded-[20px] border border-dashed border-line bg-white px-6 py-10 text-center font-figtree text-[15px] text-muted">{labels.noResults}</p>
        )}
        {visible.map(({ letter, entries }) => (
          <section key={letter} id={`letra-${letter}`} className="scroll-mt-44 min-[1025px]:scroll-mt-40" aria-labelledby={`h-letra-${letter}`}>
            <h2 id={`h-letra-${letter}`} className="flex size-12 items-center justify-center rounded-full bg-brand font-poppins text-xl font-bold text-white">
              {letter}
            </h2>
            <dl className="mt-5 grid gap-4 min-[768px]:grid-cols-2 min-[1025px]:gap-5">
              {entries.map((e) => (
                <div
                  key={e.id}
                  id={`t-${e.id}`}
                  className={cn(
                    "scroll-mt-44 rounded-[20px] border border-line bg-white p-5 transition-[border-color,box-shadow] min-[1025px]:scroll-mt-40 min-[1025px]:p-6",
                    "target:border-brand target:shadow-[0_10px_30px_-12px_rgba(132,188,65,0.45)]",
                  )}
                >
                  <dt className="font-poppins text-[17px] font-semibold text-ink min-[1025px]:text-[19px]">{e.term}</dt>
                  <dd className="mt-2 font-figtree text-[15px] leading-[1.55] text-muted">{e.def}</dd>
                  {e.posts.length > 0 && (
                    <dd className="mt-4 border-t border-line pt-3 font-figtree text-sm">
                      <span className="text-muted">{labels.appearsIn}: </span>
                      {e.posts.map((p, i) => (
                        <span key={p.href}>
                          {i > 0 && ", "}
                          <a href={p.href} className="font-semibold text-brand-dark hover:text-ink">{p.title}</a>
                        </span>
                      ))}
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </>
  );
}
