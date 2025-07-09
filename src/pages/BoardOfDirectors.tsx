
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Users, Award, Building, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BoardOfDirectors = () => {
  const boardMembers = [
    {
      name: "Dr. Margaret Nyambura",
      position: "Chairperson",
      image: "https://images.unsplash.com/photo-1559209172-f84cdacf134d?w=400",
      experience: "15+ years in cooperative governance",
      background: "Former CEO of a leading microfinance institution with extensive experience in financial services and cooperative development.",
      tenure: "2019 - Present",
      expertise: ["Strategic Planning", "Corporate Governance", "Risk Management"]
    },
    {
      name: "John Kihara",
      position: "Vice Chairperson",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      experience: "12+ years in banking sector",
      background: "Senior banking executive with deep knowledge in credit management and financial planning, bringing valuable industry insights to the board.",
      tenure: "2020 - Present",
      expertise: ["Credit Management", "Financial Planning", "Banking Operations"]
    },
    {
      name: "Agnes Wambui",
      position: "Secretary",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400",
      experience: "10+ years in legal practice",
      background: "Practicing advocate with specialization in corporate law and regulatory compliance, ensuring TNT SACCO maintains the highest legal standards.",
      tenure: "2021 - Present",
      expertise: ["Corporate Law", "Regulatory Compliance", "Governance"]
    },
    {
      name: "Paul Otieno",
      position: "Treasurer",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400",
      experience: "18+ years in finance",
      background: "Certified Public Accountant with extensive experience in financial management and audit, overseeing TNT SACCO's financial integrity.",
      tenure: "2018 - Present",
      expertise: ["Financial Management", "Audit & Compliance", "Risk Assessment"]
    },
    {
      name: "Rose Muthoni",
      position: "Director",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400",
      experience: "8+ years in cooperative movement",
      background: "Active member of the cooperative movement with strong grassroots connections and deep understanding of member needs and expectations.",
      tenure: "2022 - Present",
      expertise: ["Member Relations", "Community Development", "Cooperative Principles"]
    },
    {
      name: "Samuel Kiprop",
      position: "Director",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400",
      experience: "14+ years in IT & Innovation",
      background: "Technology leader with expertise in digital transformation and fintech solutions, driving TNT SACCO's technological advancement.",
      tenure: "2020 - Present",
      expertise: ["Digital Transformation", "Fintech", "Innovation Strategy"]
    },
    {
      name: "Elizabeth Kariuki",
      position: "Director",
      image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=400",
      experience: "11+ years in business development",
      background: "Entrepreneur and business development expert focused on SME growth and financial inclusion, championing business-friendly SACCO products.",
      tenure: "2021 - Present",
      expertise: ["Business Development", "SME Finance", "Market Strategy"]
    }
  ];

  const governance = [
    {
      title: "Board Meetings",
      description: "The Board meets monthly to review performance, approve policies, and provide strategic direction.",
      icon: Calendar
    },
    {
      title: "Committee Structure",
      description: "Specialized committees handle audit, credit, and governance matters with dedicated focus.",
      icon: Users
    },
    {
      title: "Regulatory Compliance",
      description: "Full compliance with SASRA regulations and cooperative governance best practices.",
      icon: Award
    },
    {
      title: "Member Representation",
      description: "Board members represent diverse member interests and ensure democratic governance.",
      icon: Building
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Board of Directors
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our Board of Directors provides strategic oversight and governance, ensuring TNT SACCO 
                operates with integrity, transparency, and in the best interests of our members.
              </p>
            </div>
          </div>
        </section>

        {/* Board Members */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <p className="text-green-600 font-medium">{member.position}</p>
                    <p className="text-sm text-gray-500">{member.tenure}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Background</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {member.background}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                      <p className="text-sm text-green-600 font-medium">
                        {member.experience}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Expertise</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Governance Framework */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Governance Framework
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our governance structure ensures accountability, transparency, and effective 
                decision-making in all aspects of TNT SACCO operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {governance.map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-8 pb-6">
                    <item.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Board Committees */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Board Committees
              </h2>
              <p className="text-lg text-gray-600">
                Specialized committees provide focused oversight in key areas of operation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">Audit Committee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Oversees financial reporting, internal controls, and risk management processes.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Reviews financial statements</li>
                    <li>• Monitors internal audit function</li>
                    <li>• Ensures regulatory compliance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">Credit Committee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Reviews and approves credit policies and major loan applications.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Sets lending policies</li>
                    <li>• Approves large loans</li>
                    <li>• Monitors credit risk</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">Governance Committee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Ensures best practices in corporate governance and board effectiveness.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Board performance review</li>
                    <li>• Policy development</li>
                    <li>• Strategic planning</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-green-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Have Questions for the Board?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Members can submit questions or feedback to the Board of Directors through our 
              official channels. Your voice matters in our cooperative governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Submit Feedback
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Contact Secretary
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BoardOfDirectors;
