import React from 'react';
import { motion } from 'framer-motion';
import { Car, Building2, HeartHandshake } from 'lucide-react';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import Eyebrow from '../shared/Eyebrow';
import { fundingPriorities } from '../../data/organization';

const ICONS = {
  'senior-transportation': Car,
  'cave-of-engedi': Building2,
  'ongoing-programs': HeartHandshake,
};

const FundingPrioritiesSection = () => (
  <section className="bg-ed-warm py-20 md:py-28 lg:py-36">
    <div className="mx-auto w-full max-w-ed-container px-4 md:px-6">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-14 max-w-2xl">
        <motion.div variants={fadeUp}>
          <Eyebrow>Where Support Goes</Eyebrow>
        </motion.div>
        <motion.h2 variants={fadeUp} className="text-[34px] sm:text-[44px] md:text-[52px] font-extrabold leading-[1.0] tracking-[-0.03em] text-ed-ink">
          What we're building toward.
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-4 text-[15px] text-ed-ink/60 max-w-xl">
          We don't yet publish a formal financial breakdown — we're a small, early-stage team. Here are the specific
          priorities every gift moves us toward.
        </motion.p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {fundingPriorities.map((priority) => {
          const Icon = ICONS[priority.id];
          return (
            <motion.div key={priority.id} variants={fadeUp} className="bg-white rounded-[14px] border border-ed-border shadow-ed-card p-6">
              <div className="w-11 h-11 rounded-[10px] bg-ed-accentSoft flex items-center justify-center mb-5">
                <Icon size={20} className="text-ed-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-[16px] font-extrabold tracking-[-0.01em] text-ed-ink mb-2">
                {priority.name}
                {priority.targetYear ? <span className="text-ed-accent"> · {priority.targetYear}</span> : null}
              </h3>
              <p className="text-[14px] text-ed-ink/60 leading-relaxed">{priority.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default FundingPrioritiesSection;
