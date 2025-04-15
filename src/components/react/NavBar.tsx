import React from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

// TypeScript workaround
const R = React as any;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = R.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = R.useState(false);
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  R.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "INICIO", href: "#home" },
    { name: "SOBRE MÍ", href: "#about" },
    { name: "SERVICIOS", href: "#services" },
    { name: "CONTACTO", href: "#contact" }
  ];

  return (
    <nav
      className={`absolute top-0 left-0 right-0 w-full z-50 transition-all duration-500 bg-[#BBAEBE]`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-xl font-serif font-medium tracking-wide text-[#F8FAF9] mt-6"
          >
            <img src="/logo-primario-blanco.png" alt="Logo Primario" className="w-40 h-20 filter invert" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-belleza text-sm font-medium transition-all duration-300 hover:text-[#fff] ${
                  isScrolled ? 'text-[#000]' : 'text-[#000] hover:text-[#fff]'
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
              className="bg-black border-0 text-[#fff] hover:bg-[#fff] hover:text-[#000] transition-all duration-300 font-medium px-6 py-2.5 rounded-full shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <a href="https://wa.me/1155053393" target="_blank" rel="noopener noreferrer">
                AGENDAR
                <svg className="filter invert transition-all duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                  <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path>
                </svg>
              </a>
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
          <div className="md:hidden bg-[#BBAEBE]/95 backdrop-blur-md h-screen">
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
                className="font-sans w-full mt-4 bg-[#000] hover:bg-[#000]/90 text-white transition-all duration-300 py-3 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <a 
                  href="https://wa.me/1155053393" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.6 6.32C16.9165 5.6295 16.1093 5.0816 15.2221 4.7068C14.3349 4.332 13.3866 4.1385 12.43 4.14C8.2 4.14 4.76 7.58 4.75 11.82C4.75 13.04 5.07 14.22 5.66 15.26L4.69 19.33L8.85 18.38C9.86 18.92 11 19.21 12.16 19.21H12.17C16.39 19.21 19.83 15.77 19.84 11.53C19.84 9.6 19.08 7.79 17.6 6.32ZM12.43 17.99H12.42C11.39 17.99 10.38 17.72 9.49 17.22L9.28 17.09L6.91 17.65L7.48 15.35L7.34 15.13C6.79 14.21 6.49 13.15 6.49 12.06C6.5 8.54 9.15 5.64 12.44 5.64C14.02 5.64 15.5 6.25 16.63 7.38C17.76 8.51 18.11 9.99 18.11 11.57C18.1 15.1 15.45 17.99 12.43 17.99Z"
                    />
                  </svg>
                  Contactar por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;