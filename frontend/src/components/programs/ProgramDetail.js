import React from 'react';
import { motion } from 'framer-motion';
import useReveal from '../shared/useReveal';

const ProgramDetail = ({ program, reverse, children }) => (
  <section id={program.id} className={`py-16 md:py-24 px-4 md:px-6 ${reverse ? 'bg-ed-warm' : 'bg-white'} scroll-mt-24`}>
    <div className="mx-auto w-full max-w-ed-container">
      <motion.div {...useReveal()}>
        <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.16em] text-ed-accent mb-3">
          {program.status}
        </span>
        <h2 className="text-[26px] md:text-[38px] font-extrabold tracking-[-0.02em] text-ed-ink mb-3">
          {program.name}
        </h2>
        <p className="text-[14px] font-semibold text-ed-ink/50 mb-4">{program.audience}</p>
        <p className="text-[15px] md:text-[16px] text-ed-ink/70 leading-relaxed max-w-2xl">{program.summary}</p>
      </motion.div>
      {children && <div className="mt-10">{children}</div>}
    </div>
  </section>
);

export default ProgramDetail;
