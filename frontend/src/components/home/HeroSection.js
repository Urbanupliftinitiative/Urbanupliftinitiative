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
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-light text-gray-900 leading-tight">
              Your Partner in<br />
              IVF & Surrogacy Care
            </h1>
            <p className="text-xl lg:text-2xl text-gray-800 max-w-xl">
              Unify patients, surrogates, clinics, and agencies into one intelligent care platform.
            </p>
            <Button 
              onClick={() => navigate('/talk-to-sales')}
              className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-6 text-base font-medium transition-all shadow-lg hover:shadow-xl"
            >
              Request a demo →
            </Button>
          </div>

          <div className="relative w-full h-[600px] flex items-center justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-white to-gray-100 rounded-[3rem] shadow-2xl transform transition-all duration-1000">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-1000">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-3xl">+</span>
                  </div>
                  <div className="text-xs text-gray-600 font-medium">IVF Care</div>
                </div>
              </div>
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm font-medium tracking-wider">
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