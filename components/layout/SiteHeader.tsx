"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site, socials } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 16);
      setHidden(current > last && current > 80);
      last = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        hidden && !open ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <div
        className={cn(
          "site-grid flex items-center justify-between py-5 transition-colors duration-500",
          scrolled || open ? "bg-ink/80 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <Link href="/" className="flex items-baseline gap-3" aria-label="Timi Odusanya home">
          <span className="display text-2xl tracking-tight text-paper">TO</span>
          <span className="index-mark hidden sm:inline">Senior Full Stack Engineer</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === pathname ||
              (item.href.startsWith("/") && !item.href.includes("#") && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "index-mark transition-colors duration-300 hover:text-paper",
                  active ? "text-paper" : "text-stone",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          {socials.slice(0, 2).map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="index-mark text-stone transition-colors hover:text-paper"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="index-mark text-copper transition-colors hover:text-copper-soft"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="index-mark text-paper lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-x-0 top-[4.25rem] z-40 h-[calc(100svh-4.25rem)] bg-ink px-5 pt-10 transition-opacity duration-400 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col gap-6" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="display text-5xl text-paper"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-16 flex flex-col gap-4">
          {socials.map((item) => (
            <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="index-mark">
              {item.label}
            </a>
          ))}
          <a href={site.resume} target="_blank" rel="noreferrer" className="index-mark text-copper">
            View resume
          </a>
        </div>
      </div>
    </header>
  );
}
