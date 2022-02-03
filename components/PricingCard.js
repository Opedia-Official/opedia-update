import React from 'react';
import { Card } from "react-bootstrap";
import {
    FaRegPaperPlane,
  } from "react-icons/fa";
  
  
  // Import Swiper styles
  import "swiper/css";


function PricingCard({item}) {

const {type,icons, pricing, duratin,feature } = item 

  return <div className="col-md-4 col-sm-6 ">
  <div className="our-pricing-wrap text-center">
    <Card>
      <div className="pricing-level">
        <p>{type}</p>
      </div>
      <Card.Body>
        <span>
            {icons}
        </span>
        <Card.Title>
          <h4>${pricing}</h4> <span>/{duratin}</span>
        </Card.Title>
        <Card.Text>
          <ul className="pricing-items">
              {
                  feature.map(liItem => <li>{liItem}</li> )
              }
          </ul>
        </Card.Text>

        <a href="#" className="btn-two mt-20">
          Start Today
        </a>
      </Card.Body>
    </Card>
  </div>
</div> ;
}

export default PricingCard;
