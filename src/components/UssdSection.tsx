
import { Smartphone, Send, CreditCard, Wallet, DollarSign, CircleDollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const UssdSection = () => {
  const ussdFeatures = [
    {
      icon: Send,
      title: "Fosa to Mpesa",
      description: "Transfer money from your SACCO account directly to your Mpesa wallet instantly",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: DollarSign,
      title: "Request Loan",
      description: "Apply for loans quickly and conveniently using your mobile phone",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Smartphone,
      title: "Airtime Purchase",
      description: "Buy airtime for yourself or others directly from your SACCO account",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Wallet,
      title: "My Balances",
      description: "Check your account balances and transaction history anytime, anywhere",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: CircleDollarSign,
      title: "Deposit Contribution",
      description: "Make contributions to your SACCO account using mobile money services",
      color: "bg-teal-100 text-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Smartphone className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            USSD Banking at Your Fingertips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Access all your SACCO services instantly by dialing{" "}
            <span className="font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg">
              *477#
            </span>{" "}
            from any mobile phone. No internet required!
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
            <div className="text-center">
              <p className="text-gray-600 mb-2">Dial this code to get started:</p>
              <div className="text-4xl font-bold text-primary bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                *477#
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ussdFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${feature.color} flex-shrink-0`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Available 24/7 - No Internet Required
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our USSD service works on all mobile networks and doesn't require internet connectivity. 
              Bank with us anytime, anywhere across Kenya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
