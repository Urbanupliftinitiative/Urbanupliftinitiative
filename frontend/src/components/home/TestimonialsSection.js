import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "OnePermit has transformed how we monitor our IVF patients and surrogates. The real-time adherence tracking and AI risk detection have significantly improved our cycle success rates while reducing staff workload. It's become an essential part of our clinical workflow.",
      author: "Dr. Sarah Chen",
      position: "Medical Director, Fertility Institute of California",
      company: "FERTILITY\nINSTITUTE"
    },
    {
      quote: "As a surrogacy agency managing dozens of surrogates across multiple states, OnePermit gives us visibility we never had before. We can monitor compliance, track health trends, and keep intended parents informed—all in one platform. It's a game-changer for remote surrogate care.",
      author: "Michael Rodriguez",
      position: "CEO, Surrogacy Solutions Network",
      company: "SSN"
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="w-full px-12 lg:px-20">
        <h2 className="text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-20 text-center leading-tight">
          Trusted by leading multifamily owners and operators.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-10 lg:p-14 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-base text-gray-600 mt-2">{testimonial.position}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-purple-600 whitespace-pre-line">
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