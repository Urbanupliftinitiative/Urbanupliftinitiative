import React from 'react';
import { motion } from 'framer-motion';
import useReveal from '../shared/useReveal';
import Eyebrow from '../shared/Eyebrow';
import { missionStatement, visionStatement, programPurpose } from '../../data/organization';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20 md:py-28 lg:py-36">
      <div className="mx-auto w-full max-w-ed-container px-4 md:px-6">
        <motion.div {...useReveal()}>
          <Eyebrow>Who We Are</Eyebrow>
          <h2 className="max-w-[1120px] text-[42px] sm:text-[56px] md:text-[68px] font-extrabold leading-[0.95] tracking-[-0.04em] text-ed-ink">
            {missionStatement}
          </h2>
          <div className="mt-10 pt-10 border-t border-ed-border grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <p className="text-[20px] md:text-[24px] font-bold leading-[1.3] tracking-[-0.01em] text-ed-ink">
              {visionStatement}
            </p>
            <p className="text-[15px] leading-relaxed text-ed-muted">
              {programPurpose}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
