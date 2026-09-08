import React from 'react';
import { motion } from 'framer-motion';
import useReveal from '../shared/useReveal';
import Eyebrow from '../shared/Eyebrow';

const ProgramsHero = () => (
  <section className="bg-ed-dark text-white pt-[140px] pb-16 md:pt-[168px] md:pb-24 px-4 md:px-6">
    <div className="mx-auto w-full max-w-ed-container">
      <motion.div {...useReveal()}>
        <Eyebrow dark>Our Work</Eyebrow>
        <h1 className="max-w-3xl text-[42px] sm:text-[64px] md:text-[76px] font-extrabold leading-[0.95] tracking-[-0.04em] mb-6">
          Two programs. One community.
        </h1>
        <p className="text-[16px] md:text-[18px] text-white/55 max-w-2xl leading-relaxed">
          Urban Uplift Initiative runs a structured mentorship program for at-risk young men and a
          community-development effort supporting Camden's seniors and families — built through partnership, not
          in isolation.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProgramsHero;
