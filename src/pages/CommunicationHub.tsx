import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowRight, Clock, User, TrendingUp, DollarSign, Users, Zap, Wallet, Heart, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";
import { articles, categories, getFeaturedArticles, getArticlesByCategory } from "@/data/articles";
import { SEO } from "@/components/SEO";

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

const CommunicationHub = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = getArticlesByCategory(selectedCategory);
  const featuredArticles = selectedCategory === "All" ? getFeaturedArticles() : [];
  const regularArticles = filteredArticles.filter(article => !article.featured);

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
    <div className="min-h-screen bg-white">
      <SEO
        title="Communication Hub - News, Updates & Articles"
        description="Stay informed with the latest news, updates, and articles from TNT SACCO. Read about financial tips, member stories, product updates, and community announcements."
        canonical="https://www.tntsacco.co.ke/communication-hub"
        keywords="TNT SACCO news, SACCO updates Kenya, financial tips, member stories, community news, SACCO announcements, financial education articles"
      />
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy/5 via-yellow/10 to-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-navy mb-6">
                Communication Hub
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Your central source for economic insights, investment opportunities, cooperative developments,
                and TNT SACCO updates. Stay informed and make better financial decisions.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>{articles.length} Articles</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>{categories.length - 1} Categories</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Updated Daily</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white sticky top-16 z-40 border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => {
                const IconComponent = category.icon ? iconMap[category.icon] : null;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`transition-all duration-200 ${
                      selectedCategory === category.id
                        ? `${category.color} text-white hover:opacity-90`
                        : "border-gray-300 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {IconComponent && <IconComponent size={16} className="mr-2" />}
                    {category.name}
                  </Button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-navy flex items-center">
                  <span className="text-yellow mr-3">⭐</span>
                  Featured Stories
                </h2>
                <span className="text-sm text-gray-500">{featuredArticles.length} featured</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <Link key={article.id} to={`/communication-hub/${article.slug}`}>
                    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group h-full">
                      <div className="aspect-video overflow-hidden relative">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getCategoryColor(article.category)}`}>
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {article.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {article.readTime}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-navy transition-colors">
                          {article.title}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>

                        {article.author && (
                          <div className="flex items-center text-sm text-gray-500 mb-4">
                            <User className="w-4 h-4 mr-1" />
                            {article.author}
                          </div>
                        )}

                        {article.cta && (
                          <div className="bg-yellow/10 border-l-4 border-yellow p-3 mb-4 rounded">
                            <p className="text-sm text-navy">💡 {article.cta}</p>
                          </div>
                        )}

                        <Button className="w-full bg-navy hover:bg-navy/90 text-white group-hover:shadow-lg transition-all">
                          Read Full Article
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Articles */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-navy">
                {selectedCategory !== "All" ? `${selectedCategory} Articles` : "All Articles"}
              </h2>
              <span className="text-sm text-gray-500">
                {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <Link key={article.id} to={`/communication-hub/${article.slug}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getCategoryColor(article.category)}`}>
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {article.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-navy transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                        {article.excerpt}
                      </p>

                      {article.author && (
                        <div className="text-xs text-gray-500 mb-3 flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          By {article.author}
                        </div>
                      )}

                      <Button
                        variant="ghost"
                        className="text-navy hover:text-navy/80 hover:bg-navy/5 p-0 w-full justify-center group-hover:bg-navy/5"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📭</div>
                <p className="text-xl text-gray-600 mb-2">No articles found in this category</p>
                <p className="text-gray-500">Check back soon for updates!</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-br from-navy to-navy/90 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Never Miss an Update
            </h3>
            <p className="text-lg text-yellow/80 mb-8">
              Subscribe to our newsletter to receive the latest news, insights, and exclusive member updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border-2 border-yellow/20 bg-white/10 backdrop-blur text-white placeholder-white/60 rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent focus:bg-white/20 transition-all"
              />
              <Button className="bg-yellow text-navy hover:bg-yellow/90 font-semibold px-8 shadow-lg hover:shadow-xl transition-all">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-yellow/70 mt-4">
              Join 5,000+ members who stay informed. Unsubscribe anytime.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CommunicationHub;
