import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import useReveal from '../shared/useReveal';
import Eyebrow from '../shared/Eyebrow';
import { org } from '../../data/organization';

const AMOUNTS = [25, 50, 100, 250];

const FOCUS_RING = 'focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-ed-accent focus-visible:outline-offset-2';
const INPUT = `w-full min-h-[48px] bg-ed-surfaceRaised border border-ed-border rounded-[12px] px-4 text-[16px] text-ed-ink placeholder:text-ed-muted ${FOCUS_RING} focus:border-ed-accent transition-colors`;

const DonateSection = () => {
  const [frequency, setFrequency] = useState('once');
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [form, setForm] = useState({ name: '', email: '' });
  // idle | redirecting | error | returned-success | returned-cancelled
  const [status, setStatus] = useState('idle');

  const selectedAmount = customAmount ? Number(customAmount) : amount;

  // Stripe redirects back here with ?donation=success|cancelled — read it
  // once on mount, then strip it from the URL so a refresh doesn't
  // re-trigger the message.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const donation = params.get('donation');
    if (donation === 'success') setStatus('returned-success');
    if (donation === 'cancelled') setStatus('returned-cancelled');
    if (donation) {
      params.delete('donation');
      const newSearch = params.toString();
      window.history.replaceState({}, '', `${window.location.pathname}${newSearch ? `?${newSearch}` : ''}${window.location.hash}`);
    }
  }, []);

  const handleAmountClick = (value) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('redirecting');
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: selectedAmount, frequency, name: form.name, email: form.email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.url) throw new Error('Checkout session request failed');
      window.location.href = data.url;
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="donate" className="bg-white pt-12 md:pt-16 lg:pt-20 pb-20 md:pb-28 lg:pb-36 px-4 md:px-6">
      <div className="mx-auto max-w-xl">
        <motion.div {...useReveal()} className="text-center mb-12">
          <div className="flex justify-center"><Eyebrow>Give</Eyebrow></div>
          <h2 className="text-[34px] sm:text-[44px] font-extrabold leading-[1.0] tracking-[-0.03em] text-ed-ink mb-4">
            Every gift moves Camden forward.
          </h2>
          <p className="text-[16px] text-ed-ink/60 max-w-md mx-auto">
            Your donation supports our mentorship program, the Senior Safety Initiative, the Back-to-School
            Breakfast program, and our long-term goal of building the Cave of Engedi Youth Center by 2028.
          </p>
        </motion.div>

        <div className="bg-white rounded-[16px] border border-ed-border shadow-ed-raised p-8 md:p-10">
          {status === 'returned-success' ? (
            <div role="status" className="text-center py-10">
              <CheckCircle2 size={44} className="text-ed-accent mx-auto mb-4" />
              <h3 className="text-[19px] font-extrabold text-ed-ink mb-2">Thank you for your gift.</h3>
              <p className="text-[14px] text-ed-muted">
                Your donation has been received. It goes directly to work in Camden — thank you for standing with{' '}
                {org.shortName}.
              </p>
            </div>
          ) : status === 'error' ? (
            <div role="alert" className="text-center py-10">
              <AlertTriangle size={44} className="text-ed-danger mx-auto mb-4" />
              <h3 className="text-[19px] font-extrabold text-ed-ink mb-2">Something went wrong.</h3>
              <p className="text-[14px] text-ed-muted mb-6">
                We couldn't start checkout. Please try again, or email {org.email} directly.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className={`inline-flex items-center justify-center font-semibold text-white bg-ed-accent rounded-full px-6 min-h-[44px] ${FOCUS_RING}`}
              >
                Try again
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {status === 'returned-cancelled' && (
                <p className="mb-6 rounded-[12px] bg-ed-warning/10 border border-ed-warning/30 px-4 py-3 text-[13px] text-ed-ink">
                  Checkout was cancelled — no charge was made. Ready when you are.
                </p>
              )}
              <div className="flex gap-2 mb-6" role="group" aria-label="Donation frequency">
                {['once', 'monthly'].map((freq) => (
                  <button
                    key={freq}
                    type="button"
                    aria-pressed={frequency === freq}
                    onClick={() => setFrequency(freq)}
                    className={`flex-1 min-h-[44px] rounded-full text-[14px] font-bold transition-colors ${FOCUS_RING} ${
                      frequency === freq ? 'bg-ed-ink text-white' : 'bg-white text-ed-ink border border-ed-border'
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
                    className={`min-h-[44px] rounded-[12px] text-[14px] font-extrabold transition-colors ${FOCUS_RING} ${
                      !customAmount && amount === value
                        ? 'bg-ed-accent text-white'
                        : 'bg-white text-ed-ink border border-ed-border'
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
                className={`${INPUT} mb-6`}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="donor-name" className="block text-[13px] font-semibold text-ed-ink mb-1.5">Full name</label>
                  <input
                    id="donor-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={INPUT}
                  />
                </div>
                <div>
                  <label htmlFor="donor-email" className="block text-[13px] font-semibold text-ed-ink mb-1.5">Email</label>
                  <input
                    id="donor-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={INPUT}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'redirecting' || !selectedAmount}
                className={`w-full min-h-[48px] bg-ed-accent text-white rounded-full text-[15px] font-bold shadow-ed-glow hover:-translate-y-px transition-transform disabled:opacity-60 disabled:hover:translate-y-0 ${FOCUS_RING}`}
              >
                {status === 'redirecting'
                  ? 'Redirecting to secure checkout…'
                  : `Donate $${selectedAmount || 0}${frequency === 'monthly' ? '/month' : ''}`}
              </button>
              <p className="mt-3 text-[12px] text-ed-muted text-center">
                You'll be redirected to Stripe's secure checkout to complete your gift.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
