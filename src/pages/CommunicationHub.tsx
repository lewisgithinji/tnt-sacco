
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowRight, Clock, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";

const CommunicationHub = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Financial", "Technology", "Community", "Announcements"];

  const newsArticles = [
    {
      id: 1,
      title: "Understanding Our Enhanced Credit Appraisal System",
      excerpt: "Learn about TNT SACCO's comprehensive new loan appraisal system that evaluates member creditworthiness through five key components including share capital, deposits, credit history, and savings patterns.",
      content: "Our enhanced credit appraisal system represents a significant improvement in how we assess loan applications. The new system moves beyond the simple share multiplier approach to a comprehensive evaluation that considers: Share Capital (10%), BOSA Deposits (25%), Credit History (30%), Debt-to-Savings Ratio (20%), and FOSA Deposits (15%). This approach aligns with our mission to promote a savings culture and responsible credit use for economic empowerment of our members.",
      date: "January 20, 2025",
      author: "Credit Department",
      category: "Financial",
      readTime: "5 min read",
      image: "/communication-hub/credit-appraisal-chart.png",
      featured: true
    },
    {
      id: 2,
      title: "Leveraging Technology for Enhanced Service Delivery",
      excerpt: "Discover how TNT SACCO is transforming member experience through USSD banking (*477#), the iTNT customer portal, Family Bank integration, and SWIFT network access for global transactions.",
      content: "To improve service delivery and customer experience, TNT SACCO has embraced technology in various ways. Our USSD service (*477#) provides instant access to account balances, mini statements, fund transfers, advances, and loan repayments. The new iTNT portal enables online member registration, guarantor sourcing, loan applications, and statement access. Our integration with Family Bank gives members access to the SWIFT network, enabling global transactions from any Family Bank branch worldwide.",
      date: "January 18, 2025",
      author: "IT Department",
      category: "Technology",
      readTime: "4 min read",
      image: "/communication-hub/tnt-news-technology.jpg",
      featured: true
    },
    {
      id: 3,
      title: "TNT Last Expense Insurance: Financial Protection for Your Family",
      excerpt: "Comprehensive funeral expense coverage with KES 200 monthly contribution. Benefit from loan waivers, deposit refunds (2x), and funeral riders up to KES 50,000 for principal members.",
      content: "The TNT Last Expense insurance policy provides financial support for funeral expenses, ensuring families can honor their loved ones without added financial burden. For just KES 200 monthly, members receive comprehensive coverage including: waiver of outstanding performing loans, 2x refund of member deposits, and funeral riders of KES 50,000 (principal member), KES 30,000 (spouse), and KES 10,000 (child). Coverage extends to one spouse and up to 4 children between 30 days and 18 years old (or 25 years if full-time student).",
      date: "January 15, 2025",
      author: "Insurance Department",
      category: "Community",
      readTime: "3 min read",
      image: "/communication-hub/tnt-news-insurance.jpg",
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
                Communication Hub
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your central source for important updates, service announcements, and member information 
                from TNT SACCO. Stay informed about new products, policies, and initiatives designed to serve you better.
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

export default CommunicationHub;
