"use client";

import { motion, useReducedMotion } from "motion/react";

/** Ensō (円相) — an open zen brush circle. Decorative signature stroke. */
export function Enso({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      aria-hidden
    >
      <motion.path
        d="M136 34c-38-18-84-4-100 34-15 37 2 82 44 92 40 9 82-14 86-56 3-30-14-58-44-70"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}
