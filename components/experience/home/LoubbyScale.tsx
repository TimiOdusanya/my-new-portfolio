"use client";

import Link from "next/link";
import { useRef } from "react";
import { ProjectStorySlideshow } from "@/components/experience/home/ProjectStorySlideshow";
import { StackChips } from "@/components/experience/home/StackChips";
import { getProject } from "@/data/projects";
import { gsap, registerMotion, useGSAP } from "@/lib/gsap";
import { storySlidesForProject } from "@/lib/project-slides";

registerMotion();

function formatUsers(value: number) {
  if (value >= 200000) return "200K+";
  if (value >= 1000) return `${Math.round(value / 1000)}K`;
  return String(Math.round(value));
}

export function LoubbyScale() {
  const project = getProject("loubby");
  const root = useRef<HTMLElement>(null);
  const number = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const node = root.current;
      if (!node || !project) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return;

      const state = { value: 0 };
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: node,
          start: "top top",
          end: "+=320%",
          pin: true,
          scrub: 1.1,
          anticipatePin: 1,
        },
      });

      timeline
        .to(state, {
          value: 200000,
          ease: "none",
          onUpdate: () => {
            if (number.current) number.current.textContent = formatUsers(state.value);
          },
        })
        .fromTo(".loubby-kicker", { opacity: 0, y: 24 }, { opacity: 1, y: 0, ease: "none" }, 0.08)
        .fromTo(".loubby-users", { opacity: 0 }, { opacity: 1, ease: "none" }, 0.18)
        .to(".loubby-number", { scale: 0.42, y: -70, ease: "none" }, 0.42)
        .fromTo(".loubby-second", { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: "none" }, 0.48)
        .fromTo(
          ".loubby-frame",
          { clipPath: "inset(18% 18% 18% 18%)", scale: 1.08 },
          { clipPath: "inset(0% 0% 0% 0%)", scale: 1, ease: "none" },
          0.55,
        )
        .fromTo(".loubby-note", { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: "none" }, 0.7);
    },
    { scope: root },
  );

  if (!project) return null;

  const slides = storySlidesForProject(project);

  return (
    <section id="scale" ref={root} className="surface-ink relative overflow-hidden">
      <div className="flex min-h-[100svh] flex-col justify-between px-[5vw] py-16 md:px-[8vw]">
        <div className="flex items-start justify-between">
          <p className="loubby-kicker index-mark">
            <span data-signal className="inline-block h-2 w-2 bg-signal align-middle" />
            <span className="ml-3">02 / Loubby AI · DivVerse</span>
          </p>
          <p className="index-mark hidden md:block">Talent · payroll · HR</p>
        </div>

        <div className="relative">
          <p
            ref={number}
            className="loubby-number display text-center text-[28vw] leading-[0.78] tracking-[-0.06em] text-signal md:text-[20vw]"
          >
            0
          </p>
          <p className="loubby-users mt-2 text-center text-2xl text-bone md:text-4xl">active users</p>
          <div className="loubby-second mt-10 grid items-end gap-8 md:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="display text-6xl text-bone md:text-8xl">2,500+</p>
              <p className="mt-2 text-lg text-sand">companies on the platform</p>
            </div>
            <p className="measure text-lg text-bone/70">
              {project.summary} I led the full stack - AI assessments, matching,
              payroll, the 3MTT marketplace, .NET services, and the identity
              layer underneath.
            </p>
          </div>
        </div>

        <div className="grid items-end gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <ProjectStorySlideshow
            slides={slides}
            className="loubby-frame"
            imageClassName="border-bone/15"
          />
          <div className="loubby-note">
            <p className="index-mark">Owned</p>
            <ul className="mt-4 space-y-2 text-sm text-bone/75">
              {project.owned.slice(0, 4).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <StackChips items={project.stack} tone="ink" className="mt-6" />
            <div className="mt-6 flex flex-wrap items-center gap-6">
              {project.href ? (
                <a href={project.href} target="_blank" rel="noreferrer" className="text-signal">
                  View live →
                </a>
              ) : null}
              <Link href="/work/loubby" className="index-mark text-sand hover:text-bone">
                Case study →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
