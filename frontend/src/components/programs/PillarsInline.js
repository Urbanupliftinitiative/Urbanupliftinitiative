import React from 'react';
import { pillars, mentorshipDelivery } from '../../data/organization';

const PillarsInline = () => (
  <div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      {pillars.map((pillar) => (
        <div key={pillar.number} className="bg-white rounded-xl border border-uui-navy/10 p-5">
          <span className="text-xs font-bold text-uui-gold">{pillar.number}</span>
          <h3 className="font-sora text-base font-bold text-uui-navy mt-1">{pillar.name}</h3>
          <p className="text-sm text-uui-slate mt-1">{pillar.focus}</p>
        </div>
      ))}
    </div>
    <p className="text-sm md:text-base text-uui-slate leading-relaxed max-w-3xl">{mentorshipDelivery}</p>
  </div>
);

export default PillarsInline;
