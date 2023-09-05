import React, { useState, useEffect } from 'react';
import './style.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const offsetX = 5; // Adjust this value for the desired distance
      const offsetY = 5; // Adjust this value for the desired distance

      setPosition({ x: e.clientX - offsetX, y: e.clientY - offsetY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="custom-cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
  );
};

export default CustomCursor;
