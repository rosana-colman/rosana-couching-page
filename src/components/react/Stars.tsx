import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  opacity: number;
}

const Stars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generar 20 estrellas con posiciones aleatorias
    const newStars = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4, // Tamaño entre 4 y 12
      delay: Math.random() * 2,
      opacity: Math.random() * 0.5 + 0.3, // Opacidad entre 0.3 y 0.8
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
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

export default Stars; 