import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, Phone, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio?: string;
  qualifications?: string[];
  email?: string;
  phone?: string;
  background?: string;
  experience?: string;
  expertise?: string[];
  tenure?: string;
}

interface InteractiveTeamCardProps {
  member: TeamMember;
  variant?: 'management' | 'board';
}

export const InteractiveTeamCard: React.FC<InteractiveTeamCardProps> = ({ 
  member, 
  variant = 'management' 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className={cn(
      "group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden",
      "border-border/50 hover:border-primary/20 bg-card"
    )}>
      {/* Main Card Content - Always Visible */}
      <div 
        className="p-6 space-y-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start gap-4">
          <div className="relative">
            <img 
              src={member.image} 
              alt={`${member.name} - ${member.position}`}
              className="w-20 h-20 rounded-xl object-cover ring-2 ring-primary/10 group-hover:ring-primary/20 transition-all duration-300"
            />
            <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground p-1 rounded-full">
              {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
              {member.name}
            </h3>
            <p className="text-sm font-medium text-primary mb-2">
              {member.position}
            </p>
            {member.tenure && (
              <p className="text-xs text-muted-foreground">
                {member.tenure}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs text-muted-foreground">
            {isExpanded ? 'Click to collapse' : 'Click to view details'}
          </div>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </Button>
        </div>
      </div>

      {/* Expandable Content */}
      {isExpanded && (
        <CardContent className="pt-0 pb-6 px-6 animate-fade-in">
          <div className="border-t border-border/50 pt-6 space-y-6">
            {/* Bio/Background */}
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                {variant === 'management' ? 'Professional Background' : 'Background'}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.bio || member.background}
              </p>
            </div>

            {/* Experience (Board specific) */}
            {variant === 'board' && member.experience && (
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Experience Level
                </h4>
                <p className="text-sm text-primary font-medium">
                  {member.experience}
                </p>
              </div>
            )}

            {/* Qualifications (Management specific) */}
            {variant === 'management' && member.qualifications && (
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <Award className="w-4 h-4 mr-2 text-primary" />
                  Qualifications
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {member.qualifications.map((qualification, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {qualification}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Expertise (Board specific) */}
            {variant === 'board' && member.expertise && (
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Key Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Information (Management specific) */}
            {variant === 'management' && (member.email || member.phone) && (
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Contact Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {member.email && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="justify-start text-xs h-8 border-border/50 hover:border-primary/50"
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
                      className="justify-start text-xs h-8 border-border/50 hover:border-primary/50"
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
        </CardContent>
      )}
    </Card>
  );
};