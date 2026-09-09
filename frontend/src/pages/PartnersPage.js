import React from 'react';
import SiteFooter from '../components/shared/SiteFooter';
import PartnersHero from '../components/partners/PartnersHero';
import PartnersList from '../components/partners/PartnersList';
import FundingPrioritiesSection from '../components/landing/FundingPrioritiesSection';
import SponsorshipSection from '../components/partners/SponsorshipSection';
import PhotoSection from '../components/shared/PhotoSection';
import MediaStoryCard from '../components/shared/MediaStoryCard';
import FIRETRUCK_VOLUNTEER from '../assets/gallery/firetruck-volunteer.jpg';

const PartnersPage = () => (
  <div className="min-h-screen bg-white">
    <PartnersHero />
    <PartnersList />
    <PhotoSection heading="Out in the community." tone="warm">
      <MediaStoryCard
        src={FIRETRUCK_VOLUNTEER}
        alt="A team member volunteering, standing in the doorway of a Camden Fire Department truck"
        caption="A team member volunteering alongside city services in Camden."
        aspect="3/4"
        className="sm:col-start-2"
      />
    </PhotoSection>
    <FundingPrioritiesSection />
    <SponsorshipSection />
    <SiteFooter />
  </div>
);

export default PartnersPage;
