import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import { communityPartners } from '../../data/organization';

const PartnersList = () => (
  <section className="bg-white py-20 md:py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-10 max-w-2xl">
        <motion.h2 variants={fadeUp} className="font-sora text-2xl md:text-4xl font-bold text-uui-navy tracking-tight mb-3">
          Who we've worked alongside
        </motion.h2>
        <motion.p variants={fadeUp} className="text-uui-slate">
          We've collaborated with public agencies, community members, and local institutions to address critical
          needs throughout Camden.
        </motion.p>
      </motion.div>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        {communityPartners.map((partner) => (
          <motion.div
            key={partner}
            variants={fadeUp}
            className="bg-uui-cream rounded-xl border border-uui-navy/10 px-5 py-4 text-sm font-semibold text-uui-navy"
          >
            {partner}
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default PartnersList;
