import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import Eyebrow from '../shared/Eyebrow';
import { howWeCreateChange } from '../../data/organization';

const MethodologySection = () => (
  <section className="bg-ed-dark text-white py-20 md:py-28 lg:py-36">
    <div className="mx-auto w-full max-w-ed-container px-4 md:px-6">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-14 max-w-2xl">
        <motion.div variants={fadeUp}>
          <Eyebrow dark>How We Create Change</Eyebrow>
        </motion.div>
        <motion.h2 variants={fadeUp} className="text-[34px] sm:text-[44px] md:text-[52px] font-extrabold leading-[1.0] tracking-[-0.03em]">
          Our approach, step by step.
        </motion.h2>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6 border-t border-white/15 pt-8"
      >
        {howWeCreateChange.map((item) => (
          <motion.div key={item.step} variants={fadeUp}>
            <span className="text-[13px] font-extrabold text-ed-accent">{item.step}</span>
            <h3 className="text-[16px] font-extrabold tracking-[-0.01em] mt-3 mb-2">{item.title}</h3>
            <p className="text-[13px] text-white/50 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default MethodologySection;
