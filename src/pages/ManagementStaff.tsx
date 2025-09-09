import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import EnhancedStaffProfiles from "@/components/EnhancedStaffProfiles";

const ManagementStaff = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <EnhancedStaffProfiles defaultSection="management" />
      </main>
      <Footer />
    </div>
  );
};

export default ManagementStaff;