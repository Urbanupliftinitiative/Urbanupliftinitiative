import React from 'react';
import { motion } from 'framer-motion';
import { Search, Handshake, Users, ClipboardList, Sprout } from 'lucide-react';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import Eyebrow from '../shared/Eyebrow';
import { howWeCreateChange, communityDevelopmentStatement } from '../../data/organization';
import TEAM_GYM_EVENT from '../../assets/gallery/team-gym-event.jpg';

const ICONS = [Search, Handshake, Users, ClipboardList, Sprout];

// Structure borrowed from Horizon54's About page (horizon54.com): a paired
// headline + intro paragraph, a full-bleed photo, then a borderless
// icon-grid-with-copy block — translated into this site's own dark/green
// design tokens rather than Horizon54's navy/teal skin.
const MethodologySection = () => (
  <section className="bg-white text-ed-ink py-20 md:py-28 lg:py-36">
    <div className="mx-auto w-full max-w-ed-container px-4 md:px-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end"
      >
        <div>
          <motion.div variants={fadeUp}>
            <Eyebrow>How We Create Change</Eyebrow>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-[34px] sm:text-[44px] md:text-[52px] font-extrabold leading-[1.0] tracking-[-0.03em] text-ed-ink">
            Our approach, step by step.
          </motion.h2>
        </div>
        <motion.p variants={fadeUp} className="text-[15px] text-ed-ink/60 leading-relaxed">
          {communityDevelopmentStatement}
        </motion.p>
      </motion.div>
    </div>

    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-14 md:mb-20">
      <img
        src={TEAM_GYM_EVENT}
        alt="Urban Uplift Initiative team members and family at a community gathering"
        className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] max-h-[900px] object-cover"
        style={{ objectPosition: '50% 22%' }}
      />
    </motion.div>

    <div className="mx-auto w-full max-w-ed-container px-4 md:px-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 border-t border-ed-border pt-12"
      >
        {howWeCreateChange.map((item, i) => {
          const Icon = ICONS[i];
          return (
            <motion.div key={item.step} variants={fadeUp}>
              <Icon size={24} className="text-ed-accent mb-4" strokeWidth={1.5} />
              <span className="text-[12px] font-extrabold text-ed-accent">{item.step}</span>
              <h3 className="text-[17px] font-extrabold tracking-[-0.01em] mt-2 mb-2 text-ed-ink">{item.title}</h3>
              <p className="text-[14px] text-ed-ink/60 leading-relaxed">{item.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default MethodologySection;
