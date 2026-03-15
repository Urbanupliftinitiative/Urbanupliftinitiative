import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const PILL_IMG = "https://static.prod-images.emergentagent.com/jobs/57eaa313-9958-4d1d-a711-9be1c718b916/images/a3340d711eaa3741cf6cbfb7e53f22715bc3b795cd231c12cecd181e106ad12e.png";

const faqs = [
  {
    question: "How does OnePermit integrate with our existing EMR system?",
    answer: "OnePermit integrates with major EMR systems including Epic, Cerner, and Athenahealth through secure API connections. We handle the technical setup and provide ongoing support."
  },
  {
    question: "Can we start with a pilot program before full deployment?",
    answer: "Absolutely. We support pilot programs and phased rollouts. Whether it's one clinic or your entire network, our success team is there at every step."
  },
  {
    question: "Is OnePermit HIPAA compliant?",
    answer: "Yes. OnePermit is fully HIPAA compliant with enterprise-grade encryption, role-based access controls, comprehensive audit logging, and regular security audits."
  },
  {
    question: "How do surrogacy agencies monitor remote surrogates?",
    answer: "Agencies receive real-time updates on medication adherence, vitals, symptoms, and appointments through customizable dashboards. AI-powered alerts flag potential issues before they become problems."
  },
  {
    question: "What makes OnePermit different from other fertility apps?",
    answer: "OnePermit is the only platform built specifically for IVF and surrogacy workflows, with multi-role access, clinic integration, AI risk detection, and end-to-end journey tracking."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section data-testid="faq-section" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-16 text-center">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left — Pill illustration */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="w-48 h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl flex items-center justify-center">
              <img src={PILL_IMG} alt="" className="w-28 h-28 object-contain" />
            </div>
          </div>

          {/* Right — Questions */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                data-testid={`faq-item-${idx}`}
                className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === idx ? (
                      <X className="w-6 h-6 text-gray-900" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-900" />
                    )}
                  </div>
                </button>

                {openIndex === idx && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#" data-testid="faq-see-all" className="inline-flex items-center space-x-2 text-gray-900 hover:text-purple-600 font-medium transition-colors">
            <span>See all FAQs</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
