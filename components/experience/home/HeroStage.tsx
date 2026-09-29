"use client";

import Image from "next/image";
import { useRef } from "react";
import { site } from "@/data/site";
import { gsap, registerMotion, useGSAP } from "@/lib/gsap";

registerMotion();

const first = "TIMILEHIN".split("");
const last = "ODUSANYA".split("");

export function HeroStage() {
  const root = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const node = root.current;
      const plane = stage.current;
      if (!node || !plane) return;

      const letters = gsap.utils.toArray<HTMLElement>(".hero-letter");
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const compact = window.matchMedia("(max-width: 1023px)").matches;
      if (reduced || compact) return;

      const onMove = (event: PointerEvent) => {
        const rect = plane.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        letters.forEach((letter, index) => {
          const depth = ((index % 5) + 1) * 10;
          gsap.to(letter, {
            x: x * depth * (index % 2 === 0 ? 1 : -1),
            y: y * depth * 0.7,
            duration: 0.85,
            ease: "power3.out",
            overwrite: "auto",
          });
        });
      };

      plane.addEventListener("pointermove", onMove);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: node,
          start: "top top",
          end: "+=260%",
          pin: true,
          scrub: 1.15,
          anticipatePin: 1,
        },
      });

      timeline
        .to(".hero-letter", {
          y: (index) => (index < 4 ? -30 : index % 2 === 0 ? -120 : 80),
          opacity: (index) => (index < 4 ? 1 : 0),
          filter: (index) => (index < 4 ? "blur(0px)" : "blur(12px)"),
          stagger: 0.018,
          ease: "none",
        })
        .to(".hero-letter-last", { y: -60, opacity: 0.15, stagger: 0.02, ease: "none" }, 0)
        .fromTo(".hero-alias", { y: 20, opacity: 0.35 }, { y: 0, opacity: 1, ease: "none" }, 0.1)
        .to(".hero-portrait", { scale: 1.08, y: -20, ease: "none" }, 0.2)
        .to(".hero-copy", { y: -12, ease: "none" }, 0.25);

      return () => {
        plane.removeEventListener("pointermove", onMove);
      };
    },
    { scope: root },
  );

  return (
    <section id="intro" ref={root} className="surface-bone relative">
      <div ref={stage} className="flex min-h-[100svh] flex-col justify-between px-[5vw] pt-28 pb-10 md:px-[8vw] md:pt-16">
        <div className="flex items-start justify-between gap-6">
          <p className="index-mark">
            <span data-signal className="inline-block h-2 w-2 bg-signal align-middle" />
            <span className="ml-3">{site.availability}</span>
          </p>
          <p className="index-mark hidden sm:block">{site.years} years in production</p>
        </div>

        <div className="relative grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h1 className="sr-only">
              {site.displayName}, {site.title}
            </h1>
            <p aria-hidden="true" className="hero-first display text-[10vw] leading-[0.82] tracking-[-0.055em] text-ink md:text-[11vw] md:leading-[0.78]">
              {first.map((letter, index) => (
                <span key={`${letter}-${index}`} className="hero-letter kinetic-letter">
                  {letter}
                </span>
              ))}
            </p>
            <p aria-hidden="true" className="hero-last display text-[10vw] leading-[0.82] tracking-[-0.055em] text-ink md:text-[11vw] md:leading-[0.78]">
              {last.map((letter, index) => (
                <span key={`${letter}-${index}`} className="hero-letter-last kinetic-letter">
                  {letter}
                </span>
              ))}
            </p>
            {/* <p className="hero-alias display mt-4 text-4xl text-signal md:text-6xl">Timi</p> */}
            <div className="hero-rule mt-8 h-px origin-left bg-signal" />
            <p className="hero-role mt-6 text-xl tracking-wide text-ink md:text-2xl">{site.title}</p>
            <p className="hero-copy measure mt-5 text-lg leading-relaxed text-paper-dim">
              Production software. AI systems. Integrations. Automation.
              Built through the full lifecycle - idea to architecture to production.
            </p>
            <div className="hero-meta mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {site.supporting.map((item) => (
                <span key={item} className="index-mark">
                  {item}
                </span>
              ))}
            </div>
            {/* <p className="mt-5 max-w-xl text-[0.68rem] leading-relaxed tracking-[0.16em] text-stone uppercase">
              {site.industries.join("  ·  ")}
            </p> */}
          </div>

          <div className="hero-portrait relative mx-auto aspect-[4/5] w-full max-w-[380px] overflow-hidden bg-bone-deep lg:ml-auto">
            <Image
              src={site.profileImage}
              alt={`${site.displayName}, ${site.title}`}
              fill
              priority
              sizes="(min-width: 1024px) 380px, 80vw"
              className="object-cover object-[50%_12%]"
            />
          </div>
        </div>

        <div className="flex items-end justify-between gap-6">
          <p className="index-mark">Scroll to enter the system</p>
          <p className="index-mark hidden md:block">01 - Intro</p>
        </div>
      </div>
    </section>
  );
}
