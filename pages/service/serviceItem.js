import { Card } from "react-bootstrap";
import Link from "next/link";

import { BiRightArrowAlt } from "react-icons/bi";
import { FaCloud } from "react-icons/fa";
import Meta from "../../components/Meta";

function ServiceItem({ item }) {
  const slug = item.service_title
    .toLowerCase()
    .split(" ")
    .join("")
    .replace(/\s/g, "-");
  //   const slug = "item";
  return (
    <Card>
      <Meta title={slug} />
      <Card.Body>
        <FaCloud />
        <Card.Title>{item.service_title}</Card.Title>
        <Card.Text>
          <p
            dangerouslySetInnerHTML={{
              __html: `${item.service_desc}`,
            }}
          ></p>

          <div>
            <Link href={`http://localhost:3000/service/${item.service_slug}`}>
              <a>
                Service Details <BiRightArrowAlt />
              </a>
            </Link>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ServiceItem;
