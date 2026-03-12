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
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-16 text-center">
          Trusted by leading fertility clinics and surrogacy agencies.
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
                  <div className="text-2xl font-bold text-purple-600 whitespace-pre-line">
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