import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  section: number;
}

const StarTrail = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setScrollPosition(scroll);
      const sectionHeight = window.innerHeight;
      const newSection = Math.floor(scroll / sectionHeight);
      setActiveSection(newSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Generar estrellas para la sección actual
    const newStars = Array.from({ length: 20 }, (_, i) => {
      const progress = i / 19; // 0 a 1
      const sectionHeight = window.innerHeight;
      const sectionTop = activeSection * sectionHeight;
      
      // Posición base en el centro de la sección actual
      const baseX = 50;
      const baseY = sectionTop + sectionHeight * 0.5;
      
      // Crear un camino que fluye hacia la siguiente sección
      const x = baseX + Math.sin(progress * Math.PI) * 20; // Movimiento sinusoidal
      const y = baseY + progress * sectionHeight * 0.5; // Movimiento hacia abajo
      
      return {
        id: i + activeSection * 1000, // ID único por sección
        x,
        y,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.3 + 0.2,
        delay: Math.random() * 2,
        section: activeSection,
      };
    });
    
    // Mantener solo las estrellas de las últimas 2 secciones
    setStars(prevStars => {
      const filteredStars = prevStars.filter(star => 
        star.section >= activeSection - 1 && star.section <= activeSection
      );
      return [...filteredStars, ...newStars];
    });
  }, [activeSection, scrollPosition]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-float"
          style={{
            left: `${star.x}%`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${Math.random() * 2 + 2}s`,
            opacity: star.opacity,
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2l2.4 7.4h7.6l-6 4.6 2.4 7.4-6-4.6-6 4.6 2.4-7.4-6-4.6h7.6z"
              fill="#4A4558"
              fillOpacity={star.opacity}
              stroke="#4A4558"
              strokeWidth="0.5"
              strokeOpacity={star.opacity}
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default StarTrail; 