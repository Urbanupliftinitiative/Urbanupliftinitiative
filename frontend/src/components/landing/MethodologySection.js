import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import { howWeCreateChange } from '../../data/organization';

const MethodologySection = () => (
  <section className="bg-uui-navy text-white py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-16 max-w-2xl">
        <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest font-bold text-uui-gold mb-4">
          How We Create Change
        </motion.p>
        <motion.h2 variants={fadeUp} className="font-sora text-3xl md:text-5xl font-bold tracking-tight">
          Our approach, step by step.
        </motion.h2>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4"
      >
        {howWeCreateChange.map((item) => (
          <motion.div key={item.step} variants={fadeUp} className="border-t-2 border-uui-gold pt-5">
            <span className="font-sora text-2xl font-extrabold text-uui-gold">{item.step}</span>
            <h3 className="font-sora text-lg font-bold mt-3 mb-2">{item.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default MethodologySection;
