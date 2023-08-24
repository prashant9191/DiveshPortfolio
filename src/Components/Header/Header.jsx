import React, { useState } from "react";
import "./style.scss";
import menu_icon from "../../Assets/Icons/menu_icon.png";
import i1 from "../../Assets/Icons/4.png";
import i2 from "../../Assets/Icons/5.png";
import i3 from "../../Assets/Icons/3.png";
import x from "../../Assets/Icons/x.png";
import DIVESH from "./Divesh.pdf";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="header">
      <div className="links_header">
        <img onClick={toggleMobileMenu} src={menu_icon} alt="icon" />
        <p onClick={toggleMobileMenu}>Menu</p>
      </div>
      <div className={`mobile_menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile_menu_close">
          <img onClick={() => closeMobileMenu()} src={x} alt="close" />
        </div>
        <div className="links_mobile">
          <a href="#about">About Me</a>
          <a href="#work">My Projects</a>
          <a href="#contact">Talk To Me</a>
          <a href={DIVESH} target="_blank" rel="noopener noreferrer" >
            My Resume
          </a>
        </div>
        <div className="socialmedia_links">
          <div onClick={()=>window.open("https://www.behance.net/divesh", '_blank')}>
            <i class="fab fa-behance"></i>
          </div>
          <div  onClick={()=>window.open("https://www.linkedin.com/in/divesh-3327a0a7/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3CBzAbnDRdOVT1xjYy%2FMvg%3D%3D", '_blank')}>
            <i class="fab fa-linkedin-in"></i>
          </div>
          <div  onClick={()=>window.open("https://twitter.com/divesh29562085", '_blank')}>
            <i class="fab fa-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
