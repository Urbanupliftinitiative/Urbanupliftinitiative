import React from 'react';

const AdvisorsSection = () => {
  const advisors = [
    {
      name: "Dr. Sarah Chen, MD",
      title: "Medical Director, Fertility Institute of California, Reproductive Endocrinology",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400"
    },
    {
      name: "Dr. Michael Rodriguez, PhD",
      title: "CEO Surrogacy Solutions Network, Former VP Clinical Operations",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400"
    },
    {
      name: "Dr. Jennifer Martinez",
      title: "Ex. Chief Medical Officer, Stanford Fertility Center, IVF Specialist",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400"
    },
    {
      name: "Emily Thompson, RN, CNM",
      title: "UCSF Reproductive Health, Johns Hopkins Fertility Clinic",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400"
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-gray-900 mb-12 md:mb-16 lg:mb-20">
          Advised by Healthcare Veterans
        </h2>

        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 lg:gap-10">
          {advisors.map((advisor, idx) => (
            <div 
              key={idx}
              className="bg-gray-50 rounded-2xl p-6 md:p-8 flex items-start space-x-4 md:space-x-6 hover:shadow-lg transition-shadow duration-300"
            >
              <img 
                src={advisor.image}
                alt={advisor.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-light text-gray-900 mb-2">
                  {advisor.name}
                </h3>
                <p className="text-sm md:text-sm font-light text-gray-600 leading-relaxed">
                  {advisor.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisorsSection;