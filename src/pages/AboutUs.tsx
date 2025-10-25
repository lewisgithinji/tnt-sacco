import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Shield, Users, TrendingUp, Award, Target, Heart, CheckCircle, ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// Counter Animation Component
const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-3xl font-bold text-navy">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

const AboutUs = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We uphold the highest standards of honesty, ethical conduct, and transparency in all our dealings with members, partners, and stakeholders.",
      color: "bg-navy/10 text-navy",
    },
    {
      icon: Users,
      title: "Team Work",
      description:
        "We foster collaboration and cooperation among our staff and members, working together towards shared goals and mutual success.",
      color: "bg-yellow/10 text-yellow",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description:
        "We prioritize member needs and satisfaction in everything we do, ensuring our services and products truly serve our community.",
      color: "bg-navy/10 text-navy",
    },
    {
      icon: Award,
      title: "Competence and Professionalism",
      description:
        "We maintain high standards of expertise and service delivery through continuous learning, skill development, and professional excellence.",
      color: "bg-yellow/10 text-yellow",
    },
    {
      icon: Target,
      title: "Equity",
      description:
        "We ensure fair treatment and equal opportunities for all members, upholding justice and impartiality in our policies and practices.",
      color: "bg-navy/10 text-navy",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "We embrace new technologies and creative solutions to continuously improve our services and meet the evolving needs of our members.",
      color: "bg-yellow/10 text-yellow",
    },
  ];

  const statistics = [
    { value: 10000, suffix: "+", label: "Active Members", icon: Users },
    { value: 2, suffix: "B+", prefix: "KSh ", label: "Assets Under Management", icon: Building2 },
    { value: 48, suffix: "+", label: "Years of Service", icon: Award },
    { value: 98, suffix: "%", label: "Member Satisfaction", icon: CheckCircle },
  ];

  const whyChooseUs = [
    "Licensed by SASRA (SACCO Societies Regulatory Authority)",
    "Insured by Kenya Deposit Insurance Corporation (KDIC)",
    "Member-owned and democratically governed",
    "Competitive loan rates and attractive dividend returns",
    "Flexible savings and loan products",
    "Modern digital banking platform",
    "Financial literacy and member education programs",
    "Personalized customer service",
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About Us - Your Trusted Financial Partner"
        description="Learn about TNT SACCO's 48+ year history of empowering 10,000+ Kenyan families and businesses with KSh 2B+ in assets. Discover our mission, vision, values, and commitment to member-focused financial services."
        canonical="https://www.tntsacco.co.ke/about-us"
        keywords="about TNT SACCO, SACCO history Kenya, member-owned cooperative, SASRA licensed SACCO, financial cooperative Kenya, TNT SACCO mission, community SACCO"
      />
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy/5 via-yellow/10 to-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">About TNT SACCO</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                TRANSNATIONAL TIMES DT SACCO LTD is a trusted deposit-taking financial cooperative dedicated to
                empowering Kenyan families and businesses with comprehensive financial services. We are your partner in
                building a secure financial future.
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
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    } else {
                      window.location.href = "/#contact";
                    }
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section - Enhanced with Animations */}
        <section className="py-16 bg-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy/5 via-transparent to-yellow/5 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <Card
                  key={index}
                  className="group text-center border-2 hover:border-navy/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
                  style={{
                    animation: `fadeIn 0.6s ease-out ${index * 0.1}s backwards`,
                  }}
                >
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-navy/10 to-yellow/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <stat.icon className="w-10 h-10 text-navy" />
                    </div>
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix || ""}
                      prefix={stat.prefix || ""}
                      duration={2500}
                    />
                    <div className="text-sm text-muted-foreground mt-2 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    For over 48 years, TNT SACCO has been a pillar of financial empowerment in Kenya. What started as a
                    modest cooperative has grown into a thriving financial institution serving over 10,000 active
                    members across the country.
                  </p>
                  <p className="leading-relaxed">
                    Our journey has been marked by steady growth, innovation, and an unwavering commitment to our
                    members. Today, we manage over KSh 2 billion in assets, providing a comprehensive range of financial
                    products and services designed to meet the diverse needs of our members.
                  </p>
                  <p className="leading-relaxed">
                    From humble beginnings, we have evolved into a modern, technology-driven SACCO while maintaining the
                    cooperative principles that define us: democratic governance, member ownership, and community focus.
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
                        Over 48 years of trusted financial services to the Kenyan community
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
                    To promote a savings culture and responsible credit use for economic empowerment of members.
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
                    To be a world class financial service provider.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values Section - Enhanced */}
        <section className="py-20 bg-gray-50 relative">
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
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-navy/20 overflow-hidden relative"
                  style={{
                    animation: `fadeIn 0.6s ease-out ${index * 0.1}s backwards`,
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-navy/0 to-yellow/0 group-hover:from-navy/5 group-hover:to-yellow/5 transition-all duration-500 pointer-events-none" />

                  <CardContent className="p-8 relative z-10">
                    <div
                      className={`inline-flex p-4 rounded-2xl ${value.color} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md`}
                    >
                      <value.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-4 group-hover:text-navy transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>

                    {/* Decorative element */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-navy/5 to-yellow/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                    We offer a variety of savings products tailored to different needs and life stages, from share
                    capital accounts to specialized savings plans for education, retirement, and wealth accumulation.
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
                    Access affordable credit facilities for various purposes including education, emergencies, asset
                    financing, and business development. We offer competitive rates and flexible repayment terms.
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
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
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
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Financial Journey?</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Join thousands of members who trust TNT SACCO for their financial needs. Experience the difference of a
              member-focused cooperative that puts your financial wellbeing first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90 font-semibold px-8">
                <Users className="w-5 h-5 mr-2" />
                Become a Member
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-navy px-8"
                onClick={() =>
                  window.open("https://itnt.tntsacco.co.ke:55556/fxt-portal/", "_blank", "noopener,noreferrer")
                }
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
