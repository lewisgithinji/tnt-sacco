
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/tnt-sacco-logo-flat.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src={logoImage} 
              alt="TransNational Times DT Sacco" 
              className="h-16 w-auto"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering Kenyan families and businesses with comprehensive financial services. 
              Your trusted partner in building a secure financial future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-300 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-secondary transition-colors">Our Services</a></li>
              <li><a href="#loans" className="text-gray-300 hover:text-secondary transition-colors">Loan Calculator</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Member Portal</a></li>
              <li><Link to="/communication-hub" className="text-gray-300 hover:text-secondary transition-colors">Communication Hub</Link></li>
              <li><a href="#contact" className="text-gray-300 hover:text-secondary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Savings Accounts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Personal Loans</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Mortgage Loans</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Vehicle Financing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Education Loans</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Insurance Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-secondary" />
                <div>
                  <div className="text-gray-300">+254 111 050 510</div>
                  <div className="text-gray-300">+254 712 585874</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-secondary" />
                <div>
                  <div className="text-gray-300">info@tntsacco.co.ke</div>
                  <div className="text-gray-300">tntsacco@yahoo.com</div>
                </div>
              </div>
              <div className="text-gray-300">
                TRANSNATIONAL TIMES DT SACCO LTD<br />
                Teachers Plaza, Ground Floor. Kitale<br />
                P.O. Box 2274 - 30200 Kitale
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              © {currentYear} TNT SACCO. All rights reserved. Designed by <a href="https://datacare.co.ke" target="_blank" rel="noopener noreferrer">Datacare</a>.

            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-300 hover:text-secondary transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-300 hover:text-secondary transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="text-gray-300 hover:text-secondary transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
