import React from 'react';

const ArticlesSection = () => {
  const articles = [
    {
      image: "https://images.unsplash.com/photo-1574848296471-28f79a036f79?w=600",
      category: "Article",
      date: "March 6, 2026",
      title: "Student Housing Access Control During Turn Season: A Practical Guide for Operators",
      description: "Streamline student housing turn season with modern access control. Automate credential turnover, vendor access, and move-ins across properties."
    },
    {
      image: "https://images.pexels.com/photos/18435276/pexels-photo-18435276.jpeg?w=600",
      category: "Article",
      date: "March 6, 2026",
      title: "Multifamily Access Control for Small Portfolios: Reduce Rekeying, Eliminate Lockouts, Simplify Operations",
      description: "Modern multifamily access control for small portfolios. Eliminate rekeying, reduce lockouts, and simplify property operations with cloud-based access systems."
    },
    {
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600",
      category: "Article",
      date: "March 6, 2026",
      title: "Multifamily Access Control Is Infrastructure, Not Just Security",
      description: "Multifamily access control is more than security. Learn how modern, cloud-based access systems power building intelligence, automation, and portfolio-wide efficiency."
    }
  ];

  return (
    <section id="articles" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-full mb-6">
            Recent insights
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <a
              key={idx}
              href="#"
              className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-snug group-hover:text-gray-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {article.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center space-x-2 text-gray-900 hover:text-gray-600 font-medium transition-colors"
          >
            <span>All Insights</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
