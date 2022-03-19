import React from 'react'

function Blogs({post}) {
  return (
    <div>
     <h1>hi</h1>
     {post && console.log(post)} 
    </div>
    
  )
}

export default Blogs