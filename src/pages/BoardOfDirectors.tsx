
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Users, Award, Building, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InteractiveTeamCard } from "@/components/InteractiveTeamCard";
import evansImage from "@/assets/board/evans-sichangi-chairman.jpg";
import isaacImage from "@/assets/board/isaac-famba-vice-chairman.jpg";
import manoaImage from "@/assets/board/manoa-alichula-secretary.jpg";
import robertOmariImage from "@/assets/board/robert-omari-treasurer.jpg";
import robertMasindeImage from "@/assets/board/robert-masinde-director.jpg";
import abrahamImage from "@/assets/board/abraham-kemboi-director.jpg";
import joshuaImage from "@/assets/board/joshua-momanyi-director.jpeg";
import phylisImage from "@/assets/board/phylis-bonareri-director.jpg";
import steadyImage from "@/assets/board/steady-wamela-supervisory-chair.jpg";
import mulongoImage from "@/assets/board/mulongo-wanjala-supervisory-secretary.jpg";
import margaretImage from "@/assets/board/margaret-muiruri-supervisory-member.jpg";

const BoardOfDirectors = () => {
  const boardMembers = [
    {
      name: "Mr. Evans Sichangi",
      position: "Chairman",
      image: evansImage,
      experience: "Extensive leadership experience in cooperative governance",
      background: "Experienced leader with deep understanding of cooperative governance and strategic direction. He provides visionary leadership and ensures the board maintains focus on member interests and organizational sustainability.",
      tenure: "Current Term",
      expertise: ["Strategic Leadership", "Corporate Governance", "Cooperative Management", "Policy Development"]
    },
    {
      name: "Mr. Isaac Famba",
      position: "Vice Chairman",
      image: isaacImage,
      experience: "Senior leadership experience in cooperative development",
      background: "Strategic leader with extensive experience in cooperative development and member relations. He supports the chairman in steering the organization towards achieving its strategic objectives.",
      tenure: "Current Term",
      expertise: ["Leadership", "Strategy", "Member Relations", "Cooperative Development"]
    },
    {
      name: "Mr. Manoa Alichula",
      position: "Secretary",
      image: manoaImage,
      experience: "Administrative excellence and governance expertise",
      background: "Dedicated professional ensuring proper governance documentation and board administration. He maintains accurate records and ensures compliance with regulatory requirements.",
      tenure: "Current Term",
      expertise: ["Administration", "Governance", "Documentation", "Regulatory Compliance"]
    },
    {
      name: "Mr. Robert Omari",
      position: "Treasurer",
      image: robertOmariImage,
      experience: "Financial management and oversight expertise",
      background: "Financial expert overseeing TNT SACCO's financial integrity and fiscal responsibility. He ensures sound financial management and provides strategic financial guidance to the board.",
      tenure: "Current Term",
      expertise: ["Financial Management", "Budget Oversight", "Fiscal Planning", "Treasury Management"]
    },
    {
      name: "Ms. Leah Wafubwa",
      position: "Director",
      image: "/api/placeholder/400/400",
      experience: "Cooperative development and member advocacy",
      background: "Experienced professional bringing valuable insights to board governance and member service. She advocates for member interests and contributes to policy development.",
      tenure: "Current Term",
      expertise: ["Member Relations", "Cooperative Development", "Strategic Planning", "Advocacy"]
    },
    {
      name: "Mr. Robert Masinde",
      position: "Director",
      image: robertMasindeImage,
      experience: "Business development and strategic growth",
      background: "Strategic thinker with expertise in business development and organizational growth. He contributes to expanding the Sacco's reach and improving service delivery.",
      tenure: "Current Term",
      expertise: ["Business Development", "Strategic Growth", "Market Analysis", "Innovation"]
    },
    {
      name: "Mr. Abraham Kemboi",
      position: "Director",
      image: abrahamImage,
      experience: "Industry expertise and cooperative governance",
      background: "Professional with extensive experience in cooperative governance and member advocacy. He ensures the Sacco operates in the best interests of its members.",
      tenure: "Current Term",
      expertise: ["Governance", "Member Advocacy", "Policy Development", "Compliance"]
    },
    {
      name: "Mr. Otwori Joshua Momanyi",
      position: "Director",
      image: joshuaImage,
      experience: "Strategic leadership and member service",
      background: "Dedicated leader focused on cooperative excellence and member satisfaction. He brings fresh perspectives to board deliberations and decision-making.",
      tenure: "Current Term",
      expertise: ["Leadership", "Member Service", "Strategic Development", "Innovation"]
    },
    {
      name: "Ms. Phylis Bonareri",
      position: "Director",
      image: phylisImage,
      experience: "Professional excellence and strategic planning",
      background: "Committed professional bringing diverse perspectives to board governance and decision-making. She ensures inclusive representation and strategic thinking.",
      tenure: "Current Term",
      expertise: ["Governance", "Strategic Planning", "Member Relations", "Diversity"]
    }
  ];

  const supervisoryCommittee = [
    {
      name: "Mr. Steady Wamela",
      position: "Supervisory Chair",
      image: steadyImage,
      background: "Experienced leader overseeing the supervisory functions and ensuring compliance with cooperative regulations. He provides independent oversight and maintains accountability standards."
    },
    {
      name: "Mr. Mulongo Wanjala",
      position: "Supervisory Secretary",
      image: mulongoImage,
      background: "Administrative professional managing supervisory committee documentation and coordination. He ensures proper record-keeping and facilitates effective committee operations."
    },
    {
      name: "Ms. Margaret Muiruri",
      position: "Supervisory Member",
      image: margaretImage,
      background: "Dedicated member ensuring oversight and accountability in SACCO operations and governance. She brings valuable perspectives to supervisory functions."
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
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Board of Directors
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Click on any board member to view their detailed background, experience, and areas of expertise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <InteractiveTeamCard 
                  key={index} 
                  member={member} 
                  variant="board" 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Supervisory Committee */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Supervisory Committee
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The Supervisory Committee provides independent oversight and ensures compliance 
                with cooperative regulations and governance standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {supervisoryCommittee.map((member, index) => (
                <InteractiveTeamCard 
                  key={index} 
                  member={member} 
                  variant="board" 
                />
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
                  <CardTitle className="text-green-600">Finance and Administration Committee</CardTitle>
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

              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">Education Committee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Organises member and staff education programmes.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Member education and awareness</li>
                    <li>• Staff and board training</li>
                    <li>• Induction of new members</li>
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
