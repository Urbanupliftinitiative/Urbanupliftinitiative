import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SiteFooter from '../components/shared/SiteFooter';
import ProgramsHero from '../components/programs/ProgramsHero';
import ProgramDetail from '../components/programs/ProgramDetail';
import PillarsInline from '../components/programs/PillarsInline';
import FinalCTASection from '../components/landing/FinalCTASection';
import PhotoSection from '../components/shared/PhotoSection';
import MediaStoryCard from '../components/shared/MediaStoryCard';
import { programs } from '../data/organization';

import COMMUNITY_CLEANUP from '../assets/gallery/community-cleanup.jpg';
import COMMUNITY_OUTREACH from '../assets/gallery/community-outreach.jpg';
import CLEANUP_VOLUNTEER from '../assets/gallery/cleanup-volunteer.jpg';

const ProgramsPage = () => (
  <div className="min-h-screen bg-white">
    <ProgramsHero />
    <PhotoSection
      eyebrow="In the Field"
      heading="What this looks like in practice."
      intro="Mentors and volunteers out doing the work in Camden."
      tone="warm"
    >
      <MediaStoryCard
        src={COMMUNITY_CLEANUP}
        alt="Team members and a young volunteer holding trash bags during a neighborhood cleanup"
        caption="A neighborhood cleanup day."
        number="01"
      />
      <MediaStoryCard
        src={COMMUNITY_OUTREACH}
        alt="A team member kneeling with two young community members holding donated items"
        caption="Connecting with youth in the community."
        number="02"
      />
      <MediaStoryCard
        src={CLEANUP_VOLUNTEER}
        alt="A team member in Urban Uplift Initiative gear standing next to a cleanup bag"
        caption="Ready to get to work."
        number="03"
        aspect="3/4"
      />
    </PhotoSection>
    {programs.map((program, i) => (
      <ProgramDetail key={program.id} program={program} reverse={i % 2 === 1}>
        {program.id === 'youth-mentorship' && <PillarsInline />}
        {program.id === 'senior-safety-initiative' && (
          <Link
            to="/apply/senior-safety"
            className="group inline-flex items-center gap-1.5 text-[14px] font-bold text-ed-ink hover:text-ed-accent focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-ed-accent focus-visible:outline-offset-2 rounded-md"
          >
            Apply for a free alarm
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </ProgramDetail>
    ))}
    <FinalCTASection />
    <SiteFooter />
  </div>
);

export default ProgramsPage;
