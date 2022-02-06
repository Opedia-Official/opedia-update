import { Card } from 'react-bootstrap';
import { BiRightArrowAlt} from "react-icons/bi";

import { FaCloud} from "react-icons/fa";


import HomeStyle from "../../styles/Home.module.css";
import SectionTitle from '../SectionTitle';

import Link from 'next/link';
export default function ViewService({ViewServices}) {


  const {Section, Services} = ViewServices
    return(      
    <div className="view-service-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="view-service-section-wrapper">
                    <SectionTitle  section={Section.sectionHead} title={Section.title} />
                      <p >{Section.moreText}</p>
                    <SectionTitle  description={Section.description} />
                    <Link href="/service">
                       <a className="btn-two mt-35">View Service</a>
                    </Link>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0 ">
                  <div className= {HomeStyle.viewServiceBg + " " +  "view-service-right-wrapper"}  >
                      <div className="row">
                          {
                            Services.map(service=>{
                              return (
                                <div className="col-lg-6 col-sm-6" key={service.id}>
                                  <Card >
                                    <Card.Body>
                                    <FaCloud/>
                                      <Card.Title>{service.title}</Card.Title>
                                      <Card.Text>
                                              {service.desc}
                                          <div>
                                            <Link href={`/service/${service.id}`}>
                                              <a> Service Details <BiRightArrowAlt/></a>
                                            </Link>
                                          </div>
                                      </Card.Text>
                                    
                                    </Card.Body>
                                  </Card>
                                 </div>
                              )
                            })
                          }
                      </div>
                  </div>

              </div>
            </div>
          </div>
        </div>
    )
}