
import { PiggyBank, CreditCard, Home, Car, GraduationCap, Heart, Building, Banknote, Users, TrendingUp, Briefcase, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Services = () => {
  const savingsProducts = [
    {
      icon: Building,
      title: "Share Capital Account",
      description: "This represents members ownership of the society in terms of shares.",
      features: ["For SACCO's financial stability and growth", "Basis of distributing surplus inform of dividends"],
      color: "bg-green-100 text-green-600"
    },
    {
      icon: PiggyBank,
      title: "BOSA Deposits Account",
      description: "This is a deposit account where members save and build up their non-withdrawable deposits.",
      features: ["Build non-withdrawable deposits", "Member savings account", "Secure deposit option"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Briefcase,
      title: "Payroll Account",
      description: "A savings and salary/pension processing account for some salaried/pension members.",
      features: ["Salary/pension processing", "Allows for voluntary deposits", "Funds are accessible"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Banknote,
      title: "Akiba Savings Account",
      description: "This is a savings accounts for all types of members of the SACCO who need a voluntary savings account for their personal savings outside the salaries",
      features: ["Voluntary savings", "Personal savings outside salaries", "All member types welcome"],
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: TrendingUp,
      title: "Lengo Savings Account",
      description: "This is an investment account designed for those customers who are geared towards building up savings to achieve dreams in life.",
      features: ["Investment from 3 months", "6 months and 12 months", "Build savings for dreams"],
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: Baby,
      title: "Junior Savings Account",
      description: "Provides a plan for investing in your dependents' future. The account is opened and operated by the parent/guardian on behalf of the minor (person below 18yrs)",
      features: ["For minors under 18 years", "Parent/guardian operated", "Investment in dependents' future"],
      color: "bg-pink-100 text-pink-600"
    }
  ];

  const loanProducts = [
    {
      icon: GraduationCap,
      title: "Elimu Plus Loan",
      description: "This is a facility enables members for self-development through their education advancement or that of their loved ones.",
      features: ["Longer repayment period", "Education advancement", "Flexible repayment options"],
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Heart,
      title: "Premium Loan",
      description: "This is a facility for the members to address emergency financial needs e.g., medical, funeral etc.",
      features: ["Emergency financial needs", "Medical expenses", "Funeral costs"],
      color: "bg-red-100 text-red-600"
    },
    {
      icon: CreditCard,
      title: "Emergency Express Loan",
      description: "An advance through the phone to finance budget deficit/discreet personal needs. Available for those earning their salary through our Fosa",
      features: ["Phone advance", "Budget deficit financing", "For Fosa salary earners"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Elimu Bora Loan",
      description: "This is a facility for financing education of the members and their dependents (fees and other costs for primary, secondary, college, university education).",
      features: ["Education financing", "Primary to university", "One year repayment"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Car,
      title: "Asset Finance",
      description: "This loan product enables SACCO members to acquire assets such as land, motor vehicles, motor cycles, machinery and other productive assets.",
      features: ["Land acquisition", "Motor vehicles", "Productive assets"],
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Building,
      title: "Project Finance",
      description: "This loan product enables SACCO members who have on-going business projects that need financial support from time.",
      features: ["Business projects", "Based on feasibility", "Ability to repay assessed"],
      color: "bg-teal-100 text-teal-600"
    }
  ];

  const additionalLoans = [
    { title: "Jipange Loan", description: "Long term FOSA loan for newly employed teachers before qualifying for other facilities." },
    { title: "Zidisha Loan", description: "One-year facility to boost non-withdrawable deposits." },
    { title: "Payment Advance", description: "Short-term advance against expected payment due to member." },
    { title: "Tech Advance", description: "Acquiring small assets e.g., mobile phones, laptops, tablets, smart TVs, gas cooker, solar panels." },
    { title: "Tuliza Loan", description: "Phone advance for budget deficit/discreet personal needs through mobile lending credit system." },
    { title: "Chai Loan", description: "Short term needs of tea farmers for farm development, capital and consumption needs." },
    { title: "Chai Advance", description: "Tea picking labor needs of the farmer within the month." },
    { title: "Mifugo Loan", description: "Allow dairy farmers purchase good quality cows for high milk production." },
    { title: "Maziwa Loan", description: "Short-term loan for dairy farmers who deliver through registered dairy cooperatives." },
    { title: "Maize Loan", description: "Short-term agricultural loan for maize farmers to finance farm inputs." },
    { title: "Kilimo Imara Loan", description: "Short term agricultural loans to horticultural, poultry, and cane farmers." },
    { title: "Business Booster Loan", description: "Working capital for business people based on business turnover and cash flow." },
    { title: "Bima Loan", description: "Credit facility to pay insurance premium in easy installments for various policies." }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Salary processing</h3>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Savings accounts</h3>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Pension processing</h3>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Safe custody</h3>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Cheque processing</h3>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Money transfer</h3>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Credit facilities</h3>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Financial literacy</h3>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From savings to credit facilities, we provide a complete range of financial products 
            designed to meet your needs at every stage of life.
          </p>
        </div>

        <Tabs defaultValue="savings" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="savings" className="text-lg py-3">Savings Products</TabsTrigger>
            <TabsTrigger value="loans" className="text-lg py-3">Loan Products</TabsTrigger>
          </TabsList>

          <TabsContent value="savings" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {savingsProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className={`inline-flex p-4 rounded-2xl ${product.color} mb-6 group-hover:scale-110 transition-transform`}>
                    <product.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="loans" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {loanProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className={`inline-flex p-4 rounded-2xl ${product.color} mb-6 group-hover:scale-110 transition-transform`}>
                    <product.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    Apply Now
                  </Button>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Loan Products</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {additionalLoans.map((loan, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-900 mb-2">{loan.title}</h4>
                    <p className="text-sm text-gray-600">{loan.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
