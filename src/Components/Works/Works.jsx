import React from "react";
import "./style.scss";
import line_w from "../../Assets/Icons/line_w.png";
import ui from "../../Assets/Icons/ui.png";
import wd from "../../Assets/Icons/wd.png";
import ta from "../../Assets/Icons/ta.png";
import mapp from "../../Assets/Icons/mapp.png";
import sign from "../../Assets/Icons/sign.png";
import f_bg from "../../Assets/Icons/f_bg.png";

const Works = () => {
  return (
    <div className="works_container" >
      <div className="works_bg" id="work">
        <div className="works_heading">
          <h1>Some of my Feautured work!!</h1>
          <img src={line_w} alt="underline curve" />
        </div>
        <div className="works_divs">
          <div className="works_first">
            <p>
              <span>1.</span>User Interface
            </p>
            <p>
              <span>2.</span>Typography Art
            </p>
            <p>
              <span>3.</span>Website Redesign
            </p>
            <p>
              <span>4.</span>Mobile app design
            </p>
          </div>
          <div className="works_ndcontainer">
            <div>
              <img src={ui} alt="ui" />
              <p>User Interface</p>
            </div>
            <div>
              <img src={ta} alt="ta" />
              <p>Typography Art</p>
            </div>
            <div>
              <img src={mapp} alt="mapp" />
              <p>Mobile app design</p>
            </div>
            <div>
              <img src={wd} alt="wd" />
              <p>Website Redesign</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bg" id="contact">
        <h1>Let’s Start work Together!!</h1>
        <div className="footer_links">
          <div>
            <h2>Contact Info</h2>
            <div>
              <div className="footer_icon first">
                <i class="fas fa-file-alt"></i>
              </div>
              <p>Uttam Nagar, New Delhi , <br />India (Bharat Ganarajya)</p>
            </div>
            <div>
              <div className="footer_icon">
                <i class="fas fa-envelope"></i>
              </div>
              <p>Divesh.1994@yahoo.com</p>
            </div>
            <div>
              <div className="footer_icon">
                <i class="fas fa-phone-alt"></i>
              </div>
              <p>(+91) 9971905653</p>
            </div>
          </div>
          <div>
            <h2>Connect with me by text</h2>
            <p className="footer_bold_name">Divesh.1994@yahoo.com</p>
          </div>
        </div>
        <div className="keepaneyeonme">
            <p>Keep an eye on me:</p>
          </div>
        <div className="keepeye">
         
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
        <div className="signature">
            <p>Thanking You</p>
            <img src={sign} alt="divesh" />
        </div>
      </div>
    </div>
  );
};

export default Works;
