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
        <Card.Title>Cloud Computing</Card.Title>
        <Card.Text>
          Construction is a general term the art and science to form
          <div>
            <Link href={`service/${slug}`}>
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
