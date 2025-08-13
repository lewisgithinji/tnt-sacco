
import { useState } from "react";
import { Menu, X, User, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const logoImage = "/lovable-uploads/0e936568-22b8-465f-be96-3e5c1f79e98e.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
  ];

  const aboutDropdown = [
    { name: "Management Staff", href: "/management-staff" },
    { name: "Board of Directors", href: "/board-of-directors" },
  ];

  const productsDropdown = [
    { name: "Deposit Products", href: "/deposit-products" },
    { name: "Loan Products", href: "/loan-products" },
  ];

  const resourcesDropdown = [
    { name: "Downloads", href: "/downloads" },
    { name: "FAQ", href: "/faq" },
    { name: "News", href: "/news" },
    { name: "Media Center", href: "/media-center" },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={logoImage} 
                alt="TransNational Times DT Sacco" 
                className="h-16 w-auto max-w-[200px] lg:max-w-[250px] filter drop-shadow-sm object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground/80 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground/80 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                About Us
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 bg-white">
                {aboutDropdown.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-secondary/20 hover:text-primary cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground/80 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 bg-white">
                {productsDropdown.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-secondary/20 hover:text-primary cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground/80 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 bg-white">
                {resourcesDropdown.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-secondary/20 hover:text-primary cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <Button 
              size="sm" 
              onClick={() => window.open("https://itnt.tntsacco.co.ke:55556/fxt-portal/", "_blank", "noopener,noreferrer")}
            >
              <User className="w-4 h-4 mr-2" />
             Members Portal
            </Button>
            <Button 
              size="sm" 
              variant="secondary" 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground/80 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* About Us Section */}
              <div className="px-3 py-2">
                <div className="text-gray-900 font-medium mb-2">About Us</div>
                {aboutDropdown.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-700 hover:text-primary block px-3 py-1 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Products Section */}
              <div className="px-3 py-2">
                <div className="text-gray-900 font-medium mb-2">Products</div>
                {productsDropdown.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-700 hover:text-primary block px-3 py-1 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Resources Section */}
              <div className="px-3 py-2">
                <div className="text-gray-900 font-medium mb-2">Resources</div>
                {resourcesDropdown.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-700 hover:text-primary block px-3 py-1 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="pt-4 space-y-2">
                <Button 
                  className="w-full"
                  onClick={() => window.open("https://itnt.tntsacco.co.ke:55556/fxt-portal/", "_blank", "noopener,noreferrer")}
                >
                  <User className="w-4 h-4 mr-2" />
                  Members Portal
                </Button>
                <Button 
                  className="w-full" 
                  variant="secondary" 
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
