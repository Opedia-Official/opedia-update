import {
  FaCloud,
  FaDatabase,
  FaRegHeart,
  FaHeart,
  FaRegSmileBeam,
  FaFacebookF,
  FaRegPaperPlane,
  FaRegLightbulb,
  FaPlaneDeparture,
  FaAngleDoubleRight,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaHeadphonesAlt,
} from "react-icons/fa";

// Import Swiper styles
import "swiper/css";

export default function Specialist() {
  return (
    <div className="specialist-team-area bg-brand text-center text-md-start">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="section-title">
              <h5>About Company</h5>
              <h3>
                We team of experience <br />
                It Specialties.
              </h3>
              <p>
                25+Contrary to popular belief, Lorem Ipsum is not simply random
                text <br />
                roots in a piece of classical Latin literature from 45 BC
              </p>
            </div>

            <ul className="specialist-items">
              <li className="sp-item ">
                <span>
                  <FaHeadphonesAlt />
                </span>
                <div className="sp-item-info">
                  <h4>Helpdesk Support</h4>
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web.
                  </p>
                </div>
              </li>
              <li className="sp-item">
                <span>
                  <FaRegLightbulb />
                </span>
                <div className="sp-item-info mb-5 mb-md-0">
                  <h4>Creative Solutions</h4>
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className="sp-r-section-wrap">
              <div className="sp-feature-img">
                <img
                  className="sp-feature"
                  src="./specialist/pic-1.png"
                  alt=""
                />
                <img src="./specialist/pic-3.png" alt="" className="sp-child" />
              </div>
              <div className="sp-img-r-child">
                <img src="./specialist/pic-2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
