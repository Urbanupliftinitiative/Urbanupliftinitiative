import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductsCarousel = () => {
  const scrollRef = useRef(null);

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
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 text-center">
          Everything your property needs, built to work together.
        </h2>
        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          From access control to automation, DOOR's integrated products work together to simplify operations.
        </p>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;
