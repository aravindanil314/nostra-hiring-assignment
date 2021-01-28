import React from "react";
import { useHistory } from "react-router-dom";
import "./header.scss";
import Back from "../../assets/images/back@3x-min.png";

const Header = (props) => {
  let history = useHistory();

  const handleBack = () => {
    history.push("/");
  };

  return (
    <div className="header">
      <h1>{props.text}</h1>
      {props.back && (
        <div className="back_btn" onClick={handleBack}>
          <img src={Back} alt="" />
        </div>
      )}
    </div>
  );
};

export default Header;
