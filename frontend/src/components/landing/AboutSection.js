import React from 'react';
import { motion } from 'framer-motion';

const PREGNANT = "https://images.unsplash.com/photo-1725393197924-e1dff51c29f1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByZWduYW50JTIwd29tYW4lMjBzb2Z0JTIwbGlnaHQlMjB3YXJtJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzczNTg2ODQ4fDA&ixlib=rb-4.1.0&q=85";
const COUPLE = "https://images.unsplash.com/photo-1709823157693-c63157807cc3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNvdXBsZSUyMGV4cGVjdGluZyUyMGJhYnklMjBqb3l8ZW58MHx8fHwxNzczNTg2ODUwfDA&ixlib=rb-4.1.0&q=85";

const AboutSection = () => (
  <section
    id="about"
    data-testid="about-section"
    className="py-28 md:py-40 px-6 bg-white relative overflow-hidden"
  >
    {/* Floating lifestyle images — desktop only */}
    <motion.img
      src={PREGNANT}
      alt=""
      className="hidden xl:block absolute top-20 left-6 w-44 h-60 object-cover rounded-3xl shadow-xl"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 0.35, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    />
    <motion.img
      src={COUPLE}
      alt=""
      className="hidden xl:block absolute bottom-20 right-6 w-48 h-64 object-cover rounded-3xl shadow-xl"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 0.3, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.3 }}
    />

    <div className="max-w-[1440px] mx-auto text-center relative z-10">
      <motion.p
        className="text-xs sm:text-sm uppercase tracking-[0.3em] font-bold text-op-slate/50 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        what we're all about
      </motion.p>

      <motion.h2
        className="text-3xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold text-op-navy tracking-[-0.04em] leading-[0.95] mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        TRACK CARE.
        <br />
        SHARE MILESTONES.
        <br />
        GET CLOSER TO
        <br />
        <span className="text-op-slate/55">the family you've</span>
        <br />
        <span className="text-op-slate/55">always dreamed of.</span>
      </motion.h2>

      <motion.a
        href="#start"
        data-testid="about-cta"
        className="inline-block bg-op-navy text-white rounded-full px-10 py-4 text-base sm:text-lg font-bold hover:scale-105 active:scale-95 transition-transform duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        Join OnePermit
      </motion.a>
    </div>
  </section>
);

export default AboutSection;
