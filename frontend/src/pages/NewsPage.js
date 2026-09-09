import React from 'react';
import SiteFooter from '../components/shared/SiteFooter';
import NewsHero from '../components/news/NewsHero';
import NewsEmptyState from '../components/news/NewsEmptyState';
import NeedSection from '../components/landing/NeedSection';
import FinalCTASection from '../components/landing/FinalCTASection';

const NewsPage = () => (
  <div className="min-h-screen bg-white">
    <NewsHero />
    <NewsEmptyState />
    <NeedSection />
    <FinalCTASection />
    <SiteFooter />
  </div>
);

export default NewsPage;
