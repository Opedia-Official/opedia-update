
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
        slidesToShow: 1,
        slidesToScroll: 1
      };
    const settings2 = {
        dots: true,
        // infinite: true,
        speed: 500,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
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
                 <div className="col-md-7">
                        <div className="hero-left">
                         <h4>Optimized It System1</h4>
                       <h2>It & Tech Solution <br />
                         Your Business</h2>
                        <div className="hero-action">
                         <a className="btn-brand" href="#">Get A Quate</a>
                        <a className="btn-two" href="#">Learn More</a>
                        </div>
                  </div>  
                </div>
                {/* left part */}

                <div className="col-md-5">
                   <div className="hero-right pt-50">
                         <img src="./hero/lady.png" alt="" />
                   </div>
                </div>
               </div>
                </div>
                {/* hero top */}
          {/* hero top */}
            <div className="hero-wrap">
                <div className="row align-items-center">
                 {/* left part */}
                 <div className="col-md-7">
                        <div className="hero-left">
                         <h4>Optimized It System2</h4>
                       <h2>It & Tech Solution <br />
                         Your Business</h2>
                        <div className="hero-action">
                         <a className="btn-brand" href="#">Get A Quate</a>
                        <a className="btn-two" href="#">Learn More</a>
                        </div>
                  </div>  
                </div>
                {/* left part */}

                <div className="col-md-5">
                   <div className="hero-right pt-50">
                         <img src="./hero/lady.png" alt="" />
                   </div>
                </div>
               </div>
                </div>
                {/* hero top */}
          {/* hero top */}
            <div className="hero-wrap">
                <div className="row align-items-center">
                 {/* left part */}
                 <div className="col-md-7">
                        <div className="hero-left">
                         <h4>Optimized It System3</h4>
                       <h2>It & Tech Solution <br />
                         Your Business</h2>
                        <div className="hero-action">
                         <a className="btn-brand" href="#">Get A Quate</a>
                        <a className="btn-two" href="#">Learn More</a>
                        </div>
                  </div>  
                </div>
                {/* left part */}

                <div className="col-md-5">
                   <div className="hero-right pt-50">
                         <img src="./hero/lady.png" alt="" />
                   </div>
                </div>
               </div>
                </div>
                {/* hero top */}
          {/* hero top */}
            <div className="hero-wrap">
                <div className="row align-items-center">
                 {/* left part */}
                 <div className="col-md-7">
                        <div className="hero-left">
                         <h4>Optimized It System4</h4>
                       <h2>It & Tech Solution <br />
                         Your Business</h2>
                        <div className="hero-action">
                         <a className="btn-brand" href="#">Get A Quate</a>
                        <a className="btn-two" href="#">Learn More</a>
                        </div>
                  </div>  
                </div>
                {/* left part */}

                <div className="col-md-5">
                   <div className="hero-right pt-50">
                         <img src="./hero/lady.png" alt="" />
                   </div>
                </div>
               </div>
                </div>
                {/* hero top */}
          
        </Slider>

        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          {...settings2}
          
        >
          {/* single item */}
          <div className="hero-bottom-section">
        <div className="hero-bottom-items d-flex align-items-center justify-content-center">
            <div className="icons">
                        <FaRegLightbulb/>
            </div>
                <div className="hero-bottom-info">
                <h4>AUGMENTED REALITY</h4>
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
                <h4>AUGMENTED REALITY</h4>
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
                <h4>AUGMENTED REALITY</h4>
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
                <h4>AUGMENTED REALITY</h4>
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
