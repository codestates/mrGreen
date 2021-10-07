import React from "react";
import "../Styles/SiteInfo.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../Styles/slick.css";
import SiteInfo_01 from "./SiteInfo_01";
import SiteInfo_03 from "./SiteInfo_03";
import SiteInfo_02 from "./SiteInfo_02";

function SiteInfo() {
  const setting = {
    slide: "div",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    // autoplay: true,
    // autoplaySpeen: 2000,
  };
  return (
    <div className="siteinfo_container">
      <Slider {...setting}>
        <div witdh="100%">
          <SiteInfo_01 />
        </div>
        <div witdh="100%">
          <SiteInfo_02 />
        </div>
        <div witdh="100%">
          <SiteInfo_03 />
        </div>
      </Slider>
    </div>
  );
}

export default SiteInfo;
