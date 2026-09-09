import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import useReveal from '../shared/useReveal';
import Eyebrow from '../shared/Eyebrow';
import { pillars, mentorshipDelivery } from '../../data/organization';

import WITH_GOD_ALL_THINGS from '../../assets/gallery/with-god-all-things.jpg';
import CLEANUP_VOLUNTEER from '../../assets/gallery/cleanup-volunteer.jpg';
import TEAM_GEAR from '../../assets/gallery/team-gear.jpg';
import COMMUNITY_OUTREACH from '../../assets/gallery/community-outreach.jpg';
import MENTORSHIP_MOMENT from '../../assets/gallery/mentorship-moment.jpg';

const IMAGES = {
  '01': { src: WITH_GOD_ALL_THINGS, alt: 'Two team members standing beside a wall reading "With God All Things Are Possible"' },
  '02': { src: CLEANUP_VOLUNTEER, alt: 'A team member in Urban Uplift Initiative gear standing next to a cleanup bag' },
  '03': { src: TEAM_GEAR, alt: 'Four team members holding up a branded Urban Uplift Initiative t-shirt' },
  '04': { src: COMMUNITY_OUTREACH, alt: 'A team member connecting with youth in the community' },
  '05': { src: MENTORSHIP_MOMENT, alt: 'Two team members standing together outdoors' },
};

// Alternating numbered image/text rows — same shape as an editorial "steps"
// pattern, just paired with real photography instead of running as plain
// text like PillarsInline (used on /programs) does.
const PillarsSection = () => (
  <section id="pillars" className="relative bg-white py-20 md:py-28 lg:py-36 overflow-hidden">
    <div
      aria-hidden="true"
      className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_-10%,#c7d2fe_0%,transparent_60%)]"
    />
    <div className="relative mx-auto w-full max-w-ed-container px-4 md:px-6">
      <motion.div {...useReveal()} className="mb-14 max-w-2xl">
        <Eyebrow>The Five Pillars</Eyebrow>
        <h2 className="text-[34px] sm:text-[44px] md:text-[52px] font-extrabold leading-[1.0] tracking-[-0.03em] text-ed-ink">
          The framework behind the Mentorship Program.
        </h2>
      </motion.div>

      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="space-y-10 md:space-y-14">
        {pillars.map((pillar, i) => {
          const image = IMAGES[pillar.number];
          const reverse = i % 2 === 1;
          return (
            <motion.div
              key={pillar.number}
              variants={fadeUp}
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              <div className="rounded-[18px] overflow-hidden aspect-[4/3]">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-[13px] font-extrabold text-ed-accent">{pillar.number}</span>
                <h3 className="text-[24px] md:text-[30px] font-extrabold tracking-[-0.02em] text-ed-ink mt-3 mb-3">
                  {pillar.name}
                </h3>
                <p className="text-[15px] md:text-[16px] leading-relaxed text-ed-ink/60 max-w-md">{pillar.focus}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.p {...useReveal(0.1)} className="mt-14 max-w-2xl text-[15px] md:text-[16px] text-ed-ink/60 leading-relaxed border-t border-black/10 pt-8">
        {mentorshipDelivery}
      </motion.p>
    </div>
  </section>
);

export default PillarsSection;
