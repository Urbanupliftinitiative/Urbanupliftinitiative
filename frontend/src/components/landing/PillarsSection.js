import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import { pillars, mentorshipDelivery } from '../../data/organization';

const PillarsSection = () => (
  <section id="pillars" className="bg-uui-cream py-24 md:py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-16 max-w-2xl">
        <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest font-bold text-uui-gold mb-4">
          The Five Pillars
        </motion.p>
        <motion.h2 variants={fadeUp} className="font-sora text-3xl md:text-5xl font-bold text-uui-navy tracking-tight">
          The framework behind the Mentorship Program.
        </motion.h2>
      </motion.div>

      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="divide-y divide-uui-navy/10">
        {pillars.map((pillar) => (
          <motion.div
            key={pillar.number}
            variants={fadeUp}
            className="py-8 md:py-10 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8"
          >
            <span className="font-sora text-4xl md:text-6xl font-extrabold text-uui-navy/15 md:w-32 shrink-0">
              {pillar.number}
            </span>
            <div>
              <h3 className="font-sora text-xl md:text-2xl font-bold text-uui-navy">{pillar.name}</h3>
              <p className="text-uui-slate mt-1">{pillar.focus}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-10 text-base md:text-lg text-uui-slate leading-relaxed max-w-3xl"
      >
        {mentorshipDelivery}
      </motion.p>
    </div>
  </section>
);

export default PillarsSection;
