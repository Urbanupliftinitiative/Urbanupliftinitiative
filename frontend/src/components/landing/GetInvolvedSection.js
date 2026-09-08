import React from 'react';
import { motion } from 'framer-motion';
import { HandCoins, Users, Handshake, Share2 } from 'lucide-react';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import PrimaryButton from '../shared/PrimaryButton';
import { org } from '../../data/organization';

const ways = [
  {
    icon: HandCoins,
    title: 'Donate',
    description: 'Fund mentorship, senior safety, breakfast programs, and our 2028 youth center goal.',
    cta: { label: 'Give now', to: '/#donate', variant: 'gold' },
  },
  {
    icon: Users,
    title: 'Become a Mentor',
    description: 'Join our team supporting at-risk young men through the Five Pillars program.',
    cta: { label: 'Get in touch', to: '/contact', variant: 'outline' },
  },
  {
    icon: Handshake,
    title: 'Partner With Us',
    description: 'Sponsor a program or collaborate as a Camden organization, church, or institution.',
    cta: { label: 'See partnerships', to: '/partners', variant: 'outline' },
  },
  {
    icon: Share2,
    title: 'Spread the Word',
    description: `Tell your community about ${org.shortName}'s work in Camden.`,
    cta: { label: 'Contact us to help', to: '/contact', variant: 'outline' },
  },
];

const GetInvolvedSection = () => (
  <section id="get-involved" className="bg-white py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-14 max-w-2xl">
        <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest font-bold text-uui-gold mb-4">
          Get Involved
        </motion.p>
        <motion.h2 variants={fadeUp} className="font-sora text-3xl md:text-5xl font-bold text-uui-navy tracking-tight">
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
          <motion.div key={way.title} variants={fadeUp} className="rounded-2xl border border-uui-navy/10 p-6 flex flex-col">
            <way.icon size={26} className="text-uui-navy mb-4" strokeWidth={1.5} />
            <h3 className="font-sora text-lg font-bold text-uui-navy mb-2">{way.title}</h3>
            <p className="text-sm text-uui-slate leading-relaxed mb-6 flex-1">{way.description}</p>
            <PrimaryButton to={way.cta.to} variant={way.cta.variant} className="!px-5 !py-2.5 !text-sm w-fit">
              {way.cta.label}
            </PrimaryButton>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default GetInvolvedSection;
