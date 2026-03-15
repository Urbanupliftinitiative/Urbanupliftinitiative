import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => (
  <section data-testid="cta-section" className="py-20 md:py-28 px-6">
    <motion.div
      className="max-w-[1440px] mx-auto rounded-[36px] sm:rounded-[44px] p-10 sm:p-14 md:p-20 text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgba(255,218,185,0.35) 0%, rgba(230,230,250,0.35) 50%, rgba(224,247,250,0.35) 100%)' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Glass overlay */}
      <div className="absolute inset-0 glass-strong rounded-[36px] sm:rounded-[44px]" />

      {/* Decorative blurs */}
      <div className="absolute top-8 right-8 w-28 sm:w-40 h-28 sm:h-40 bg-op-pink/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-32 sm:w-48 h-32 sm:h-48 bg-op-lavender/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] font-bold text-op-slate/50 mb-6">
          start today
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-op-navy tracking-[-0.03em] leading-[0.95] mb-6 sm:mb-8">
          Ready to celebrate
          <br />
          your journey?
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-op-slate max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Join thousands of families who've chosen to make their fertility journey
          joyful, organized, and beautifully connected.
        </p>
        <a
          href="#start"
          data-testid="cta-final-button"
          className="inline-block bg-op-navy text-white rounded-full px-10 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-bold hover:scale-105 active:scale-95 transition-transform duration-300 shadow-[0_12px_35px_rgba(26,26,46,0.3)]"
        >
          Get Started Free
        </a>
      </div>
    </motion.div>
  </section>
);

export default CTASection;
