import React from 'react';

const IntegrationsSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-full mb-6">
            Seamless Integration
          </div>
          <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-6">
            Integrate OnePermit with your EMR and Lab Systems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            OnePermit integrates with Epic, Cerner, Athenahealth, and leading lab systems 
            to streamline workflows and reduce manual data entry.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
          <div className="text-3xl font-bold text-gray-900">Epic</div>
          <div className="text-2xl font-bold text-gray-900">Cerner</div>
          <div className="text-3xl font-bold text-gray-900">Athenahealth</div>
          <div className="text-2xl font-bold text-gray-900">LabCorp</div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
