
import { Calendar, ArrowRight, TrendingUp, DollarSign, Users, Zap, X, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const NewsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=450&fit=crop&q=80", // Nairobi skyline
      cta: "Build your financial future with TNT SACCO's stable savings plans—designed to grow with Kenya's expanding economy.",
      readTime: "4 min read",
      fullContent: `
        <p>Kenya's economy has demonstrated remarkable resilience with a steady 4.9% GDP growth rate in the first quarter of 2025, matching the strong performance of the previous year. This consistent growth trajectory positions Kenya as one of East Africa's most stable economies, creating an ideal environment for SACCO members to pursue their financial goals.</p>
        
        <h3>Financial Services Lead the Charge</h3>
        <p>The financial and insurance sector emerged as the primary growth driver, registering an impressive 7.6% expansion. This growth reflects the increasing sophistication of Kenya's financial ecosystem, with SACCOs playing a crucial role in extending financial services to previously underserved populations.</p>
        
        <h3>Agricultural Resilience</h3>
        <p>Despite global challenges, Kenya's agricultural sector contributed a solid 4.6% to the overall growth. This performance underscores the potential for agricultural investments and the importance of supporting smallholder farmers through cooperative financial services.</p>
        
        <h3>Opportunities for SACCO Members</h3>
        <p>This economic stability creates favorable conditions for SACCO members seeking investment and loan opportunities. With controlled inflation and a stable currency, now is an ideal time to consider long-term savings plans and investment portfolios that can benefit from Kenya's sustained economic growth.</p>
        
        <p>TNT SACCO's diversified savings products are specifically designed to help members capitalize on these economic opportunities while providing the security and growth potential that comes with Kenya's expanding economy.</p>
      `
    },
    {
      id: 2,
      title: "Digital Revolution Empowers SACCOs: Kenya's 326 Licensed Institutions Serve 6.8M Members",
      excerpt: "With 85.2% internet penetration and 6.8 million SACCO members nationwide, Kenya's cooperative movement is leveraging digital transformation to reach underserved communities. Over 228 regulated SACCOs now offer mobile money integration, making financial services accessible to millions previously excluded from traditional banking.",
      date: "March 10, 2025",
      category: "Economic Outlook",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop&q=80", // Mobile banking
      cta: "Experience digital banking convenience with TNT SACCO—access your account anytime, anywhere through our mobile platform.",
      readTime: "5 min read",
      fullContent: `
        <p>Kenya's digital revolution has transformed the cooperative sector, with 326 licensed SACCO institutions now serving 6.8 million members nationwide. This represents a significant milestone in financial inclusion, with SACCOs at the forefront of bringing banking services to every corner of the country.</p>
        
        <h3>Internet Penetration Drives Access</h3>
        <p>With 85.2% internet penetration across Kenya, digital financial services have become more accessible than ever. This connectivity has enabled SACCOs to extend their reach beyond traditional branch networks, serving members in remote areas through mobile platforms and USSD services.</p>
        
        <h3>Mobile Money Integration Success</h3>
        <p>Over 228 regulated SACCOs now offer seamless mobile money integration, allowing members to access their accounts, make deposits, and transfer funds using simple mobile phone commands. This integration has been particularly transformative for rural communities, where traditional banking infrastructure may be limited.</p>
        
        <h3>Breaking Down Barriers</h3>
        <p>The digital transformation has made financial services accessible to millions previously excluded from traditional banking systems. SACCOs have become the bridge between formal financial services and underserved communities, promoting financial inclusion across all demographic groups.</p>
        
        <p>TNT SACCO's comprehensive mobile platform exemplifies this digital revolution, offering 24/7 account access, instant transfers, and real-time balance inquiries—all designed to make banking convenient and accessible for every member.</p>
      `
    },
    {
      id: 3,
      title: "Agricultural Sector Growth of 4.6% Opens New Investment Channels for Forward-Thinking SACCOs",
      excerpt: "Kenya's agricultural sector, contributing 33% of GDP and employing 70% of rural population, presents untapped investment opportunities. With government support through subsidized inputs and export promotion, plus technological innovations like precision farming and AgriTech startups, agriculture offers 15-20% yield increases for investors.",
      date: "March 8, 2025",
      category: "Investment Opportunities",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=450&fit=crop&q=80", // Modern agriculture/farming
      cta: "Grow your wealth through agricultural investment—TNT SACCO's specialized agricultural loans help members capitalize on farming opportunities.",
      readTime: "6 min read",
      fullContent: `
        <p>Kenya's agricultural sector has achieved impressive 4.6% growth, reinforcing its position as a cornerstone of the national economy. Contributing 33% of GDP and employing 70% of the rural population, agriculture presents significant untapped investment opportunities for forward-thinking SACCO members.</p>
        
        <h3>Government Support Strengthens the Sector</h3>
        <p>The government's commitment to agricultural development through subsidized inputs, export promotion programs, and infrastructure development has created a supportive environment for agricultural investments. These initiatives have reduced production costs and opened new markets for Kenyan agricultural products.</p>
        
        <h3>Technology Drives Innovation</h3>
        <p>Technological innovations including precision farming, AgriTech startups, and digital supply chain solutions are transforming traditional agriculture. These innovations offer 15-20% yield increases for farmers who adopt modern farming techniques and technologies.</p>
        
        <h3>Investment Opportunities Abound</h3>
        <p>From greenhouse farming and irrigation systems to agricultural processing and export businesses, the sector offers diverse investment channels. SACCO members can participate in these opportunities through specialized agricultural loans and investment products designed to support modern farming ventures.</p>
        
        <h3>Value Chain Development</h3>
        <p>The entire agricultural value chain—from input supply to processing and marketing—presents investment opportunities. Smart investors are positioning themselves across this chain to maximize returns while contributing to food security and rural development.</p>
        
        <p>TNT SACCO's agricultural investment packages are specifically designed to help members participate in this growing sector, offering competitive rates and flexible terms that align with agricultural cycles and market demands.</p>
      `
    },
    {
      id: 4,
      title: "Kenya's Tech Boom Creates Investment Goldmine: From $10.57B to $14.08B in Five Years",
      excerpt: "Kenya's technology sector is projected to grow from $10.57 billion in 2024 to $14.08 billion by 2029, driven by AI, cybersecurity, and fintech innovations. With M-PESA processing two-thirds of Kenya's GDP and Kenyan startups attracting $800 million in funding, the tech sector offers exceptional investment opportunities.",
      date: "March 5, 2025",
      category: "Investment Opportunities",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop&q=80", // Tech startup/innovation
      cta: "Invest in Kenya's digital future—TNT SACCO's technology investment packages help members participate in the tech boom safely.",
      readTime: "5 min read",
      fullContent: `
        <p>Kenya's technology sector is experiencing unprecedented growth, projected to expand from $10.57 billion in 2024 to $14.08 billion by 2029. This remarkable trajectory represents a compound annual growth rate that outpaces most traditional investment sectors, creating exceptional opportunities for SACCO members.</p>
        
        <h3>Fintech Leads the Revolution</h3>
        <p>M-PESA's dominance in processing two-thirds of Kenya's GDP demonstrates the country's fintech leadership in Africa. This success has attracted international attention and investment, positioning Kenya as the continent's fintech hub and creating numerous investment opportunities in the digital payments ecosystem.</p>
        
        <h3>Startup Ecosystem Thrives</h3>
        <p>Kenyan startups have attracted over $800 million in funding, reflecting strong investor confidence in the local innovation ecosystem. From AI-powered solutions to cybersecurity platforms, Kenyan entrepreneurs are developing technologies that serve both local and international markets.</p>
        
        <h3>Emerging Technologies Drive Growth</h3>
        <p>Artificial intelligence, cybersecurity, blockchain technology, and IoT solutions are driving the next wave of growth. These technologies are being applied across various sectors, from agriculture and healthcare to financial services and logistics, creating diverse investment opportunities.</p>
        
        <h3>Investment Landscape</h3>
        <p>The tech sector offers multiple investment avenues, including direct startup investments, technology-focused funds, and infrastructure development projects. For SACCO members, this represents an opportunity to diversify portfolios while participating in Kenya's digital transformation.</p>
        
        <p>TNT SACCO's technology investment packages provide members with carefully curated opportunities to participate in this boom, offering professional due diligence and risk management to ensure safe participation in high-growth technology ventures.</p>
      `
    },
    {
      id: 5,
      title: "Cooperative Relief: Government Settlement of Ksh 6.8B Debt Boosts Smallholder Farmers",
      excerpt: "The government's commitment to settle Ksh 6.8 billion in verified debts owed by coffee cooperative societies provides immediate relief to hundreds of smallholder farmers. Cabinet Secretary Wycliffe Oparanya's announcement demonstrates strong government support for the cooperative movement, improving financial stability for agricultural cooperatives.",
      date: "March 3, 2025",
      category: "Member Empowerment",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=450&fit=crop&q=80", // Coffee farming/farmers
      cta: "Join Kenya's supported cooperative movement—TNT SACCO membership connects you to government-backed financial stability.",
      readTime: "4 min read",
      fullContent: `
        <p>The government's historic commitment to settle Ksh 6.8 billion in verified debts owed by coffee cooperative societies marks a turning point for smallholder farmers across Kenya. Cabinet Secretary Wycliffe Oparanya's announcement represents the strongest government support for the cooperative movement in recent years.</p>
        
        <h3>Immediate Relief for Farmers</h3>
        <p>This debt settlement provides immediate financial relief to hundreds of smallholder coffee farmers who have been waiting for payments from their cooperative societies. The initiative addresses historical debts that have constrained farmer cash flows and limited their ability to invest in improved farming practices.</p>
        
        <h3>Government Commitment to Cooperatives</h3>
        <p>The debt settlement demonstrates the government's recognition of cooperatives as vital economic institutions. This support strengthens the cooperative model and provides confidence for members and potential investors in the sector's long-term stability.</p>
        
        <h3>Strengthening Agricultural Cooperatives</h3>
        <p>By clearing these debts, the government has improved the financial stability of agricultural cooperatives, enabling them to better serve their members and attract new participants. This stability creates a foundation for growth and expansion in the cooperative sector.</p>
        
        <h3>Broader Implications</h3>
        <p>This government support extends beyond coffee cooperatives, signaling a commitment to the entire cooperative movement. SACCOs and other cooperative institutions benefit from this demonstration of government backing, which enhances member confidence and institutional stability.</p>
        
        <p>TNT SACCO membership connects you to this government-supported cooperative movement, providing access to financial services backed by institutional stability and regulatory support that ensures member protection and sustainable growth.</p>
      `
    },
    {
      id: 6,
      title: "Kenya Leads Africa: 33% SACCO Penetration Rate Drives Financial Inclusion Success Story",
      excerpt: "Kenya achieves 33% SACCO penetration rate, ranking 11th globally and making it the only African country in the top fifteen. With 14 million cooperative members contributing 20% to national GDP, Kenya's cooperative model demonstrates how member-owned institutions can drive financial inclusion and economic empowerment.",
      date: "February 28, 2025",
      category: "Member Empowerment",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop&q=80", // Group of people/community
      cta: "Be part of Kenya's financial inclusion success—join TNT SACCO and benefit from proven cooperative excellence.",
      readTime: "6 min read",
      fullContent: `
        <p>Kenya has achieved a remarkable 33% SACCO penetration rate, ranking 11th globally and standing as the only African country in the top fifteen. This achievement represents more than statistics—it demonstrates the power of the cooperative model to drive financial inclusion and economic empowerment.</p>
        
        <h3>Global Recognition</h3>
        <p>Kenya's 11th place global ranking puts it ahead of many developed countries in cooperative participation. This recognition reflects the country's innovative approach to cooperative financial services and the strong regulatory framework that supports the sector's growth.</p>
        
        <h3>Massive Economic Impact</h3>
        <p>With 14 million cooperative members contributing 20% to national GDP, the cooperative movement has become a significant economic force. This contribution spans multiple sectors, from agriculture and manufacturing to services and finance, demonstrating the versatility and impact of the cooperative model.</p>
        
        <h3>Financial Inclusion Success</h3>
        <p>The high penetration rate represents successful financial inclusion, with SACCOs reaching populations traditionally underserved by conventional banks. This success has created a model that other African countries are now studying and attempting to replicate.</p>
        
        <h3>Member-Owned Advantage</h3>
        <p>The cooperative model's success stems from its member-owned structure, which aligns institutional interests with member needs. This alignment creates better products, competitive rates, and stronger community connections than traditional banking models.</p>
        
        <h3>Sustainable Growth Path</h3>
        <p>Kenya's cooperative success provides a sustainable path for continued economic growth and financial inclusion. The model's scalability and adaptability ensure it can continue serving Kenya's evolving financial needs.</p>
        
        <p>TNT SACCO represents the best of Kenya's cooperative excellence, offering members access to this proven model of financial inclusion and economic empowerment that has made Kenya a global leader in cooperative financial services.</p>
      `
    },
    {
      id: 7,
      title: "Digital Transformation: 228 SACCOs Now Offer Mobile Banking Through USSD Platforms",
      excerpt: "Mobile money integration has revolutionized SACCO operations, with 228 regulated institutions now offering USSD-based services. This digital shift enables 24/7 access to financial services, reduces transaction costs, and extends SACCO reach to remote areas. Members can now access loans, make deposits, and transfer funds using simple mobile phone commands.",
      date: "February 25, 2025",
      category: "Innovation & Technology",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=450&fit=crop&q=80", // Mobile phone banking
      cta: "Experience the future of banking—TNT SACCO's mobile platform puts financial services at your fingertips.",
      readTime: "5 min read",
      fullContent: `
        <p>The digital transformation of Kenya's SACCO sector has reached a new milestone with 228 regulated institutions now offering comprehensive mobile banking through USSD platforms. This revolutionary shift has fundamentally changed how members interact with their financial institutions, making banking services more accessible and convenient than ever before.</p>
        
        <h3>24/7 Financial Access</h3>
        <p>Mobile money integration has eliminated the constraints of traditional banking hours and physical locations. Members can now access their accounts, check balances, and perform transactions at any time, from anywhere in the country, using simple mobile phone commands.</p>
        
        <h3>Reduced Transaction Costs</h3>
        <p>Digital platforms have significantly reduced transaction costs for both SACCOs and their members. Lower operational costs translate to better rates and reduced fees, making financial services more affordable and accessible to all economic segments.</p>
        
        <h3>Extended Reach to Remote Areas</h3>
        <p>USSD-based services have extended SACCO reach to remote areas where physical branch presence was previously uneconomical. This expansion has brought formal financial services to rural communities, promoting financial inclusion across geographical boundaries.</p>
        
        <h3>Comprehensive Service Portfolio</h3>
        <p>Through mobile platforms, members can access loans, make deposits, transfer funds, pay bills, and even apply for new financial products. This comprehensive service portfolio rivals traditional banking while maintaining the cooperative's member-focused approach.</p>
        
        <h3>Security and Reliability</h3>
        <p>Modern mobile banking platforms incorporate advanced security features including encryption, multi-factor authentication, and real-time fraud monitoring, ensuring that convenience doesn't compromise security.</p>
        
        <p>TNT SACCO's cutting-edge mobile platform exemplifies this digital transformation, offering members a seamless, secure, and comprehensive mobile banking experience that puts complete financial control at their fingertips.</p>
      `
    },
    {
      id: 8,
      title: "Precision Agriculture Revolution: Technology Boosts Farm Yields While Cutting Input Costs",
      excerpt: "Agricultural technology is transforming Kenyan farming, with precision agriculture delivering 15-20% yield increases and 10% input cost reductions. Drone monitoring, satellite irrigation, and mobile farm management apps are becoming standard practice. For SACCO members, AgriTech investments offer both agricultural efficiency and profitable business opportunities.",
      date: "February 20, 2025",
      category: "Innovation & Technology",
      image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800&h=450&fit=crop&q=80", // Drone over agricultural field
      cta: "Modernize your farming operations—TNT SACCO's agricultural loans help members adopt productivity-boosting technologies.",
      readTime: "7 min read",
      fullContent: `
        <p>Kenya's agricultural sector is experiencing a technological revolution, with precision agriculture techniques delivering remarkable results: 15-20% yield increases and 10% input cost reductions. This transformation is making farming more profitable and sustainable while creating new investment opportunities for forward-thinking SACCO members.</p>
        
        <h3>Drone Technology Takes Flight</h3>
        <p>Drone monitoring has become increasingly common on Kenyan farms, providing farmers with detailed aerial insights into crop health, irrigation needs, and pest management. These unmanned systems can survey large areas quickly and identify problems before they become widespread, enabling proactive farm management.</p>
        
        <h3>Satellite-Guided Irrigation</h3>
        <p>Satellite irrigation systems are optimizing water usage across the country's farms. By precisely targeting water delivery based on real-time soil moisture data and weather forecasts, farmers are reducing water waste while ensuring optimal crop hydration.</p>
        
        <h3>Mobile Farm Management</h3>
        <p>Mobile applications have put sophisticated farm management tools into the hands of smallholder farmers. These apps help with everything from planting schedules and fertilizer application to market price tracking and weather monitoring, democratizing access to agricultural expertise.</p>
        
        <h3>Data-Driven Decision Making</h3>
        <p>Precision agriculture generates vast amounts of data that farmers can use to make informed decisions about planting, harvesting, and resource allocation. This data-driven approach is replacing traditional guesswork with scientific precision.</p>
        
        <h3>Investment Opportunities</h3>
        <p>For SACCO members, AgriTech represents both operational efficiency for those in farming and profitable investment opportunities in the growing agricultural technology sector. Equipment financing, technology startups, and agricultural service businesses all present attractive investment prospects.</p>
        
        <p>TNT SACCO's specialized agricultural loans are designed to help members adopt these productivity-boosting technologies, offering flexible terms that align with agricultural cycles and the return-on-investment timelines of modern farming equipment.</p>
      `
    }
  ];

  const openArticle = (article: any) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

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
                <button 
                  onClick={() => openArticle(article)}
                  className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium group-hover:shadow-md"
                >
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
        
        {/* Article Modal */}
        {isModalOpen && selectedArticle && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start">
                <div className="flex-1">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border mb-3 ${getCategoryColor(selectedArticle.category)}`}>
                    {selectedArticle.category}
                  </span>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {selectedArticle.title}
                  </h1>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{selectedArticle.date}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Featured Image */}
              <div className="px-6">
                <div className="aspect-video rounded-xl overflow-hidden mb-6">
                  <img 
                    src={selectedArticle.image} 
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Article Content */}
              <div className="px-6 pb-6">
                <div 
                  className="prose prose-lg max-w-none mb-8 text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.fullContent || selectedArticle.excerpt }}
                />

                {/* CTA Section */}
                <div className="mt-8 p-6 bg-orange-50 rounded-xl border border-orange-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Take Action Today</h3>
                  <p className="text-gray-600 mb-4">{selectedArticle.cta}</p>
                  <div className="flex gap-3">
                    <Button className="bg-orange-600 hover:bg-orange-700 px-6 py-2 font-medium">
                      Get Started
                    </Button>
                    <Button variant="outline" onClick={closeModal} className="px-6 py-2">
                      Continue Reading
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
