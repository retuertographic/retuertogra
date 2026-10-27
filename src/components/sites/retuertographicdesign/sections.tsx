import Image from "next/image";
import { ASSET_BASE, SOURCE_ORIGIN, mapEmbedUrl, projects } from "./data";
import { CatalogCarousel } from "./catalog-carousel";
import { ExpertiseTabs } from "./expertise-tabs";
import { SmallChevronRightIcon, StarIcon } from "./icons";

const h2 =
  "font-poppins text-[32px] font-semibold leading-[1.2] text-rg-ink min-[1025px]:text-5xl";
const h5 = "font-poppins text-lg font-medium leading-[1]";
const body = "font-figtree text-base leading-6 text-rg-text";
const greenButton =
  "inline-block rounded-[3px] border border-rg-green bg-rg-green px-6 py-3 font-figtree text-base leading-6 text-white underline underline-offset-2 transition-colors hover:bg-rg-green-dark";

export function ExpertiseSection() {
  return (
    <section id="services" className="pt-[60px] pb-[60px] min-[1025px]:pt-[116px] min-[1025px]:pb-[84px]">
      <div className="text-center">
        <h5 className={`${h5} text-rg-text`}>Why we do it</h5>
        <h2 className={`${h2} mt-4`}>Our Expertise</h2>
      </div>
      <ExpertiseTabs />
    </section>
  );
}

const values = [
  {
    title: "Our Mission",
    body: "To bridge creativity and technology, ensuring that every project we undertake speaks directly to your audience's heart and mind.",
  },
  {
    title: "Our Values",
    body: "We prioritize connection, focus on human-centered communication and design, and strive for precision—always looking forward to what’s next.",
  },
];

