import React from 'react';
import { motion } from 'framer-motion';
import useReveal from '../shared/useReveal';
import Eyebrow from '../shared/Eyebrow';
import { pillars, mentorshipDelivery } from '../../data/organization';

// Matches COMPONENT_CATALOG.md §4 Editorial row list: hairline top/bottom
// rules, number / title / explanation columns on desktop, stacked on mobile.
const PillarsSection = () => (
  <section id="pillars" className="bg-ed-warm py-20 md:py-28 lg:py-36">
    <div className="mx-auto w-full max-w-ed-container px-4 md:px-6">
      <motion.div {...useReveal()} className="mb-14 max-w-2xl">
        <Eyebrow>The Five Pillars</Eyebrow>
        <h2 className="text-[34px] sm:text-[44px] md:text-[52px] font-extrabold leading-[1.0] tracking-[-0.03em] text-ed-ink">
          The framework behind the Mentorship Program.
        </h2>
      </motion.div>

      <motion.ol {...useReveal(0.1)} className="border-t border-black/10">
        {pillars.map((pillar) => (
          <li key={pillar.number} className="grid gap-2 sm:grid-cols-[64px_1fr_1.4fr] sm:gap-6 border-b border-black/10 py-7">
            <span className="text-[13px] font-extrabold text-ed-accent">{pillar.number}</span>
            <h3 className="text-[19px] font-extrabold tracking-[-0.01em] text-ed-ink">{pillar.name}</h3>
            <p className="text-[14px] leading-relaxed text-ed-ink/60">{pillar.focus}</p>
          </li>
        ))}
      </motion.ol>

      <motion.p {...useReveal(0.15)} className="mt-10 max-w-2xl text-[15px] md:text-[16px] text-ed-ink/60 leading-relaxed">
        {mentorshipDelivery}
      </motion.p>
    </div>
  </section>
);

export default PillarsSection;
