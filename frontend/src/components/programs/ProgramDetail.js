import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';

const ProgramDetail = ({ program, reverse, children }) => (
  <section id={program.id} className={`py-20 md:py-24 px-6 ${reverse ? 'bg-uui-cream' : 'bg-white'} scroll-mt-24`}>
    <div className="max-w-5xl mx-auto">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
        <motion.span variants={fadeUp} className="inline-block text-xs font-bold uppercase tracking-wide text-uui-gold mb-3">
          {program.status}
        </motion.span>
        <motion.h2 variants={fadeUp} className="font-sora text-2xl md:text-4xl font-bold text-uui-navy tracking-tight mb-3">
          {program.name}
        </motion.h2>
        <motion.p variants={fadeUp} className="text-sm md:text-base font-semibold text-uui-slate/70 mb-4">
          {program.audience}
        </motion.p>
        <motion.p variants={fadeUp} className="text-base md:text-lg text-uui-slate leading-relaxed max-w-3xl">
          {program.summary}
        </motion.p>
      </motion.div>
      {children && <div className="mt-10">{children}</div>}
    </div>
  </section>
);

export default ProgramDetail;
