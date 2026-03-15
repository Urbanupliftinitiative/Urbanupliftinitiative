import React from 'react';
import { motion } from 'framer-motion';

const clinics = [
  { name: 'Fertility First IVF', patients: '12.5K Patients', color: '#FFE0E6', initial: 'FF' },
  { name: 'SurroMatch Agency', patients: '8.3K Families', color: '#E6E6FA', initial: 'SM' },
  { name: 'Hope Springs Clinic', patients: '15K Patients', color: '#E0F7FA', initial: 'HS' },
  { name: 'BabySteps Center', patients: '6.7K Families', color: '#FFDAB9', initial: 'BS' },
  { name: 'Genesis Reproductive', patients: '9.2K Patients', color: '#D4EDDA', initial: 'GR' },
  { name: 'Bloom Family Building', patients: '4.8K Families', color: '#FFF3CD', initial: 'BF' },
];

const CommunitySection = () => (
  <section id="community" data-testid="community-section" className="py-24 md:py-32 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.p
          className="text-xs sm:text-sm uppercase tracking-[0.3em] font-bold text-op-slate/50 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Join communities
        </motion.p>
        <motion.h2
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-op-navy tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Your most-loved clinics
        </motion.h2>
      </div>

      {/* Horizontal scrolling cards */}
      <div className="flex gap-5 overflow-x-auto pb-6 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
        {clinics.map((clinic, i) => (
          <motion.div
            key={i}
            data-testid={`clinic-card-${i}`}
            className="min-w-[240px] sm:min-w-[280px] snap-start rounded-3xl p-6 flex flex-col justify-between h-[260px] sm:h-[280px] hover:-translate-y-2 transition-transform duration-500 cursor-pointer shrink-0"
            style={{ background: clinic.color }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="w-14 h-14 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center font-bold text-base text-op-navy">
              {clinic.initial}
            </div>
            <div>
              <p className="font-bold text-base sm:text-lg text-op-navy mb-1">{clinic.name}</p>
              <p className="text-sm text-op-slate/70">{clinic.patients}</p>
              <button className="mt-3 bg-white/70 backdrop-blur-sm text-op-navy font-semibold text-sm rounded-full px-5 py-2 hover:bg-white transition-colors duration-300">
                Connect
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* "Gang's all here" link — matching tyb.xyz style */}
      <div className="text-center mt-10">
        <a href="#start" data-testid="community-see-all" className="text-op-navy font-bold text-lg hover:underline underline-offset-4 transition-all">
          See all partners &rarr;
        </a>
      </div>
    </div>
  </section>
);

export default CommunitySection;
