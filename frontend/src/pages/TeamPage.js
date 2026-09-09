import React from 'react';
import SiteFooter from '../components/shared/SiteFooter';
import TeamHero from '../components/team/TeamHero';
import LeadershipSection from '../components/landing/LeadershipSection';
import MethodologySection from '../components/landing/MethodologySection';
import FinalCTASection from '../components/landing/FinalCTASection';
import PhotoSection from '../components/shared/PhotoSection';
import MediaStoryCard from '../components/shared/MediaStoryCard';
import TEAM_GEAR from '../assets/gallery/team-gear.jpg';

const TeamPage = () => (
  <div className="min-h-screen bg-white">
    <TeamHero />
    <PhotoSection heading="Building this, together.">
      <MediaStoryCard
        src={TEAM_GEAR}
        alt="Four Urban Uplift Initiative team members holding up a branded t-shirt indoors"
        caption="The team with Urban Uplift Initiative gear."
        aspect="5/4"
        className="sm:col-span-3"
      />
    </PhotoSection>
    <LeadershipSection />
    <MethodologySection />
    <FinalCTASection />
    <SiteFooter />
  </div>
);

export default TeamPage;
