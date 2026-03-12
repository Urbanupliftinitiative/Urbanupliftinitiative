import React from 'react';

const ValueProposition = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-purple-900 to-pink-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-light text-white leading-relaxed text-center max-w-5xl mx-auto tracking-wide">
          OnePermit provides measurable outcomes: improved medication adherence, 
          reduced cycle failures, increased transparency, and better communication 
          across every <span className="text-purple-300">fertility journey.</span>
        </h2>
        <div className="flex justify-center mt-12">
          <button className="bg-white hover:bg-gray-100 text-gray-900 rounded-full px-8 py-4 text-base font-medium transition-all shadow-lg hover:shadow-xl">
            Explore OnePermit →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
