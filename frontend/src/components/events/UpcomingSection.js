import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarClock, MapPin, ArrowRight } from 'lucide-react';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';
import { programs, events } from '../../data/organization';

// Programs still in "This summer" / pilot status read naturally as
// "what's coming up" — real data, just without a published exact date yet.
// Events with a confirmed date (below) are excluded here so they aren't
// shown twice.
const datedProgramIds = new Set(events.map((e) => e.programId));
const upcoming = programs.filter((p) => p.status !== 'Active' && !datedProgramIds.has(p.id));

const UpcomingSection = () => (
  <section id="upcoming" className="bg-white py-16 md:py-24 px-4 md:px-6">
    <div className="mx-auto w-full max-w-ed-container">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-10 max-w-2xl">
        <motion.h2 variants={fadeUp} className="text-[26px] md:text-[38px] font-extrabold tracking-[-0.02em] text-ed-ink mb-3">
          What's coming up
        </motion.h2>
        <motion.p variants={fadeUp} className="text-[15px] text-ed-muted">
          Follow along below or subscribe in the footer for updates as new dates are announced.
        </motion.p>
      </motion.div>

      {events.length > 0 && (
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={fadeUp}
              className="rounded-[14px] border border-ed-border bg-ed-warm p-6 flex flex-col"
            >
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
      )}

      {upcoming.length > 0 && (
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
        >
          {upcoming.map((program) => (
            <motion.div key={program.id} variants={fadeUp} className="rounded-[14px] border border-ed-border p-6">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ed-accent mb-3">
                {program.status}
              </p>
              <h3 className="text-[18px] font-extrabold text-ed-ink mb-2">{program.name}</h3>
              <p className="text-[14px] text-ed-muted leading-relaxed">{program.summary}</p>
            </motion.div>
          ))}
        </motion.div>
      )}

      {events.length === 0 && (
        <div className="rounded-[14px] bg-ed-warm border border-ed-border p-6 flex items-start gap-4">
          <CalendarClock size={20} className="text-ed-accent shrink-0 mt-0.5" />
          <p className="text-[14px] text-ed-ink/70 leading-relaxed">
            No dated events are on the calendar right now. As we lock in dates for workshops, community events, and
            monthly gatherings, they'll be posted here first.
          </p>
        </div>
      )}
    </div>
  </section>
);

export default UpcomingSection;
