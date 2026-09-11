// Single source of truth for Urban Uplift Initiative Community Development's
// real organizational facts. Every value here is drawn directly from the
// organization's own mission/vision statement and sponsorship letter.
// Nothing here is invented — where the org hasn't published a figure
// (dollar amounts, dates beyond "this summer," names beyond the three
// listed officers), it is intentionally left out rather than fabricated.

export const org = {
  legalName: 'Urban Uplift Initiative Community Development',
  shortName: 'Urban Uplift Initiative',
  abbreviation: 'UUI',
  tagline: 'Plant. Grow. Build.',
  city: 'Camden',
  state: 'NJ',
  region: 'Camden City',
  email: 'UrbanUpliftInitiative@gmail.com',
  orgType: 'Faith-based community nonprofit',
  teamSize: 6,
  // Trust-signal fields the org hasn't published yet. Left undefined
  // rather than invented — SiteFooter only renders each once it's set.
  phone: undefined,
  ein: undefined,
};

// Social profiles, once the org has them to share. Shape:
// { platform: 'facebook' | 'instagram' | 'linkedin' | 'youtube', url: '...' }
// Empty for now — nothing invented — SiteFooter hides the row until this
// has entries.
export const socialLinks = [];

// The organization operates two program arms: a youth mentorship program
// and a citywide community-development effort. Both are described in its
// own mission materials.
export const missionStatement =
  'A group of men united to teach, enrich, and uplift the lives of at-risk youth.';

export const visionStatement =
  "Invest in the lives of inner city youth to help improve the overall conditions of the community.";

export const programPurpose =
  'The Youth Male Mentorship Program provides adequate support and teaching to help in the development of young males.';

export const communityDevelopmentStatement =
  'Urban Uplift Initiative Community Development was established with the purpose of positively impacting, strengthening, and improving the Camden City community — working collaboratively with residents and community partners to address local needs, create positive opportunities, and contribute to the continued growth, safety, and overall well-being of Camden.';

// The Five Pillars of the Mentorship Program, verbatim from the org's own
// program description.
export const pillars = [
  {
    number: '01',
    name: 'Christian Discipleship',
    focus: 'Christ-centered spiritual development',
  },
  {
    number: '02',
    name: 'Mental Toughness',
    focus: 'Cognitive development',
  },
  {
    number: '03',
    name: 'Gentlemen By Choice',
    focus: 'Ethical and moral development',
  },
  {
    number: '04',
    name: 'Financial Literacy',
    focus: 'Economic and financial knowledge',
  },
  {
    number: '05',
    name: 'Career and Aspiration',
    focus: 'Long-term goal setting',
  },
];

export const mentorshipDelivery =
  'Workshops, educational teachings, community events, mentoring activities, and monthly gatherings put the Five Pillars into practice — giving mentees consistent guidance, positive support, practical life skills, and opportunities for personal growth.';

// Active / upcoming programs under the Community Development arm, as
// described in the organization's sponsorship letter.
export const programs = [
  {
    id: 'youth-mentorship',
    name: 'Youth Male Mentorship Program',
    audience: 'At-risk young men in Camden City',
    summary:
      'A structured mentorship program built on five pillars — faith, mental toughness, character, financial literacy, and long-term goal-setting — delivered through workshops, mentoring activities, and monthly gatherings.',
    status: 'Active',
  },
  {
    id: 'senior-safety-initiative',
    name: 'Senior Safety Initiative',
    audience: 'Senior citizens and residents facing financial hardship',
    summary:
      'Provides essential life-safety devices to Camden seniors and residents experiencing financial hardship.',
    status: 'This summer',
  },
  {
    id: 'back-to-school-breakfast',
    name: 'Back-to-School Free Breakfast',
    audience: "Camden youth heading back to school",
    summary:
      'A pilot program providing healthy, nutritious breakfast to youth as they prepare for the new school year — with a long-term vision to grow into a permanent monthly community breakfast program.',
    status: 'This summer · Pilot',
  },
];

// Dated, confirmed events — as opposed to `programs`, which can be
// ongoing/undated. Kept separate so UpcomingSection can show a real date
// once one exists instead of the generic "no dated events yet" placeholder.
export const events = [
  {
    id: 'co-alarm-distribution',
    name: 'Senior Safety Initiative: Free CO & Smoke Alarm Distribution',
    date: '2026-09-26',
    dateLabel: 'Saturday, September 26, 2026',
    location: 'Camden, NJ',
    summary:
      'Free carbon monoxide and smoke alarms for Camden seniors, made possible by a grant of 50 alarms from The Lauren Project. Space and supply are limited — seniors are encouraged to apply ahead of the event to reserve a device.',
    programId: 'senior-safety-initiative',
    applyTo: '/apply/senior-safety',
  },
];

// Long-term capital priorities the organization has named in its own
// materials — used for donation framing instead of invented dollar-impact
// claims.
export const fundingPriorities = [
  {
    id: 'senior-transportation',
    name: 'Senior Transportation Vehicle',
    description:
      "A dedicated vehicle to provide emergency transportation for low-income seniors and help with tasks like moving heavy furniture — a first step toward a comprehensive senior care program.",
  },
  {
    id: 'cave-of-engedi',
    name: 'Cave of Engedi Intercommunal Youth Center',
    description:
      'A planned after-school facility offering academic support, physical fitness, mentoring, leadership development, life-skills training, and faith-based programming — targeted for 2028.',
    targetYear: 2028,
  },
  {
    id: 'ongoing-programs',
    name: 'Ongoing Program Costs',
    description:
      'Sustains active programs like the Youth Mentorship Program, the Senior Safety Initiative, and the Back-to-School Breakfast program.',
  },
];

// Real named leadership. The organization has six total members; only
// three officers are named in its materials, so only these three are
// listed by name — the rest are referred to collectively, never invented.
export const leadership = [
  { name: 'Claude T. Boone', role: 'Director' },
  { name: 'Calvin L. Coley', role: 'Treasurer' },
  { name: 'Ali Cooper', role: 'Director of Public Relations' },
];

// Real community partners/collaborators named in the organization's own
// sponsorship letter.
export const communityPartners = [
  'Camden Police Department',
  'Camden Fire Department',
  'Retired airline pilots',
  'Local churches',
  'Other Camden community organizations',
];

export const challengesAddressed = [
  'Poverty',
  'Substance abuse',
  'Single-parent households',
  'Negative peer influences',
];

export const howWeCreateChange = [
  {
    step: '01',
    title: 'Identify the need',
    description:
      'We start from what Camden residents are actually facing — from at-risk youth needing guidance to seniors facing isolation and financial hardship.',
  },
  {
    step: '02',
    title: 'Partner with the community',
    description:
      'We work alongside residents and partners like the Camden Police and Fire Departments, local churches, and community organizations rather than in isolation.',
  },
  {
    step: '03',
    title: 'Deploy mentors and resources',
    description:
      'Six dedicated team members bring lived experience in positive leadership and mentorship to every program.',
  },
  {
    step: '04',
    title: 'Run structured programs',
    description:
      'Workshops, mentoring activities, and monthly gatherings put our program pillars into consistent practice.',
  },
  {
    step: '05',
    title: 'Grow with the community',
    description:
      "From a pilot breakfast program to a planned youth center by 2028, we scale what's working — one funded priority at a time.",
  },
];
