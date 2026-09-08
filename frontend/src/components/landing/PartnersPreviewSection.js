import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import Eyebrow from '../shared/Eyebrow';
import { communityPartners } from '../../data/organization';

const PartnersPreviewSection = () => (
  <section className="bg-ed-warm py-16 md:py-24 px-4 md:px-6">
    <div className="mx-auto w-full max-w-ed-container">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="text-center mb-10">
        <motion.div variants={fadeUp} className="flex justify-center"><Eyebrow>Who Stands With Us</Eyebrow></motion.div>
        <motion.h2 variants={fadeUp} className="text-[26px] md:text-[36px] font-extrabold tracking-[-0.02em] text-ed-ink">
          We don't do this work alone.
        </motion.h2>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        {communityPartners.map((partner) => (
          <motion.span
            key={partner}
            variants={fadeUp}
            className="bg-white border border-ed-border rounded-full px-5 py-2.5 text-[13px] font-semibold text-ed-ink"
          >
            {partner}
          </motion.span>
        ))}
      </motion.div>

      <div className="text-center">
        <Link
          to="/partners"
          className="group inline-flex items-center gap-1.5 text-[14px] font-bold text-ed-ink hover:text-ed-accent focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-ed-accent focus-visible:outline-offset-2 rounded-md"
        >
          Learn about partnering with us
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  </section>
);

export default PartnersPreviewSection;
