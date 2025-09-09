import React, { useState, useRef } from 'react';
import { Users, Briefcase, Camera, Upload, Calendar, Award, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface StaffMember {
  id: string;
  name: string;
  title: string;
  image: string;
  qualifications: string[];
  experience: string;
  joinDate: string;
  yearsExperience?: string;
  email?: string;
  phone?: string;
}

interface StaffData {
  board: StaffMember[];
  management: StaffMember[];
}

const EnhancedStaffProfiles: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'board' | 'management'>('management');
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
  const [uploading, setUploading] = useState<string | null>(null);
  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const staffData: StaffData = {
    board: [
      {
        id: 'evans-sichangi',
        name: 'Evans Sichangi',
        title: 'Chairman',
        image: '/src/assets/board/evans-sichangi-chairman.jpg',
        qualifications: [
          'Diploma in Education',
          'Certified Sacco Director (Co-operative University of Kenya)'
        ],
        experience: 'Joined TNT DT Sacco Ltd on December 30, 2016, as Chairman Supervisory. Appointed Chairman of the Board of Directors on April 21, 2022. Currently leads a team of 12 board members and the CEO.',
        joinDate: '2016'
      },
      {
        id: 'isaac-famba',
        name: 'Isaac Famba',
        title: 'Vice Chairman',
        image: '/src/assets/board/isaac-famba-vice-chairman.jpg',
        qualifications: [
          'Bachelor of Science with Education',
          'Certified Sacco Director (Co-operative University of Kenya)'
        ],
        experience: 'Board member since 2017. Serving as Vice Chairman since 2023 and Chairman of the Education Subcommittee.',
        joinDate: '2017'
      },
      {
        id: 'manoa-alichula',
        name: 'Manoa Alichula',
        title: 'Secretary',
        image: '/src/assets/board/manoa-alichula-secretary.jpg',
        qualifications: [
          'ATS (1) Teacher',
          'Certified Sacco Director (Co-operative University of Kenya)'
        ],
        experience: 'Board member since 2008. Serving as Hon. Secretary since 2011.',
        joinDate: '2008'
      },
      {
        id: 'robert-omari',
        name: 'Robert Omari',
        title: 'Treasurer',
        image: '/src/assets/board/robert-omari-treasurer.jpg',
        qualifications: [
          'Certificate level (KACE)',
          'ATS (1) Teacher',
          'Certified Sacco Director (Co-operative University of Kenya)'
        ],
        experience: 'Board member since 2017. Serving as Treasurer since 2024.',
        joinDate: '2017'
      },
      {
        id: 'joshua-otwori',
        name: 'Joshua Otwori Momanyi',
        title: 'Chairman, Audit Subcommittee',
        image: '/src/assets/board/joshua-momanyi-director.jpeg',
        qualifications: [
          'Certificate P1 Teacher',
          'Certified Sacco Director (Co-operative University of Kenya)'
        ],
        experience: 'Board member since April 25, 2022. Currently serving as Chairman of the Audit Subcommittee.',
        joinDate: '2022'
      },
      {
        id: 'abraham-kemboi',
        name: 'Abraham Kemboi',
        title: 'Credit Subcommittee Member',
        image: '/src/assets/board/abraham-kemboi-director.jpg',
        qualifications: [
          'Certificate in PTE',
          'Certified Sacco Director (Co-operative University of Kenya)'
        ],
        experience: 'Board member since April 2022. Currently serving as a member of the Credit Subcommittee.',
        joinDate: '2022'
      },
      {
        id: 'phylis-ogero',
        name: 'Phylis Bonareri Ogero',
        title: 'Education Subcommittee Member',
        image: '/src/assets/board/phylis-bonareri-director.jpg',
        qualifications: [
          'Degree in Education',
          'Certified Sacco Director (Co-operative University of Kenya)'
        ],
        experience: 'Board member since 2023. Currently serving as a member of the Education Subcommittee.',
        joinDate: '2023'
      },
      {
        id: 'robert-masinde',
        name: 'Robert Masinde',
        title: 'Audit Subcommittee Member',
        image: '/src/assets/board/robert-masinde-director.jpg',
        qualifications: [
          'Degree in Education',
          'Certified Sacco Director (Co-operative University of Kenya)'
        ],
        experience: 'Board member since 2023. Currently serving as a member of the Audit Subcommittee.',
        joinDate: '2023'
      },
      {
        id: 'steady-wamela',
        name: 'Steady Wamela',
        title: 'Chairman, Supervisory Committee',
        image: '/src/assets/board/steady-wamela-supervisory-chair.jpg',
        qualifications: [
          'Degree in Education',
          'Diploma in Human Resource Management',
          'Certified Sacco Director (Co-operative University of Kenya)'
        ],
        experience: 'Joined TNT DT Sacco in 2017 as a member of the Supervisory Committee. Currently serving as Chairman of the Supervisory Committee.',
        joinDate: '2017'
      },
      {
        id: 'margaret-muiruri',
        name: 'Margaret Muiruri',
        title: 'Supervisory Committee Member',
        image: '/src/assets/board/margaret-muiruri-supervisory-member.jpg',
        qualifications: [
          'Degree in Education',
          'Certified Sacco Director (Co-operative University of Kenya)'
        ],
        experience: 'Board member since April 2023. Currently serving as a member of the Supervisory Committee.',
        joinDate: '2023'
      },
      {
        id: 'wanjala-mulongo',
        name: 'Wanjala Mulongo',
        title: 'Secretary, Supervisory Committee',
        image: '/src/assets/board/mulongo-wanjala-supervisory-secretary.jpg',
        qualifications: [
          'PTE',
          'Certified Sacco Director (Co-operative University of Kenya)'
        ],
        experience: 'Board member since April 2022. Currently serving as Secretary of the Supervisory Committee.',
        joinDate: '2022'
      }
    ],
    management: [
      {
        id: 'george-malava',
        name: 'George Malava',
        title: 'Chief Executive Officer',
        image: '/src/assets/staff/george-malava-ceo.jpeg',
        qualifications: [
          'CPA II',
          'Certified Sacco CEO (Co-operative University of Kenya)'
        ],
        experience: '25 years in Co-operatives. Joined TNT DT Sacco Ltd in 1999 as Operational Manager. Serving as Chief Executive Officer since 2011.',
        joinDate: '1999',
        yearsExperience: '25',
        email: 'ceo@tntsacco.co.ke',
        phone: '+254 111 050 510'
      },
      {
        id: 'douglas-mbirika',
        name: 'Douglas Mbirika',
        title: 'ICT Manager',
        image: '/src/assets/staff/douglas-mbirika-ict.jpeg',
        qualifications: [
          'Master\'s Degree in Computer Science',
          'B.Sc. Computer Science'
        ],
        experience: '17 years in Co-operatives. Joined TNT DT Sacco Ltd in 2007. Currently serving as ICT Manager.',
        joinDate: '2007',
        yearsExperience: '17',
        email: 'ict@tntsacco.co.ke',
        phone: '+254 700 567 890'
      },
      {
        id: 'joyceline-zenga',
        name: 'Joyceline Azenga',
        title: 'Credit Manager (Recovery)',
        image: '/src/assets/staff/joyceline-azenga-recoveries.jpg',
        qualifications: [
          'Diploma in Business Management'
        ],
        experience: '30 years in Co-operatives. Joined TNT DT Sacco Ltd in 1994 as a Teller. Currently serving as Credit Manager Recovery.',
        joinDate: '1994',
        yearsExperience: '30',
        email: 'recoveries@tntsacco.co.ke',
        phone: '+254 700 678 901'
      },
      {
        id: 'everlyne-nyongesa',
        name: 'Everlyne Nyongesa',
        title: 'Credit Manager (Disbursement)',
        image: '/src/assets/staff/everlyn-nyongesa-credit.jpg',
        qualifications: [
          'CPA(K)'
        ],
        experience: '17 years in Co-operatives. Joined TNT DT Sacco Ltd in 2007. Currently serving as Credit Manager Disbursement.',
        joinDate: '2007',
        yearsExperience: '17',
        email: 'credit@tntsacco.co.ke',
        phone: '+254 700 123 456'
      },
      {
        id: 'helga-mmogi',
        name: 'Helga Mmogi',
        title: 'Finance Manager',
        image: '/src/assets/staff/helga-mmogi-finance.jpg',
        qualifications: [
          'Bachelor in Business Management (Finance Option)'
        ],
        experience: '9 years in Co-operatives. Joined TNT DT Sacco Ltd in 2015 as Accounts Assistant. Promoted to Finance Manager after serving in various accounts roles.',
        joinDate: '2015',
        yearsExperience: '9',
        email: 'finance@tntsacco.co.ke',
        phone: '+254 712 585 874'
      },
      {
        id: 'maureen-wasike',
        name: 'Maureen Wasike',
        title: 'FOSA Manager',
        image: '/src/assets/staff/maureen-wasike-fosa.jpg',
        qualifications: [
          'Diploma in Business Management'
        ],
        experience: '8 years in the organization. Joined TNT DT Sacco Ltd in 2016 as a Teller. Currently serving as FOSA Manager.',
        joinDate: '2016',
        yearsExperience: '8',
        email: 'fosa@tntsacco.co.ke',
        phone: '+254 700 456 789'
      },
      {
        id: 'henry-wetosi',
        name: 'Henry Wetosi',
        title: 'Internal Auditor',
        image: '/src/assets/staff/henry-wetosi-auditor.jpg',
        qualifications: [
          'CPA(K)',
          'Bachelor Degree of Commerce (Accounting Option)'
        ],
        experience: '6 years in Co-operatives. Joined TNT DT Sacco Ltd in 2018. Currently serving as Internal Auditor.',
        joinDate: '2018',
        yearsExperience: '6',
        email: 'audit@tntsacco.co.ke',
        phone: '+254 700 345 678'
      },
      {
        id: 'kevin-oduor',
        name: 'Kevin Otieno Oduor',
        title: 'AG. Marketing Manager',
        image: '/src/assets/staff/kevin-oduor-marketing.jpg',
        qualifications: [
          'Bachelor of Business Information Technology'
        ],
        experience: '6 years in Co-operatives. Joined TNT DT Sacco Ltd in 2018 as Business Development Officer. Currently serving as Acting Marketing Manager.',
        joinDate: '2018',
        yearsExperience: '6',
        email: 'marketing@tntsacco.co.ke',
        phone: '+254 700 234 567'
      }
    ]
  };

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCards(newExpanded);
  };

  const handleImageUpload = (memberId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file (JPG, PNG, WEBP)');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }

    setUploading(memberId);

    // Simulate upload process
    setTimeout(() => {
      // In a real implementation, you would upload to your server here
      console.log(`Uploading image for ${memberId}:`, file.name);
      setUploading(null);
      // Show success message or update the image
    }, 2000);
  };

  const triggerImageUpload = (memberId: string) => {
    const input = fileInputRefs.current[memberId];
    if (input) {
      input.click();
    }
  };

  const currentStaff = staffData[activeSection];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {activeSection === 'management' ? 'Senior Management Team' : 'Board of Directors'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {activeSection === 'management' 
                ? 'Meet the experienced leadership team driving TNT SACCO\'s operational excellence and strategic vision.'
                : 'Our Board of Directors provides strategic oversight and governance, ensuring TNT SACCO operates with integrity and transparency.'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Section Toggle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-lg border border-orange-200">
            <div className="flex space-x-2">
              <Button
                variant={activeSection === 'management' ? 'default' : 'ghost'}
                size="lg"
                onClick={() => setActiveSection('management')}
                className={cn(
                  "flex items-center space-x-2 px-6 py-3 rounded-md transition-all duration-300",
                  activeSection === 'management'
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                )}
              >
                <Briefcase className="w-5 h-5" />
                <span>Senior Management</span>
              </Button>
              <Button
                variant={activeSection === 'board' ? 'default' : 'ghost'}
                size="lg"
                onClick={() => setActiveSection('board')}
                className={cn(
                  "flex items-center space-x-2 px-6 py-3 rounded-md transition-all duration-300",
                  activeSection === 'board'
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                )}
              >
                <Users className="w-5 h-5" />
                <span>Board of Directors</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentStaff.map((member) => (
            <Card 
              key={member.id} 
              className={cn(
                "group relative overflow-hidden cursor-pointer transition-all duration-300",
                "hover:shadow-xl hover:-translate-y-2 hover:scale-105",
                "border border-orange-100 bg-white"
              )}
              onClick={() => toggleExpanded(member.id)}
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge 
                  variant="secondary"
                  className={cn(
                    "text-xs font-medium",
                    activeSection === 'management' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-orange-100 text-orange-800'
                  )}
                >
                  {activeSection === 'management' ? 'Management' : 'Board'}
                </Badge>
              </div>

              <CardContent className="p-0">
                {/* Image Section */}
                <div className="relative aspect-square bg-gradient-to-br from-orange-100 to-blue-100">
                  <img 
                    src={member.image}
                    alt={`${member.name} - ${member.title}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/api/placeholder/400/400';
                    }}
                  />
                  
                  {/* Upload Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        triggerImageUpload(member.id);
                      }}
                      disabled={uploading === member.id}
                    >
                      {uploading === member.id ? (
                        <Upload className="w-4 h-4 animate-spin" />
                      ) : (
                        <Camera className="w-4 h-4" />
                      )}
                      <span className="ml-2">
                        {uploading === member.id ? 'Uploading...' : 'Change Photo'}
                      </span>
                    </Button>
                  </div>

                  {/* Hidden File Input */}
                  <input
                    ref={(el) => (fileInputRefs.current[member.id] = el)}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUpload(member.id, e)}
                  />
                </div>

                {/* Basic Info Section */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold text-orange-600 mb-2">
                        {member.title}
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>Joined {member.joinDate}</span>
                        {member.yearsExperience && (
                          <>
                            <span className="mx-2">•</span>
                            <span>{member.yearsExperience} years experience</span>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      {expandedCards.has(member.id) ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      {expandedCards.has(member.id) ? 'Click to collapse' : 'Click to view details'}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedCards.has(member.id) && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="border-t border-gray-100 pt-6 space-y-4">
                      {/* Experience */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                          Professional Background
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {member.experience}
                        </p>
                      </div>

                      {/* Qualifications */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Award className="w-4 h-4 mr-2 text-orange-500" />
                          Qualifications
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {member.qualifications.map((qualification, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {qualification}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Contact Info (Management only) */}
                      {activeSection === 'management' && (member.email || member.phone) && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                            Contact Information
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {member.email && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="justify-start text-xs h-8 border-orange-200 hover:border-orange-400 hover:bg-orange-50"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(`mailto:${member.email}`);
                                }}
                              >
                                <Mail className="w-3 h-3 mr-2" />
                                {member.email}
                              </Button>
                            )}
                            {member.phone && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="justify-start text-xs h-8 border-orange-200 hover:border-orange-400 hover:bg-orange-50"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(`tel:${member.phone}`);
                                }}
                              >
                                <Phone className="w-3 h-3 mr-2" />
                                {member.phone}
                              </Button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-orange-600 text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            {activeSection === 'management' 
              ? 'Connect with Our Management Team'
              : 'Have Questions for the Board?'
            }
          </h3>
          <p className="text-lg mb-8 opacity-90">
            {activeSection === 'management'
              ? 'Our management team is here to serve you. Contact us for any questions or assistance.'
              : 'Members can submit questions or feedback to the Board of Directors through our official channels.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
              {activeSection === 'management' ? 'Contact Management' : 'Submit Feedback'}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              {activeSection === 'management' ? 'View Board of Directors' : 'Contact Secretary'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedStaffProfiles;