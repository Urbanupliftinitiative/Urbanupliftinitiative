import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 bg-gradient-to-br from-purple-200 via-pink-200 to-purple-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 max-w-2xl">
            Talk to our team and transform your fertility care delivery.
          </h2>
          <button 
            onClick={() => navigate('/talk-to-sales')}
            className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-4 text-base font-medium transition-all shadow-lg hover:shadow-xl flex items-center space-x-2 whitespace-nowrap"
          >
            <span>Request a demo</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;