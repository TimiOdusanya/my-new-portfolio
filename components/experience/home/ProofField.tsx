"use client";

import { useRef } from "react";
import { testimonials } from "@/data/testimonials";
import { gsap, registerMotion, useGSAP } from "@/lib/gsap";

registerMotion();

export function ProofField() {
  const root = useRef<HTMLElement>(null);
  const primary = testimonials[0];

  useGSAP(
    () => {
      const node = root.current;
      if (!node || !primary) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: node,
          start: "top 72%",
        },
      });

      timeline
        .fromTo(".proof-mark", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" })
        .fromTo(
          ".proof-word",
          { y: "1.1em", opacity: 0 },
          { y: "0em", opacity: 1, stagger: 0.016, duration: 0.7, ease: "power3.out" },
          0.12,
        )
        .fromTo(".proof-meta", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, 0.45);
    },
    { scope: root },
  );

  if (!primary) return null;

  const words = primary.quote.split(" ");

  return (
    <section ref={root} className="surface-signal relative overflow-hidden px-[5vw] py-28 md:px-[8vw] md:py-40">
      <div className="flex items-start justify-between gap-8">
        <p className="index-mark !text-bone/70">04 / In his words</p>
        <p className="index-mark hidden !text-bone/70 md:block">DivVerse · Loubby AI</p>
      </div>

      <p className="proof-mark display mt-10 text-[22vw] leading-[0.7] text-bone/20 md:text-[9rem]" aria-hidden="true">
        “
      </p>

      <blockquote className="display -mt-8 max-w-6xl text-3xl leading-[1.18] text-bone md:-mt-14 md:text-3xl">
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className="mask-line mr-[0.28em] inline-block overflow-hidden">
            <span className="proof-word inline-block">{word}</span>
          </span>
        ))}
      </blockquote>

      <footer className="proof-meta mt-16 grid gap-6 border-t border-bone/25 pt-8 md:grid-cols-[1fr_1.2fr] md:items-end">
        <div>
          <p className="display text-4xl text-bone md:text-5xl">{primary.name}</p>
          <p className="mt-3 text-lg text-bone">{primary.title}</p>
        </div>
        <p className="index-mark !text-bone/70 md:text-right">{primary.context}</p>
      </footer>
    </section>
  );
}
