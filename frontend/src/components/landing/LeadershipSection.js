import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import useReveal from '../shared/useReveal';
import Eyebrow from '../shared/Eyebrow';
import PrimaryButton from '../shared/PrimaryButton';
import { leadership, org } from '../../data/organization';
import TEAM_GEAR from '../../assets/gallery/team-gear.jpg';

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-20">
        <motion.div {...useReveal()}>
          <Eyebrow>Leadership &amp; Trust</Eyebrow>
          <h2 className="text-[34px] sm:text-[44px] md:text-[52px] font-extrabold leading-[1.0] tracking-[-0.03em] text-ed-ink mb-4">
            Six people leading the work.
          </h2>
          <p className="text-[16px] text-ed-ink/60 mb-8">
            {org.shortName} is run by a team of {org.teamSize} — our three officers are listed below. We're
            early-stage and don't yet publish a formal annual report; as that becomes available, it will be shared
            here.
          </p>
          <PrimaryButton to="/team" variant="secondary">Meet the full team</PrimaryButton>
        </motion.div>
        <motion.div {...useReveal(0.1)} className="rounded-[18px] overflow-hidden aspect-[4/3]">
          <img
            src={TEAM_GEAR}
            alt="Four Urban Uplift Initiative team members holding up a branded t-shirt indoors"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

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
