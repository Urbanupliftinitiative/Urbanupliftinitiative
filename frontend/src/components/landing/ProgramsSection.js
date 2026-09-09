import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import Eyebrow from '../shared/Eyebrow';
import { programs } from '../../data/organization';

import COMMUNITY_CLEANUP from '../../assets/gallery/community-cleanup.jpg';
import FIRETRUCK_VOLUNTEER from '../../assets/gallery/firetruck-volunteer.jpg';
import COMMUNITY_OUTREACH from '../../assets/gallery/community-outreach.jpg';

const IMAGES = {
  'youth-mentorship': { src: COMMUNITY_CLEANUP, alt: 'Mentors and a youth volunteer working together in the community' },
  'senior-safety-initiative': { src: FIRETRUCK_VOLUNTEER, alt: 'A team member volunteering in the Camden community' },
  'back-to-school-breakfast': { src: COMMUNITY_OUTREACH, alt: 'A team member connecting with youth in the community' },
};

// Matches COMPONENT_CATALOG.md §5 Media story card: rounded media block with
// a number badge, then a border-top title/explanation split.
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
          const image = IMAGES[program.id];
          return (
            <motion.div key={program.id} variants={fadeUp}>
              <div className="relative rounded-[18px] bg-ed-warm aspect-[4/3] overflow-hidden group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/90 text-ed-ink text-[11px] font-extrabold flex items-center justify-center">
                  {String(i + 1).padStart(2, '0')}
                </span>
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
