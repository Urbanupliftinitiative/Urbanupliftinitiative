import React from 'react';
import SiteFooter from '../components/shared/SiteFooter';
import ProgramsHero from '../components/programs/ProgramsHero';
import ProgramDetail from '../components/programs/ProgramDetail';
import PillarsInline from '../components/programs/PillarsInline';
import FinalCTASection from '../components/landing/FinalCTASection';
import { programs } from '../data/organization';

const ProgramsPage = () => (
  <div className="min-h-screen bg-white">
    <ProgramsHero />
    {programs.map((program, i) => (
      <ProgramDetail key={program.id} program={program} reverse={i % 2 === 1}>
        {program.id === 'youth-mentorship' && <PillarsInline />}
      </ProgramDetail>
    ))}
    <FinalCTASection />
    <SiteFooter />
  </div>
);

export default ProgramsPage;
