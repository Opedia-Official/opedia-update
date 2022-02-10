import { useState } from 'react';

import { FaCloud, FaDatabase, FaRegHeart, FaHeart,FaRegSmileBeam,FaFacebookF, 
  FaRegPaperPlane,
  FaRegLightbulb,
  FaPlaneDeparture,
  FaAngleDoubleRight,
  FaInstagram,FaTwitter,FaGithub, FaHeadphonesAlt} from "react-icons/fa";
import { MdOutlineDesignServices} from "react-icons/md";
import { FiShare2} from "react-icons/Fi";

import SectionTitle from '../SectionTitle';
// Import Swiper styles
import 'swiper/css';
import { gallaries, sliderData } from '../../Utils/fakeData';


export default function ShowCase({Gallaries}) {
  const [isReact, setIsReact] = useState(false);
  // const {Section,featured,gallaries}= Gallaries
  // const {sectionHead,title, description}  = Section;

  return (
     <>

       {/* SHOWCASE GALLARY AREA */}



        <div id='portfolio' className="showCase-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
              <SectionTitle section=" About Company" title='Our Recent Projects Showcase Gallery.  '/>
                
              </div>
              <div className="col-md-6">
                 <SectionTitle description="230+ clients are already growing their businesses. With our quality service, they are able to stand out from the crowd. Let us put your vision into practice." />
              </div>
            </div>
            <div className="row mt-50 justify-content-center wow fadeIn"  data-wow-duration="1s" data-wow-delay="0.5s">
              <div className="col-md-5 col-sm-8"> 
                  <div className="showCase-wrap mb-4 mb-md-0">
                      <div className="show-case-features  s-img-wrap">
                          <img src='./ShowCase-gallary/pic-1.png' alt="" />
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

                  {
                    gallaries.map((gallary,index)=>{
                      return (
                        <div className="col-md-6 col-sm-6  wow fadeIn"  data-wow-duration="1s" data-wow-delay ="0.5s" key={gallary.id}>
                        <div className="showCase-wrap mb-4 ">
                            <div className="show-case-child s-img-wrap">
                                <img src={gallary.img} alt={gallary.title} />
                            </div>
                            <div className="show-case-info">
                              <div className="s-action">
                              {isReact ?  <span onClick={()=>setIsReact(!isReact)} ><FaHeart/></span> : <span onClick={()=>setIsReact(!isReact)}><FaRegHeart/></span>}
                                  <span><FiShare2/></span>
                              </div>
                              <div className="show-case-text">
                                  <h4><a href="#" > {gallary.title} </a></h4>
                                    <p>{gallary.subTitle}</p>
                              </div>
                          </div>
                        </div>
                      </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>


       {/* SHOWCASE GALLARY  AREA */}
    

     </>

    
  )
}
