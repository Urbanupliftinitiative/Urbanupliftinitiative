import React from 'react';

const PlatformSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-sm font-medium text-gray-600">DOOR Products</p>
            <h2 className="text-5xl lg:text-6xl font-light text-gray-900">Platform</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Take control of your building and manage vacant unit energy use remotely and automatically. 
              Save on costs and increase operating efficiency by up to 20%.
            </p>
            <button className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-4 text-base font-medium transition-all">
              Talk to sales →
            </button>
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800"
              alt="Platform Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
