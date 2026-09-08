import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import { missionStatement, visionStatement, programPurpose } from '../../data/organization';

const AboutSection = () => (
  <section id="about" className="bg-uui-cream py-24 md:py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
        <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest font-bold text-uui-gold mb-6">
          Who We Are
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-sora text-3xl md:text-5xl lg:text-6xl font-bold text-uui-navy leading-tight tracking-tight mb-8"
        >
          {missionStatement}
        </motion.h2>
        <motion.p variants={fadeUp} className="text-lg md:text-xl text-uui-slate leading-relaxed max-w-3xl mb-4">
          {visionStatement}
        </motion.p>
        <motion.p variants={fadeUp} className="text-base md:text-lg text-uui-slate/80 leading-relaxed max-w-3xl">
          {programPurpose}
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
