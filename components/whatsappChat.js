import React from 'react'

import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import dynamic from 'next/dynamic'

import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});


function WhatsappChat() {
  return (<>
    <WhatsAppWidget phoneNumber='+8801625556584' textReplyTime='Typically replies within a day' message= 'Hello! 👋🏼 Wanna contact wiht us?' companyName="Opedia Technologies Limited " />
    <div className="cursor">

      <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='251, 129, 0'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
 </div>
    <a href="#">
        <p className="Top">
          <HiOutlineArrowNarrowUp/>
        </p>
      </a>
    </>
  )
}

export default WhatsappChat