"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/data/site";
import { duration, easeOutExpo } from "@/lib/motion";
import { Magnetic } from "@/components/motion/Magnetic";

const lines = ["Timilehin", "Odusanya"];

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-28">
      <div className="site-grid">
        <div className="flex items-start justify-between gap-6">
          <p className="index-mark">
            <span className="text-copper">01</span>
            <span className="mx-3 text-line-strong">/</span>
            Index
          </p>
          <p className="index-mark text-right">
            {site.location}
            <span className="mx-3 text-line-strong">/</span>
            {site.availability}
          </p>
        </div>

        <div className="mt-10 grid items-end gap-12 lg:mt-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
          <div>
            <p className="index-mark text-copper">{site.title}</p>
            <h1 className="sr-only">
              {site.displayName}, {site.title}
            </h1>
            <div className="mt-5" aria-hidden="true">
              {lines.map((line, index) => (
                <div key={line} className="mask-line">
                  <motion.p
                    className="display text-[18vw] leading-[0.82] tracking-[-0.04em] text-paper sm:text-[13vw] lg:text-[8.6rem] xl:text-[10rem]"
                    initial={reduced ? false : { y: "120%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: duration.reveal,
                      ease: easeOutExpo,
                      delay: 0.12 + index * 0.12,
                    }}
                  >
                    {line}
                  </motion.p>
                </div>
              ))}
            </div>
            <motion.p
              className="mt-3 display text-3xl text-brass sm:text-4xl"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.8 }}
            >
              “Timi”
            </motion.p>

            <motion.p
              className="measure mt-8 text-lg leading-relaxed text-paper-dim sm:text-xl"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9, ease: easeOutExpo }}
            >
              Production software. AI systems. Integrations. Automation.
              Built through the full lifecycle - idea to architecture to
              production.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              {site.supporting.map((item) => (
                <span key={item} className="index-mark">
                  {item}
                </span>
              ))}
            </motion.div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic>
                <a
                  href="#work"
                  className="inline-flex items-center border border-paper px-6 py-3 text-sm text-paper transition-colors hover:bg-paper hover:text-ink"
                >
                  Selected systems
                </a>
              </Magnetic>
              <a
                href={`mailto:${site.email}`}
                className="index-mark text-copper transition-colors hover:text-copper-soft"
              >
                {site.email}
              </a>
            </div>
          </div>

          <motion.div
            className="relative mx-auto w-full max-w-[420px] lg:ml-auto"
            initial={reduced ? false : { clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.35, ease: easeOutExpo, delay: 0.35 }}
          >
            <div className="absolute -left-4 top-0 hidden h-full w-px bg-copper lg:block" />
            <div className="relative aspect-[4/5] overflow-hidden bg-ink-soft">
              <Image
                src={site.profileImage}
                alt={`${site.displayName}, ${site.title}`}
                fill
                priority
                sizes="(min-width: 1024px) 420px, 80vw"
                className="object-cover object-[50%_12%] grayscale-[20%]"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="index-mark">{site.availability}</p>
              <p className="index-mark text-copper">Open to conversations</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-16 border-t border-line">
        <dl className="site-grid grid grid-cols-2 gap-8 py-8 md:grid-cols-4">
          {[
            { value: "200K+", label: "Users on Loubby AI" },
            { value: "2,500+", label: "Companies shipped for" },
            { value: `${site.years} yrs`, label: "Production engineering" },
            { value: "4", label: "Sectors in production" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.08, duration: 0.7, ease: easeOutExpo }}
            >
              <dt className="index-mark">{item.label}</dt>
              <dd className="display mt-2 text-4xl text-paper md:text-5xl">{item.value}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
