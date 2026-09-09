import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from './motion';

// Matches COMPONENT_CATALOG.md §5 Media story card: 4:3/5:4 image, 18px
// radius, small number badge, border-top title/explanation split, 1.02
// hover scale, no shadow on the media itself.
// Aspect classes must be written out literally (not interpolated) so
// Tailwind's build-time scanner picks them up.
const ASPECT_CLASSES = {
  '4/3': 'aspect-[4/3]',
  '5/4': 'aspect-[5/4]',
  '3/4': 'aspect-[3/4]',
};

const MediaStoryCard = ({ src, alt, number, title, caption, aspect = '4/3', className = '' }) => (
  <motion.figure variants={fadeUp} className={`group ${className}`}>
    <div className={`relative overflow-hidden rounded-[18px] ${ASPECT_CLASSES[aspect] || ASPECT_CLASSES['4/3']}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
      {number && (
        <span className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/90 text-ed-ink text-[11px] font-extrabold flex items-center justify-center">
          {number}
        </span>
      )}
    </div>
    {(title || caption) && (
      <figcaption className="border-t border-ed-border pt-3 mt-3">
        {title && <p className="text-[14px] font-extrabold text-ed-ink mb-1">{title}</p>}
        {caption && <p className="text-[13px] text-ed-muted leading-relaxed">{caption}</p>}
      </figcaption>
    )}
  </motion.figure>
);

export default MediaStoryCard;
