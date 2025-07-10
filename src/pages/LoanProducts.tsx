import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, GraduationCap, Heart, CreditCard, Car, Building, Smartphone, TrendingUp, Briefcase, DollarSign, Truck, Wheat, Milk, Shield } from "lucide-react";

const LoanProducts = () => {
  const loanProducts = [
    {
      title: "Elimu Plus Loan",
      description: "A comprehensive facility that enables members for self-development through education advancement for themselves or their loved ones",
      features: [
        "Longer repayment period for flexibility",
        "Covers education advancement costs",
        "Supports personal and family education goals",
        "Competitive interest rates for education"
      ],
      icon: <GraduationCap className="h-8 w-8 text-green-600" />,
      rate: "From 10% p.a."
    },
    {
      title: "Premium Loan",
      description: "An emergency facility designed to address urgent financial needs such as medical expenses and funeral costs",
      features: [
        "Quick approval for emergency situations",
        "Covers medical and healthcare expenses",
        "Funeral and bereavement support",
        "Flexible repayment terms"
      ],
      icon: <Heart className="h-8 w-8 text-red-600" />,
      rate: "From 12% p.a."
    },
    {
      title: "Emergency Express Loan",
      description: "An instant phone advance to finance budget deficits and discreet personal needs, available for Fosa salary earners",
      features: [
        "Instant phone-based application",
        "Quick budget deficit financing",
        "Available 24/7 through mobile platform",
        "For members earning salary through Fosa"
      ],
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      rate: "From 15% p.a."
    },
    {
      title: "Elimu Bora Loan",
      description: "Education financing facility for members and their dependents covering fees and costs from primary to university level",
      features: [
        "Covers primary, secondary, college, and university education",
        "One-year flexible repayment period",
        "Supports both fees and educational materials",
        "Available for members and dependents"
      ],
      icon: <GraduationCap className="h-8 w-8 text-purple-600" />,
      rate: "From 8% p.a."
    },
    {
      title: "Asset Finance",
      description: "Enables SACCO members to acquire productive assets including land, motor vehicles, motorcycles, and machinery",
      features: [
        "Land acquisition financing",
        "New and used motor vehicles",
        "Motorcycles and equipment",
        "Productive business machinery"
      ],
      icon: <Car className="h-8 w-8 text-orange-600" />,
      rate: "From 14% p.a."
    },
    {
      title: "Project Finance",
      description: "Business project financing for SACCO members with ongoing projects that need financial support based on feasibility",
      features: [
        "Business project development support",
        "Feasibility-based assessment",
        "Ability to repay evaluation",
        "Long-term business growth support"
      ],
      icon: <Building className="h-8 w-8 text-teal-600" />,
      rate: "From 16% p.a."
    }
  ];

  const additionalLoans = [
    {
      title: "Jipange Loan",
      description: "Long-term FOSA loan specifically designed for newly employed teachers before they qualify for other loan facilities",
      icon: <Briefcase className="h-6 w-6 text-indigo-600" />
    },
    {
      title: "Zidisha Loan", 
      description: "One-year facility designed to boost your non-withdrawable deposits and enhance your savings capacity",
      icon: <TrendingUp className="h-6 w-6 text-green-600" />
    },
    {
      title: "Tech Advance",
      description: "Financing for small technology assets including mobile phones, laptops, tablets, smart TVs, gas cookers, and solar panels",
      icon: <Smartphone className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Business Booster Loan",
      description: "Working capital facility for business people based on business turnover and cash flow analysis",
      icon: <DollarSign className="h-6 w-6 text-purple-600" />
    },
    {
      title: "Mifugo Loan",
      description: "Specialized loan allowing dairy farmers to purchase good quality cows for increased milk production",
      icon: <Milk className="h-6 w-6 text-orange-600" />
    },
    {
      title: "Kilimo Imara Loan",
      description: "Short-term agricultural loans designed for horticultural, poultry, and sugarcane farmers",
      icon: <Wheat className="h-6 w-6 text-green-600" />
    },
    {
      title: "Chai Loan",
      description: "Short-term financing for tea farmers covering farm development, capital investment, and consumption needs",
      icon: <Wheat className="h-6 w-6 text-teal-600" />
    },
    {
      title: "Bima Loan",
      description: "Credit facility to pay insurance premiums in easy installments for various insurance policies",
      icon: <Shield className="h-6 w-6 text-red-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Loan Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive loan products to help you achieve your financial goals and dreams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {loanProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      {product.icon}
                      <CardTitle className="text-xl">{product.title}</CardTitle>
                    </div>
                    <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      {product.rate}
                    </span>
                  </div>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Specialized Loan Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalLoans.map((loan, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 py-3 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    {loan.icon}
                    <h3 className="font-semibold text-gray-900">{loan.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{loan.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Loan Requirements</h2>
              <ul className="space-y-3 text-gray-700">
                <li>• Must be a SACCO member for at least 6 months</li>
                <li>• Proof of stable income</li>
                <li>• Valid identification documents</li>
                <li>• Guarantors (where applicable)</li>
                <li>• Collateral (for secured loans)</li>
                <li>• Loan application form</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Process</h2>
              <ol className="space-y-3 text-gray-700">
                <li>1. Complete loan application form</li>
                <li>2. Submit required documents</li>
                <li>3. Credit assessment and verification</li>
                <li>4. Loan committee approval</li>
                <li>5. Loan disbursement</li>
                <li>6. Begin repayment as agreed</li>
              </ol>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-lg mb-6">Visit any of our branches or contact us to start your loan application today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <span className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold">
                Call: +254 700 000 000
              </span>
              <span className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
                Email: loans@tntsacco.co.ke
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoanProducts;