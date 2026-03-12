import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

const HeroSection = () => {
  const [currentDevice, setCurrentDevice] = useState(0);
  const navigate = useNavigate();

  const devices = [
    { type: 'locks', gradient: 'from-[#d4b5a0] via-[#c9a68a] to-[#8b7355]' },
    { type: 'reader', gradient: 'from-[#b8a5a5] via-[#a89696] to-[#7a6b6b]' },
    { type: 'hub', gradient: 'from-[#c0b5b0] via-[#b0a5a0] to-[#8a7f7a]' },
    { type: 'sensor', gradient: 'from-[#d0c5c0] via-[#c0b5b0] to-[#9a8f8a]' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDevice((prev) => (prev + 1) % devices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [devices.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-1000 ${devices[currentDevice].gradient}`}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-light text-gray-900 leading-tight">
              Your Key to<br />
              Smart Buildings
            </h1>
            <p className="text-xl lg:text-2xl text-gray-800 max-w-xl">
              Unify access, automation, and operations into one platform built for modern multifamily.
            </p>
            <Button 
              onClick={() => navigate('/talk-to-sales')}
              className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-6 text-base font-medium transition-all shadow-lg hover:shadow-xl"
            >
              Talk to sales →
            </Button>
          </div>

          <div className="relative w-full h-[600px] flex items-center justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-white to-gray-100 rounded-[3rem] shadow-2xl transform transition-all duration-1000">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-1000">
                <div className="w-20 h-20 bg-gray-200 rounded-full border-4 border-gray-300"></div>
              </div>
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm font-medium tracking-wider">
                DOOR
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;