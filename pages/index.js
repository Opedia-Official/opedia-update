import { useState } from "react";
import Head from "next/head";
import HeroSlide from "../components/HeroSlide";
import ExpTeam from "../components/ExpTeam";
import { Card } from "react-bootstrap";
import { BiRightArrowAlt } from "react-icons/bi";
import { SiSimpleanalytics } from "react-icons/si";

// Import View Service Section
import ViewService from "../components/home/ViewService";
// Import Showcase Service Section
import ShowCase from "../components/home/ShowCase";
// Showcase Counter Section
import ShowCaseCounter from "../components/home/ShowCaseCounter";
// Import Update Section
import Update from "../components/home/Update";
//Import Expert Workers section
import ExpartWorkers from "../components/home/ExpartWorkers";
//Import Speacialist Section
import Specialist from "../components/home/Specialist";
//Import Pricing Section
import Pricing from "../components/home/Pricing";
// Import Testemonial Section
import Testemonial from "../components/home/Testemonial";
// Import Blog Section
import Blog from "../components/home/Blog";

import "swiper/css";
import {
  FaCloud,
  FaDatabase,
  FaRegHeart,
  FaHeart,
  FaRegSmileBeam,
  FaFacebookF,
  FaRegPaperPlane,
  FaRegLightbulb,
  FaPlaneDeparture,
  FaAngleDoubleRight,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaHeadphonesAlt,
} from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { FiShare2 } from "react-icons/Fi";
import { GiHelicopter } from "react-icons/Gi";
import { BsChatSquare } from "react-icons/Bs";
import { GiSofa } from "react-icons/Gi";

import CountUp from "react-countup";
import HomeStyle from "../styles/Home.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import WorkingProcess from "../components/WorkingProcess";

export default function Home() {
  const [isReact, setIsReact] = useState(false);

  return (
    <>
      <HeroSlide />

      <ExpTeam />

      <ViewService />

      <ShowCase />

      <ShowCaseCounter />

      <Update />
  
      {/* <ExpartWorkers /> */}
      <WorkingProcess/>

      <Specialist />

      <Pricing />

      <Testemonial />


    </>
  );
}


