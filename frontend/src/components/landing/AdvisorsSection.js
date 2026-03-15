import React from 'react';
import { motion } from 'framer-motion';

const advisors = [
  {
    name: 'Dr. Sarah Chen, MD',
    title: 'Medical Director, Fertility Institute of California, Reproductive Endocrinology',
    image: 'https://images.unsplash.com/photo-1706565029539-d09af5896340?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDB8fHx8MTc3MzU5ODk4MHww&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Dr. Michael Rodriguez, PhD',
    title: 'CEO Surrogacy Solutions Network, Former VP Clinical Operations',
    image: 'https://images.unsplash.com/photo-1643898803342-77f0ddec8353?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJlYXJkfGVufDB8fHx8MTc3MzU5ODk4MXww&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Dr. Jennifer Martinez',
    title: 'Ex. Chief Medical Officer, Stanford Fertility Center, IVF Specialist',
    image: 'https://images.unsplash.com/photo-1747710016871-a603dda0e414?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3QlMjB3YXJtJTIwbmF0dXJhbCUyMGxpZ2h0fGVufDB8fHx8MTc3MzU4Njg1MHww&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Emily Thompson, RN, CNM',
    title: 'UCSF Reproductive Health, Johns Hopkins Fertility Clinic',
    image: 'https://images.unsplash.com/photo-1765005204058-10418f5123c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBudXJzZSUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3QlMjBzY3J1YnN8ZW58MHx8fHwxNzczNTk4OTgxfDA&ixlib=rb-4.1.0&q=85',
  },
];

const AdvisorsSection = () => (
  <section data-testid="advisors-section" className="py-24 md:py-32 px-6 bg-white">
    <div className="max-w-[1440px] mx-auto">
      <motion.h2
        className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-op-navy tracking-tight mb-16 md:mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Advised by Healthcare Veterans
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-14 md:gap-x-12">
        {advisors.map((advisor, i) => (
          <motion.div
            key={i}
            data-testid={`advisor-card-${i}`}
            className="flex items-center gap-6 py-6 border-b border-slate-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <img
              src={advisor.image}
              alt={advisor.name}
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover shrink-0 bg-slate-100"
            />
            <div>
              <h3 className="text-lg md:text-xl font-bold text-op-navy mb-1">{advisor.name}</h3>
              <p className="text-sm md:text-base text-op-slate leading-relaxed">{advisor.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AdvisorsSection;
