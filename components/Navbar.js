import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import logo from "../public/logo/logo-blue.png";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { BsPersonFill,BsFillTelephoneFill} from "react-icons/Bs";

import { BiRightArrowAlt,BiMessageAltDetail} from "react-icons/Bi";
import { MdOutlineEmail} from "react-icons/Md";

import Modal from 'react-modal';

import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    zIndex:22342434234234,
    padding: "50px 0",
    border: "1px solid rgb(244, 151, 53)",
    height: "50rem"
  }
};
Modal.setAppElement('body')

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActiveNav, setActiveNav] = useState("Home");
  const [isSearch, setIsSearch] = useState(false);
  const [isMore, setIsMore] = useState(false);
  const [navChange, setNavChange] = useState(false);
  const textInput = useRef(null);

  const openMenu = (e) => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };




  // modal

  const [modalIsOpen,setIsOpenModal] = useState(false);
  
  function openModal() {
    setIsOpenModal(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function closeModal(){
    setIsOpenModal(false);
  }
  // modal




  const SearchHandler = (event) => {
    setIsSearch(!isSearch);
    textInput.current.focus();
  };

  const resetHandler = (event) => {
    setIsSearch(!isSearch);
  };


  useEffect(() => {
    if (!isSearch) return;
    function handleClick(event) {
      if (textInput.current && !textInput.current.contains(event.target)) {
        setIsSearch(!isSearch);
      }
    }
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);

  }, [isSearch]);


  // scrolltop



  useEffect(()=>{
    window.addEventListener('scroll',(e)=>{
      let scrolTop = e.target.documentElement.scrollTop

      if(scrolTop> 160){
        setNavChange(true)
      }else{
        setNavChange(false)
      }
    })
  },[])


  



  return (
    <>
      <div  className="top-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <ul className="social-info text-center text-md-start">
                <li>
                  <a className={styles.socialIconItem} href="#">
                 
                    <span className="s-icon">
                      <FaMapMarkerAlt />
                    </span>
                    254 Lillian Blvd, Holbrook
                  </a>
                </li>
                <li>
                  <a className={styles.socialIconItem} href="#">
                
                    <span className="s-icon">
                      <FaRegEnvelope />
                    </span>
                    info@santizex-site.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="social text-center text-md-end">
           
                
                <li>
                  <a className="social-item" href="#">
                 
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a className="social-item" href="#">
                
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a className="social-item" href="#">
                  
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a className="social-item" href="#">
              
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

        <header className={navChange?  "activeNav" : 'header' }>
      <div className="container">
          <nav className={styles.navbar}>
            <Link href="/">
              <a className={styles.navlogo}>
             
                <img src={logo.src} alt="" />
              </a>
            </Link>
            <ul
              className={
                isOpen === false
                  ? styles.navmenu
                  : styles.navmenu + " " + styles.active
              }
            >
              <li className={styles.navitem}>
                <Link href="/">
                  <a
                    className={
                      isOpen === false
                        ? styles.navlink
                        : styles.navlink + " " + styles.active,
                        isActiveNav === 'Home' ? styles.activenav: styles.navlink
                    }
                    onClick={() =>{openMenu(); setActiveNav("Home")}}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className={styles.navitem}>
                <Link href="/about">
                  <a
                    id=""
                    className={
                      isOpen === false
                        ? styles.navlink
                        : styles.navlink + " " + styles.active,
                        isActiveNav === 'About' ? styles.activenav: styles.navlink
                    }
                    onClick={() =>{openMenu(); setActiveNav("About")}}
                  >
                    About
                  </a>
                </Link>
              </li>
              <li className={styles.navitem}>
                <Link href="/service">
                  <a
                    id=""
                    className={
                      isOpen === false
                        ? styles.navlink
                        : styles.navlink + " " + styles.active,
                        isActiveNav === 'Service' ? styles.activenav: styles.navlink
                    }
                    onClick={() =>{openMenu(); setActiveNav("Service")}}
                  >
                    Service
                  </a>
                </Link>

                <div className={styles.dropdown}>
                  <div className="containerr">
                    <div className="row justify-content-center">
                      <div className="col-md-12 col-xl-2 mb-4 mb-xl-0">
                        <div className={styles.dropdown__inner}>
                          <h2 className={styles.dropdown__title}>
                            Web & Software
                          </h2>
                          <ul className={styles.dropdown__list}>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Web design
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Web Development
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Apps Development
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Mern Service
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Api create and integration
                              </a>
                            </li>
                            {
                              isMore  && <ul>
                                <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Digital Marketing
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Dashboard Design
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Single Page Application
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                React Application
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Wordpress Design and Development
                              </a>
                            </li>
                              </ul>
                            }
                          </ul>
                        </div>
                            <p style={{color: "#f49735", fontSize:'18px', fontWeight:'bold'}} onClick={() =>setIsMore(!isMore)}>{isMore ?  "Less" :  'More'}</p>
                      </div>
                      <div className="col-md-12 col-xl-2 mb-4 mb-xl-0">
                        <div className={styles.dropdown__inner}>
                          <h2 className={styles.dropdown__title}>
                            Digital Marketing
                          </h2>
                          <ul className={styles.dropdown__list}>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                SEO Service
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                SMM Service
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Email Marketing
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                F-Commerce Service
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                               Google Ads
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-12 col-xl-2 mb-4 mb-xl-0">
                        <div className={styles.dropdown__inner}>
                          <h2 className={styles.dropdown__title}>
                            Multimedia & Printing
                          </h2>
                          <ul className={styles.dropdown__list}>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Corporate Brand Guideline
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                2D & 3D Video Creation
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                  Promotional Video Creation
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Video Editing Service
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Corporate Printing <br /> Service & Delivery
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-md-12 col-xl-2">
                        <div className={styles.dropdown__inner}>
                          <h2 className={styles.dropdown__title}>
                            Dropdown Title
                          </h2>
                          <ul className={styles.dropdown__list}>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Digital Marketing
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Affiliate Marketing
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Graphic Design
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Logo Design
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Web Development
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-12 col-xl-2 mb-4 mb-xl-0">
                        <div
                          className={
                            (styles.dropdown__inner, styles.dropdown__last)
                          }
                        >
                          <h2 className={styles.dropdown__title}>
                            Product Design
                          </h2>
                          <ul className={styles.dropdown__list}>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                UI, UX Design
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Web App Design
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Mobile App Design
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Product Redesign
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Application Solution
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className={styles.navitem}>
                <Link href="/team">
                  <a
                    id=""
                    className={
                      isOpen === false
                        ? styles.navlink
                        : styles.navlink + " " + styles.active,
                        isActiveNav === 'Team' ? styles.activenav: styles.navlink
                    }
                    
                    onClick={() =>{openMenu; setActiveNav("Team")}}
                    
                  >
                    Training
                  </a>
                </Link>
                <div className={styles.dropdown1}>
                  <div className="containerr trainingNav">
                    <div className="row justify-content-center">
                      <div className="col-12">
                        <div className={styles.dropdown__inner2}>
                          
                          <ul className={styles.dropdown__list}>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                              Training
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Affiliate Marketing
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Graphic Design
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Logo Design
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Web Development
                              </a>
                            </li>
                            {
                              isMore  && <ul>
                                <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Digital Marketing
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Affiliate Marketing
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Graphic Design
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Logo Design
                              </a>
                            </li>
                            <li className={styles.dropdown__item}>
                              <a className={styles.dropdown__link}>
                                Web Development
                              </a>
                            </li>
                              </ul>
                            }
                          </ul>
                        </div>
                            {/* <p style={{color: "#f49735", fontSize:'18px', fontWeight:'bold'}} onClick={() =>setIsMore(!isMore)}>{isMore ?  "Less" :  'More'}</p> */}
                      </div>
                     

                      
                    </div>
                  </div>
                </div>
              </li>
              <li className={styles.navitem}>
                <Link href="/contact">
                  <a
                    id=""
                    className={
                      isOpen === false
                        ? styles.navlink
                        : styles.navlink + " " + styles.active,
                        isActiveNav === 'Blog' ? styles.activenav: styles.navlink
                    }
                    onClick={() =>{openMenu(); setActiveNav("Blog")}}
                  >
                    Blog
                  </a>
                </Link>
              </li>
              <li className={styles.navitem}>
                {/* <Link href="/portfolio"> */}
                  <a
                    // id="#portfolio"
                    href="#portfolio"
                    className={
                      isOpen === false
                        ? styles.navlink
                        : styles.navlink + " " + styles.active,
                        isActiveNav === 'Portfolio' ? styles.activenav: styles.navlink
                    }
                    onClick={() =>{openMenu(); setActiveNav("Portfolio")}}
                  >
                    Portfolio
                  </a>
                {/* </Link> */}
              </li>
              <li className={styles.navitem}>
                <div className="sample fourteen">
                  <input
                    type="text"
                    ref={textInput}
                    name="search"
                    placeholder="search"
                  />
                  <button
                    type="submit"
                    onClick={SearchHandler}
                    className="btn btn-search"
                  >
                    <FaSearch />
                  </button>
                  <button
                    type="reset"
                    onClick={resetHandler}
                    form="form"
                    className="btn-reset fa fa-times"
                  ></button>
                </div>
              </li>
              <li className={styles.navitem}>
                <Link href="#">
                  <a 
                    id=""
                    className={
                      isSearch ? "btn-brand isSearchClicked" : "btn-brand "
                    }
                    onClick={()=>{openMenu();openModal()}}
                  >
                    Get a Quote{" "}
                  </a>
                </Link>


                {/* modal items */}

                <Modal
                  isOpen={modalIsOpen}
                  // onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >

                  
                  <div className=" offset-2 col-8"> 
                                    <div className="contact-right-form mt-5 mt-lg-0 ">
                                      <h3 className="contact-modal">Get A free Quote</h3>
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
                                                    <button onClick={closeModal} className="btn-two mr-10 mt-4">Close</button>
                                                    <button type="submit" className="btn-brand mt-4">Submit Request <BiRightArrowAlt/> </button>
                                            </form>
                                    </div>
                                </div>
                </Modal>
                {/* modal items */}

              </li>
            </ul>
         
            <button
              className={
                isOpen === false
                  ? styles.hamburger
                  : styles.hamburger + " " + styles.active
              }
              onClick={openMenu}
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>
          </nav>
      </div>
        </header>
    </>
  );
}
