import { useEffect, useState } from "react";

const Hummingbird = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // El colibrí aparece cuando el scroll está en el 20% de la página
      setIsVisible(scrollY > windowHeight * 0.2);
      
      // Calcula la posición del colibrí
      const progress = scrollY / (documentHeight - windowHeight);
      const x = window.innerWidth * 0.8; // 80% del ancho de la ventana
      const y = window.innerHeight * 0.2 + (window.innerHeight * 0.6 * progress);
      
      setPosition({ x, y });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Llamar inmediatamente para posicionar inicialmente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed z-50 pointer-events-none transition-all duration-500"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-hummingbird"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          fill="#4A4558"
          fillOpacity="0.1"
        />
        <path
          d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
          fill="#4A4558"
          fillOpacity="0.2"
        />
        <path
          d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
          fill="#4A4558"
          fillOpacity="0.3"
        />
        <path
          d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 2c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z"
          fill="#4A4558"
          fillOpacity="0.4"
        />
        <path
          d="M12 2l2.4 7.4h7.6l-6 4.6 2.4 7.4-6-4.6-6 4.6 2.4-7.4-6-4.6h7.6z"
          fill="#4A4558"
          fillOpacity="0.5"
          stroke="#4A4558"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
};

export default Hummingbird; 