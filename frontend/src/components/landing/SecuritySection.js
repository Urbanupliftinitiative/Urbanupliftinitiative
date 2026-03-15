import React from 'react';
import { motion } from 'framer-motion';

const SecuritySection = () => (
  <section
    data-testid="security-section"
    className="min-h-screen flex items-center pt-20 px-6"
    style={{ background: '#EAE6F1' }}
  >
    <motion.div
      className="max-w-[1440px] mx-auto w-full rounded-[32px] md:rounded-[40px] overflow-hidden relative"
      style={{ background: 'linear-gradient(160deg, #d8c4d8 0%, #cdb8cd 40%, #c4aec4 70%, #baA4ba 100%)' }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="px-8 sm:px-12 md:px-16 lg:px-20 py-20 md:py-28 lg:py-36 min-h-[500px] md:min-h-[600px] flex flex-col justify-center">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white/90 tracking-tight leading-[0.95] mb-6 md:mb-8 max-w-lg"
        >
          HIPAA-Compliant
          <br />
          Security
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white/60 leading-relaxed max-w-md mb-8 md:mb-10">
          Safeguard patient data at every touchpoint with
          enterprise-grade encryption, role-based access
          controls, and comprehensive audit logging.
        </p>
        <div>
          <a
            href="#features"
            data-testid="security-cta"
            className="inline-block bg-white text-op-navy rounded-full px-8 py-3.5 font-bold text-base hover:scale-105 active:scale-95 transition-transform duration-300"
          >
            Explore OnePermit
          </a>
        </div>
      </div>
    </motion.div>
  </section>
);

export default SecuritySection;
