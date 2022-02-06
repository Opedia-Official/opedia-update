import HomeStyle from "../styles/Home.module.css";

import { FaRegLightbulb } from "react-icons/fa";

import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import Slider from 'react-slick';


import Asd from './asd';

// import Swiper core and required modules
import SwiperCore, {
  Pagination,Controller,Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination,Controller]);


export default function heroSlide() {
  
  return <>
          
           
    <div className="hero-section-area" >

      <div className={" Hero-top-section"+" " +HomeStyle.heroBackground} >
      <div className="container">
      <Asd/>
              
           
        </div>
      </div>

  
    </div>

  </>;
}
