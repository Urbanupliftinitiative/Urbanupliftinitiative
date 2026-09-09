import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeUp, viewportOnce } from './motion';
import Eyebrow from './Eyebrow';

// Generic "large media chapter" wrapper (PAGE_PATTERNS.md's public editorial
// page, step 4) — an eyebrow + heading, then a grid of MediaStoryCards
// passed in as children. Reused across Team/Programs/Partners/Events so
// photo placements share one consistent frame.
const PhotoSection = ({ eyebrow, heading, intro, children, tone = 'white' }) => (
  <section className={`${tone === 'warm' ? 'bg-ed-warm' : 'bg-white'} py-16 md:py-24 px-4 md:px-6`}>
    <div className="mx-auto w-full max-w-ed-container">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-10 max-w-2xl">
        {eyebrow && (
          <motion.div variants={fadeUp}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </motion.div>
        )}
        {heading && (
          <motion.h2 variants={fadeUp} className="text-[26px] md:text-[38px] font-extrabold tracking-[-0.02em] text-ed-ink mb-3">
            {heading}
          </motion.h2>
        )}
        {intro && (
          <motion.p variants={fadeUp} className="text-[15px] text-ed-muted">
            {intro}
          </motion.p>
        )}
      </motion.div>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6"
      >
        {children}
      </motion.div>
    </div>
  </section>
);

export default PhotoSection;
