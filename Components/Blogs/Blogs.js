import React,{useEffect} from 'react'
import Link from 'next/link';
import Fade from 'react-reveal';
import {motion} from 'framer-motion'
function Blogs(props) {
  useEffect(() => {
    props.data.sort((a,b) =>  new Date(b.date) - new Date(a.date));  
  }, [])
  
  return (
    <div id='blogs' className=''>
     
     {props.data &&
     <div className='flex flex-col items-center md:items-start'>
       <div className='md:mt-10 mt-3 flex flex-col items-center md:ml-10 md:mr-10'>
         <div className='md:grid md:grid-cols-2 md:gap-2 flex flex-col pt-10'>
         {props.data.map((posts)=>{
          
           return (

             <Link
             href={posts.url}
             passHref
             key={posts}
             >
              <motion.a target="_blank" className=''
              transition={{
                duration: 0.3,
              delay: 0,
              type: "tween",
              }}
              initial={{
              y: "30px",
              opacity: 0,
              }}
              animate={{
              y: 0,
              opacity: 1,
              }}
              >
               <div className={props.theme==="dark"?'p-5 mt-10 ml-10 mr-10 md:w-auto min-w-min rounded-xl flex items-center flex-col md:h-72 h-80 text-white shadow-[#eeeeee3d]  shadow-project' : 'p-5 mt-10 ml-10 mr-10 md:w-auto min-w-min rounded-xl flex items-center flex-col md:h-72 h-80 shadow-lg shadow-[#0000003d]  shadow-project bg-blogbg'}>
                 <div className='md:flex justify-start md:space-x-20'>

           <h2 className='md:text-xl text-base font-bold md:w-auto text-white'>{posts.title} </h2>
           <p className='md:text-xl w-40 text-base font-bold text-white'>{posts.readable_publish_date}</p>
                 </div>
                 <p className='md:mt-10 mt-5 justify-start flex md:text-base text-sm text-white'>{posts.description}</p>
                 <div className='flex mt-8 md:space-x-10 space-x-8 text-white' >
                    <p className='md:text-base text-sm text-center'>Reaction: {posts.public_reactions_count}</p>
                    <p className='md:text-base text-sm text-center'>Comments: {posts.comments_count}</p>
                 </div>
                 </div>
               
           
              </motion.a>
     </Link>     
              
     
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