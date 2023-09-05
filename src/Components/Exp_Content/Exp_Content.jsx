import React from "react";
import "./style.scss";
import line from "../../Assets/Icons/line.png";
import search from "../../Assets/Icons/search.png";
import DA from "../../Assets/Icons/arrow_down.png";
const Exp_Content = () => {
  return (
    <div data-aos="fade-up-right">
      <div className="exp_content_container" id="about">
        <div className="exp_content_bg">
          <div className="exp_content">
            <div className="exp_heading">
              <h1>Who am i ?</h1>
              <img src={line} alt="line" />
            </div>
            <p className="exp_detail">
              Hi Folks, I'm Divesh a creative Ui/Ux Designer and create
              minimalistic and visually layout for companies & solving problems.
            </p>
            <div className="exp_cont_skills">
              <div>
                <h2>Education</h2>
                <p>MBA Pursuing 2022-2024</p>
                <p> BBA 2012-2015</p>
                <p>Certificate course in UI/UX Designing from DICE Acadmey</p>
              </div>
              <div>
                <h2>Skills</h2>
                <p>UX Resarch</p>
                <p>Wireframe & Prototype</p>
                <p>Visual & Interaction design</p>
              </div>
              <div>
                <h2>What I used</h2>
                <p>Figma</p>
                <p>Adobe XD</p>
                <p>Adobe Illustrator</p>
              </div>
            </div>
            <div className="exp_checkmeout">
              <p>Check Out me on:</p>
              <div className="exp_checkme_icons">
                <img src={search} alt="search" />
                <div
                  className="linkedin_icon_container"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/divesh-3327a0a7/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3CBzAbnDRdOVT1xjYy%2FMvg%3D%3D",
                      "_blank"
                    )
                  }
                >
                  <i class="fab fa-linkedin-in"></i>
                </div>
                <div
                  className="behance_container_postition"
                  onClick={() =>
                    window.open("https://www.behance.net/divesh", "_blank")
                  }
                >
                  <i class="fab fa-behance"></i>
                </div>
                <div
                  className="behance_container_postition"
                  onClick={() =>
                    window.open("https://twitter.com/divesh29562085", "_blank")
                  }
                >
                  <i class="fab fa-twitter"></i>
                </div>
              </div>
            </div>
            <div className="arrow_down_exp">
              <img className="arrow_down_exp_img" src={DA} alt="arrow_down" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exp_Content;
