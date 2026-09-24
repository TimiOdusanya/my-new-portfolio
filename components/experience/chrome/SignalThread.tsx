"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap, registerMotion } from "@/lib/gsap";

registerMotion();

function collectPoints() {
  const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-signal]"));
  return nodes
    .map((node) => {
      const rect = node.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2 + window.scrollX,
        y: rect.top + rect.height / 2 + window.scrollY,
      };
    })
    .sort((a, b) => a.y - b.y);
}

function toPath(points: { x: number; y: number }[]) {
  if (points.length === 0) return "";
  return points.reduce((path, point, index) => {
    if (index === 0) return `M ${point.x} ${point.y}`;
    const previous = points[index - 1];
    if (!previous) return path;
    const midY = (previous.y + point.y) / 2;
    return `${path} C ${previous.x} ${midY}, ${point.x} ${midY}, ${point.x} ${point.y}`;
  }, "");
}

export function SignalThread() {
  const pathname = usePathname();
  const pathRef = useRef<SVGPathElement>(null);
  const pulseRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const svg = pathRef.current?.ownerSVGElement;
    if (!pathRef.current || !svg) return undefined;

    const draw = () => {
      const points = collectPoints();
      svg.setAttribute("height", String(Math.max(document.documentElement.scrollHeight, window.innerHeight)));
      pathRef.current?.setAttribute("d", toPath(points));
    };

    draw();
    window.addEventListener("resize", draw);
    window.addEventListener("scroll", draw, { passive: true });

    const pulse = pulseRef.current;
    const path = pathRef.current;
    let tween: gsap.core.Tween | undefined;

    if (!reduced && pulse && path) {
      const state = { t: 0 };
      tween = gsap.to(state, {
        t: 1,
        duration: 8,
        repeat: -1,
        ease: "none",
        onUpdate: () => {
          const length = path.getTotalLength();
          if (!length) return;
          const point = path.getPointAtLength(state.t * length);
          pulse.setAttribute("cx", String(point.x));
          pulse.setAttribute("cy", String(point.y));
        },
      });
    }

    return () => {
      window.removeEventListener("resize", draw);
      window.removeEventListener("scroll", draw);
      tween?.kill();
    };
  }, [pathname]);

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute top-0 left-0 z-10 hidden w-full overflow-visible md:block"
      width="100%"
    >
      <path
        ref={pathRef}
        fill="none"
        stroke="var(--signal)"
        strokeWidth="1.25"
        strokeOpacity="0.5"
      />
      <circle ref={pulseRef} r="3.5" fill="var(--signal)" />
    </svg>
  );
}
