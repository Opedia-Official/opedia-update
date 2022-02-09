import { FaYoutube } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { useState } from "react";


import MyVerticallyCentredModal from '../components/MyVerticallyCentredModal'



export default function ExpTeam({expertTeams}) {
    const [modalShow, setModalShow] = useState(false);


  const isChecked = (e)=>{
      e.target.checked ? e.target.parentElement.nextSibling.className = 'checked' : e.target.parentElement.nextSibling.className = ''
  }

  return <>
    <div className="expTeam-section ">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 wow slideInLeft"  data-wow-duration="2s">
                        <div className="expTeam-left ">
                                <img className="parent-pic" src='./experienceTeam/pic-1.png' alt="" />
                             <div className="child d-none d-xl-block">
                             <img  src='./experienceTeam/pic-2.png' alt="" />
                             </div>
                                <img className="exp-dots" src="./experienceTeam/dot_shapes.png" alt="" />

                                <div className="exp-left-text ">
                                      <div className="exp-left-wrap d-flex align-items-center">
                                      <h3> 25 <span>+</span></h3>
                                        <h4>Years of experience we just achived </h4>
                                      </div>
                                </div>
                        </div>
                </div>
                <div className="col-md-6  wow bounceInRight"   data-wow-duration="2s">
                    <div className="expTeam-right">
                        <SectionTitle section =" About Company" title ='We team of experience It Specialties.'  description ="25+Contrary to popular belief, Lorem Ipsum is not simply random text roots in a piece of classical Latin literature from 45 BC"/>
                        <div className="expTeam-youtube-section">
                                <ul>
                                  
                                    <li> 
                                        <div> <input onChange={isChecked} className="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value2"  />
                                    <label htmlFor="styled-checkbox-1">Lorem Ipsum is simply dummy </label></div>
                                                                        
                                        
                                    <a onClick={() => setModalShow(true)}  > <FaYoutube/></a>
                                    
                                    <MyVerticallyCentredModal
                            url= "https://youtu.be/iO40U7nP6mY"
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                                    </li>
                                    <li> 
                                        <div> <input onChange={isChecked} className="styled-checkbox" id="styled-checkbox-2" type="checkbox" value="value2"  />
                                    <label htmlFor="styled-checkbox-2">Lorem Ipsum is simply dummy </label></div>
                                                                        
                                        
                                    <a onClick={() => setModalShow(true)}  > <FaYoutube/></a>
                                    
                                    <MyVerticallyCentredModal
                            url= "https://youtu.be/iO40U7nP6mY"
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                                    </li>
                                    <li> 
                                        <div> <input onChange={isChecked} className="styled-checkbox" id="styled-checkbox-3" type="checkbox" value="value2"  />
                                    <label htmlFor="styled-checkbox-3">Lorem Ipsum is simply dummy </label></div>
                                                                        
                                        
                                    <a onClick={() => setModalShow(true)}  > <FaYoutube/></a>
                                    
                                    <MyVerticallyCentredModal
                            url= "https://youtu.be/iO40U7nP6mY"
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                                    </li>
                                 
               
                    

                                </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>


  </>;
}       


