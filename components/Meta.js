import Head from "next/head";
const Meta = ({title,description})=>{
    return (
        <>
            <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
      )
}



Meta.defaultProps ={
    title: "Opedia Technologist",
    description: "We Are One of the best It solution company"
}

export default Meta;