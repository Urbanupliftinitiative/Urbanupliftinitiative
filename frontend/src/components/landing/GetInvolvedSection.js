import React from 'react';
import { motion } from 'framer-motion';
import { HandCoins, Users, Handshake, Share2 } from 'lucide-react';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import Eyebrow from '../shared/Eyebrow';
import PrimaryButton from '../shared/PrimaryButton';
import { org } from '../../data/organization';

const ways = [
  {
    icon: HandCoins,
    title: 'Donate',
    description: 'Fund mentorship, senior safety, breakfast programs, and our 2028 youth center goal.',
    cta: { label: 'Give now', to: '/#donate', variant: 'primary' },
  },
  {
    icon: Users,
    title: 'Become a Mentor',
    description: 'Join our team supporting at-risk young men through the Five Pillars program.',
    cta: { label: 'Get in touch', to: '/contact', variant: 'secondary' },
  },
  {
    icon: Handshake,
    title: 'Partner With Us',
    description: 'Sponsor a program or collaborate as a Camden organization, church, or institution.',
    cta: { label: 'See partnerships', to: '/partners', variant: 'secondary' },
  },
  {
    icon: Share2,
    title: 'Spread the Word',
    description: `Tell your community about ${org.shortName}'s work in Camden.`,
    cta: { label: 'Contact us to help', to: '/contact', variant: 'secondary' },
  },
];

const GetInvolvedSection = () => (
  <section id="get-involved" className="bg-white py-20 md:py-28 lg:py-36">
    <div className="mx-auto w-full max-w-ed-container px-4 md:px-6">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-14 max-w-2xl">
        <motion.div variants={fadeUp}>
          <Eyebrow>Get Involved</Eyebrow>
        </motion.div>
        <motion.h2 variants={fadeUp} className="text-[34px] sm:text-[44px] md:text-[52px] font-extrabold leading-[1.0] tracking-[-0.03em] text-ed-ink">
          Four ways to help right now.
        </motion.h2>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {ways.map((way) => (
          <motion.div key={way.title} variants={fadeUp} className="rounded-[14px] border border-ed-border p-6 flex flex-col">
            <way.icon size={24} className="text-ed-ink mb-4" strokeWidth={1.5} />
            <h3 className="text-[17px] font-extrabold tracking-[-0.01em] text-ed-ink mb-2">{way.title}</h3>
            <p className="text-[14px] text-ed-muted leading-relaxed mb-6 flex-1">{way.description}</p>
            <PrimaryButton to={way.cta.to} variant={way.cta.variant} className="!px-5 !min-h-[40px] !text-[13px] w-fit">
              {way.cta.label}
            </PrimaryButton>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default GetInvolvedSection;
