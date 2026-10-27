"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { SOURCE_ORIGIN, catalog } from "./data";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

const AUTOPLAY_MS = 5000;

export function CatalogCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = catalog.length;
  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, count]);

  // Two copies so the visible window is always full while cycling.
  const items = [...catalog, ...catalog];

  return (
    <div
      className="relative mt-[78px] px-5 min-[1025px]:px-[10px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div className="overflow-hidden [--gap:50px] [--per:1] min-[768px]:[--per:2] min-[1025px]:[--per:4]">
        <div
          className="flex gap-[var(--gap)] transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(${-index} * (100% + var(--gap)) / var(--per)))`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="w-[calc((100%-(var(--per)-1)*var(--gap))/var(--per))] shrink-0"
            >
              <Image
                src={item.image}
                alt=""
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover"
                sizes="(min-width: 1025px) 272px, 100vw"
              />
              <h5 className="mt-[20px] font-poppins text-lg font-medium leading-[1] text-rg-ink">
                {item.title}
              </h5>
              <h5 className="mt-5 font-poppins text-lg font-medium leading-[1] text-rg-ink">
                {item.price}
              </h5>
              <a
                href={`${SOURCE_ORIGIN}/shopx/`}
                className="mt-5 inline-block bg-rg-navy px-6 py-3 font-roboto text-base font-medium leading-6 text-white underline-offset-2 hover:underline"
              >
                Details
              </a>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute left-0 top-[200px] -translate-y-1/2 text-rg-text min-[1025px]:-left-[10px]"
      >
        <ChevronLeftIcon className="size-[25px]" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute right-0 top-[200px] -translate-y-1/2 text-rg-text min-[1025px]:-right-[15px]"
      >
        <ChevronRightIcon className="size-[25px]" />
      </button>

      <div className="mt-8 flex justify-center gap-3">
        {catalog.map((item, i) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "size-1.5 rounded-full bg-rg-blue transition-opacity",
              i === index ? "opacity-100" : "opacity-20",
            )}
          />
        ))}
      </div>
    </div>
  );
}
