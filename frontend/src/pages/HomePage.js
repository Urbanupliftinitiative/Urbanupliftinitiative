import React from 'react';
import HalideTopo from '../components/ui/halide-topo-hero';
import AboutSection from '../components/landing/AboutSection';
import WorkShowcaseSection from '../components/landing/WorkShowcaseSection';
import UpcomingEventsPreviewSection from '../components/landing/UpcomingEventsPreviewSection';
import MethodologySection from '../components/landing/MethodologySection';
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
    <WorkShowcaseSection />
    <UpcomingEventsPreviewSection />
    <MethodologySection />
    <DonateSection />
    <PartnersPreviewSection />
    <FinalCTASection />
    <SiteFooter />
  </div>
);

export default HomePage;
