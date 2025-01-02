"use client"
import blog_data from "@/data/BlogData"
import Image from "next/image"
import Link from "next/link"
import BlogSidebar from "../blog-common/BlogSidebar"
import { useState } from "react"

const BlogArea = () => {

   const [currentPage, setCurrentPage] = useState(1);

   const blogs = blog_data;

   const itemsPerPage = 4;
   const [itemOffset, setItemOffset] = useState(0);
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = blogs.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(blogs.length / itemsPerPage);

   // click to request another page.
   const handlePageClick = (pageNumber: number) => {
      if (pageNumber < 1 || pageNumber > totalPages) {
         return; // Avoid going to negative pages or beyond the total number of pages
      }

      const newOffset = (pageNumber - 1) * itemsPerPage; // Calculate the new offset
      setItemOffset(newOffset);
      setCurrentPage(pageNumber); // Update the currentPage state
   };

   // Calculate total number of pages
   const totalPages = Math.ceil(blogs.length / itemsPerPage);

   // Generate an array of page numbers
   const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

   // Render pagination links
   const renderPaginationLinks = () => {
      return pageNumbers.map((pageNumber) => (
         <li key={pageNumber} className={pageNumber === currentPage ? 'active' : ''}>
            <a style={{ cursor: "pointer" }} onClick={() => handlePageClick(pageNumber)}>
               {pageNumber}
            </a>
         </li>
      ));
   };

   return (
      <section className="blog-area pt-140 pb-140">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
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
                                    <li><i className="far fa-comment"></i>{item.comment}</li>
                                    <li><i className="far fa-eye"></i>{item.views}</li>
                                 </ul>
                              </div>
                              <h2 className="title">{item.title}</h2>
                              <p>{item.desc}</p>
                              <div className="content-bottom">
                                 <div className="blog-author">
                                    <Image src={item.author_avatar} alt="" />{item.author_name}
                                 </div>
                                 <div className="read-more-btn">
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}

                     {currentItems.filter(item => item.post === "standard").map((item) => (
                        <div key={item.id} className="blog-standard-post">
                           <div className="blog-standard-thumb">
                              <Image src={item.thumb} alt="" />
                           </div>
                           <div className="blog-standard-content">
                              <div className="blog-meta">
                                 <ul className="list-wrap">
                                    <li className="blog-author"><Image src={item.author_avatar} alt="" />{item.author_name}</li>
                                    <li><i className="far fa-clock"></i>{item.date}</li>
                                    <li><i className="far fa-comment"></i>{item.comment}</li>
                                    <li><i className="far fa-eye"></i>{item.views}</li>
                                 </ul>
                              </div>
                              <h2 className="title">{item.title}</h2>
                              <p>{item.desc}</p>
                              <div className="read-more-btn">
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>

                  <nav className="pagination-wrap">
                     <ul className="list-wrap">
                        <li>
                           <a
                              onClick={() => handlePageClick(currentPage - 1)}
                              style={{ cursor: 'pointer' }}
                              className={currentPage === 1 ? 'disabled' : ''}><i className="fas fa-arrow-left"></i>
                           </a>
                        </li>
                        {renderPaginationLinks()}
                        <li>
                           <a
                              onClick={() => handlePageClick(currentPage + 1)}
                              style={{ cursor: 'pointer' }}
                              className={currentPage === totalPages ? 'disabled' : ''}
                           ><i className="fas fa-arrow-right"></i>
                           </a>
                        </li>
                     </ul>
                  </nav>
               </div>
               <BlogSidebar />
            </div>
         </div>
      </section >
   )
}

export default BlogArea
