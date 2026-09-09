import React from 'react';
import SiteFooter from '../components/shared/SiteFooter';
import FAQHero from '../components/faq/FAQHero';
import FAQSection from '../components/faq/FAQSection';
import StillHaveQuestions from '../components/faq/StillHaveQuestions';
import FinalCTASection from '../components/landing/FinalCTASection';

const FAQPage = () => (
  <div className="min-h-screen bg-white">
    <FAQHero />
    <FAQSection />
    <StillHaveQuestions />
    <FinalCTASection />
    <SiteFooter />
  </div>
);

export default FAQPage;
