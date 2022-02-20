import { Card } from "react-bootstrap";
import { BiRightArrowAlt } from "react-icons/bi";
import InnerHead from "../../components/innerHead";
import Link from "next/link";
import { useEffect } from "react";
import WhatsappChat from "../../components/whatsappChat";
import AnimatedCursor from "react-animated-cursor";
import { server } from "../../config";
import Meta from "../../components/Meta";

export default function Portfolio({categories} ) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }

    new WOW.WOW().init();
  }, []);
  return (
    <>
    <Meta title='Our Portfolio' />
    <WhatsappChat/>
      <InnerHead title="Portfolio" />
      <div className="portfolio-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="section-title text-center mb-50">
                <h5>Best Efforts from us </h5>
                <h3>Our Portfolios</h3>
              </div>
            </div>
          </div>
          <div
            className="row   wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            {
              categories?.map(category=>{
                return (
                  <div key={category.id} className="col-lg-4 col-sm-6">
                  <div className="portfolio-items mb-100">
                    <Card>
                      <Card.Img src={`${server}/${category.img}`} />
                    </Card>
                    <div className="portfolio-info">
                      <span>{category.title}</span>
                      <h2>{category.category_name}</h2>
                      <div>
                        <Link href={`/portfolio/category/${category.category_slug}`}>
                          <a>
                            View Projects <BiRightArrowAlt />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                )
              })
            }
        
          </div>
        </div>
      </div>


      <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='251, 129, 0'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />

    </>
  );
}


// }

export async function getStaticProps() {
  
  const res = await fetch( `${server}/api/portfolio/category`);
  const categories = await res.json();

  
  return {
    props:{
      categories
    },
    revalidate: 10,
  }
}


