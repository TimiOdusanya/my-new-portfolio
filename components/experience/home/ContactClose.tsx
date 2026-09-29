"use client";

import Link from "next/link";
import { Magnetic } from "@/components/motion/Magnetic";
import { site, socials } from "@/data/site";

const channels = [
  {
    index: "01",
    label: "GitHub",
    href: "https://github.com/TimiOdusanya",
    meta: "TimiOdusanya",
    note: "Source, systems, and how the work is cut.",
    external: true,
  },
  {
    index: "02",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/timi-odusanya/",
    meta: "/in/timi-odusanya",
    note: "Roles, recommendations, and the longer path.",
    external: true,
  },
  {
    index: "03",
    label: "X",
    href: "https://twitter.com/timi_odusanya",
    meta: "@timi_odusanya",
    note: "A shorter public thread.",
    external: true,
  },
  {
    index: "04",
    label: "Resume",
    href: site.resume,
    meta: "PDF",
    note: "The document a recruiter can forward.",
    external: true,
  },
  {
    index: "05",
    label: "Automation",
    href: "/automation",
    meta: "Laboratory",
    note: "Watch a system run - trigger to write-back.",
    external: false,
  },
] as const;

export function ContactClose() {
  return (
    <section id="contact" className="surface-bone relative px-[5vw] py-32 md:px-[8vw]">
      <p className="index-mark">
        <span data-signal className="inline-block h-2 w-2 bg-signal align-middle" />
        <span className="ml-3">06 / Contact</span>
      </p>
      <h2 className="display mt-8 max-w-5xl text-5xl tracking-tight md:text-7xl">
        If you are hiring someone who can own the product end to end - write.
      </h2>
      <Magnetic className="mt-16 inline-block">
        <a
          href={`mailto:${site.email}`}
          className="display block max-w-full text-2xl break-words text-signal underline decoration-signal/40 underline-offset-8 transition-colors hover:text-ink hover:decoration-ink sm:text-6xl md:text-7xl"
        >
          {site.email}
        </a>
      </Magnetic>
      <p className="mt-6 index-mark">{site.availability}</p>

      <ul className="mt-24 grid gap-0 border-t border-ink/10 md:grid-cols-5">
        {channels.map((channel) => {
          const inner = (
            <>
              <span className="index-mark text-stone transition-colors duration-500 group-hover:text-bone/60">
                {channel.index}
              </span>
              <span className="display mt-8 block text-3xl md:text-4xl">{channel.label}</span>
              <span className="mt-3 block text-sm text-stone transition-colors duration-500 group-hover:text-bone/70">
                {channel.meta}
              </span>
              <span className="mt-8 block max-w-[16rem] text-sm leading-relaxed text-paper-dim transition-colors duration-500 group-hover:text-bone/80">
                {channel.note}
              </span>
              <span className="mt-10 inline-block text-sm text-signal transition-colors duration-500 group-hover:text-bone">
                Open →
              </span>
            </>
          );

          const className =
            "group relative flex min-h-[22rem] flex-col border-b border-ink/10 p-6 transition-colors duration-500 hover:bg-ink hover:text-bone md:border-r md:border-b-0 md:last:border-r-0";

          if (channel.external) {
            return (
              <li key={channel.href}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className={className}
                >
                  {inner}
                </a>
              </li>
            );
          }

          return (
            <li key={channel.href}>
              <Link href={channel.href} className={className}>
                {inner}
              </Link>
            </li>
          );
        })}
      </ul>

      <p className="sr-only">
        Also on {socials.map((item) => item.label).join(", ")}.
      </p>
    </section>
  );
}
