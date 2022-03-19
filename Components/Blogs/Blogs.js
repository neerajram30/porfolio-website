import React,{useEffect} from 'react'

function Blogs({data}) {
  useEffect(() => {
    data.sort((a,b) =>  new Date(b.date) - new Date(a.date));  
  }, [])
  
  return (
    <div>
     {data &&
     <div className='mt-20'>
       <h2 className='md:text-4xl text-3xl ml-10 font-bold'>Articles</h2>
       <div className='border-solid border-2 border-sky-500 ml-20 mr-20 mt-10 bg-slate-500'>
         {data.map(posts=>{
           <p>{posts.published_timestamp}</p>
         })}
       </div>
     </div>
     } 
    </div>
    
  )
}

export default Blogs