
import React from 'react';
import { IoIosArrowRoundDown} from "react-icons/Io";
  // Import Swiper React components
  import { Swiper, SwiperSlide } from "swiper/react";
  // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
// import Swiper core and required modules
import SwiperCore, {
    Navigation,  Pagination
  } from 'swiper';
import TestimonialSlider from './TestimonialSlider';
// import { TestimonialSliderData } from '../Utils/fakeData';
  
  // install Swiper modules
  SwiperCore.use([Navigation,Pagination]);






export default function Testimonial(props) {


  console.log('TestimonialSlider compo', typeof(TestimonialSliderData));

  // var jsonData = JSON.parse(TestimonialSliderData)
   
  return <>

          <Swiper pagination={true} loop={true} navigation={true} className="mySwiper">
            {/* <SwiperSlide> 
                <TestimonialSlider/>
            </SwiperSlide> */}

  {
    props.TestimonialSliderData.map((itam) =><SwiperSlide  key={Math.floor(Math.random() * 15000)}> 
      <TestimonialSlider itam={itam} key={Math.floor(Math.random() * 15000)} />
  </SwiperSlide> )
  }
    
    

  </Swiper>
  
  
  </>;
}
