import { Card } from "react-bootstrap";
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
import { GiHelicopter } from "react-icons/Gi";

// Import Swiper styles
import "swiper/css";

export default function Pricing() {
  return (
    <div className="our-pricing-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="section-title text-center mb-60">
              <h5>// Expert Worker</h5>
              <h3>Our Expert Worker.</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 col-sm-6 ">
            <div className="our-pricing-wrap text-center">
              <Card>
                <div className="pricing-level">
                  <p>Silver</p>
                </div>
                <Card.Body>
                  <span>
                    <FaRegPaperPlane />
                  </span>
                  <Card.Title>
                    <h4>$49.00</h4> <span>/mon</span>
                  </Card.Title>
                  <Card.Text>
                    <ul className="pricing-items">
                      <li>Only 2 Operators</li>
                      <li>Abandoned Cart</li>
                      <li>Facebook & Instagram Ads</li>
                      <li>Order Notifications</li>
                      <li>Landing Pages</li>
                    </ul>
                  </Card.Text>

                  <a href="#" className="btn-two mt-20">
                    Start Today
                  </a>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mt-5 mt-sm-0">
            <div className="our-pricing-wrap text-center">
              <Card>
                <div className="pricing-level">
                  <p>Gold</p>
                </div>
                <Card.Body>
                  <span>
                    <GiHelicopter />
                  </span>
                  <Card.Title>
                    <h4>$49.00</h4> <span>/mon</span>
                  </Card.Title>
                  <Card.Text>
                    <ul className="pricing-items">
                      <li>Only 2 Operators</li>
                      <li>Abandoned Cart</li>
                      <li>Facebook & Instagram Ads</li>
                      <li>Order Notifications</li>
                      <li>Landing Pages</li>
                    </ul>
                  </Card.Text>

                  <a href="#" className="btn-two mt-20">
                    Start Today
                  </a>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mt-5 mt-md-0">
            <div className="our-pricing-wrap text-center">
              <Card>
                <div className="pricing-level">
                  <p>Platinum</p>
                </div>
                <Card.Body>
                  <span>
                    <FaPlaneDeparture />
                  </span>
                  <Card.Title>
                    <h4>$49.00</h4> <span>/mon</span>
                  </Card.Title>
                  <Card.Text>
                    <ul className="pricing-items">
                      <li>Only 2 Operators</li>
                      <li>Abandoned Cart</li>
                      <li>Facebook & Instagram Ads</li>
                      <li>Order Notifications</li>
                      <li>Landing Pages</li>
                    </ul>
                  </Card.Text>

                  <a href="#" className="btn-two mt-20">
                    Start Today
                  </a>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
