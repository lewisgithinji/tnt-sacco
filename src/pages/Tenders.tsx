import { useState } from "react";
import { Search, Calendar, Download, FileText, Clock, CheckCircle, XCircle, AlertCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface Tender {
  id: string;
  title: string;
  referenceNumber: string;
  category: string;
  description: string;
  publishDate: string;
  closingDate: string;
  status: "open" | "closed" | "awarded" | "cancelled";
  documents: {
    name: string;
    size: string;
    url: string;
  }[];
  estimatedValue?: string;
  eligibilityCriteria?: string[];
}

const Tenders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [downloadCounts, setDownloadCounts] = useState<Record<string, number>>({
    "prequalification-borehole-2025": 47
  });

  // Sample tenders data
  const tenders: Tender[] = [
    {
      id: "prequalification-borehole-2025",
      title: "Prequalification of Borehole Drilling Contractors",
      referenceNumber: "TNT/SACCO/TENDER/2025/001",
      category: "Construction & Infrastructure",
      description: "Trans-National Times DT SACCO Limited invites applications from interested, eligible, and qualified firms for prequalification to undertake borehole drilling, testing, installation of submersible pumps, and related works. The prequalification is open to contractors with proven experience in water resource development and borehole construction projects.",
      publishDate: "2025-11-06",
      closingDate: "2025-11-22",
      status: "open",
      estimatedValue: "To be determined based on project scope",
      eligibilityCriteria: [
        "Must be a registered company/firm in Kenya with valid business registration documents",
        "Minimum 5 years demonstrated experience in borehole drilling and related works",
        "Valid Tax Compliance Certificate from KRA",
        "Certificate of Registration/Incorporation",
        "Proof of financial capability and access to credit facilities",
        "Evidence of completed similar projects (at least 3 references)",
        "Qualified and experienced technical personnel",
        "Appropriate drilling equipment and machinery",
        "Valid licenses and permits for borehole drilling operations"
      ],
      documents: [
        {
          name: "Prequalification Document - Borehole Drilling Contractors",
          size: "2.5 MB",
          url: "/PREQUALIFICATION-Borehole-22112025.pdf"
        }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "open":
        return <Clock className="w-4 h-4" />;
      case "closed":
        return <XCircle className="w-4 h-4" />;
      case "awarded":
        return <CheckCircle className="w-4 h-4" />;
      case "cancelled":
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-800 border-green-200";
      case "closed":
        return "bg-gray-100 text-gray-800 border-gray-200";
      case "awarded":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const getDaysRemaining = (closingDate: string) => {
    const today = new Date();
    const closing = new Date(closingDate);
    const diffTime = closing.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const handleDownload = (tenderId: string, documentUrl: string, documentName: string) => {
    // Increment download count
    setDownloadCounts(prev => ({
      ...prev,
      [tenderId]: (prev[tenderId] || 0) + 1
    }));

    // Trigger download
    const link = document.createElement('a');
    link.href = documentUrl;
    link.download = documentName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter tenders based on search and filters
  const filteredTenders = tenders.filter((tender) => {
    const matchesSearch = tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tender.referenceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tender.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || tender.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || tender.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  // Get unique categories
  const categories = Array.from(new Set(tenders.map(t => t.category)));

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tender Opportunities</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Explore current and past tender opportunities with TNT SACCO. We believe in transparent
              and competitive procurement processes.
            </p>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search tenders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Status Filter */}
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
                <SelectItem value="awarded">Awarded</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>

            {/* Category Filter */}
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Tenders List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredTenders.length}</span> tender{filteredTenders.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Tenders Cards */}
        <div className="space-y-6">
          {filteredTenders.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No tenders found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          ) : (
            filteredTenders.map((tender) => {
              const daysRemaining = getDaysRemaining(tender.closingDate);
              const isOpen = tender.status === "open";

              return (
                <div
                  key={tender.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <Badge className={`${getStatusColor(tender.status)} flex items-center gap-1 px-3 py-1`}>
                            {getStatusIcon(tender.status)}
                            <span className="capitalize">{tender.status}</span>
                          </Badge>
                          {isOpen && daysRemaining > 0 && (
                            <Badge variant="outline" className="border-orange-200 text-orange-700 bg-orange-50">
                              {daysRemaining} day{daysRemaining !== 1 ? 's' : ''} remaining
                            </Badge>
                          )}
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                          {tender.title}
                        </h2>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <FileText className="w-4 h-4" />
                            {tender.referenceNumber}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Published: {formatDate(tender.publishDate)}
                          </span>
                          <span className="flex items-center gap-1 font-semibold text-red-600">
                            <Clock className="w-4 h-4" />
                            Closes: {formatDate(tender.closingDate)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {tender.category}
                      </Badge>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {tender.description}
                    </p>

                    {/* Estimated Value */}
                    {tender.estimatedValue && (
                      <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <p className="text-sm font-semibold text-blue-900">
                          Estimated Value: <span className="font-bold">{tender.estimatedValue}</span>
                        </p>
                      </div>
                    )}

                    {/* Eligibility Criteria */}
                    {tender.eligibilityCriteria && tender.eligibilityCriteria.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Eligibility Criteria:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                          {tender.eligibilityCriteria.map((criteria, index) => (
                            <li key={index}>{criteria}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Documents */}
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Tender Documents:</h4>
                      <div className="space-y-2">
                        {tender.documents.map((doc, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex items-center gap-3 flex-1">
                              <FileText className="w-5 h-5 text-primary" />
                              <div className="flex-1">
                                <p className="font-medium text-gray-900">{doc.name}</p>
                                <div className="flex items-center gap-3 mt-1">
                                  <p className="text-xs text-gray-500">{doc.size}</p>
                                  <div className="flex items-center gap-1 text-xs text-gray-600">
                                    <Eye className="w-3 h-3" />
                                    <span>{downloadCounts[tender.id] || 0} downloads</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Button
                              size="sm"
                              onClick={() => handleDownload(tender.id, doc.url, doc.name)}
                              className="flex items-center gap-2"
                            >
                              <Download className="w-4 h-4" />
                              Download
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Information Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6 border border-blue-100">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Tender Submission Guidelines</h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>All tender documents must be submitted before the closing date and time specified.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>Submissions should be made in sealed envelopes clearly marked with the tender reference number.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>Late submissions will not be accepted under any circumstances.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>For inquiries, contact our procurement office at procurement@tntsacco.co.ke</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Tenders;
