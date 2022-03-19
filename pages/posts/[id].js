import React from 'react'
import Blogs from '../../Components/Blogs/Blogs'

const PostPage =({post})=>{
    <div>
        {post && console.log(post.title)}
    </div>
}

export async function getServerSideProps({ query }) {
    const { id } = query;
    const res = await fetch(`https://dev.to/api/articles/${id}`)
    const json = await res.json()
    return { props: { post: json } }
  }
  
  export default PostPage