// Import Swiper styles
import "swiper/css";

import Testimonial from "../../components/Testimonial";

export default function Testimonials ({TestimonialSlider}) {
  console.log('TestimonialSlider', TestimonialSlider);
  return (
    <div className="testimonial-area bg-brand ">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="section-title text-center mb-40">
              <h5> Client,s Testimonial</h5>
              <h3>What Client,s Says?</h3>
            </div>
          </div>
          <div className="col-md-12">
            <Testimonial TestimonialSliderData={TestimonialSlider} />
          </div>
        </div>
      </div>
    </div>
  );
}
