import { useReducedMotion } from 'framer-motion';

// Returns spreadable framer-motion props for the standard editorial reveal
// (fade + rise, once per viewport), or {} when the user prefers reduced
// motion. Usage: <motion.div {...useReveal()}>
export default function useReveal(delay = 0) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return {};
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-10%' },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  };
}
