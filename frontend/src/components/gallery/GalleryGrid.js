import React from 'react';
import { motion } from 'framer-motion';
import { stagger, viewportOnce } from '../shared/motion';
import MediaStoryCard from '../shared/MediaStoryCard';
import { org } from '../../data/organization';

import TEAM_IMG from '../../assets/team-photo.jpg';
import COMMUNITY_CLEANUP from '../../assets/gallery/community-cleanup.jpg';
import TEAM_GEAR from '../../assets/gallery/team-gear.jpg';
import COMMUNITY_OUTREACH from '../../assets/gallery/community-outreach.jpg';
import FIRETRUCK_VOLUNTEER from '../../assets/gallery/firetruck-volunteer.jpg';
import MENTORSHIP_MOMENT from '../../assets/gallery/mentorship-moment.jpg';
import CLEANUP_VOLUNTEER from '../../assets/gallery/cleanup-volunteer.jpg';
import WITH_GOD_ALL_THINGS from '../../assets/gallery/with-god-all-things.jpg';
import BRANDED_MASK_SELFIE from '../../assets/gallery/branded-mask-selfie.jpg';
import COMMUNITY_MEAL from '../../assets/gallery/community-meal-distribution.jpg';
import NEIGHBORHOOD_CLEANUP_CREW from '../../assets/gallery/neighborhood-cleanup-crew.jpg';
import TEAM_GYM_EVENT from '../../assets/gallery/team-gym-event.jpg';
import GENTLEMEN_AND_A_TIE from '../../assets/gallery/gentlemen-and-a-tie-event.jpg';
import EVENT_FLYER_HANDOUT from '../../assets/gallery/event-flyer-handout.jpg';

const photos = [
  {
    src: TEAM_IMG,
    alt: "Urban Uplift Initiative team members standing together outdoors in Camden with the organization's banner",
    caption: `The ${org.shortName} team in ${org.city}, ${org.state}.`,
    aspect: '5/4',
    span: true,
  },
  {
    src: COMMUNITY_CLEANUP,
    alt: 'Team members and a young volunteer holding trash bags during a neighborhood cleanup',
    caption: 'A neighborhood cleanup day in Camden.',
    aspect: '4/3',
  },
  {
    src: TEAM_GEAR,
    alt: 'Four Urban Uplift Initiative team members holding up a branded t-shirt indoors',
    caption: 'The team with Urban Uplift Initiative gear.',
    aspect: '4/3',
  },
  {
    src: COMMUNITY_OUTREACH,
    alt: 'A team member kneeling with two young community members holding donated items',
    caption: 'Connecting with youth in the community.',
    aspect: '4/3',
  },
  {
    src: FIRETRUCK_VOLUNTEER,
    alt: 'A team member volunteering, standing in the doorway of a Camden Fire Department truck',
    caption: 'Out volunteering in the Camden community.',
    aspect: '3/4',
  },
  {
    src: MENTORSHIP_MOMENT,
    alt: 'Two Urban Uplift Initiative team members standing together outdoors',
    caption: 'Team members out in the field.',
    aspect: '3/4',
  },
  {
    src: CLEANUP_VOLUNTEER,
    alt: 'A team member in Urban Uplift Initiative gear standing next to a cleanup bag',
    caption: 'Ready for a community cleanup.',
    aspect: '3/4',
  },
  {
    src: WITH_GOD_ALL_THINGS,
    alt: 'Two team members standing beside a wall reading "With God All Things Are Possible"',
    caption: "Reflecting the faith that grounds the organization's work.",
    aspect: '4/3',
    span: true,
  },
  {
    src: BRANDED_MASK_SELFIE,
    alt: 'A team member wearing an Urban Uplift Initiative branded face mask',
    caption: 'Team gear, up close.',
    aspect: '3/4',
  },
  {
    src: COMMUNITY_MEAL,
    alt: "A UUI volunteer handing a meal to a senior on a Camden street corner, with a teen holding a 'Jesus Loves Y'all' sign",
    caption: 'Meals and care, street level.',
    aspect: '4/3',
    span: true,
  },
  {
    src: NEIGHBORHOOD_CLEANUP_CREW,
    alt: 'Three Urban Uplift Initiative volunteers with cleanup tools on a Camden sidewalk',
    caption: 'Suited up for a neighborhood cleanup.',
    aspect: '3/4',
  },
  {
    src: TEAM_GYM_EVENT,
    alt: 'Five Urban Uplift Initiative team members and family at a community gym event',
    caption: 'A community gathering at the gym.',
    aspect: '4/3',
  },
  {
    src: GENTLEMEN_AND_A_TIE,
    alt: "Three team members holding 'Gentlemen and a Tie' event flyers outdoors",
    caption: 'Promoting the Gentlemen and a Tie event.',
    aspect: '4/3',
  },
  {
    src: EVENT_FLYER_HANDOUT,
    alt: 'A team member giving a thumbs up while holding an event flyer indoors',
    caption: 'Getting the word out.',
    aspect: '3/4',
  },
];

const GalleryGrid = () => (
  <section className="bg-white py-16 md:py-24 px-4 md:px-6">
    <div className="mx-auto w-full max-w-ed-container">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6"
      >
        {photos.map((photo, i) => (
          <MediaStoryCard
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            caption={photo.caption}
            aspect={photo.aspect}
            number={String(i + 1).padStart(2, '0')}
            className={photo.span ? 'sm:col-span-2' : ''}
          />
        ))}
      </motion.div>
    </div>
  </section>
);

export default GalleryGrid;
