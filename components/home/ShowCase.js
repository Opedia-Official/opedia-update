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
import { sliderData } from '../../Utils/fakeData';


export default function ShowCase({Gallaries}) {
  const [isReact, setIsReact] = useState(false);
  const {Section,featured,gallaries}= Gallaries
  const {sectionHead,title, description}  = Section;

  return (
     <>

       {/* SHOWCASE GALLARY AREA */}



        <div className="showCase-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
              <SectionTitle section={sectionHead} title={title}/>
                
              </div>
              <div className="col-md-6">
                 <SectionTitle description={description} />
              </div>
            </div>
            <div className="row mt-50 justify-content-center">
              <div className="col-md-5 col-sm-8"> 
                  <div className="showCase-wrap mb-4 mb-md-0">
                      <div className="show-case-features  s-img-wrap">
                          <img src={featured.img} alt="" />
                      </div>
                      <div className="show-case-info">
                          <div className="s-action">
                              {isReact ?  <span onClick={()=>setIsReact(!isReact)} ><FaHeart/></span> : <span onClick={()=>setIsReact(!isReact)}><FaRegHeart/></span>}
                              <span><FiShare2/></span>
                          </div>
                          <div className="show-case-text">
                              <h4><a href="#" > {featured.title} </a></h4>
                                <p>{featured.subTitle}</p>
                          </div>
                      </div>
                  </div>

              </div>
              <div className="col-md-7">
                <div className="row justify-content-center">

                  {
                    gallaries.map(gallary=>{
                      return (
                        <div className="col-md-6 col-sm-6" key={gallary.id}>
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
