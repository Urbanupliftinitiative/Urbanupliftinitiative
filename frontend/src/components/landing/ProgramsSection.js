import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, ShieldCheck, Coffee, ArrowRight } from 'lucide-react';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import Eyebrow from '../shared/Eyebrow';
import { programs } from '../../data/organization';

const ICONS = {
  'youth-mentorship': Users,
  'senior-safety-initiative': ShieldCheck,
  'back-to-school-breakfast': Coffee,
};

// Matches COMPONENT_CATALOG.md §5 Media story card: rounded media block with
// a number badge, then a border-top title/explanation split. No real
// program photography exists yet, so the "media" is an illustrative color
// block rather than a stock photo standing in for real people.
const ProgramsSection = () => (
  <section id="programs" className="bg-white py-20 md:py-28 lg:py-36">
    <div className="mx-auto w-full max-w-ed-container px-4 md:px-6">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-14 max-w-2xl">
        <motion.div variants={fadeUp}>
          <Eyebrow>Our Work</Eyebrow>
        </motion.div>
        <motion.h2 variants={fadeUp} className="text-[34px] sm:text-[44px] md:text-[52px] font-extrabold leading-[1.0] tracking-[-0.03em] text-ed-ink">
          Two program arms, one community.
        </motion.h2>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
      >
        {programs.map((program, i) => {
          const Icon = ICONS[program.id];
          return (
            <motion.div key={program.id} variants={fadeUp}>
              <div className="relative rounded-[18px] bg-ed-warm aspect-[4/3] flex items-center justify-center overflow-hidden group">
                <Icon size={40} className="text-ed-ink/70 transition-transform duration-700 group-hover:scale-[1.03]" strokeWidth={1.25} />
                <span className="absolute top-4 left-4 text-[11px] font-extrabold text-ed-accent">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="mt-5 pt-5 border-t border-ed-border">
                <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.16em] text-ed-accent mb-2">
                  {program.status}
                </span>
                <h3 className="text-[19px] font-extrabold tracking-[-0.01em] text-ed-ink mb-1.5">{program.name}</h3>
                <p className="text-[13px] font-semibold text-ed-muted mb-3">{program.audience}</p>
                <p className="text-[14px] leading-relaxed text-ed-muted mb-5">{program.summary}</p>
                <Link
                  to={`/programs#${program.id}`}
                  className="group/link inline-flex items-center gap-1.5 text-[14px] font-bold text-ed-ink hover:text-ed-accent focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-ed-accent focus-visible:outline-offset-2 rounded-md"
                >
                  Explore program
                  <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
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
