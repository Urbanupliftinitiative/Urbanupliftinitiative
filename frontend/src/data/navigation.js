// Single source of truth for site navigation, consumed by SiteNavbar and
// SiteFooter so link structure never drifts between the two.

export const primaryNav = [
  { label: 'Our Work', to: '/programs' },
  { label: 'Get Involved', to: '/#get-involved' },
  { label: 'Partners', to: '/partners' },
  { label: 'Contact', to: '/contact' },
];

// Secondary pages grouped under the header's "More" menu (and mirrored in
// the footer's "Learn More" column below) — kept separate from primaryNav
// so the header's main row doesn't get crowded.
export const moreNav = [
  { label: 'Meet the Team', to: '/team' },
  { label: 'Events', to: '/events' },
  { label: 'News & Media', to: '/news' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Scholarships', to: '/scholarships' },
];

export const footerColumns = [
  {
    heading: 'Organization',
    links: [
      { label: 'About Us', to: '/#about' },
      { label: 'Our Work', to: '/programs' },
      { label: 'Leadership', to: '/#leadership' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Get Involved',
    links: [
      { label: 'Donate', to: '/#donate' },
      { label: 'Become a Mentor', to: '/#get-involved' },
      { label: 'Partner With Us', to: '/partners' },
    ],
  },
  {
    heading: 'Our Programs',
    links: [
      { label: 'Youth Mentorship', to: '/programs#youth-mentorship' },
      { label: 'Senior Safety Initiative', to: '/programs#senior-safety-initiative' },
      { label: 'Back-to-School Breakfast', to: '/programs#back-to-school-breakfast' },
    ],
  },
  {
    heading: 'Learn More',
    links: moreNav,
  },
];
