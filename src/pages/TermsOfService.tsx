import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700">
                  By accessing or using TNT SACCO services, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of these terms, 
                  you are prohibited from using our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Membership Requirements</h2>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>You must be at least 18 years of age</li>
                  <li>You must provide accurate and complete information</li>
                  <li>You must maintain a minimum share capital as required</li>
                  <li>You must comply with SACCO bylaws and regulations</li>
                  <li>You must provide required documentation for KYC compliance</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Services</h2>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Deposits</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>All deposits are subject to verification and clearance procedures</li>
                  <li>Interest rates may change with prior notice</li>
                  <li>Withdrawal limits may apply to certain account types</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Loans</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Loan approval is subject to credit assessment</li>
                  <li>Collateral or guarantors may be required</li>
                  <li>Interest rates and fees are disclosed before disbursement</li>
                  <li>Late payment fees apply to overdue accounts</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Digital Services</h2>
                <p className="text-gray-700 mb-4">
                  Our online and mobile banking services are provided for your convenience. You agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Keep your login credentials secure and confidential</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Use services only for lawful purposes</li>
                  <li>Not attempt to breach security measures</li>
                  <li>Accept responsibility for all transactions made under your credentials</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Fees and Charges</h2>
                <p className="text-gray-700">
                  We reserve the right to charge fees for our services. Current fees are available on our 
                  website and at our branches. We will provide advance notice of any fee changes as required by law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacy and Data Protection</h2>
                <p className="text-gray-700">
                  Your privacy is important to us. Please review our Privacy Policy to understand how we 
                  collect, use, and protect your information. By using our services, you consent to our 
                  data practices as described in our Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-700">
                  TNT SACCO shall not be liable for any indirect, incidental, special, consequential, or 
                  punitive damages arising from your use of our services, except as required by law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Account Closure</h2>
                <p className="text-gray-700 mb-4">
                  Either party may terminate the relationship with appropriate notice:
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Members may close accounts with 30 days written notice</li>
                  <li>We may close accounts for violation of terms or regulatory requirements</li>
                  <li>All outstanding obligations must be settled before closure</li>
                  <li>Final statements will be provided within 30 days</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Dispute Resolution</h2>
                <p className="text-gray-700">
                  Any disputes arising from these terms shall be resolved through mediation and, if necessary, 
                  arbitration in accordance with Kenyan law. The courts of Kenya shall have jurisdiction 
                  over any matters not resolved through alternative dispute resolution.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
                <p className="text-gray-700">
                  We reserve the right to modify these terms at any time. Changes will be effective 30 days 
                  after notice is provided. Continued use of our services constitutes acceptance of the modified terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="text-gray-700">
                  <p>Email: info@tntsacco.co.ke</p>
                  <p>Phone: +254 700 000 000</p>
                  <p>Address: TNT SACCO, P.O. Box 12345, Nairobi, Kenya</p>
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

export default TermsOfService;