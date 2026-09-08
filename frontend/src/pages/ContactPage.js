import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import SiteFooter from '../components/shared/SiteFooter';
import ContactForm from '../components/contact/ContactForm';
import { org } from '../data/organization';

const ContactPage = () => (
  <div className="min-h-screen bg-white font-sora">
    <section className="bg-uui-navy text-white pt-[140px] pb-16 md:pt-[168px] md:pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-widest font-bold text-uui-gold mb-4">Get in Touch</p>
        <h1 className="font-sora text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
          Let's talk.
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
          Whether you want to mentor, partner, sponsor, or just learn more about our work in Camden — we'd love
          to hear from you.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10">
        <div>
          <h2 className="font-sora text-xl font-bold text-uui-navy mb-4">Reach us directly</h2>
          <div className="space-y-3 text-sm text-uui-slate">
            <a href={`mailto:${org.email}`} className="flex items-center gap-2 font-semibold text-uui-navy hover:text-uui-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-uui-gold rounded-md w-fit">
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
