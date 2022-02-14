import { Card } from "react-bootstrap";
import { BiRightArrowAlt } from "react-icons/bi";
import InnerHead from "../../components/innerHead";
import Link from "next/link";
import { useEffect } from "react";
import WhatsappChat from "../../components/whatsappChat";
import Meta from "../../components/Meta";
import AnimatedCursor from "react-animated-cursor";
export default function Portfolio({ posts }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }

    new WOW.WOW().init();
  }, []);
  return (
    <>
      <WhatsappChat />
      <InnerHead title="Portfolio" />
      <div className="portfolio-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="section-title text-center mb-50">
                <h5>Expert Worker</h5>
                <h3>Our Expert Worker.</h3>
              </div>
            </div>
          </div>
          <div
            className="row   wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            {/* portfolio item */}
            {posts.map((item) => (
              <div className="col-lg-4 col-sm-6">
                <Meta title={item.portfolio_title} />
                <div className="portfolio-items mb-100">
                  <Card>
                    <Card.Img
                      src={`http://admin.opediatech.com/${item.thambnail_image}`}
                    />
                    {/* <Card.Img src="./portfolio/img.png" /> */}
                  </Card>
                  <div className="portfolio-info">
                    <span>It Solutions</span>
                    <h2>Machine Learning</h2>
                    <div>
                      <Link href="portfolio-details">
                        <a>
                          {" "}
                          View Projects <BiRightArrowAlt />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* portfolio item */}
            {/* portfolio item */}
            {/* <div className="col-lg-4 col-sm-6">
              <div className="portfolio-items mb-100">
                <Card>
                  <Card.Img src="./portfolio/img.png" />
                </Card>
                <div className="portfolio-info">
                  <span>It Solutions</span>
                  <h2>Machine Learning</h2>
                  <div>
                    <Link href="portfolio-details">
                      <a>
                        {" "}
                        View Projects <BiRightArrowAlt />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* portfolio item */}
            {/* portfolio item */}
            {/* <div className="col-lg-4 col-sm-6">
              <div className="portfolio-items mb-100">
                <Card>
                  <Card.Img src="./portfolio/img.png" />
                </Card>
                <div className="portfolio-info">
                  <span>It Solutions</span>
                  <h2>Machine Learning</h2>
                  <div>
                    <Link href="portfolio-details">
                      <a>
                        {" "}
                        View Projects <BiRightArrowAlt />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
            {/* portfolio item */}
            {/* portfolio item */}
            {/* <div className="col-lg-4 col-sm-6">
              <div className="portfolio-items mb-100">
                <Card>
                  <Card.Img src="./portfolio/img.png" />
                </Card>
                <div className="portfolio-info">
                  <span>It Solutions</span>
                  <h2>Machine Learning</h2>
                  <div>
                    <Link href="portfolio-details">
                      <a>
                        {" "}
                        View Projects <BiRightArrowAlt />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
            {/* portfolio item */}
            {/* portfolio item */}
            {/* <div className="col-lg-4 col-sm-6">
              <div className="portfolio-items mb-100">
                <Card>
                  <Card.Img src="./portfolio/img.png" />
                </Card>
                <div className="portfolio-info">
                  <span>It Solutions</span>
                  <h2>Machine Learning</h2>
                  <div>
                    <Link href="portfolio-details">
                      <a>
                        {" "}
                        View Projects <BiRightArrowAlt />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
            {/* portfolio item */}
            {/* portfolio item */}
            {/* <div className="col-lg-4 col-sm-6">
              <div className="portfolio-items mb-100">
                <Card>
                  <Card.Img src="./portfolio/img.png" />
                </Card>
                <div className="portfolio-info">
                  <span>It Solutions</span>
                  <h2>Machine Learning</h2>
                  <div>
                    <Link href="portfolio-details">
                      <a>
                        {" "}
                        View Projects <BiRightArrowAlt />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div> 
            {/* portfolio item */}
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
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export async function getStaticProps() {
  const res = await fetch(
    "http://admin.opediatech.com/public/api/portfolio/category/13"
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
