import { Calendar, ArrowRight, TrendingUp, DollarSign, Users, Zap, ChevronLeft, ChevronRight, Wallet, Heart, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { articles, categories, getRecentArticles } from "@/data/articles";

// Icon mapping for categories
const iconMap: Record<string, any> = {
  TrendingUp,
  DollarSign,
  Users,
  Zap,
  Wallet,
  Heart,
  Megaphone,
};

export const CommunicationHubSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Get recent articles for homepage (limit to 8 most recent)
  const displayArticles = selectedCategory === "All"
    ? getRecentArticles(8)
    : articles.filter(article => article.category === selectedCategory).slice(0, 8);

  // Check scroll position
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Scroll functions
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Scroll by approximately one card width
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

        // If we've reached the end, scroll back to start
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          scrollContainerRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          scroll("right");
        }
      }
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, [displayArticles]);

  const getCategoryColor = (category: string) => {
    const categoryColors: Record<string, string> = {
      "Economic Outlook": "bg-blue-100 text-blue-800 border-blue-200",
      "Investment Opportunities": "bg-orange-100 text-orange-800 border-orange-200",
      "Member Empowerment": "bg-green-100 text-green-800 border-green-200",
      "Innovation & Technology": "bg-purple-100 text-purple-800 border-purple-200",
      "Financial": "bg-indigo-100 text-indigo-800 border-indigo-200",
      "Community": "bg-pink-100 text-pink-800 border-pink-200",
      "Announcements": "bg-yellow-100 text-yellow-800 border-yellow-200",
    };
    return categoryColors[category] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <section id="communication-hub" className="bg-gradient-to-br from-navy/5 via-yellow/10 to-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-navy mb-4">
            Communication Hub
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Stay informed about economic trends, investment opportunities, cooperative sector developments, and SACCO updates
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg border border-yellow/20 flex flex-wrap gap-1 justify-center">
            {categories.map((category) => {
              const IconComponent = category.icon ? iconMap[category.icon] : null;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                    selectedCategory === category.id
                      ? `${category.color} text-white shadow-md`
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {IconComponent && <IconComponent size={16} />}
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Horizontal Scrolling Articles Container */}
        <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Left Navigation Button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
          )}

          {/* Right Navigation Button */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          )}

          {/* Scrollable Articles */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-8 px-2 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {displayArticles.map((article) => (
              <Link
                key={article.id}
                to={`/communication-hub/${article.slug}`}
                className="flex-none w-[380px] group/card"
              >
                <article className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col group-hover/card:scale-105">
                  {/* Featured Image */}
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full border ${getCategoryColor(
                          article.category
                        )}`}
                      >
                        {article.category}
                      </span>
                    </div>
                    {/* Featured Badge */}
                    {article.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-yellow to-yellow/80 text-navy shadow-lg">
                          ⭐ Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </div>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover/card:text-navy transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                      {article.excerpt}
                    </p>

                    {/* Author (if available) */}
                    {article.author && (
                      <div className="text-xs text-gray-500 mb-3 flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        By {article.author}
                      </div>
                    )}

                    {/* CTA */}
                    {article.cta && (
                      <div className="bg-yellow/10 border-l-4 border-yellow p-3 mb-4 rounded">
                        <p className="text-xs text-navy font-medium">
                          💡 {article.cta}
                        </p>
                      </div>
                    )}

                    {/* Read More Button */}
                    <Button className="w-full bg-navy hover:bg-navy/90 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium group-hover/card:bg-navy/90">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/card:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Scroll Indicator Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({
              length: Math.ceil(displayArticles.length / 3),
            }).map((_, index) => (
              <div
                key={index}
                className="h-2 w-2 rounded-full bg-gray-300 transition-all duration-300"
              />
            ))}
          </div>
        </div>

        {/* No articles message */}
        {displayArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found in this category.</p>
          </div>
        )}

        {/* View All Articles CTA */}
        <div className="text-center mt-12">
          <Link to="/communication-hub">
            <Button
              size="lg"
              className="bg-gradient-to-r from-navy to-navy/90 hover:from-navy/90 hover:to-navy text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All {articles.length} Articles
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-yellow/30 mt-12">
          <h3 className="text-2xl font-bold text-navy mb-4">
            Stay Updated with TNT SACCO News
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss important updates about economic trends,
            investment opportunities, and member benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow focus:border-transparent"
            />
            <Button className="bg-navy hover:bg-navy/90 px-6 py-3 font-medium">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

// Import Clock icon (was missing from initial import)
import { Clock } from "lucide-react";
