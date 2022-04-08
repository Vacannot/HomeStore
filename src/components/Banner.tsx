import React, { CSSProperties } from "react";
import image from "../assets/banner.png";

function Banner() {
  return (
    <div>
      <img style={BannerStyle} src={image} alt="Banner Glasbulb Image" />
    </div>
  );
}

export default Banner;

const BannerStyle: CSSProperties = {
  height: "auto",
  maxWidth: "80rem",
  marginTop: "5rem",
  width: "100vw",
};
