import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  TNT SACCO ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Name, address, phone number, and email address</li>
                  <li>National identification number</li>
                  <li>Employment information</li>
                  <li>Financial information for account opening and loan processing</li>
                  <li>Transaction history and account activity</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Automatically Collected Information</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Website usage patterns</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>To provide and maintain our services</li>
                  <li>To process transactions and manage your accounts</li>
                  <li>To assess loan applications and manage credit risk</li>
                  <li>To communicate with you about your accounts and services</li>
                  <li>To comply with legal and regulatory requirements</li>
                  <li>To improve our services and develop new products</li>
                  <li>To prevent fraud and ensure security</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-gray-700 mb-4">We may share your information with:</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Regulatory authorities as required by law</li>
                  <li>Credit reference bureaus for credit assessment</li>
                  <li>Service providers who assist us in operating our business</li>
                  <li>Law enforcement agencies when legally required</li>
                  <li>Other parties with your explicit consent</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                <p className="text-gray-700">
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. This includes 
                  encryption, secure servers, and regular security assessments.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Access your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information (subject to legal requirements)</li>
                  <li>Object to processing of your information</li>
                  <li>Request data portability</li>
                  <li>Lodge a complaint with the data protection authority</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
                <p className="text-gray-700">
                  We retain your personal information for as long as necessary to provide our services and 
                  comply with legal obligations. Account information is typically retained for 7 years after 
                  account closure as required by banking regulations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. We will notify you of any changes 
                  by posting the new Privacy Policy on our website and updating the "Last updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="text-gray-700">
                  <p>Email: info@tntsacco.co.ke</p>
                  <p>Email: tntsacco@yahoo.com</p>
                  <p>Phone: +254 111 050 510</p>
                  <p>Phone: +254 712 585874</p>
                  <p>Address: TRANSNATIONAL TIMES DT SACCO LTD<br />
                     Teachers Plaza, Ground Floor. Kitale<br />
                     P.O. Box 2274 - 30200 Kitale</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;