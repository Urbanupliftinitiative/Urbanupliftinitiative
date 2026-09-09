import React from 'react';
import HalideTopo from '../components/ui/halide-topo-hero';
import PhotoStripSection from '../components/landing/PhotoStripSection';
import AboutSection from '../components/landing/AboutSection';
import ImpactSnapshotSection from '../components/landing/ImpactSnapshotSection';
import NeedSection from '../components/landing/NeedSection';
import ProgramsSection from '../components/landing/ProgramsSection';
import PillarsSection from '../components/landing/PillarsSection';
import StoriesSection from '../components/landing/StoriesSection';
import MethodologySection from '../components/landing/MethodologySection';
import FundingPrioritiesSection from '../components/landing/FundingPrioritiesSection';
import DonateSection from '../components/landing/DonateSection';
import GetInvolvedSection from '../components/landing/GetInvolvedSection';
import PartnersPreviewSection from '../components/landing/PartnersPreviewSection';
import LeadershipSection from '../components/landing/LeadershipSection';
import FAQSection from '../components/landing/FAQSection';
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
    <PhotoStripSection />
    <AboutSection />
    <ImpactSnapshotSection />
    <NeedSection />
    <ProgramsSection />
    <PillarsSection />
    <StoriesSection />
    <MethodologySection />
    <FundingPrioritiesSection />
    <DonateSection />
    <GetInvolvedSection />
    <PartnersPreviewSection />
    <LeadershipSection />
    <FAQSection />
    <FinalCTASection />
    <SiteFooter />
  </div>
);

export default HomePage;
