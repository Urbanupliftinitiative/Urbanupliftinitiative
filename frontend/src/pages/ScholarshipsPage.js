import React from 'react';
import SiteFooter from '../components/shared/SiteFooter';
import ScholarshipsHero from '../components/scholarships/ScholarshipsHero';
import ScholarshipDetails from '../components/scholarships/ScholarshipDetails';
import AboutSection from '../components/landing/AboutSection';
import FinalCTASection from '../components/landing/FinalCTASection';

const ScholarshipsPage = () => (
  <div className="min-h-screen bg-white">
    <ScholarshipsHero />
    <ScholarshipDetails />
    <AboutSection />
    <FinalCTASection />
    <SiteFooter />
  </div>
);

export default ScholarshipsPage;
