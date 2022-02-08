import Head from "next/head";
const Meta = ({title,description})=>{
    return (
        <>
            <Head>
            <meta charset="utf-8" />
            <title>{title}</title>
            <meta name="description" content={description} />
            {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
            <link rel="shortcut icon" type="image/png" sizes="32x32" href="/opedia.ico" />
            </Head>
        </>
      )
}



Meta.defaultProps ={
    title: "Opedia Technologist",
    description: "We Are One of the best It solution company"
}

export default Meta;