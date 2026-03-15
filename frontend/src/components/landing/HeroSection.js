import React from 'react';
import { motion } from 'framer-motion';

const HEART = "https://static.prod-images.emergentagent.com/jobs/57eaa313-9958-4d1d-a711-9be1c718b916/images/33f7a5fc0d5edd681145cd35559a38c595b18f160427472573257280500fac92.png";
const BOTTLE = "https://static.prod-images.emergentagent.com/jobs/57eaa313-9958-4d1d-a711-9be1c718b916/images/7cd072ed1eabc3fedd561ad19e8211310f4d903d3394d60c41fe11b5fd3ac43d.png";
const PILL = "https://static.prod-images.emergentagent.com/jobs/57eaa313-9958-4d1d-a711-9be1c718b916/images/a3340d711eaa3741cf6cbfb7e53f22715bc3b795cd231c12cecd181e106ad12e.png";
const STAR = "https://static.prod-images.emergentagent.com/jobs/57eaa313-9958-4d1d-a711-9be1c718b916/images/7fdc78b7f5008d4d6f70e6c85c69799d611fc4611b74bb59b703c8703783a5c9.png";

const floatingItems = [
  { src: HEART, pos: 'top-[10%] left-[3%] md:left-[6%]', size: 'w-16 md:w-28 lg:w-36', delay: 0, speed: 6 },
  { src: BOTTLE, pos: 'top-[8%] right-[3%] md:right-[8%]', size: 'w-14 md:w-24 lg:w-32', delay: 1, speed: 5.5 },
  { src: PILL, pos: 'bottom-[18%] left-[5%] md:left-[10%]', size: 'w-12 md:w-20 lg:w-28', delay: 0.5, speed: 7 },
  { src: STAR, pos: 'bottom-[12%] right-[3%] md:right-[6%]', size: 'w-12 md:w-20 lg:w-24', delay: 1.5, speed: 5 },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } }
};

const HeroSection = () => (
  <section
    data-testid="hero-section"
    className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden"
    style={{ background: 'linear-gradient(170deg, #FFDAB9 0%, #F3E5F5 40%, #E6E6FA 70%, #E0F7FA 100%)' }}
  >
    {/* Ambient glow orbs */}
    <div className="absolute top-[15%] left-[25%] w-64 h-64 bg-[#FFB7B2]/25 rounded-full blur-3xl animate-pulse-soft pointer-events-none" />
    <div className="absolute bottom-[20%] right-[20%] w-80 h-80 bg-[#E6E6FA]/35 rounded-full blur-3xl animate-pulse-soft pointer-events-none" style={{ animationDelay: '2s' }} />

    {/* Floating 3D Elements */}
    {floatingItems.map((item, i) => (
      <motion.img
        key={i}
        src={item.src}
        alt=""
        draggable={false}
        className={`absolute ${item.pos} ${item.size} pointer-events-none select-none drop-shadow-lg`}
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -22, 0],
          rotate: [0, 4, -4, 0],
        }}
        transition={{
          opacity: { duration: 0.7, delay: item.delay + 0.3 },
          scale: { duration: 0.7, delay: item.delay + 0.3, type: 'spring', stiffness: 200 },
          y: { duration: item.speed, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: item.speed * 1.3, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
    ))}

    {/* Content */}
    <motion.div
      className="relative z-10 max-w-5xl"
      variants={stagger}
      initial="hidden"
      animate="show"
    >
      <motion.p
        variants={fadeUp}
        className="text-xs sm:text-sm uppercase tracking-[0.3em] font-bold text-op-slate/70 mb-8"
      >
        Where your fertility journey meets joy
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[6.5rem] font-extrabold text-op-navy tracking-[-0.04em] leading-[0.92] mb-8"
      >
        your journey
        <br />
        deserves to be
        <br />
        <span className="text-op-slate/60">celebrated</span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="text-sm sm:text-base md:text-lg text-op-slate max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        The first joyful care platform for IVF and surrogacy.
        Track medications, monitor vitals, and celebrate every milestone — together.
      </motion.p>

      <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#start"
          data-testid="hero-cta-primary"
          className="bg-op-navy text-white rounded-full px-10 py-4 text-base sm:text-lg font-bold hover:scale-105 active:scale-95 transition-transform duration-300 shadow-[0_12px_35px_rgba(26,26,46,0.25)]"
        >
          Start Your Journey
        </a>
        <a
          href="#about"
          data-testid="hero-cta-secondary"
          className="glass rounded-full px-8 py-4 text-base sm:text-lg font-medium text-op-navy hover:bg-white/60 transition-all duration-300"
        >
          Take a look around
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
