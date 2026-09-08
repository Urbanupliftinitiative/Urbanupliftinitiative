import React from 'react';
import { motion } from 'framer-motion';
import useReveal from '../shared/useReveal';
import PrimaryButton from '../shared/PrimaryButton';
import { org } from '../../data/organization';

const SponsorshipSection = () => (
  <section className="bg-ed-warm py-16 md:py-24 px-4 md:px-6">
    <motion.div {...useReveal()} className="mx-auto max-w-2xl text-center">
      <h2 className="text-[26px] md:text-[38px] font-extrabold tracking-[-0.02em] text-ed-ink mb-4">
        Become a sponsor
      </h2>
      <p className="text-[16px] text-ed-ink/60 leading-relaxed mb-8">
        As a valued sponsor, you'll receive special recognition from the {org.legalName} team, and — more
        importantly — your partnership will directly support our mission of improving quality of life for
        Camden City residents.
      </p>
      <PrimaryButton to="/contact" variant="primary">Start a partnership conversation</PrimaryButton>
    </motion.div>
  </section>
);

export default SponsorshipSection;
