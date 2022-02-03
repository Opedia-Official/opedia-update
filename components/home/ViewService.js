import { Card } from 'react-bootstrap';
import { BiRightArrowAlt} from "react-icons/bi";
import { SiSimpleanalytics} from "react-icons/si";

import { FaCloud, FaDatabase} from "react-icons/fa";
import { MdOutlineDesignServices} from "react-icons/md";


import HomeStyle from "../../styles/Home.module.css";


export default function ViewService() {
    return(
        
    <div className="view-service-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="view-service-section-wrapper">
                    <div className="section-title">
                                <h5>// About Company</h5>
                                <h3>Provide It & Technol 
                                Service For You</h3>
                            </div>
                            <p >Construction is a general term meaning the art and science to form
                      systems organizations, and comes from Latin Construction is</p>
                    <div className="section-title">
                       
                                <p>Construction is a general term meaning the art and science to form
                              systems organizations, and comes from Latin Construction is a 
                              organizations, and comes from Latin construction and Old</p>
                        </div>
                  <a href="#" className="btn-two mt-35">View Service</a>

                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0 ">
                  <div className= {HomeStyle.viewServiceBg + " " +  "view-service-right-wrapper"}  >
                      <div className="row">
                        <div className="col-lg-6 col-sm-6">
                        <Card >
                          <Card.Body>
                          <FaCloud/>
                            <Card.Title>Cloud Computing</Card.Title>
                            <Card.Text>
                                    Construction is a general term
                                  the art and science to form 
                                <div>
                                <a href="#"> Service Details <BiRightArrowAlt/></a>
                                </div>
                            </Card.Text>
                          
                          </Card.Body>
                        </Card>
                        </div>
                        <div className="col-lg-6 col-sm-6 mt-5">
                        <Card >
                          <Card.Body>
                            <SiSimpleanalytics/>
                            <Card.Title>Analytic Solutions</Card.Title>
                            <Card.Text>
                            Construction is a general term
                          the art and science to form 
                                <div>
                                <a href="#"> Service Details <BiRightArrowAlt/></a>
                                </div>
                            </Card.Text>
                          
                          </Card.Body>
                        </Card>
                        </div>
                        <div className="col-lg-6 col-sm-6 mt--35">
                        <Card >
                          <Card.Body>
                            <MdOutlineDesignServices/>
                            <Card.Title>product & Design</Card.Title>
                            <Card.Text>
                                    Construction is a general term
                                  the art and science to form 
                                <div>
                                <a href="#"> Service Details <BiRightArrowAlt/></a>
                                </div>
                            </Card.Text>
                          
                          </Card.Body>
                        </Card>
                        </div>
                        <div className="col-lg-6 col-sm-6 mt-5">
                        <Card >
                          <Card.Body>
                            <FaDatabase/>
                            <Card.Title>Data Centers</Card.Title>
                            <Card.Text>
                                    Construction is a general term
                                  the art and science to form 
                                <div>
                                <a href="#"> Service Details <BiRightArrowAlt/></a>
                                </div>
                            </Card.Text>
                          
                          </Card.Body>
                        </Card>
                        </div>
                      </div>
                  </div>

              </div>
            </div>
          </div>
        </div>
    )
}