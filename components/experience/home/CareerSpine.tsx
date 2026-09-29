"use client";

import { useRef } from "react";
import { OwnershipCycle } from "@/components/experience/home/OwnershipCycle";
import { experience } from "@/data/experience";
import { gsap, registerMotion, useGSAP } from "@/lib/gsap";

registerMotion();

export function CareerSpine() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const node = root.current;
      const row = track.current;
      if (!node || !row) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (window.matchMedia("(max-width: 767px)").matches) return;

      const distance = row.scrollWidth - window.innerWidth + 120;
      gsap.to(row, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: node,
          start: "top top",
          end: () => `+=${distance}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });
    },
    { scope: root },
  );

  return (
    <section id="path" ref={root} className="surface-bone relative overflow-hidden">
      <div className="px-[5vw] pt-24 md:px-[8vw]">
        <p className="index-mark">
          <span data-signal className="inline-block h-2 w-2 bg-signal align-middle" />
          <span className="ml-3">05 / Path</span>
        </p>
        {/* <h2 className="display mt-5 text-5xl md:text-7xl">Roles where I owned the system.</h2> */}
        <h2 className="display mt-5 text-5xl md:text-7xl">My Work Experience</h2>
      </div>
      <div ref={track} className="mt-10 flex flex-col gap-12 px-[5vw] pb-16 md:mt-16 md:w-max md:flex-row md:gap-8 md:px-[8vw] md:pb-24">
        {experience.map((role) => (
          <article
            key={role.id}
            className="w-full shrink-0 border-t-2 border-signal pt-8 md:w-[36vw]"
          >
            <p className="index-mark">
              {role.start} - {role.end}
            </p>
            <p className="mt-2 index-mark text-signal">{role.location}</p>
            <h3 className="display mt-5 text-4xl md:text-5xl">{role.company}</h3>
            {role.product ? <p className="mt-2 text-signal">{role.product}</p> : null}
            <p className="mt-4 text-sm">{role.role}</p>
            <p className="mt-3 text-[0.68rem] tracking-[0.16em] text-stone uppercase">
              {role.domains.join("  ·  ")}
            </p>
            <p className="mt-6 max-w-lg text-paper-dim">{role.summary}</p>
            <OwnershipCycle items={role.owned} />
          </article>
        ))}
      </div>
    </section>
  );
}
