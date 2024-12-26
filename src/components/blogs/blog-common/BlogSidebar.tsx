"use client"
import Link from "next/link"
const BlogSidebar = () => {
   return (
      <div className="col-lg-4">
         <aside className="blog-sidebar">
            <div className="blog-widget">
               <h4 className="widget-title">Follow Us</h4>
               <div className="sidebar-follow-wrap">
                  <ul className="list-wrap">
                     <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                     <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                     <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                     <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                  </ul>
                  <Link href="/contact" className="btn">Get In Touch</Link>
               </div>
            </div>
         </aside>
      </div>
   )
}

export default BlogSidebar
