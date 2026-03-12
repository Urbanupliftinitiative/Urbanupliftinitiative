import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Are you still supporting Latch products?",
      answer: "Yes. All Latch hardware continues to be fully supported, with regular updates, system compatibility, and access to the DOOR App and DOOR OS."
    },
    {
      question: "Can we start with just one building or a partial rollout?",
      answer: "Absolutely. DOOR supports partial rollouts and phased deployments. Whether it's one building or one hundred, our success team is there at every step."
    },
    {
      question: "Can DOOR be used in retrofit properties, or is it only for new developments?",
      answer: "DOOR works for both new construction and retrofit properties. Our hardware installs easily on existing doors and infrastructure, and integrates with most property management systems (PMSs). It's ideal for upgrading buildings without major renovation or rewiring."
    },
    {
      question: "How do I become a DOOR channel partner, installer, or authorized reseller?",
      answer: "DOOR offers a robust Channel Partner Program built for installers, integrators, contractors, distributors, and low-voltage professionals who want to grow their business with next-generation building technology. As a DOOR partner, you receive premium hardware and subscription margins, access to qualified lead referrals, co-marketing resources, early visibility into our product roadmap, and dedicated support from our partner success team. You can apply online to join the DOOR Channel Partner Network."
    },
    {
      question: "What makes DOOR different from other access control and smart home systems?",
      answer: "DOOR combines access, intercom, Smart Home automation, and portfolio-wide management into one platform. Fewer vendors, fewer headaches, and better visibility across your entire operation."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-16 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === idx ? (
                    <Minus className="w-6 h-6 text-gray-900" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-900" />
                  )}
                </div>
              </button>
              
              {openIndex === idx && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center space-x-2 text-gray-900 hover:text-gray-600 font-medium transition-colors"
          >
            <span>See all FAQs</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
