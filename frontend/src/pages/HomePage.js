import React from 'react';
import LandingNavbar from '../components/landing/LandingNavbar';
import SecuritySection from '../components/landing/SecuritySection';
import AboutSection from '../components/landing/AboutSection';
import TabsSection from '../components/landing/TabsSection';
import HeroSection from '../components/landing/HeroSection';
import CommunitySection from '../components/landing/CommunitySection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import BenefitsSection from '../components/landing/BenefitsSection';
import AdvisorsSection from '../components/landing/AdvisorsSection';
import FAQSection from '../components/landing/FAQSection';
import CTASection from '../components/landing/CTASection';
import FooterSection from '../components/landing/FooterSection';

const HomePage = () => (
  <div className="min-h-screen bg-white font-sora" data-testid="homepage">
    <LandingNavbar />
    <SecuritySection />
    <AboutSection />
    <TabsSection />
    <HeroSection />
    <CommunitySection />
    <TestimonialsSection />
    <BenefitsSection />
    <AdvisorsSection />
    <FAQSection />
    <CTASection />
    <FooterSection />
  </div>
);

export default HomePage;
