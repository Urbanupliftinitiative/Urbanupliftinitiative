import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import Eyebrow from '../shared/Eyebrow';
import { leadership, org } from '../../data/organization';

const initials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('');

const LeadershipSection = () => (
  <section id="leadership" className="bg-white py-20 md:py-28 lg:py-36">
    <div className="mx-auto w-full max-w-ed-container px-4 md:px-6">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-14 max-w-2xl">
        <motion.div variants={fadeUp}>
          <Eyebrow>Leadership &amp; Trust</Eyebrow>
        </motion.div>
        <motion.h2 variants={fadeUp} className="text-[34px] sm:text-[44px] md:text-[52px] font-extrabold leading-[1.0] tracking-[-0.03em] text-ed-ink mb-4">
          Six people leading the work.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-[16px] text-ed-ink/60">
          {org.shortName} is run by a team of {org.teamSize} — our three officers are listed below. We're
          early-stage and don't yet publish a formal annual report; as that becomes available, it will be shared
          here.
        </motion.p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6"
      >
        {leadership.map((person) => (
          <motion.div key={person.name} variants={fadeUp} className="rounded-[14px] border border-ed-border p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-ed-ink text-white font-extrabold text-[15px] flex items-center justify-center mx-auto mb-4">
              {initials(person.name)}
            </div>
            <h3 className="text-[15px] font-extrabold text-ed-ink">{person.name}</h3>
            <p className="text-[13px] text-ed-muted">{person.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default LeadershipSection;
