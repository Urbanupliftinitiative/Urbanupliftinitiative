import React from 'react';
import SiteFooter from '../components/shared/SiteFooter';
import EventsHero from '../components/events/EventsHero';
import UpcomingSection from '../components/events/UpcomingSection';
import GetInvolvedSection from '../components/landing/GetInvolvedSection';
import FinalCTASection from '../components/landing/FinalCTASection';
import PhotoSection from '../components/shared/PhotoSection';
import MediaStoryCard from '../components/shared/MediaStoryCard';
import MENTORSHIP_MOMENT from '../assets/gallery/mentorship-moment.jpg';

const EventsPage = () => (
  <div className="min-h-screen bg-white">
    <EventsHero />
    <UpcomingSection />
    <PhotoSection heading="From past gatherings.">
      <MediaStoryCard
        src={MENTORSHIP_MOMENT}
        alt="Two Urban Uplift Initiative team members standing together outdoors"
        caption="Team members out in the field."
        aspect="3/4"
        className="sm:col-start-2"
      />
    </PhotoSection>
    <GetInvolvedSection />
    <FinalCTASection />
    <SiteFooter />
  </div>
);

export default EventsPage;
