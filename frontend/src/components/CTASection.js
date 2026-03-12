import React from 'react';

const CTASection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 max-w-2xl">
            Talk to our sales team and get the most out of your buildings.
          </h2>
          <button className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-4 text-base font-medium transition-all shadow-lg hover:shadow-xl flex items-center space-x-2 whitespace-nowrap">
            <span>Get in touch today</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
