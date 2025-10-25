import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  GraduationCap,
  Heart,
  CreditCard,
  Car,
  Building,
  Smartphone,
  TrendingUp,
  Briefcase,
  DollarSign,
  Truck,
  Wheat,
  Milk,
  Shield,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import elimuPlusImg from "@/assets/loans/elimu-plus.jpg";
import iPremiumImg from "@/assets/loans/ipremium.jpg";
import emergencyExpressImg from "@/assets/loans/emergency-express.jpg";
import elimuBoraImg from "@/assets/loans/elimu-bora.jpg";
import assetFinanceImg from "@/assets/loans/asset-finance.jpg";
import jipangeImg from "@/assets/loans/jipange.jpg";
import tulizaImg from "@/assets/loans/tuliza.jpg";

const LoanProducts = () => {
  const loanProducts = [
    {
      title: "Elimu Plus",
      description:
        "A comprehensive facility that enables members for self-development through education advancement for themselves or their loved ones",
      features: [
        "Longer repayment period for flexibility",
        "Covers education advancement costs",
        "Supports personal and family education goals",
        "Competitive rates for education",
      ],
      icon: <GraduationCap className="h-6 w-6 text-navy" />,
      image: elimuPlusImg,
      imageAlt: "Graduate celebrating achievement",
    },
    {
      title: "iPremium Loan",
      description:
        "An emergency facility designed to address urgent financial needs such as medical expenses and funeral costs",
      features: [
        "Quick approval for emergency situations",
        "Covers medical and healthcare expenses",
        "Funeral and bereavement support",
        "Flexible repayment terms",
      ],
      icon: <Heart className="h-6 w-6 text-navy" />,
      image: iPremiumImg,
      imageAlt: "Emergency medical support",
    },
    {
      title: "Emergency Express",
      description:
        "An instant phone advance to finance budget deficits and discreet personal needs, available for Fosa salary earners",
      features: [
        "Instant phone-based application",
        "Quick budget deficit financing",
        "Available 24/7 through mobile platform",
        "For members earning salary through Fosa",
      ],
      icon: <Smartphone className="h-6 w-6 text-navy" />,
      image: emergencyExpressImg,
      imageAlt: "Mobile phone emergency loan service",
    },
    {
      title: "Elimu Bora",
      description:
        "Education financing facility for members and their dependents covering fees and costs from primary to university level",
      features: [
        "Covers primary, secondary, college, and university education",
        "One-year flexible repayment period",
        "Supports both fees and educational materials",
        "Available for members and dependents",
      ],
      icon: <GraduationCap className="h-6 w-6 text-navy" />,
      image: elimuBoraImg,
      imageAlt: "Students in classroom learning",
    },
    {
      title: "Tuliza Loan",
      description: "Phone advance for budget deficit and discreet personal needs through mobile lending credit system",
      features: [
        "Mobile lending credit system",
        "Instant phone advance",
        "Budget deficit financing",
        "Discreet personal needs",
      ],
      icon: <Smartphone className="h-6 w-6 text-navy" />,
      image: tulizaImg,
      imageAlt: "Tuliza loan mobile service",
    },
    {
      title: "Jipange Loan",
      description:
        "Long-term FOSA loan specifically designed for newly employed teachers before they qualify for other facilities",
      features: [
        "Long-term financing",
        "For newly employed teachers",
        "Bridge to other facilities",
        "FOSA-based lending",
      ],
      icon: <Briefcase className="h-6 w-6 text-navy" />,
      image: jipangeImg,
      imageAlt: "Family moving into new home",
    },
    {
      title: "Asset Finance",
      description:
        "Enables SACCO members to acquire productive assets including land, motor vehicles, motorcycles, and machinery",
      features: [
        "Land acquisition financing",
        "New and used motor vehicles",
        "Motorcycles and equipment",
        "Productive business machinery",
      ],
      icon: <Car className="h-6 w-6 text-navy" />,
      image: assetFinanceImg,
      imageAlt: "Person with car keys for asset financing",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Loan Products - Affordable Credit Solutions"
        description="Explore TNT SACCO's competitive loan products including education loans, emergency loans, personal loans, asset finance, business loans, and agricultural loans with flexible repayment terms."
        canonical="https://www.tntsacco.co.ke/loan-products"
        keywords="TNT SACCO loans, education loans Kenya, emergency loans, personal loans, asset finance, business loans, agricultural loans, affordable credit, SACCO loans Kenya"
      />
      <Header />

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Credit Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive credit products to help you achieve your financial goals and dreams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {loanProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white">{product.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow p-3 rounded-full shadow-lg">
                    {product.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-navy flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
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
            <p className="text-lg mb-6">
              Visit any of our branches or contact us to start your credit application today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <span className="bg-white text-navy px-6 py-3 rounded-lg font-semibold">Email: loans@tntsacco.co.ke</span>
              <span className="bg-white text-navy px-6 py-3 rounded-lg font-semibold">Call: +254 111 050 510</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoanProducts;
