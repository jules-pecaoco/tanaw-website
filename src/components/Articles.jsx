import { useState } from "react";
import { ChevronRight, Clock, Calendar, ExternalLink } from "lucide-react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { ARTICLES } from "../constants/data";

// All unique categories for filter tabs
const ALL_CATEGORIES = ["All", ...Array.from(new Set(ARTICLES.map((a) => a.category)))];

const ArticleCard = ({ article, index, isVisible }) => {
  const isExternal = article.external && article.link;

  const CardWrapper = ({ children }) =>
    isExternal ? (
      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ease-out group transform hover:-translate-y-2 flex flex-col no-underline ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
      >
        {children}
      </a>
    ) : (
      <article
        className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ease-out group transform hover:-translate-y-2 flex flex-col ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
      >
        {children}
      </article>
    );

  return (
    <CardWrapper>
      {/* Thumbnail */}
      <div className="relative overflow-hidden h-48">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className={`absolute top-3 left-3 ${article.categoryColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
          {article.category}
        </span>
        {isExternal && (
          <span className="absolute top-3 right-3 bg-black/50 text-white p-1.5 rounded-full">
            <ExternalLink size={12} />
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-orange-500 transition-colors">{article.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-4">{article.excerpt}</p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {article.readTime}
            </span>
          </div>
          <span className="font-medium text-gray-500">{article.author}</span>
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pb-5">
        <span className="flex items-center gap-1 text-orange-500 hover:text-orange-600 font-semibold text-sm transition-colors group/btn">
          {isExternal ? "Read article" : "Read article"}
          {isExternal ? (
            <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
          ) : (
            <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          )}
        </span>
      </div>
    </CardWrapper>
  );
};

const Articles = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [articlesRef, articlesAreVisible] = useIntersectionObserver();

  const filtered = activeCategory === "All" ? ARTICLES : ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <section
      id="articles"
      ref={articlesRef}
      className={`py-20 bg-white transition-all duration-1000 ease-out ${
        articlesAreVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Safety & Climate Articles</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Stay informed with guides, tips, and insights from the Tanaw team on climate awareness and disaster preparedness.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat ? "bg-orange-500 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} isVisible={articlesAreVisible} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all">
            View All Articles
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
