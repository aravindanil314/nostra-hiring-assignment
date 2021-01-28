import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../Store";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavButton from "./NavButton";
import "./nav.scss";

const Nav = () => {
  const { state } = useContext(AppContext);
  const [active, setActive] = useState([]);

  useEffect(() => {
    if (state.apiData.sports) {
      let noOfSports = state.apiData.sports.length;
      let temp = new Array(noOfSports + 1).fill(false);
      temp[0] = true;
      setActive(temp);
    }
  }, [state.apiData]);

  const handleClick = (index) => {
    let noOfSports = state.apiData.sports.length;
    let temp = new Array(noOfSports + 1).fill(false);
    temp[index] = true;
    setActive(temp);
  };

  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 5,
    speed: 500,
  };

  return (
    <div className="nav_bar">
      <Slider {...settings}>
        <div className="btn_bx" onClick={() => handleClick(0)}>
          <NavButton active={active[0]} src={null} name="All" />
        </div>
        {state.apiData.sports &&
          state.apiData.sports.map((value, index) => {
            return (
              <div
                key={index}
                className="btn_bx"
                onClick={() => handleClick(index + 1)}
              >
                <NavButton
                  active={active[index + 1]}
                  src={value.sports_img_url}
                  name={value.sports_name}
                />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Nav;
