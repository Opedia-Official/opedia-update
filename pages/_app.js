import 'bootstrap/dist/css/bootstrap.min.css';


import '../styles/globals.css'
import '../styles/default.css'

import '../styles/responsive.css'
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import Loader from '../components/home/Loader';


function MyApp({ Component, pageProps }) {
  const [loading,setLoading]= useState(true);
  useEffect(()=>{
    window.addEventListener('load', ()=>{
      setLoading(false)
    });
  })
  
  return  (
    <>
    {
      loading ? <Loader/> :  <Layout>
      <Component {...pageProps} />
     </Layout>
    }
     
    </>
  )
  

}

export default MyApp
