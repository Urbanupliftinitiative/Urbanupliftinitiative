import React from 'react';

const BrandBanner = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-4 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll-infinite">
          {[...Array(16)].map((_, i) => (
            <span key={i} className="text-white text-lg font-medium px-12 whitespace-nowrap">
              Latch is now DOOR.
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandBanner;