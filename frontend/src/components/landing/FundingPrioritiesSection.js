import React from 'react';
import { motion } from 'framer-motion';
import { Car, Building2, HeartHandshake } from 'lucide-react';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import { fundingPriorities } from '../../data/organization';

const ICONS = {
  'senior-transportation': Car,
  'cave-of-engedi': Building2,
  'ongoing-programs': HeartHandshake,
};

const FundingPrioritiesSection = () => (
  <section className="bg-uui-cream py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-14 max-w-2xl">
        <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest font-bold text-uui-gold mb-4">
          Where Support Goes
        </motion.p>
        <motion.h2 variants={fadeUp} className="font-sora text-3xl md:text-5xl font-bold text-uui-navy tracking-tight">
          What we're building toward.
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-4 text-uui-slate text-lg">
          We don't yet publish a formal financial breakdown — we're a small, early-stage team. Here are the specific
          priorities every gift moves us toward.
        </motion.p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        {fundingPriorities.map((priority) => {
          const Icon = ICONS[priority.id];
          return (
            <motion.div key={priority.id} variants={fadeUp} className="bg-white rounded-2xl p-8 border border-uui-navy/10">
              <Icon size={28} className="text-uui-blue mb-4" strokeWidth={1.5} />
              <h3 className="font-sora text-lg font-bold text-uui-navy mb-2">
                {priority.name}
                {priority.targetYear ? <span className="text-uui-gold"> · {priority.targetYear}</span> : null}
              </h3>
              <p className="text-sm text-uui-slate leading-relaxed">{priority.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default FundingPrioritiesSection;
