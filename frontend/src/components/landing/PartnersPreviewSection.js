import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import { communityPartners } from '../../data/organization';

const PartnersPreviewSection = () => (
  <section className="bg-uui-cream py-20 md:py-28 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="text-center mb-12">
        <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest font-bold text-uui-gold mb-4">
          Who Stands With Us
        </motion.p>
        <motion.h2 variants={fadeUp} className="font-sora text-2xl md:text-4xl font-bold text-uui-navy tracking-tight">
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
            className="bg-white border border-uui-navy/10 rounded-full px-5 py-2.5 text-sm font-semibold text-uui-navy"
          >
            {partner}
          </motion.span>
        ))}
      </motion.div>

      <div className="text-center">
        <Link
          to="/partners"
          className="group inline-flex items-center gap-1.5 text-sm font-bold text-uui-navy hover:text-uui-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-uui-gold rounded-md"
        >
          Learn about partnering with us
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  </section>
);

export default PartnersPreviewSection;
