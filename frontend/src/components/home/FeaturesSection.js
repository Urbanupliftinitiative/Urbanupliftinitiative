import React from 'react';
import { Button } from '../ui/button';

const FeaturesSection = () => {
  const features = [
    {
      title: "Patient-Centered Care",
      description: "Our platform combines intuitive design with powerful functionality. We create solutions that integrate seamlessly with existing clinical workflows and empower patients throughout their fertility journey.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
      bgColor: "bg-gradient-to-br from-[#e8d5e8] via-[#d8c5d8] to-[#b8a5b8]"
    },
    {
      title: "Unified Care Platform",
      description: "OnePermit makes fertility care simple, connecting patients, surrogates, clinics, and agencies. Our intelligent system tracks medications, monitors vitals, and automates workflows—helping teams reduce risk and scale efficiency across their entire practice.",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800",
      bgColor: "bg-gradient-to-br from-[#d5e5f0] via-[#c5d5e0] to-[#a5b5c0]"
    },
    {
      title: "HIPAA-Compliant Security",
      description: "Safeguard patient data at every touchpoint with enterprise-grade encryption, role-based access controls, and comprehensive audit logging.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
      bgColor: "bg-gradient-to-br from-[#e5d5e0] via-[#d5c5d0] to-[#b5a5b0]",
      textured: true
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
        {features.map((feature, idx) => (
          <div key={idx} className={`rounded-[3rem] overflow-hidden ${feature.bgColor}`}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-12 lg:p-16 ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:order-2' : ''} ${feature.textured ? 'text-white' : ''}`}>
                <h2 className={`text-4xl lg:text-5xl font-light leading-tight ${feature.textured ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h2>
                <p className={`text-lg leading-relaxed ${feature.textured ? 'text-white' : 'text-gray-700'}`}>
                  {feature.description}
                </p>
                <Button className={`${feature.textured ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'} rounded-full px-8 py-6 text-base font-medium transition-all`}>
                  Explore OnePermit
                </Button>
              </div>

              {!feature.textured && (
                <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;