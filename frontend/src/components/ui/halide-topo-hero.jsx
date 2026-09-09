import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { org } from '../../data/organization';
import TEAM_IMG from '../../assets/team-photo.jpg';

const HalideTopo = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @keyframes kenburns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          25% {
            transform: scale(1.035) translate(-0.5%, -0.5%);
          }
          50% {
            transform: scale(1.06) translate(-1%, 0.25%);
          }
          75% {
            transform: scale(1.03) translate(0.25%, -0.25%);
          }
          100% {
            transform: scale(1) translate(0, 0);
          }
        }
        .hero-image-motion {
          animation: kenburns 20s ease-in-out infinite;
          transform-origin: 50% 40%;
          will-change: transform;
        }
      `}</style>

      <section data-testid="halide-hero" className="relative w-full h-screen overflow-hidden rounded-none sm:mx-4 sm:mt-4 sm:rounded-[28px] sm:h-[calc(100vh-2rem)] sm:w-[calc(100%-2rem)]">
        {/* Animated Background Image */}
        <div className="absolute inset-0">
          <img
            src={TEAM_IMG}
            alt="Urban Uplift Initiative team members standing together outdoors in Camden with the organization's banner"
            className="hero-image-motion absolute inset-0 w-full h-full object-cover object-[50%_40%]"
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 h-full flex flex-col justify-between px-6 sm:px-10 md:px-16 lg:px-20 py-8 sm:py-12">
          {/* Top — Logo */}
          <div>
            <span className="text-white font-bold text-xl sm:text-2xl tracking-tight font-sora">
              {org.shortName}
            </span>
          </div>

          {/* Bottom — Copy */}
          <div className="max-w-2xl">
            <h1 className="font-sora text-white leading-[1.05] mb-6">
              <span className="block text-3xl sm:text-4xl md:text-5xl font-light text-white/80">
                Your Partner in
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
                Youth &amp; Community Uplift
              </span>
            </h1>

            {/* Checkmark line */}
            <div className="flex items-center gap-2 mb-5">
              <Check size={18} className="text-white/80" strokeWidth={2.5} />
              <span className="text-white/80 font-semibold text-sm sm:text-base">
                Serving Camden's youth, seniors &amp; families
              </span>
            </div>

            {/* Description */}
            <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              We provide mentorship, safety, and support so Camden's youth and seniors can focus on what matters — building a stronger community together.
            </p>

            {/* CTA */}
            <button
              data-testid="hero-cta-primary"
              onClick={() => navigate('/talk-to-sales')}
              className="bg-white/90 backdrop-blur-sm text-op-navy font-bold text-base px-8 py-4 rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Get Involved
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HalideTopo;
