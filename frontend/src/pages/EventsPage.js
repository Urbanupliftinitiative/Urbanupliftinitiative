import React from 'react';
import SiteFooter from '../components/shared/SiteFooter';
import EventsHero from '../components/events/EventsHero';
import UpcomingSection from '../components/events/UpcomingSection';
import GetInvolvedSection from '../components/landing/GetInvolvedSection';
import FinalCTASection from '../components/landing/FinalCTASection';
import PhotoSection from '../components/shared/PhotoSection';
import MediaStoryCard from '../components/shared/MediaStoryCard';
import MENTORSHIP_MOMENT from '../assets/gallery/mentorship-moment.jpg';
import COMMUNITY_MEAL from '../assets/gallery/community-meal-distribution.jpg';
import NEIGHBORHOOD_CLEANUP_CREW from '../assets/gallery/neighborhood-cleanup-crew.jpg';
import TEAM_GYM_EVENT from '../assets/gallery/team-gym-event.jpg';
import GENTLEMEN_AND_A_TIE from '../assets/gallery/gentlemen-and-a-tie-event.jpg';
import EVENT_FLYER_HANDOUT from '../assets/gallery/event-flyer-handout.jpg';

const EventsPage = () => (
  <div className="min-h-screen bg-white">
    <EventsHero />
    <UpcomingSection />
    <PhotoSection heading="From past gatherings.">
      <MediaStoryCard
        src={COMMUNITY_MEAL}
        alt="A UUI volunteer handing a meal to a senior on a Camden street corner, with a teen holding a 'Jesus Loves Y'all' sign"
        caption="Meals and care, street level."
        number="01"
        aspect="4/3"
      />
      <MediaStoryCard
        src={NEIGHBORHOOD_CLEANUP_CREW}
        alt="Three Urban Uplift Initiative volunteers with cleanup tools on a Camden sidewalk"
        caption="Suited up for a neighborhood cleanup."
        number="02"
        aspect="4/3"
      />
      <MediaStoryCard
        src={TEAM_GYM_EVENT}
        alt="Five Urban Uplift Initiative team members and family at a community gym event"
        caption="A community gathering at the gym."
        number="03"
        aspect="4/3"
      />
      <MediaStoryCard
        src={GENTLEMEN_AND_A_TIE}
        alt="Three team members holding 'Gentlemen and a Tie' event flyers outdoors"
        caption="Promoting the Gentlemen and a Tie event."
        number="04"
        aspect="4/3"
      />
      <MediaStoryCard
        src={EVENT_FLYER_HANDOUT}
        alt="A team member giving a thumbs up while holding an event flyer indoors"
        caption="Getting the word out."
        number="05"
        aspect="4/3"
      />
      <MediaStoryCard
        src={MENTORSHIP_MOMENT}
        alt="Two Urban Uplift Initiative team members standing together outdoors"
        caption="Team members out in the field."
        number="06"
        aspect="4/3"
      />
    </PhotoSection>
    <GetInvolvedSection />
    <FinalCTASection />
    <SiteFooter />
  </div>
);

export default EventsPage;
