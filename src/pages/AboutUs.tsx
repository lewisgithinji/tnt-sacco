import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Users, TrendingUp, Award, Target, Heart, CheckCircle, ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const values = [
    {
      icon: Shield,
      title: "Secure & Licensed",
      description: "Registered under the Co-operative Act and licensed by SASRA. We are insured by Kenya Deposit Insurance Corporation, ensuring your deposits are protected.",
      color: "bg-navy/10 text-navy"
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Owned and governed by our members for our members. Every decision we make prioritizes the welfare and growth of our cooperative community.",
      color: "bg-yellow/10 text-yellow"
    },
    {
      icon: TrendingUp,
      title: "Competitive Returns",
      description: "We offer attractive annual dividends on your savings and competitive interest rates on loans, maximizing value for our members.",
      color: "bg-navy/10 text-navy"
    },
    {
      icon: Award,
      title: "Transparency",
      description: "We maintain open communication with our members, providing clear information about all our services, fees, and performance.",
      color: "bg-yellow/10 text-yellow"
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously invest in technology and modern banking solutions to provide convenient, efficient services to our members.",
      color: "bg-navy/10 text-navy"
    },
    {
      icon: Heart,
      title: "Member-Centric",
      description: "Every product and service we offer is designed with our members' needs and financial wellbeing at the forefront.",
      color: "bg-yellow/10 text-yellow"
    }
  ];

  const statistics = [
    { value: "10,000+", label: "Active Members", icon: Users },
    { value: "KSh 2B+", label: "Assets Under Management", icon: Building2 },
    { value: "15+", label: "Years of Service", icon: Award },
    { value: "98%", label: "Member Satisfaction", icon: CheckCircle }
  ];

  const whyChooseUs = [
    "Licensed by SASRA (SACCO Societies Regulatory Authority)",
    "Insured by Kenya Deposit Insurance Corporation (KDIC)",
    "Member-owned and democratically governed",
    "Competitive loan rates and attractive dividend returns",
    "Flexible savings and loan products",
    "Modern digital banking platform",
    "Financial literacy and member education programs",
    "Personalized customer service"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy/5 via-yellow/10 to-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                About TNT SACCO
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                TRANSNATIONAL TIMES DT SACCO LTD is a trusted deposit-taking financial cooperative
                dedicated to empowering Kenyan families and businesses with comprehensive financial services.
                We are your partner in building a secure financial future.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Become a Member
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#contact';
                    }
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <Card key={index} className="text-center border-2 hover:border-navy/20 transition-all hover:shadow-lg">
                  <CardContent className="p-8">
                    <stat.icon className="w-12 h-12 text-navy mx-auto mb-4" />
                    <div className="text-3xl font-bold text-navy mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    For over 15 years, TNT SACCO has been a pillar of financial empowerment in Kenya.
                    What started as a modest cooperative has grown into a thriving financial institution
                    serving over 10,000 active members across the country.
                  </p>
                  <p className="leading-relaxed">
                    Our journey has been marked by steady growth, innovation, and an unwavering commitment
                    to our members. Today, we manage over KSh 2 billion in assets, providing a comprehensive
                    range of financial products and services designed to meet the diverse needs of our members.
                  </p>
                  <p className="leading-relaxed">
                    From humble beginnings, we have evolved into a modern, technology-driven SACCO while
                    maintaining the cooperative principles that define us: democratic governance, member
                    ownership, and community focus.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-navy/10 p-3 rounded-full flex-shrink-0">
                      <Award className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Established Excellence</h3>
                      <p className="text-sm text-muted-foreground">
                        Over 15 years of trusted financial services to the Kenyan community
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow/10 p-3 rounded-full flex-shrink-0">
                      <Users className="w-6 h-6 text-yellow" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Growing Community</h3>
                      <p className="text-sm text-muted-foreground">
                        A thriving cooperative of 10,000+ members working together for mutual benefit
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-navy/10 p-3 rounded-full flex-shrink-0">
                      <Building2 className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Strong Foundation</h3>
                      <p className="text-sm text-muted-foreground">
                        Managing over KSh 2 billion in assets with prudent financial management
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-navy to-navy/90 text-white border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-white/90 leading-relaxed text-lg">
                    To empower Kenyan citizens and businesses with comprehensive, accessible, and
                    affordable financial services, fostering economic growth and financial security
                    for all our members.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow to-yellow/90 text-white border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-white/90 leading-relaxed text-lg">
                    To be the leading SACCO in Kenya, recognized for innovation, member satisfaction,
                    and providing transformative financial solutions that uplift communities and
                    create lasting prosperity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do and every decision we make
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-border"
                >
                  <CardContent className="p-8">
                    <div className={`inline-flex p-4 rounded-2xl ${value.color} mb-6 group-hover:scale-110 transition-all duration-300`}>
                      <value.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">What We Do</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive financial services designed to meet your needs at every stage of life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-xl transition-shadow border-2 hover:border-navy/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Savings & Deposits</h3>
                  <p className="text-muted-foreground mb-6">
                    We offer a variety of savings products tailored to different needs and life stages,
                    from share capital accounts to specialized savings plans for education, retirement,
                    and wealth accumulation.
                  </p>
                  <Link to="/deposit-products">
                    <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                      Explore Deposit Products
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow border-2 hover:border-navy/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Loans & Credit</h3>
                  <p className="text-muted-foreground mb-6">
                    Access affordable credit facilities for various purposes including education,
                    emergencies, asset financing, and business development. We offer competitive
                    rates and flexible repayment terms.
                  </p>
                  <Link to="/loan-products">
                    <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                      Explore Loan Products
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-navy/5 via-yellow/5 to-background border-2 border-navy/10">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-navy font-semibold mb-2">Salary Processing</div>
                    <p className="text-sm text-muted-foreground">Efficient payroll services</p>
                  </div>
                  <div className="text-center">
                    <div className="text-navy font-semibold mb-2">Pension Processing</div>
                    <p className="text-sm text-muted-foreground">Retirement management</p>
                  </div>
                  <div className="text-center">
                    <div className="text-navy font-semibold mb-2">Money Transfer</div>
                    <p className="text-sm text-muted-foreground">Fast & secure transfers</p>
                  </div>
                  <div className="text-center">
                    <div className="text-navy font-semibold mb-2">Financial Literacy</div>
                    <p className="text-sm text-muted-foreground">Educational programs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose TNT SACCO?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We combine the best of cooperative principles with modern banking technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-navy" />
                  </div>
                  <p className="text-foreground font-medium">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-br from-navy to-navy/90 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Financial Journey?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Join thousands of members who trust TNT SACCO for their financial needs.
              Experience the difference of a member-focused cooperative that puts your
              financial wellbeing first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yellow text-navy hover:bg-yellow/90 font-semibold px-8"
              >
                <Users className="w-5 h-5 mr-2" />
                Become a Member
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-navy px-8"
                onClick={() => window.open("https://itnt.tntsacco.co.ke:55556/fxt-portal/", "_blank", "noopener,noreferrer")}
              >
                Members Portal
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
