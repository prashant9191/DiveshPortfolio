import React from "react";
import "./style.scss";
import text_img from "../../Assets/Icons/my_journey.png";
import ladder from "../../Assets/Icons/ladder.png";

const MyJourney = () => {
  return (
    <div className="myjourney_container">
      <div className="myjourneybg">
        <div className="myjourney_content">
          <div className="myjourney_heading">
            <img src={text_img} alt="my journey" />
            <h1>on the way!!</h1>
          </div>
          <div className="myjourney_ladder">
            <div>
              <p>Zexweb Technologies</p>
              <p>UI/UX Designer</p>
              <p>July to present</p>
            </div>
            <div>
              <img src={ladder} alt="img" />
            </div>
            <div>
              <p>Glaze Trading India Pvt.Ltd.</p>
              <p>Team lead 2017-2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyJourney;
