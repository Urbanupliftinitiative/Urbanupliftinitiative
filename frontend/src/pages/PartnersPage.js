import React from 'react';
import SiteFooter from '../components/shared/SiteFooter';
import PartnersHero from '../components/partners/PartnersHero';
import PartnersList from '../components/partners/PartnersList';
import FundingPrioritiesSection from '../components/landing/FundingPrioritiesSection';
import SponsorshipSection from '../components/partners/SponsorshipSection';

const PartnersPage = () => (
  <div className="min-h-screen bg-white">
    <PartnersHero />
    <PartnersList />
    <FundingPrioritiesSection />
    <SponsorshipSection />
    <SiteFooter />
  </div>
);

export default PartnersPage;
