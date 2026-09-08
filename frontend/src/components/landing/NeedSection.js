import React from 'react';
import { motion } from 'framer-motion';
import useReveal from '../shared/useReveal';
import Eyebrow from '../shared/Eyebrow';
import { challengesAddressed } from '../../data/organization';

const NeedSection = () => (
  <section className="bg-ed-dark text-white py-20 md:py-28 lg:py-36">
    <div className="mx-auto w-full max-w-ed-container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-20 items-start">
      <motion.div {...useReveal()}>
        <Eyebrow dark>The Need in Camden</Eyebrow>
        <h2 className="max-w-2xl text-[34px] sm:text-[44px] md:text-[52px] font-extrabold leading-[1.0] tracking-[-0.03em]">
          Too many young men and seniors in Camden are navigating real hardship alone.
        </h2>
        <p className="mt-7 max-w-xl text-[15px] md:text-[17px] leading-relaxed text-white/55">
          Camden City residents face social and economic challenges that don't resolve on their own — and often
          fall hardest on young men without steady guidance and on seniors without reliable support. Urban Uplift
          Initiative exists to meet both of those needs directly, in the same neighborhoods we call home.
        </p>
      </motion.div>

      <motion.div {...useReveal(0.1)} className="border-t border-white/15">
        {challengesAddressed.map((item) => (
          <div key={item} className="border-b border-white/15 py-5">
            <p className="text-[15px] font-semibold text-white/85">{item}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default NeedSection;
