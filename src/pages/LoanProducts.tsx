import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Home, Car, GraduationCap, Building } from "lucide-react";

const LoanProducts = () => {
  const loanProducts = [
    {
      title: "Personal Loans",
      description: "Quick and flexible personal loans for your immediate needs",
      features: ["Up to KES 5M", "Flexible repayment terms", "Quick approval", "Competitive rates"],
      icon: <Building className="h-8 w-8 text-green-600" />,
      rate: "From 12% p.a."
    },
    {
      title: "Mortgage Loans",
      description: "Achieve your dream of homeownership with our mortgage solutions",
      features: ["Up to 95% financing", "Up to 25 years repayment", "Fixed or variable rates", "Construction loans available"],
      icon: <Home className="h-8 w-8 text-blue-600" />,
      rate: "From 14% p.a."
    },
    {
      title: "Asset Finance",
      description: "Finance your vehicle or equipment purchases",
      features: ["New and used vehicles", "Equipment financing", "Up to 5 years repayment", "Flexible terms"],
      icon: <Car className="h-8 w-8 text-purple-600" />,
      rate: "From 15% p.a."
    },
    {
      title: "Education Loans",
      description: "Invest in your future with our education financing",
      features: ["Local and international studies", "Flexible repayment", "Grace period available", "Parent/student loans"],
      icon: <GraduationCap className="h-8 w-8 text-orange-600" />,
      rate: "From 10% p.a."
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

          <div className="mt-16 grid md:grid-cols-2 gap-8">
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