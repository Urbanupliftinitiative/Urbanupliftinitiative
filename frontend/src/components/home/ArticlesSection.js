import React from 'react';

const ArticlesSection = () => {
  const articles = [
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600",
      category: "Article",
      date: "March 12, 2026",
      title: "How AI is Transforming IVF Patient Monitoring",
      description: "Discover how artificial intelligence is improving medication adherence and clinical outcomes."
    },
    {
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600",
      category: "Case Study",
      date: "March 10, 2026",
      title: "Surrogacy Agency Achieves 95% Compliance Rate",
      description: "Learn how one agency uses OnePermit to monitor surrogates across multiple states."
    },
    {
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600",
      category: "Guide",
      date: "March 8, 2026",
      title: "The Future of Remote Fertility Care",
      description: "Exploring how digital platforms are enabling better outcomes in IVF and surrogacy."
    }
  ];

  return (
    <section id="articles" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-full mb-6">
            Latest Insights
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div key={idx} className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span>{article.category}</span>
                  <span>·</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-snug group-hover:text-purple-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{article.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center space-x-2 text-gray-900 hover:text-purple-600 font-medium transition-colors">
            <span>All Insights</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
