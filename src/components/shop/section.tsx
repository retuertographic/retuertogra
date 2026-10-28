import { cn } from "@/lib/utils";

export const headingStyles = {
  h1: "font-poppins text-[32px] font-semibold leading-[1.2] text-rg-ink min-[1025px]:text-5xl",
  h2: "font-poppins text-[28px] font-semibold leading-[1.2] text-rg-ink min-[1025px]:text-[40px]",
  eyebrow: "font-poppins text-lg font-medium leading-[1] text-rg-text",
  body: "font-figtree text-base leading-6 text-rg-text",
};

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1280px] px-4 min-[1025px]:px-10", className)}>{children}</div>;
}
