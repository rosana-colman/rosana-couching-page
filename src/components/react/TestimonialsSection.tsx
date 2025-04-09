import { Card, CardContent } from "./ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Las sesiones de coaching ontológico con [Nombre] han sido transformadoras. He logrado superar bloqueos que llevaba años arrastrando.",
      author: "María S.",
      position: "Empresaria"
    },
    {
      quote: "Las constelaciones familiares me permitieron comprender patrones que se repetían en mi familia por generaciones. Ahora me siento más libre.",
      author: "Carlos P.",
      position: "Psicólogo"
    },
    {
      quote: "El proceso fue revelador y profundo. Descubrí aspectos de mi historia familiar que estaban afectando mis relaciones actuales.",
      author: "Laura M.",
      position: "Terapeuta"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-cream">
      <div className="section-container">
        <h2 className="section-title">Testimonios</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-ivory border-none shadow-md overflow-hidden">
              <CardContent className="pt-6">
                <div className="mb-4 text-sand text-4xl font-serif">"</div>
                <p className="text-slate/80 italic mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-taupe/20 flex items-center justify-center text-taupe text-sm font-medium">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <div className="font-medium text-slate">{testimonial.author}</div>
                    <div className="text-xs text-slate/70">{testimonial.position}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;