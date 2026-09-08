import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import { leadership, org } from '../../data/organization';

const initials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('');

const LeadershipSection = () => (
  <section id="leadership" className="bg-white py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-14 max-w-2xl">
        <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest font-bold text-uui-gold mb-4">
          Leadership &amp; Trust
        </motion.p>
        <motion.h2 variants={fadeUp} className="font-sora text-3xl md:text-5xl font-bold text-uui-navy tracking-tight mb-4">
          Six people leading the work.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-lg text-uui-slate">
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
          <motion.div key={person.name} variants={fadeUp} className="rounded-2xl border border-uui-navy/10 p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-uui-navy text-white font-sora font-bold text-lg flex items-center justify-center mx-auto mb-4">
              {initials(person.name)}
            </div>
            <h3 className="font-sora text-base font-bold text-uui-navy">{person.name}</h3>
            <p className="text-sm text-uui-slate">{person.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default LeadershipSection;
