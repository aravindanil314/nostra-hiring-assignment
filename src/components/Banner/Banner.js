import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import { AppContext } from "../../Store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banner.scss";

const Banner = (props) => {
  const { state } = useContext(AppContext);
  let history = useHistory();
  const settings = {
    dots: false,
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const handleRedirect = (index) => {
    if (state.apiData.banners[index].route)
      history.push(state.apiData.banners[index].route);
  };
  return (
    <div className="banner">
      <Slider {...settings}>
        {state.apiData.banners &&
          state.apiData.banners.map((value, index) => {
            return (
              <div
                key={index}
                className={`${value.redirect ? "redirect" : ""} banner_img_bx`}
                onClick={() => handleRedirect(index)}
              >
                <img src={value.img_url} alt="" />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Banner;
