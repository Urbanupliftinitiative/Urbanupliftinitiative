import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: "Office Locations",
      items: [
        "St. Louis, 1220 N. Price Road,",
        "Suite 2, Olivette, MO, 63132",
        "",
        "Boston, 136 Newbury Street,",
        "Boston, MA, 02116"
      ]
    },
    {
      title: "",
      items: ["FAQs", "Support", "Request a Quote", "LinkedIn"]
    },
    {
      title: "",
      items: ["Products Overview", "Articles", "About Us", "Careers", "News"]
    },
    {
      title: "",
      items: ["Partners", "Investors", "Legal", "Privacy Notice", "Terms", "Cookies", "Manage Cookies"]
    }
  ];

  return (
    <footer className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {footerSections.map((section, idx) => (
            <div key={idx}>
              {section.title && (
                <h4 className="text-sm font-semibold text-gray-900 mb-4">{section.title}</h4>
              )}
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    {item ? (
                      <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                        {item}
                      </a>
                    ) : (
                      <div className="h-3"></div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Building Intelligence tagline */}
        <div className="mb-8">
          <p className="text-lg text-gray-900 font-light">Building Intelligence.</p>
        </div>

        {/* MASSIVE DOOR wordmark */}
        <div className="relative mb-12 overflow-hidden">
          <div className="text-[15rem] lg:text-[20rem] font-bold text-gray-900 leading-none tracking-tighter select-none">
            DOOR
          </div>
        </div>

        {/* Copyright and legal links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            ©DOOR{new Date().getFullYear()}
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              PRIVACY NOTICE
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              TERMS
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              COOKIES
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;