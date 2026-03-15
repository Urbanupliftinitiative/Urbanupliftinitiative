import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "OnePermit turned my IVF journey from overwhelming to empowering. Tracking everything in one beautiful app made all the difference.",
    name: "Sarah Mitchell",
    role: "IVF Patient",
    image: "https://images.unsplash.com/photo-1747710016871-a603dda0e414?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3QlMjB3YXJtJTIwbmF0dXJhbCUyMGxpZ2h0fGVufDB8fHx8MTc3MzU4Njg1MHww&ixlib=rb-4.1.0&q=85",
    gradient: "from-rose-200 to-orange-100",
  },
  {
    quote: "As a surrogate, staying on top of medications and vitals was stressful \u2014 until I found OnePermit. Now my entire care team is always in sync.",
    name: "Jennifer Lewis",
    role: "Surrogate Mother",
    image: "https://images.unsplash.com/photo-1747710016904-2b93d97ffb72?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwyfHx3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3QlMjB3YXJtJTIwbmF0dXJhbCUyMGxpZ2h0fGVufDB8fHx8MTc3MzU4Njg1MHww&ixlib=rb-4.1.0&q=85",
    gradient: "from-violet-200 to-blue-100",
  },
  {
    quote: "Being able to follow our surrogate's journey in real time, celebrating each milestone together, was something we never thought possible.",
    name: "David & Mark",
    role: "Intended Parents",
    image: "https://images.unsplash.com/photo-1758846358054-3282f28c3f52?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHw0fHx3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3QlMjB3YXJtJTIwbmF0dXJhbCUyMGxpZ2h0fGVufDB8fHx8MTc3MzU4Njg1MHww&ixlib=rb-4.1.0&q=85",
    gradient: "from-emerald-200 to-teal-100",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" data-testid="testimonials-section" className="py-24 md:py-32 px-6 bg-[#FFF5F5]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.p
          className="text-xs sm:text-sm uppercase tracking-[0.3em] font-bold text-op-slate/50 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          real stories
        </motion.p>
        <motion.h2
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-op-navy tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Hear from our community
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            data-testid={`testimonial-card-${i}`}
            className={`bg-gradient-to-br ${t.gradient} rounded-3xl p-8 flex flex-col justify-between min-h-[340px] sm:min-h-[360px] hover:-translate-y-2 transition-transform duration-500`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
          >
            <p className="text-sm sm:text-base md:text-lg text-op-navy leading-relaxed font-medium flex-1">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-4 mt-6">
              <img
                src={t.image}
                alt={t.name}
                className="w-11 h-11 rounded-full object-cover ring-2 ring-white/60"
              />
              <div>
                <p className="font-bold text-op-navy text-sm">{t.name}</p>
                <p className="text-xs text-op-slate/70">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
