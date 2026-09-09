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

// NOTE: HalideTopo is the locked hero — do not modify its file or its
// position as the first element rendered here. It's wrapped in font-sora
// here (not on this page) so the global Inter default used everywhere
// else can't affect its typography.
const HomePage = () => (
  <div className="min-h-screen bg-white" data-testid="homepage">
    <div className="font-sora">
      <HalideTopo />
    </div>
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
