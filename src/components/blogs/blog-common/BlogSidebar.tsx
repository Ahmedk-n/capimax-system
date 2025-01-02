"use client";
import Link from "next/link";
import BlogCategory from "./BlogCategory";

const BlogSidebar = () => (
   <div className="col-lg-4">
      <aside className="blog-sidebar">
         <div className="blog-widget shine-effect">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
               <h4 className="widget-title gradient-text">Insured Investment</h4>
            </div>
            <div className="sidebar-follow-wrap">
               <p className="gradient-text-light">
                  We collaborate with renowned international insurance companies, including HCC International Insurance, one of the world’s leading insurance providers with branches around the globe, including the United Kingdom. 
                  So, everything from collecting to investing process is under the right hand. You can verify this information on their official website:
               </p>
               <Link href="https://hccinsurance.co.uk/list-of-approved-companies/" 
                     target="_blank"
                     className="gradient-link">
                  <i>HCC International Insurance</i>
               </Link>
            </div>
         </div>
         <BlogCategory />
         <style jsx>{`
            .shine-effect {
               background: linear-gradient(135deg, rgba(68, 160, 141, 0.1) 0%, rgba(9, 54, 55, 0.2) 100%);
               backdrop-filter: blur(10px);
               border: 1px solid rgba(255, 255, 255, 0.1);
               box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
               transition: all 0.4s ease-in-out;
               position: relative;
               overflow: hidden;
               padding: 25px;
            }

            .shine-effect::before {
               content: '';
               position: absolute;
               top: 0;
               left: -100%;
               width: 100%;
               height: 100%;
               background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
               transition: 0.5s;
            }

            .shine-effect:hover::before {
               left: 100%;
            }

            .shine-effect:hover {
               transform: translateY(-5px);
               box-shadow: 0 15px 45px rgba(9, 54, 55, 0.2);
               background: linear-gradient(135deg, rgba(68, 160, 141, 0.2) 0%, rgba(9, 54, 55, 0.3) 100%);
            }

            .gradient-text {
               background: linear-gradient(90deg, #44A08D, #093637);
               -webkit-background-clip: text;
               -webkit-text-fill-color: transparent;
               font-size: 1.5rem;
               margin-bottom: 20px;
            }

            .gradient-text-light {
               background: linear-gradient(90deg, #CBD0D4, #93B2C8);
               -webkit-background-clip: text;
               -webkit-text-fill-color: transparent;
            }

            .gradient-link {
               color: #44A08D;
               transition: all 0.3s ease;
               position: relative;
               display: inline-block;
            }

            .gradient-link::after {
               content: '';
               position: absolute;
               width: 100%;
               height: 2px;
               bottom: -2px;
               left: 0;
               background: linear-gradient(90deg, #44A08D, #093637);
               transform: scaleX(0);
               transform-origin: right;
               transition: transform 0.3s ease;
            }

            .gradient-link:hover::after {
               transform: scaleX(1);
               transform-origin: left;
            }
         `}</style>
      </aside>
   </div>
);

export default BlogSidebar;