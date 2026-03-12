import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BrandBanner from '../components/BrandBanner';
import IntelligenceSection from '../components/IntelligenceSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FeaturesSection from '../components/FeaturesSection';
import ProductsGrid from '../components/ProductsGrid';
import ParallaxSection from '../components/ParallaxSection';
import StatsSection from '../components/StatsSection';
import BenefitsSection from '../components/BenefitsSection';
import FAQSection from '../components/FAQSection';
import IntegrationsSection from '../components/IntegrationsSection';
import ArticlesSection from '../components/ArticlesSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <BrandBanner />
      <IntelligenceSection />
      <TestimonialsSection />
      <FeaturesSection />
      <ProductsGrid />
      <ParallaxSection />
      <StatsSection />
      <BenefitsSection />
      <FAQSection />
      <IntegrationsSection />
      <ArticlesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;
