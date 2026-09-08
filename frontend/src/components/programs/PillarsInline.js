import React from 'react';
import { pillars, mentorshipDelivery } from '../../data/organization';

const PillarsInline = () => (
  <div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      {pillars.map((pillar) => (
        <div key={pillar.number} className="bg-white rounded-[14px] border border-ed-border p-5">
          <span className="text-[11px] font-extrabold text-ed-accent">{pillar.number}</span>
          <h3 className="text-[15px] font-extrabold text-ed-ink mt-1">{pillar.name}</h3>
          <p className="text-[13px] text-ed-muted mt-1">{pillar.focus}</p>
        </div>
      ))}
    </div>
    <p className="text-[14px] md:text-[15px] text-ed-ink/70 leading-relaxed max-w-2xl">{mentorshipDelivery}</p>
  </div>
);

export default PillarsInline;
