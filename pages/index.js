import { useState } from "react";
import Head from "next/head";
import HeroSlide from "../components/HeroSlide";
import ExpTeam from "../components/ExpTeam";

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
import Testimonial from "../components/home/Testimonial";
// Import Blog Section

import dynamic from 'next/dynamic'




import WorkingProcess from "../components/WorkingProcess";
import { useEffect } from "react";
import {server} from '../config/index'

import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import WhatsappChat from "../components/whatsappChat";






const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});


export default function Home() {
  const [isReact, setIsReact] = useState(false);

  useEffect(()=>{
    if(typeof window !== 'undefined') {

      window.WOW = require('wowjs');
  
    }
  
    new WOW.WOW().init();
  },[])

  return (
    <>
    
      <HeroSlide />

    <ExpTeam />

      <ViewService />

      <ShowCase  />

      <ShowCaseCounter  />  
     
      
      
       {/*  */}

      {/* <ExpTeam expertTeams = {expertTeams}/>

      <ViewService ViewServices={ViewServices}/>

      <ShowCase Gallaries ={Gallaries} />

      <ShowCaseCounter projectsAll ={projects} /> */}

      <Update />
  
      {/* <ExpartWorkers /> */}
      <WorkingProcess/>

      <Specialist />

      <Pricing  />




 {/* <div className="cursor">

      <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='251, 129, 0'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
 </div> */}
   
{/* <div class="elfsight-app-666896e2-7e9c-436a-a84b-1070ceca6e89"></div> */}


<WhatsappChat/>

    </>
  );
}

// export async function getStaticProps(context) {
//   let response = await fetch(`${server}/api`)
//   let data =  await response.json();
  


//   return {
//     props: {
//         expertTeams:data.ExpertTeam,
//         ViewServices: data.ViewService,
//         Gallaries: data.Gallary,
//         projects: data.ProjectCount,
//     }, 
//     revalidate: 5, 
//   }
// }




