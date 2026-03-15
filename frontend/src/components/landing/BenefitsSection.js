import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Activity, Link2, Users2, Trophy, Shield } from 'lucide-react';

const benefits = [
  { icon: Bell, title: 'Smart Reminders', description: 'Never miss a medication dose with intelligent, gentle notifications tailored to your schedule.', color: '#FFDAB9' },
  { icon: Activity, title: 'Vitals Dashboard', description: 'Track health metrics beautifully \u2014 synced with your care team in real time.', color: '#E6E6FA' },
  { icon: Link2, title: 'Clinic Integration', description: 'Seamless data sharing between you and your reproductive endocrinologist.', color: '#E0F7FA' },
  { icon: Users2, title: 'Family Portal', description: 'Keep partners, parents, and loved ones updated and connected on your journey.', color: '#FFE0E6' },
  { icon: Trophy, title: 'Milestone Tracker', description: 'Celebrate every achievement \u2014 from first injection to first heartbeat.', color: '#D4EDDA' },
  { icon: Shield, title: 'Secure & Private', description: 'HIPAA-compliant platform. Your data is encrypted and always protected.', color: '#FFF3CD' },
];

const BenefitsSection = () => (
  <section data-testid="benefits-section" className="py-24 md:py-32 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.p
          className="text-xs sm:text-sm uppercase tracking-[0.3em] font-bold text-op-slate/50 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          everything you need
        </motion.p>
        <motion.h2
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-op-navy tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Built for every step
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            data-testid={`benefit-card-${i}`}
            className="bg-[#F8F8FA] rounded-3xl p-7 sm:p-8 hover:-translate-y-2 transition-transform duration-500 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div
              className="w-13 h-13 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
              style={{ background: b.color, width: 52, height: 52 }}
            >
              <b.icon size={22} className="text-op-navy" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-op-navy mb-2">{b.title}</h3>
            <p className="text-sm sm:text-base text-op-slate leading-relaxed">{b.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
