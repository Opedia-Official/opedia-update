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
import Testemonial from "../components/home/Testemonial";
// Import Blog Section




import WorkingProcess from "../components/WorkingProcess";
import { useEffect } from "React";
import {server} from '../config/index'


export default function Home({expertTeams,ViewServices,Gallaries,projects, pricing, TestimonialSlider}) {
  const [isReact, setIsReact] = useState(false);
  useEffect(()=>{
    // console.log('index TestimonialSlider ',TestimonialSlider)
  })


  return (
    <>
      <HeroSlide />

      <ExpTeam expertTeams = {expertTeams}/>

      <ViewService ViewServices={ViewServices}/>

      <ShowCase Gallaries ={Gallaries} />

      <ShowCaseCounter projectsAll ={projects} />

      <Update />
  
      {/* <ExpartWorkers /> */}
      <WorkingProcess/>

      <Specialist />

      <Pricing  />

      {/* <Testemonial TestimonialSlider={TestimonialSlider} /> */}


    </>
  );
}

export async function getStaticProps(context) {
  let response = await fetch(`${server}/api`)
  let data =  await response.json();
  // console.log(data.TestimonialSliderData)
  


  return {
    props: {
        expertTeams:data.ExpertTeam,
        ViewServices: data.ViewService,
        Gallaries: data.Gallary,
        projects: data.ProjectCount,
        pricing: data.dataPricing,
        TestimonialSlider: data.TestimonialSliderData,
    }, 
    revalidate: 5, // In seconds
  }
}


