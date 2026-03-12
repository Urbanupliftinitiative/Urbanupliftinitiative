import React from 'react';

const ParallaxSection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl lg:text-6xl font-normal text-white leading-relaxed text-center max-w-5xl mx-auto">
          DOOR provides tangible everyday value, including streamlined access, 
          revenue uplift, lower costs, and operational efficiency, all while 
          delivering a modern residential living experience.
        </h2>
        <div className="flex justify-center mt-12">
          <button className="bg-white hover:bg-gray-100 text-gray-900 rounded-full px-8 py-4 text-base font-medium transition-all shadow-lg hover:shadow-xl flex items-center space-x-2">
            <span>Explore DOOR solutions</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
