import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import PrimaryButton from '../shared/PrimaryButton';
import { org } from '../../data/organization';

const SponsorshipSection = () => (
  <section className="bg-uui-cream py-20 md:py-28 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
        <motion.h2 variants={fadeUp} className="font-sora text-2xl md:text-4xl font-bold text-uui-navy tracking-tight mb-4">
          Become a sponsor
        </motion.h2>
        <motion.p variants={fadeUp} className="text-uui-slate text-lg leading-relaxed mb-8">
          As a valued sponsor, you'll receive special recognition from the {org.legalName} team, and — more
          importantly — your partnership will directly support our mission of improving quality of life for
          Camden City residents.
        </motion.p>
        <motion.div variants={fadeUp}>
          <PrimaryButton to="/contact" variant="primary">Start a partnership conversation</PrimaryButton>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default SponsorshipSection;
