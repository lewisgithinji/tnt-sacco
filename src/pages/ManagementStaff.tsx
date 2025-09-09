
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InteractiveTeamCard } from "@/components/InteractiveTeamCard";
import { Button } from "@/components/ui/button";
import georgeImage from "@/assets/staff/george-malava-ceo.jpeg";
import helgaImage from "@/assets/staff/helga-mmogi-finance.jpg";
import everlynImage from "@/assets/staff/everlyn-nyongesa-credit.jpg";
import kevinImage from "@/assets/staff/kevin-oduor-marketing.jpg";
import henryImage from "@/assets/staff/henry-wetosi-auditor.jpg";
import maureenImage from "@/assets/staff/maureen-wasike-fosa.jpg";
import douglasImage from "@/assets/staff/douglas-mbirika-ict.jpeg";
import joycelineImage from "@/assets/staff/joyceline-azenga-recoveries.jpg";

const ManagementStaff = () => {
  const managementTeam = [
    {
      name: "Mr. George Malava",
      position: "Chief Executive Officer",
      image: georgeImage,
      bio: "Mr. George Malava leads TNT SACCO with extensive experience in cooperative financial services and strategic leadership. He brings visionary leadership and deep understanding of the cooperative movement to drive organizational growth and member satisfaction.",
      qualifications: ["MBA Finance", "Certified Cooperative Manager", "Leadership Development Certificate", "Strategic Management"],
      email: "ceo@tntsacco.co.ke",
      phone: "+254 111 050 510"
    },
    {
      name: "Ms. Helga Mmogi",
      position: "Finance Manager",
      image: helgaImage,
      bio: "Ms. Helga Mmogi oversees financial operations and ensures sound financial management practices across the organization. She maintains fiscal responsibility and strategic financial planning for sustainable growth.",
      qualifications: ["CPA (K)", "Masters in Finance", "Financial Management Certification", "Treasury Management"],
      email: "finance@tntsacco.co.ke",
      phone: "+254 712 585 874"
    },
    {
      name: "Ms. Everlyn Nyongesa",
      position: "Credit Disbursement Manager",
      image: everlynImage,
      bio: "Ms. Everlyn Nyongesa manages credit disbursement processes and ensures efficient loan processing for members. She leads the credit team in providing timely and appropriate financial solutions to members.",
      qualifications: ["Bachelor of Commerce - Finance", "Certified Credit Manager", "Loan Management Professional", "Risk Assessment"],
      email: "credit@tntsacco.co.ke",
      phone: "+254 700 123 456"
    },
    {
      name: "Mr. Kevin Oduor",
      position: "Marketing Manager",
      image: kevinImage,
      bio: "Mr. Kevin Oduor leads marketing initiatives and member engagement strategies to grow TNT SACCO's membership base. He develops innovative outreach programs and digital marketing strategies.",
      qualifications: ["Bachelor of Marketing", "Digital Marketing Specialist", "Brand Management Professional", "Customer Relations"],
      email: "marketing@tntsacco.co.ke",
      phone: "+254 700 234 567"
    },
    {
      name: "Mr. Henry Wetosi",
      position: "Internal Auditor",
      image: henryImage,
      bio: "Mr. Henry Wetosi ensures compliance and internal controls through comprehensive audit processes and risk assessment. He maintains the highest standards of accountability and transparency.",
      qualifications: ["CPA (K)", "Certified Internal Auditor", "Risk Management Professional", "Compliance Certification"],
      email: "audit@tntsacco.co.ke",
      phone: "+254 700 345 678"
    },
    {
      name: "Mrs. Maureen Wasike",
      position: "FOSA Manager",
      image: maureenImage,
      bio: "Mrs. Maureen Wasike manages Front Office Service Activities (FOSA) and ensures excellent customer service delivery. She leads the front office team in providing exceptional member experience.",
      qualifications: ["Bachelor of Business Administration", "Customer Service Excellence", "Banking Operations", "Service Management"],
      email: "fosa@tntsacco.co.ke",
      phone: "+254 700 456 789"
    },
    {
      name: "Mr. Douglas Mbirika",
      position: "ICT Manager",
      image: douglasImage,
      bio: "Holds Master’s degree in Computer Science and B.Sc. Computer Science. Joined TNT DT Sacco Ltd in 2007. Currently serving as ICT Manager. Has an experience of 17 years in Co-operatives.",
      qualifications: ["Masters in Information Technology", "Certified IT Manager", "Digital Banking Specialist", "Systems Administration"],
      email: "ict@tntsacco.co.ke",
      phone: "+254 700 567 890"
    },
    {
      name: "Ms. Joyceline Azenga",
      position: "Credit Recoveries Manager",
      image: joycelineImage,
      bio: "Ms. Joyceline Azenga specializes in credit recovery processes and maintains healthy loan portfolios for sustainable growth. She ensures effective debt management while maintaining positive member relationships.",
      qualifications: ["Bachelor of Commerce", "Certified Debt Recovery Specialist", "Credit Risk Management", "Negotiation Skills"],
      email: "recoveries@tntsacco.co.ke",
      phone: "+254 700 678 901"
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
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Click on any team member to view their detailed background, qualifications, and contact information.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {managementTeam.map((member, index) => (
                <InteractiveTeamCard 
                  key={index} 
                  member={member} 
                  variant="management" 
                />
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
