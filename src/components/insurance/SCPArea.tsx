"use client"
import scp_data from "@/data/SCPData"
import Image from "next/image"
import { useState } from "react"
import RoadMapArea from "@/components/home/RoadMapArea"
import DownloadArea from "@/components/home/DownloadArea"

const SCPArea = () => {

   const blogs = scp_data;

   const itemsPerPage = 4;
   const [itemOffset, setItemOffset] = useState(0);
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = blogs.slice(itemOffset, endOffset);


   return (
      <section className="blog-area pt-140 pb-140">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="blog-post-wrap">
                     {currentItems.filter(item => item.post === "masonry").map((item) => (
                        <div key={item.id} className="blog-masonry-post">
                           <div className="blog-masonry-thumb">
                              <Image src={item.thumb} alt="" />
                           </div>
                           <div className="blog-masonry-content">
                              <div className="blog-meta">
                                 <ul className="list-wrap">
                                    <li><i className="far fa-clock"></i>{item.date}</li>
                                 </ul>
                              </div>
                              <h2 className="title">{item.title}</h2>
                              <p>{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               
            </div>
         </div>
         <RoadMapArea/>
         <DownloadArea/>
      </section >
   )
}

export default SCPArea
