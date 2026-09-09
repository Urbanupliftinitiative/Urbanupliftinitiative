import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import useReveal from '../shared/useReveal';
import PrimaryButton from '../shared/PrimaryButton';
import { org } from '../../data/organization';

// Placeholder pending the org's published scholarship details (name,
// eligibility, award amount/frequency, application window, how to apply).
// Swap this copy out once that's available — nothing here is invented.
const ScholarshipDetails = () => (
  <section className="bg-white py-16 md:py-24 px-4 md:px-6">
    <motion.div {...useReveal()} className="mx-auto max-w-2xl text-center">
      <div className="w-14 h-14 rounded-full bg-ed-warm border border-ed-border flex items-center justify-center mx-auto mb-6">
        <GraduationCap size={22} className="text-ed-accent" />
      </div>
      <h2 className="text-[26px] md:text-[38px] font-extrabold tracking-[-0.02em] text-ed-ink mb-4">
        Details coming soon
      </h2>
      <p className="text-[16px] text-ed-ink/60 leading-relaxed mb-8">
        {org.shortName} is finalizing the name, eligibility criteria, award details, and application process for
        its scholarship program. In the meantime, reach out directly and we'll fill you in.
      </p>
      <PrimaryButton to="/contact" variant="primary">Ask about the scholarship</PrimaryButton>
    </motion.div>
  </section>
);

export default ScholarshipDetails;
