
import { useState } from "react";
import { Calculator, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState<string>("500000");
  const [loanTerm, setLoanTerm] = useState<string>("24");
  const [loanType, setLoanType] = useState<string>("elimu-plus");

  // Loan types with monthly interest rates on reducing balance
  const loanTypes = {
    "elimu-plus": { name: "Elimu Plus", monthlyRate: 1.8 },
    "ipremium": { name: "iPremium", monthlyRate: 2.0 },
    "elimu-bora": { name: "Elimu Bora Loan", monthlyRate: 1.5 },
    "jipange": { name: "Jipange Loan", monthlyRate: 1.6 }
  };

  const calculateMonthlyPayment = () => {
    const principal = parseFloat(loanAmount);
    const monthlyRate = loanTypes[loanType as keyof typeof loanTypes].monthlyRate / 100; // Convert to decimal
    const numberOfPayments = parseFloat(loanTerm);

    if (principal && monthlyRate && numberOfPayments) {
      const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
                            (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      return monthlyPayment;
    }
    return 0;
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalAmount = monthlyPayment * parseFloat(loanTerm);
  const totalInterest = totalAmount - parseFloat(loanAmount);
  const currentMonthlyRate = loanTypes[loanType as keyof typeof loanTypes].monthlyRate;

  return (
    <section id="loans" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loan Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your monthly payments and see how much you can borrow
            with our interactive loan calculator.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-8">
              <Calculator className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Calculate Your Loan</h3>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="loanType" className="text-base font-medium mb-2 block">
                  Loan Type
                </Label>
                <Select value={loanType} onValueChange={setLoanType}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select loan type" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(loanTypes).map(([key, type]) => (
                      <SelectItem key={key} value={key}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="loanAmount" className="text-base font-medium mb-2 block">
                  Loan Amount (KSh)
                </Label>
                <Input
                  id="loanAmount"
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="h-12 text-lg"
                  placeholder="500,000"
                />
              </div>

              <div>
                <Label htmlFor="loanTerm" className="text-base font-medium mb-2 block">
                  Loan Term (months)
                </Label>
                <Input
                  id="loanTerm"
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  className="h-12 text-lg"
                  placeholder="24"
                />
              </div>

              <Button className="w-full h-12 text-lg">
                Apply for This Loan
              </Button>
            </div>
          </div>

          {/* Results */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Loan Summary</h3>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6">
                  <div className="text-sm text-gray-600 mb-1">Monthly Payment</div>
                  <div className="text-3xl font-bold text-primary">
                    KSh {monthlyPayment.toLocaleString('en-KE', { maximumFractionDigits: 0 })}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4">
                    <div className="text-sm text-gray-600 mb-1">Total Amount</div>
                    <div className="text-xl font-bold text-gray-900">
                      KSh {totalAmount.toLocaleString('en-KE', { maximumFractionDigits: 0 })}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <div className="text-sm text-gray-600 mb-1">Total Interest</div>
                      <div className="text-xl font-bold text-primary">
                        KSh {totalInterest.toLocaleString('en-KE', { maximumFractionDigits: 0 })}
                      </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Loan Details</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Principal:</span>
                      <span className="font-medium ml-2">KSh {parseFloat(loanAmount).toLocaleString('en-KE')}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Interest Rate:</span>
                      <span className="font-medium ml-2">{currentMonthlyRate}% per month</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Term:</span>
                      <span className="font-medium ml-2">{loanTerm} months</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Type:</span>
                      <span className="font-medium ml-2">{loanTypes[loanType as keyof typeof loanTypes]?.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h4 className="font-semibold text-yellow-800 mb-2">Important Notes</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Interest rates are calculated on reducing balance method</li>
                <li>• This is an estimate. Actual rates may vary based on your credit profile</li>
                <li>• Processing fees and insurance may apply</li>
                <li>• All loans subject to approval and terms & conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
