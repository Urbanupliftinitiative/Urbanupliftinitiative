import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import { org } from '../../data/organization';

const AMOUNTS = [25, 50, 100, 250];

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-uui-gold focus-visible:ring-offset-2';

const DonateSection = () => {
  const [frequency, setFrequency] = useState('once');
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [form, setForm] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const selectedAmount = customAmount ? Number(customAmount) : amount;

  const handleAmountClick = (value) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="donate" className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="text-center mb-12">
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest font-bold text-uui-gold mb-4">
            Give
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-sora text-3xl md:text-5xl font-bold text-uui-navy tracking-tight mb-4">
            Every gift moves Camden forward.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-uui-slate max-w-xl mx-auto">
            Your donation supports our mentorship program, the Senior Safety Initiative, the Back-to-School
            Breakfast program, and our long-term goal of building the Cave of Engedi Youth Center by 2028.
          </motion.p>
        </motion.div>

        <div className="bg-uui-cream rounded-2xl border border-uui-navy/10 p-8 md:p-10">
          {submitted ? (
            <div role="status" className="text-center py-10">
              <CheckCircle2 size={48} className="text-uui-blue mx-auto mb-4" />
              <h3 className="font-sora text-xl font-bold text-uui-navy mb-2">Thank you, {form.name || 'friend'}.</h3>
              <p className="text-uui-slate">
                This is a demo donation form — no payment has been processed. Once {org.shortName} connects a real
                payment provider, gifts like yours will go directly to work in Camden.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex gap-2 mb-6" role="group" aria-label="Donation frequency">
                {['once', 'monthly'].map((freq) => (
                  <button
                    key={freq}
                    type="button"
                    aria-pressed={frequency === freq}
                    onClick={() => setFrequency(freq)}
                    className={`flex-1 rounded-full py-2.5 text-sm font-semibold transition-colors ${FOCUS_RING} ${
                      frequency === freq ? 'bg-uui-navy text-white' : 'bg-white text-uui-navy border border-uui-navy/20'
                    }`}
                  >
                    {freq === 'once' ? 'One-time' : 'Monthly'}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-4 gap-2 mb-3" role="group" aria-label="Suggested donation amount">
                {AMOUNTS.map((value) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={!customAmount && amount === value}
                    onClick={() => handleAmountClick(value)}
                    className={`rounded-xl py-3 text-sm font-bold transition-colors ${FOCUS_RING} ${
                      !customAmount && amount === value
                        ? 'bg-uui-gold text-uui-charcoal'
                        : 'bg-white text-uui-navy border border-uui-navy/20'
                    }`}
                  >
                    ${value}
                  </button>
                ))}
              </div>

              <label htmlFor="custom-amount" className="sr-only">Custom amount</label>
              <input
                id="custom-amount"
                type="number"
                min="1"
                inputMode="numeric"
                placeholder="Custom amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className={`w-full bg-white border border-uui-navy/20 rounded-xl px-4 py-3 text-sm mb-6 ${FOCUS_RING}`}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="donor-name" className="block text-xs font-semibold text-uui-slate mb-1.5">Full name</label>
                  <input
                    id="donor-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`w-full bg-white border border-uui-navy/20 rounded-xl px-4 py-3 text-sm ${FOCUS_RING}`}
                  />
                </div>
                <div>
                  <label htmlFor="donor-email" className="block text-xs font-semibold text-uui-slate mb-1.5">Email</label>
                  <input
                    id="donor-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`w-full bg-white border border-uui-navy/20 rounded-xl px-4 py-3 text-sm ${FOCUS_RING}`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className={`w-full bg-uui-navy text-white rounded-full py-4 text-base font-bold hover:bg-uui-blue transition-colors ${FOCUS_RING}`}
              >
                Donate ${selectedAmount || 0}{frequency === 'monthly' ? '/month' : ''}
              </button>
              <p className="mt-3 text-xs text-uui-slate/60 text-center">
                Demo form — not yet connected to a live payment processor. No charge will occur.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
