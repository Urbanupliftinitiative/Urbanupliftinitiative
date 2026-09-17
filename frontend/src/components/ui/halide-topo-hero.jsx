import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowDownRight } from 'lucide-react';
import { org } from '../../data/organization';
import Eyebrow from '../shared/Eyebrow';
import TEAM_IMG from '../../assets/team-photo.jpg';
import COMMUNITY_OUTREACH from '../../assets/gallery/community-outreach.jpg';
import FIRETRUCK_VOLUNTEER from '../../assets/gallery/firetruck-volunteer.jpg';
import NEIGHBORHOOD_CLEANUP_CREW from '../../assets/gallery/neighborhood-cleanup-crew.jpg';

// Each slide pairs one real program with the photo already used for it
// elsewhere on the site (see ProgramsSection's IMAGES map) — no stock or
// generated photos, just a different facet of the same real work.
// `position` is a per-photo object-position anchor (as a CSS value, not a
// Tailwind class, since these are computed and dynamic classes aren't
// picked up by Tailwind's build-time scanner) — each source photo has its
// subjects' heads at a different height, so one shared anchor cropped some
// of them out once stretched to the hero's wide aspect ratio.
const SLIDES = [
  { word: 'Community', image: TEAM_IMG, position: '50% 40%' },
  { word: 'Mentorship', image: COMMUNITY_OUTREACH, position: '50% 15%' },
  { word: 'Senior Safety', image: FIRETRUCK_VOLUNTEER, position: '50% 25%' },
  { word: 'Camden', image: NEIGHBORHOOD_CLEANUP_CREW, position: '50% 12%' },
];

const SLIDE_DURATION_MS = 4200;
const FADE_MS = 400;

const HalideTopo = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const interval = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % SLIDES.length);
        setWordVisible(true);
      }, FADE_MS);
    }, SLIDE_DURATION_MS);

    return () => clearInterval(interval);
  }, []);

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
        {/* Crossfading background images, one per slide */}
        <div className="absolute inset-0">
          {SLIDES.map((slide, i) => (
            <img
              key={slide.word}
              src={slide.image}
              alt=""
              aria-hidden="true"
              style={{ objectPosition: slide.position }}
              className={`hero-image-motion absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
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
            <Eyebrow dark>{org.tagline}</Eyebrow>
            <h1 className="text-white leading-[1.02] tracking-tight mb-6">
              <span
                className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold transition-opacity duration-300 ${
                  wordVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {SLIDES[index].word}
              </span>
            </h1>

            {/* Description + CTA row */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                Mentorship, safety, and support for at-risk youth and seniors — building community,
                starting in Camden.
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
