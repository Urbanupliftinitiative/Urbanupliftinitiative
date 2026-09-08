import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import useReveal from '../shared/useReveal';
import { org } from '../../data/organization';

/**
 * Honest empty state (per COMPONENT_CATALOG.md §15: one icon tile, one
 * title, one sentence, one action) rather than invented testimonials — the
 * organization hasn't published beneficiary/mentor stories yet.
 */
const StoriesSection = () => (
  <section className="bg-white py-20 md:py-28 px-4 md:px-6">
    <motion.div {...useReveal()} className="mx-auto max-w-xl text-center">
      <div className="w-14 h-14 rounded-[12px] bg-ed-accentSoft flex items-center justify-center mx-auto mb-6">
        <BookOpen size={24} className="text-ed-accent" strokeWidth={1.5} />
      </div>
      <h2 className="text-[22px] font-extrabold tracking-[-0.01em] text-ed-ink mb-3">
        Stories from Camden — coming soon
      </h2>
      <p className="text-[15px] text-ed-muted leading-relaxed">
        We're just getting started, and the mentees, families, and seniors we work with deserve to tell their
        own stories in their own words. As {org.shortName} grows, this is where you'll find them.
      </p>
    </motion.div>
  </section>
);

export default StoriesSection;
