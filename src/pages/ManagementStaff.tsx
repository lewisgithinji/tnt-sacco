
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, Phone, Linkedin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ManagementStaff = () => {
  const managementTeam = [
    {
      name: "James Mwangi",
      position: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      bio: "James brings over 15 years of experience in cooperative financial services. He holds an MBA in Finance and has been instrumental in TNT SACCO's digital transformation and growth strategy.",
      qualifications: ["MBA Finance - University of Nairobi", "CPA (K)", "Certified Credit Professional"],
      email: "j.mwangi@tntsacco.co.ke",
      phone: "+254 700 001 001"
    },
    {
      name: "Mary Wanjiku",
      position: "Chief Operating Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c9a2?w=400",
      bio: "Mary oversees daily operations and member services. With 12 years in cooperative management, she ensures operational excellence and member satisfaction across all our service channels.",
      qualifications: ["Masters in Business Administration", "Certified Cooperative Manager", "Project Management Professional"],
      email: "m.wanjiku@tntsacco.co.ke",
      phone: "+254 700 001 002"
    },
    {
      name: "David Kimani",
      position: "Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      bio: "David manages our financial operations and risk management. He is a qualified accountant with extensive experience in financial planning and regulatory compliance in the SACCO sector.",
      qualifications: ["CPA (K)", "Masters in Finance", "Risk Management Certification"],
      email: "d.kimani@tntsacco.co.ke",
      phone: "+254 700 001 003"
    },
    {
      name: "Grace Achieng",
      position: "Head of Credit & Risk",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
      bio: "Grace leads our credit department and risk management framework. She has 10 years of experience in credit analysis and has implemented innovative lending solutions for our members.",
      qualifications: ["Bachelor of Commerce - Finance", "Certified Credit Manager", "Risk Assessment Professional"],
      email: "g.achieng@tntsacco.co.ke",
      phone: "+254 700 001 004"
    },
    {
      name: "Peter Mutua",
      position: "Head of Information Technology",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
      bio: "Peter leads our digital banking initiatives and IT infrastructure. He has spearheaded the development of our mobile banking platform and digital service delivery channels.",
      qualifications: ["Masters in Information Technology", "Certified Information Systems Manager", "Fintech Specialist"],
      email: "p.mutua@tntsacco.co.ke",
      phone: "+254 700 001 005"
    },
    {
      name: "Susan Njeri",
      position: "Head of Human Resources",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      bio: "Susan manages our human capital and organizational development. She has been key in building our team culture and implementing professional development programs for our staff.",
      qualifications: ["Masters in Human Resource Management", "Certified HR Professional", "Leadership Development Specialist"],
      email: "s.njeri@tntsacco.co.ke",
      phone: "+254 700 001 006"
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
                Management Team
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the experienced leadership team driving TNT SACCO's vision of providing 
                exceptional financial services to our members and communities.
              </p>
            </div>
          </div>
        </section>

        {/* Management Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {managementTeam.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <CardContent className="md:w-2/3 p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {member.name}
                        </h3>
                        <p className="text-green-600 font-medium mb-3">
                          {member.position}
                        </p>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {member.bio}
                        </p>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Award className="w-4 h-4 mr-2 text-green-600" />
                          Qualifications
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {member.qualifications.map((qualification, qIndex) => (
                            <li key={qIndex} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {qualification}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button size="sm" variant="outline" className="flex-1 text-xs">
                          <Mail className="w-3 h-3 mr-1" />
                          {member.email}
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 text-xs">
                          <Phone className="w-3 h-3 mr-1" />
                          {member.phone}
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Message */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Leadership Commitment
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our management team is committed to maintaining the highest standards of corporate governance, 
              financial stewardship, and member service. We continuously invest in professional development 
              and innovation to ensure TNT SACCO remains at the forefront of cooperative financial services in Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Contact Management
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                View Board of Directors
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ManagementStaff;
