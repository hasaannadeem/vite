import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../utils/css/styles.css";
import crypto1 from "../../assets/images/crypto1.svg";
import crypto2 from "../../assets/images/crypto2.svg";
import { Stack } from "@mui/material";

const HeroSectionCarousal = () => {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    arrows: false,
    centerMode: true,
    centerPadding: "30px",
    speed: 1300,
    infinite: true,
  };
  return (
    <Stack py={4}>
      <Slider {...settings}>
        <Stack>
          <img src={crypto1} width={"70%"} />
        </Stack>
        <Stack>
          <img src={crypto2} width={"70%"} />
        </Stack>
        <Stack>
          <img src={crypto1} width={"70%"} />
        </Stack>
        <Stack>
          <img src={crypto1} width={"70%"} />
        </Stack>
        <Stack>
          <img src={crypto2} width={"70%"} />
        </Stack>
        <Stack>
          <img src={crypto1} width={"70%"} />
        </Stack>
      </Slider>
    </Stack>
  );
};

export default HeroSectionCarousal;
