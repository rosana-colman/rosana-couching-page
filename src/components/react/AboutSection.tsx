const AboutSection = () => {
    return (
      <section id="about" className="py-20 bg-cream">
        <div className="section-container">
          <h2 className="section-title">Sobre Mí</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-2/5">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-96 bg-ivory rounded-lg shadow-lg overflow-hidden">
                  {/* This would be replaced with an actual image in production */}
                  <div className="h-full w-full flex items-center justify-center bg-taupe/20">
                    <img src="/placeholder-about.jpg" alt="About Image" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sand rounded-full flex items-center justify-center">
                  <div className="text-ivory font-serif">
                    <div className="text-sm">+10 años</div>
                    <div className="text-xs">de experiencia</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <h3 className="font-serif text-2xl md:text-3xl text-slate mb-4">
                Soy <span className="text-sand">Rosana Colman</span>
              </h3>
              <p className="text-slate/80 mb-6">
                Como coach ontológico certificada y facilitadora de constelaciones familiares, me dedico a acompañar a las personas en sus procesos de transformación personal. Mi enfoque combina técnicas modernas de coaching con la sabiduría ancestral de las constelaciones familiares.
              </p>
              <p className="text-slate/80 mb-6">
                Mi misión es ayudarte a reconectar con tu esencia, comprender tus patrones heredados y transformar aquellos aspectos de tu vida que ya no te sirven. A través de mi experiencia y formación, te guiaré en un viaje de autoconocimiento y sanación.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-ivory p-4 rounded-lg">
                  <div className="font-medium text-sand mb-1">Formación</div>
                  <div className="text-sm text-slate/70">Coaching Ontológico Certificado + Especialización en Constelaciones Familiares</div>
                </div>
                <div className="bg-ivory p-4 rounded-lg">
                  <div className="font-medium text-sand mb-1">Filosofía</div>
                  <div className="text-sm text-slate/70">Todo lo que somos tiene un origen, comprendiéndolo podemos transformar nuestro presente</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;