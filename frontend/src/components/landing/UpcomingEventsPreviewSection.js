import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarClock, MapPin, ArrowRight } from 'lucide-react';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import Eyebrow from '../shared/Eyebrow';
import { events } from '../../data/organization';

// Only renders once a dated event actually exists — an empty landing-page
// section would just be dead space.
const UpcomingEventsPreviewSection = () => {
  if (events.length === 0) return null;

  return (
    <section className="bg-ed-warm py-16 md:py-24 px-4 md:px-6">
      <div className="mx-auto w-full max-w-ed-container">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-10 max-w-2xl">
          <motion.div variants={fadeUp}><Eyebrow>Upcoming Events</Eyebrow></motion.div>
          <motion.h2 variants={fadeUp} className="text-[26px] md:text-[38px] font-extrabold tracking-[-0.02em] text-ed-ink mb-3">
            What's coming up in Camden.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
        >
          {events.map((event) => (
            <motion.div key={event.id} variants={fadeUp} className="rounded-[14px] border border-ed-border bg-white p-6 flex flex-col">
              <p className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-ed-accent mb-3">
                <CalendarClock size={14} /> {event.dateLabel}
              </p>
              <h3 className="text-[18px] font-extrabold text-ed-ink mb-2">{event.name}</h3>
              <p className="text-[14px] text-ed-muted leading-relaxed mb-4">{event.summary}</p>
              <p className="flex items-center gap-1.5 text-[13px] text-ed-ink/70 mb-5">
                <MapPin size={14} /> {event.location}
              </p>
              {event.applyTo && (
                <Link
                  to={event.applyTo}
                  className="group mt-auto inline-flex items-center gap-1.5 text-[14px] font-bold text-ed-ink hover:text-ed-accent focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-ed-accent focus-visible:outline-offset-2 rounded-md w-fit"
                >
                  Apply for a free alarm
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link
            to="/events"
            className="group inline-flex items-center gap-1.5 text-[14px] font-bold text-ed-ink hover:text-ed-accent focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-ed-accent focus-visible:outline-offset-2 rounded-md"
          >
            See all events
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsPreviewSection;
