import { Card } from "react-bootstrap";
import InnerHead from "../../components/innerHead";
import Link from "next/link";

import { BiRightArrowAlt } from "react-icons/bi";
import { SiSimpleanalytics } from "react-icons/si";
import { FaCloud, FaDatabase } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import WhatsappChat from "../../components/whatsappChat";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import {ClientURL} from '../../config/index'

function ServiceItem({ item }) {
  const slug = item.service_title
    .toLowerCase()
    .split(" ")
    .join("")
    .replace(/\s/g, "-");
  //   const slug = "item";
  return (
    <Card>
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
            <Link href={`${ClientURL}/${item.service_slug}`}>
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
