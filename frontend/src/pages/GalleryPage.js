import React from 'react';
import SiteFooter from '../components/shared/SiteFooter';
import GalleryHero from '../components/gallery/GalleryHero';
import GalleryGrid from '../components/gallery/GalleryGrid';
import MethodologySection from '../components/landing/MethodologySection';
import FinalCTASection from '../components/landing/FinalCTASection';

const GalleryPage = () => (
  <div className="min-h-screen bg-white">
    <GalleryHero />
    <GalleryGrid />
    <MethodologySection />
    <FinalCTASection />
    <SiteFooter />
  </div>
);

export default GalleryPage;
