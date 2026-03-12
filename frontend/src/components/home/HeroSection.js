import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

const HeroSection = () => {
  const [currentDevice, setCurrentDevice] = useState(0);
  const navigate = useNavigate();

  const devices = [
    { type: 'app', gradient: 'from-[#e8d5e8] via-[#d8c5d8] to-[#b8a5b8]' },
    { type: 'dashboard', gradient: 'from-[#d5e5f0] via-[#c5d5e0] to-[#a5b5c0]' },
    { type: 'monitor', gradient: 'from-[#e5d5e0] via-[#d5c5d0] to-[#b5a5b0]' },
    { type: 'tracker', gradient: 'from-[#d5e8e8] via-[#c5d8d8] to-[#a5b8b8]' }
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
      
      <div className="relative z-10 w-full px-12 lg:px-20 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <h1 className="text-6xl lg:text-8xl xl:text-9xl font-extralight text-gray-900 leading-[1.1]">
              Your Partner in<br />
              IVF & Surrogacy Care
            </h1>
            <p className="text-2xl lg:text-3xl xl:text-4xl font-light text-gray-800 leading-relaxed">
              Unify patients, surrogates, clinics, and agencies into one intelligent care platform.
            </p>
            <Button 
              onClick={() => navigate('/talk-to-sales')}
              className="bg-black hover:bg-gray-800 text-white rounded-full px-10 py-8 text-lg lg:text-xl font-medium transition-all shadow-lg hover:shadow-xl"
            >
              Request a demo →
            </Button>
          </div>

          <div className="relative w-full h-[600px] flex items-center justify-center">
            <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-white to-gray-100 rounded-[3rem] shadow-2xl transform transition-all duration-1000">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 lg:w-64 lg:h-64 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-1000">
                <div className="text-center">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white text-5xl">+</span>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">IVF Care</div>
                </div>
              </div>
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-gray-400 text-base font-medium tracking-wider">
                ONEPERMIT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;