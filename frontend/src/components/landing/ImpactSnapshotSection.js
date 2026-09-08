import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import { org, programs, pillars } from '../../data/organization';

const facts = [
  { value: org.teamSize, label: 'Dedicated team members' },
  { value: programs.length, label: 'Active programs in Camden' },
  { value: pillars.length, label: 'Pillars of the mentorship program' },
  { value: '2028', label: 'Target year for the Cave of Engedi Youth Center' },
];

/**
 * Intentionally not a wall of inflated "people served" counters — this
 * organization is early-stage and its own materials say so. Honesty here
 * matters more than a bigger-looking number.
 */
const ImpactSnapshotSection = () => (
  <section className="bg-white border-t border-b border-ed-border py-16 md:py-20">
    <div className="mx-auto w-full max-w-ed-container px-4 md:px-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-2 md:grid-cols-4"
      >
        {facts.map((fact, i) => (
          <motion.div
            key={fact.label}
            variants={fadeUp}
            className={`px-0 md:px-8 py-6 md:py-0 ${i > 0 ? 'md:border-l border-ed-border' : ''}`}
          >
            <p className="font-extrabold text-[40px] md:text-[52px] leading-none tracking-[-0.03em] text-ed-ink">{fact.value}</p>
            <p className="mt-2 text-[13px] text-ed-muted leading-snug">{fact.label}</p>
          </motion.div>
        ))}
      </motion.div>
      <p className="mt-8 text-[11px] text-ed-muted/70">
        We're an early-stage, six-member organization based in Camden, NJ — these are the facts as they stand today, not projections.
      </p>
    </div>
  </section>
);

export default ImpactSnapshotSection;
