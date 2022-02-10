import { Card } from "react-bootstrap";
import { BiRightArrowAlt} from "react-icons/bi";
import InnerHead from '../../components/innerHead'
import Link from "next/link";
import { useEffect } from "react";
export default function Portfolio() {

    useEffect(()=>{
        if(typeof window !== 'undefined') {
    
          window.WOW = require('wowjs');
      
        }
      
        new WOW.WOW().init();
      },[])
  return <>
        <InnerHead title="Portfolio"/>
    <div className="portfolio-area">
        <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                    <div className="section-title text-center mb-50">
                        <h5>Expert Worker</h5>
                        <h3>Our Expert Worker.</h3>
                    </div>
                    </div>
                </div>
            <div className="row   wow fadeIn" data-wow-duration="1s" data-wow-delay="1s">
                    {/* portfolio item */}
                <div className="col-lg-4 col-sm-6">
                    <div className="portfolio-items mb-100">
                        <Card>
                            <Card.Img src="./portfolio/img.png" />
                        </Card>
                        <div className="portfolio-info">
                            <span>It Solutions</span>
                            <h2>Machine Learning</h2>
                            <div>
                                <Link href="portfolio-details">
                                    <a > View Projects <BiRightArrowAlt/></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                    {/* portfolio item */}
                    {/* portfolio item */}
                <div className="col-lg-4 col-sm-6">
                    <div className="portfolio-items mb-100">
                        <Card>
                            <Card.Img src="./portfolio/img.png" />
                        </Card>
                        <div className="portfolio-info">
                            <span>It Solutions</span>
                            <h2>Machine Learning</h2>
                            <div>
                            <Link href="portfolio-details">
                                    <a > View Projects <BiRightArrowAlt/></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                    {/* portfolio item */}
                    {/* portfolio item */}
                <div className="col-lg-4 col-sm-6">
                    <div className="portfolio-items mb-100">
                        <Card>
                            <Card.Img src="./portfolio/img.png" />
                        </Card>
                        <div className="portfolio-info">
                            <span>It Solutions</span>
                            <h2>Machine Learning</h2>
                            <div>
                              <Link href="portfolio-details">
                                    <a > View Projects <BiRightArrowAlt/></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                    {/* portfolio item */}
                    {/* portfolio item */}
                <div className="col-lg-4 col-sm-6">
                    <div className="portfolio-items mb-100">
                        <Card>
                            <Card.Img src="./portfolio/img.png" />
                        </Card>
                        <div className="portfolio-info">
                            <span>It Solutions</span>
                            <h2>Machine Learning</h2>
                            <div>
                                <Link href="portfolio-details">
                                    <a > View Projects <BiRightArrowAlt/></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                    {/* portfolio item */}
                    {/* portfolio item */}
                <div className="col-lg-4 col-sm-6">
                    <div className="portfolio-items mb-100">
                        <Card>
                            <Card.Img src="./portfolio/img.png" />
                        </Card>
                        <div className="portfolio-info">
                            <span>It Solutions</span>
                            <h2>Machine Learning</h2>
                            <div>
                                 <Link href="portfolio-details">
                                    <a > View Projects <BiRightArrowAlt/></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                    {/* portfolio item */}
                    {/* portfolio item */}
                <div className="col-lg-4 col-sm-6">
                    <div className="portfolio-items mb-100">
                        <Card>
                            <Card.Img src="./portfolio/img.png" />
                        </Card>
                        <div className="portfolio-info">
                            <span>It Solutions</span>
                            <h2>Machine Learning</h2>
                            <div>
                                <Link href="portfolio-details">
                                    <a > View Projects <BiRightArrowAlt/></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                    {/* portfolio item */}
            </div>
        </div>
    </div>


  
  </>
}
