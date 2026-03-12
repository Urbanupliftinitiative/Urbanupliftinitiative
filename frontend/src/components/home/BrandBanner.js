import React from 'react';

const BrandBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-800 to-pink-800 py-4 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll-infinite">
          {[...Array(16)].map((_, i) => (
            <span key={i} className="text-white text-lg font-medium px-12 whitespace-nowrap">
              Trusted by Leading Fertility Clinics & Surrogacy Agencies
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandBanner;