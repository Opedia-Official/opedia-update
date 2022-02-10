import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import ChangingProgressProvider from "./changingProgressProvider";
import "react-circular-progressbar/dist/styles.css";

export default function Progressbar() {

  return <>
                 
        <div className="progressbar-area">
            <div className="row">
              <div className="offset-lg-2 col-lg-5 ">
                <div className="progressbar-wrap wow fadeIn"  data-wow-duration=".5s"  data-wow-delay="1s">
                      <ChangingProgressProvider values={[0, 60]}>
                        {percentage => (
                          <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({
                              pathTransition:
                                percentage === 0 ? "none" : "stroke-dashoffset 1.5s ease 0s"
                            })}
                          />
                        )}
                      </ChangingProgressProvider>
                     <div className="progress-info">
                     <h4>Project Done</h4>
                      <span>Construction Simulator</span>
                     </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="progressbar-wrap mt-5 mt-lg-0  wow fadeIn"  data-wow-duration=".5s"  data-wow-delay="1s">
                      <ChangingProgressProvider values={[0, 80]}>
                        {percentage => (
                          <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({
                              pathTransition:
                                percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s"
                            })}
                          />
                        )}
                      </ChangingProgressProvider>
                      <div className="progress-info">
                     <h4>Project Done</h4>
                      <span>Construction Simulator</span>
                     </div>
                </div>
              </div>
            </div>
        </div>

  </>;
}
