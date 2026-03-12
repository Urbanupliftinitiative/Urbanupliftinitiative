import React, { useState, useEffect } from 'react';

const ProductsHero = () => {
  const [currentDevice, setCurrentDevice] = useState(0);
  
  const devices = [
    'device1',
    'device2',
    'device3'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDevice((prev) => (prev + 1) % devices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-light text-white leading-tight">
              Open your world of<br />
              Building Intelligence
            </h1>
            <p className="text-xl lg:text-2xl text-white max-w-xl">
              Unlock streamlined access and automation solutions.
            </p>
            <button className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-6 text-base font-medium transition-all shadow-lg">
              Talk to sales →
            </button>
          </div>

          <div className="relative w-full h-[600px] flex items-center justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl transform transition-all duration-1000 flex items-center justify-center">
              <div className="w-32 h-32 bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
