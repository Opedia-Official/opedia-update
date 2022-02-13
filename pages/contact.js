import { Card } from "react-bootstrap";
import { BiPhoneCall} from "react-icons/Bi";
import { GoLocation} from "react-icons/Go";
import { BsPersonFill,BsFillTelephoneFill} from "react-icons/Bs";
import { AiOutlineMessage} from "react-icons/Ai";
import { BiRightArrowAlt,BiMessageAltDetail} from "react-icons/Bi";
import { MdOutlineEmail} from "react-icons/Md";
// import { BsFillTelephoneFill} from "react-icons/Fa";

import InnerHead from '../components/innerHead'
import Meta from "../components/Meta";
import WhatsappChat from "../components/whatsappChat";
import dynamic from 'next/dynamic'


const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
  });


export default function portfolio({posts}) {
    console.log('All Posts',posts)
    
  return <>
            <Meta title="Contact"/>
            <WhatsappChat/>
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
                                                                        <MdOutlineEmail/>
                                                                    </span>
                                                                </div>
                                                        </div>
                                                        <div className="col-lg-6 mb-5">
                                                                <div className="c-input-wrap">
                                                                    <input type="tell" placeholder="Phone Number " />
                                                                    <span>
                                                                        <BsFillTelephoneFill/>
                                                                    </span>
                                                                </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                                <div className="c-input-wrap c-text-area">
                                                                    <textarea name="" id="" cols="30" rows="10" placeholder="Message "></textarea>
                                                                    
                                                                    <span>
                                                                        <BiMessageAltDetail/>
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
                        {/* <div style={{textAlign: 'center'}}> */}

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.234956940982!2d90.3633023149818!3d23.774646184577378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c152946ccfad%3A0xc8edb7d360ab91fe!2sOpedia%20Technologies%20Limited!5e0!3m2!1sen!2sbd!4v1644670675499!5m2!1sen!2sbd" width="100%"  height="450" style={{border:'0', margin:'20px auto 0px'}}  loading="lazy"></iframe>
                        {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
       

        <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='251, 129, 0'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />

  
  </>
}





// export async function getStaticProps() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos')
//     const posts = await res.json()
  
//     return {
//       props: {
//         posts,
//       },
//       // Next.js will attempt to re-generate the page:
//       // - When a request comes in
//       // - At most once every 10 seconds
//       revalidate: 10, // In seconds
//     }
//   }

//   export async function getStaticPaths() {
//     const res = await fetch('https://.../posts')
//     const posts = await res.json()
  
//     // Get the paths we want to pre-render based on posts
//     const paths = posts.map((post) => ({
//       params: { id: post.id },
//     }))
  
//     // We'll pre-render only these paths at build time.
//     // { fallback: blocking } will server-render pages
//     // on-demand if the path doesn't exist.
//     return { paths, fallback: 'blocking' }
//   }