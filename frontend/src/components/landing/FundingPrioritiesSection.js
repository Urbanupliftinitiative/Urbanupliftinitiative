import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Car, Building2, HeartHandshake, ArrowRight } from 'lucide-react';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import Eyebrow from '../shared/Eyebrow';
import { fundingPriorities } from '../../data/organization';

const ICONS = {
  'senior-transportation': Car,
  'cave-of-engedi': Building2,
  'ongoing-programs': HeartHandshake,
};

// Borderless icon-grid pattern to match MethodologySection's — cards
// dropped their background/border in favor of icon + copy + a real link
// (no page exists per priority, so it points at the donate flow instead of
// a placeholder "Learn More").
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
        className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 border-t border-ed-border pt-12"
      >
        {fundingPriorities.map((priority) => {
          const Icon = ICONS[priority.id];
          return (
            <motion.div key={priority.id} variants={fadeUp}>
              <Icon size={24} className="text-ed-accent mb-4" strokeWidth={1.5} />
              <h3 className="text-[17px] font-extrabold tracking-[-0.01em] text-ed-ink mb-2">
                {priority.name}
                {priority.targetYear ? <span className="text-ed-accent"> · {priority.targetYear}</span> : null}
              </h3>
              <p className="text-[14px] text-ed-ink/60 leading-relaxed mb-4">{priority.description}</p>
              <Link
                to="/#donate"
                className="group inline-flex items-center gap-1.5 text-[13px] font-bold text-ed-ink hover:text-ed-accent focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-ed-accent focus-visible:outline-offset-2 rounded-md"
              >
                Give toward this
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default FundingPrioritiesSection;
