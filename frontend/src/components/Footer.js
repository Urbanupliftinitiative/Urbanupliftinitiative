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
    <footer className="bg-white py-20">
      <div className="w-full px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {footerSections.map((section, idx) => (
            <div key={idx}>
              {section.title && (
                <h4 className="text-base font-semibold text-gray-900 mb-6">{section.title}</h4>
              )}
              <ul className="space-y-4">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    {item ? (
                      <a href="#" className="text-base text-gray-600 hover:text-gray-900 transition-colors">
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

        <div className="mb-12">
          <p className="text-2xl text-gray-900 font-light">Intelligent Fertility Care.</p>
        </div>

        {/* MASSIVE ONEPERMIT wordmark */}
        <div className="relative mb-16 overflow-hidden">
          <div className="text-[15rem] lg:text-[22rem] xl:text-[28rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 leading-none tracking-tighter select-none">
            ONEPERMIT
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-200">
          <p className="text-base text-gray-500 mb-4 md:mb-0">
            ©OnePermit {new Date().getFullYear()}
          </p>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
              PRIVACY POLICY
            </a>
            <a href="#" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
              TERMS OF SERVICE
            </a>
            <a href="#" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
              HIPAA COMPLIANCE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;