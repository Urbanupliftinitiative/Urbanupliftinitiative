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
      items: [
        "FAQs",
        "Support",
        "Request a Quote",
        "LinkedIn"
      ]
    },
    {
      title: "",
      items: [
        "Products Overview",
        "Articles",
        "About Us",
        "Careers",
        "News"
      ]
    },
    {
      title: "",
      items: [
        "Partners",
        "Investors",
        "Legal",
        "Privacy Notice",
        "Terms",
        "Cookies",
        "Manage Cookies"
      ]
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            Building Intelligence © {new Date().getFullYear()} DOOR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
