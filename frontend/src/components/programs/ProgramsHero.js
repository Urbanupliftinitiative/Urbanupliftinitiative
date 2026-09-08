import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';

const ProgramsHero = () => (
  <section className="bg-uui-navy text-white pt-[140px] pb-20 md:pt-[168px] md:pb-28 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
        <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest font-bold text-uui-gold mb-4">
          Our Work
        </motion.p>
        <motion.h1 variants={fadeUp} className="font-sora text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
          Two programs. One community.
        </motion.h1>
        <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
          Urban Uplift Initiative runs a structured mentorship program for at-risk young men and a
          community-development effort supporting Camden's seniors and families — built through partnership, not
          in isolation.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default ProgramsHero;
