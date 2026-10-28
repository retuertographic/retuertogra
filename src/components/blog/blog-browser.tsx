"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { btn, chip } from "@/components/shop/ui";
import type { CategoryId } from "@/shop/types";
import type { PostCardData } from "./card-data";
import { PostCard } from "./post-card";

/** Articles shown in the grid before "Show more" (and per click). */
const BATCH = 9;

/** Blog index: category chips (client-side filter) + featured article + grid with "show more". */
export function BlogBrowser({ posts, labels }: { posts: PostCardData[]; labels: { all: string; filter: string; noResults: string; loadMore: string } }) {
  const [category, setCategory] = useState<CategoryId | "all">("all");
  const [shown, setShown] = useState(BATCH);
  const pick = (c: CategoryId | "all") => {
    setCategory(c);
    setShown(BATCH);
  };
  const chips = [...new Map(posts.map((p) => [p.category, p.categoryLabel])).entries()];
  const visible = posts.filter((p) => category === "all" || p.category === category);
  const [featured, ...rest] = visible;

  return (
    <>
      <div role="group" aria-label={labels.filter} className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 min-[1025px]:mx-0 min-[1025px]:flex-wrap min-[1025px]:px-0">
        <button type="button" aria-pressed={category === "all"} onClick={() => pick("all")} className={cn(chip.base, category === "all" ? chip.active : chip.idle)}>
          {labels.all}
        </button>
        {chips.map(([id, label]) => (
          <button key={id} type="button" aria-pressed={category === id} onClick={() => pick(id)} className={cn(chip.base, category === id ? chip.active : chip.idle)}>
            {label}
          </button>
        ))}
      </div>

      <div className="mt-8 min-[1025px]:mt-10" aria-live="polite">
        {featured ? (
          <>
            <PostCard data={featured} featured priority />
            {rest.length > 0 && (
              <div className="mt-4 grid gap-4 min-[640px]:grid-cols-2 min-[1025px]:mt-6 min-[1025px]:grid-cols-3 min-[1025px]:gap-6">
                {rest.slice(0, shown).map((p) => (
                  <PostCard key={p.id} data={p} />
                ))}
              </div>
            )}
            {rest.length > shown && (
              <div className="mt-8 flex justify-center">
                <button type="button" onClick={() => setShown((n) => n + BATCH)} className={btn.secondary}>
                  {labels.loadMore}
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="rounded-[20px] border border-dashed border-line bg-white px-6 py-10 text-center font-figtree text-[15px] text-muted">{labels.noResults}</p>
        )}
      </div>
    </>
  );
}
