import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import { org } from '../../data/organization';

/**
 * Honest empty state rather than invented testimonials — the organization
 * hasn't published beneficiary/mentor stories yet, and the brief is
 * explicit that fabricated quotes and people are off the table.
 */
const StoriesSection = () => (
  <section className="bg-white py-24 md:py-28 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
        <motion.div
          variants={fadeUp}
          className="w-14 h-14 rounded-2xl bg-uui-navy/5 flex items-center justify-center mx-auto mb-6"
        >
          <BookOpen size={26} className="text-uui-navy" strokeWidth={1.5} />
        </motion.div>
        <motion.h2 variants={fadeUp} className="font-sora text-2xl md:text-3xl font-bold text-uui-navy mb-3">
          Stories from Camden — coming soon
        </motion.h2>
        <motion.p variants={fadeUp} className="text-base md:text-lg text-uui-slate leading-relaxed">
          We're just getting started, and the mentees, families, and seniors we work with deserve to tell their
          own stories in their own words. As {org.shortName} grows, this is where you'll find them.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default StoriesSection;
