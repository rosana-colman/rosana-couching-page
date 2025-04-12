import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "INICIO", href: "#home" },
    { name: "SOBRE MÍ", href: "#about" },
    { name: "SERVICIOS", href: "#services" },
    { name: "PROCESOS", href: "#process" },
    { name: "CONTACTO", href: "#contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#6E8B97]/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-xl font-serif font-medium tracking-wide text-[#F8FAF9] mt-6"
          >
            <img src="/logo-primario.png" alt="Logo Primario" className="w-40 h-40" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-belleza text-sm font-medium transition-all duration-300 hover:text-[#D6E6E1] ${
                  isScrolled ? 'text-[#F8FAF9]' : 'text-[#F8FAF9] hover:text-[#D6E6E1]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button 
              asChild 
              variant="outline" 
              className={`border-sand text-sand hover:bg-sand hover:text-ivory transition-all duration-300 ${
                isScrolled ? 'bg-transparent' : ''
              }`}
            >
              <a href="#contact">Contactar</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#F8FAF9] transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#6E8B97]/95 backdrop-blur-md h-screen">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-[#F8FAF9] hover:text-[#D6E6E1] transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                asChild 
                className="font-sans w-full mt-4 bg-sand hover:bg-sand/80 text-ivory transition-all duration-300"
              >
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contactar</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;