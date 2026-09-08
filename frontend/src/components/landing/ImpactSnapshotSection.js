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
  <section className="bg-white py-20 md:py-28 px-6 border-y border-uui-navy/5">
    <div className="max-w-6xl mx-auto">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6"
      >
        {facts.map((fact) => (
          <motion.div key={fact.label} variants={fadeUp} className="text-center md:text-left">
            <p className="font-sora text-4xl md:text-5xl font-extrabold text-uui-navy tracking-tight">{fact.value}</p>
            <p className="mt-2 text-sm md:text-base text-uui-slate leading-snug">{fact.label}</p>
          </motion.div>
        ))}
      </motion.div>
      <p className="mt-10 text-xs text-uui-slate/60 text-center md:text-left">
        We're an early-stage, six-member organization based in Camden, NJ — these are the facts as they stand today, not projections.
      </p>
    </div>
  </section>
);

export default ImpactSnapshotSection;
