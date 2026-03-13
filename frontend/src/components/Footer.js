import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: "Contact Us",
      items: [
        "San Francisco, CA 94103",
        "United States",
        "",
        "info@onepermit.com",
        "1-800-ONE-PERM"
      ]
    },
    {
      title: "",
      items: ["FAQ", "Support", "Request a Demo", "Contact Sales"]
    },
    {
      title: "",
      items: ["Platform Overview", "Resources", "About Us", "Careers", "Blog"]
    },
    {
      title: "",
      items: ["Partners", "Clinics", "Agencies", "Privacy Policy", "Terms of Service", "HIPAA Compliance"]
    }
  ];

  return (
    <footer className="bg-white py-20 border-t border-gray-200">
      <div className="w-full px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div>
            <h4 className="text-xl font-light text-gray-900 mb-6">OnePermit</h4>
            <p className="text-base font-light text-gray-600 mb-4">founders@onepermit.com</p>
          </div>
          
          {footerSections.slice(1).map((section, idx) => (
            <div key={idx}>
              {section.title && (
                <h4 className="text-base font-light text-gray-900 mb-6">{section.title}</h4>
              )}
              <ul className="space-y-4">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    {item ? (
                      <a href="#" className="text-base font-light text-gray-600 hover:text-gray-900 transition-colors">
                        {item}
                      </a>
                    ) : (
                      <div className="h-4"></div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-gray-200">
          <p className="text-base font-light text-gray-500">
            Copyright © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
