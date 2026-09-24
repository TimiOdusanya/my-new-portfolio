"use client";

import { useMemo, useRef, useState } from "react";
import type { AutomationProject } from "@/data/types";
import { gsap, registerMotion, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

registerMotion();

const layout = [
  { x: 50, y: 8 },
  { x: 50, y: 24 },
  { x: 50, y: 40 },
  { x: 50, y: 56 },
  { x: 50, y: 72 },
  { x: 50, y: 88 },
];

export function Laboratory({ projects }: { projects: AutomationProject[] }) {
  const root = useRef<HTMLElement>(null);
  const [slug, setSlug] = useState(projects[0]?.slug ?? "");
  const active = useMemo(
    () => projects.find((project) => project.slug === slug) ?? projects[0],
    [projects, slug],
  );
  const [step, setStep] = useState(0);

  useGSAP(
    () => {
      const node = root.current;
      if (!node || !active) return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const paths = gsap.utils.toArray<SVGPathElement>(".lab-link");
      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: reduced ? 0 : length });
      });

      if (reduced) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: node,
          start: "top top",
          end: "+=340%",
          pin: true,
          scrub: 1.05,
          anticipatePin: 1,
          onUpdate: (self) => {
            const index = Math.min(
              active.steps.length - 1,
              Math.floor(self.progress * active.steps.length),
            );
            setStep((current) => (current === index ? current : index));
          },
        },
      });

      timeline
        .to(".lab-link", { strokeDashoffset: 0, stagger: 0.1, ease: "none" }, 0)
        .fromTo(".lab-node", { scale: 0.7, opacity: 0.3 }, { scale: 1, opacity: 1, stagger: 0.08, ease: "none" }, 0.05);
    },
    { scope: root, dependencies: [active?.slug] },
  );

  if (!active) return null;
  const current = active.steps[step] ?? active.steps[0];

  return (
    <section ref={root} className="surface-night relative min-h-[100svh] text-bone">
      <div className="grid min-h-[100svh] gap-8 px-[5vw] py-20 md:px-[8vw] lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="index-mark">
            <span data-signal className="inline-block h-2 w-2 bg-signal align-middle" />
            <span className="ml-3">Laboratory</span>
          </p>
          <h1 className="display mt-6 text-4xl md:text-6xl">Watch work move through a system.</h1>
          <ol className="mt-10">
            {projects.map((project) => (
              <li key={project.slug} className="border-t border-bone/10 last:border-b">
                <button
                  type="button"
                  onClick={() => {
                    setSlug(project.slug);
                    setStep(0);
                  }}
                  className="flex w-full items-baseline justify-between py-4 text-left"
                >
                  <span>
                    <span className="index-mark">{project.index} / {project.system}</span>
                    <span className={cn("mt-1 block text-xl", project.slug === active.slug ? "text-bone" : "text-sand")}>
                      {project.name}
                    </span>
                  </span>
                  {project.slug === active.slug ? <span className="index-mark text-signal">Run</span> : null}
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
            {active.steps.slice(0, -1).map((item, index) => {
              const a = layout[index];
              const b = layout[index + 1];
              if (!a || !b) return null;
              return (
                <path
                  key={item.id}
                  className="lab-link"
                  d={`M ${a.x} ${a.y} L ${b.x} ${b.y}`}
                  fill="none"
                  stroke="var(--signal)"
                  strokeWidth="0.35"
                />
              );
            })}
          </svg>

          {active.steps.map((item, index) => {
            const point = layout[index];
            if (!point) return null;
            const isCurrent = index === step;
            return (
              <button
                key={item.id}
                type="button"
                data-signal={index === 0 ? true : undefined}
                onClick={() => setStep(index)}
                className="lab-node absolute -translate-x-1/2 -translate-y-1/2 text-center"
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
              >
                <span
                  className={cn(
                    "mx-auto block h-3 w-3 rounded-full",
                    isCurrent ? "bg-signal shadow-[0_0_22px_var(--signal)]" : "bg-bone/40",
                  )}
                />
                <span className={cn("mt-2 block text-xs tracking-[0.18em] uppercase", isCurrent ? "text-signal" : "text-sand")}>
                  {item.kind}
                </span>
                <span className={cn("mt-1 block text-sm", isCurrent ? "text-bone" : "text-sand")}>{item.label}</span>
              </button>
            );
          })}

          {current ? (
            <div className="absolute right-0 bottom-0 max-w-sm border-t border-bone/15 pt-5" aria-live="polite">
              <p className="index-mark text-signal">State · {current.kind}</p>
              <p className="display mt-3 text-3xl">{current.label}</p>
              <p className="mt-3 text-sm text-sand">{current.detail}</p>
              <div className="mt-5 grid gap-3 text-xs text-sand">
                <p>
                  <span className="index-mark block">Trigger</span>
                  {active.trigger}
                </p>
                <p>
                  <span className="index-mark block">Write-back</span>
                  {active.outcome}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
