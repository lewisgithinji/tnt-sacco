
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowRight, Clock, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Announcements", "Technology", "Financial", "Community", "Events"];

  const newsArticles = [
    {
      id: 1,
      title: "TNT SACCO Introduces New Mobile Banking App with Enhanced Security Features",
      excerpt: "Experience seamless banking with our new mobile application featuring biometric authentication, real-time notifications, and an intuitive user interface designed for your convenience.",
      content: "Our new mobile banking application represents a significant leap forward in digital financial services...",
      date: "January 15, 2025",
      author: "Communications Team",
      category: "Technology",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
      featured: true
    },
    {
      id: 2,
      title: "Annual General Meeting 2025 - Save the Date",
      excerpt: "Join us for our Annual General Meeting on March 25, 2025, as we review our achievements and outline strategic plans for the coming year.",
      content: "We cordially invite all members to attend our Annual General Meeting...",
      date: "January 12, 2025",
      author: "Board Secretary",
      category: "Announcements",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=800",
      featured: false
    },
    {
      id: 3,
      title: "New Branch Opening in Nakuru - Expanding Our Reach",
      excerpt: "We're excited to announce the opening of our new Nakuru branch in February 2025, bringing our comprehensive financial services closer to our members.",
      content: "TNT SACCO continues to expand its physical presence to better serve our growing membership...",
      date: "January 10, 2025",
      author: "Operations Team",
      category: "Announcements",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      featured: false
    },
    {
      id: 4,
      title: "Financial Literacy Workshop Series Kicks Off This Month",
      excerpt: "Join our comprehensive financial literacy workshops throughout January and February. Learn about budgeting, investment strategies, and financial planning.",
      content: "Financial education is at the heart of our member empowerment strategy...",
      date: "January 8, 2025",
      author: "Training Department",
      category: "Community",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
      featured: false
    },
    {
      id: 5,
      title: "Record Dividend Payout for 2024 - 12% Return to Members",
      excerpt: "TNT SACCO announces a record dividend payout of 12% for the financial year 2024, reflecting our strong performance and commitment to member value.",
      content: "We are pleased to announce exceptional returns for our members in 2024...",
      date: "January 5, 2025",
      author: "Finance Department",
      category: "Financial",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
      featured: true
    },
    {
      id: 6,
      title: "New Partnership with Local Schools for Education Loans",
      excerpt: "TNT SACCO partners with leading educational institutions to provide streamlined education loan processes and competitive rates for our members.",
      content: "Education is a key pillar of community development...",
      date: "January 3, 2025",
      author: "Credit Department",
      category: "Community",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
      featured: false
    },
    {
      id: 7,
      title: "Digital Payment Integration Now Live - Pay Bills Seamlessly",
      excerpt: "Members can now pay utility bills, school fees, and other services directly through our digital platforms with real-time processing.",
      content: "Our new digital payment integration makes bill payments easier than ever...",
      date: "December 28, 2024",
      author: "IT Department",
      category: "Technology",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
      featured: false
    },
    {
      id: 8,
      title: "Community Outreach Program Success - Impact Report",
      excerpt: "Our 2024 community outreach initiatives reached over 5,000 families, providing financial education and support for local development projects.",
      content: "Community development remains central to our cooperative values...",
      date: "December 25, 2024",
      author: "Community Relations",
      category: "Community",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800",
      featured: false
    }
  ];

  const filteredArticles = selectedCategory === "All" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredArticles = newsArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                News & Updates
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed with the latest developments, announcements, and financial insights 
                from TNT SACCO. Get updates on new services, community initiatives, and industry news.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white sticky top-16 z-40 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-green-600 hover:bg-green-700" 
                    : "border-green-600 text-green-600 hover:bg-green-50"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {selectedCategory === "All" && featuredArticles.length > 0 && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Stories</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="aspect-w-16 aspect-h-9">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
                          {article.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm space-x-4">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {article.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="flex items-center text-sm text-gray-500">
                          <User className="w-4 h-4 mr-1" />
                          {article.author}
                        </span>
                        <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50 p-0">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Articles */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {selectedCategory !== "All" && (
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {selectedCategory} News
              </h2>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {article.date}
                      </span>
                      <span className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {article.author}
                      </span>
                    </div>
                    
                    <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50 p-0 w-full justify-start">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">
                  No articles found in this category. Check back soon for updates!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Button className="bg-green-600 hover:bg-green-700">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default News;
