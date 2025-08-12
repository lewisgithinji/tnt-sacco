import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, GraduationCap, Heart, CreditCard, Car, Building, Smartphone, TrendingUp, Briefcase, DollarSign, Truck, Wheat, Milk, Shield } from "lucide-react";

const LoanProducts = () => {
  const loanProducts = [
    {
      title: "Elimu Plus",
      description: "A comprehensive facility that enables members for self-development through education advancement for themselves or their loved ones",
      features: [
        "Longer repayment period for flexibility",
        "Covers education advancement costs",
        "Supports personal and family education goals",
        "Competitive rates for education"
      ],
      icon: <GraduationCap className="h-8 w-8 text-navy" />
    },
    {
      title: "iPremium Loan",
      description: "An emergency facility designed to address urgent financial needs such as medical expenses and funeral costs",
      features: [
        "Quick approval for emergency situations",
        "Covers medical and healthcare expenses",
        "Funeral and bereavement support",
        "Flexible repayment terms"
      ],
      icon: <Heart className="h-8 w-8 text-navy" />
    },
    {
      title: "Emergency Express",
      description: "An instant phone advance to finance budget deficits and discreet personal needs, available for Fosa salary earners",
      features: [
        "Instant phone-based application",
        "Quick budget deficit financing",
        "Available 24/7 through mobile platform",
        "For members earning salary through Fosa"
      ],
      icon: <Smartphone className="h-8 w-8 text-navy" />
    },
    {
      title: "Elimu Bora",
      description: "Education financing facility for members and their dependents covering fees and costs from primary to university level",
      features: [
        "Covers primary, secondary, college, and university education",
        "One-year flexible repayment period",
        "Supports both fees and educational materials",
        "Available for members and dependents"
      ],
      icon: <GraduationCap className="h-8 w-8 text-navy" />
    },
    {
      title: "Tuliza Loan",
      description: "Phone advance for budget deficit and discreet personal needs through mobile lending credit system",
      features: [
        "Mobile lending credit system",
        "Instant phone advance",
        "Budget deficit financing",
        "Discreet personal needs"
      ],
      icon: <Smartphone className="h-8 w-8 text-navy" />
    },
    {
      title: "Jipange Loan",
      description: "Long-term FOSA loan specifically designed for newly employed teachers before they qualify for other facilities",
      features: [
        "Long-term financing",
        "For newly employed teachers",
        "Bridge to other facilities",
        "FOSA-based lending"
      ],
      icon: <Briefcase className="h-8 w-8 text-navy" />
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
      icon: <Car className="h-8 w-8 text-yellow" />
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Credit Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive credit products to help you achieve your financial goals and dreams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {loanProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    {product.icon}
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-navy" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>


          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Credit Requirements</h2>
              <ul className="space-y-3 text-gray-700">
                <li>• Must be an active SACCO member for at least 3 months</li>
                <li>• Proof of stable income</li>
                <li>• Valid identification documents</li>
                <li>• Guarantors (where applicable)</li>
                <li>• Collateral (for secured loans)</li>
                <li>• Applications are done on our digital platform</li>
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

          <div className="mt-12 bg-gradient-to-r from-navy to-yellow text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-lg mb-6">Visit any of our branches or contact us to start your credit application today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <span className="bg-white text-navy px-6 py-3 rounded-lg font-semibold">
                Email: loans@tntsacco.co.ke
              </span>
              <span className="bg-white text-navy px-6 py-3 rounded-lg font-semibold">
                Call: +254 700 000 000 (final number will be provided later)
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