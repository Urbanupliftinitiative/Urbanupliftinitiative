import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import useReveal from '../shared/useReveal';
import PrimaryButton from '../shared/PrimaryButton';
import { org } from '../../data/organization';

const StillHaveQuestions = () => (
  <section className="bg-ed-warm py-16 md:py-24 px-4 md:px-6">
    <motion.div {...useReveal()} className="mx-auto max-w-2xl text-center">
      <div className="w-14 h-14 rounded-full bg-white border border-ed-border flex items-center justify-center mx-auto mb-6">
        <Mail size={22} className="text-ed-accent" />
      </div>
      <h2 className="text-[26px] md:text-[38px] font-extrabold tracking-[-0.02em] text-ed-ink mb-4">
        Still have questions?
      </h2>
      <p className="text-[16px] text-ed-ink/60 leading-relaxed mb-8">
        Reach out directly and we'll get back to you — {org.email}.
      </p>
      <PrimaryButton to="/contact" variant="primary">Contact us</PrimaryButton>
    </motion.div>
  </section>
);

export default StillHaveQuestions;
