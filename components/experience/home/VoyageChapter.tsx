"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ProjectStorySlideshow } from "@/components/experience/home/ProjectStorySlideshow";
import { StackChips } from "@/components/experience/home/StackChips";
import { getProject, secondaryProjects } from "@/data/projects";
import { gsap, registerMotion, useGSAP } from "@/lib/gsap";
import { storySlidesForProject } from "@/lib/project-slides";
import { cn } from "@/lib/utils";

registerMotion();

export function VoyageChapter() {
  const root = useRef<HTMLElement>(null);
  const gopaddi = getProject("gopaddi");
  const [previewSlug, setPreviewSlug] = useState(secondaryProjects[0]?.slug ?? "");
  const preview = secondaryProjects.find((item) => item.slug === previewSlug) ?? secondaryProjects[0];
  const gopaddiSlides = gopaddi ? storySlidesForProject(gopaddi) : [];

  useGSAP(
    () => {
      const node = root.current;
      if (!node) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: node,
          start: "top 70%",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      timeline.fromTo(".voyage-title", { y: 80, opacity: 0 }, { y: 0, opacity: 1, ease: "none" });
    },
    { scope: root },
  );

  if (!gopaddi) return null;

  return (
    <section id="voyage" ref={root} className="surface-bone relative overflow-hidden py-28">
      <div className="px-[5vw] md:px-[8vw]">
        <p className="index-mark">
          <span data-signal className="inline-block h-2 w-2 bg-signal align-middle" />
          <span className="ml-3">04 / Voyatek</span>
        </p>
        <h2 className="voyage-title display mt-6 max-w-5xl text-5xl tracking-tight md:text-7xl">
          Travel systems that have to stay transactional while they feel live.
        </h2>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-12">
          <div className="voyage-frame lg:col-span-8">
            <ProjectStorySlideshow
              slides={gopaddiSlides}
              tone="bone"
              imageClassName="border-ink/10"
            />
          </div>
          <div className="lg:col-span-4">
            <p className="display text-5xl">GoPaddi</p>
            <p className="mt-4 text-paper-dim">{gopaddi.summary}</p>
            <StackChips items={gopaddi.stack} tone="bone" className="mt-6" />
            <div className="mt-8 flex flex-wrap items-center gap-6">
              {gopaddi.href ? (
                <a href={gopaddi.href} target="_blank" rel="noreferrer" className="text-signal">
                  View live →
                </a>
              ) : null}
              <Link href="/work/gopaddi" className="index-mark text-stone hover:text-ink">
                Case study →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-ink/10 pt-12">
          <p className="index-mark">
            <span data-signal className="inline-block h-2 w-2 bg-signal align-middle" />
            <span className="ml-3">Other projects</span>
          </p>
          <h3 className="display mt-4 text-4xl tracking-tight md:text-6xl">The rest of the field.</h3>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:sticky lg:top-28 lg:col-span-5">
              {preview ? (
                <div>
                  <Link href={`/work/${preview.slug}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden border border-ink/10 bg-bone-deep">
                      <Image
                        key={preview.slug}
                        src={preview.image}
                        alt={preview.imageAlt}
                        fill
                        quality={92}
                        sizes="(min-width: 1024px) 42vw, 100vw"
                        className="object-contain object-center"
                      />
                    </div>
                  </Link>
                  <p className="display mt-5 text-3xl">{preview.name}</p>
                  <p className="mt-2 text-sm text-stone">{preview.summary}</p>
                  <StackChips items={preview.stack} tone="bone" className="mt-5" />
                  <div className="mt-6 flex flex-wrap items-center gap-6">
                    {preview.href ? (
                      <a href={preview.href} target="_blank" rel="noreferrer" className="text-signal">
                        View live →
                      </a>
                    ) : null}
                    <Link href={`/work/${preview.slug}`} className="index-mark text-stone hover:text-ink">
                      Case study →
                    </Link>
                  </div>
                </div>
              ) : null}
            </div>

            <ul className="divide-y divide-ink/10 border-y border-ink/10 lg:col-span-7">
              {secondaryProjects.map((item) => {
                const lit = item.slug === previewSlug;
                return (
                  <li key={item.slug}>
                    <Link
                      href={`/work/${item.slug}`}
                      onMouseEnter={() => setPreviewSlug(item.slug)}
                      onFocus={() => setPreviewSlug(item.slug)}
                      className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5"
                    >
                      <span className={cn("display text-2xl transition-colors duration-300", lit ? "text-signal" : "text-ink")}>
                        {item.name}
                      </span>
                      <span className={cn("index-mark transition-colors duration-300", lit ? "text-signal" : "text-stone")}>
                        {item.eyebrow}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
