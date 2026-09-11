import React from 'react';
import { motion } from 'framer-motion';
import useReveal from '../components/shared/useReveal';
import Eyebrow from '../components/shared/Eyebrow';
import SiteFooter from '../components/shared/SiteFooter';
import SeniorSafetyApplicationForm from '../components/events/SeniorSafetyApplicationForm';
import { org } from '../data/organization';

const SeniorSafetyApplicationPage = () => (
  <div className="min-h-screen bg-white">
    <section className="bg-ed-dark text-white pt-[140px] pb-16 md:pt-[168px] md:pb-20 px-4 md:px-6">
      <div className="mx-auto w-full max-w-ed-container">
        <motion.div {...useReveal()}>
          <Eyebrow dark>Senior Safety Initiative</Eyebrow>
          <h1 className="text-[38px] md:text-[58px] font-extrabold leading-[0.95] tracking-[-0.04em] mb-6 max-w-2xl">
            Request a free CO or smoke alarm.
          </h1>
          <p className="text-[16px] md:text-[18px] text-white/55 max-w-2xl leading-relaxed">
            Thanks to a grant of 50 alarms from The Lauren Project, we're distributing free carbon monoxide and
            smoke alarms to Camden seniors on Saturday, September 26, 2026. Reserve one below.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="mx-auto w-full max-w-xl">
        <SeniorSafetyApplicationForm />
        <p className="text-[13px] text-ed-muted text-center mt-6">
          Applying on someone's behalf, or have questions? Reach us at{' '}
          <a href={`mailto:${org.email}`} className="font-semibold text-ed-ink underline">
            {org.email}
          </a>
          .
        </p>
      </div>
    </section>

    <SiteFooter />
  </div>
);

export default SeniorSafetyApplicationPage;
