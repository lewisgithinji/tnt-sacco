
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, Phone, Linkedin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ManagementStaff = () => {
  const managementTeam = [
    {
      name: "Mr. George Malava",
      position: "C.E.O",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      bio: "Mr. George Malava leads TNT SACCO with extensive experience in cooperative financial services and strategic leadership.",
      qualifications: ["MBA Finance", "Certified Cooperative Manager", "Leadership Development"],
      email: "g.malava@tntsacco.co.ke",
      phone: "+254 700 001 001"
    },
    {
      name: "Ms Helga Mmogi",
      position: "Finance Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b634?w=400",
      bio: "Ms. Helga Mmogi oversees financial operations and ensures sound financial management practices across the organization.",
      qualifications: ["CPA (K)", "Masters in Finance", "Financial Management Certification"],
      email: "h.mmogi@tntsacco.co.ke",
      phone: "+254 700 001 002"
    },
    {
      name: "Ms. Everlyn Nyongesa",
      position: "Credit Disb Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
      bio: "Ms. Everlyn Nyongesa manages credit disbursement processes and ensures efficient loan processing for members.",
      qualifications: ["Bachelor of Commerce - Finance", "Certified Credit Manager", "Loan Management Professional"],
      email: "e.nyongesa@tntsacco.co.ke",
      phone: "+254 700 001 003"
    },
    {
      name: "Mr Kevin Oduor",
      position: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      bio: "Mr. Kevin Oduor leads marketing initiatives and member engagement strategies to grow TNT SACCO's membership base.",
      qualifications: ["Bachelor of Marketing", "Digital Marketing Specialist", "Brand Management Professional"],
      email: "k.oduor@tntsacco.co.ke",
      phone: "+254 700 001 004"
    },
    {
      name: "Mr Henry Wetosi",
      position: "Internal Auditor",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
      bio: "Mr. Henry Wetosi ensures compliance and internal controls through comprehensive audit processes and risk assessment.",
      qualifications: ["CPA (K)", "Certified Internal Auditor", "Risk Management Professional"],
      email: "h.wetosi@tntsacco.co.ke",
      phone: "+254 700 001 005"
    },
    {
      name: "Mrs Maureen Wasike",
      position: "Fosa Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      bio: "Mrs. Maureen Wasike manages Front Office Service Activities (FOSA) and ensures excellent customer service delivery.",
      qualifications: ["Bachelor of Business Administration", "Customer Service Excellence", "Banking Operations"],
      email: "m.wasike@tntsacco.co.ke",
      phone: "+254 700 001 006"
    },
    {
      name: "Mr. Douglas Mbirika",
      position: "ICT Manager",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400",
      bio: "Mr. Douglas Mbirika leads ICT initiatives and digital transformation to enhance service delivery and operational efficiency.",
      qualifications: ["Masters in Information Technology", "Certified IT Manager", "Digital Banking Specialist"],
      email: "d.mbirika@tntsacco.co.ke",
      phone: "+254 700 001 007"
    },
    {
      name: "Ms Joyceline Azenga",
      position: "Credit Manager Recoveries",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400",
      bio: "Ms. Joyceline Azenga specializes in credit recovery processes and maintains healthy loan portfolios for sustainable growth.",
      qualifications: ["Bachelor of Commerce", "Certified Debt Recovery Specialist", "Credit Risk Management"],
      email: "j.azenga@tntsacco.co.ke",
      phone: "+254 700 001 008"
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
              
              Note: Detailed CVs for all management staff will be provided shortly.
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
