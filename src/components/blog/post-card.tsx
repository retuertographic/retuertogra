import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { card, Icon, text } from "@/components/shop/ui";
import type { PostCardData } from "./card-data";

/** Article card. `featured` = wide card (image beside the text on desktop). */
export function PostCard({ data, featured, priority }: { data: PostCardData; featured?: boolean; priority?: boolean }) {
  return (
    <article className={cn(card, "group relative flex flex-col overflow-hidden", featured && "min-[1025px]:grid min-[1025px]:grid-cols-[1.15fr_1fr]")}>
      <div className={cn("relative aspect-[16/9] overflow-hidden", featured && "min-[1025px]:aspect-auto min-[1025px]:min-h-[340px]")}>
        {data.image ? (
          <Image
            src={data.image}
            alt=""
            fill
            priority={priority}
            sizes={featured ? "(min-width: 1025px) 620px, 100vw" : "(min-width: 1025px) 380px, (min-width: 640px) 50vw, 100vw"}
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#a6d46a_0%,var(--brand)_45%,var(--brand-dark)_100%)]">
            <span className="flex size-20 items-center justify-center rounded-full bg-white/20 text-white ring-1 ring-white/40">
              <Icon name={data.icon} className="size-8" />
            </span>
          </div>
        )}
      </div>
      <div className={cn("flex flex-1 flex-col p-5 min-[1025px]:p-6", featured && "min-[1025px]:justify-center min-[1025px]:p-10")}>
        <p className="font-figtree text-xs font-bold uppercase tracking-[0.12em] text-brand-dark">{data.categoryLabel}</p>
        <h3 className={cn(featured ? "font-poppins text-[22px] font-bold leading-[1.2] text-ink min-[1025px]:text-[30px]" : text.h3, "mt-2")}>
          <a href={data.href} className="after:absolute after:inset-0 hover:text-brand-dark">
            {data.title}
          </a>
        </h3>
        <p className={cn("mt-2 font-figtree text-[15px] leading-[1.55] text-muted", featured ? "min-[1025px]:text-[17px]" : "line-clamp-3")}>{data.description}</p>
        <div className="mt-auto pt-5">
          <div className="flex items-center justify-between gap-3 border-t border-line pt-4">
            <p className="font-figtree text-[13px] text-muted">
              <time dateTime={data.date}>{data.dateLabel}</time> · {data.minutesLabel}
            </p>
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-colors group-hover:bg-brand" aria-hidden="true">
              <ArrowRight className="size-[18px]" strokeWidth={1.8} />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
