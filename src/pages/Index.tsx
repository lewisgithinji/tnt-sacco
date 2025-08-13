
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ProductsSection } from "@/components/ProductsSection";
import { UssdSection } from "@/components/UssdSection";
import { LoanCalculator } from "@/components/LoanCalculator";
import { NewsSection } from "@/components/NewsSection";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
      <Footer />
    </div>
  );
};

export default Index;
