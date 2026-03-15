import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How does OnePermit integrate with our existing EMR system?',
    a: 'OnePermit offers seamless integration with major EMR platforms through our secure API. Our team handles the entire setup process, ensuring your existing workflows remain uninterrupted while adding powerful monitoring and communication capabilities.',
  },
  {
    q: 'Can we start with a pilot program before full deployment?',
    a: 'Absolutely. We recommend starting with a small cohort of patients or surrogates to demonstrate value before scaling. Our team provides dedicated support throughout the pilot to ensure a smooth experience.',
  },
  {
    q: 'Is OnePermit HIPAA compliant?',
    a: 'Yes. OnePermit is fully HIPAA compliant with enterprise-grade encryption, role-based access controls, comprehensive audit logging, and regular third-party security assessments. Patient data security is our top priority.',
  },
  {
    q: 'How do surrogacy agencies monitor remote surrogates?',
    a: 'OnePermit provides real-time vitals tracking, medication adherence monitoring, and milestone updates — all accessible through a centralized agency dashboard. Surrogates log their data through our mobile-friendly interface, and agencies receive instant alerts for any concerns.',
  },
  {
    q: 'What makes OnePermit different from other fertility apps?',
    a: 'OnePermit is the only platform that unifies all stakeholders — patients, surrogates, clinics, agencies, and families — into one joyful, accountable care ecosystem. We go beyond tracking to celebrate milestones and build genuine connections throughout the journey.',
  },
];

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div className="border-b border-slate-100">
    <button
      data-testid={`faq-toggle-${faq.q.slice(0, 20).replace(/\s/g, '-').toLowerCase()}`}
      onClick={onToggle}
      className="w-full flex items-center justify-between py-6 text-left group"
    >
      <span className="text-base md:text-lg font-semibold text-op-navy pr-8 group-hover:text-op-navy/80 transition-colors">
        {faq.q}
      </span>
      <span className="shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
        {isOpen ? <Minus size={16} className="text-op-navy" /> : <Plus size={16} className="text-op-navy" />}
      </span>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="overflow-hidden"
        >
          <p className="pb-6 text-sm md:text-base text-op-slate leading-relaxed max-w-3xl">
            {faq.a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section data-testid="faq-section" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <motion.h2
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-op-navy tracking-tight text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" data-testid="faq-see-all" className="text-op-navy font-bold text-base hover:underline underline-offset-4 transition-all">
            See all FAQs &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
