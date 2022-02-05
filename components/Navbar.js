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

import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setActive] = useState(true);
  const [isActiveNav, setActiveNav] = useState("Home");
  const [isSearch, setIsSearch] = useState(false);
  const [isMore, setIsMore] = useState(false);
  const textInput = useRef(null);

  const openMenu = (e) => {
    setIsOpen(!isOpen);

    if (isActive) {
      e.target.id = "isActive";
      setActive(!isActive);
    }
  };

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

  return (
    <>
      <div className="top-header">
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

      <div className="container">
        <header>
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
                    onClick={() =>{openMenu; setActiveNav("Home")}}
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
                    onClick={() =>{openMenu; setActiveNav("About")}}
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
                    onClick={() =>{openMenu; setActiveNav("Service")}}
                  >
                    Service
                  </a>
                </Link>

                <div className={styles.dropdown}>
                  <div className="containerr">
                    <div className="row justify-content-center">
                      <div className="col-md-6 col-xl-2 mb-4 mb-xl-0">
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
                            <p style={{color: "#f49735", fontSize:'18px', fontWeight:'bold'}} onClick={() =>setIsMore(!isMore)}>{isMore ?  "Less" :  'More'}</p>
                      </div>
                      <div className="col-md-6 col-xl-2 mb-4 mb-xl-0">
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
                      <div className="col-md-6 col-xl-2 mb-4 mb-xl-0">
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

                      <div className="col-md-6 col-xl-2">
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
                      <div className="col-md-6 col-xl-2 mb-4 mb-xl-0">
                        <div
                          className={
                            (styles.dropdown__inner, styles.dropdown__last)
                          }
                        >
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
                    Team
                  </a>
                </Link>
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
                    onClick={() =>{openMenu; setActiveNav("Blog")}}
                  >
                    Blog
                  </a>
                </Link>
              </li>
              <li className={styles.navitem}>
                <Link href="/portfolio">
                  <a
                    id=""
                    className={
                      isOpen === false
                        ? styles.navlink
                        : styles.navlink + " " + styles.active,
                        isActiveNav === 'Portfolio' ? styles.activenav: styles.navlink
                    }
                    onClick={() =>{openMenu; setActiveNav("Portfolio")}}
                  >
                    Portfolio
                  </a>
                </Link>
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
                <Link href="/contact">
                  <a
                    id=""
                    className={
                      isSearch ? "btn-brand isSearchClicked" : "btn-brand "
                    }
                    onClick={openMenu}
                  >
                    Contact{" "}
                  </a>
                </Link>
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
        </header>
      </div>
    </>
  );
}
