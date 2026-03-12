import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductsCarousel = () => {
  const scrollRef = useRef(null);

  const products = [
    {
      title: "Medication Management",
      description: "Personalized medication calendars with timed reminders, step-by-step instructions, and adherence tracking.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600"
    },
    {
      title: "Vital & Symptom Tracking",
      description: "Daily health monitoring including blood pressure, weight, temperature, mood, and symptom logging.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600"
    },
    {
      title: "Appointment Scheduling",
      description: "Automated reminders for ultrasounds, bloodwork, retrievals, transfers, and follow-up visits.",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600"
    },
    {
      title: "Document Vault",
      description: "Secure storage for consent forms, lab results, legal agreements, and medical records.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600"
    },
    {
      title: "AI Risk Detection",
      description: "Intelligent pattern recognition to identify OHSS risk, compliance issues, and health concerns.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600"
    },
    {
      title: "Family Portal",
      description: "Secure access for partners, intended parents, and family members with controlled permissions.",
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600"
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
          Everything your fertility journey needs, built to work together.
        </h2>
        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          From medication tracking to AI risk detection, OnePermit's integrated features work together to improve outcomes.
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
                <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
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
