import axios from 'axios'
import Head from 'next/head'
import { useState } from 'react';



import Post from '../components/post'

export async function getStaticProps() {
  // fetch list of posts
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts?_page=1'
  )  
  const postList = response.data;

    
  return {
    props: {
      postList,
      

    },
  }
}

export default function IndexPage({ postList }) {
  const [pNoFilme,setPNoFilme] = useState([]);
  return (
    <main>
      <Head>
        <title>Home page </title>
      </Head>

      <h1>List of posts</h1>

      <section>
      {postList.map(post=>
      <Post title={post.title}
          body={post.body}
          id={post.id}
          key={post.id}
      />)
      }
      
      
      </section>
    </main>
  )
}
