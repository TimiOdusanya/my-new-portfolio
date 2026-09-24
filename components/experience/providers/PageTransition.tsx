"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import { gsap, registerMotion, useGSAP } from "@/lib/gsap";

registerMotion();

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const veil = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced || !veil.current) return;

      gsap.fromTo(
        veil.current,
        { scaleY: 1 },
        {
          scaleY: 0,
          transformOrigin: "top",
          duration: 0.9,
          ease: "power4.inOut",
          delay: 0.04,
        },
      );
    },
    { dependencies: [pathname] },
  );

  return (
    <>
      <div
        ref={veil}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[90] origin-top bg-signal"
      />
      {children}
    </>
  );
}
