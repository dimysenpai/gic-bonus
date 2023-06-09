import React from "react";
import test from "../../src/images/0-0.jpg";

const HeroTop = () => {
  return (
    <div className="heroTop">
      <div
        className="content_image"
        style={{ backgroundImage: `url(${test})` }}
      >
        Lorem 1
      </div>
    </div>
  );
};

export default HeroTop;
