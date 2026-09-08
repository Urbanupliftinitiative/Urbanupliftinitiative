import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import PrimaryButton from '../shared/PrimaryButton';
import { org } from '../../data/organization';

const FinalCTASection = () => (
  <section className="bg-uui-gold py-20 md:py-28 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
        <motion.h2 variants={fadeUp} className="font-sora text-3xl md:text-5xl font-bold text-uui-charcoal tracking-tight mb-3">
          The work continues. You can be part of it.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-uui-charcoal/70 text-lg mb-8">
          {org.tagline}
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <PrimaryButton to="/#donate" variant="primary">Donate</PrimaryButton>
          <PrimaryButton to="/contact" variant="outline" className="!border-uui-charcoal !text-uui-charcoal hover:!bg-uui-charcoal hover:!text-white">
            Become a Mentor
          </PrimaryButton>
          <PrimaryButton to="/partners" variant="outline" className="!border-uui-charcoal !text-uui-charcoal hover:!bg-uui-charcoal hover:!text-white">
            Partner With Us
          </PrimaryButton>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
