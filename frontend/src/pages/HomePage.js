import React from 'react';
import LandingNavbar from '../components/landing/LandingNavbar';
import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import TabsSection from '../components/landing/TabsSection';
import CommunitySection from '../components/landing/CommunitySection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import BenefitsSection from '../components/landing/BenefitsSection';
import CTASection from '../components/landing/CTASection';
import FooterSection from '../components/landing/FooterSection';

const HomePage = () => (
  <div className="min-h-screen bg-white font-sora" data-testid="homepage">
    <LandingNavbar />
    <HeroSection />
    <AboutSection />
    <TabsSection />
    <CommunitySection />
    <TestimonialsSection />
    <BenefitsSection />
    <CTASection />
    <FooterSection />
  </div>
);

export default HomePage;
