import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import axios from "axios";
import { ApolloClient, InMemoryCache } from "@apollo/client";
const API_KEY = "2dca8552-29f1-4f30-95ab-4cff4be9b3e9";
const HASHNODE_API_URL = "https://api.hashnode.com/";

function Blogs() {
  const [posts, setPosts] = useState([]);
  // console.log("Publications >",publications);
  
  useEffect(() => {
    

  }, [])
  
  

  return (
    <div id="blogs" className="">
      {posts && (
        <div className="flex flex-col items-center md:items-start">
          <div className="md:mt-10 mt-3 flex flex-col items-center md:ml-10 md:mr-10">
            {/* <div className="md:grid md:grid-cols-2 md:gap-2 flex flex-col pt-10">
              {posts.map((post) => {
                return (
                  <Link href={post.url} key={post.title}>
                    <motion.div
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
                      <div className="">
                        <div className="p-5 mt-10 ml-10 mr-10 md:w-auto min-w-min rounded-xl flex items-center flex-col md:h-72 h-80 text-white dark:shadow-[#00acee3d]  shadow-project dark:bg-transparent shadow-lg shadow-[#0000003d] bg-blogbg">
                          <div className="md:flex justify-start md:space-x-20">
                            <h2 className="md:text-xl text-base font-bold md:w-auto hover:cursor-pointer font-overpass dark:text-twitter text-white">
                              {post.title}{" "}
                            </h2>
                            <p className="md:text-xl w-40 text-base font-bold text-white">
                              {post.readable_publish_date}
                            </p>
                          </div>
                          <p className="md:mt-10 mt-5 justify-start flex md:text-base text-sm text-white">
                            {post.description}
                          </p>
                          <div className="flex mt-8 md:space-x-10 space-x-8 text-white">
                            <p className="md:text-base text-sm text-center font-overpass">
                              Reaction:{" "}
                              <span className="dark:text-twitter font-overpass font-bold">
                                {post.public_reactions_count}
                              </span>
                            </p>
                            <p className="md:text-base text-sm text-center font-overpass">
                              Comments:{" "}
                              <span className="dark:text-twitter font-overpass font-bold">
                                {post.comments_count}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

// export async function getServerSideProps() {
//   const res = await axios.get(`https://dev.to/api/articles?username=neerajram30`);
//   console.log("RES ",res);
//   const json = await res.json();
//   return { props: { publications: json } };
// }



export default Blogs;


