import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import COMMUNITY_OUTREACH from '../../assets/gallery/community-outreach.jpg';
import FIRETRUCK_VOLUNTEER from '../../assets/gallery/firetruck-volunteer.jpg';
import COMMUNITY_MEAL from '../../assets/gallery/community-meal-distribution.jpg';
import NEIGHBORHOOD_CLEANUP_CREW from '../../assets/gallery/neighborhood-cleanup-crew.jpg';
import GENTLEMEN_AND_A_TIE from '../../assets/gallery/gentlemen-and-a-tie-event.jpg';

// Layout/interaction pattern borrowed from Horizon54's homepage (horizon54.com)
// tilted, overlapping photo carousel — explicitly requested as an exact
// structural + skin replica for this one section (a scoped navy override,
// not a change to the site's global design tokens). The photos and copy
// are UUI's own real programs, not Horizon54's client work — using their
// actual case-study photography here would misrepresent whose work this is.
const CARDS = [
  {
    image: COMMUNITY_OUTREACH,
    position: '50% 20%',
    tag: 'Featured, Mentorship',
    title: ['Guidance,', 'Not Guesswork'],
    alt: 'A mentor kneeling with two youth in the community',
  },
  {
    image: FIRETRUCK_VOLUNTEER,
    position: '50% 30%',
    tag: 'Featured, Senior Safety',
    title: ['Safety at', 'Every Door'],
    alt: 'A UUI volunteer with the Camden Fire Department',
  },
  {
    image: COMMUNITY_MEAL,
    position: '50% 15%',
    tag: 'Featured, Community',
    title: ['Meals and', 'Real Care'],
    alt: 'A volunteer handing a meal to a senior on a Camden street corner',
  },
  {
    image: NEIGHBORHOOD_CLEANUP_CREW,
    position: '50% 20%',
    tag: 'Featured, Cleanups',
    title: ['Block by', 'Block'],
    alt: 'Three Urban Uplift Initiative volunteers with cleanup tools on a Camden sidewalk',
  },
  {
    image: GENTLEMEN_AND_A_TIE,
    position: '50% 15%',
    tag: 'Featured, Events',
    title: ['Gentlemen', '& A Tie'],
    alt: "Team members holding 'Gentlemen and a Tie' event flyers outdoors",
  },
];

const Card = ({ card, sizeClass, className = '' }) => (
  <div className={`${sizeClass} aspect-[3/4] rounded-[10px] overflow-hidden shadow-2xl ${className}`}>
    <img
      src={card.image}
      alt={card.alt}
      className="w-full h-full object-cover"
      style={{ objectPosition: card.position }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
    <div className="absolute bottom-4 left-4 right-4">
      <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/70 mb-2">{card.tag}</p>
      <p className="text-[20px] sm:text-[24px] font-extrabold leading-[1.1] text-white">
        {card.title[0]}
        <br />
        {card.title[1]}
      </p>
    </div>
  </div>
);

const WorkShowcaseSection = () => {
  const [index, setIndex] = useState(0);
  const count = CARDS.length;
  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  const leftCard = CARDS[(index - 1 + count) % count];
  const centerCard = CARDS[index];
  const rightCard = CARDS[(index + 1) % count];

  return (
    <section className="relative bg-[#0F2A4D] text-white py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="relative h-[480px] sm:h-[620px] md:h-[720px] lg:h-[820px] flex items-center justify-center">
        <Card
          card={leftCard}
          sizeClass="w-[170px] sm:w-[340px] md:w-[420px] lg:w-[480px]"
          className="block absolute left-[-6%] sm:left-[-2%] md:left-[2%] -rotate-6 opacity-60 z-0"
        />
        <Card
          card={rightCard}
          sizeClass="w-[170px] sm:w-[340px] md:w-[420px] lg:w-[480px]"
          className="block absolute right-[-6%] sm:right-[-2%] md:right-[2%] rotate-6 opacity-60 z-0"
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <Card card={centerCard} sizeClass="w-[300px] sm:w-[440px] md:w-[540px] lg:w-[620px]" className="relative" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mx-auto w-full max-w-ed-container px-4 md:px-6 mt-12 md:mt-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
        <div>
          <p className="text-[26px] sm:text-[32px] md:text-[38px] font-extrabold tracking-[-0.02em] leading-tight mb-3">
            See the difference we're making.
          </p>
          <Link
            to="/programs"
            className="group inline-flex items-center gap-1.5 text-[14px] font-bold text-white/80 hover:text-white focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded-md"
          >
            Explore our programs
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#0F2A4D] transition-colors focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#0F2A4D] transition-colors focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcaseSection;
