import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { org } from '../../data/organization';

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-uui-gold focus-visible:ring-offset-2';

const REASONS = [
  'Prospective mentor',
  'Parent or mentee',
  'Community partner or sponsor',
  'Media or press',
  'Other',
];

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', reason: REASONS[0], message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div role="status" className="bg-uui-cream rounded-2xl border border-uui-navy/10 p-10 text-center">
        <CheckCircle2 size={44} className="text-uui-blue mx-auto mb-4" />
        <h3 className="font-sora text-xl font-bold text-uui-navy mb-2">Thanks, {form.name || 'friend'}.</h3>
        <p className="text-uui-slate">
          This is a demo form — it isn't connected to a live inbox yet. In the meantime, reach us directly at{' '}
          <a href={`mailto:${org.email}`} className={`font-semibold text-uui-navy underline ${FOCUS_RING}`}>
            {org.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-uui-cream rounded-2xl border border-uui-navy/10 p-8 md:p-10 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-semibold text-uui-slate mb-1.5">Full name</label>
          <input
            id="contact-name"
            type="text"
            required
            value={form.name}
            onChange={handleChange('name')}
            className={`w-full bg-white border border-uui-navy/20 rounded-xl px-4 py-3 text-sm ${FOCUS_RING}`}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-xs font-semibold text-uui-slate mb-1.5">Email</label>
          <input
            id="contact-email"
            type="email"
            required
            value={form.email}
            onChange={handleChange('email')}
            className={`w-full bg-white border border-uui-navy/20 rounded-xl px-4 py-3 text-sm ${FOCUS_RING}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-reason" className="block text-xs font-semibold text-uui-slate mb-1.5">I am a...</label>
        <select
          id="contact-reason"
          value={form.reason}
          onChange={handleChange('reason')}
          className={`w-full bg-white border border-uui-navy/20 rounded-xl px-4 py-3 text-sm ${FOCUS_RING}`}
        >
          {REASONS.map((reason) => (
            <option key={reason} value={reason}>{reason}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold text-uui-slate mb-1.5">Message</label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange('message')}
          className={`w-full bg-white border border-uui-navy/20 rounded-xl px-4 py-3 text-sm resize-none ${FOCUS_RING}`}
        />
      </div>

      <button
        type="submit"
        className={`w-full bg-uui-navy text-white rounded-full py-4 text-base font-bold hover:bg-uui-blue transition-colors ${FOCUS_RING}`}
      >
        Send message
      </button>
      <p className="text-xs text-uui-slate/60 text-center">
        Demo form — not yet connected to a live inbox. Email {org.email} directly for now.
      </p>
    </form>
  );
};

export default ContactForm;
