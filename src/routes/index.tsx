import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import pdfAsset from "@/assets/stem3.pdf.asset.json";
import coverAsset from "@/assets/stem3-cover.jpg.asset.json";
import pg2 from "@/assets/stem3-pg-02.jpg.asset.json";
import pg3 from "@/assets/stem3-pg-03.jpg.asset.json";
import pg4 from "@/assets/stem3-pg-04.jpg.asset.json";
import pg5 from "@/assets/stem3-pg-05.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { property: "og:image", content: coverAsset.url },
      { name: "twitter:image", content: coverAsset.url },
    ],
  }),
});

const PDF_URL = pdfAsset.url;
const PDF_SIZE_MB = (pdfAsset.size / 1024 / 1024).toFixed(1);
const PDF_PAGES = 29;
const VERSION = "2.0";
const LAST_UPDATED = "July 2026";

/* -------------------------------------------------------------------------- */
/*  Reveal on scroll                                                          */
/* -------------------------------------------------------------------------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("fade-up");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({
  children,
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  const Component = Tag as React.ElementType;
  return (
    <Component ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </Component>
  );
}

/* -------------------------------------------------------------------------- */
/*  Icons — simple geometric line icons                                        */
/* -------------------------------------------------------------------------- */
const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const Icons = {
  Motion: () => (
    <svg {...iconProps}>
      <path d="M3 17c3 0 3-10 6-10s3 10 6 10 3-10 6-10" />
    </svg>
  ),
  Electricity: () => (
    <svg {...iconProps}>
      <path d="M13 3 5 14h6l-1 7 8-11h-6l1-7Z" />
    </svg>
  ),
  Aerospace: () => (
    <svg {...iconProps}>
      <path d="M12 2c3 3 4 7 4 11l4 3-5 1-3 5-3-5-5-1 4-3c0-4 1-8 4-11Z" />
    </svg>
  ),
  Renewable: () => (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="2" />
      <path d="M12 10V3M12 14v7M14 12h7M10 12H3" />
    </svg>
  ),
  Robotics: () => (
    <svg {...iconProps}>
      <rect x="5" y="8" width="14" height="11" rx="2" />
      <path d="M12 8V4M9 4h6M9 13h.01M15 13h.01M3 13v3M21 13v3" />
    </svg>
  ),
  Design: () => (
    <svg {...iconProps}>
      <path d="M3 21h18M6 21V9l6-6 6 6v12M10 21v-6h4v6" />
    </svg>
  ),
  Hand: () => (
    <svg {...iconProps}>
      <path d="M8 11V5a2 2 0 1 1 4 0v6M12 11V4a2 2 0 1 1 4 0v7M16 11V6a2 2 0 1 1 4 0v9a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6v-1l-2-3a1.5 1.5 0 0 1 2.5-1.6L8 12" />
    </svg>
  ),
  World: () => (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  ),
  Gift: () => (
    <svg {...iconProps}>
      <rect x="3" y="8" width="18" height="13" rx="1" />
      <path d="M3 12h18M12 8v13M8 8a2.5 2.5 0 1 1 0-5c2 0 4 5 4 5s2-5 4-5a2.5 2.5 0 1 1 0 5" />
    </svg>
  ),
  Download: () => (
    <svg {...iconProps}>
      <path d="M12 3v13m0 0-5-5m5 5 5-5M5 21h14" />
    </svg>
  ),
  Arrow: () => (
    <svg {...iconProps} width={16} height={16}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  Chevron: () => (
    <svg {...iconProps} width={18} height={18}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  ),
  ChevronL: () => (
    <svg {...iconProps} width={18} height={18}>
      <path d="M15 6l-6 6 6 6" />
    </svg>
  ),
  Check: () => (
    <svg {...iconProps} width={16} height={16} stroke="#16a34a">
      <path d="M5 12l4 4L19 7" />
    </svg>
  ),
  Menu: () => (
    <svg {...iconProps}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  Close: () => (
    <svg {...iconProps}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ),
};

/* -------------------------------------------------------------------------- */
/*  Components                                                                 */
/* -------------------------------------------------------------------------- */

function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`inline-flex items-center gap-1 text-[17px] font-bold tracking-tight ${className}`}
      aria-label="STEM.3 home"
    >
      <span>STEM</span>
      <span className="text-[#2563eb]">.3</span>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#inside", label: "Inside the Book" },
    { href: "#download", label: "Download" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled
          ? "border-[#e5e5e5] bg-white/85 backdrop-blur"
          : "border-transparent bg-white"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#374151] transition-colors hover:text-[#111111]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#download"
            className="inline-flex h-9 items-center rounded-full bg-[#111111] px-4 text-sm font-medium text-white transition-colors hover:bg-black"
          >
            Get the book
          </a>
        </nav>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#111111] hover:bg-[#f7f7f5] md:hidden"
        >
          {open ? <Icons.Close /> : <Icons.Menu />}
        </button>
      </div>
      {open && (
        <nav
          className="border-t border-[#e5e5e5] bg-white md:hidden"
          aria-label="Mobile"
        >
          <div className="container-page flex flex-col py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] text-[#111111]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

/* Book mockup: upright textbook using the real cover render */
function BookMockup() {
  return (
    <div
      className="relative mx-auto w-full max-w-[420px]"
      style={{ perspective: "1600px" }}
      aria-hidden="true"
    >
      <div
        className="relative aspect-[3/4] w-full"
        style={{ transformStyle: "preserve-3d", transform: "rotateY(-14deg)" }}
      >
        {/* soft ground shadow */}
        <div
          className="absolute inset-x-6 -bottom-6 h-8 rounded-[50%] blur-2xl"
          style={{ background: "rgba(17,17,17,0.18)" }}
        />
        {/* back pages */}
        <div
          className="absolute inset-y-0 left-[6px] w-[10px] rounded-r-sm bg-[#f2f2ef]"
          style={{ boxShadow: "inset -1px 0 0 #e5e5e5" }}
        />
        {/* cover */}
        <div
          className="relative h-full w-full overflow-hidden rounded-[6px] bg-white ring-1 ring-[#e5e5e5]"
          style={{
            boxShadow:
              "0 30px 60px -20px rgba(17,17,17,0.25), 0 12px 24px -12px rgba(17,17,17,0.15)",
          }}
        >
          <img
            src={coverAsset.url}
            alt="STEM.3 textbook cover — Engineering + Physics"
            className="h-full w-full object-cover"
            loading="eager"
          />
          {/* spine highlight */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-3"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.10), rgba(0,0,0,0) 90%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative">
      <div className="container-page grid gap-14 pb-16 pt-14 md:grid-cols-[1.05fr_.95fr] md:gap-16 md:pb-24 md:pt-20 lg:pt-24">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#e5e5e5] bg-white px-3 py-1 text-xs text-[#374151]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16a34a]" />
            Free KS3 STEM textbook · Wales
          </div>
          <h1 className="mt-6 text-[2.5rem] font-bold leading-[1.05] tracking-tight text-[#111111] sm:text-5xl md:text-[3.5rem] lg:text-[4rem]">
            Learn STEM through building, experimenting and engineering.
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#4b5563]">
            A completely free KS3 STEM textbook designed to make physics and
            engineering enjoyable through real-world examples and hands-on
            activities.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={PDF_URL}
              download="STEM.3.pdf"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#2563eb] px-6 text-[15px] font-medium text-white transition-colors hover:bg-[#1d4ed8]"
            >
              <Icons.Download />
              Download Free PDF
            </a>
            <a
              href="#preview"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-[#e5e5e5] bg-white px-6 text-[15px] font-medium text-[#111111] transition-colors hover:bg-[#f7f7f5]"
            >
              Preview Chapters
              <Icons.Arrow />
            </a>
          </div>
          <p className="mt-5 text-sm text-[#6b6b6b]">
            PDF · {PDF_SIZE_MB} MB · {PDF_PAGES} pages · No signup required
          </p>
        </div>
        <div className="flex items-center justify-center md:pl-6">
          <BookMockup />
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const items = [
    "Created by a UK STEM Racing National Finalist",
    "200+ hours of development",
    "Free forever",
    "Designed for KS3 learners",
  ];
  return (
    <section className="border-y border-[#e5e5e5] bg-[#f7f7f5]">
      <div className="container-page grid gap-6 py-8 sm:grid-cols-2 md:grid-cols-4">
        {items.map((t) => (
          <div key={t} className="flex items-start gap-2 text-sm text-[#374151]">
            <span className="mt-0.5 shrink-0">
              <Icons.Check />
            </span>
            <span>{t}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const CHAPTERS: {
  title: string;
  desc: string;
  Icon: () => React.JSX.Element;
}[] = [
  {
    title: "Motion",
    desc: "Speed, forces and momentum — explained through vehicles, sport and everyday life.",
    Icon: Icons.Motion,
  },
  {
    title: "Electricity",
    desc: "Circuits, current and voltage, built up from first principles and real experiments.",
    Icon: Icons.Electricity,
  },
  {
    title: "Aerospace",
    desc: "How aircraft fly, how rockets escape gravity, and the physics behind flight.",
    Icon: Icons.Aerospace,
  },
  {
    title: "Renewable Energy",
    desc: "Solar, wind and hydro — the engineering shaping a low-carbon future.",
    Icon: Icons.Renewable,
  },
  {
    title: "Robotics",
    desc: "Sensors, actuators and control systems used in modern robotics.",
    Icon: Icons.Robotics,
  },
  {
    title: "Engineering Design",
    desc: "The design process engineers use to solve real problems, from sketch to prototype.",
    Icon: Icons.Design,
  },
];

function Inside() {
  return (
    <section id="inside" className="container-page py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-[#2563eb]">What&apos;s inside</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111111] md:text-4xl">
          Six chapters covering the essentials of KS3 STEM.
        </h2>
        <p className="mt-4 text-[#4b5563]">
          Grounded in real engineering, taught with clear language and hands-on
          activities.
        </p>
      </Reveal>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CHAPTERS.map((c, i) => (
          <Reveal
            key={c.title}
            className="group rounded-2xl border border-[#e5e5e5] bg-white p-6 transition-all duration-200 hover:-translate-y-[3px] hover:border-[#d4d4d4] hover:shadow-[0_10px_30px_-15px_rgba(17,17,17,0.15)]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#f7f7f5] text-[#111111]">
              <c.Icon />
            </div>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-xs font-medium text-[#6b6b6b]">
                Ch. {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-1 text-lg font-semibold text-[#111111]">
              {c.title}
            </h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-[#4b5563]">
              {c.desc}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Why() {
  const items = [
    {
      Icon: Icons.World,
      title: "Real-world engineering",
      desc: "Every concept is anchored in something a student can see, touch, or build — from race cars to wind turbines.",
    },
    {
      Icon: Icons.Hand,
      title: "Hands-on experiments",
      desc: "Practical activities you can run at home or in a classroom, using accessible materials.",
    },
    {
      Icon: Icons.Gift,
      title: "Completely free",
      desc: "No signup, no paywall, no advertisements. Written to be shared with any KS3 student in Wales.",
    },
  ];
  return (
    <section id="about" className="bg-[#f7f7f5]">
      <div className="container-page py-20 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-[#2563eb]">Why STEM.3</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111111] md:text-4xl">
            Built to make STEM feel real.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {items.map((it) => (
            <Reveal key={it.title}>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white ring-1 ring-[#e5e5e5]">
                <it.Icon />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-[#111111]">
                {it.title}
              </h3>
              <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-[#4b5563]">
                {it.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Preview() {
  const pages = [
    { url: coverAsset.url, label: "Cover" },
    { url: pg2.url, label: "Page 2" },
    { url: pg3.url, label: "Page 3" },
    { url: pg4.url, label: "Page 4" },
    { url: pg5.url, label: "Page 5" },
  ];
  const [i, setI] = useState(0);
  const total = pages.length;
  const go = (n: number) => setI((n + total) % total);

  return (
    <section id="preview" className="container-page py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-[#2563eb]">Preview</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111111] md:text-4xl">
          Flip through the first pages.
        </h2>
        <p className="mt-4 text-[#4b5563]">
          A short sample of what&apos;s inside — including the cover and opening
          chapter.
        </p>
      </Reveal>

      <Reveal className="mt-12">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-[#e5e5e5] bg-[#f7f7f5]">
            <div className="flex aspect-[4/3] w-full items-center justify-center p-6 sm:p-10">
              <img
                key={pages[i].url}
                src={pages[i].url}
                alt={`STEM.3 ${pages[i].label}`}
                loading="lazy"
                className="max-h-full max-w-full rounded-md bg-white shadow-[0_20px_50px_-20px_rgba(17,17,17,0.25)] ring-1 ring-[#e5e5e5]"
              />
            </div>
            <button
              type="button"
              onClick={() => go(i - 1)}
              aria-label="Previous page"
              className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-[#111111] shadow-sm transition-colors hover:bg-[#f7f7f5]"
            >
              <Icons.ChevronL />
            </button>
            <button
              type="button"
              onClick={() => go(i + 1)}
              aria-label="Next page"
              className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-[#111111] shadow-sm transition-colors hover:bg-[#f7f7f5]"
            >
              <Icons.Chevron />
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm text-[#6b6b6b]">
            <span>
              {pages[i].label} · {i + 1} / {total}
            </span>
            <div className="flex gap-1.5">
              {pages.map((_, n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setI(n)}
                  aria-label={`Go to page ${n + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    n === i ? "w-6 bg-[#111111]" : "w-1.5 bg-[#d4d4d4]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={PDF_URL}
            download="STEM.3.pdf"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-[#2563eb] px-6 text-[15px] font-medium text-white transition-colors hover:bg-[#1d4ed8]"
          >
            <Icons.Download />
            Download the full book
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Download() {
  return (
    <section id="download" className="border-t border-[#e5e5e5] bg-white">
      <div className="container-page py-20 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#111111] md:text-5xl">
            Download STEM.3
          </h2>
          <p className="mt-5 text-lg text-[#4b5563]">
            No signup. No payment. No advertisements. Just free STEM education.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4">
            <a
              href={PDF_URL}
              download="STEM.3.pdf"
              className="inline-flex h-14 items-center gap-2.5 rounded-full bg-[#2563eb] px-8 text-base font-medium text-white transition-colors hover:bg-[#1d4ed8]"
            >
              <Icons.Download />
              Download PDF
            </a>
            <p className="text-sm text-[#6b6b6b]">
              Free forever · No account required
            </p>
          </div>

          <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-[#e5e5e5] text-left sm:grid-cols-4">
            {[
              ["Size", `${PDF_SIZE_MB} MB`],
              ["Pages", `${PDF_PAGES}`],
              ["Version", VERSION],
              ["Updated", LAST_UPDATED],
            ].map(([k, v]) => (
              <div key={k} className="bg-white p-5">
                <dt className="text-xs font-medium uppercase tracking-wide text-[#6b6b6b]">
                  {k}
                </dt>
                <dd className="mt-1 text-[15px] font-semibold text-[#111111]">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5] bg-white">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-[#6b6b6b]">
              Making STEM education freely accessible. Created by Siddharth
              Santhosh.
            </p>
          </div>
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm sm:grid-cols-3"
          >
            <a
              href="#about"
              className="text-[#374151] transition-colors hover:text-[#111111]"
            >
              About
            </a>
            <a
              href="#inside"
              className="text-[#374151] transition-colors hover:text-[#111111]"
            >
              Inside the Book
            </a>
            <a
              href="#download"
              className="text-[#374151] transition-colors hover:text-[#111111]"
            >
              Download
            </a>
            <a
              href="mailto:hello@stem3.example"
              className="text-[#374151] transition-colors hover:text-[#111111]"
            >
              Email
            </a>
            <a
              href="#"
              className="text-[#374151] transition-colors hover:text-[#111111]"
            >
              Privacy
            </a>
          </nav>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-[#e5e5e5] pt-6 text-xs text-[#6b6b6b] sm:flex-row">
          <p>© {new Date().getFullYear()} STEM.3 · All rights reserved.</p>
          <p>Free forever.</p>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-[#111111] focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <SocialProof />
        <Inside />
        <Why />
        <Preview />
        <Download />
      </main>
      <Footer />
    </>
  );
}
