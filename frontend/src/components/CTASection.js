import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="text-center max-w-3xl mx-auto space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-gray-900">
            Ready to transform your fertility care delivery?
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-light text-gray-700 leading-relaxed">
            Book a 15-min call to see how we help clinics improve patient outcomes, reduce staff burden, and streamline operations.
          </p>
          <button 
            onClick={() => navigate('/talk-to-sales')}
            className="bg-purple-200 hover:bg-purple-300 text-gray-900 rounded-full px-10 py-4 md:px-12 md:py-5 text-base md:text-lg font-medium transition-all shadow-lg hover:shadow-xl w-full md:w-auto"
          >
            Book a call
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;