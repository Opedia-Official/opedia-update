
// import Head from "next/head";
import { FaRegLightbulb } from "react-icons/fa";
import Head from "next/head";

import React, { Component } from "react";
import Slider from "react-slick";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settings = {
        infinite: true,
        speed: 500,
        // autoplay: true,
        arrows: false,
        dots: true,
        fade: true,
        loop:true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    const settings2 = {
        dots: true,
        infinite: true,
        loop:true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll:1,
        responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll:1
              }
          },
          {
              breakpoint: 575,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
  
    ]
      };
    return (
      <div>
        <Head>
               <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
              <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
               </Head>
        <Slider {...settings}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          {/* hero top */}
            <div className="hero-wrap">
                <div className="row align-items-center">
                 {/* left part */}
                 <div className="col-md-6">
                        <div className="hero-left">
                         {/* <h4>Optimized It System</h4> */}
                       <h2>Web & Software solution 
                         </h2>
                        <div className="hero-action">
                         <a className="btn-brand" href="#">Get A Quate</a>
                        <a className="btn-two" href="#">Learn More</a>
                        </div>
                  </div>  
                </div>
                {/* left part */}

                <div className="col-md-6">
                   <div className="hero-right pt-40 ">
                         <img src="./hero/pic-1.png" alt="" />
                   </div>
                </div>
               </div>
                </div>
                {/* hero top */}
          {/* hero top */}
            <div className="hero-wrap">
                <div className="row align-items-center">
                 {/* left part */}
                 <div className="col-md-6">
                        <div className="hero-left">
                         {/* <h4>Optimized It System2</h4> */}
                       <h2>Product Design </h2>
                         
                        <div className="hero-action">
                         <a className="btn-brand" href="#">Get A Quate</a>
                        <a className="btn-two" href="#">Learn More</a>
                        </div>
                  </div>  
                </div>
                {/* left part */}

                <div className="col-md-6">
                   <div className="hero-right pt-40 ">
                         <img src="./hero/pic-2.png" alt="" />
                   </div>
                </div>
               </div>
                </div>
                {/* hero top */}
          {/* hero top */}
            <div className="hero-wrap">
                <div className="row align-items-center">
                 {/* left part */}
                 <div className="col-md-6">
                        <div className="hero-left ">
                         {/* <h4>Optimized It System3</h4> */}
                       <h2>Digital Marketing<br />
                         </h2>
                        <div className="hero-action">
                         <a className="btn-brand" href="#">Get A Quate</a>
                        <a className="btn-two" href="#">Learn More</a>
                        </div>
                  </div>  
                </div>
                {/* left part */}

                <div className="col-md-6">
                   <div className="hero-right pt-40 ">
                         <img src="./hero/pic-3.png" alt="" />
                   </div>
                </div>
               </div>
                </div>
                {/* hero top */}
          {/* hero top */}
            <div className="hero-wrap ">
                <div className="row align-items-center ">
                 {/* left part */}
                 <div className="col-md-6">
                        <div className="hero-left">
                         {/* <h4>Optimized It System4</h4> */}
                       <h2>Ecommerce Solution
                        </h2>
                        <div className="hero-action">
                         <a className="btn-brand" href="#">Get A Quate</a>
                        <a className="btn-two" href="#">Learn More</a>
                        </div>
                  </div>  
                </div>
                {/* left part */}

                <div className="col-md-6">
                   <div className="hero-right pt-40">
                         <img src="./hero/pic-4.png" alt="" />
                   </div>
                </div>
               </div>
                </div>
                {/* hero top */}
          
        </Slider>

        <Slider
          {...settings2}
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          swipeToSlide={true}
          focusOnSelect={true}
        >
      
          {/* single item */}
          <div className="hero-bottom-section">
        <div className="hero-bottom-items d-flex align-items-center justify-content-center">
            <div className="icons">
                        <FaRegLightbulb/>
            </div>
                <div className="hero-bottom-info">
                <h4>Web Design</h4>
                <p>Get Regular Support From Our Team</p>
                </div>
            </div>
        </div>
          {/* single item */}
          {/* single item */}
          <div className="hero-bottom-section">
        <div className="hero-bottom-items d-flex align-items-center justify-content-center">
            <div className="icons">
                        <FaRegLightbulb/>
            </div>
                <div className="hero-bottom-info">
                <h4>Web Development</h4>
                <p>Get Regular Support From Our Team</p>
                </div>
            </div>
        </div>
          {/* single item */}
          {/* single item */}
          <div className="hero-bottom-section">
        <div className="hero-bottom-items d-flex align-items-center justify-content-center">
            <div className="icons">
                        <FaRegLightbulb/>
            </div>
                <div className="hero-bottom-info">
                <h4>Software as a solution</h4>
                <p>Get Regular Support From Our Team</p>
                </div>
            </div>
        </div>
          {/* single item */}
          {/* single item */}
          <div className="hero-bottom-section">
        <div className="hero-bottom-items d-flex align-items-center justify-content-center">
            <div className="icons">
                        <FaRegLightbulb/>
            </div>
                <div className="hero-bottom-info">
                <h4>Ui, UX Design</h4>
                <p>Get Regular Support From Our Team</p>
                </div>
            </div>
        </div>
          {/* single item */}
       
       
         
       
        
  

     
        </Slider>
      </div>
    );
  }
}
