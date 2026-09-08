import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, ShieldCheck, Coffee, ArrowRight } from 'lucide-react';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import { programs } from '../../data/organization';

const ICONS = {
  'youth-mentorship': Users,
  'senior-safety-initiative': ShieldCheck,
  'back-to-school-breakfast': Coffee,
};

const GRADIENTS = {
  'youth-mentorship': 'from-uui-navy to-uui-blue',
  'senior-safety-initiative': 'from-uui-blue to-uui-sky',
  'back-to-school-breakfast': 'from-uui-gold to-[#E0B85C]',
};

const ProgramsSection = () => (
  <section id="programs" className="bg-white py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-14 max-w-2xl">
        <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest font-bold text-uui-gold mb-4">
          Our Work
        </motion.p>
        <motion.h2 variants={fadeUp} className="font-sora text-3xl md:text-5xl font-bold text-uui-navy tracking-tight">
          Two program arms, one community.
        </motion.h2>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        {programs.map((program) => {
          const Icon = ICONS[program.id];
          return (
            <motion.div
              key={program.id}
              variants={fadeUp}
              className="rounded-2xl border border-uui-navy/10 overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300"
            >
              <div className={`bg-gradient-to-br ${GRADIENTS[program.id]} h-40 flex items-center justify-center`}>
                <Icon size={44} className="text-white" strokeWidth={1.5} />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block w-fit text-xs font-bold uppercase tracking-wide text-uui-gold mb-3">
                  {program.status}
                </span>
                <h3 className="font-sora text-xl font-bold text-uui-navy mb-2">{program.name}</h3>
                <p className="text-sm text-uui-slate/70 mb-3 font-medium">{program.audience}</p>
                <p className="text-sm text-uui-slate leading-relaxed mb-6 flex-1">{program.summary}</p>
                <Link
                  to={`/programs#${program.id}`}
                  className="group inline-flex items-center gap-1.5 text-sm font-bold text-uui-navy hover:text-uui-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-uui-gold rounded-md w-fit"
                >
                  Explore program
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default ProgramsSection;
