import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import useReveal from '../components/shared/useReveal';
import Eyebrow from '../components/shared/Eyebrow';
import SiteFooter from '../components/shared/SiteFooter';
import ContactForm from '../components/contact/ContactForm';
import { org } from '../data/organization';

const ContactPage = () => (
  <div className="min-h-screen bg-white">
    <section className="bg-ed-dark text-white pt-[140px] pb-16 md:pt-[168px] md:pb-20 px-4 md:px-6">
      <div className="mx-auto w-full max-w-ed-container">
        <motion.div {...useReveal()}>
          <Eyebrow dark>Get in Touch</Eyebrow>
          <h1 className="text-[42px] md:text-[64px] font-extrabold leading-[0.95] tracking-[-0.04em] mb-6">
            Let's talk.
          </h1>
          <p className="text-[16px] md:text-[18px] text-white/55 max-w-2xl leading-relaxed">
            Whether you want to mentor, partner, sponsor, or just learn more about our work in Camden — we'd love
            to hear from you.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="mx-auto w-full max-w-ed-container grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10">
        <div>
          <h2 className="text-[18px] font-extrabold text-ed-ink mb-4">Reach us directly</h2>
          <div className="space-y-3 text-[14px] text-ed-muted">
            <a
              href={`mailto:${org.email}`}
              className="flex items-center gap-2 font-semibold text-ed-ink hover:text-ed-accent focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-ed-accent focus-visible:outline-offset-2 rounded-md w-fit"
            >
              <Mail size={16} /> {org.email}
            </a>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> {org.city}, {org.state}
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>

    <SiteFooter />
  </div>
);

export default ContactPage;
