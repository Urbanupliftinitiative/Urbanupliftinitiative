import React from 'react';

const StatsSection = () => {
  const stats = [
    { label: "Medication adherence rate with OnePermit", value: "95", suffix: "%", bg: "bg-gradient-to-br from-purple-100 to-purple-200" },
    { label: "Time saved per week on patient coordination", value: "15", suffix: " hours", bg: "bg-gradient-to-br from-pink-100 to-pink-200" },
    { label: "Surrogate compliance score achieved", value: "92", suffix: "%", bg: "bg-gradient-to-br from-blue-100 to-blue-200" },
    { label: "Reduction in missed appointments", value: "40", suffix: "%", bg: "bg-gradient-to-br from-purple-100 to-pink-100" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className={`relative ${stat.bg} rounded-3xl p-8 lg:p-12 overflow-hidden group hover:shadow-2xl transition-all duration-500`}>
              <div className="relative z-10">
                <p className="text-sm font-medium text-gray-700 mb-6">{stat.label}</p>
                <div className="flex items-baseline space-x-2">
                  {stat.prefix && <span className="text-4xl font-bold text-gray-900">{stat.prefix}</span>}
                  <span className="text-6xl lg:text-7xl font-bold text-gray-900">{stat.value}</span>
                  {stat.suffix && <span className="text-2xl font-medium text-gray-700">{stat.suffix}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
