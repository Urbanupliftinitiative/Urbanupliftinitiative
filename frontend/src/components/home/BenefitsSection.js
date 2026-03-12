import React from 'react';
import { TrendingUp, DollarSign, Shield, Building2 } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    { icon: TrendingUp, title: "Accelerate revenue uplift through smart amenities" },
    { icon: DollarSign, title: "Increase NOI by reducing operational overhead" },
    { icon: Shield, title: "Protect and future-proof your asset value" },
    { icon: Building2, title: "Differentiate your portfolio in a competitive market" }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full mb-6">
            Controlled Access
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Powering the Next Generation of Smart Buildings.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DOOR transforms access and automation into Building Intelligence, helping 
            properties operate smarter, reduce costs, and deliver the modern experience 
            residents expect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-700 transition-colors">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                  {benefit.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
