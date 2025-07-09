
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Download, FileText, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Downloads = () => {
  const downloadCategories = [
    {
      title: "Membership Forms",
      description: "Forms required for membership application and account management",
      files: [
        { name: "Membership Application", type: "PDF", size: "2.3 MB", date: "Updated Dec 2024" },
        { name: "ATM Pin Reset Form", type: "PDF", size: "1.1 MB", date: "Updated Dec 2024" },
        { name: "Alternative Guarantee Form", type: "PDF", size: "1.5 MB", date: "Updated Dec 2024" },
        { name: "Authority for Share Contribution", type: "PDF", size: "1.2 MB", date: "Updated Nov 2024" },
        { name: "Cessation Form", type: "PDF", size: "1.3 MB", date: "Updated Nov 2024" },
        { name: "Dormant Account Activation", type: "PDF", size: "1.0 MB", date: "Updated Dec 2024" },
      ]
    },
    {
      title: "Loan Applications",
      description: "Downloadable forms for various loan products and applications",
      files: [
        { name: "Employers Authority to Apply Loan", type: "PDF", size: "1.8 MB", date: "Updated Dec 2024" },
        { name: "Group Minute Extract Form", type: "PDF", size: "1.4 MB", date: "Updated Nov 2024" },
      ]
    },
    {
      title: "Banking Forms",
      description: "Forms for mobile banking and other banking services",
      files: [
        { name: "M-Banking Application Form", type: "PDF", size: "1.6 MB", date: "Updated Dec 2024" },
        { name: "Pin Reset Form", type: "PDF", size: "1.1 MB", date: "Updated Dec 2024" },
        { name: "TNT Insurance Form", type: "PDF", size: "2.0 MB", date: "Updated Nov 2024" },
      ]
    },
    {
      title: "Policy Documents",
      description: "Important policy documents and terms of service",
      files: [
        { name: "Member Handbook", type: "PDF", size: "5.8 MB", date: "Updated Jan 2024" },
        { name: "Loan Policy Document", type: "PDF", size: "4.2 MB", date: "Updated Dec 2023" },
        { name: "Terms and Conditions", type: "PDF", size: "2.7 MB", date: "Updated Nov 2023" },
      ]
    },
    {
      title: "Financial Reports",
      description: "Annual reports and financial statements",
      files: [
        { name: "Annual Report 2023", type: "PDF", size: "8.5 MB", date: "Published Mar 2024" },
        { name: "Audited Financial Statements 2023", type: "PDF", size: "6.3 MB", date: "Published Mar 2024" },
        { name: "Quarterly Report Q3 2024", type: "PDF", size: "3.1 MB", date: "Published Oct 2024" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Downloads Center
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access all the forms, documents, and resources you need for your TNT SACCO services.
                All documents are available in PDF format for easy download and printing.
              </p>
            </div>
          </div>
        </section>

        {/* Downloads Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {downloadCategories.map((category, index) => (
                <div key={index}>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {category.title}
                    </h2>
                    <p className="text-lg text-gray-600">
                      {category.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.files.map((file, fileIndex) => (
                      <Card key={fileIndex} className="hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between">
                            <FileText className="w-8 h-8 text-green-600 mb-2" />
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              {file.type}
                            </span>
                          </div>
                          <CardTitle className="text-lg">{file.name}</CardTitle>
                          <CardDescription className="flex items-center space-x-4 text-sm">
                            <span className="flex items-center">
                              <Download className="w-4 h-4 mr-1" />
                              {file.size}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {file.date}
                            </span>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button className="w-full bg-green-600 hover:bg-green-700">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help with Forms?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Our customer service team is ready to assist you with any questions about these forms 
              or help you complete your applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <User className="w-5 h-5 mr-2" />
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

export default Downloads;
