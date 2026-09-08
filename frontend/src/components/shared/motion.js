// Shared Framer Motion variants for scroll-reveal sections, matching the
// Editorial Operations design system's motion spec: editorial reveal easing
// [0.16, 1, 0.3, 1], 700ms, 24px rise, once per viewport, small stagger.

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export const viewportOnce = { once: true, margin: '-10%' };
