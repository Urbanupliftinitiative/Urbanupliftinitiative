import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pill, HeartPulse, Users } from 'lucide-react';

const tabs = [
  {
    id: 'track',
    label: 'Track',
    icon: Pill,
    headline: 'Manage medications with confidence.',
    subtitle: 'Never miss a dose again.',
    description: 'Smart reminders for every injection, pill, and supplement. See your full medication timeline at a glance — color-coded and beautifully organized.',
    cta: 'See How It Works',
    color: '#FFDAB9',
  },
  {
    id: 'monitor',
    label: 'Monitor',
    icon: HeartPulse,
    headline: 'Every vital sign, beautifully tracked.',
    subtitle: 'Real-time health insights.',
    description: 'Monitor weight, blood pressure, temperature, and more. Your clinic sees it all in real time — so you never have to worry alone.',
    cta: 'Explore Monitoring',
    color: '#E6E6FA',
  },
  {
    id: 'support',
    label: 'Support',
    icon: Users,
    headline: 'Your people, always with you.',
    subtitle: 'Built-in care circle.',
    description: 'Partners, family, and friends stay connected through shared updates and milestone celebrations. Because no one should do this alone.',
    cta: 'Build Your Circle',
    color: '#E0F7FA',
  },
];

/* ---- Mockup Sub-Components ---- */

const MedMockup = () => (
  <div className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-[320px] border border-slate-100">
    <p className="font-bold text-op-navy text-lg mb-5">Today's Schedule</p>
    {[
      { time: '8:00 AM', name: 'Prenatal Vitamin', done: true },
      { time: '10:00 AM', name: 'Estrogen Patch', done: true },
      { time: '2:00 PM', name: 'Progesterone', done: false },
      { time: '8:00 PM', name: 'Folic Acid', done: false },
    ].map((med, i) => (
      <div key={i} className={`flex items-center gap-3 py-3 ${i < 3 ? 'border-b border-slate-50' : ''}`}>
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
          med.done ? 'bg-emerald-50 border-emerald-400' : 'border-slate-200'
        }`}>
          {med.done && <div className="w-2 h-2 rounded-full bg-emerald-500" />}
        </div>
        <div className="flex-1">
          <p className={`text-sm font-medium ${med.done ? 'text-slate-300 line-through' : 'text-op-navy'}`}>{med.name}</p>
          <p className="text-xs text-slate-400">{med.time}</p>
        </div>
      </div>
    ))}
    <div className="mt-5 bg-op-peach/30 rounded-2xl p-4">
      <div className="flex justify-between text-xs font-semibold text-op-slate mb-2">
        <span>Daily Progress</span><span>50%</span>
      </div>
      <div className="h-2 bg-white/60 rounded-full overflow-hidden">
        <div className="h-full w-1/2 bg-gradient-to-r from-orange-300 to-rose-400 rounded-full" />
      </div>
    </div>
  </div>
);

const VitalsMockup = () => (
  <div className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-[320px] border border-slate-100">
    <p className="font-bold text-op-navy text-lg mb-5">Daily Vitals</p>
    <div className="grid grid-cols-2 gap-3">
      {[
        { label: 'Heart Rate', value: '72', unit: 'bpm', bg: 'bg-rose-50', color: 'text-rose-500' },
        { label: 'Blood Pressure', value: '118/76', unit: 'mmHg', bg: 'bg-blue-50', color: 'text-blue-500' },
        { label: 'Weight', value: 'On Track', unit: '', bg: 'bg-emerald-50', color: 'text-emerald-500' },
        { label: 'Temperature', value: '98.4', unit: '\u00b0F', bg: 'bg-amber-50', color: 'text-amber-500' },
      ].map((v, i) => (
        <div key={i} className={`${v.bg} rounded-2xl p-4`}>
          <p className="text-[11px] text-slate-500 mb-1 font-medium">{v.label}</p>
          <p className={`text-xl font-bold ${v.color}`}>{v.value}</p>
          {v.unit && <p className="text-[11px] text-slate-400">{v.unit}</p>}
        </div>
      ))}
    </div>
    <div className="mt-5 bg-op-lavender/20 rounded-2xl p-3 text-center">
      <p className="text-xs text-op-slate font-medium">All vitals synced with your clinic</p>
    </div>
  </div>
);

const SupportMockup = () => (
  <div className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-[320px] border border-slate-100">
    <p className="font-bold text-op-navy text-lg mb-5">Your Care Circle</p>
    <div className="space-y-3">
      {[
        { name: 'Partner', role: 'Family', initial: 'P', bg: 'bg-rose-100' },
        { name: 'Mom', role: 'Family', initial: 'M', bg: 'bg-amber-100' },
        { name: 'Dr. Chen', role: 'Clinic', initial: 'D', bg: 'bg-blue-100' },
        { name: 'Agency Coord.', role: 'Agency', initial: 'A', bg: 'bg-emerald-100' },
      ].map((m, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className={`w-10 h-10 ${m.bg} rounded-full flex items-center justify-center font-bold text-sm text-op-navy shrink-0`}>
            {m.initial}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-op-navy">{m.name}</p>
            <p className="text-xs text-slate-400">{m.role}</p>
          </div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
        </div>
      ))}
    </div>
    <div className="mt-5 bg-op-blue/30 rounded-2xl p-4">
      <p className="text-sm font-semibold text-op-navy">Week 8 scan complete!</p>
      <p className="text-xs text-slate-400 mt-0.5">Shared with your circle 2h ago</p>
    </div>
  </div>
);

const mockups = { track: MedMockup, monitor: VitalsMockup, support: SupportMockup };

/* ---- Main Component ---- */

const TabsSection = () => {
  const [active, setActive] = useState('track');
  const activeTab = tabs.find(t => t.id === active);
  const Mockup = mockups[active];

  return (
    <section
      id="features"
      data-testid="tabs-section"
      className="py-24 md:py-32 px-6 transition-colors duration-700"
      style={{ background: `linear-gradient(180deg, #ffffff 0%, ${activeTab.color}25 100%)` }}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Tab Buttons */}
        <div data-testid="tab-buttons" className="flex items-center justify-center gap-2 mb-16">
          {tabs.map(tab => (
            <button
              key={tab.id}
              data-testid={`tab-${tab.id}`}
              onClick={() => setActive(tab.id)}
              className={`relative px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                active === tab.id
                  ? 'bg-op-navy text-white shadow-lg shadow-op-navy/20'
                  : 'text-op-slate hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          >
            {/* Text */}
            <div className="flex-1 text-center lg:text-left max-w-xl">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-op-navy tracking-tight leading-tight mb-4">
                {activeTab.headline}
              </h3>
              <p className="text-base sm:text-lg font-semibold text-op-slate/60 mb-4">
                {activeTab.subtitle}
              </p>
              <p className="text-sm sm:text-base md:text-lg text-op-slate leading-relaxed mb-8">
                {activeTab.description}
              </p>
              <a
                href="#start"
                data-testid={`tab-cta-${active}`}
                className="inline-block bg-op-navy text-white rounded-full px-8 py-3.5 font-semibold text-sm sm:text-base hover:scale-105 active:scale-95 transition-transform"
              >
                {activeTab.cta}
              </a>
            </div>

            {/* Visual Mockup */}
            <div className="flex-1 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15, type: 'spring', stiffness: 200 }}
              >
                <Mockup />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TabsSection;