export function WhatWeDoSection() {
  return (
    <section id="about" className="px-4 py-[60px] min-[1025px]:px-20 min-[1025px]:pt-[124px] min-[1025px]:pb-[97px]">
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
          <h2 className={h2}>What we do</h2>
          <p className={`${body} mt-6`}>
            We believe in connecting experiences, whether you’re seeking to
            inform, promote, support, or engage. Through the synergy of IT and
            graphic design, we turn your vision into reality, crafting
            solutions that resonate and inspire.
          </p>
          <div className="mt-8 flex flex-col gap-6">
            {values.map((v) => (
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

export function ConnectMindsSection() {
  return (
    <section className="px-[34px] py-[60px] min-[1025px]:px-[90px] min-[1025px]:py-[110px]">
      <div className="mx-auto flex max-w-[1260px] flex-col gap-12 min-[1025px]:flex-row min-[1025px]:justify-between">
        <h2 className="font-poppins text-[40px] font-semibold leading-[1.2] text-rg-ink min-[1025px]:w-[639px] min-[1025px]:text-[56px]">
          Connect Minds with Our Innovative Solutions
        </h2>
        <div className="min-[1025px]:mr-[41px] min-[1025px]:w-[480px]">
          <h5 className={`${h5} text-rg-text`}>
            From intuitive mobile apps and custom web development to automated
            ad campaigns, we are the bridge between your brand and your
            customers. Let’s bring your next big vision to life.
          </h5>
          <a href={`${SOURCE_ORIGIN}/contact/`} className={`${greenButton} mt-5`}>
            Connect
          </a>
        </div>
      </div>
    </section>
  );
}

export function FeaturedWorkSection() {
  return (
    <section className="px-4 py-[60px] min-[1025px]:px-20 min-[1025px]:pt-[136px] min-[1025px]:pb-[112px]">
      <div className="mx-auto max-w-[1140px] text-center">
        <h5 className={`${h5} text-rg-ink`}>Featured Work</h5>
        <h2 className={`${h2} mt-6`}>Explore Our Innovative Projects</h2>
        <p className="mt-6 font-poppins text-lg font-medium leading-[1.5] text-rg-text">
          Taking creativity to the next level, our portfolio showcases unique
          solutions that blend design and technology.
        </p>
      </div>

      <div className="mx-auto mt-[85px] grid max-w-[1280px] items-start gap-8 min-[1025px]:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="border border-rg-ink">
            <Image
              src={project.image}
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
          See All Projects
        </a>
      </div>
    </section>
  );
}

export function CatalogSection() {
  return (
    <section className="px-4 py-[60px] min-[1025px]:px-[90px] min-[1025px]:pt-[142px] min-[1025px]:pb-[110px]">
      <div className="mx-auto max-w-[1260px]">
        <div className="text-center">
          <h2 className={h2}>The Retuerto&apos;s Growth Catalog</h2>
          <h5 className={`${h5} mt-5 text-rg-text`}>Tools to Measure, Move, and Market</h5>
        </div>
        <CatalogCarousel />
      </div>
    </section>
  );
}

export function NewsletterSection() {
  return (
    <section className="bg-rg-gray px-4 py-[60px] min-[1025px]:px-20 min-[1025px]:py-[100px]">
      <div className="mx-auto max-w-[1280px] text-center">
        <h2 className={h2}>Stay in the loop with our insights!</h2>
        <p className={`${body} mt-12`}>
          Join our newsletter for tips, updates, and exclusive insights tailored
          just for you. Stay connected and grow your knowledge with industry
          trends and creative solutions delivered right to your inbox.
        </p>
        <form
          action={`${SOURCE_ORIGIN}/`}
          className="mx-auto mt-[53px] flex max-w-[1024px] flex-col gap-5 min-[1025px]:flex-row min-[1025px]:gap-3"
        >
          <input
            name="name"
            placeholder="Enter your name"
            aria-label="Your Name"
            className="h-[47px] w-full rounded-[4px] min-[1025px]:flex-1 border border-rg-blue bg-white px-4 font-poppins text-base text-rg-blue outline-none placeholder:text-rg-blue/70"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email*"
            aria-label="Your Email"
            className="h-[47px] w-full rounded-[4px] min-[1025px]:flex-1 border border-rg-blue bg-white px-4 font-poppins text-base text-rg-blue outline-none placeholder:text-rg-blue/70"
          />
          <button
            type="submit"
            className="h-[50px] w-full rounded-[4px] bg-rg-green min-[1025px]:flex-1 font-figtree text-base text-white transition-colors hover:bg-rg-green-dark"
          >
            Connect
          </button>
        </form>
      </div>
    </section>
  );
}

export function ConnectingExperiencesSection() {
  return (
    <section
      className="relative flex min-h-[450px] items-center justify-center bg-cover bg-center px-4 py-12"
      style={{ backgroundImage: `url(${ASSET_BASE}/cta-bg.webp)` }}
    >
      <div className="absolute inset-0 bg-rg-blue opacity-60" />
      <div className="relative max-w-[750px] text-center text-white">
        <h5 className={h5}>We bridge the gap between creative design and technical execution</h5>
        <h2 className="mt-6 font-poppins text-[32px] font-semibold leading-[1.2] min-[1025px]:text-5xl">
          Connecting experiences
        </h2>
        <p className="mt-6 font-figtree text-base leading-6">
          Your ideas deserve to shine. We specialize in transforming concepts
          into captivating designs that engage and inspire. Lets navigate the
          future of creativity together.
        </p>
        <div className="mt-[14px] flex justify-center gap-6">
          <a href="#" className={greenButton}>
            Appointment
          </a>
          <a
            href="#"
            className="inline-block rounded-[3px] border border-white px-6 py-3 font-figtree text-base leading-6 text-white underline underline-offset-2"
          >
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
}

export function LetsConnectSection() {
  return (
    <section id="contact" className="bg-rg-green px-4 py-[60px] min-[1025px]:px-[90px] min-[1025px]:py-[110px]">
      <div className="mx-auto flex max-w-[1260px] flex-col gap-12 min-[1025px]:flex-row min-[1025px]:items-center min-[1025px]:justify-between">
        <iframe
          src={mapEmbedUrl}
          title="C. de Calderón de la Barca, 2, Oficina 3, 38005 Santa Cruz de Tenerife"
          loading="lazy"
          className="h-[400px] w-full border-0 min-[1025px]:w-[580px]"
        />
        <div className="min-[1025px]:w-[580px]">
          <h2 className="font-poppins text-[32px] font-semibold leading-[1.2] text-white min-[1025px]:text-5xl">
            Let&apos;s Connect
          </h2>
          <p className="mt-6 font-figtree text-base leading-6 text-white">
            We’re here to help you with your marketing and creative needs.
            Whether you have questions about our services or want to discuss a
            new project, feel free to reach out. Our team is eager to assist
            you! You can also find us on social media. Let’s connect!
          </p>
        </div>
      </div>
    </section>
  );
}
