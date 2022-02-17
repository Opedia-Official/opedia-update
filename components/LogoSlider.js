import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function LogoSlider() {
  return (
    <div className="container">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        transition={1500}
        loop={true}
        customTransition="1300ms ease-in-out"
        // duration={300}
      >
        {[
          "React js",
          "Next js",
          "Node js",
          "Laravel",
          "ExpressJS",
          "MongoDB",
          "Django",
        ].map((item) => (
          <div className="logoLiderDiv">
            {item}
            <div className="img">
              <img
                src="https://image.pngaaa.com/930/2507930-middle.png"
                alt=""
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default LogoSlider;
