import { useState } from 'react';

import { FaCloud, FaDatabase, FaRegHeart, FaHeart,FaRegSmileBeam,FaFacebookF, 
  FaRegPaperPlane,
  FaRegLightbulb,
  FaPlaneDeparture,
  FaAngleDoubleRight,
  FaInstagram,FaTwitter,FaGithub, FaHeadphonesAlt} from "react-icons/fa";
import { MdOutlineDesignServices} from "react-icons/md";
import { FiShare2} from "react-icons/Fi";


// Import Swiper styles
import 'swiper/css';

export default function ShowCase() {
  const [isReact, setIsReact] = useState(false);

  return (
     <>

       {/* SHOWCASE GALLARY AREA */}

        <div className="showCase-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
              <div className="section-title">
                            <h5>// About Company</h5>
                            <h3>Our Recent Projects
                                    Showcase Gallery.</h3>
                           
                        </div>
              </div>
              <div className="col-md-6">
              <div className="section-title ">
                                <p>25+Contrary to popular belief, Lorem Ipsum is not simply random text
roots in a piece of classical Latin literature from 45 BC.Lorem ipsum
lipsum as it is sometimes known, is dummy text used in laying
out print, graphic or web designs. The passage is </p>
                        </div>
              </div>
            </div>
            <div className="row mt-50 justify-content-center">
              <div className="col-md-5 col-sm-8"> 
                  <div className="showCase-wrap mb-4 mb-md-0">
                      <div className="show-case-features  s-img-wrap">
                          <img src="./ShowCase-gallary/pic-1.png" alt="" />
                      </div>
                      <div className="show-case-info">
                          <div className="s-action">
                              {isReact ?  <span onClick={()=>setIsReact(!isReact)} ><FaHeart/></span> : <span onClick={()=>setIsReact(!isReact)}><FaRegHeart/></span>}
                              <span><FiShare2/></span>
                          </div>
                          <div className="show-case-text">
                              <h4><a href="#" > Data Research Analysis </a></h4>
                                <p>Cloud Computing</p>
                          </div>
                      </div>
                  </div>

              </div>
              <div className="col-md-7">
                <div className="row justify-content-center">
                  <div className="col-md-6 col-sm-6">
                    <div className="showCase-wrap mb-4 mb-md-0">
                        <div className="show-case-child s-img-wrap">
                            <img src="./ShowCase-gallary/pic-2.png" alt="" />
                        </div>
                        <div className="show-case-info">
                          <div className="s-action">
                          {isReact ?  <span onClick={()=>setIsReact(!isReact)} ><FaHeart/></span> : <span onClick={()=>setIsReact(!isReact)}><FaRegHeart/></span>}
                              <span><FiShare2/></span>
                          </div>
                          <div className="show-case-text">
                              <h4><a href="#" > Data Research Analysis </a></h4>
                                <p>Cloud Computing</p>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="showCase-wrap">
                        <div className="show-case-child s-img-wrap">
                            <img src="./ShowCase-gallary/pic-2.png" alt="" />
                        </div>
                        <div className="show-case-info">
                          <div className="s-action">
                          {isReact ?  <span onClick={()=>setIsReact(!isReact)} ><FaHeart/></span> : <span onClick={()=>setIsReact(!isReact)}><FaRegHeart/></span>}
                              <span><FiShare2/></span>
                          </div>
                          <div className="show-case-text">
                              <h4><a href="#" > Data Research Analysis </a></h4>
                                <p>Cloud Computing</p>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="showCase-wrap mt-4">
                        <div className="show-case-child s-img-wrap">
                            <img src="./ShowCase-gallary/pic-2.png" alt="" />
                        </div>
                        <div className="show-case-info">
                          <div className="s-action">
                          {isReact ?  <span onClick={()=>setIsReact(!isReact)} ><FaHeart/></span> : <span onClick={()=>setIsReact(!isReact)}><FaRegHeart/></span>}
                              <span><FiShare2/></span>
                          </div>
                          <div className="show-case-text">
                              <h4><a href="#" > Data Research Analysis </a></h4>
                                <p>Cloud Computing</p>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="showCase-wrap mt-4">
                        <div className="show-case-child s-img-wrap">
                            <img src="./ShowCase-gallary/pic-2.png" alt="" />
                        </div>
                        <div className="show-case-info">
                          <div className="s-action">
                          {isReact ?  <span onClick={()=>setIsReact(!isReact)} ><FaHeart/></span> : <span onClick={()=>setIsReact(!isReact)}><FaRegHeart/></span>}
                              <span><FiShare2/></span>
                          </div>
                          <div className="show-case-text">
                              <h4><a href="#" > Data Research Analysis </a></h4>
                                <p>Cloud Computing</p>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


       {/* SHOWCASE GALLARY  AREA */}
    

     </>

    
  )
}
