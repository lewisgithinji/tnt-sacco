
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Download, FileText, Calendar, User, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useMemo } from "react";

const Downloads = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [downloadCounts, setDownloadCounts] = useState<Record<string, number>>({
    "alternate-guarantee": 245,
    "atm-pin-reset-82": 189,
    "authority-recover-5": 156,
    "dormant-account-100": 98,
    "employer-loan-96": 312,
    "group-minute-98": 167,
    "m-banking-44": 423,
    "membership-application": 567,
    "pin-reset-26": 234,
    "share-loan-adjustment-12": 178,
    "insurance-90": 145
  });

  const downloadForms = [
    {
      id: "alternate-guarantee",
      title: "Alternate Guarantee Form",
      category: "Membership",
      description: "Alternative guarantee form for membership applications",
      size: "1.2 MB",
      uploadDate: "Dec 15, 2024",
      keywords: ["guarantee", "alternate", "membership"]
    },
    {
      id: "atm-pin-reset-82",
      title: "ATM PIN Reset Form 82",
      category: "Banking",
      description: "Reset your ATM PIN using this official form",
      size: "0.8 MB",
      uploadDate: "Dec 12, 2024",
      keywords: ["atm", "pin", "reset", "banking"]
    },
    {
      id: "authority-recover-5",
      title: "Authority to Recover Form 5",
      category: "Loans",
      description: "Authorization form for loan recovery procedures",
      size: "1.1 MB",
      uploadDate: "Dec 10, 2024",
      keywords: ["authority", "recover", "loan"]
    },
    {
      id: "dormant-account-100",
      title: "Dormant Account Activation Form 100",
      category: "Membership",
      description: "Reactivate your dormant SACCO account",
      size: "0.9 MB",
      uploadDate: "Dec 8, 2024",
      keywords: ["dormant", "account", "activation"]
    },
    {
      id: "employer-loan-96",
      title: "Employers' Authority to Apply for Loan Form TNT 96",
      category: "Loans",
      description: "Employer authorization for employee loan applications",
      size: "1.4 MB",
      uploadDate: "Dec 5, 2024",
      keywords: ["employer", "authority", "loan", "application"]
    },
    {
      id: "group-minute-98",
      title: "Group Minute Extract Form 98",
      category: "Loans",
      description: "Extract form for group meeting minutes",
      size: "1.0 MB",
      uploadDate: "Dec 3, 2024",
      keywords: ["group", "minute", "extract"]
    },
    {
      id: "m-banking-44",
      title: "M-Banking Application Form 44",
      category: "Banking",
      description: "Apply for mobile banking services",
      size: "1.3 MB",
      uploadDate: "Nov 28, 2024",
      keywords: ["mobile", "banking", "application", "m-banking"]
    },
    {
      id: "membership-application",
      title: "Membership Application Form",
      category: "Membership",
      description: "Official membership application for TNT SACCO",
      size: "2.1 MB",
      uploadDate: "Nov 25, 2024",
      keywords: ["membership", "application", "registration"]
    },
    {
      id: "pin-reset-26",
      title: "PIN Reset Form 26",
      category: "Banking",
      description: "General PIN reset form for banking services",
      size: "0.7 MB",
      uploadDate: "Nov 20, 2024",
      keywords: ["pin", "reset", "banking"]
    },
    {
      id: "share-loan-adjustment-12",
      title: "Share, Loan, Advance Adjustment, Stoppage Slip – Form 12",
      category: "Loans",
      description: "Form for adjustments and stoppages of shares and loans",
      size: "1.5 MB",
      uploadDate: "Nov 18, 2024",
      keywords: ["share", "loan", "adjustment", "stoppage", "advance"]
    },
    {
      id: "insurance-90",
      title: "TNT Insurance Form 90",
      category: "Insurance",
      description: "Insurance application and claims form",
      size: "1.8 MB",
      uploadDate: "Nov 15, 2024",
      keywords: ["insurance", "claims", "coverage"]
    }
  ];

  const categories = ["all", "Membership", "Banking", "Loans", "Insurance"];

  const handleDownload = (formId: string) => {
    setDownloadCounts(prev => ({
      ...prev,
      [formId]: (prev[formId] || 0) + 1
    }));
    
    // Create download link for PDF
    const pdfUrl = `/downloads/${formId}.pdf`;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${formId}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredForms = useMemo(() => {
    return downloadForms.filter(form => {
      const matchesSearch = searchTerm === "" || 
        form.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        form.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        form.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === "all" || form.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-6">
                Downloads Center
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Access all the forms, documents, and resources you need for your TNT SACCO services.
                All documents are available in PDF format for easy download and printing.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-background border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search forms by name or keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Forms Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredForms.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">No forms found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredForms.map((form) => (
                  <Card key={form.id} className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-3">
                        <FileText className="w-8 h-8 text-primary" />
                        <div className="flex flex-col items-end gap-1">
                          <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">
                            {form.category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {downloadCounts[form.id]} downloads
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight mb-2">{form.title}</CardTitle>
                      <CardDescription className="text-sm mb-3">
                        {form.description}
                      </CardDescription>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center">
                          <Download className="w-3 h-3 mr-1" />
                          {form.size}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {form.uploadDate}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        onClick={() => handleDownload(form.id)}
                        className="w-full"
                        variant="default"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Help Section */}
        <section className="bg-secondary/5 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Help with Forms?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Our customer service team is ready to assist you with any questions about these forms 
              or help you complete your applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default">
                <User className="w-5 h-5 mr-2" />
                Contact Support
              </Button>
              <Button size="lg" variant="outline">
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
