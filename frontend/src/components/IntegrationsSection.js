import React from 'react';

const IntegrationsSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-full mb-6">
            Working with you
          </div>
          <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-6">
            Integrate DOOR seamlessly with your Property Management Software
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DOOR's integrations with Yardi, RealPage, Entrata, and AppFolio help property 
            managers save time and increase efficiency. Through our enterprise management 
            platform, DOOR OS, property managers can pull information using an API for a 
            more streamlined approach to property management.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
          {/* Yardi */}
          <div className="flex items-center justify-center w-32 h-16">
            <div className="text-3xl font-bold text-gray-900">Yardi</div>
          </div>

          {/* RealPage */}
          <div className="flex items-center justify-center w-32 h-16">
            <div className="text-2xl font-bold text-gray-900">RealPage</div>
          </div>

          {/* Entrata */}
          <div className="flex items-center justify-center w-32 h-16">
            <div className="text-3xl font-bold text-gray-900">Entrata</div>
          </div>

          {/* AppFolio */}
          <div className="flex items-center justify-center w-32 h-16">
            <div className="text-2xl font-bold text-gray-900">AppFolio</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
