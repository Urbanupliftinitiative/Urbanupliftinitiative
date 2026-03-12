import React from 'react';
import { Button } from '../ui/button';

const FeaturesSection = () => {
  const features = [
    {
      title: "Intuitive Solutions",
      description: "Our hardware and software combine function with impeccable form. We create solutions that integrate with existing platforms seamlessly and work efficiently both at install and into the future.",
      image: "https://images.unsplash.com/photo-1549109926-58f039549485?w=800",
      bgColor: "bg-gradient-to-br from-[#b8a5c9] via-[#a895b9] to-[#8875a9]"
    },
    {
      title: "Simple & Unified Systems",
      description: "DOOR makes access easy, simplifying operations and tasks for teams and residents. Our intelligent IoT hardware suite not only notifies, it senses, acts, and automates.",
      image: "https://images.unsplash.com/photo-1662454419736-de132ff75638?w=800",
      bgColor: "bg-gradient-to-br from-[#b5c5d0] via-[#a5b5c0] to-[#8595a0]"
    },
    {
      title: "Enhanced Security",
      description: "Safeguard residents at every touchpoint and leverage cutting-edge access technology and data protection protocols.",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
      bgColor: "bg-[url('https://images.unsplash.com/photo-1574848296471-28f79a036f79?w=1200')] bg-cover bg-center",
      textured: true
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
              <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:order-2' : ''} ${feature.textured ? 'text-white' : ''}`}>
                <h2 className={`text-4xl lg:text-5xl font-light leading-tight ${feature.textured ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h2>
                <p className={`text-lg leading-relaxed ${feature.textured ? 'text-white' : 'text-gray-700'}`}>
                  {feature.description}
                </p>
                <Button className={`${feature.textured ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'} rounded-full px-8 py-6 text-base font-medium transition-all`}>
                  Explore DOOR solutions
                </Button>
              </div>

              {!feature.textured && (
                <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
