import React from 'react';
import { TrendingUp, Shield, Users, BarChart } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    { icon: TrendingUp, title: "Improve IVF success rates through better adherence" },
    { icon: Shield, title: "Reduce clinical risk with AI-powered monitoring" },
    { icon: Users, title: "Increase transparency for intended parents" },
    { icon: BarChart, title: "Build defensible data for predictive insights" }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-900 text-white text-sm font-medium rounded-full mb-6">
            Clinical Excellence
          </div>
          <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-6">
            Powering the Next Generation of Fertility Care.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            OnePermit transforms fertility care through intelligent monitoring, helping 
            clinics improve outcomes, reduce risk, and deliver the modern experience 
            patients and surrogates expect.
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
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
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
