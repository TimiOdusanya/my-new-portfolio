"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type StorySlide = {
  src: string;
  alt: string;
  title: string;
  body: string;
};

type ProjectStorySlideshowProps = {
  slides: StorySlide[];
  tone?: "ink" | "bone";
  captions?: boolean;
  fit?: "cover" | "contain";
  className?: string;
  imageClassName?: string;
};

export function ProjectStorySlideshow({
  slides,
  tone = "ink",
  captions = true,
  fit = "contain",
  className,
  imageClassName,
}: ProjectStorySlideshowProps) {
  const [index, setIndex] = useState(0);
  const active = slides[index] ?? slides[0];

  useEffect(() => {
    if (slides.length <= 1) return undefined;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return undefined;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  if (!active) return null;

  return (
    <div className={cn("grid gap-5", className)}>
      <div className={cn("relative aspect-[16/10] overflow-hidden border bg-bone-deep/40", imageClassName)}>
        {slides.map((slide, slideIndex) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            quality={90}
            sizes="(min-width: 1280px) 80vw, 100vw"
            className={cn(
              "transition-opacity duration-700",
              fit === "contain" ? "object-contain object-center" : "object-cover object-center",
              slideIndex === index ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
        {slides.length > 1 ? (
          <div className="absolute bottom-3 left-3 flex gap-1.5">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Show slide ${slideIndex + 1}`}
                onClick={() => setIndex(slideIndex)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  slideIndex === index ? "w-6 bg-signal" : tone === "ink" ? "w-1.5 bg-bone/40" : "w-1.5 bg-ink/25",
                )}
              />
            ))}
          </div>
        ) : null}
      </div>
      {captions ? (
      <div>
        <p className="index-mark text-signal">{active.title}</p>
        <p
          className={cn(
            "mt-2 text-sm leading-relaxed md:text-base",
            tone === "ink" ? "text-bone/75" : "text-paper-dim",
          )}
        >
          {active.body}
        </p>
      </div>
      ) : null}
    </div>
  );
}
