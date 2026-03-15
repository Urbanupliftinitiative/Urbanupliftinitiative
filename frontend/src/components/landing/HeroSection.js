import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HEART = "https://static.prod-images.emergentagent.com/jobs/57eaa313-9958-4d1d-a711-9be1c718b916/images/33f7a5fc0d5edd681145cd35559a38c595b18f160427472573257280500fac92.png";
const BOTTLE = "https://static.prod-images.emergentagent.com/jobs/57eaa313-9958-4d1d-a711-9be1c718b916/images/7cd072ed1eabc3fedd561ad19e8211310f4d903d3394d60c41fe11b5fd3ac43d.png";
const PILL = "https://static.prod-images.emergentagent.com/jobs/57eaa313-9958-4d1d-a711-9be1c718b916/images/a3340d711eaa3741cf6cbfb7e53f22715bc3b795cd231c12cecd181e106ad12e.png";
const STAR = "https://static.prod-images.emergentagent.com/jobs/57eaa313-9958-4d1d-a711-9be1c718b916/images/7fdc78b7f5008d4d6f70e6c85c69799d611fc4611b74bb59b703c8703783a5c9.png";

const floatingItems = [
  { src: HEART, pos: 'top-[6%] right-[2%]', size: 'w-16 md:w-24', delay: 0, speed: 6 },
  { src: BOTTLE, pos: 'top-[60%] right-[48%]', size: 'w-12 md:w-20', delay: 1, speed: 5.5 },
  { src: PILL, pos: 'bottom-[8%] left-[2%]', size: 'w-12 md:w-18', delay: 0.5, speed: 7 },
  { src: STAR, pos: 'bottom-[6%] right-[2%]', size: 'w-10 md:w-16', delay: 1.5, speed: 5 },
];

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
      {/* Ambient glow orbs */}
      <div className="absolute top-[20%] left-[30%] w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none animate-pulse-soft" />
      <div className="absolute bottom-[15%] right-[25%] w-96 h-96 bg-pink-200/15 rounded-full blur-3xl pointer-events-none animate-pulse-soft" style={{ animationDelay: '2s' }} />

      {/* Floating 3D Elements */}
      {floatingItems.map((item, i) => (
        <motion.img
          key={i}
          src={item.src}
          alt=""
          draggable={false}
          className={`absolute ${item.pos} ${item.size} pointer-events-none select-none drop-shadow-lg z-10`}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -18, 0],
            rotate: [0, 3, -3, 0],
          }}
          transition={{
            opacity: { duration: 0.7, delay: item.delay + 0.5 },
            scale: { duration: 0.7, delay: item.delay + 0.5, type: 'spring', stiffness: 200 },
            y: { duration: item.speed, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: item.speed * 1.3, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
      ))}

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
