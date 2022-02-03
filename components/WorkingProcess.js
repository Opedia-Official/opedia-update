import React from 'react';
import { FaPlus } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BsArrowRight } from "react-icons/Bs";
import style from "../styles/workingProcess.module.css"

export default function WorkingProcess() {
    return <>
    <div className="workingProcessArea text-center text-lg-start mb-100">
        <div className="container">
            <div className='row align-items-center'>
                <div className="col-lg-7">
                    <div className="section-title">
                        <h5>// Working Process</h5>
                        <h3>Our Working Process
                        For Client Work It Specialties.</h3>
                    </div>
                </div>
                <div className="col-lg-5">
                        <div className={`${style.workingProcessWrap} mt-4 mt-lg-0`} >
                                <div className={style.wpItem}>
                                        <h2>365 <span><FaPlus/></span></h2> 
                                        <p>Succed Project</p>
                                </div>
                                <div className={style.wpItem}>
                                <h2>365 <span><FaPlus/></span></h2> 
                                        <p>Succed Project</p>
                                </div>
                                       
                                </div>
                        </div>
                </div>
                <div className="row justify-content-center align-items-center mt-50">
                    {
                        [1,2,3,4].map(()=>{
                            return (
                                <div className="col-lg-3 col-sm-6 mb-30">
                                <div className={style.workingProgressStepsWrap}>
                                    <div className={style.workingProgressItems}>
                                            <span className={style.wpIcon}>
                                                <FiSettings/>                                                                                  
                                            </span>
                                            <h3>Choose Service</h3>     
                                            <span className={style.wpArrow}>
                                            <BsArrowRight/>
                                            </span>
                                    </div>
                                </div>
                        </div>
                            )

                        })
                    }
            
               
                </div>
            </div>
        </div>




    </>;
}