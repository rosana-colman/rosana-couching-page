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
    { name: "Inicio", href: "#home" },
    { name: "Sobre Mí", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Proceso", href: "#process" },
    { name: "Testimonios", href: "#testimonials" },
    { name: "Contacto", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-ivory/95 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-xl font-serif font-medium tracking-wide text-slate mt-6"
          >
            <img src="/logo-primario.png" alt="Logo Primario" className="w-40 h-40" />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans text-sm font-medium hover:text-sand transition-colors ${
                  isScrolled ? 'text-slate' : 'text-slate'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button asChild variant="outline" className="border-sand text-sand hover:bg-sand hover:text-ivory transition-colors">
              <a href="#contact">Contactar</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-ivory h-screen">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-slate hover:text-sand transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button asChild className="w-full mt-4 bg-sand hover:bg-sand/80 text-ivory">
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