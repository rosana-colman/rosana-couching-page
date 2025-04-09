import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactSection = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-ivory">
      <div className="section-container">
        <h2 className="section-title">Contacto</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-2xl text-slate mb-4">¿Hablamos?</h3>
            <p className="text-slate/80 mb-6">
              Estoy aquí para responder tus preguntas y ayudarte en tu camino de transformación. Puedes programar una sesión inicial o simplemente contactarme para conocer más sobre mis servicios.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-sand/20 flex items-center justify-center text-sand">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-sand">Teléfono</div>
                  <div className="text-slate/80">+34 600 000 000</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-sand/20 flex items-center justify-center text-sand">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-sand">Email</div>
                  <div className="text-slate/80">contacto@auraconstelaciones.com</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-sand/20 flex items-center justify-center text-sand">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-sand">Ubicación</div>
                  <div className="text-slate/80">Ciudad, País</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-serif text-xl text-slate mb-4">Envíame un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate mb-1">Nombre</label>
                  <Input id="name" type="text" placeholder="Tu nombre" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate mb-1">Email</label>
                  <Input id="email" type="email" placeholder="Tu email" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate mb-1">Asunto</label>
                <Input id="subject" type="text" placeholder="Asunto del mensaje" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate mb-1">Mensaje</label>
                <Textarea id="message" placeholder="¿Cómo puedo ayudarte?" rows={4} required />
              </div>
              
              <Button type="submit" className="w-full bg-sand hover:bg-sand/80 text-ivory">
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;