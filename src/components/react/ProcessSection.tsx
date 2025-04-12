import { Button } from "./ui/button";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Primer contacto",
      description: "Conversación inicial para conocer tus necesidades y objetivos.",
    },
    {
      number: "02",
      title: "Sesión diagnóstico",
      description: "Exploramos tu situación actual para identificar áreas clave de trabajo.",
    },
    {
      number: "03",
      title: "Plan personalizado",
      description: "Diseño de un proceso adaptado a tus objetivos y circunstancias personales.",
    },
    {
      number: "04",
      title: "Proceso de transformación",
      description: "Sesiones de coaching y constelaciones para facilitar tu crecimiento.",
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-warm-neutral to-sand">
      <div className="section-container">
        <h2 className="section-title">Mi Proceso</h2>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[21px] md:left-1/2 top-0 bottom-0 w-0.5 bg-sand/30 hidden sm:block"></div>
          
          {/* Steps */}
          <div className="space-y-12 sm:space-y-16 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start gap-4">
                <div className={`flex-none ${index % 2 === 0 ? 'md:text-right md:order-first' : 'md:text-left md:order-last'} w-full md:w-1/2 p-4`}>
                  <div className="hidden sm:block">
                    <div className={`h-10 w-10 rounded-full bg-sand flex items-center justify-center text-ivory text-sm font-medium
                      absolute ${index % 2 === 0 ? 'md:right-[calc(50%-20px)]' : 'md:left-[calc(50%-20px)]'} transform -translate-x-1/2 sm:translate-x-0`}>
                      {step.number}
                    </div>
                  </div>
                  <div className={`sm:max-w-md ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    <div className="flex items-center sm:hidden mb-2">
                      <div className="h-8 w-8 rounded-full bg-sand flex items-center justify-center text-ivory text-xs font-medium mr-3">
                        {step.number}
                      </div>
                      <h3 className="font-serif text-xl text-slate">{step.title}</h3>
                    </div>
                    <h3 className="font-serif text-xl text-slate hidden sm:block mb-2">{step.title}</h3>
                    <p className="text-sm text-slate/70">{step.description}</p>
                  </div>
                </div>
                {index % 2 !== 0 && <div className="hidden md:block md:w-1/2"></div>}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate/80 mb-6 max-w-2xl mx-auto">
            Mi enfoque se basa en un acompañamiento personalizado y respetuoso, centrado en tus necesidades específicas y en tu propio ritmo de transformación.
          </p>
          <Button asChild className="bg-sand hover:bg-sand/80 text-ivory">
            <a href="#contact">Iniciar mi proceso</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;