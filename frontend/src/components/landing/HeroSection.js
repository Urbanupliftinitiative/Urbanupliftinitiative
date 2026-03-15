import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } },
};

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: 'linear-gradient(145deg, #dfc0df 0%, #d0b0d0 40%, #c4a0c4 70%, #b898b8 100%)' }}
    >
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 lg:gap-12 items-center">
          {/* Left — Text */}
          <motion.div
            className="space-y-8"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={fadeUp}
              className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] font-extrabold text-white tracking-[-0.035em] leading-[0.95]"
            >
              Your Partner in
              <br />
              IVF &amp;
              <br />
              Surrogacy Care
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/75 leading-relaxed max-w-lg font-medium"
            >
              Unify patients, surrogates, clinics, and agencies
              into one intelligent care platform.
            </motion.p>

            <motion.div variants={fadeUp}>
              <button
                data-testid="hero-cta-primary"
                onClick={() => navigate('/talk-to-sales')}
                className="bg-op-navy text-white rounded-full px-10 py-4 text-base sm:text-lg font-bold hover:scale-105 active:scale-95 transition-transform duration-300 shadow-[0_12px_35px_rgba(26,26,46,0.35)]"
              >
                Request a demo &rarr;
              </button>
            </motion.div>
          </motion.div>

          {/* Right — App Mockup Card */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, type: 'spring', stiffness: 120 }}
          >
            <div className="relative w-80 h-[26rem] lg:w-[22rem] lg:h-[28rem] bg-white/90 backdrop-blur-sm rounded-[2.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.12)] flex flex-col items-center justify-center">
              {/* Inner circle area */}
              <div className="w-44 h-44 lg:w-52 lg:h-52 bg-white rounded-full shadow-md flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg shadow-purple-300/40">
                    <span className="text-white text-4xl lg:text-5xl font-light">+</span>
                  </div>
                  <span className="text-sm text-slate-500 font-semibold">IVF Care</span>
                </div>
              </div>

              {/* Brand label */}
              <span className="absolute bottom-10 text-slate-300 text-xs font-semibold tracking-[0.25em] uppercase">
                OnePermit
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
