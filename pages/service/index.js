import InnerHead from "../../components/innerHead";

import WhatsappChat from "../../components/whatsappChat";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ServiceItem from "./serviceItem";
import Meta from "../../components/Meta";
import axios from "axios";
import { server } from "../../config";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Home({}) {
  const [allServices, setAllServices] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }

    new WOW.WOW().init();

    const marketingData = axios.get(`${server}/api/service`).then((res) => {
      console.log("allData All Services Data:  ", res.data);
      setAllServices(res.data);
    });
  }, []);

  return (
    <>
      <InnerHead title="Service" />
      <Meta title="Service" />
      <WhatsappChat />
      {/* VIEW SERVICE AREA */}
      <div className="view-service-page mb-100 mt-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="section-title text-center mb-50">
                <h5>Services</h5>
                <h3>Our Services.</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12  wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.8s"
            >
              <div className={"view-service-right-wrapper service"}>
                <div className="row">
                  {allServices.length > 0
                    ? allServices.map((item) => (
                        <div
                          key={item.id}
                          className="col-lg-4 col-sm-6 mb-5 wow fadeIn wow fadeIn"
                        >
                          <ServiceItem item={item} />
                          {/* <Card>
                        <Card.Body>
                          <FaCloud />
                          <Card.Title>Cloud Computing</Card.Title>
                          <Card.Text>
                            Construction is a general term the art and science
                            to form
                            <div>
                              <Link
                                href={`service/${item}.LowerCase().split(",")join("").replace(/\s/g, "-")`}
                              >
                                <a>
                                  Service Details <BiRightArrowAlt />
                                </a>
                              </Link>
                            </div>
                          </Card.Text>
                        </Card.Body>
                      </Card> */}
                        </div>
                      ))
                    : "Loading..."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* VIEW SERVICE AREA */}

      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="251, 129, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
    </>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("http://admin.opediatech.com/api/service");
//   const services = await res.json();

//   return {
//     props: {
//       services,
//     },
//     revalidate: 10,
//   };
// }

// export async function getServerSideProps() {
//   const res = await fetch("http://admin.opediatech.com/api/service");
//   const services = await res.json();

//   return {
//     props: {
//       services,
//     },
//   };
// }
