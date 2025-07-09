
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronDown, Search, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      title: "General Information",
      faqs: [
        {
          question: "What is TNT SACCO?",
          answer: "TNT SACCO is a Savings and Credit Cooperative licensed by SASRA (SACCO Societies Regulatory Authority) to provide financial services to our members. We offer savings accounts, loans, and other financial products to help our members achieve their financial goals."
        },
        {
          question: "Who can become a member of TNT SACCO?",
          answer: "Membership is open to individuals who meet our eligibility criteria, including being of legal age (18+ years), providing required documentation, and paying the membership fee and minimum share capital contribution."
        },
        {
          question: "What are the benefits of joining TNT SACCO?",
          answer: "Members enjoy competitive loan rates, attractive dividend returns, flexible savings products, financial education, insurance services, and access to our digital banking platform."
        }
      ]
    },
    {
      title: "Membership & Accounts",
      faqs: [
        {
          question: "How do I open an account with TNT SACCO?",
          answer: "Visit any of our branches with your original ID/Passport, passport photos, and the minimum share capital. Fill out the membership application form and complete the KYC process. Your account will be activated within 24 hours."
        },
        {
          question: "What is the minimum amount to open an account?",
          answer: "The minimum share capital contribution is KES 5,000. This amount earns dividends based on our annual performance and remains your share in the SACCO."
        },
        {
          question: "Can I have multiple accounts?",
          answer: "Yes, you can open multiple savings accounts for different purposes such as holiday savings, emergency funds, or investment savings. Each account may have different terms and benefits."
        }
      ]
    },
    {
      title: "Loans & Credit",
      faqs: [
        {
          question: "What types of loans do you offer?",
          answer: "We offer personal loans, vehicle loans, mortgage loans, education loans, business loans, and emergency loans. Each loan product has specific terms, rates, and requirements."
        },
        {
          question: "How much can I borrow?",
          answer: "Your borrowing limit depends on your savings history, monthly income, guarantors, and loan type. Generally, you can borrow up to 3 times your savings or as determined by our credit assessment."
        },
        {
          question: "What is the loan application process?",
          answer: "Complete the loan application form, provide required documents (payslips, bank statements, guarantor forms), undergo credit assessment, and upon approval, the loan is disbursed to your account within 48 hours."
        },
        {
          question: "Do I need guarantors for all loans?",
          answer: "Guarantor requirements vary by loan type and amount. Small personal loans may not require guarantors, while larger amounts typically require 1-2 guarantors who are also SACCO members."
        }
      ]
    },
    {
      title: "Digital Services",
      faqs: [
        {
          question: "How do I access mobile banking?",
          answer: "Download our mobile app from Google Play Store or Apple App Store. Register using your member number and follow the setup instructions. You can also use our USSD code *483# for quick transactions."
        },
        {
          question: "What services are available on mobile banking?",
          answer: "You can check balances, transfer funds, pay bills, apply for loans, view statements, and contact customer service through our mobile platform."
        },
        {
          question: "Is mobile banking secure?",
          answer: "Yes, we use bank-level security including encryption, two-factor authentication, and secure login processes to protect your account and personal information."
        }
      ]
    },
    {
      title: "Payments & Transactions",
      faqs: [
        {
          question: "How can I make deposits?",
          answer: "You can deposit money at our branches, through M-Pesa, bank transfers, standing orders, or direct deposits from your employer through our payroll services."
        },
        {
          question: "Are there transaction fees?",
          answer: "We maintain competitive transaction fees. M-Pesa deposits are free, while other transaction fees are outlined in our tariff guide available at branches and on our website."
        },
        {
          question: "How long do transfers take?",
          answer: "Internal transfers are instant. External bank transfers take 1-2 business days, while M-Pesa transactions are processed immediately during business hours."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <HelpCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find quick answers to common questions about TNT SACCO services, 
              membership, loans, and digital banking.
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-12">
                {filteredFAQs.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      {category.title}
                    </h2>
                    
                    <Accordion type="multiple" className="space-y-4">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem 
                          key={faqIndex} 
                          value={`${categoryIndex}-${faqIndex}`}
                          className="border border-gray-200 rounded-lg px-6"
                        >
                          <AccordionTrigger className="text-left font-medium hover:no-underline">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 pt-2 pb-4">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">
                  No FAQs found matching your search. Try different keywords or browse all categories above.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Our customer service team is here to help with any questions not covered in our FAQ section.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Visit Branch
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
