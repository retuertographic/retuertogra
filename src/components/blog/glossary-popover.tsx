"use client";

import { X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Open = { term: string; def: string; href: string; anchor: DOMRect | null };

/**
 * Definitions for glossary links (a.dic) inside articles.
 * Desktop: card on hover / keyboard focus, next to the term.
 * Touch: the first tap opens a bottom sheet instead of navigating.
 */
export function GlossaryPopover({ labels }: { labels: { see: string; close: string } }) {
  const [open, setOpen] = useState<Open | null>(null);
  const card = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const termOf = (el: EventTarget | null) => (el instanceof Element ? el.closest<HTMLAnchorElement>("a.dic") : null);
    const read = (a: HTMLAnchorElement, anchor: DOMRect | null): Open => ({
      term: a.dataset.term ?? a.textContent ?? "",
      def: a.dataset.def ?? "",
      href: a.href,
      anchor,
    });

    const onOver = (e: MouseEvent) => {
      const a = termOf(e.target);
      if (a && canHover.matches) setOpen(read(a, a.getBoundingClientRect()));
    };
    const onOut = (e: MouseEvent) => {
      if (!canHover.matches || !termOf(e.target)) return;
      const to = e.relatedTarget;
      if (to instanceof Node && card.current?.contains(to)) return;
      setOpen(null);
    };
    const onFocus = (e: FocusEvent) => {
      const a = termOf(e.target);
      if (a && canHover.matches) setOpen(read(a, a.getBoundingClientRect()));
    };
    const onClick = (e: MouseEvent) => {
      const a = termOf(e.target);
      if (a && !canHover.matches) {
        e.preventDefault();
        setOpen(read(a, null));
      }
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    const onScroll = () => canHover.matches && setOpen(null);

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("focusin", onFocus);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("focusin", onFocus);
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Place the desktop card above the term (or below when there is no room).
  useLayoutEffect(() => {
    const el = card.current;
    if (!open?.anchor || !el) return;
    const r = open.anchor;
    const above = r.top > el.offsetHeight + 16;
    el.style.left = `${Math.min(Math.max(12, r.left + r.width / 2 - el.offsetWidth / 2), window.innerWidth - el.offsetWidth - 12)}px`;
    el.style.top = `${above ? r.top - el.offsetHeight - 10 : r.bottom + 10}px`;
    el.dataset.side = above ? "above" : "below";
    el.style.visibility = "visible";
  }, [open]);

  if (!open) return null;

  if (open.anchor) {
    return (
      <div
        ref={card}
        role="tooltip"
        onMouseLeave={() => setOpen(null)}
        style={{ left: 0, top: 0, visibility: "hidden" }}
        className="group fixed z-[70] w-[320px] rounded-2xl bg-ink p-4 font-figtree text-sm leading-[1.5] text-white/85 shadow-xl"
      >
        <strong className="block font-poppins text-[15px] text-white">{open.term}</strong>
        <p className="mt-1">{open.def}</p>
        <a href={open.href} className="mt-2 inline-block font-semibold text-brand hover:text-white">{labels.see} →</a>
        <span
          aria-hidden="true"
          className="absolute -bottom-1.5 left-1/2 size-3 -translate-x-1/2 rotate-45 bg-ink group-data-[side=below]:-top-1.5 group-data-[side=below]:bottom-auto"
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label={open.term}>
      <button type="button" aria-label={labels.close} onClick={() => setOpen(null)} className="absolute inset-0 bg-ink/40" />
      <div className="absolute inset-x-0 bottom-0 rounded-t-[24px] bg-white px-5 pb-[max(20px,env(safe-area-inset-bottom))] pt-3 shadow-2xl">
        <span aria-hidden="true" className="mx-auto block h-1 w-10 rounded-full bg-line" />
        <div className="mt-4 flex items-start justify-between gap-4">
          <strong className="font-poppins text-lg font-semibold text-ink">{open.term}</strong>
          <button type="button" onClick={() => setOpen(null)} aria-label={labels.close} className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-ink">
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
        <p className="mt-2 font-figtree text-[15px] leading-[1.55] text-muted">{open.def}</p>
        <a href={open.href} className="mt-5 flex h-12 w-full items-center justify-center rounded-full bg-brand font-figtree text-[15px] font-semibold text-white">
          {labels.see}
        </a>
      </div>
    </div>
  );
}
