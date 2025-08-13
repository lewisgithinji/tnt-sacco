
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ProductsSection } from "@/components/ProductsSection";
import { UssdSection } from "@/components/UssdSection";
import { LoanCalculator } from "@/components/LoanCalculator";
import { NewsSection } from "@/components/NewsSection";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Map from "@/components/Map";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <ProductsSection />
      <UssdSection />
      <LoanCalculator />
      <NewsSection />
      <Contact />
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Location</h2>
            <p className="text-muted-foreground">Visit us at our head office</p>
          </div>
          <Map />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
