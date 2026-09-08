import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { org } from '../../data/organization';

const FOCUS_RING = 'focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-ed-accent focus-visible:outline-offset-2';
const INPUT = `w-full min-h-[48px] bg-ed-surfaceRaised border border-ed-border rounded-[12px] px-4 text-[16px] text-ed-ink ${FOCUS_RING} focus:border-ed-accent transition-colors`;

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
      <div role="status" className="bg-white rounded-[16px] border border-ed-border shadow-ed-raised p-10 text-center">
        <CheckCircle2 size={40} className="text-ed-accent mx-auto mb-4" />
        <h3 className="text-[19px] font-extrabold text-ed-ink mb-2">Thanks, {form.name || 'friend'}.</h3>
        <p className="text-[14px] text-ed-muted">
          This is a demo form — it isn't connected to a live inbox yet. In the meantime, reach us directly at{' '}
          <a href={`mailto:${org.email}`} className={`font-semibold text-ed-ink underline ${FOCUS_RING} rounded-sm`}>
            {org.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-[16px] border border-ed-border shadow-ed-raised p-8 md:p-10 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-[13px] font-semibold text-ed-ink mb-1.5">Full name</label>
          <input id="contact-name" type="text" required value={form.name} onChange={handleChange('name')} className={INPUT} />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-[13px] font-semibold text-ed-ink mb-1.5">Email</label>
          <input id="contact-email" type="email" required value={form.email} onChange={handleChange('email')} className={INPUT} />
        </div>
      </div>

      <div>
        <label htmlFor="contact-reason" className="block text-[13px] font-semibold text-ed-ink mb-1.5">I am a...</label>
        <select id="contact-reason" value={form.reason} onChange={handleChange('reason')} className={INPUT}>
          {REASONS.map((reason) => (
            <option key={reason} value={reason}>{reason}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-[13px] font-semibold text-ed-ink mb-1.5">Message</label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange('message')}
          className={`${INPUT} !min-h-0 py-3 resize-none`}
        />
      </div>

      <button
        type="submit"
        className={`w-full min-h-[48px] bg-ed-accent text-white rounded-full text-[15px] font-bold shadow-ed-glow hover:-translate-y-px transition-transform ${FOCUS_RING}`}
      >
        Send message
      </button>
      <p className="text-[12px] text-ed-muted text-center">
        Demo form — not yet connected to a live inbox. Email {org.email} directly for now.
      </p>
    </form>
  );
};

export default ContactForm;
