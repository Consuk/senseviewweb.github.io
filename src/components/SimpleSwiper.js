import React, { useState } from 'react';

// TESTING
const carrusel1 = "/03-Home/carrusel1.png";
const carrusel2 = "/03-Home/carrusel2.png";
const carrusel3 = "/03-Home/carrusel3.png";


const SimpleSwiper = () => {
  const images = [carrusel1, carrusel2, carrusel3]; 
  const [currentIndex, setCurrentIndex] = useState(0); // Índice actual de la imagen
  const [hoverTimer, setHoverTimer] = useState(null); 

  const handleMouseEnter = () => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Tiempo entre cambios (3 segundos)

    setHoverTimer(timer); // Guarda el timer activo
  };

  const handleMouseLeave = () => {
    clearInterval(hoverTimer); // Limpia el timer cuando el cursor se aleja
    setHoverTimer(null); // Resetea el estado del timer
  };

  return (
    <div
      style={{
        width: '80%',
        height: '80%',
        overflow: 'hidden',
        position: 'relative',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={images[currentIndex]}
        alt={`Imagen ${currentIndex + 1}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'opacity 0.5s ease-in-out',
        }}
      />
    </div>
  );
};

export default SimpleSwiper;