import React from 'react';
import "./style.scss";
import b from "../../Assets/Images/Exp_Bg.png";
import c1 from "../../Assets/Icons/circle_art_6.png";
import c2 from "../../Assets/Icons/circle_art_7.png";

const Exprience = () => {
  return (
    <div className='exp_section'>
        <div className='exp_bg'>
        <img src={c1} alt="circle" />
        <img src={c2} alt="circle" />
        </div>

    </div>
  )
}

export default Exprience;