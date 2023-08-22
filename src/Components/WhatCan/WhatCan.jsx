import React from "react";
import "./style.scss";
import c1 from "../../Assets/Icons/circle_art_6.png";
import c2 from "../../Assets/Icons/circle_art_7.png";
import uc from "../../Assets/Icons/upper_collen.png";

const WhatCan = () => {
  return (
    <div className="whatcan_container">
      <div className="whatcan_bg">
        <img src={c1} alt="circle" />
        <img src={c2} alt="circle" />
        <div className="whatcan_heading">
          <img src={uc} alt="uc" />
          <h1> What can i do?</h1>
        </div>
        <div className="circles_whatcan">
          <div>
            <p>UI/UX Design</p>
            <p>Mobile App Design</p>
          </div>
          <div>
            <p>Prototyping</p>
            <p>Visual Design</p>
          </div>
          <div>
            <p>User Research</p>
            <p>Wireframes</p>
          </div>
          <div>
            <p>User Testing</p>
            <p>User Flow</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatCan;
