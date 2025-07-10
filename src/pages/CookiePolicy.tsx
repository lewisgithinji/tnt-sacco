import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
            
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
                <p className="text-gray-700">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better browsing experience by remembering your preferences 
                  and analyzing how you use our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
                <p className="text-gray-700 mb-4">TNT SACCO uses cookies for the following purposes:</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>To ensure our website functions properly</li>
                  <li>To remember your login status and preferences</li>
                  <li>To analyze website traffic and user behavior</li>
                  <li>To improve our services and user experience</li>
                  <li>To provide personalized content and advertisements</li>
                  <li>To comply with security requirements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies are necessary for the website to function properly. They enable basic functions 
                  like page navigation and access to secure areas. The website cannot function properly without these cookies.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies collect information about how visitors use our website, such as which pages are 
                  visited most often. This data helps us improve how our website works.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Functionality Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies allow the website to remember choices you make and provide enhanced features. 
                  They may be set by us or by third party providers whose services we use.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Targeting Cookies</h3>
                <p className="text-gray-700">
                  These cookies may be set through our site by our advertising partners. They may be used 
                  to build a profile of your interests and show you relevant adverts on other sites.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
                <p className="text-gray-700 mb-4">
                  We may use third-party services that place cookies on your device. These include:
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for content sharing</li>
                  <li>Customer support chat services</li>
                  <li>Payment processing services</li>
                  <li>Advertising networks</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Cookies</h2>
                <p className="text-gray-700 mb-4">
                  You can control and manage cookies in several ways:
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Browser Settings</h3>
                <p className="text-gray-700 mb-4">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>View what cookies you have and delete them individually</li>
                  <li>Block third-party cookies</li>
                  <li>Block cookies from particular sites</li>
                  <li>Block all cookies from being set</li>
                  <li>Delete all cookies when you close your browser</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cookie Consent</h3>
                <p className="text-gray-700">
                  When you first visit our website, we will ask for your consent to use cookies. 
                  You can change your preferences at any time using our cookie preference center.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Impact of Disabling Cookies</h2>
                <p className="text-gray-700">
                  If you choose to disable cookies, some features of our website may not function properly. 
                  This could affect your ability to access certain services or result in a less personalized experience.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Mobile Apps</h2>
                <p className="text-gray-700">
                  Our mobile applications may use similar technologies to cookies to enhance your experience. 
                  You can manage these preferences through your device settings or within the app itself.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Updates to This Policy</h2>
                <p className="text-gray-700">
                  We may update this Cookie Policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons. We will notify you of any 
                  significant changes by updating the "Last updated" date at the top of this policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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

export default CookiePolicy;