import React from 'react';
import HalideTopo from '../components/ui/halide-topo-hero';
import AboutSection from '../components/landing/AboutSection';
import NeedSection from '../components/landing/NeedSection';
import ProgramsSection from '../components/landing/ProgramsSection';
import MethodologySection from '../components/landing/MethodologySection';
import FundingPrioritiesSection from '../components/landing/FundingPrioritiesSection';
import DonateSection from '../components/landing/DonateSection';
import PartnersPreviewSection from '../components/landing/PartnersPreviewSection';
import FinalCTASection from '../components/landing/FinalCTASection';
import SiteFooter from '../components/shared/SiteFooter';

// NOTE: HalideTopo's position as the first element rendered here should
// stay fixed. Its typography now intentionally matches the rest of the
// site's Inter default (per explicit request) — the font-sora wrapper
// that used to protect its Sora typeface has been removed on purpose.
const HomePage = () => (
  <div className="min-h-screen bg-white" data-testid="homepage">
    <HalideTopo />
    <AboutSection />
    <NeedSection />
    <ProgramsSection />
    <MethodologySection />
    <FundingPrioritiesSection />
    <DonateSection />
    <PartnersPreviewSection />
    <FinalCTASection />
    <SiteFooter />
  </div>
);

export default HomePage;
