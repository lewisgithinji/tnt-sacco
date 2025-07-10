import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Banknote, TrendingUp, Shield } from "lucide-react";

const DepositProducts = () => {
  const products = [
    {
      title: "Savings Account",
      description: "Flexible savings account with competitive interest rates",
      features: ["No minimum balance", "Monthly interest payments", "Free withdrawals", "Mobile banking access"],
      icon: <Banknote className="h-8 w-8 text-green-600" />
    },
    {
      title: "Fixed Deposit Account",
      description: "Higher returns for fixed-term deposits",
      features: ["Higher interest rates", "Terms from 3-24 months", "Automatic renewal option", "Certificate of deposit"],
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Junior Savings",
      description: "Special savings account for children and students",
      features: ["Lower minimum balance", "Educational materials", "Parent/guardian monitoring", "Gift incentives"],
      icon: <Shield className="h-8 w-8 text-purple-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Deposit Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Grow your savings with our range of deposit products designed to meet your financial goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
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
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Open an Account</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Required Documents</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Valid National ID or Passport</li>
                  <li>• Proof of residence (utility bill)</li>
                  <li>• Recent passport-size photographs</li>
                  <li>• Employment letter or business permit</li>
                  <li>• Initial deposit as per account type</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Process</h3>
                <ol className="space-y-2 text-gray-700">
                  <li>1. Visit any TNT SACCO branch</li>
                  <li>2. Fill out the account opening form</li>
                  <li>3. Submit required documents</li>
                  <li>4. Make your initial deposit</li>
                  <li>5. Receive your account details</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DepositProducts;