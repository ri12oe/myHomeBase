// Shared motion settings so every animation on the page feels like one system.

// Fast start, soft landing — matches the style guide's "out-expo-ish" curve.
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Fade in while rising. Spread onto an `m.*` element: <m.div {...fadeUp(0.2)} />
export function fadeUp(delay = 0, distance = 28, duration = 0.8) {
  return {
    initial: { opacity: 0, y: distance },
    animate: { opacity: 1, y: 0 },
    transition: { duration, delay, ease: EASE_OUT },
  };
}
