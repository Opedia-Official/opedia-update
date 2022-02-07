
import { Card } from "react-bootstrap";
  import InnerHead from "../components/innerHead";
  
  import { BiRightArrowAlt} from "react-icons/bi";
import { SiSimpleanalytics} from "react-icons/si";
import { FaCloud, FaDatabase} from "react-icons/fa";
import { MdOutlineDesignServices} from "react-icons/md";


  export default function Home() {
   
  
    return (
       <>
          <InnerHead title = "Service"/>
          
  
              {/* VIEW SERVICE AREA */}
        <div className="view-service-page mb-100 mt-50">
          <div className="container">
          <div className="row justify-content-center">
                      <div className="col-md-6">
                        <div className="section-title text-center mb-50">
                            <h5>Expert Worker</h5>
                            <h3>Our Expert Worker.</h3>

                        </div>
                      </div>
                    </div>
            <div className="row">
              <div className="col-md-12">
                  <div className= {"view-service-right-wrapper service"}  >
                      <div className="row">
                        <div className="col-lg-4 col-sm-6 mb-5">
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
                        <div className="col-lg-4 col-md-6  col-sm-6 mb-5 ">
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
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-5 ">
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
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
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
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
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
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
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
   {/* VIEW SERVICE AREA */}
  
  
          
  
  
  
  
        
  
  
  
          
  
  
       </>
  
      
    )
  }
  