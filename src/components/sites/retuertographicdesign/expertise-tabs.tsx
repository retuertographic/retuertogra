"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import { cn } from "@/lib/utils";
import { expertiseTabs } from "./data";

type Tab = (typeof expertiseTabs)[number];

function TabPanel({ tab }: { tab: Tab }) {
  return (
    <div
      role="tabpanel"
      className={cn(
        "flex flex-col gap-10 py-10 min-[1025px]:flex-row min-[1025px]:items-center min-[1025px]:gap-[68px] min-[1025px]:px-[100px] min-[1025px]:py-9",
        tab.imageFirst && "min-[1025px]:flex-row-reverse",
      )}
    >
      <div className="flex-1 px-5 min-[1025px]:px-0">
        <h5 className="font-poppins text-base font-medium leading-[1] text-rg-ink min-[1025px]:text-lg">
          {tab.title}
        </h5>
        <p className="mt-5 font-figtree text-base leading-6 text-rg-text">
          {tab.body}
        </p>
      </div>
      <div className="flex-1 px-5 min-[1025px]:px-0">
        <Image
          src={tab.image}
          alt=""
          width={1081}
          height={1080}
          className="aspect-square w-full object-cover"
          sizes="(min-width: 1025px) 586px, 100vw"
        />
      </div>
    </div>
  );
}

function TabButton({
  tab,
  active,
  onSelect,
}: {
  tab: Tab;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onSelect}
      className={cn(
        "px-[35px] py-[15px] font-figtree text-base leading-6 transition-colors",
        active ? "bg-rg-green text-white" : "bg-rg-gray text-rg-blue hover:bg-rg-green hover:text-white",
      )}
    >
      {tab.label}
    </button>
  );
}

export function ExpertiseTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-4">
      {/* Desktop: horizontal tabs above a shared panel */}
      <div className="hidden min-[1025px]:block">
        <div role="tablist" className="flex justify-center gap-4">
          {expertiseTabs.map((tab, i) => (
            <TabButton key={tab.label} tab={tab} active={i === active} onSelect={() => setActive(i)} />
          ))}
        </div>
        <TabPanel tab={expertiseTabs[active]} />
      </div>

      {/* Mobile: stacked tab titles with the active panel below its title */}
      <div role="tablist" className="flex flex-col gap-4 px-4 min-[1025px]:hidden">
        {expertiseTabs.map((tab, i) => (
          <Fragment key={tab.label}>
            <TabButton tab={tab} active={i === active} onSelect={() => setActive(i)} />
            {i === active && <TabPanel tab={tab} />}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
