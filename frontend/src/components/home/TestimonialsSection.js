import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "AvalonBay's partnership with DOOR has unlocked real value. It has expanded touring hours, created maintenance efficiencies, and supported our operations evolution, creating a seamless, secure experience that makes day-to-day tasks easier for residents and management alike. As we look to the future of rental housing, partnerships like this are essential in building smarter, more connected communities.",
      author: "David Madrid",
      position: "VP of Innovation & Venture, AvalonBay Communities, Inc.",
      company: "AVALONBAY\nCOMMUNITIES"
    },
    {
      quote: "We've evaluated smart access solutions globally and haven't found a better combination of hardware and software than what we've had with Latch. It's become standard across our developments. With DOOR, that foundation is evolving into something even more powerful, and we're excited to keep building with a platform that reflects where the industry is going.",
      author: "Joey Letchinger",
      position: "Executive Vice President, JDL Development",
      company: "jdl."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-16 text-center">
          Trusted by leading multifamily owners and operators.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600 mt-1">{testimonial.position}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900 whitespace-pre-line">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;