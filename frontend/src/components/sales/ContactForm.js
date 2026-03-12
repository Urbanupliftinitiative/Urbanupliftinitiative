import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    helpType: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
    portfolioSize: '',
    hearAbout: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (This is a demo)');
  };

  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="space-y-6">
            <h1 className="text-5xl font-light text-gray-900 mb-4">
              Your key to smart buildings.
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Fill out the form and our team will get in touch with you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <select
                value={formData.helpType}
                onChange={(e) => setFormData({...formData, helpType: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              >
                <option value="">How can we help?</option>
                <option value="demo">Request a demo</option>
                <option value="quote">Get a quote</option>
                <option value="partner">Partner inquiry</option>
              </select>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>

              <input
                type="tel"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
              />

              <input
                type="email"
                placeholder="Work Email Address*"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
              />

              <input
                type="text"
                placeholder="Company or Property Name*"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
              />

              <select
                value={formData.portfolioSize}
                onChange={(e) => setFormData({...formData, portfolioSize: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              >
                <option value="">Property or Portfolio Size*</option>
                <option value="1-10">1-10 units</option>
                <option value="11-50">11-50 units</option>
                <option value="51-200">51-200 units</option>
                <option value="200+">200+ units</option>
              </select>

              <input
                type="text"
                placeholder="How did you hear about us?"
                value={formData.hearAbout}
                onChange={(e) => setFormData({...formData, hearAbout: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />

              <textarea
                placeholder="Message*"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
              ></textarea>

              <div className="flex items-start space-x-3">
                <input type="checkbox" id="recaptcha" className="mt-1" required />
                <label htmlFor="recaptcha" className="text-sm text-gray-600">
                  I'm not a robot (reCAPTCHA)
                </label>
              </div>

              <p className="text-sm text-gray-600">
                Register your interest and one of our DOOR team members will be in touch.
              </p>

              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-4 text-base font-medium transition-all shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Image */}
          <div className="relative bg-gradient-to-br from-gray-400 to-gray-600 rounded-3xl h-full min-h-[600px] flex items-center justify-center">
            <div className="w-64 h-96 bg-white rounded-[3rem] shadow-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
