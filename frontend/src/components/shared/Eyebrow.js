import React from 'react';

// Matches COMPONENT_CATALOG.md §2: a 36-40px, 2px rule followed by a
// 10-11px tracked uppercase label. Use once at the start of a chapter.
const Eyebrow = ({ children, dark = false }) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="h-0.5 w-9 bg-ed-accent shrink-0" aria-hidden="true" />
    <p className={`text-[10px] font-extrabold uppercase tracking-[0.24em] ${dark ? 'text-white/55' : 'text-black/55'}`}>
      {children}
    </p>
  </div>
);

export default Eyebrow;
