
import { Calendar, ArrowRight, TrendingUp, DollarSign, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const NewsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    { id: "All", name: "All News", icon: null, color: "bg-orange-600" },
    { id: "Economic Outlook", name: "Economic Outlook", icon: TrendingUp, color: "bg-blue-800" },
    { id: "Investment Opportunities", name: "Investment", icon: DollarSign, color: "bg-orange-600" },
    { id: "Member Empowerment", name: "Member Focus", icon: Users, color: "bg-green-600" },
    { id: "Innovation & Technology", name: "Innovation", icon: Zap, color: "bg-purple-600" },
  ];

  const news = [
    {
      id: 1,
      title: "Kenya's Economy Maintains 4.9% Growth in Q1 2025, Driven by Financial Services Boom",
      excerpt: "Kenya's economy demonstrated remarkable resilience with 4.9% GDP growth in the first quarter of 2025, matching previous year performance. The financial and insurance sector led the charge with 7.6% growth, while agriculture contributed 4.6%. This steady expansion creates favorable conditions for SACCO members seeking investment and loan opportunities.",
      date: "March 15, 2025",
      category: "Economic Outlook",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      cta: "Build your financial future with TNT SACCO's stable savings plans—designed to grow with Kenya's expanding economy.",
      readTime: "4 min read"
    },
    {
      id: 2,
      title: "Digital Revolution Empowers SACCOs: Kenya's 326 Licensed Institutions Serve 6.8M Members",
      excerpt: "With 85.2% internet penetration and 6.8 million SACCO members nationwide, Kenya's cooperative movement is leveraging digital transformation to reach underserved communities. Over 228 regulated SACCOs now offer mobile money integration, making financial services accessible to millions previously excluded from traditional banking.",
      date: "March 10, 2025",
      category: "Economic Outlook",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
      cta: "Experience digital banking convenience with TNT SACCO—access your account anytime, anywhere through our mobile platform.",
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "Agricultural Sector Growth of 4.6% Opens New Investment Channels for Forward-Thinking SACCOs",
      excerpt: "Kenya's agricultural sector, contributing 33% of GDP and employing 70% of rural population, presents untapped investment opportunities. With government support through subsidized inputs and export promotion, plus technological innovations like precision farming and AgriTech startups, agriculture offers 15-20% yield increases for investors.",
      date: "March 8, 2025",
      category: "Investment Opportunities",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800",
      cta: "Grow your wealth through agricultural investment—TNT SACCO's specialized agricultural loans help members capitalize on farming opportunities.",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Kenya's Tech Boom Creates Investment Goldmine: From $10.57B to $14.08B in Five Years",
      excerpt: "Kenya's technology sector is projected to grow from $10.57 billion in 2024 to $14.08 billion by 2029, driven by AI, cybersecurity, and fintech innovations. With M-PESA processing two-thirds of Kenya's GDP and Kenyan startups attracting $800 million in funding, the tech sector offers exceptional investment opportunities.",
      date: "March 5, 2025",
      category: "Investment Opportunities",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
      cta: "Invest in Kenya's digital future—TNT SACCO's technology investment packages help members participate in the tech boom safely.",
      readTime: "5 min read"
    },
    {
      id: 5,
      title: "Cooperative Relief: Government Settlement of Ksh 6.8B Debt Boosts Smallholder Farmers",
      excerpt: "The government's commitment to settle Ksh 6.8 billion in verified debts owed by coffee cooperative societies provides immediate relief to hundreds of smallholder farmers. Cabinet Secretary Wycliffe Oparanya's announcement demonstrates strong government support for the cooperative movement, improving financial stability for agricultural cooperatives.",
      date: "March 3, 2025",
      category: "Member Empowerment",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800",
      cta: "Join Kenya's supported cooperative movement—TNT SACCO membership connects you to government-backed financial stability.",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Kenya Leads Africa: 33% SACCO Penetration Rate Drives Financial Inclusion Success Story",
      excerpt: "Kenya achieves 33% SACCO penetration rate, ranking 11th globally and making it the only African country in the top fifteen. With 14 million cooperative members contributing 20% to national GDP, Kenya's cooperative model demonstrates how member-owned institutions can drive financial inclusion and economic empowerment.",
      date: "February 28, 2025",
      category: "Member Empowerment",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      cta: "Be part of Kenya's financial inclusion success—join TNT SACCO and benefit from proven cooperative excellence.",
      readTime: "6 min read"
    },
    {
      id: 7,
      title: "Digital Transformation: 228 SACCOs Now Offer Mobile Banking Through USSD Platforms",
      excerpt: "Mobile money integration has revolutionized SACCO operations, with 228 regulated institutions now offering USSD-based services. This digital shift enables 24/7 access to financial services, reduces transaction costs, and extends SACCO reach to remote areas. Members can now access loans, make deposits, and transfer funds using simple mobile phone commands.",
      date: "February 25, 2025",
      category: "Innovation & Technology",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
      cta: "Experience the future of banking—TNT SACCO's mobile platform puts financial services at your fingertips.",
      readTime: "5 min read"
    },
    {
      id: 8,
      title: "Precision Agriculture Revolution: Technology Boosts Farm Yields While Cutting Input Costs",
      excerpt: "Agricultural technology is transforming Kenyan farming, with precision agriculture delivering 15-20% yield increases and 10% input cost reductions. Drone monitoring, satellite irrigation, and mobile farm management apps are becoming standard practice. For SACCO members, AgriTech investments offer both agricultural efficiency and profitable business opportunities.",
      date: "February 20, 2025",
      category: "Innovation & Technology",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
      cta: "Modernize your farming operations—TNT SACCO's agricultural loans help members adopt productivity-boosting technologies.",
      readTime: "7 min read"
    }
  ];

  const filteredNews = selectedCategory === "All" 
    ? news 
    : news.filter(article => article.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const categoryColors = {
      "Economic Outlook": "bg-blue-100 text-blue-800 border-blue-200",
      "Investment Opportunities": "bg-orange-100 text-orange-800 border-orange-200",
      "Member Empowerment": "bg-green-100 text-green-800 border-green-200",
      "Innovation & Technology": "bg-purple-100 text-purple-800 border-purple-200"
    };
    return categoryColors[category as keyof typeof categoryColors] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <section id="news" className="bg-gradient-to-br from-orange-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Latest News & Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Stay informed about economic trends, investment opportunities, and cooperative sector developments
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg border border-orange-100 flex flex-wrap gap-1">
            {categories.map((category) => {
              const IconComponent = category.icon;
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

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredNews.map((article) => (
            <article 
              key={article.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Featured Image */}
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {article.date}
                  </div>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                {/* CTA Button */}
                <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium group-hover:shadow-md">
                  Read Full Article
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* No articles message */}
        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found in this category.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-orange-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated with TNT SACCO News
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss important updates about economic trends, 
            investment opportunities, and member benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <Button className="bg-orange-600 hover:bg-orange-700 px-6 py-3 font-medium">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
