
import { PiggyBank, CreditCard, Home, Car, GraduationCap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Services = () => {
  const services = [
    {
      icon: PiggyBank,
      title: "Savings Accounts",
      description: "Flexible savings options with competitive interest rates and no hidden fees.",
      features: ["Minimum balance: KSh 500", "Up to 8% annual interest", "Mobile banking", "ATM access"],
      color: "bg-green-100 text-green-600"
    },
    {
      icon: CreditCard,
      title: "Personal Loans",
      description: "Quick access to funds for your personal needs with flexible repayment terms.",
      features: ["Up to KSh 2M", "12% interest rate", "3x salary limit", "Quick approval"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Home,
      title: "Mortgage Loans",
      description: "Make your dream home a reality with our affordable mortgage solutions.",
      features: ["Up to KSh 20M", "15-year terms", "10% interest rate", "Land purchase"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Car,
      title: "Vehicle Loans",
      description: "Drive your dream car with competitive auto financing options.",
      features: ["New & used cars", "Up to KSh 5M", "5-year terms", "Quick processing"],
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: GraduationCap,
      title: "Education Loans",
      description: "Invest in your future with our education financing programs.",
      features: ["School fees", "Up to KSh 1M", "Flexible terms", "Grace period"],
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: Heart,
      title: "Insurance Services",
      description: "Comprehensive insurance coverage to protect you and your family.",
      features: ["Life insurance", "Medical cover", "Loan protection", "Group schemes"],
      color: "bg-red-100 text-red-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Financial Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From savings to loans, we provide a complete range of financial products 
            designed to meet your needs at every stage of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className={`inline-flex p-4 rounded-2xl ${service.color} mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
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
      </div>
    </section>
  );
};
