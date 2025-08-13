import { 
  Briefcase, 
  PiggyBank, 
  Building2, 
  Shield, 
  FileText, 
  Send, 
  CreditCard, 
  GraduationCap,
  Wallet,
  Users,
  Target,
  Heart,
  TrendingUp,
  Smartphone,
  Car
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Salary Processing",
      description: "Efficient and secure salary processing services for organizations and employees.",
      color: "bg-navy/10 text-navy"
    },
    {
      icon: PiggyBank,
      title: "Savings Accounts",
      description: "Competitive savings accounts with attractive interest rates and flexible terms.",
      color: "bg-yellow/10 text-yellow"
    },
    {
      icon: Building2,
      title: "Pension Processing",
      description: "Comprehensive pension management and processing services for retirees.",
      color: "bg-navy/10 text-navy"
    },
    {
      icon: Shield,
      title: "Safe Custody",
      description: "Secure storage and custody services for your valuable documents and items.",
      color: "bg-yellow/10 text-yellow"
    },
    {
      icon: FileText,
      title: "Cheque Processing",
      description: "Fast and reliable cheque processing and clearing services.",
      color: "bg-navy/10 text-navy"
    },
    {
      icon: Send,
      title: "Money Transfer",
      description: "Quick and secure money transfer services within Kenya and internationally.",
      color: "bg-yellow/10 text-yellow"
    },
    {
      icon: CreditCard,
      title: "Credit Facilities",
      description: "Affordable loans and credit facilities to meet your financial needs.",
      color: "bg-navy/10 text-navy"
    },
    {
      icon: GraduationCap,
      title: "Financial Literacy",
      description: "Educational programs to improve your financial knowledge and skills.",
      color: "bg-yellow/10 text-yellow"
    }
  ];

  const savingsProducts = [
    { title: "Share Capital Account", icon: Users },
    { title: "BOSA Deposits Account", icon: Building2 },
    { title: "Payroll Account", icon: Wallet },
    { title: "Akiba Savings Account", icon: PiggyBank },
    { title: "Lengo Savings Account", icon: Target },
    { title: "Junior Savings Account", icon: Heart },
    { title: "Mstaafu Daima", icon: Users },
    { title: "Yield Plus Account", icon: TrendingUp },
  ];

  const loanProducts = [
    { title: "Elimu Plus", icon: GraduationCap },
    { title: "Emergency Express", icon: Smartphone },
    { title: "iPremium Loan", icon: CreditCard },
    { title: "Elimu Bora", icon: GraduationCap },
    { title: "Tuliza Loan", icon: Smartphone },
    { title: "Jipange Loan", icon: Briefcase },
    { title: "Asset Finance", icon: Car },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive financial services designed to meet your needs at every stage of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-border"
            >
              <div className={`inline-flex p-4 rounded-2xl ${service.color} mb-6 group-hover:scale-110 transition-all duration-300`}>
                <service.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-card-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};