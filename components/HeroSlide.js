import HomeStyle from "../styles/Home.module.css";

import { FaRegLightbulb } from "react-icons/fa";

import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Pagination, Controller, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// install Swiper modules
SwiperCore.use([Pagination, Controller, Autoplay]);

export default function heroSlide() {
  const [controlleds, setControlledSwiper] = useState(null);
  const [controlledHero, setControlledHeroSwiper] = useState(null);
  return (
    <>
      <div className="hero-section-area">
        <div className={" Hero-top-section" + " " + HomeStyle.heroBackground}>
          <div className="container">
            <Swiper
              onSwiper={setControlledSwiper}
              controller={{ control: controlledHero }}
              pagination={true}
              className="mySwiper"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <div className="hero-left">
                      <h4>Optimized It System</h4>
                      <h2>
                        It & Tech Solution <br />
                        Your Business
                      </h2>
                      <div className="hero-action">
                        <a className="btn-brand" href="#">
                          Get A Quate
                        </a>
                        <a className="btn-two" href="#">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="hero-right pb-50 pt-50">
                      <img src="./hero/lady.png" alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <div className="hero-left">
                      <h4>Optimized It System</h4>
                      <h2>
                        It & Tech Solution <br />
                        Your Business
                      </h2>
                      <div className="hero-action">
                        <a className="btn-brand" href="#">
                          Get A Quate
                        </a>
                        <a className="btn-two" href="#">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="hero-right pb-50 pt-50">
                      <img src="./hero/lady.png" alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <div className="hero-left">
                      <h4>Optimized It System</h4>
                      <h2>
                        It & Tech Solution <br />
                        Your Business
                      </h2>
                      <div className="hero-action">
                        <a className="btn-brand" href="#">
                          Get A Quate
                        </a>
                        <a className="btn-two" href="#">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="hero-right pb-50 pt-50">
                      <img src="./hero/lady.png" alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <div className="hero-left">
                      <h4>Optimized It System</h4>
                      <h2>
                        It & Tech Solution <br />
                        Your Business
                      </h2>
                      <div className="hero-action">
                        <a className="btn-brand" href="#">
                          Get A Quate
                        </a>
                        <a className="btn-two" href="#">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="hero-right pb-50 pt-50">
                      <img src="./hero/lady.png" alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <div className="hero-left">
                      <h4>Optimized It System</h4>
                      <h2>
                        It & Tech Solution <br />
                        Your Business
                      </h2>
                      <div className="hero-action">
                        <a className="btn-brand" href="#">
                          Get A Quate
                        </a>
                        <a className="btn-two" href="#">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="hero-right pb-50 pt-50">
                      <img src="./hero/lady.png" alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <div className="hero-left">
                      <h4>Optimized It System</h4>
                      <h2>
                        It & Tech Solution <br />
                        Your Business
                      </h2>
                      <div className="hero-action">
                        <a className="btn-brand" href="#">
                          Get A Quate
                        </a>
                        <a className="btn-two" href="#">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="hero-right pb-50 pt-50">
                      <img src="./hero/lady.png" alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="hero-bottom-section">
          <div className="container">
            <Swiper
              id="controller"
              slidesPerView={3}
              spaceBetween={15}
              centeredSlides={true}
              onSwiper={setControlledHeroSwiper}
              controller={{ control: controlleds }}
              breakpoints={{
                992: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="hero-bottom-items d-flex align-items-center justify-content-center">
                  <div className="icons">
                    <FaRegLightbulb />
                  </div>
                  <div className="hero-bottom-info">
                    <h4>AUGMENTED REALITY</h4>
                    <p>Get Regular Support From Our Team</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-bottom-items d-flex align-items-center justify-content-center">
                  <div className="icons">
                    <FaRegLightbulb />
                  </div>
                  <div className="hero-bottom-info">
                    <h4>Machine Learning</h4>
                    <p>Get Regular Support From Our Team</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-bottom-items d-flex align-items-center justify-content-center">
                  <div className="icons">
                    <FaRegLightbulb />
                  </div>
                  <div className="hero-bottom-info">
                    <h4>ARTIFICIAL INTELLIGE</h4>
                    <p>Get Regular Support From Our Team</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-bottom-items d-flex align-items-center justify-content-center">
                  <div className="icons">
                    <FaRegLightbulb />
                  </div>
                  <div className="hero-bottom-info">
                    <h4>ARTIFICIAL INTELLIGE</h4>
                    <p>Get Regular Support From Our Team</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-bottom-items d-flex align-items-center justify-content-center">
                  <div className="icons">
                    <FaRegLightbulb />
                  </div>
                  <div className="hero-bottom-info">
                    <h4>ARTIFICIAL INTELLIGE</h4>
                    <p>Get Regular Support From Our Team</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-bottom-items d-flex align-items-center justify-content-center">
                  <div className="icons">
                    <FaRegLightbulb />
                  </div>
                  <div className="hero-bottom-info">
                    <h4>ARTIFICIAL INTELLIGE</h4>
                    <p>Get Regular Support From Our Team</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
