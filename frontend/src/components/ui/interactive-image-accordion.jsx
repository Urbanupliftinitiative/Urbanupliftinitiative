import React, { useState } from 'react';

const AccordionItem = ({ item, isActive, onMouseEnter }) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image'; }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0'
              : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

export function InteractiveImageAccordion({ items, headline, description, ctaText, onCtaClick }) {
  const [activeIndex, setActiveIndex] = useState(items.length - 1);

  return (
    <div className="bg-white font-sora">
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left: Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-op-navy leading-[0.95] tracking-[-0.035em]">
              {headline}
            </h1>
            <p className="mt-6 text-base md:text-lg lg:text-xl text-op-slate max-w-xl mx-auto md:mx-0 leading-relaxed">
              {description}
            </p>
            <div className="mt-8">
              <button
                onClick={onCtaClick}
                className="inline-block bg-op-navy text-white font-bold px-10 py-4 rounded-full shadow-[0_12px_35px_rgba(26,26,46,0.25)] hover:scale-105 active:scale-95 transition-transform duration-300"
              >
                {ctaText}
              </button>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-row items-center justify-center gap-3 overflow-x-auto p-4">
              {items.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
