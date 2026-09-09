import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
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
    a: (
      <>
        You can donate, become a mentor, partner with us as an organization, or simply help spread the word. See
        the "Get Involved" section on our <Link to="/events#get-involved" className="underline hover:text-ed-ink">Events page</Link> for
        direct links to each.
      </>
    ),
  },
  {
    q: 'Where does my donation go?',
    a: "Gifts go toward our funding priorities: a senior transportation vehicle, the planned Cave of Engedi Intercommunal Youth Center, and the ongoing costs of our active programs. We don't yet publish a formal financial breakdown — we're a small, early-stage team.",
  },
  {
    q: 'Who runs the organization?',
    a: (
      <>
        {org.shortName} is run by a team of {org.teamSize} based in {org.city}, {org.state}. Meet everyone on
        our <Link to="/team" className="underline hover:text-ed-ink">Team page</Link>.
      </>
    ),
  },
  {
    q: 'Do you work outside of Camden?',
    a: `No — our work is focused specifically on ${org.city} City residents, from at-risk youth to seniors facing hardship.`,
  },
  {
    q: 'How do I contact you directly?',
    a: (
      <>
        Email us at {org.email}, or use the <Link to="/contact" className="underline hover:text-ed-ink">contact page</Link> and
        we'll get back to you.
      </>
    ),
  },
  {
    q: 'Can I volunteer without becoming a mentor?',
    a: "Yes — reach out and tell us what you're interested in, and we'll help find the right fit, whether that's a one-time community event or an ongoing role.",
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
    <section className="bg-white py-16 md:py-24 px-4 md:px-6">
      <div className="mx-auto w-full max-w-ed-container">
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
