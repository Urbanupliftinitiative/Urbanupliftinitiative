import React from 'react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4b5a0] via-[#c9a68a] to-[#8b7355]"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-normal text-gray-900 leading-tight">
              Your Key to<br />
              Smart Buildings
            </h1>
            <p className="text-xl lg:text-2xl text-gray-800 max-w-xl">
              Unify access, automation, and operations into one platform built for modern multifamily.
            </p>
            <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-6 text-base font-medium transition-all shadow-lg hover:shadow-xl">
              Talk to sales →
            </Button>
          </div>

          {/* Right Content - Product Device */}
          <div className="relative">
            <div className="relative w-full h-[600px] flex items-center justify-center">
              {/* Main Device Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-white to-gray-100 rounded-[3rem] shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  {/* Device Circle */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="w-20 h-20 bg-gray-200 rounded-full border-4 border-gray-300"></div>
                  </div>
                  {/* DOOR Text */}
                  <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm font-medium tracking-wider">
                    DOOR
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Hardware Images */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <img 
                src="https://images.unsplash.com/photo-1558002038-1055907df827?w=200" 
                alt="Smart Lock" 
                className="absolute top-10 left-10 w-24 h-24 object-cover rounded-2xl shadow-lg opacity-0 animate-fade-in-up"
                style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
              />
              <img 
                src="https://images.unsplash.com/photo-1770197247933-63e02c014cb7?w=200" 
                alt="Intercom" 
                className="absolute top-32 right-10 w-24 h-24 object-cover rounded-2xl shadow-lg opacity-0 animate-fade-in-up"
                style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
              />
              <img 
                src="https://images.unsplash.com/photo-1549109926-58f039549485?w=200" 
                alt="Camera" 
                className="absolute bottom-32 left-20 w-24 h-24 object-cover rounded-2xl shadow-lg opacity-0 animate-fade-in-up"
                style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
              />
              <img 
                src="https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=200" 
                alt="Thermostat" 
                className="absolute bottom-10 right-20 w-24 h-24 object-cover rounded-2xl shadow-lg opacity-0 animate-fade-in-up"
                style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
