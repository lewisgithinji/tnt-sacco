import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Building2, Wallet, PiggyBank, Target, Heart, TrendingUp } from "lucide-react";

const DepositProducts = () => {
  const products = [
    {
      title: "Share Capital Account",
      description: "Represents your ownership of the society in terms of shares",
      features: [
        "Ensures SACCO's financial stability and growth",
        "Basis for distributing surplus in form of dividends", 
        "Builds your ownership stake in the SACCO",
        "Required for all SACCO members"
      ],
      icon: <Users className="h-8 w-8 text-green-600" />
    },
    {
      title: "BOSA Deposits Account", 
      description: "A deposit account where members save and build up their non-withdrawable deposits",
      features: [
        "Non-withdrawable savings that build over time",
        "Enhances your borrowing capacity",
        "Contributes to SACCO's lending capital",
        "Earns competitive interest rates",
        "Refundable upon cessation or death"
      ],
      icon: <Building2 className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Payroll Account",
      description: "A savings and salary/pension processing account for salaried/pension members",
      features: [
        "Convenient salary and pension processing",
        "Allows for voluntary additional deposits",
        "Funds are easily accessible when needed",
        "Streamlined payroll management"
      ],
      icon: <Wallet className="h-8 w-8 text-purple-600" />
    },
    {
      title: "Akiba Savings Account",
      description: "A voluntary savings account for all SACCO members for personal savings outside salaries",
      features: [
        "Flexible savings for all member types",
        "Personal savings separate from employment income",
        "Competitive interest rates",
        "Easy deposits and withdrawals"
      ],
      icon: <PiggyBank className="h-8 w-8 text-orange-600" />
    },
    {
      title: "Lengo Savings Account", 
      description: "An investment account designed to help you build savings to achieve your life dreams",
      features: [
        "Goal-oriented savings for houses, land, cars, holidays",
        "Investment terms: 3 months, 6 months, and 12 months",
        "Higher returns for longer investment periods",
        "Helps turn your dreams into achievable goals"
      ],
      icon: <Target className="h-8 w-8 text-teal-600" />
    },
    {
      title: "Junior Savings Account",
      description: "A plan for investing in your dependents' future, operated by parent/guardian",
      features: [
        "Designed for minors (persons below 18 years)",
        "Opened and operated by parent/guardian",
        "Builds financial foundation for children",
        "Educational savings with attractive returns"
      ],
      icon: <Heart className="h-8 w-8 text-pink-600" />
    },
    {
      title: "Mstaafu Daima",
      description: "A voluntary savings account designed for retiring members",
      features: [
        "Structured payout scheme",
        "Competitive interest rates",
        "No uplifting charges upon maturity",
        "Access to loan facility up to 90% of investment/deposit"
      ],
      icon: <Users className="h-8 w-8 text-amber-600" />
    },
    {
      title: "Yield Plus Account",
      description: "A savings account for members investing lump sums",
      features: [
        "Investment period: 1 to 12 months",
        "Competitive interest rates",
        "Flexible investment periods",
        "Higher returns for longer terms"
      ],
      icon: <TrendingUp className="h-8 w-8 text-emerald-600" />
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