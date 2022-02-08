import React from 'react';
import { Card } from "react-bootstrap";
import {
    FaRegPaperPlane,
  } from "react-icons/fa";
  
  
  // Import Swiper styles
  import "swiper/css";


function PricingCard({item}) {

// const {type,icons, pricing, duratin,feature } = item 
// console.log('item', item);

  return <div className="col-md-4 col-sm-6 ">
  <div className="our-pricing-wrap text-center mb-30">
    <Card>
      <div className="pricing-level">
        <p>{item.type}</p>
      </div>
      <Card.Body>
        <span>
            {item.icons}
        </span>
        <Card.Title>
          <h4>${item.pricing}</h4> <span>/{item.duratin}</span>
        </Card.Title>
        <Card.Text>
          <ul className="pricing-items">
              {
                  item.feature.map(liItem => <li key={liItem}>{liItem}</li> )
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
