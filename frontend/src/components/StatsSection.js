import React, { useEffect, useRef, useState } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    {
      label: "Up to 20% increase in operating efficiency",
      value: "20",
      suffix: "%",
      image: null
    },
    {
      label: "Up to $150 per unit saved on rekeying at turnover",
      value: "150",
      prefix: "$",
      suffix: "/unit",
      image: "https://images.unsplash.com/photo-1662454419736-de132ff75638?w=400"
    },
    {
      label: "Annual savings per building",
      value: "80k",
      prefix: "$",
      image: null
    },
    {
      label: "Save up to 20 hrs per week through process automation",
      value: "20",
      suffix: " hours",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12 overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image if exists */}
              {stat.image && (
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <img 
                    src={stat.image} 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="relative z-10">
                <p className="text-sm font-medium text-gray-600 mb-6">{stat.label}</p>
                <div className="flex items-baseline space-x-2">
                  {stat.prefix && (
                    <span className="text-4xl font-bold text-gray-900">{stat.prefix}</span>
                  )}
                  <span className={`text-6xl lg:text-7xl font-bold text-gray-900 ${
                    isVisible ? 'animate-count-up' : 'opacity-0'
                  }`}>
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="text-2xl font-medium text-gray-700">{stat.suffix}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
