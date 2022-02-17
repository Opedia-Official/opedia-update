import React from "react";
import Style from "../../styles/singleService.module.css";

import { BsArrowRightCircleFill } from "react-icons/bs";
import dynamic from "next/dynamic";
import WhatsappChat from "../../components/whatsappChat";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { server } from "../../config";
import axios from "axios";
import { useState } from "react";
import context from "react-bootstrap/esm/AccordionContext";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

function SinglePage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="container my-5 py-5">
      <WhatsappChat />

      <p>Post: {id}</p>
      <div className={"row"}>
        <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 ">
          <div className="">
            <img
              className={Style.img}
              src="https://images.unsplash.com/photo-1640622661329-67f406a77d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />

            <ServiceDetails slug={id} />
          </div>
        </div>
        <div className={"col-lg-4 col-md-6 col-sm-12 col-xs-12 px-5"}>
          <div className="sidebarSingle">
            <h2 className={Style.title}>All Sections </h2>

            <div className={Style.service}>
              <ul>
                <li>graphics desiginig</li>
                <li>graphics desiginig</li>
                <li>graphics desiginig</li>
                <li>graphics desiginig</li>
              </ul>
            </div>
          </div>
          <div className={Style.opningHour}>
            <h2 className={Style.title}>Opening Hours</h2>

            <div className={Style.option}>
              <p>Monday - Friday</p>
              <p>9.00 - 20.00</p>
            </div>
            <div className={Style.option}>
              <p>Monday - Friday</p>
              <p>9.00 - 20.00</p>
            </div>
            <div className={Style.option}>
              <p>Monday - Friday</p>
              <p>9.00 - 20.00</p>
            </div>
            <div className={Style.serviceBtn}>
              Service Details <BsArrowRightCircleFill />{" "}
            </div>
          </div>
          <div className="mt-5">
            <h2 className={Style.title}>Image Gallery</h2>
            <img
              className={Style.imgGalery}
              src="https://images.unsplash.com/photo-1640622661329-67f406a77d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
          <div>
            <h2 className={Style.title}>Services</h2>
            <p className={Style.pera}>
              Lorem ipsum dolor sit amet consect sit amet consect sit amet
              consect
            </p>
          </div>
        </div>
      </div>

      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="251, 129, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
    </div>
  );
}

export default SinglePage;

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/serviceAllCategory`);
  const allData = res.data;

  const paths = data.map((singlePage) => {
    return { params: { id: singlePage.id } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`${server}/api/service/${slug}`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

function ServiceDetails({ slug }) {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const marketingData = axios
      .get(`${server}/api/service/${slug}`)
      .then((res) => {
        console.log("allData Single compornent single data ", res.data);
        setContent(res.data);
      });
  }, [slug]);
  return (
    <>
      <h2 className={Style.title}>{content?.service_title}</h2>
      {/* <p className={Style.pera}>{content?.service_desc}</p> */}
      <p
        dangerouslySetInnerHTML={{
          __html: `${content.service_desc}`,
        }}
        className={Style.pera}
      ></p>
    </>
  );
}
