import type { Variants } from "motion/react";

/** Signature premium easing used site-wide (Apple/Linear-style). */
export const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Premium reveal: fade + slide + subtle scale + blur-to-sharp.
 * Pass a numeric `custom` index for staggered card reveals.
 * Framer Motion's MotionConfig (reducedMotion="user") neutralises the
 * transform/opacity for users who prefer reduced motion.
 */
export const reveal: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.985, filter: "blur(6px)" },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay: i * 0.08, ease: EASE },
  }),
};

/** Lighter reveal for headings / single blocks (no scale). */
export const revealUp: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(5px)" },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay: i * 0.07, ease: EASE },
  }),
};

/** Parent container that staggers children reveals one after another. */
export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

/** Shared in-view config so every section animates consistently. */
export const inView = { once: true, margin: "-80px" } as const;
export const inViewClose = { once: true, margin: "-60px" } as const;
