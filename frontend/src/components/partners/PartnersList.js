import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';

import { communityPartners } from '../../data/organization';

const PartnersList = () => (
  <section className="bg-white py-16 md:py-24 px-4 md:px-6">
    <div className="mx-auto w-full max-w-ed-container">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-10 max-w-2xl">
        <motion.h2 variants={fadeUp} className="text-[26px] md:text-[38px] font-extrabold tracking-[-0.02em] text-ed-ink mb-3">
          Who we've worked alongside
        </motion.h2>
        <motion.p variants={fadeUp} className="text-[15px] text-ed-muted">
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
            className="bg-ed-warm rounded-[12px] border border-ed-border px-5 py-4 text-[14px] font-semibold text-ed-ink"
          >
            {partner}
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default PartnersList;
