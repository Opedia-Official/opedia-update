import { useState } from 'react';

import 'swiper/css';
import { FaCloud, FaDatabase, FaRegHeart, FaHeart,FaRegSmileBeam,FaFacebookF, 
  FaRegPaperPlane,
  FaRegLightbulb,
  FaPlaneDeparture,
  FaAngleDoubleRight,
  FaInstagram,FaTwitter,FaGithub, FaHeadphonesAlt} from "react-icons/fa";
import { BsChatSquare} from "react-icons/Bs";
import { GiSofa} from "react-icons/Gi";

import CountUp from 'react-countup';

// Import Swiper styles
import 'swiper/css';


export default function Home() {
  const [isReact, setIsReact] = useState(false);

  return (
     <>

      <div className="project-counter-area">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
                <div className="counter-up-wrap">
                      <span><FaCloud/></span>
                      <h3> <CountUp end={569}/> </h3>
                      <p>Аpps Developed</p>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="counter-up-wrap sm-after-none">
                      <span><BsChatSquare/></span>
                      <h3> <CountUp end={268}/> </h3>
                      <p>Total Consultans</p>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5 mt-md-0">
                <div className="counter-up-wrap ">
                      <span><FaRegSmileBeam/></span>
                      <h3> <CountUp end={340}/> </h3>
                      <p>Setisfied Clients</p>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5 mt-md-0">
                <div className="counter-up-wrap c-last-child">
                      <span><GiSofa/></span>
                      <h3> <CountUp end={400}/> </h3>
                      <p> Office Employers</p>
                </div>
            </div>
          </div>
        </div>
      </div>



     </>

    
  )
}
