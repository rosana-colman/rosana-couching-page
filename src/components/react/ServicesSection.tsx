import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Coaching Ontológico",
      description: "Un proceso transformador centrado en el lenguaje, las emociones y la corporalidad para expandir tus posibilidades de acción.",
      features: ["Sesiones personalizadas", "Cambios profundos y duraderos", "Descubrimiento de nuevos horizontes"]
    },
    {
      title: "Constelaciones Familiares",
      description: "Técnica terapéutica para visualizar y sanar dinámicas familiares ocultas que afectan tu presente.",
      features: ["Identificación de patrones heredados", "Reconciliación con el pasado", "Liberación emocional"]
    },
    {
      title: "Talleres Grupales",
      description: "Espacios de aprendizaje colectivo donde experimentar el poder de las constelaciones en comunidad.",
      features: ["Experiencia compartida", "Aprendizaje vivencial", "Comunidad de apoyo"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-warm-neutral to-warm-neutral">
      <div className="section-container">
        <h2 className="section-title">Mis Servicios</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <div className="h-2"></div>
              <CardHeader>
                <CardTitle className="text-xl font-serif text-slate">{service.title}</CardTitle>
                <CardDescription className="text-slate/70">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-sand">•</span>
                      <span className="text-sm text-slate/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate/80 mb-6 max-w-2xl mx-auto">
            Cada servicio está diseñado para acompañarte en tu proceso de crecimiento personal, ofreciéndote herramientas para la transformación y el bienestar integral.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;