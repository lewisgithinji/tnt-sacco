import React, { useState, useRef } from 'react';
import { Users, Briefcase, Camera, Upload, Calendar, Award, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Board member images
import evansImage from '@/assets/board/evans-sichangi-chairman.jpg';
import isaacImage from '@/assets/board/isaac-famba-vice-chairman.jpg';
import manoaImage from '@/assets/board/manoa-alichula-secretary.jpg';
import robertOmariImage from '@/assets/board/robert-omari-treasurer.jpg';
import joshuaImage from '@/assets/board/joshua-momanyi-director.jpeg';
import abrahamImage from '@/assets/board/abraham-kemboi-director.jpg';
import phylisImage from '@/assets/board/phylis-bonareri-director.jpg';
import robertMasindeImage from '@/assets/board/robert-masinde-director.jpg';
import leahImage from '@/assets/board/leah-wafubwa-director.jpg';
import steadyImage from '@/assets/board/steady-wamela-supervisory-chair.jpg';
import margaretImage from '@/assets/board/margaret-muiruri-supervisory-member.jpg';
import wanjalaImage from '@/assets/board/mulongo-wanjala-supervisory-secretary.jpg';

// Staff member images
import georgeImage from '@/assets/staff/george-malava-ceo.jpeg';
import douglasImage from '@/assets/staff/douglas-mbirika-ict.jpeg';
import joycelineImage from '@/assets/staff/joyceline-azenga-recoveries.jpg';
import everlyneImage from '@/assets/staff/everlyn-nyongesa-credit.jpg';
import helgaImage from '@/assets/staff/helga-mmogi-finance.jpg';
import maureenImage from '@/assets/staff/maureen-wasike-fosa.jpg';
import henryImage from '@/assets/staff/henry-wetosi-auditor.jpg';
import kevinImage from '@/assets/staff/kevin-oduor-marketing.jpg';

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

interface EnhancedStaffProfilesProps {
  defaultSection?: 'board' | 'management';
}

const EnhancedStaffProfiles: React.FC<EnhancedStaffProfilesProps> = ({ defaultSection = 'management' }) => {
  const [activeSection, setActiveSection] = useState<'board' | 'management'>(defaultSection);
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
  const [uploading, setUploading] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const adminCredentials = {
    username: 'tntadmin',
    password: 'TNT@2025#Admin'
  };

  const staffData: StaffData = {
    board: [
      {
        id: 'evans-sichangi',
        name: 'Evans Sichangi',
        title: 'Chairman',
        image: evansImage,
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
        image: isaacImage,
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
        image: manoaImage,
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
        image: robertOmariImage,
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
        image: joshuaImage,
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
        image: abrahamImage,
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
        image: phylisImage,
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
        image: robertMasindeImage,
        qualifications: [
          'Degree in Education',
          'Certified Sacco Director (Co-operative University of Kenya)'
        ],
        experience: 'Board member since 2023. Currently serving as a member of the Audit Subcommittee.',
        joinDate: '2023'
      },
      {
        id: 'leah-wafubwa',
        name: 'M/S. Leah Wafubwa',
        title: 'Director',
        image: leahImage,
        qualifications: [
          'Diploma in Business Management',
          'Certified Sacco Director (Co-operative University of Kenya)'
        ],
        experience: 'Board member since 2022. Currently serving as a Director on the Board.',
        joinDate: '2022'
      },
      {
        id: 'steady-wamela',
        name: 'Steady Wamela',
        title: 'Chairman, Supervisory Committee',
        image: steadyImage,
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
        image: margaretImage,
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
        image: wanjalaImage,
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
        image: georgeImage,
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
        image: douglasImage,
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
        image: joycelineImage,
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
        image: everlyneImage,
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
        image: helgaImage,
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
        image: maureenImage,
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
        image: henryImage,
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
        image: kevinImage,
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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginCredentials.username === adminCredentials.username && 
        loginCredentials.password === adminCredentials.password) {
      setIsAdmin(true);
      setShowLoginModal(false);
      setLoginCredentials({ username: '', password: '' });
      setLoginError('');
      alert('Admin access granted! You can now update staff photos.');
    } else {
      setLoginError('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    alert('Logged out successfully.');
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
    if (!isAdmin) {
      alert('Only administrators can update staff photos. Please login as admin.');
      return;
    }
    
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

    // Simulate upload process - currently inactive
    setTimeout(() => {
      console.log(`Admin uploading image for ${memberId}:`, file.name);
      setUploading(null);
      alert('Photo upload feature is currently inactive. This will be available in a future update.');
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
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header Section */}
      <div className="shadow-sm border-b border-border bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-4">
            <div></div>
            <h1 className="text-4xl font-bold text-foreground">
              {activeSection === 'management' ? 'Senior Management Team' : 'Board of Directors'}
            </h1>
            <div className="flex items-center gap-2">
              {isAdmin ? (
                <Button
                  onClick={handleLogout}
                  variant="destructive"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Admin Mode - Logout
                </Button>
              ) : (
                <Button
                  onClick={() => setShowLoginModal(true)}
                  variant="outline"
                  size="sm"
                >
                  Admin Login
                </Button>
              )}
            </div>
          </div>
          <div className="text-center">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
          <div className="bg-card rounded-lg p-2 shadow-lg border border-border">
            <div className="flex space-x-2">
              <Button
                variant={activeSection === 'management' ? 'default' : 'ghost'}
                size="lg"
                onClick={() => setActiveSection('management')}
                className={cn(
                  "flex items-center space-x-2 px-6 py-3 rounded-md transition-all duration-300",
                  activeSection === 'management'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-primary hover:bg-muted'
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
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-primary hover:bg-muted'
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
                "border border-border bg-card"
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
                      ? 'bg-secondary text-secondary-foreground' 
                      : 'bg-accent text-accent-foreground'
                  )}
                >
                  {activeSection === 'management' ? 'Management' : 'Board'}
                </Badge>
              </div>

              <CardContent className="p-0">
                {/* Image Section */}
                <div className="relative aspect-square bg-gradient-to-br from-muted to-accent/20">
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
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    {isAdmin ? (
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
                    ) : (
                      <Button 
                        size="sm"
                        variant="secondary"
                        className="opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowLoginModal(true);
                        }}
                      >
                        <Camera className="w-4 h-4" />
                        <span className="ml-2">Admin Only</span>
                      </Button>
                    )}
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
                      <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold text-primary mb-2">
                        {member.title}
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground">
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
                    <div className="text-xs text-muted-foreground">
                      {expandedCards.has(member.id) ? 'Click to collapse' : 'Click to view details'}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedCards.has(member.id) && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="border-t border-border pt-6 space-y-4">
                      {/* Experience */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                          Professional Background
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {member.experience}
                        </p>
                      </div>

                      {/* Qualifications */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center">
                          <Award className="w-4 h-4 mr-2 text-secondary" />
                          Qualifications
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {member.qualifications.map((qualification, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {qualification}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Contact Info (Management only) */}
                      {activeSection === 'management' && (member.email || member.phone) && (
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center">
                            <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                            Contact Information
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {member.email && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="justify-start text-xs h-8 border-border hover:border-primary hover:bg-muted"
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
                                className="justify-start text-xs h-8 border-border hover:border-primary hover:bg-muted"
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
      <div className="bg-primary text-primary-foreground py-16 mt-16">
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
            <Button size="lg" variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              {activeSection === 'management' ? 'Contact Management' : 'Submit Feedback'}
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              {activeSection === 'management' ? 'View Board of Directors' : 'Contact Secretary'}
            </Button>
          </div>
        </div>
      </div>

      {/* Admin Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-xl shadow-2xl max-w-md w-full p-6 border border-border">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Admin Access Required</h2>
              <p className="text-muted-foreground">Please login to update staff photos</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Username</label>
                <input
                  type="text"
                  value={loginCredentials.username}
                  onChange={(e) => setLoginCredentials({...loginCredentials, username: e.target.value})}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  placeholder="Enter admin username"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Password</label>
                <input
                  type="password"
                  value={loginCredentials.password}
                  onChange={(e) => setLoginCredentials({...loginCredentials, password: e.target.value})}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  placeholder="Enter admin password"
                  required
                />
              </div>
              
              {loginError && (
                <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-lg text-sm">
                  {loginError}
                </div>
              )}
              
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowLoginModal(false);
                    setLoginError('');
                    setLoginCredentials({ username: '', password: '' });
                  }}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1"
                >
                  Login
                </Button>
              </div>
            </form>
            
            <div className="mt-4 p-3 bg-muted rounded-lg">
              <p className="text-xs text-muted-foreground">
                <strong>Demo Credentials:</strong><br />
                Username: tntadmin<br />
                Password: TNT@2025#Admin
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedStaffProfiles;