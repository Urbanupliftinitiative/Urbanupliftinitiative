import React from 'react';
import { motion } from 'framer-motion';
import useReveal from '../shared/useReveal';
import PrimaryButton from '../shared/PrimaryButton';
import { org } from '../../data/organization';

const FinalCTASection = () => (
  <section className="bg-ed-dark text-white py-20 md:py-28 px-4 md:px-6">
    <motion.div {...useReveal()} className="mx-auto max-w-2xl text-center">
      <h2 className="text-[34px] sm:text-[48px] font-extrabold leading-[1.02] tracking-[-0.03em] mb-3">
        The work continues. You can be part of it.
      </h2>
      <p className="text-white/50 text-[16px] mb-8">{org.tagline}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <PrimaryButton to="/#donate" variant="primary">Donate</PrimaryButton>
        <PrimaryButton to="/contact" variant="inverse">Become a Mentor</PrimaryButton>
        <PrimaryButton to="/partners" variant="inverse">Partner With Us</PrimaryButton>
      </div>
    </motion.div>
  </section>
);

export default FinalCTASection;
