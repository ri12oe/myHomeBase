// Shared motion settings so every animation on the page feels like one system.
import type { Variants } from 'motion/react';

// Fast start, soft landing — matches the style guide's "out-expo-ish" curve.
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Fade in while rising, on page load. Spread onto an `m.*` element: <m.div {...fadeUp(0.2)} />
export function fadeUp(delay = 0, distance = 28, duration = 0.8) {
  return {
    initial: { opacity: 0, y: distance },
    animate: { opacity: 1, y: 0 },
    transition: { duration, delay, ease: EASE_OUT },
  };
}

/* ------------------------------------------------------------------ */
/* Scroll reveals                                                      */
/* Put `{...revealOnScroll}` on a parent and give it variants; children */
/* with `variants` (and no initial/animate of their own) follow along.  */
/* ------------------------------------------------------------------ */

// Plays once, when ~30% of the element is on screen.
export const revealOnScroll = {
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: true, amount: 0.3 },
} as const;

// A child that fades up into place.
export const riseVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

// A parent that reveals its children one after another.
export function staggerVariants(stagger = 0.08, delay = 0): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
}
