import React from "react";
import "./nav.scss";

const NavButton = (props) => {
  return (
    <div className={`${props.active ? "active" : ""} nav_bar_button`}>
      <img src={props.src} alt="" />
      <span>{props.name}</span>
    </div>
  );
};

export default NavButton;
