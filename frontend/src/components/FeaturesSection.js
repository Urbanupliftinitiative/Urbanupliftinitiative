import React from 'react';
import { Button } from './ui/button';

const FeaturesSection = () => {
  const features = [
    {
      title: "Intuitive Solutions",
      description: "Our hardware and software combine function with impeccable form. We create solutions that integrate with existing platforms seamlessly and work efficiently both at install and into the future.",
      image: "https://images.unsplash.com/photo-1549109926-58f039549485?w=800",
      bgColor: "bg-gradient-to-br from-[#c9b5b5] to-[#b4a0a0]"
    },
    {
      title: "Simple & Unified Systems",
      description: "DOOR makes access easy, simplifying operations and tasks for teams and residents. Our intelligent IoT hardware suite not only notifies, it senses, acts, and automates. Connected controls help operators reduce costs, prevent damage, and scale efficiency across their portfolios.",
      image: "https://images.unsplash.com/photo-1662454419736-de132ff75638?w=800",
      bgColor: "bg-white"
    },
    {
      title: "Enhanced Security",
      description: "Safeguard residents at every touchpoint and leverage cutting-edge access technology and data protection protocols.",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
      bgColor: "bg-white"
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
              {/* Text Content */}
              <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 leading-tight">
                  {feature.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
                <Button className="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-full px-8 py-6 text-base font-medium transition-all">
                  Explore DOOR solutions
                </Button>
              </div>

              {/* Image */}
              <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
