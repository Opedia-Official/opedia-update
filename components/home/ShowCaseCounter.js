import { useState } from 'react';

import { FaCloud} from "react-icons/fa";

import CountUp from 'react-countup';


export default function Home({projectsAll}) {
  const {projects} = projectsAll;

  return (
     <>

      <div className="project-counter-area">
        <div className="container">
          <div className="row">
            {
              projects.map(project=>{
                return (
                <div className="col-md-3 col-sm-6" key={project.id}>
                    <div className="counter-up-wrap">
                          <span><FaCloud/></span>
                          <h3> <CountUp end={project.count}/> </h3>
                          <p>{project.title}</p>
                    </div>
                </div>
                )
              })
            }

          </div>
        </div>
      </div>



     </>

    
  )
}
