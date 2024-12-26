"use client"
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from "react";
import blog_data from "@/data/BlogData";

import blogThumb_1 from "@/assets/img/blog/blog_details.jpg";

const BlogDetailsArea = () => {
   const router = useRouter();
   const params = useParams();
   const id = Array.isArray(params.id) ? params.id[0] : params.id;
   const single_blog = blog_data.find(blog => blog.id === parseInt(id || '0', 10));

   useEffect(() => {
      if (!single_blog) {
         router.push('/404'); // Redirect to 404 if blog not found
      }
   }, [single_blog, router]);

   if (!single_blog) {
      return null; // Prevent further rendering if blog not found
   }

   return (
      <section className="blog-details-area pt-140 pb-140">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div className="blog-details-wrap">
                     <div className="blog-details-thumb">
                        {single_blog.thumb ? (
                           <Image src={single_blog.thumb} alt={single_blog.title || 'Blog Image'} />
                        ) : (
                           <Image src={blogThumb_1} alt="Default Blog Image" />
                        )}
                     </div>
                     <div className="blog-details-content">
                        <div className="blog-meta">
                           <ul className="list-wrap">
                              <li className="blog-author">
                                 <i className="far fa-user"></i> {single_blog.company|| 'Anonymous'}
                              </li>
                              <li><i className="far fa-clock"></i>{single_blog.date || "Not specified"}</li>
                              <li><i className="far fa-folder"></i>{single_blog.type || "Uncategorized"}</li>
                           </ul>
                        </div>

                        <h2 className="title">{single_blog.title || "Not Found"}</h2>
                        
                        {/* Investment Details */}
                        <div className="investment-details my-4">
                           <div className="row">
                              <div className="col-md-6">
                                 <div className="detail-item">
                                    <h4>Investment Value:</h4>
                                    <p>{single_blog.investmentValue || "Not specified"} $ </p>
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="detail-item">
                                    <h4>Duration:</h4>
                                    <p>{single_blog.duration || "Not specified"} Months </p>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* Blog Description */}
                        <div className="blog-description">
                           <p>{single_blog.desc}</p>
                        </div>

                        <div className="blog-details-bottom">
                           <div className="row align-items-center">
                              <div className="col-md-7">
                                 <div className="post-tags">
                                    <ul className="list-wrap">
                                       <li><Link href="#">ICO</Link></li>
                                       <li><Link href="#">blockchain</Link></li>
                                       <li><Link href="#">currency</Link></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </section>
   )
}

export default BlogDetailsArea
