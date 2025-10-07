import { useParams, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

// Article data with full content
const articlesData = {
  "kenya-economy-growth-q1-2025": {
    id: 1,
    title: "Kenya's Economy Maintains 4.9% Growth in Q1 2025, Driven by Financial Services Boom",
    slug: "kenya-economy-growth-q1-2025",
    excerpt: "Kenya's economy demonstrated remarkable resilience with 4.9% GDP growth in the first quarter of 2025, matching previous year performance. The financial and insurance sector led the charge with 7.6% growth, while agriculture contributed 4.6%.",
    category: "Economic Outlook",
    date: "March 15, 2025",
    author: "TNT SACCO Research Team",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop",
    featured: true,
    fullContent: `Kenya's economy has demonstrated remarkable resilience in the first quarter of 2025, maintaining a steady 4.9% GDP growth rate that matches the robust performance of the previous year. This consistency in economic expansion reflects the country's strengthening fundamentals and diversified growth drivers across multiple sectors.

The financial and insurance sector emerged as the standout performer, recording an impressive 7.6% growth rate during the quarter. This exceptional performance underscores the critical role that financial institutions, including SACCOs, play in Kenya's economic ecosystem. The sector's growth has been fueled by increased digital adoption, expanded financial inclusion initiatives, and innovative product offerings that have reached previously underserved populations.

Agricultural sector performance remained solid with a 4.6% contribution to overall growth, despite facing challenges from climate variability and changing rainfall patterns. The sector's resilience demonstrates the effectiveness of government support programs, improved farming techniques, and the adoption of climate-smart agricultural practices by smallholder farmers across the country.

Manufacturing and industrial production contributed significantly to the quarter's growth, with increased local production capacity and import substitution strategies yielding positive results. The government's focus on value addition and local content development has created new opportunities for businesses and employment generation.

The services sector, including information and communication technology, continued its upward trajectory, supported by Kenya's position as a regional hub for digital innovation and financial technology. Mobile money services, e-commerce platforms, and digital lending solutions have expanded rapidly, creating new economic opportunities.

For SACCO members and the broader cooperative movement, this economic stability creates an enabling environment for growth and expansion. Stable economic conditions facilitate better planning for long-term investments, improved loan performance, and increased member confidence in saving and investment products.

The consistent growth trajectory also signals positive conditions for various investment opportunities, from agricultural ventures to technology startups, providing SACCO members with diverse options for wealth creation and financial growth.`,
    cta: "Build your financial future with TNT SACCO's stable savings plans—designed to grow with Kenya's expanding economy.",
    ctaLink: "/deposit-products"
  },
  "digital-revolution-saccos-kenya": {
    id: 2,
    title: "Digital Revolution Empowers SACCOs: Kenya's 326 Licensed Institutions Serve 6.8M Members",
    slug: "digital-revolution-saccos-kenya",
    excerpt: "With 85.2% internet penetration and 6.8 million SACCO members nationwide, Kenya's cooperative movement is leveraging digital transformation to reach underserved communities.",
    category: "Economic Outlook", 
    date: "March 10, 2025",
    author: "Digital Banking Team",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    featured: false,
    fullContent: `Kenya's cooperative movement has undergone a remarkable digital transformation, positioning the country as a leader in financial technology adoption across Africa. With 326 licensed SACCO institutions now serving over 6.8 million members, the sector has embraced digital innovation to extend financial services to previously underserved communities.

The digital revolution within Kenya's SACCO sector has been facilitated by the country's impressive 85.2% internet penetration rate, which provides the infrastructure foundation necessary for widespread adoption of digital financial services. This connectivity has enabled SACCOs to deploy mobile banking platforms, online loan applications, and digital payment systems that serve members across urban and rural areas.

Over 228 regulated SACCOs have integrated mobile money services into their operations, allowing members to access their accounts, make deposits, transfer funds, and apply for loans using simple USSD codes or mobile applications. This integration has eliminated geographical barriers that previously limited access to SACCO services, particularly for members in remote rural areas.

The adoption of digital platforms has also enhanced operational efficiency within SACCO institutions. Automated processes for loan applications, approval workflows, and disbursements have reduced processing times from weeks to hours in many cases. Digital record-keeping systems have improved data accuracy and regulatory compliance while reducing operational costs.

Mobile money integration has been particularly transformative, with SACCOs leveraging platforms like M-PESA, Airtel Money, and T-Kash to facilitate seamless transactions. Members can now deposit funds, repay loans, and receive disbursements through their mobile money wallets, creating a truly integrated financial ecosystem.

The digital transformation has also enabled SACCOs to develop innovative products and services. Digital micro-lending platforms allow for quick assessment and approval of small loans based on transaction history and digital footprints. Mobile savings products with automated contribution features help members build disciplined saving habits.

For TNT SACCO members, this digital revolution means 24/7 access to financial services, reduced transaction costs, and convenient banking from any location. The integration of digital platforms has also enhanced transparency and real-time access to account information, empowering members to make informed financial decisions.`,
    cta: "Experience digital banking convenience with TNT SACCO—access your account anytime, anywhere through our mobile platform.",
    ctaLink: "/ussd-banking"
  },
  "agricultural-investment-opportunities": {
    id: 3,
    title: "Agricultural Sector Growth of 4.6% Opens New Investment Channels for Forward-Thinking SACCOs",
    slug: "agricultural-investment-opportunities",
    excerpt: "Kenya's agricultural sector, contributing 33% of GDP and employing 70% of rural population, presents untapped investment opportunities with government support and technological innovations.",
    category: "Investment Opportunities",
    date: "March 8, 2025", 
    author: "Investment Advisory Team",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=500&fit=crop",
    featured: true,
    fullContent: `Kenya's agricultural sector continues to demonstrate its pivotal role in the national economy, contributing 33% of GDP and providing employment for approximately 70% of the rural population. The sector's recent 4.6% growth rate signals robust opportunities for investment and development, particularly for SACCO members and cooperative institutions looking to diversify their investment portfolios.

The agricultural sector's growth has been supported by comprehensive government initiatives, including subsidized input programs that reduce production costs for smallholder farmers. The government's commitment to agricultural development includes improved seed varieties, fertilizer subsidies, and extension services that have increased productivity across various crops.

Export promotion initiatives have opened new international markets for Kenyan agricultural products, creating additional revenue streams for farmers and agribusiness investors. The development of value addition facilities and cold storage infrastructure has reduced post-harvest losses while increasing the market value of agricultural produce.

Technological innovations are revolutionizing Kenyan agriculture, with precision farming techniques delivering 15-20% yield increases while reducing input costs by up to 10%. These technologies include GPS-guided tractors, soil sensors that optimize fertilizer application, and weather monitoring systems that help farmers make informed planting and harvesting decisions.

AgriTech startups are introducing digital platforms that connect farmers directly to markets, eliminating intermediaries and increasing profit margins. Mobile applications provide real-time market prices, weather forecasts, and agricultural advice, empowering farmers to make better production and marketing decisions.

The emergence of climate-smart agriculture practices is helping farmers adapt to changing weather patterns while maintaining productivity. Drought-resistant crop varieties, water-efficient irrigation systems, and sustainable farming practices are becoming standard across many regions.

For SACCO members, agricultural investments offer multiple opportunities. Direct farm investments through cooperative farming groups can provide steady returns, while investments in agricultural processing and value addition create higher-margin opportunities. Equipment financing for agricultural machinery and technology adoption represents another growing investment area.

The sector's growth also creates opportunities in related industries, including agricultural inputs, transportation, storage, and processing facilities. These complementary investments can provide diversified exposure to agricultural growth while reducing risks associated with direct farming operations.

Contract farming arrangements between SACCOs and agricultural cooperatives provide structured investment opportunities with predictable returns. These arrangements often include guaranteed purchase agreements that reduce market risks while providing stable income streams for both farmers and investors.`,
    cta: "Grow your wealth through agricultural investment—TNT SACCO's specialized agricultural loans help members capitalize on farming opportunities.",
    ctaLink: "/loan-products"
  },
  "kenya-tech-boom-investment": {
    id: 4,
    title: "Kenya's Tech Boom Creates Investment Goldmine: From $10.57B to $14.08B in Five Years",
    slug: "kenya-tech-boom-investment",
    excerpt: "Kenya's technology sector is projected to grow from $10.57 billion in 2024 to $14.08 billion by 2029, driven by AI, cybersecurity, and fintech innovations.",
    category: "Investment Opportunities",
    date: "March 5, 2025",
    author: "Technology Investment Team", 
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    featured: false,
    fullContent: `Kenya's technology sector is experiencing unprecedented growth, with projections indicating expansion from $10.57 billion in 2024 to $14.08 billion by 2029. This remarkable trajectory positions Kenya as a leading technology hub in Africa and creates exceptional investment opportunities for forward-thinking SACCOs and their members.

The growth is being driven by several key technological innovations, including artificial intelligence, cybersecurity solutions, and financial technology platforms. Kenyan tech companies are developing cutting-edge solutions that serve both local and international markets, creating scalable business models with significant growth potential.

Artificial intelligence and machine learning applications are finding widespread adoption across various sectors, from agricultural optimization to financial services automation. Kenyan AI startups are developing solutions for crop monitoring, disease detection, and yield prediction, while fintech companies are using AI for credit scoring and fraud detection.

The cybersecurity sector is experiencing rapid expansion as businesses and government institutions invest in digital security infrastructure. Kenyan cybersecurity firms are developing solutions that protect against emerging threats while ensuring compliance with international security standards.

Financial technology continues to be a major growth driver, building on Kenya's success with mobile money platforms. The country processes two-thirds of its GDP through M-PESA alone, demonstrating the massive scale of digital financial transactions. New fintech innovations include blockchain-based payment systems, cryptocurrency platforms, and advanced lending algorithms.

Kenyan startups attracted over $800 million in funding during the past year, reflecting strong investor confidence in the sector's growth potential. This funding has supported the development of innovative solutions across multiple sectors, including healthcare technology, educational platforms, and e-commerce solutions.

The government's support for technology development through initiatives like the Konza Technopolis project and various tax incentives for tech companies has created an enabling environment for growth. Digital literacy programs and technology incubation centers are developing the skilled workforce needed to support continued expansion.

For SACCO members, technology investments offer opportunities to participate in high-growth sectors through various investment vehicles. Technology-focused investment funds, direct equity investments in promising startups, and partnerships with established tech companies provide different risk and return profiles to suit various investment preferences.

The sector's growth also creates employment opportunities in high-skill, high-wage jobs, benefiting SACCO members through improved earning potential and loan repayment capacity. Technology adoption within SACCOs themselves has improved operational efficiency and member services while reducing costs.

Investment in technology infrastructure, including data centers, telecommunications equipment, and software platforms, provides exposure to the sector's growth while supporting the broader digital economy development.`,
    cta: "Invest in Kenya's digital future—TNT SACCO's technology investment packages help members participate in the tech boom safely.",
    ctaLink: "/investment-products"
  },
  "cooperative-relief-government-support": {
    id: 5,
    title: "Cooperative Relief: Government Settlement of Ksh 6.8B Debt Boosts Smallholder Farmers",
    slug: "cooperative-relief-government-support", 
    excerpt: "The government's commitment to settle Ksh 6.8 billion in verified debts owed by coffee cooperative societies provides immediate relief to hundreds of smallholder farmers.",
    category: "Member Empowerment",
    date: "March 3, 2025",
    author: "Cooperative Development Team",
    readTime: "5 min read", 
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&h=500&fit=crop",
    featured: false,
    fullContent: `The Kenyan government's commitment to settle Ksh 6.8 billion in verified debts owed by coffee cooperative societies represents a significant milestone in supporting the country's cooperative movement and providing immediate relief to hundreds of smallholder farmers who have long awaited payment for their coffee deliveries.

Cabinet Secretary Wycliffe Oparanya's announcement demonstrates the government's strong support for the cooperative movement and recognition of its critical role in Kenya's agricultural economy. This debt settlement will provide immediate financial relief to coffee farmers who have faced economic hardships due to delayed payments for their produce.

The debt settlement initiative addresses historical payment delays that have undermined farmer confidence in the cooperative system and limited their ability to invest in improved farming practices. With prompt payment assured, farmers can now plan their agricultural activities more effectively and invest in productivity-enhancing technologies.

The relief extends beyond individual farmers to strengthen the entire coffee value chain. Cooperative societies will be able to restore their financial stability, rebuild trust with members, and implement better management practices. This stability is crucial for maintaining Kenya's position as a producer of high-quality coffee in international markets.

The government's intervention also includes measures to prevent future payment delays through improved oversight of cooperative society operations and enhanced financial management systems. These structural improvements will ensure sustainable operations and protect farmer interests in the long term.

For the broader cooperative movement, this government support signals recognition of cooperatives' importance in Kenya's development agenda. The settlement demonstrates that cooperatives are valued partners in national economic development and can expect government support when facing systemic challenges.

The debt relief will have multiplier effects throughout rural communities, as farmers use their payments to invest in household needs, children's education, and agricultural improvements. This injection of liquidity into rural economies will stimulate local business activity and support community development.

Coffee cooperative societies can now focus on core activities like quality improvement, market development, and member services rather than managing debt burdens. This renewed focus will help Kenya maintain its competitive position in global coffee markets while ensuring fair returns to farmers.

The settlement also provides a model for addressing similar challenges in other agricultural cooperative sectors, demonstrating the government's commitment to supporting cooperative development across various commodities and regions.

For TNT SACCO members involved in agricultural activities, this government support for cooperatives provides confidence in the cooperative model and demonstrates the value of collective action in addressing industry-wide challenges.`,
    cta: "Join Kenya's supported cooperative movement—TNT SACCO membership connects you to government-backed financial stability.",
    ctaLink: "/membership"
  },
  "kenya-leads-africa-sacco-penetration": {
    id: 6,
    title: "Kenya Leads Africa: 33% SACCO Penetration Rate Drives Financial Inclusion Success Story", 
    slug: "kenya-leads-africa-sacco-penetration",
    excerpt: "Kenya achieves 33% SACCO penetration rate, ranking 11th globally and making it the only African country in the top fifteen cooperative nations worldwide.",
    category: "Member Empowerment",
    date: "February 28, 2025",
    author: "Financial Inclusion Research Team",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=500&fit=crop", 
    featured: true,
    fullContent: `Kenya has achieved a remarkable 33% SACCO penetration rate, positioning the country as the 11th globally and making it the only African nation to rank among the top fifteen countries with the highest cooperative membership rates worldwide. This achievement represents a significant milestone in financial inclusion and demonstrates the effectiveness of the cooperative model in serving Kenya's diverse population.

With 14 million cooperative members contributing approximately 20% to the national GDP, Kenya's cooperative movement has become a cornerstone of the country's economic development strategy. The high penetration rate reflects the trust and confidence that Kenyan citizens place in member-owned financial institutions and their ability to meet diverse financial needs.

The success of Kenya's cooperative movement can be attributed to several factors, including supportive government policies, strong regulatory frameworks, and the adaptability of cooperative institutions to changing member needs. SACCOs have evolved from simple savings and credit societies to comprehensive financial service providers offering diverse products and services.

Financial inclusion has been significantly enhanced through the cooperative movement, with SACCOs serving populations that traditional banks often find unprofitable to serve. Rural communities, small-scale entrepreneurs, and low-income households have gained access to formal financial services through SACCO membership, contributing to poverty reduction and economic empowerment.

The cooperative movement's success has also been facilitated by strong member education programs that promote financial literacy and responsible financial management. These educational initiatives have helped members make informed financial decisions and maximize the benefits of cooperative membership.

Innovation within the cooperative sector has kept pace with technological developments, with many SACCOs adopting digital platforms, mobile banking services, and automated systems that improve service delivery and operational efficiency. This technological adoption has made SACCO services more accessible and convenient for members.

The regulatory environment has played a crucial role in maintaining public confidence in SACCOs through effective oversight by SASRA (SACCO Societies Regulatory Authority). Strong regulatory standards ensure that SACCOs operate safely and soundly while protecting member interests and deposits.

Kenya's cooperative model has become a template for other African countries seeking to improve financial inclusion and economic empowerment. The success has attracted international attention and support for cooperative development initiatives across the continent.

The high penetration rate also demonstrates the effectiveness of the cooperative principle of mutual self-help, where members pool resources to access financial services at competitive rates while sharing in the benefits through dividends and improved services.

For TNT SACCO, being part of this successful cooperative movement provides members with confidence in the stability and effectiveness of the cooperative model. The strong national performance of SACCOs validates the choice to join and actively participate in cooperative financial services.

The cooperative movement's contribution to GDP underscores its economic importance and demonstrates that member-owned institutions can compete effectively with traditional financial service providers while maintaining their commitment to member welfare and community development.`,
    cta: "Be part of Kenya's financial inclusion success—join TNT SACCO and benefit from proven cooperative excellence.",
    ctaLink: "/membership"
  },
  "digital-transformation-ussd-platforms": {
    id: 7,
    title: "Digital Transformation: 228 SACCOs Now Offer Mobile Banking Through USSD Platforms",
    slug: "digital-transformation-ussd-platforms",
    excerpt: "Mobile money integration has revolutionized SACCO operations, with 228 regulated institutions now offering USSD-based services for 24/7 access to financial services.",
    category: "Innovation & Technology",
    date: "February 25, 2025",
    author: "Digital Innovation Team", 
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    featured: false,
    fullContent: `The digital transformation of Kenya's SACCO sector has reached a significant milestone with 228 regulated institutions now offering comprehensive mobile banking services through USSD platforms. This widespread adoption of digital technology has revolutionized how members access financial services and has positioned Kenya's cooperative movement at the forefront of financial innovation in Africa.

USSD (Unstructured Supplementary Service Data) technology has been particularly effective in the Kenyan context because it works on all mobile phones, including basic feature phones that are still widely used, especially in rural areas. This inclusive approach ensures that all SACCO members can access digital services regardless of their phone type or internet connectivity.

The integration of USSD platforms with SACCO operations enables members to perform a wide range of transactions using simple mobile phone commands. Basic services include account balance inquiries, mini-statements, and transaction history, while more advanced features allow for fund transfers, loan applications, and even investment transactions.

Mobile money integration has been a game-changer, allowing seamless movement of funds between SACCO accounts and mobile money wallets. Members can deposit funds into their SACCO accounts directly from their M-PESA, Airtel Money, or other mobile money accounts, eliminating the need to visit physical branches for routine transactions.

The 24/7 accessibility provided by USSD platforms has dramatically improved member satisfaction and engagement. Members can now access their accounts, make transactions, and receive services at any time, from any location with mobile network coverage. This convenience has been particularly valuable for members in remote areas who previously had to travel long distances to access SACCO services.

Transaction costs have been significantly reduced through digital channels, with USSD transactions typically costing a fraction of traditional branch-based services. These cost savings benefit both SACCOs, through reduced operational expenses, and members, through lower transaction fees and improved service efficiency.

The digital shift has also enhanced security and transparency in SACCO operations. Digital transactions create automatic audit trails, reducing opportunities for fraud while improving regulatory compliance. Members receive instant SMS confirmations for all transactions, providing real-time account monitoring capabilities.

Loan processing has been revolutionized through digital platforms, with many SACCOs now offering instant loan approvals and disbursements through USSD platforms. Automated credit scoring systems analyze member transaction history and savings patterns to make quick lending decisions, reducing loan processing time from days to minutes.

The digital transformation has enabled SACCOs to expand their reach beyond their traditional geographical boundaries. Members can now access services regardless of their location, and SACCOs can serve diaspora communities and mobile populations more effectively.

For TNT SACCO members, the availability of comprehensive USSD banking services means unparalleled convenience and accessibility. Whether checking account balances during business hours, transferring funds for emergencies, or making loan payments while traveling, digital platforms provide the flexibility modern life demands.`,
    cta: "Experience the future of banking—TNT SACCO's mobile platform puts financial services at your fingertips.",
    ctaLink: "/ussd-banking"
  },
  "precision-agriculture-technology-revolution": {
    id: 8,
    title: "Precision Agriculture Revolution: Technology Boosts Farm Yields While Cutting Input Costs",
    slug: "precision-agriculture-technology-revolution", 
    excerpt: "Agricultural technology is transforming Kenyan farming, with precision agriculture delivering 15-20% yield increases and 10% input cost reductions through drone monitoring and satellite irrigation.",
    category: "Innovation & Technology",
    date: "February 20, 2025",
    author: "AgriTech Research Team",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=500&fit=crop",
    featured: true,
    fullContent: `The precision agriculture revolution is transforming Kenyan farming practices, delivering remarkable results with 15-20% yield increases and 10% input cost reductions through the strategic deployment of advanced technologies including drone monitoring, satellite irrigation systems, and comprehensive mobile farm management applications.

Drone technology has emerged as a game-changing tool for Kenyan farmers, providing unprecedented visibility into crop health, pest infestations, and irrigation needs. High-resolution cameras and specialized sensors mounted on drones can detect plant stress, nutrient deficiencies, and disease outbreaks weeks before they become visible to the human eye, enabling proactive management decisions that prevent yield losses.

Satellite-based irrigation systems are revolutionizing water management in Kenyan agriculture, particularly important given the country's variable rainfall patterns and increasing climate unpredictability. These systems use real-time soil moisture data, weather forecasts, and crop growth models to optimize irrigation scheduling, ensuring crops receive precise amounts of water at optimal times.

Mobile farm management applications are putting sophisticated agricultural knowledge directly into farmers' hands through smartphone technology. These apps provide real-time weather information, market prices, crop management advice, and connection to agricultural extension services. Farmers can track input applications, monitor crop growth stages, and receive alerts about optimal planting and harvesting times.

GPS-guided tractors and precision planting equipment are enabling exact seed placement, fertilizer application, and field mapping. This precision reduces seed waste, optimizes fertilizer use, and creates detailed field records that help farmers make data-driven decisions for future seasons.

Soil sensors provide continuous monitoring of soil conditions, including moisture content, nutrient levels, and pH measurements. This real-time data enables farmers to apply fertilizers and amendments only when and where needed, reducing input costs while maintaining or improving crop productivity.

The integration of weather monitoring systems with farm management platforms allows farmers to make informed decisions about planting, spraying, and harvesting based on accurate, localized weather forecasts. This timing optimization can significantly impact crop quality and yield while reducing losses from weather-related risks.

Precision agriculture technologies are particularly beneficial for smallholder farmers who make up the majority of Kenya's agricultural sector. Cooperative farming groups and agricultural SACCOs can pool resources to access expensive technologies like drones and GPS equipment, making precision agriculture accessible to small-scale producers.

The economic impact of precision agriculture extends beyond individual farms to create new business opportunities in agricultural technology services, equipment leasing, and data analysis services. These emerging sectors provide investment opportunities for SACCOs and their members while supporting agricultural modernization.

Training and education programs are crucial for successful technology adoption, with agricultural extension services, NGOs, and private companies providing farmer education on precision agriculture techniques. This knowledge transfer ensures that technology investments deliver maximum returns and sustainable benefits.

For SACCO members involved in agriculture, precision agriculture represents both an opportunity to improve their own farming operations and an investment opportunity in the growing AgriTech sector. Equipment financing, technology service businesses, and agricultural data companies all represent potential investment areas within this growing sector.

The environmental benefits of precision agriculture, including reduced chemical inputs, improved water efficiency, and soil conservation, align with sustainable development goals while improving farm profitability and long-term productivity.`,
    cta: "Modernize your farming operations—TNT SACCO's agricultural loans help members adopt productivity-boosting technologies.",
    ctaLink: "/loan-products"
  }
};

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !articlesData[slug as keyof typeof articlesData]) {
    return <Navigate to="/not-found" replace />;
  }

  const article = articlesData[slug as keyof typeof articlesData];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Economic Outlook":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Investment Opportunities":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Member Empowerment":
        return "bg-green-100 text-green-800 border-green-200";
      case "Innovation & Technology":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back navigation */}
          <div className="mb-8">
            <Link
              to="/communication-hub"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Communication Hub
            </Link>
          </div>

          {/* Article header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(article.category)}`}>
                <Tag className="h-3 w-3" />
                {article.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </div>
              <div>By {article.author}</div>
            </div>
          </header>

          {/* Featured image */}
          <div className="mb-8">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Article content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {article.fullContent}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl p-6 border border-orange-200 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Take Action Today</h3>
                <p className="text-gray-700">{article.cta}</p>
              </div>
              <Link to={article.ctaLink}>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors font-medium inline-flex items-center gap-2">
                  Get Started
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Related articles */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Continue Reading</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.values(articlesData)
                .filter(a => a.slug !== slug && a.category === article.category)
                .slice(0, 2)
                .map((relatedArticle) => (
                <Link
                  key={relatedArticle.slug}
                  to={`/communication-hub/${relatedArticle.slug}`}
                  className="block p-4 rounded-lg border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all"
                >
                  <h4 className="font-medium text-gray-900 mb-2 line-clamp-2">
                    {relatedArticle.title}
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {relatedArticle.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;