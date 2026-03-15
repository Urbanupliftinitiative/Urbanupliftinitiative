import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Check, Heart, Bell, ArrowRight } from 'lucide-react';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] } },
};

/* ── Right-side card composition ── */

const MedCard = () => (
  <div className="w-[280px] bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-6 border border-slate-100/60">
    <div className="flex items-center justify-between mb-5">
      <p className="font-bold text-op-navy text-[15px]">Today's Schedule</p>
      <span className="text-xs font-semibold text-op-slate/50 bg-slate-50 rounded-full px-3 py-1">4 meds</span>
    </div>
    {[
      { time: '8:00 AM', name: 'Prenatal Vitamin', done: true },
      { time: '10:00 AM', name: 'Estrogen Patch', done: true },
      { time: '2:00 PM', name: 'Progesterone', done: false, active: true },
      { time: '8:00 PM', name: 'Folic Acid', done: false },
    ].map((med, i) => (
      <div key={i} className={`flex items-center gap-3 py-2.5 ${i < 3 ? 'border-b border-slate-50' : ''}`}>
        <div className={`w-[22px] h-[22px] rounded-full flex items-center justify-center shrink-0 ${
          med.done ? 'bg-emerald-100' : med.active ? 'bg-op-peach/60 ring-2 ring-op-peach' : 'bg-slate-50'
        }`}>
          {med.done && <Check size={12} className="text-emerald-600" strokeWidth={3} />}
        </div>
        <div className="flex-1 min-w-0">
          <p className={`text-[13px] font-semibold ${med.done ? 'text-slate-300 line-through' : 'text-op-navy'}`}>{med.name}</p>
          <p className="text-[11px] text-slate-400">{med.time}</p>
        </div>
      </div>
    ))}
    <div className="mt-4 h-1.5 bg-slate-100 rounded-full overflow-hidden">
      <div className="h-full w-1/2 bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-full" />
    </div>
  </div>
);

const MilestoneCard = () => (
  <div className="w-[220px] bg-white rounded-[20px] shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-4 border border-slate-100/60">
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center shrink-0">
        <Heart size={16} className="text-rose-500" fill="currentColor" />
      </div>
      <div>
        <p className="text-[13px] font-bold text-op-navy leading-tight">Week 12 Milestone</p>
        <p className="text-[11px] text-emerald-500 font-semibold">All clear!</p>
      </div>
    </div>
  </div>
);

const VitalsCard = () => (
  <div className="w-[180px] bg-white rounded-[20px] shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-4 border border-slate-100/60">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
        <Bell size={13} className="text-blue-500" />
      </div>
      <p className="text-[11px] font-bold text-op-slate/60 uppercase tracking-wide">Vitals</p>
    </div>
    <p className="text-2xl font-extrabold text-op-navy leading-none">72 <span className="text-sm font-semibold text-slate-300">bpm</span></p>
    {/* Mini sparkline */}
    <svg viewBox="0 0 120 30" className="w-full h-6 mt-2" fill="none">
      <path d="M0,20 Q10,18 20,15 T40,12 T60,18 T80,10 T100,14 T120,12" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </div>
);

/* ── Hero Section ── */

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      data-testid="hero-section"
      className="relative flex items-center overflow-hidden py-16 md:py-24 px-6"
      style={{ background: '#EAE6F1' }}
    >
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-6 items-center">

          {/* ── Left: Copy ── */}
          <motion.div variants={stagger} initial="hidden" animate="show">

            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-8">
              <span className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md border border-white/50 rounded-full px-4 py-1.5 text-xs font-bold text-op-navy tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                The Joyful Care Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] font-extrabold text-op-navy tracking-[-0.04em] leading-[0.93]"
            >
              Your Partner in
              <br />
              IVF &amp;
              <br />
              Surrogacy Care
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="mt-7 text-base sm:text-lg md:text-xl text-op-navy/60 leading-relaxed max-w-lg font-medium"
            >
              Unify patients, surrogates, clinics, and agencies
              into one intelligent care platform — built to celebrate
              every step of your journey.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-9 flex flex-col sm:flex-row items-start gap-3">
              <button
                data-testid="hero-cta-primary"
                onClick={() => navigate('/talk-to-sales')}
                className="group bg-op-navy text-white rounded-full pl-8 pr-6 py-4 text-base font-bold hover:scale-[1.03] active:scale-[0.97] transition-transform duration-300 shadow-[0_10px_30px_rgba(26,26,46,0.25)] flex items-center gap-2"
              >
                Request a demo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#features"
                data-testid="hero-cta-secondary"
                className="text-op-navy/70 hover:text-op-navy font-semibold text-base px-6 py-4 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                See how it works
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                {['bg-rose-300', 'bg-amber-300', 'bg-blue-300', 'bg-emerald-300'].map((bg, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${bg} border-2 border-white/80 shadow-sm`} />
                ))}
              </div>
              <p className="text-sm text-op-navy/50 font-medium">
                <span className="font-bold text-op-navy/70">2,500+</span> families trust OnePermit
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right: Card Composition ── */}
          <motion.div
            className="hidden lg:block relative h-[520px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Main medication card */}
            <motion.div
              className="absolute top-[50%] left-[50%] -translate-x-[45%] -translate-y-[50%] z-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 120 }}
            >
              <MedCard />
            </motion.div>

            {/* Milestone notification — top right */}
            <motion.div
              className="absolute top-[4%] right-[0%] z-20"
              initial={{ opacity: 0, y: 20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.7, delay: 0.9, type: 'spring', stiffness: 150 }}
            >
              <MilestoneCard />
            </motion.div>

            {/* Vitals card — bottom left */}
            <motion.div
              className="absolute bottom-[10%] left-[0%] z-20"
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.7, delay: 1.1, type: 'spring', stiffness: 150 }}
            >
              <VitalsCard />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
