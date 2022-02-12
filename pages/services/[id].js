import { useRouter } from 'next/router'
import React from 'react'

function SinglePage() {
    const router = useRouter()
    const { id } = router.query

  return (
    <div>
        <p>{id}</p>
        </div>
  )
}

export default SinglePage;


export async function getStaticProps(context) {
    console.log(context.params.id)



    const res = await fetch('https://.../posts')
    const posts = await res.json()
  
    return {
      props: {
        posts,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, // In seconds
    }
  }



export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const posts = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { id: post.id },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
  }