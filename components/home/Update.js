// Import Swiper styles
import "swiper/css";

import Progressbar from "../../components/Progressbar";

export default function Update() {
  return (
    <div className="project-update-section text-center text-md-start bg-brand">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 wow fadeIn"  data-wow-duration="1s"  data-wow-delay="1s">
            <div className="project-update-section-wrap">
              <div className="section-title">
                <h5> About Company</h5>
                <h3>Don,t miss our update</h3>
              </div>
              <p className="pr-140p">
                25+Contrary to popular belief, Lorem Ipsum is not simply random
                roots in a piece of classical Latin literature from 45 BC.Lorem{" "}
              </p>

              <div className="subscribe-section">
                <form action="#">
                  <input type="text" placeholder=" Enter email address" />
                  <button type="submit" className="btn-brand">
                    {" "}
                    Subscribed
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Progressbar />
          </div>
        </div>
      </div>
    </div>
  );
}
