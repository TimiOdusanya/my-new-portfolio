"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ProjectStorySlideshow } from "@/components/experience/home/ProjectStorySlideshow";
import { StackChips } from "@/components/experience/home/StackChips";
import { getProject } from "@/data/projects";
import { gsap, registerMotion, useGSAP } from "@/lib/gsap";
import { storySlidesForProject } from "@/lib/project-slides";

registerMotion();

const nodes = [
  { id: "founder", label: "Founder", detail: "A raise, a thesis, a living inbox.", x: 8, y: 48 },
  { id: "llm", label: "Streaming LLM", detail: "Chat that works with retrieved context.", x: 28, y: 22 },
  { id: "search", label: "Semantic search", detail: "Embeddings over investor records.", x: 50, y: 18 },
  { id: "rank", label: "Ranking", detail: "Thesis fit, not keyword coincidence.", x: 70, y: 28 },
  { id: "crm", label: "Founder CRM", detail: "The graph of people and threads.", x: 46, y: 58 },
  { id: "mail", label: "Gmail / Outlook", detail: "OAuth, refresh, background sync.", x: 24, y: 78 },
  { id: "agent", label: "iMessage agents", detail: "Actions leave the product through webhooks.", x: 76, y: 72 },
] as const;

const links: Array<[string, string]> = [
  ["founder", "llm"],
  ["llm", "search"],
  ["search", "rank"],
  ["rank", "crm"],
  ["founder", "crm"],
  ["crm", "mail"],
  ["crm", "agent"],
];

export function ClimbSystem() {
  const project = getProject("climb");
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState<(typeof nodes)[number]["id"]>("founder");
  const current = nodes.find((node) => node.id === active) ?? nodes[0];
  const slides = project ? storySlidesForProject(project) : [];

  useGSAP(
    () => {
      const node = root.current;
      if (!node) return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return;

      const paths = gsap.utils.toArray<SVGPathElement>(".climb-link");
      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: node,
          start: "top top",
          end: "+=280%",
          pin: true,
          scrub: 1.05,
          anticipatePin: 1,
        },
      });

      timeline
        .fromTo(".climb-title", { y: 50, opacity: 0 }, { y: 0, opacity: 1, ease: "none" }, 0)
        .to(".climb-link", { strokeDashoffset: 0, stagger: 0.08, ease: "none" }, 0.12)
        .fromTo(
          ".climb-node",
          { scale: 0.6, opacity: 0 },
          { scale: 1, opacity: 1, stagger: 0.06, ease: "none" },
          0.18,
        )
        .fromTo(".climb-readout", { y: 24, opacity: 0 }, { y: 0, opacity: 1, ease: "none" }, 0.45);
    },
    { scope: root },
  );

  return (
    <section id="systems" ref={root} className="surface-moss relative overflow-hidden">
      <div className="flex min-h-[100svh] flex-col justify-between px-[5vw] py-16 md:px-[8vw]">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="index-mark">
              <span data-signal className="inline-block h-2 w-2 bg-signal align-middle" />
              <span className="ml-3">03 / CLIMB</span>
            </p>
            <h2 className="climb-title display mt-4 max-w-4xl text-5xl text-bone md:text-7xl">
              An investment bank that thinks in systems.
            </h2>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-2">
            {project?.href ? (
              <a href={project.href} target="_blank" rel="noreferrer" className="index-mark text-signal">
                View live →
              </a>
            ) : null}
            <Link href="/work/climb" className="index-mark text-bone/60 hover:text-bone">
              Case study →
            </Link>
          </div>
        </div>

        <div className="relative mt-10 h-[52vh] min-h-[320px]">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
            {links.map(([from, to]) => {
              const a = nodes.find((item) => item.id === from);
              const b = nodes.find((item) => item.id === to);
              if (!a || !b) return null;
              return (
                <path
                  key={`${from}-${to}`}
                  className="climb-link"
                  d={`M ${a.x} ${a.y} C ${a.x} ${(a.y + b.y) / 2}, ${b.x} ${(a.y + b.y) / 2}, ${b.x} ${b.y}`}
                  fill="none"
                  stroke="var(--signal)"
                  strokeWidth="0.28"
                  strokeOpacity="0.8"
                />
              );
            })}
          </svg>
          {nodes.map((node) => (
            <button
              key={node.id}
              type="button"
              data-signal={node.id === "crm" ? true : undefined}
              onMouseEnter={() => setActive(node.id)}
              onFocus={() => setActive(node.id)}
              onClick={() => setActive(node.id)}
              className="climb-node absolute -translate-x-1/2 -translate-y-1/2 text-left"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <span className="block h-3 w-3 rounded-full bg-signal shadow-[0_0_18px_var(--signal)]" />
              <span className="mt-2 block text-sm text-bone md:text-base">{node.label}</span>
            </button>
          ))}
        </div>

        {slides.length > 0 ? (
          <ProjectStorySlideshow slides={slides} className="mt-8" imageClassName="border-bone/15" />
        ) : null}

        <div className="climb-readout grid gap-6 border-t border-bone/15 pt-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="index-mark text-signal">{current.label}</p>
            <p className="mt-3 max-w-xl text-xl text-bone">{current.detail}</p>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-bone/65">
              I owned the Founder CRM architecture: streaming LLM chat, semantic
              investor discovery, Gmail and Outlook via OAuth and Microsoft Graph,
              token refresh, and iMessage agent infrastructure on PostgreSQL / AWS.
            </p>
            {project ? <StackChips items={project.stack} tone="ink" className="mt-5" /> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
