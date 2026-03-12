import React from 'react';
import { ChevronRight } from 'lucide-react';

const ProductsGrid = () => {
  const products = [
    {
      title: "Smart Access Control",
      description: "Manage every entry point remotely with secure, cloud-based access.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600"
    },
    {
      title: "Smart Thermostat and Leak Prevention",
      description: "Reduce energy costs and prevent damage with automated monitoring.",
      image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=600"
    },
    {
      title: "Smart Reader",
      description: "Modern, contactless entry for shared spaces and common areas.",
      image: "https://images.unsplash.com/photo-1637241613318-646f2c2a854a?w=600"
    },
    {
      title: "Smart Intercom",
      description: "Simplify visitor management with video, remote unlock, and real-time alerts.",
      image: "https://images.unsplash.com/photo-1770197247933-63e02c014cb7?w=600"
    },
    {
      title: "Residential Doors",
      description: "High-quality, connected door hardware built for multifamily properties.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600"
    },
    {
      title: "Mortise Smart Lock (M3)",
      description: "A sleek, reliable smart lock designed for modern units and retrofits.",
      image: "https://images.unsplash.com/photo-1637241613318-646f2c2a854a?w=600"
    },
    {
      title: "Smart Camera",
      description: "Monitor your property with intelligent surveillance and real-time alerts.",
      image: "https://images.unsplash.com/photo-1549109926-58f039549485?w=600"
    },
    {
      title: "More",
      description: "Discover additional products and integrations that complete the DOOR ecosystem.",
      image: "https://images.unsplash.com/photo-1636569608385-58efc32690ea?w=600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-6 text-center">
          Everything your property needs, built to work together.
        </h2>
        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          From access control to automation, DOOR's integrated products work together to 
          simplify operations and enhance the resident experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <a
              key={idx}
              href="#"
              className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square relative overflow-hidden bg-gray-100">
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="flex items-center text-gray-900 group-hover:text-gray-600 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
