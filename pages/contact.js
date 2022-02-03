import { Card } from "react-bootstrap";
import { BiPhoneCall} from "react-icons/Bi";
import { GoLocation} from "react-icons/Go";
import { BsPersonFill} from "react-icons/Bs";
import { AiOutlineMessage} from "react-icons/Ai";
import { BiRightArrowAlt} from "react-icons/Bi";
import InnerHead from '../components/innerHead'
import Meta from "../components/Meta";


export default function portfolio() {
    
  return <>
            <Meta title="Contact"/>
        <InnerHead title="Contact Us"/>
        <div className="contact-us-area pt-80 pb-120">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-12">
                        <div className="contact-wrap">
                        <Card >
                        <Card.Body>
                            <div className="row ">
                                <div className="col-lg-6">
                                        <div className="contact-left-info mb-5 mb-lg-0">
                                                <h2>Feel free to contact
                                                    us for any query.</h2>
                                            <ul className="contact-info-text">
                                                <li>
                                                    <div className="contact-icon">
                                                        <span> <BiPhoneCall/></span>
                                                    </div>
                                                    <div className="contact-info-text">
                                                            <h4>Phone Number:</h4>
                                                            <p>Head office: (210) 123 451</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="contact-icon">
                                                        <span> <AiOutlineMessage/></span>
                                                    </div>
                                                    <div className="contact-info-text">
                                                            <h4>Mail Address:</h4>
                                                            <p>webecyenvato12@gmail.com</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="contact-icon">
                                                        <span> <GoLocation/></span>
                                                    </div>
                                                    <div className="contact-info-text">
                                                            <h4>Office Address:</h4>
                                                            <p>254 Lillian Blvd, Holbrook</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="contact-right-form mt-5 mt-lg-0 ">
                                            <form action="#">
                                                    <div className="row">
                                                        <div className="col-lg-6 mb-5">
                                                                <div className="c-input-wrap">
                                                                    <input type="text" placeholder="First Name *" />
                                                                    <span>
                                                                        <BsPersonFill/>
                                                                    </span>
                                                                </div>
                                                        </div>
                                                        <div className="col-lg-6 mb-5">
                                                                <div className="c-input-wrap">
                                                                    <input type="text" placeholder="First Name *" />
                                                                    <span>
                                                                        <BsPersonFill/>
                                                                    </span>
                                                                </div>
                                                        </div>
                                                        <div className="col-lg-6 mb-5">
                                                                <div className="c-input-wrap">
                                                                    <input type="email" placeholder="Mail Address *" />
                                                                    <span>
                                                                        <BsPersonFill/>
                                                                    </span>
                                                                </div>
                                                        </div>
                                                        <div className="col-lg-6 mb-5">
                                                                <div className="c-input-wrap">
                                                                    <input type="tell" placeholder="Phone Number " />
                                                                    <span>
                                                                        <BsPersonFill/>
                                                                    </span>
                                                                </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                                <div className="c-input-wrap c-text-area">
                                                                    <textarea name="" id="" cols="30" rows="10" placeholder="Phone Number "></textarea>
                                                                    
                                                                    <span>
                                                                        <BsPersonFill/>
                                                                    </span>
                                                                </div>
                                                        </div>
                                                      
                                                    </div>
                                                    <button type="submit" className="btn-brand mt-5">Submit Request <BiRightArrowAlt/> </button>
                                            </form>
                                    </div>
                                </div>
                            </div>
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  
  </>
}
