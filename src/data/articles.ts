// Centralized article data for Communication Hub and Homepage
// All articles used across the TNT SACCO portal

export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  author?: string;
  featured?: boolean;
  cta?: string;
  fullContent: string;
}

export const categories = [
  { id: "All", name: "All News", icon: null, color: "bg-primary" },
  { id: "Economic Outlook", name: "Economic Outlook", icon: "TrendingUp", color: "bg-blue-600" },
  { id: "Investment Opportunities", name: "Investment", icon: "DollarSign", color: "bg-orange-600" },
  { id: "Member Empowerment", name: "Member Focus", icon: "Users", color: "bg-green-600" },
  { id: "Innovation & Technology", name: "Innovation", icon: "Zap", color: "bg-purple-600" },
  { id: "Financial", name: "Financial", icon: "Wallet", color: "bg-indigo-600" },
  { id: "Community", name: "Community", icon: "Heart", color: "bg-pink-600" },
  { id: "Announcements", name: "Announcements", icon: "Megaphone", color: "bg-yellow-600" },
];

export const articles: Article[] = [
  // Economic & Investment News Articles
  {
    id: 1,
    title: "Kenya's Economy Maintains 4.9% Growth in Q1 2025, Driven by Financial Services Boom",
    slug: "kenya-economy-growth-q1-2025",
    excerpt: "Kenya's economy demonstrated remarkable resilience with 4.9% GDP growth in the first quarter of 2025, matching previous year performance. The financial and insurance sector led the charge with 7.6% growth, while agriculture contributed 4.6%. This steady expansion creates favorable conditions for SACCO members seeking investment and loan opportunities.",
    date: "March 15, 2025",
    category: "Economic Outlook",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=450&fit=crop&q=80",
    cta: "Build your financial future with TNT SACCO's stable savings plans—designed to grow with Kenya's expanding economy.",
    readTime: "4 min read",
    featured: true,
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
    slug: "digital-revolution-saccos-kenya",
    excerpt: "With 85.2% internet penetration and 6.8 million SACCO members nationwide, Kenya's cooperative movement is leveraging digital transformation to reach underserved communities. Over 228 regulated SACCOs now offer mobile money integration, making financial services accessible to millions previously excluded from traditional banking.",
    date: "March 10, 2025",
    category: "Economic Outlook",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop&q=80",
    cta: "Experience digital banking convenience with TNT SACCO—access your account anytime, anywhere through our mobile platform.",
    readTime: "5 min read",
    featured: true,
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
    slug: "agricultural-investment-opportunities",
    excerpt: "Kenya's agricultural sector, contributing 33% of GDP and employing 70% of rural population, presents untapped investment opportunities. With government support through subsidized inputs and export promotion, plus technological innovations like precision farming and AgriTech startups, agriculture offers 15-20% yield increases for investors.",
    date: "March 8, 2025",
    category: "Investment Opportunities",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=450&fit=crop&q=80",
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
    slug: "kenya-tech-boom-investment",
    excerpt: "Kenya's technology sector is projected to grow from $10.57 billion in 2024 to $14.08 billion by 2029, driven by AI, cybersecurity, and fintech innovations. With M-PESA processing two-thirds of Kenya's GDP and Kenyan startups attracting $800 million in funding, the tech sector offers exceptional investment opportunities.",
    date: "March 5, 2025",
    category: "Investment Opportunities",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop&q=80",
    cta: "Invest in Kenya's digital future—TNT SACCO's technology investment packages help members participate in the tech boom safely.",
    readTime: "5 min read",
    featured: true,
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
    slug: "cooperative-relief-government-support",
    excerpt: "The government's commitment to settle Ksh 6.8 billion in verified debts owed by coffee cooperative societies provides immediate relief to hundreds of smallholder farmers. Cabinet Secretary Wycliffe Oparanya's announcement demonstrates strong government support for the cooperative movement, improving financial stability for agricultural cooperatives.",
    date: "March 3, 2025",
    category: "Member Empowerment",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=450&fit=crop&q=80",
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
    slug: "kenya-leads-africa-sacco-penetration",
    excerpt: "Kenya achieves 33% SACCO penetration rate, ranking 11th globally and making it the only African country in the top fifteen. With 14 million cooperative members contributing 20% to national GDP, Kenya's cooperative model demonstrates how member-owned institutions can drive financial inclusion and economic empowerment.",
    date: "February 28, 2025",
    category: "Member Empowerment",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop&q=80",
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
    slug: "digital-transformation-ussd-platforms",
    excerpt: "Mobile money integration has revolutionized SACCO operations, with 228 regulated institutions now offering USSD-based services. This digital shift enables 24/7 access to financial services, reduces transaction costs, and extends SACCO reach to remote areas. Members can now access loans, make deposits, and transfer funds using simple mobile phone commands.",
    date: "February 25, 2025",
    category: "Innovation & Technology",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=450&fit=crop&q=80",
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
    slug: "precision-agriculture-technology-revolution",
    excerpt: "Agricultural technology is transforming Kenyan farming, with precision agriculture delivering 15-20% yield increases and 10% input cost reductions. Drone monitoring, satellite irrigation, and mobile farm management apps are becoming standard practice. For SACCO members, AgriTech investments offer both agricultural efficiency and profitable business opportunities.",
    date: "February 20, 2025",
    category: "Innovation & Technology",
    image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800&h=450&fit=crop&q=80",
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
  },

  // Internal SACCO Communication Articles
  {
    id: 9,
    title: "Understanding Our Enhanced Credit Appraisal System",
    slug: "enhanced-credit-appraisal-system",
    excerpt: "Learn about TNT SACCO's comprehensive new loan appraisal system that evaluates member creditworthiness through five key components including share capital, deposits, credit history, and savings patterns.",
    date: "January 20, 2025",
    author: "Credit Department",
    category: "Financial",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=450&fit=crop&q=80",
    featured: false,
    fullContent: `
      <p>Our enhanced credit appraisal system represents a significant improvement in how we assess loan applications. The new system moves beyond the simple share multiplier approach to a comprehensive evaluation that considers multiple factors to ensure fair and responsible lending.</p>

      <h3>Five Key Components</h3>

      <h4>1. Share Capital (10%)</h4>
      <p>Your share capital demonstrates your commitment to the SACCO and serves as the foundation of your membership. While important, it's now just one part of our comprehensive assessment.</p>

      <h4>2. BOSA Deposits (25%)</h4>
      <p>Your non-withdrawable savings in BOSA accounts show your ability to save consistently and build financial reserves. This is the most heavily weighted factor in our new system.</p>

      <h4>3. Credit History (30%)</h4>
      <p>Your track record of loan repayment is crucial. We look at your payment consistency, any defaults or late payments, and your overall credit discipline. A strong credit history significantly boosts your loan eligibility.</p>

      <h4>4. Debt-to-Savings Ratio (20%)</h4>
      <p>We assess your current debt obligations relative to your savings. This ensures we don't over-extend credit and that you can comfortably manage your loan repayments alongside your other financial commitments.</p>

      <h4>5. FOSA Deposits (15%)</h4>
      <p>Your withdrawable savings and regular deposit patterns demonstrate financial discipline and provide additional security for loan repayment.</p>

      <h3>Benefits of the New System</h3>
      <ul>
        <li><strong>Fairer Assessment:</strong> Multiple factors ensure a more accurate picture of creditworthiness</li>
        <li><strong>Rewards Good Behavior:</strong> Consistent saving and timely repayment significantly improve loan eligibility</li>
        <li><strong>Promotes Financial Health:</strong> Encourages members to maintain healthy financial habits</li>
        <li><strong>Responsible Lending:</strong> Reduces risk of over-indebtedness</li>
      </ul>

      <h3>What This Means for You</h3>
      <p>To maximize your loan eligibility under the new system:</p>
      <ul>
        <li>Build your BOSA deposits through regular contributions</li>
        <li>Maintain an excellent credit history by paying loans on time</li>
        <li>Keep your debt levels manageable relative to your savings</li>
        <li>Maintain active FOSA deposits to demonstrate financial discipline</li>
      </ul>

      <p>This approach aligns with our mission to promote a savings culture and responsible credit use for the economic empowerment of our members. For questions about how the new system applies to your account, please contact our Credit Department.</p>
    `
  },
  {
    id: 10,
    title: "Leveraging Technology for Enhanced Service Delivery",
    slug: "technology-enhanced-service-delivery",
    excerpt: "Discover how TNT SACCO is transforming member experience through USSD banking (*477#), the iTNT customer portal, Family Bank integration, and SWIFT network access for global transactions.",
    date: "January 18, 2025",
    author: "IT Department",
    category: "Innovation & Technology",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&q=80",
    featured: true,
    fullContent: `
      <p>To improve service delivery and customer experience, TNT SACCO has embraced technology in various ways. Our digital transformation initiative is designed to make banking more convenient, accessible, and efficient for all members.</p>

      <h3>USSD Banking Service (*477#)</h3>
      <p>Our mobile USSD service provides instant access to your account 24/7, no internet required. Simply dial <strong>*477#</strong> from your registered mobile number to access:</p>
      <ul>
        <li><strong>Account Balances:</strong> Check all your account balances instantly</li>
        <li><strong>Mini Statements:</strong> View recent transactions across your accounts</li>
        <li><strong>Fund Transfers:</strong> Transfer money between your accounts or to other members</li>
        <li><strong>Instant Advances:</strong> Apply for emergency advances when you need them</li>
        <li><strong>Loan Repayments:</strong> Make loan payments directly from your phone</li>
        <li><strong>Airtime Purchase:</strong> Buy airtime for yourself or others</li>
      </ul>

      <h3>iTNT Customer Portal</h3>
      <p>The new iTNT web portal brings comprehensive banking to your computer or smartphone browser. Access the portal at <a href="https://itnt.tntsacco.co.ke">itnt.tntsacco.co.ke</a> to:</p>
      <ul>
        <li><strong>Online Registration:</strong> New members can register and submit documentation digitally</li>
        <li><strong>Guarantor Sourcing:</strong> Request and manage loan guarantors electronically</li>
        <li><strong>Loan Applications:</strong> Apply for loans online with instant status tracking</li>
        <li><strong>Statement Access:</strong> Download detailed account statements anytime</li>
        <li><strong>Document Management:</strong> Upload and manage your KYC documents securely</li>
        <li><strong>Communication:</strong> Direct messaging with SACCO staff</li>
      </ul>

      <h3>Family Bank Integration</h3>
      <p>Our strategic partnership with Family Bank extends your banking capabilities globally:</p>
      <ul>
        <li><strong>SWIFT Network Access:</strong> Send and receive international payments</li>
        <li><strong>Global ATM Access:</strong> Withdraw cash at Family Bank branches worldwide</li>
        <li><strong>Foreign Exchange:</strong> Access competitive forex rates</li>
        <li><strong>International Transfers:</strong> Send money to family and business partners abroad</li>
      </ul>

      <h3>Mobile App (Coming Soon)</h3>
      <p>We're developing a comprehensive mobile application that will combine all these services in one convenient platform, with additional features including:</p>
      <ul>
        <li>Biometric authentication for enhanced security</li>
        <li>Push notifications for transaction alerts</li>
        <li>QR code payments and receipts</li>
        <li>Personal financial management tools</li>
      </ul>

      <h3>Getting Started</h3>
      <p>To activate your digital banking services:</p>
      <ol>
        <li>Visit any TNT SACCO branch with your ID</li>
        <li>Register your mobile number for USSD banking</li>
        <li>Receive your iTNT portal credentials</li>
        <li>Download the user guide or attend our digital banking training sessions</li>
      </ol>

      <p>For technical support, contact our IT Helpdesk at <a href="mailto:ithelpdesk@tntsacco.co.ke">ithelpdesk@tntsacco.co.ke</a> or call our support line during business hours.</p>
    `
  },
  {
    id: 11,
    title: "Tender Notice: Prequalification of Borehole Drilling Contractors",
    slug: "tender-prequalification-borehole-drilling",
    excerpt: "Trans-National Times DT SACCO Limited invites applications from interested, eligible, and qualified firms for prequalification to undertake borehole drilling, testing, installation of submersible pumps, and related works. Closing date: November 22, 2025.",
    date: "November 6, 2025",
    author: "Procurement Department",
    category: "Announcements",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=800&h=450&fit=crop&q=80",
    featured: false,
    cta: "Download tender documents and submit your application before November 22, 2025.",
    fullContent: `
      <p>Trans-National Times DT SACCO Limited is pleased to announce the opening of prequalification for borehole drilling contractors. This tender presents an opportunity for qualified firms with proven experience in water resource development and borehole construction projects to participate in our upcoming water infrastructure development initiative.</p>

      <h3>Tender Information</h3>
      <ul>
        <li><strong>Tender Reference:</strong> TNT/SACCO/TENDER/2025/001</li>
        <li><strong>Category:</strong> Construction & Infrastructure</li>
        <li><strong>Publication Date:</strong> November 6, 2025</li>
        <li><strong>Closing Date:</strong> November 22, 2025</li>
        <li><strong>Status:</strong> Open</li>
      </ul>

      <h3>Scope of Work</h3>
      <p>The prequalification is open to contractors with proven experience in the following areas:</p>
      <ul>
        <li>Borehole drilling and exploration</li>
        <li>Borehole testing and assessment</li>
        <li>Installation of submersible pumps</li>
        <li>Water quality testing and treatment</li>
        <li>Related water infrastructure works</li>
      </ul>

      <h3>Eligibility Criteria</h3>
      <p>Interested firms must meet the following minimum requirements:</p>
      <ul>
        <li><strong>Registration:</strong> Must be a registered company/firm in Kenya with valid business registration documents</li>
        <li><strong>Experience:</strong> Minimum 5 years demonstrated experience in borehole drilling and related works</li>
        <li><strong>Tax Compliance:</strong> Valid Tax Compliance Certificate from KRA</li>
        <li><strong>Incorporation:</strong> Certificate of Registration/Incorporation</li>
        <li><strong>Financial Capability:</strong> Proof of financial capability and access to credit facilities</li>
        <li><strong>References:</strong> Evidence of completed similar projects (at least 3 references)</li>
        <li><strong>Personnel:</strong> Qualified and experienced technical personnel</li>
        <li><strong>Equipment:</strong> Appropriate drilling equipment and machinery</li>
        <li><strong>Licenses:</strong> Valid licenses and permits for borehole drilling operations</li>
      </ul>

      <h3>Estimated Value</h3>
      <p>The estimated value will be determined based on project scope and specifications. Detailed information will be provided in the tender documents.</p>

      <h3>How to Apply</h3>
      <ol>
        <li><strong>Download Documents:</strong> Download the complete prequalification document from our <a href="/tenders">Tenders page</a></li>
        <li><strong>Review Requirements:</strong> Carefully review all eligibility criteria and submission requirements</li>
        <li><strong>Prepare Application:</strong> Compile all required documents and information as specified in the tender document</li>
        <li><strong>Submit Application:</strong> Submit your application in a sealed envelope clearly marked with the tender reference number</li>
      </ol>

      <h3>Submission Guidelines</h3>
      <ul>
        <li>All tender documents must be submitted before the closing date and time specified</li>
        <li>Submissions should be made in sealed envelopes clearly marked with the tender reference number: <strong>TNT/SACCO/TENDER/2025/001</strong></li>
        <li>Late submissions will not be accepted under any circumstances</li>
        <li>Only prequalified firms will be invited to participate in the main tender process</li>
      </ul>

      <h3>Important Dates</h3>
      <table>
        <tr>
          <td><strong>Publication Date</strong></td>
          <td>November 6, 2025</td>
        </tr>
        <tr>
          <td><strong>Closing Date</strong></td>
          <td>November 22, 2025</td>
        </tr>
        <tr>
          <td><strong>Days Remaining</strong></td>
          <td>16 days</td>
        </tr>
      </table>

      <h3>Contact Information</h3>
      <p>For inquiries or clarifications regarding this tender, please contact:</p>
      <p><strong>Procurement Office</strong><br>
      Email: <a href="mailto:procurement@tntsacco.co.ke">procurement@tntsacco.co.ke</a><br>
      Phone: +254 111 050 510<br>
      Office: Trans-National Times DT SACCO Limited, Teachers Plaza, Ground Floor, Kitale</p>

      <h3>Transparency and Fairness</h3>
      <p>TNT SACCO is committed to transparent and competitive procurement processes. All applications will be evaluated fairly based on the stated eligibility criteria. We encourage all qualified firms to submit their applications.</p>

      <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
        <p class="font-semibold text-yellow-800">⏰ Time-Sensitive Notice</p>
        <p class="text-yellow-700">This tender closes on November 22, 2025. Ensure you download the complete tender documents and submit your application well before the deadline.</p>
      </div>

      <p class="text-center mt-8">
        <a href="/tenders" class="inline-block bg-navy text-white px-8 py-3 rounded-lg hover:bg-navy/90 transition-colors font-semibold">
          View Full Tender Details & Download Documents
        </a>
      </p>
    `
  },
  {
    id: 12,
    title: "TNT Last Expense Insurance: Financial Protection for Your Family",
    slug: "tnt-last-expense-insurance",
    excerpt: "Comprehensive funeral expense coverage with KES 200 monthly contribution. Benefit from loan waivers, deposit refunds (2x), and funeral riders up to KES 50,000 for principal members.",
    date: "January 15, 2025",
    author: "Insurance Department",
    category: "Community",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=450&fit=crop&q=80",
    featured: false,
    fullContent: `
      <p>The TNT Last Expense insurance policy provides financial support for funeral expenses, ensuring families can honor their loved ones without added financial burden. This comprehensive coverage gives you and your family peace of mind during difficult times.</p>

      <h3>Coverage Benefits</h3>

      <h4>For Principal Member (You)</h4>
      <ul>
        <li><strong>Funeral Rider:</strong> KES 50,000 for funeral expenses</li>
        <li><strong>Loan Waiver:</strong> All outstanding performing loans are waived</li>
        <li><strong>Deposit Refund:</strong> 2x your total member deposits returned to beneficiaries</li>
      </ul>

      <h4>For Your Spouse</h4>
      <ul>
        <li><strong>Funeral Rider:</strong> KES 30,000 for funeral expenses</li>
        <li><strong>Additional Support:</strong> Access to grief counseling services</li>
      </ul>

      <h4>For Your Children</h4>
      <ul>
        <li><strong>Funeral Rider:</strong> KES 10,000 per child</li>
        <li><strong>Coverage:</strong> Up to 4 children between 30 days and 18 years old</li>
        <li><strong>Extended Coverage:</strong> Coverage extends to age 25 for full-time students</li>
      </ul>

      <h3>Premium and Payment</h3>
      <p><strong>Monthly Contribution:</strong> Only KES 200 per month</p>
      <p><strong>Payment Method:</strong> Automatic deduction from your FOSA account</p>
      <p><strong>No Hidden Fees:</strong> No additional charges or processing fees</p>

      <h3>Eligibility Requirements</h3>
      <ul>
        <li>Must be an active TNT SACCO member in good standing</li>
        <li>Age limit: 18-65 years at enrollment</li>
        <li>Must have an active FOSA account for premium deductions</li>
        <li>Spouse must be legally married (marriage certificate required)</li>
      </ul>

      <h3>Claims Process</h3>
      <p>We've streamlined our claims process to ensure quick disbursement during your time of need:</p>
      <ol>
        <li><strong>Notification:</strong> Family members notify the SACCO within 48 hours</li>
        <li><strong>Documentation:</strong> Submit death certificate and claim form</li>
        <li><strong>Verification:</strong> SACCO verifies coverage and policy status</li>
        <li><strong>Disbursement:</strong> Funds released within 3 working days</li>
      </ol>

      <h3>Additional Features</h3>

      <h4>Loan Protection</h4>
      <p>The loan waiver benefit ensures that your family doesn't inherit debt. All outstanding performing loans are automatically cleared upon your passing, and your deposits are refunded in full.</p>

      <h4>Grief Support Services</h4>
      <p>All covered families have access to:</p>
      <ul>
        <li>Professional grief counseling</li>
        <li>Funeral planning assistance</li>
        <li>Financial guidance for beneficiaries</li>
        <li>Connection to support groups</li>
      </ul>

      <h3>Why Choose TNT Last Expense Insurance?</h3>
      <ul>
        <li><strong>Affordable:</strong> Just KES 200/month for comprehensive family coverage</li>
        <li><strong>Comprehensive:</strong> Covers you, spouse, and up to 4 children</li>
        <li><strong>No Hassles:</strong> Automatic premium deduction, no paperwork</li>
        <li><strong>Quick Claims:</strong> Fast processing during difficult times</li>
        <li><strong>Member Benefit:</strong> Exclusive to TNT SACCO members</li>
      </ul>

      <h3>How to Enroll</h3>
      <ol>
        <li>Visit any TNT SACCO branch</li>
        <li>Complete the insurance enrollment form</li>
        <li>Provide required documents (ID, marriage certificate, children's birth certificates)</li>
        <li>Authorize automatic premium deduction</li>
        <li>Receive your insurance certificate within 7 days</li>
      </ol>

      <p>For more information or to enroll, contact our Insurance Department at <a href="mailto:insurance@tntsacco.co.ke">insurance@tntsacco.co.ke</a> or visit any branch. Protect your family's future today.</p>
    `
  }
];

// Helper function to get articles by category
export const getArticlesByCategory = (category: string): Article[] => {
  if (category === "All") return articles;
  return articles.filter(article => article.category === category);
};

// Helper function to get featured articles
export const getFeaturedArticles = (): Article[] => {
  return articles.filter(article => article.featured);
};

// Helper function to get article by slug
export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

// Helper function to get recent articles
export const getRecentArticles = (limit: number = 5): Article[] => {
  return articles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

// Helper function to get related articles
export const getRelatedArticles = (currentArticle: Article, limit: number = 3): Article[] => {
  return articles
    .filter(article =>
      article.id !== currentArticle.id &&
      article.category === currentArticle.category
    )
    .slice(0, limit);
};
