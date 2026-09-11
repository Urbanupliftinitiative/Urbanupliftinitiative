import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
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

// Same FormSubmit.co setup as the Senior Safety application form — no
// backend needed, delivers straight to the org inbox.
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${org.email}`;

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', reason: REASONS[0], message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Contact form — ${form.reason}`,
          _template: 'table',
          Name: form.name,
          Email: form.email,
          'I am a': form.reason,
          Message: form.message,
        }),
      });
      if (!res.ok) throw new Error('FormSubmit request failed');
      setStatus('sent');
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div role="status" className="bg-white rounded-[16px] border border-ed-border shadow-ed-raised p-10 text-center">
        <CheckCircle2 size={40} className="text-ed-accent mx-auto mb-4" />
        <h3 className="text-[19px] font-extrabold text-ed-ink mb-2">Thanks, {form.name || 'friend'}.</h3>
        <p className="text-[14px] text-ed-muted">
          Your message has been sent to our team at {org.email}. We'll get back to you soon.
        </p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div role="alert" className="bg-white rounded-[16px] border border-ed-border shadow-ed-raised p-10 text-center">
        <AlertTriangle size={40} className="text-ed-danger mx-auto mb-4" />
        <h3 className="text-[19px] font-extrabold text-ed-ink mb-2">Something went wrong.</h3>
        <p className="text-[14px] text-ed-muted">
          Your message didn't go through. Please reach us directly at{' '}
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
        disabled={status === 'sending'}
        className={`w-full min-h-[48px] bg-ed-accent text-white rounded-full text-[15px] font-bold shadow-ed-glow hover:-translate-y-px transition-transform disabled:opacity-60 disabled:hover:translate-y-0 ${FOCUS_RING}`}
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      <p className="text-[12px] text-ed-muted text-center">
        Trouble with the form? Email {org.email} directly.
      </p>
    </form>
  );
};

export default ContactForm;
