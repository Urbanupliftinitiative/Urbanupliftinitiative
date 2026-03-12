import React from 'react';

const ProductsTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'platform', label: 'Platform' },
    { id: 'integrations', label: 'Integrations' },
    { id: 'hardware', label: 'Hardware' },
    { id: 'access-control', label: 'Access Control' },
    { id: 'residential', label: 'Residential Doors' },
    { id: 'smart-home', label: 'Smart Home' }
  ];

  return (
    <div className="sticky top-16 z-40 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex overflow-x-auto py-4 space-x-2 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsTabs;
