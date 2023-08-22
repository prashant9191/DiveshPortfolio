import React, { useState, useEffect } from "react";
import "./style.scss";

const ScrollBtn = () => {
  const [showScrollButton, setShowScrollButton] = useState(true);

  const handleScroll = () => {
    if (window.pageYOffset >= 800) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scrollbtn_container">
      {showScrollButton && (
        <div id="scrollbtn">
          <button id="scrlbtn" onClick={scrollToTop} >
            <i className="fa fa-arrow-up" aria-hidden="true"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default ScrollBtn;

