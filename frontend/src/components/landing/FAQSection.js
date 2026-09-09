import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import useReveal from '../shared/useReveal';
import Eyebrow from '../shared/Eyebrow';
import { org } from '../../data/organization';

// Answers drawn only from what's already established elsewhere on the site
// (organization.js, the donate/get-involved copy) — nothing new is claimed
// here that isn't backed by real, published facts.
const faqs = [
  {
    q: `What does ${org.shortName} do?`,
    a: 'We run a structured mentorship program for at-risk young men in Camden City, built on five pillars, plus community-development efforts like a senior safety initiative and a back-to-school breakfast program.',
  },
  {
    q: 'How can I get involved?',
    a: 'You can donate, become a mentor, partner with us as an organization, or simply help spread the word. See the "Get Involved" section above for direct links to each.',
  },
  {
    q: 'Where does my donation go?',
    a: "Gifts go toward our funding priorities: a senior transportation vehicle, the planned Cave of Engedi Intercommunal Youth Center, and the ongoing costs of our active programs. We don't yet publish a formal financial breakdown — we're a small, early-stage team.",
  },
  {
    q: 'Who runs the organization?',
    a: `${org.shortName} is run by a team of ${org.teamSize} based in ${org.city}, ${org.state}. Our three officers are listed in the Leadership section above, with the rest of the team profiled on our Team page.`,
  },
  {
    q: 'Do you work outside of Camden?',
    a: `No — our work is focused specifically on ${org.city} City residents, from at-risk youth to seniors facing hardship.`,
  },
];

const FAQItem = ({ q, a, isOpen, onToggle }) => (
  <div className="border-b border-ed-border">
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      className="w-full flex items-center justify-between gap-4 py-6 text-left focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-ed-accent focus-visible:outline-offset-2 rounded-md"
    >
      <span className="text-[16px] md:text-[17px] font-bold text-ed-ink">{q}</span>
      <ChevronDown size={18} className={`shrink-0 text-ed-ink/50 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    {isOpen && (
      <p className="pb-6 text-[14px] md:text-[15px] text-ed-ink/60 leading-relaxed max-w-2xl">{a}</p>
    )}
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-20 md:py-28 lg:py-36 px-4 md:px-6">
      <div className="mx-auto w-full max-w-ed-container">
        <motion.div {...useReveal()} className="mb-10 max-w-2xl">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="text-[34px] sm:text-[44px] md:text-[52px] font-extrabold leading-[1.0] tracking-[-0.03em] text-ed-ink">
            Answers to the questions we hear most.
          </h2>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="border-t border-ed-border">
          {faqs.map((item, i) => (
            <motion.div key={item.q} variants={fadeUp}>
              <FAQItem
                q={item.q}
                a={item.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
