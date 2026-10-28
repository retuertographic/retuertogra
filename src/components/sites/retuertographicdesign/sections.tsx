import Image from "next/image";
import { ASSET_BASE, SOURCE_ORIGIN, mapAddress, mapEmbedUrl, projectImages } from "./data";
import type { Dictionary } from "./i18n";
import { CatalogCarousel } from "./catalog-carousel";
import { ExpertiseTabs } from "./expertise-tabs";
import { SmallChevronRightIcon, StarIcon } from "./icons";

const h2 =
  "font-poppins text-[32px] font-semibold leading-[1.2] text-rg-ink min-[1025px]:text-5xl";
const h5 = "font-poppins text-lg font-medium leading-[1]";
const body = "font-figtree text-base leading-6 text-rg-text";
const greenButton =
  "inline-block rounded-[3px] border border-rg-green bg-rg-green px-6 py-3 font-figtree text-base leading-6 text-white underline underline-offset-2 transition-colors hover:bg-rg-green-dark";

type SectionProps = { dict: Dictionary };

export function ExpertiseSection({ dict }: SectionProps) {
  return (
    <section id={dict.anchors.services} className="pt-[60px] pb-[60px] min-[1025px]:pt-[116px] min-[1025px]:pb-[84px]">
      <div className="text-center">
        <h5 className={`${h5} text-rg-text`}>{dict.expertise.eyebrow}</h5>
        <h2 className={`${h2} mt-4`}>{dict.expertise.title}</h2>
      </div>
      <ExpertiseTabs dict={dict} />
    </section>
  );
}

