import React from 'react';
import { useNavigate } from 'react-router-dom';
import { InteractiveImageAccordion } from '../ui/interactive-image-accordion';

const accordionItems = [
  {
    id: 1,
    title: 'Medication Tracking',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Vitals Monitoring',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Clinic Integration',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Family Support',
    imageUrl: 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Journey Milestones',
    imageUrl: 'https://images.unsplash.com/photo-1725393197924-e1dff51c29f1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByZWduYW50JTIwd29tYW4lMjBzb2Z0JTIwbGlnaHQlMjB3YXJtJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzczNTg2ODQ4fDA&ixlib=rb-4.1.0&q=85',
  },
];

const AccordionHero = () => {
  const navigate = useNavigate();

  return (
    <div data-testid="accordion-hero">
      <InteractiveImageAccordion
        items={accordionItems}
        headline="Your Partner in IVF & Surrogacy Care"
        description="Unify patients, surrogates, clinics, and agencies into one intelligent care platform — built to celebrate every step of your journey."
        ctaText="Request a demo →"
        onCtaClick={() => navigate('/talk-to-sales')}
      />
    </div>
  );
};

export default AccordionHero;
