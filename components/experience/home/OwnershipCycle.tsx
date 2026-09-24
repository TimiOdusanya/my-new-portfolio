"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type OwnershipCycleProps = {
  items: string[];
};

export function OwnershipCycle({ items }: OwnershipCycleProps) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const current = items[index] ?? items[0];

  useEffect(() => {
    if (reduced || items.length < 2) return undefined;
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % items.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [items.length, reduced]);

  if (!current) return null;

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between gap-4">
        <p className="index-mark">
          Owned
          <span className="mx-2 text-signal">
            {String(index + 1).padStart(2, "0")}
          </span>
          / {String(items.length).padStart(2, "0")}
        </p>
        {items.length > 1 ? (
          <div className="flex gap-3">
            <button
              type="button"
              className="index-mark hover:text-signal"
              onClick={() => setIndex((value) => (value - 1 + items.length) % items.length)}
              aria-label="Previous ownership"
            >
              Prev
            </button>
            <button
              type="button"
              className="index-mark hover:text-signal"
              onClick={() => setIndex((value) => (value + 1) % items.length)}
              aria-label="Next ownership"
            >
              Next
            </button>
          </div>
        ) : null}
      </div>
      <div className="relative mt-4 min-h-[5.5rem]">
        <AnimatePresence mode="wait">
          <motion.p
            key={current}
            initial={reduced ? false : { y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduced ? undefined : { y: -14, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-lg text-sm leading-relaxed text-ink"
          >
            {current}
          </motion.p>
        </AnimatePresence>
      </div>
      <div className="mt-4 flex gap-1.5" aria-hidden="true">
        {items.map((item, itemIndex) => (
          <button
            key={item}
            type="button"
            onClick={() => setIndex(itemIndex)}
            className={`h-px w-8 transition-colors ${itemIndex === index ? "bg-signal" : "bg-ink/15"}`}
          />
        ))}
      </div>
    </div>
  );
}
