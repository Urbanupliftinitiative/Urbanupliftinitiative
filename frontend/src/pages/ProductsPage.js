import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductsHero from '../components/products/ProductsHero';
import ProductsTabs from '../components/products/ProductsTabs';
import PlatformSection from '../components/products/PlatformSection';
import DoorOSSection from '../components/products/DoorOSSection';
import DoorAppSection from '../components/products/DoorAppSection';
import IntegrationsProductSection from '../components/products/IntegrationsProductSection';
import HardwareSection from '../components/products/HardwareSection';
import AccessControlSection from '../components/products/AccessControlSection';
import ProductTestimonial from '../components/products/ProductTestimonial';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState('platform');

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ProductsHero />
      <ProductsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <PlatformSection />
      <DoorOSSection />
      <DoorAppSection />
      <IntegrationsProductSection />
      <HardwareSection />
      <AccessControlSection />
      <ProductTestimonial />
      <CTASection />
      <Footer />
    </div>
  );
};

export default ProductsPage;
