import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/home/HeroSection';
import IntelligenceSection from '../components/home/IntelligenceSection';
import AdvisorsSection from '../components/home/AdvisorsSection';
import FeaturesSection from '../components/home/FeaturesSection';
import FAQSection from '../components/home/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <IntelligenceSection />
      <AdvisorsSection />
      <FeaturesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;
