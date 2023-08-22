import React, { useState, useEffect } from 'react';
import l_img from "../../Assets/loader.svg";
import './style.scss'; 

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        setIsLoading(false);
        clearInterval(interval);
      }
    }, 30); // Update the interval to 60 milliseconds

    return () => clearInterval(interval);
  }, [isLoading, progress]);

  return (
    <div className={`loader ${isLoading ? 'active' : ''}`}>
      <div className="loader-overlay">
        <div className="number-text">{progress}%</div>
        <img src={l_img} alt="loader" />
      </div>
    </div>
  );
}

export default Loader;
