import React from 'react';

const ValueProposition = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-light text-white leading-relaxed text-center max-w-5xl mx-auto tracking-wide">
          DOOR provides tangible everyday value, including streamlined access, 
          revenue uplift, lower costs, and operational efficiency, all while 
          delivering a modern residential <span className="text-gray-400">living experience.</span>
        </h2>
        <div className="flex justify-center mt-12">
          <button className="bg-white hover:bg-gray-100 text-gray-900 rounded-full px-8 py-4 text-base font-medium transition-all shadow-lg hover:shadow-xl">
            Explore DOOR solutions →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
