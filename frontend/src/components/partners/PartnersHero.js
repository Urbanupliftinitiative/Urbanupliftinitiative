import React from 'react';

const PartnersHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-gradient-to-br from-purple-300 via-purple-400 to-purple-500">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-light text-white leading-tight">
              Partner with<br />
              DOOR.
            </h1>
            <p className="text-xl lg:text-2xl text-white max-w-xl">
              Accelerate your revenue with smart, easy-to-sell access solutions.
            </p>
            <button className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-6 text-base font-medium transition-all shadow-lg">
              Apply now
            </button>
            <p className="text-white">
              Already a partner? <a href="#" className="underline">Shop now</a>
            </p>
          </div>

          <div className="relative w-full h-[600px] flex items-center justify-center">
            <div className="relative w-80 h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersHero;
