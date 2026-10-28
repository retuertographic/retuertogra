"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { heroSlides } from "./data";
import type { Dictionary } from "./i18n";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

function ConnectForm({ dict }: { dict: Dictionary }) {
  return (
    <form
      action={dict.connectMinds.href}
      className="flex w-full flex-col gap-3 sm:flex-row min-[1025px]:w-[80%]"
      aria-label={dict.hero.connect}
    >
      <input
        type="email"
        name="email"
        aria-label={dict.hero.email}
        className="h-12 w-full rounded-[3px] border border-rg-blue bg-white px-4 font-poppins text-base text-rg-blue outline-none sm:w-[62%]"
      />
      <button
        type="submit"
        className="h-[50px] w-full rounded-[3px] border border-white bg-rg-green px-6 font-figtree text-base text-white transition-colors hover:bg-rg-green-dark sm:w-[37%]"
      >
        {dict.hero.connect}
      </button>
    </form>
  );
}

export function HeroCarousel({ dict }: { dict: Dictionary }) {
  const [index, setIndex] = useState(0);
  const count = heroSlides.length;
  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);

  return (
    <section
      className="relative overflow-hidden"
      aria-roledescription="carousel"
      aria-label={dict.carousel.label}
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {heroSlides.map((slide, i) => (
          <div
            key={slide.image}
            className="relative flex min-h-[620px] w-full shrink-0 items-center justify-center bg-cover bg-center px-[70px] min-[1025px]:min-h-[900px]"
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={i !== index}
            inert={i !== index}
          >
            <div className={cn("absolute inset-0 opacity-50", slide.overlay)} />
            <div className="relative flex w-full max-w-[1140px] flex-col items-center gap-12 py-16 text-center">
              <h2
                className={cn(
                  "font-poppins text-[32px] font-semibold leading-[1.2] min-[1025px]:text-5xl",
                  slide.title,
                )}
              >
                {dict.hero.title}
              </h2>
              <h5
                className={cn(
                  "font-poppins text-lg font-medium leading-[1]",
                  slide.subtitle,
                )}
              >
                {dict.hero.subtitle}
              </h5>
              <div className="w-full max-w-[864px]">
                <ConnectForm dict={dict} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label={dict.carousel.previous}
        onClick={() => go(-1)}
        className="absolute left-[10px] top-[calc(50%-15px)] flex size-[54px] -translate-y-1/2 items-center justify-center rounded-full border border-rg-ink bg-rg-gray text-rg-ink min-[1025px]:left-[26px]"
      >
        <ChevronLeftIcon className="size-5" />
      </button>
      <button
        type="button"
        aria-label={dict.carousel.next}
        onClick={() => go(1)}
        className="absolute right-[10px] top-[calc(50%-15px)] flex size-[54px] -translate-y-1/2 items-center justify-center rounded-full border border-rg-ink bg-rg-gray text-rg-ink min-[1025px]:right-[26px]"
      >
        <ChevronRightIcon className="size-5" />
      </button>

      <div className="absolute bottom-[28px] left-1/2 flex -translate-x-1/2 gap-3">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`${dict.carousel.goTo} ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "size-2 rounded-full bg-black transition-opacity",
              i === index ? "opacity-100" : "opacity-20",
            )}
          />
        ))}
      </div>
    </section>
  );
}
