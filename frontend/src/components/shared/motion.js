// Shared Framer Motion variants for scroll-reveal sections. Kept minimal —
// the brief calls for restrained, purposeful motion, not decoration.

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
};

export const viewportOnce = { once: true, margin: '-80px' };
