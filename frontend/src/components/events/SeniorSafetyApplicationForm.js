import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import { org, events } from '../../data/organization';

const FOCUS_RING = 'focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-ed-accent focus-visible:outline-offset-2';
const INPUT = `w-full min-h-[48px] bg-ed-surfaceRaised border border-ed-border rounded-[12px] px-4 text-[16px] text-ed-ink ${FOCUS_RING} focus:border-ed-accent transition-colors`;

const event = events.find((e) => e.id === 'co-alarm-distribution');

const EMPTY_FORM = { name: '', age: '', address: '', phone: '', email: '', notes: '' };

// FormSubmit.co delivers straight to the org inbox with no backend of our
// own — no signup needed, but the first-ever submission to a given address
// triggers a one-time confirmation email that has to be clicked before any
// further submissions are actually delivered.
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${org.email}`;

const SeniorSafetyApplicationForm = () => {
  const [form, setForm] = useState(EMPTY_FORM);
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
          _subject: 'CO Alarm Request — Senior Safety Initiative',
          _template: 'table',
          Name: form.name,
          Age: form.age,
          Address: form.address,
          Phone: form.phone,
          Email: form.email || '(not provided)',
          Notes: form.notes || '(none)',
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
          Your request has been sent to our team at {org.email}. We'll follow up with pickup or delivery details
          before {event ? event.dateLabel : 'the event'}.
        </p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div role="alert" className="bg-white rounded-[16px] border border-ed-border shadow-ed-raised p-10 text-center">
        <AlertTriangle size={40} className="text-ed-danger mx-auto mb-4" />
        <h3 className="text-[19px] font-extrabold text-ed-ink mb-2">Something went wrong.</h3>
        <p className="text-[14px] text-ed-muted mb-4">
          Your request didn't go through. Because this is a life-safety device with limited supply, please reach us
          directly instead:
        </p>
        <a
          href={`mailto:${org.email}?subject=${encodeURIComponent('CO Alarm Request — Senior Safety Initiative')}`}
          className={`inline-flex items-center justify-center font-semibold text-white bg-ed-accent rounded-full px-6 min-h-[44px] ${FOCUS_RING}`}
        >
          Email {org.email}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-[16px] border border-ed-border shadow-ed-raised p-8 md:p-10 space-y-5">
      {event && (
        <p className="text-[13px] text-ed-muted leading-relaxed border-b border-ed-border pb-5">
          Reserve a free carbon monoxide / smoke alarm for the {event.dateLabel} distribution event in{' '}
          {event.location}. Priority goes to Camden seniors and residents facing financial hardship.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="app-name" className="block text-[13px] font-semibold text-ed-ink mb-1.5">Full name</label>
          <input id="app-name" type="text" required value={form.name} onChange={handleChange('name')} className={INPUT} />
        </div>
        <div>
          <label htmlFor="app-age" className="block text-[13px] font-semibold text-ed-ink mb-1.5">Age</label>
          <input id="app-age" type="number" min="0" required value={form.age} onChange={handleChange('age')} className={INPUT} />
        </div>
      </div>

      <div>
        <label htmlFor="app-address" className="block text-[13px] font-semibold text-ed-ink mb-1.5">
          Home address <span className="font-normal text-ed-muted">(for delivery — must be in Camden)</span>
        </label>
        <input id="app-address" type="text" required value={form.address} onChange={handleChange('address')} className={INPUT} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="app-phone" className="block text-[13px] font-semibold text-ed-ink mb-1.5">Phone</label>
          <input id="app-phone" type="tel" required value={form.phone} onChange={handleChange('phone')} className={INPUT} />
        </div>
        <div>
          <label htmlFor="app-email" className="block text-[13px] font-semibold text-ed-ink mb-1.5">
            Email <span className="font-normal text-ed-muted">(optional)</span>
          </label>
          <input id="app-email" type="email" value={form.email} onChange={handleChange('email')} className={INPUT} />
        </div>
      </div>

      <div>
        <label htmlFor="app-notes" className="block text-[13px] font-semibold text-ed-ink mb-1.5">
          Anything we should know? <span className="font-normal text-ed-muted">(optional)</span>
        </label>
        <textarea
          id="app-notes"
          rows={4}
          value={form.notes}
          onChange={handleChange('notes')}
          className={`${INPUT} !min-h-0 py-3 resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className={`w-full min-h-[48px] bg-ed-accent text-white rounded-full text-[15px] font-bold shadow-ed-glow hover:-translate-y-px transition-transform disabled:opacity-60 disabled:hover:translate-y-0 ${FOCUS_RING}`}
      >
        {status === 'sending' ? 'Sending…' : 'Submit request'}
      </button>
      <p className="text-[12px] text-ed-muted text-center">
        Trouble with the form? Email {org.email} directly.
      </p>
    </form>
  );
};

export default SeniorSafetyApplicationForm;
