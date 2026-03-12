import React from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/sales/ContactForm';
import Footer from '../components/Footer';

const TalkToSalesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default TalkToSalesPage;
