import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeUp, viewportOnce } from '../shared/motion';

import COMMUNITY_CLEANUP from '../../assets/gallery/community-cleanup.jpg';
import TEAM_GEAR from '../../assets/gallery/team-gear.jpg';
import COMMUNITY_OUTREACH from '../../assets/gallery/community-outreach.jpg';
import FIRETRUCK_VOLUNTEER from '../../assets/gallery/firetruck-volunteer.jpg';
import MENTORSHIP_MOMENT from '../../assets/gallery/mentorship-moment.jpg';

const photos = [
  { src: COMMUNITY_CLEANUP, alt: 'Mentors and a youth volunteer during a neighborhood cleanup' },
  { src: TEAM_GEAR, alt: 'Team members holding up Urban Uplift Initiative branded gear' },
  { src: COMMUNITY_OUTREACH, alt: 'A team member connecting with youth in the community' },
  { src: FIRETRUCK_VOLUNTEER, alt: 'A team member volunteering in the Camden community' },
  { src: MENTORSHIP_MOMENT, alt: 'Two team members standing together outdoors' },
];

// A slim, edge-to-edge strip of real photos right under the hero — proof of
// real people doing real work before the page asks the reader to read a
// single word. Horizontally scrollable on small screens.
const PhotoStripSection = () => (
  <section className="bg-white pt-10 pb-2 md:pt-14">
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-6"
    >
      {photos.map((photo) => (
        <motion.div
          key={photo.src}
          variants={fadeUp}
          className="shrink-0 w-[220px] sm:w-[260px] md:w-[300px] aspect-[4/3] rounded-[16px] overflow-hidden"
        >
          <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default PhotoStripSection;
