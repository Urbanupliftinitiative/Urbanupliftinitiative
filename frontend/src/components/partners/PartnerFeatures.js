import React from 'react';

const PartnerFeatures = () => {
  const features = [
    'Integration-ready and hardware-first',
    'Installer-friendly backend tools',
    'Real-time, responsive support',
    'Clear documentation and install onboarding'
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gray-200 flex items-center justify-center">
            <div className="w-48 h-80 bg-gray-800 rounded-[3rem]"></div>
          </div>

          <div className="space-y-8">
            {features.map((feature, idx) => (
              <div key={idx} className="border-b border-gray-300 pb-6">
                <h3 className="text-2xl font-light text-gray-900">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerFeatures;
