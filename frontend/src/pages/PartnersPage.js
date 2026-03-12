import React from 'react';
import Navbar from '../components/Navbar';
import PartnersHero from '../components/partners/PartnersHero';
import PartnerBenefits from '../components/partners/PartnerBenefits';
import PartnerFeatures from '../components/partners/PartnerFeatures';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const PartnersPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PartnersHero />
      <PartnerBenefits />
      <PartnerFeatures />
      <CTASection />
      <Footer />
    </div>
  );
};

export default PartnersPage;
