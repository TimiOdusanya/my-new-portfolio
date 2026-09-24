"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ArchitectureLink, ArchitectureNode } from "@/data/types";
import { easeOutExpo } from "@/lib/motion";

type ArchitectureMapProps = {
  nodes: ArchitectureNode[];
  links: ArchitectureLink[];
  tone?: "ink" | "paper";
};

export function ArchitectureMap({ nodes, links, tone = "paper" }: ArchitectureMapProps) {
  const reduced = useReducedMotion();
  const muted = "text-stone";
  const line = tone === "ink" ? "bg-line" : "bg-paper-line";
  const label = tone === "ink" ? "text-bone" : "text-ink";

  return (
    <div className="relative">
      <ol className="grid gap-0 md:grid-cols-3">
        {nodes.map((node, index) => (
          <motion.li
            key={node.id}
            className="relative border-t border-line py-6 pr-6 md:border-line"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: easeOutExpo, delay: index * 0.06 }}
          >
            <p className="index-mark text-copper">
              {String(index + 1).padStart(2, "0")}
              {links.some((link) => link.from === node.id) ? " →" : ""}
            </p>
            <p className={`mt-3 text-xl ${label}`}>{node.label}</p>
            <p className={`mt-2 text-sm leading-relaxed ${muted}`}>{node.detail}</p>
            {index < nodes.length - 1 ? (
              <span className={`absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 md:block ${line}`} />
            ) : null}
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