export function WhatWeDoSection({ dict }: SectionProps) {
  return (
    <section id={dict.anchors.about} className="px-4 py-[60px] min-[1025px]:px-20 min-[1025px]:pt-[124px] min-[1025px]:pb-[97px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-16 min-[1025px]:flex-row min-[1025px]:items-center min-[1025px]:gap-20">
        <Image
          src={`${ASSET_BASE}/what-we-do.webp`}
          alt=""
          width={1024}
          height={576}
          className="aspect-[600/338] w-full object-cover min-[1025px]:w-[600px]"
          sizes="(min-width: 1025px) 600px, 100vw"
        />
        <div className="flex-1">
          <h2 className={h2}>{dict.whatWeDo.title}</h2>
          <p className={`${body} mt-6`}>{dict.whatWeDo.body}</p>
          <div className="mt-8 flex flex-col gap-6">
            {dict.whatWeDo.values.map((v) => (
              <div key={v.title} className="flex flex-col gap-4 min-[1025px]:flex-row min-[1025px]:gap-6">
                <StarIcon className="size-8 shrink-0 text-rg-green" />
                <div>
                  <h3 className="font-poppins text-lg font-medium leading-[1.2] text-rg-ink min-[1025px]:mt-2">{v.title}</h3>
                  <p className={`${body} mt-2 min-[1025px]:mt-6`}>{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ConnectMindsSection({ dict }: SectionProps) {
  return (
    <section className="px-[34px] py-[60px] min-[1025px]:px-[90px] min-[1025px]:py-[110px]">
      <div className="mx-auto flex max-w-[1260px] flex-col gap-12 min-[1025px]:flex-row min-[1025px]:justify-between">
        <h2 className="font-poppins text-[40px] font-semibold leading-[1.2] text-rg-ink min-[1025px]:w-[639px] min-[1025px]:text-[56px]">
          {dict.connectMinds.title}
        </h2>
        <div className="min-[1025px]:mr-[41px] min-[1025px]:w-[480px]">
          <h5 className={`${h5} text-rg-text`}>{dict.connectMinds.body}</h5>
          <a href={dict.connectMinds.href} className={`${greenButton} mt-5`}>
            {dict.connectMinds.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

export function FeaturedWorkSection({ dict }: SectionProps) {
  return (
    <section className="px-4 py-[60px] min-[1025px]:px-20 min-[1025px]:pt-[136px] min-[1025px]:pb-[112px]">
      <div className="mx-auto max-w-[1140px] text-center">
        <h5 className={`${h5} text-rg-ink`}>{dict.featured.eyebrow}</h5>
        <h2 className={`${h2} mt-6`}>{dict.featured.title}</h2>
        <p className="mt-6 font-poppins text-lg font-medium leading-[1.5] text-rg-text">
          {dict.featured.body}
        </p>
      </div>

      <div className="mx-auto mt-[85px] grid max-w-[1280px] items-start gap-8 min-[1025px]:grid-cols-3">
        {dict.featured.projects.map((project, i) => (
          <article key={project.title} className="border border-rg-ink">
            <Image
              src={projectImages[i]}
              alt=""
              width={1536}
              height={864}
              className="aspect-[403/227] w-full object-cover"
              sizes="(min-width: 1025px) 403px, 100vw"
            />
            <div className="px-6 pt-8 pb-6">
              <h3 className="font-poppins text-2xl font-semibold leading-[1] text-rg-ink">
                {project.title}
              </h3>
              <p className={`${body} mt-4`}>{project.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2 min-[1025px]:flex-nowrap">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="flex items-center bg-rg-gray px-2 py-1 text-center font-figtree text-sm font-semibold leading-[1.5] text-rg-ink"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-4 font-figtree text-base leading-6 text-rg-ink underline underline-offset-2"
              >
                {project.link}
                <SmallChevronRightIcon className="size-4" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 text-center">
        <a
          href="#"
          className="inline-block border border-rg-ink px-6 py-3 font-figtree text-base leading-6 text-rg-ink underline underline-offset-2"
        >
          {dict.featured.seeAll}
        </a>
      </div>
    </section>
  );
}

export function CatalogSection({ dict }: SectionProps) {
  return (
    <section className="px-4 py-[60px] min-[1025px]:px-[90px] min-[1025px]:pt-[142px] min-[1025px]:pb-[110px]">
      <div className="mx-auto max-w-[1260px]">
        <div className="text-center">
          <h2 className={h2}>{dict.catalog.title}</h2>
          <h5 className={`${h5} mt-5 text-rg-text`}>{dict.catalog.subtitle}</h5>
        </div>
        <CatalogCarousel dict={dict} />
      </div>
    </section>
  );
}

export function NewsletterSection({ dict }: SectionProps) {
  return (
    <section className="bg-rg-gray px-4 py-[60px] min-[1025px]:px-20 min-[1025px]:py-[100px]">
      <div className="mx-auto max-w-[1280px] text-center">
        <h2 className={h2}>{dict.newsletter.title}</h2>
        <p className={`${body} mt-12`}>{dict.newsletter.body}</p>
        <form
          action={`${SOURCE_ORIGIN}/`}
          className="mx-auto mt-[53px] flex max-w-[1024px] flex-col gap-5 min-[1025px]:flex-row min-[1025px]:gap-3"
        >
          <input
            name="name"
            placeholder={dict.newsletter.namePlaceholder}
            aria-label={dict.newsletter.name}
            className="h-[47px] w-full rounded-[4px] min-[1025px]:flex-1 border border-rg-blue bg-white px-4 font-poppins text-base text-rg-blue outline-none placeholder:text-rg-blue/70"
          />
          <input
            type="email"
            name="email"
            required
            placeholder={dict.newsletter.emailPlaceholder}
            aria-label={dict.newsletter.email}
            className="h-[47px] w-full rounded-[4px] min-[1025px]:flex-1 border border-rg-blue bg-white px-4 font-poppins text-base text-rg-blue outline-none placeholder:text-rg-blue/70"
          />
          <button
            type="submit"
            className="h-[50px] w-full rounded-[4px] bg-rg-green min-[1025px]:flex-1 font-figtree text-base text-white transition-colors hover:bg-rg-green-dark"
          >
            {dict.newsletter.submit}
          </button>
        </form>
      </div>
    </section>
  );
}

export function ConnectingExperiencesSection({ dict }: SectionProps) {
  return (
    <section
      className="relative flex min-h-[450px] items-center justify-center bg-cover bg-center px-4 py-12"
      style={{ backgroundImage: `url(${ASSET_BASE}/cta-bg.webp)` }}
    >
      <div className="absolute inset-0 bg-rg-blue opacity-60" />
      <div className="relative max-w-[750px] text-center text-white">
        <h5 className={h5}>{dict.banner.eyebrow}</h5>
        <h2 className="mt-6 font-poppins text-[32px] font-semibold leading-[1.2] min-[1025px]:text-5xl">
          {dict.banner.title}
        </h2>
        <p className="mt-6 font-figtree text-base leading-6">{dict.banner.body}</p>
        <div className="mt-[14px] flex justify-center gap-6">
          <a href="#" className={greenButton}>
            {dict.banner.appointment}
          </a>
          <a
            href="#"
            className="inline-block rounded-[3px] border border-white px-6 py-3 font-figtree text-base leading-6 text-white underline underline-offset-2"
          >
            {dict.banner.work}
          </a>
        </div>
      </div>
    </section>
  );
}

export function LetsConnectSection({ dict }: SectionProps) {
  return (
    <section id={dict.anchors.contact} className="bg-rg-green px-4 py-[60px] min-[1025px]:px-[90px] min-[1025px]:py-[110px]">
      <div className="mx-auto flex max-w-[1260px] flex-col gap-12 min-[1025px]:flex-row min-[1025px]:items-center min-[1025px]:justify-between">
        <iframe
          src={mapEmbedUrl}
          title={mapAddress}
          loading="lazy"
          className="h-[400px] w-full border-0 min-[1025px]:w-[580px]"
        />
        <div className="min-[1025px]:w-[580px]">
          <h2 className="font-poppins text-[32px] font-semibold leading-[1.2] text-white min-[1025px]:text-5xl">
            {dict.contact.title}
          </h2>
          <p className="mt-6 font-figtree text-base leading-6 text-white">{dict.contact.body}</p>
        </div>
      </div>
    </section>
  );
}
