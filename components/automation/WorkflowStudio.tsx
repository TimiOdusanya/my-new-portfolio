"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { AutomationProject } from "@/data/types";
import { easeOutExpo } from "@/lib/motion";
import { cn } from "@/lib/utils";

type WorkflowStudioProps = {
  projects: AutomationProject[];
};

export function WorkflowStudio({ projects }: WorkflowStudioProps) {
  const reduced = useReducedMotion();
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug ?? "");
  const active = useMemo(
    () => projects.find((project) => project.slug === activeSlug) ?? projects[0],
    [activeSlug, projects],
  );
  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    setStepIndex(0);
    setPlaying(true);
  }, [activeSlug]);

  useEffect(() => {
    if (!active || reduced || !playing) return;
    const id = window.setInterval(() => {
      setStepIndex((current) => (current + 1) % active.steps.length);
    }, 1700);
    return () => window.clearInterval(id);
  }, [active, playing, reduced]);

  if (!active) return null;

  const current = active.steps[stepIndex] ?? active.steps[0];
  const progress = ((stepIndex + 1) / active.steps.length) * 100;

  return (
    <div className="grid gap-14 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
      <ol>
        {projects.map((project) => {
          const selected = project.slug === active.slug;
          return (
            <li key={project.slug} className="border-t border-line last:border-b">
              <button
                type="button"
                onClick={() => setActiveSlug(project.slug)}
                className="flex w-full items-baseline justify-between gap-4 py-5 text-left"
              >
                <span className="flex flex-col gap-1">
                  <span className="index-mark">
                    {project.index} / {project.system}
                  </span>
                  <span className={cn("display text-3xl", selected ? "text-paper" : "text-stone")}>
                    {project.name}
                  </span>
                </span>
                {selected ? <span className="index-mark text-copper">Live</span> : null}
              </button>
            </li>
          );
        })}
      </ol>

      <div>
        <p className="measure text-lg text-paper-dim">{active.summary}</p>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {active.stack.map((item) => (
            <span key={item} className="index-mark">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-between">
            <p className="index-mark">Run</p>
            <button type="button" onClick={() => setPlaying((value) => !value)} className="index-mark text-copper">
              {playing && !reduced ? "Pause" : "Play"}
            </button>
          </div>
          <div className="mt-4 h-px bg-line">
            <motion.div
              className="h-px bg-copper"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.45, ease: easeOutExpo }}
            />
          </div>
        </div>

        <ol className="mt-8 hidden gap-0 md:grid" style={{ gridTemplateColumns: `repeat(${active.steps.length}, minmax(0, 1fr))` }}>
          {active.steps.map((step, index) => {
            const isCurrent = index === stepIndex;
            const isPast = index < stepIndex;
            return (
              <li key={step.id} className="relative pr-3">
                <button
                  type="button"
                  onClick={() => {
                    setStepIndex(index);
                    setPlaying(false);
                  }}
                  className="w-full text-left"
                >
                  <span className={cn("block h-2 w-2 rounded-full", isCurrent ? "bg-copper" : isPast ? "bg-brass" : "bg-line-strong")} />
                  <span className="index-mark mt-4 block">{step.kind}</span>
                  <span className={cn("mt-2 block text-sm", isCurrent ? "text-paper" : "text-stone")}>
                    {step.label}
                  </span>
                </button>
                {index < active.steps.length - 1 ? (
                  <span className="absolute top-1 left-3 right-0 h-px bg-line" />
                ) : null}
              </li>
            );
          })}
        </ol>

        <ol className="mt-8 space-y-1 md:hidden">
          {active.steps.map((step, index) => {
            const isCurrent = index === stepIndex;
            return (
              <li key={step.id}>
                <button
                  type="button"
                  onClick={() => {
                    setStepIndex(index);
                    setPlaying(false);
                  }}
                  className="flex w-full gap-4 py-2 text-left"
                >
                  <span className={cn("index-mark pt-1", isCurrent ? "text-copper" : "text-stone")}>
                    {step.kind}
                  </span>
                  <span className={isCurrent ? "text-paper" : "text-stone"}>{step.label}</span>
                </button>
              </li>
            );
          })}
        </ol>

        <AnimatePresence mode="wait">
          {current ? (
            <motion.div
              key={`${active.slug}-${current.id}`}
              initial={reduced ? false : { clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              exit={reduced ? undefined : { opacity: 0 }}
              transition={{ duration: 0.55, ease: easeOutExpo }}
              className="mt-10 border-t border-line pt-8"
              aria-live="polite"
            >
              <p className="index-mark text-copper">Current state</p>
              <p className="display mt-4 text-3xl text-paper md:text-4xl">{current.label}</p>
              <p className="measure mt-4 text-paper-dim">{current.detail}</p>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <p>
                  <span className="index-mark block text-brass">Trigger</span>
                  <span className="mt-2 block text-sm text-paper-dim">{active.trigger}</span>
                </p>
                <p>
                  <span className="index-mark block text-brass">Write-back</span>
                  <span className="mt-2 block text-sm text-paper-dim">{active.outcome}</span>
                </p>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
