import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import { challengesAddressed } from '../../data/organization';

const NeedSection = () => (
  <section className="bg-uui-navy text-white py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-start">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
        <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest font-bold text-uui-gold mb-6">
          The Need in Camden
        </motion.p>
        <motion.h2 variants={fadeUp} className="font-sora text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
          Too many young men and seniors in Camden are navigating real hardship alone.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-lg text-white/70 leading-relaxed max-w-xl">
          Camden City residents face social and economic challenges that don't resolve on their own — and often
          fall hardest on young men without steady guidance and on seniors without reliable support. Urban Uplift
          Initiative exists to meet both of those needs directly, in the same neighborhoods we call home.
        </motion.p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-2 gap-3"
      >
        {challengesAddressed.map((item) => (
          <motion.div
            key={item}
            variants={fadeUp}
            className="rounded-2xl border border-white/15 bg-white/5 px-5 py-6"
          >
            <p className="text-sm md:text-base font-semibold text-white/90">{item}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default NeedSection;
