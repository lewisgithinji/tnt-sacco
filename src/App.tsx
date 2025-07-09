
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Downloads from "./pages/Downloads";
import FAQ from "./pages/FAQ";
import ManagementStaff from "./pages/ManagementStaff";
import BoardOfDirectors from "./pages/BoardOfDirectors";
import News from "./pages/News";
import MediaCenter from "./pages/MediaCenter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/management-staff" element={<ManagementStaff />} />
          <Route path="/board-of-directors" element={<BoardOfDirectors />} />
          <Route path="/news" element={<News />} />
          <Route path="/media-center" element={<MediaCenter />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
