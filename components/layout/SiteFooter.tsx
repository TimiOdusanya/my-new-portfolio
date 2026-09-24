import Link from "next/link";
import { nav, site, socials } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="surface-bone border-t border-line">
      <div className="site-grid grid gap-12 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="display text-3xl">{site.displayName}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone">
            {site.title}. {site.availability}. Building production software, AI systems, and automation.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="index-mark">Index</p>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-paper-dim transition-colors hover:text-ink">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <p className="index-mark">Connect</p>
          <a href={`mailto:${site.email}`} className="text-sm text-paper-dim transition-colors hover:text-ink">
            {site.email}
          </a>
          {socials.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-paper-dim transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a href={site.resume} target="_blank" rel="noreferrer" className="text-sm text-signal">
            Resume
          </a>
        </div>
      </div>
      <div className="site-grid flex flex-col gap-3 border-t border-line py-6 text-stone sm:flex-row sm:items-center sm:justify-between">
        <p className="index-mark">© {new Date().getFullYear()} {site.name}</p>
        <p className="index-mark">{site.availability}</p>
      </div>
    </footer>
  );
}
