
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Downloads from "./pages/Downloads";
import FAQ from "./pages/FAQ";
// Temporarily disabled - to be restored later
// import ManagementStaff from "./pages/ManagementStaff";
// import BoardOfDirectors from "./pages/BoardOfDirectors";
import CommunicationHub from "./pages/CommunicationHub";
import MediaCenter from "./pages/MediaCenter";
import DepositProducts from "./pages/DepositProducts";
import LoanProducts from "./pages/LoanProducts";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import ArticlePage from "./pages/ArticlePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/faq" element={<FAQ />} />
          {/* Temporarily disabled - to be restored later */}
          {/* <Route path="/management-staff" element={<ManagementStaff />} /> */}
          {/* <Route path="/board-of-directors" element={<BoardOfDirectors />} /> */}
          <Route path="/communication-hub" element={<CommunicationHub />} />
          <Route path="/communication-hub/:slug" element={<ArticlePage />} />
          <Route path="/media-center" element={<MediaCenter />} />
          <Route path="/deposit-products" element={<DepositProducts />} />
          <Route path="/loan-products" element={<LoanProducts />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
