import React from 'react';

const partners = [
  'Fertility First IVF',
  'SurroMatch',
  'Hope Springs Clinic',
  'BabySteps Center',
  'Genesis Reproductive',
  'Bloom Family Building',
  'New Life Fertility',
  'Sunflower Surrogacy',
  'Rainbow Clinic',
  'Promise IVF',
];

const MarqueeSection = () => (
  <section data-testid="marquee-section" className="py-8 bg-white border-y border-slate-100/80 overflow-hidden">
    <div className="relative flex">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {[...partners, ...partners].map((name, i) => (
          <span
            key={i}
            className="mx-8 md:mx-12 text-lg md:text-2xl font-bold text-slate-300/80 tracking-tight select-none shrink-0"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default MarqueeSection;
