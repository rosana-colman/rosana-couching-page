import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
}

interface SectionStarsProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

const SectionStars = ({ startX, startY, endX, endY }: SectionStarsProps) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generar estrellas en un camino entre los puntos de inicio y fin
    const newStars = Array.from({ length: 50 }, (_, i) => {
      const progress = i / 49; // 0 a 1
      
      // Interpolación lineal entre los puntos
      const x = startX + (endX - startX) * progress;
      const y = startY + (endY - startY) * progress;
      
      // Añadir un poco de variación al camino
      const variation = Math.sin(progress * Math.PI * 2) * 40;
      
      return {
        id: i,
        x: x + variation,
        y: y,
        size: Math.random() * 10 + 6, // Tamaño entre 6 y 16 píxeles
        opacity: Math.random() * 0.5 + 0.4, // Opacidad entre 0.4 y 0.9
        delay: Math.random() * 2,
      };
    });
    setStars(newStars);
  }, [startX, startY, endX, endY]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-float"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
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
              strokeWidth="1"
              strokeOpacity={star.opacity}
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default SectionStars; 