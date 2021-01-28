import React from "react";
import Rupee from "../../assets/images/ruppe-min.png";
import Timer from "../../assets/images/timer-min.png";
import Live from "../../assets/images/live-min.png";
import "./card.scss";

const Card = (props) => {
  return (
    <div className="card">
      <span className="title">Picks</span>
      <div className="match_parties_bx">
        <img src={props.data.match_parties[0].party_img_url} alt="" />
        <div className="match_details">
          <p>
            {props.data.challenge_name} {props.data.desc}
          </p>
          <p>
            Test Day 2 <img src={Live} alt="" /> Live Score Updates
          </p>
        </div>
        <img src={props.data.match_parties[1].party_img_url} alt="" />
      </div>
      <div className="bet_details">
        <span className="prize_money">
          <img src={Rupee} alt="" />
          {props.data.prize_money}
        </span>
        <span className="start_time">
          <img src={Timer} alt="" />
          {props.data.start_time}
        </span>
      </div>
    </div>
  );
};

export default Card;
