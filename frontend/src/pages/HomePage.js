import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/home/HeroSection';
import BrandBanner from '../components/home/BrandBanner';
import IntelligenceSection from '../components/home/IntelligenceSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FeaturesSection from '../components/home/FeaturesSection';
import ProductsCarousel from '../components/home/ProductsCarousel';
import ValueProposition from '../components/home/ValueProposition';
import StatsSection from '../components/home/StatsSection';
import BenefitsSection from '../components/home/BenefitsSection';
import FAQSection from '../components/home/FAQSection';
import IntegrationsSection from '../components/home/IntegrationsSection';
import ArticlesSection from '../components/home/ArticlesSection';
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
      <ProductsCarousel />
      <ValueProposition />
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
