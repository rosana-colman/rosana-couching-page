import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  opacity: number;
}

const StarPath = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generar estrellas en un camino diagonal
    const newStars = Array.from({ length: 30 }, (_, i) => {
      const progress = i / 29; // 0 a 1
      const x = 20 + progress * 60; // De 20% a 80% del ancho
      const y = 20 + progress * 60; // De 20% a 80% del alto
      
      return {
        id: i,
        x,
        y,
        size: Math.random() * 6 + 4, // Tamaño entre 4 y 10
        delay: Math.random() * 2,
        opacity: Math.random() * 0.4 + 0.4, // Opacidad entre 0.4 y 0.8
      };
    });
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
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

export default StarPath; 