import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowDownRight } from 'lucide-react';
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
            <span className="text-white font-bold text-xl sm:text-2xl tracking-tight">
              {org.shortName}
            </span>
          </div>

          {/* Bottom — Copy */}
          <div className="max-w-3xl">
            {/* Kicker */}
            <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/80 mb-5">
              {org.city}, {org.state}
            </span>

            <h1 className="text-white leading-[1.02] tracking-tight mb-6">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold">
                {org.city},
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold">
                uplifted together.
              </span>
            </h1>

            {/* Description + CTA row */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                Mentorship, safety, and support for Camden's youth and seniors — building a stronger community
                together.
              </p>

              <button
                data-testid="hero-cta-primary"
                onClick={() => navigate('/talk-to-sales')}
                className="group flex items-center gap-3 text-white font-bold text-xs sm:text-sm uppercase tracking-[0.12em] shrink-0"
              >
                Get Involved
                <span className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-white group-hover:text-op-navy group-hover:border-white transition-colors">
                  <ArrowDownRight size={16} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HalideTopo;
