import React,{useEffect} from 'react'
import Link from 'next/link';
import Fade from 'react-reveal';

function Blogs({data,theme}) {
  useEffect(() => {
    data.sort((a,b) =>  new Date(b.date) - new Date(a.date));  
  }, [])
  
  return (
    <div id='blogs' className='pt-20 md:mt-56 mt-20'>
     
     {data &&
     <div className='flex flex-col items-center md:items-start'>
       <h2 className='md:text-4xl text-3xl md:ml-24 font-bold'>Articles</h2>
       <div className='md:mt-10 mt-3 flex flex-col items-center md:ml-10 md:mr-10'>
         <div className='md:grid md:grid-cols-2 md:gap-2 flex flex-col'>
         {data.map((posts)=>{
          
           return (
             <Fade bottom>

             <Link
             href={posts.url}
             passHref
             
             >
              <a target="_blank" className='md:hover:text-hover'>
               <div className={theme==="dark"?'p-5 mt-10 ml-10 mr-10 md:w-auto min-w-min rounded-xl flex items-center flex-col md:h-72 h-80 bg-blogdark text-white shadow-lg' : 'p-5 mt-10 ml-10 mr-10 md:w-auto min-w-min rounded-xl flex items-center flex-col md:h-72 h-80 bg-blogbg text-white shadow-lg'}>
                 <div className='md:flex justify-start md:space-x-20'>

           <h2 className='md:text-xl text-base font-bold md:w-auto md:hover:text-bloghover'>{posts.title} </h2>
           <p className='md:text-xl w-40 text-base font-bold'>{posts.readable_publish_date}</p>
                 </div>
                 <p className='md:mt-10 mt-5 justify-start flex md:text-base text-sm'>{posts.description}</p>
                 <div className='flex mt-8 md:space-x-10 space-x-8' >
                    <p className='md:text-base text-sm text-center'>Reaction: {posts.public_reactions_count}</p>
                    <p className='md:text-base text-sm text-center'>Comments: {posts.comments_count}</p>
                 </div>
                 </div>
               
           
              </a>
     </Link>     
               </Fade>
     
     )
           
          })}
          </div>
       </div>
     </div>
     } 
    </div>
    
  )
}

export default Blogs