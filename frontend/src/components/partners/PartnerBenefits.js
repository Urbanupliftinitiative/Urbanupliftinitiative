import React from 'react';

const PartnerBenefits = () => {
  const benefits = [
    { number: '01', title: 'Premium Margins', description: 'Channel-exclusive hardware and subscription pricing.' },
    { number: '02', title: 'Lead Referrals', description: 'Get matched with new projects through DOOR demand gen.' },
    { number: '03', title: 'Installation Efficiency', description: 'Streamlined installs and fewer callbacks with installer-first tools.' },
    { number: '04', title: 'Dedicated Support', description: 'Access brand assets and joint go-to-market campaigns.' },
    { number: '05', title: 'Co-Marketing Support', description: 'Be first to know (and first to sell) new DOOR products.' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-gray-600 mb-4">Partner Benefits</p>
            <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8">
              Why choose<br />DOOR
            </h2>
            <button className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-4 text-base font-medium transition-all">
              Talk to Channel Team →
            </button>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start space-x-6 pb-6 border-b border-gray-200">
                <span className="text-3xl font-light text-gray-400">{benefit.number}</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBenefits;
