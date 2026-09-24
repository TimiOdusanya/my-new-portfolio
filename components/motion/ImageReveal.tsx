"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { duration, easeOutExpo, easeOutQuart } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ImageRevealProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  parallax?: boolean;
};

export function ImageReveal({
  src,
  alt,
  className,
  sizes = "(min-width: 1024px) 60vw, 100vw",
  priority = false,
  parallax = true,
}: ImageRevealProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <motion.div
      ref={ref}
      className={cn("relative overflow-hidden bg-ink-soft", className)}
      initial={reduced ? false : { clipPath: "inset(12% 8% 12% 8%)" }}
      whileInView={reduced ? undefined : { clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: duration.image, ease: easeOutExpo }}
    >
      <motion.div
        className="absolute inset-0"
        style={reduced || !parallax ? undefined : { y }}
        initial={reduced ? false : { scale: 1.14 }}
        whileInView={reduced ? undefined : { scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: easeOutQuart }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      </motion.div>
    </motion.div>
  );
}
