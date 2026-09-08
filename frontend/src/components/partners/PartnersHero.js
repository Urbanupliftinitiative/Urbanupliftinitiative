import React from 'react';
import { motion } from 'framer-motion';
import useReveal from '../shared/useReveal';
import Eyebrow from '../shared/Eyebrow';

const PartnersHero = () => (
  <section className="bg-ed-dark text-white pt-[140px] pb-16 md:pt-[168px] md:pb-24 px-4 md:px-6">
    <div className="mx-auto w-full max-w-ed-container">
      <motion.div {...useReveal()}>
        <Eyebrow dark>Partnerships</Eyebrow>
        <h1 className="max-w-3xl text-[42px] sm:text-[64px] md:text-[76px] font-extrabold leading-[0.95] tracking-[-0.04em] mb-6">
          Partner with Urban Uplift Initiative.
        </h1>
        <p className="text-[16px] md:text-[18px] text-white/55 max-w-2xl leading-relaxed">
          We're seeking partnership and grants to advance our mission of enhancing the lives, well-being, and
          opportunities of Camden residents — funding meaningful community-based projects, programs, and
          activities alongside residents and community partners.
        </p>
      </motion.div>
    </div>
  </section>
);

export default PartnersHero;
