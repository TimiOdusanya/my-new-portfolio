"use client";

import { useRef, useState } from "react";
import { areaForSignal, practice, stackSignals } from "@/data/practice";
import { site } from "@/data/site";
import { gsap, registerMotion, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

registerMotion();

export function CapabilityStrip() {
  const root = useRef<HTMLElement>(null);
  const [focus, setFocus] = useState<string | null>(null);
  const active = practice.find((item) => item.id === focus);

  useGSAP(
    () => {
      const node = root.current;
      if (!node) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        ".cap-signal",
        { y: "0.8em", opacity: 0 },
        {
          y: "0em",
          opacity: 1,
          stagger: 0.05,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: node, start: "top 78%" },
        },
      );
      gsap.fromTo(
        ".cap-col",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: node, start: "top 68%" },
        },
      );
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="surface-ink relative overflow-hidden px-[5vw] py-24 md:px-[8vw] md:py-28"
      onMouseLeave={() => setFocus(null)}
    >
      <div className="flex items-start justify-between gap-6">
        <p className="index-mark">
          <span data-signal className="inline-block h-2 w-2 bg-signal align-middle" />
          <span className="ml-3">Production stack - readable in one look</span>
        </p>
        <p className="index-mark hidden max-w-md text-right md:block">
          {site.industries.slice(0, 7).join(" · ")}
        </p>
      </div>

      <div className="mt-12 flex flex-wrap items-end gap-x-5 gap-y-3 md:gap-x-8">
        {stackSignals.map((signal, index) => {
          const areaId = areaForSignal(signal);
          const lit = focus === null || focus === areaId;
          return (
            <button
              key={signal}
              type="button"
              className="mask-line"
              onMouseEnter={() => setFocus(areaId ?? null)}
              onFocus={() => setFocus(areaId ?? null)}
            >
              <span
                className={cn(
                  "cap-signal display inline-block leading-[0.84] tracking-[-0.05em] transition-colors duration-500",
                  index % 3 === 0 ? "text-6xl md:text-8xl" : "text-4xl md:text-6xl",
                  lit ? "text-bone" : "text-bone/20",
                  focus === areaId && "text-signal",
                )}
              >
                {signal}
              </span>
            </button>
          );
        })}
      </div>

      <ol className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
        {practice.map((area) => {
          const dimmed = focus !== null && focus !== area.id;
          return (
            <li key={area.id} className="cap-col">
              <button
                type="button"
                className="w-full text-left"
                onMouseEnter={() => setFocus(area.id)}
                onFocus={() => setFocus(area.id)}
              >
                <p className={cn("index-mark transition-colors duration-500", dimmed ? "text-bone/25" : "text-signal")}>
                  {area.index}
                </p>
                <h3
                  className={cn(
                    "display mt-3 text-3xl transition-colors duration-500 md:text-4xl",
                    dimmed ? "text-bone/25" : "text-bone",
                  )}
                >
                  {area.name}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {area.tools.map((tool) => (
                    <li
                      key={tool}
                      className={cn(
                        "rounded-full border px-3 py-1 text-[11px] tracking-[0.08em] uppercase transition-colors duration-500",
                        dimmed
                          ? "border-bone/10 text-bone/20"
                          : "border-bone/25 bg-bone/4 text-sand",
                      )}
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="mt-16 flex min-h-[4.5rem] items-end justify-between gap-8 border-t border-bone/10 pt-6">
        <p className="measure text-sm leading-relaxed text-sand">
          {active?.statement ??
            "Interfaces talk to microservices. Microservices talk to data. Cloud keeps it alive. AI and automation cut across - not a separate career."}
        </p>
        <p className="index-mark hidden shrink-0 md:block">Hover a layer</p>
      </div>
    </section>
  );
}
