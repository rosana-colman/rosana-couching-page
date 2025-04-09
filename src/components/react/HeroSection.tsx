import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-ivory to-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
              Descubre tu <span className="gradient-text">camino interior</span>
            </h1>
            <p className="text-lg md:text-xl text-slate/80 mb-8 max-w-xl">
              Transformación a través del coaching ontológico y las constelaciones familiares para sanar tu vida y tus relaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild className="bg-sand hover:bg-sand/80 text-ivory">
                <a href="#services">Descubrir Servicios</a>
              </Button>
              <Button asChild variant="outline" className="border-sand text-sand hover:bg-sand hover:text-ivory transition-colors">
                <a href="#contact">Agendar una Sesión</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end animate-float">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-cream to-sand/40 flex items-center justify-center overflow-hidden shadow-lg">
              <div className="text-center p-8">
                <h3 className="text-xl md:text-2xl font-serif text-slate">Equilibrio</h3>
                <p className="mt-2 text-sm md:text-base text-slate/70">Cuerpo • Mente • Espíritu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;