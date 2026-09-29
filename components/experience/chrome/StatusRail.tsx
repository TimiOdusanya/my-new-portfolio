"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { chapters, nav, site, socials } from "@/data/site";
import { cn } from "@/lib/utils";

export function StatusRail() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [chapter, setChapter] = useState<(typeof chapters)[number]["id"]>("intro");

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const nodes = chapters
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (nodes.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setChapter(visible.target.id as (typeof chapters)[number]["id"]);
        }
      },
      { threshold: [0.25, 0.5, 0.75] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <aside className="pointer-events-none fixed inset-x-0 top-0 z-50 mix-blend-difference md:inset-x-auto md:bottom-0 md:left-0 md:w-20">
        <div className="pointer-events-auto flex items-center justify-between px-5 py-4 text-bone md:h-full md:flex-col md:items-start md:px-5 md:py-7">
          <Link href="/" className="display text-2xl leading-none tracking-tight">
            TO
          </Link>
          <p className="hidden rotate-180 text-[0.62rem] tracking-[0.22em] uppercase [writing-mode:vertical-rl] md:block">
            {site.title}
          </p>
          <button
            type="button"
            className="index-mark !text-bone md:hidden"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </aside>

      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 hidden justify-end px-6 py-6 mix-blend-difference md:flex">
        <div className="pointer-events-auto flex items-center gap-6 text-bone">
          <Link href="/#scale" className="index-mark">
            Work
          </Link>
          <Link href="/automation" className="index-mark">
            Automation
          </Link>
          <Link href="/about" className="index-mark">
            About
          </Link>
          {socials.slice(0, 2).map((item) => (
            <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="index-mark">
              {item.label}
            </a>
          ))}
          <a href={site.resume} target="_blank" rel="noreferrer" className="index-mark">
            Resume
          </a>
          <a href={`mailto:${site.email}`} className="index-mark">
            {site.email}
          </a>
        </div>
      </div>

      {pathname === "/" ? (
        <div className="pointer-events-none fixed right-5 bottom-6 z-40 hidden md:block">
          <p className="index-mark text-right">
            {String(chapters.findIndex((item) => item.id === chapter) + 1).padStart(2, "0")}
            <span className="mx-2">/</span>
            {chapters.find((item) => item.id === chapter)?.label}
          </p>
        </div>
      ) : null}

      <nav
        className={cn(
          "fixed inset-0 z-50 overflow-y-auto bg-ink px-8 pt-24 pb-16 text-bone transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden",
          open ? "translate-y-0" : "-translate-y-full",
        )}
        aria-label="Mobile"
      >
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="display block py-3 text-4xl sm:text-5xl"
          >
            {item.label}
          </Link>
        ))}
        <div className="mt-12 flex flex-col gap-3">
          {socials.map((item) => (
            <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="index-mark !text-bone">
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
