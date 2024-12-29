import Image from "next/image";
import Link from "next/link";

import logo_1 from "@/assets/img/logo/logo.png";

const HeaderOffcanvas = ({ offCanvas, setOffCanvas }: any) => {
   return (
      <>
         <div className={`${offCanvas ? "offcanvas-menu-visible" : ""}`}>
            <div className={`extra-info ${offCanvas ? "active" : ""}`}>
               <div className="close-icon menu-close">
                  <button onClick={() => setOffCanvas(false)}>
                     <i className="far fa-window-close"></i>
                  </button>
               </div>
               <div className="logo-side mb-30">
                  <Link href="/">
                     <Image src={logo_1} alt="Logo" />
                  </Link>
               </div>
               <div className="side-info mb-30">
                  {/* UAE Section */}
                  <div className="contact-list mb-30">
                     <h4>
                        <img 
                           src="https://flagcdn.com/w40/ae.png" 
                           alt="UAE Flag" 
                           style={{ marginRight: "10px" }} 
                        />
                        UAE
                     </h4>
                     <p>Abu Dhabi / Al Reem Island / Addax Tower</p>
                     <p>Phone: 00971585672519</p>
                  </div>

                  {/* UK Section */}
                  <div className="contact-list mb-30">
                     <h4>
                        <img 
                           src="https://flagcdn.com/w40/gb.png" 
                           alt="UK Flag" 
                           style={{ marginRight: "10px" }} 
                        />
                        United Kingdom
                     </h4>
                     <p>128 City Road, London, EC1V 2NX</p>
                     <p>167-169 Great Portland Street, 5th Floor, London, W1W 5PF</p>
                     <p>Phone: 00447441358588</p>
                  </div>

                  {/* USA Section */}
                  <div className="contact-list mb-30">
                     <h4>
                        <img 
                           src="https://flagcdn.com/w40/us.png" 
                           alt="USA Flag" 
                           style={{ marginRight: "10px" }} 
                        />
                        United States
                     </h4>
                     <p>418 Broadway, Ste R, Albany, NY 12207</p>
                     <p>30 N Gould St Ste R, Sheridan, WY 82801</p>
                     <p>Phone: 0012342795751</p>
                  </div>

                  {/* Email and Website */}
                  <div className="contact-list mb-30">
                     <h4>Contact Information</h4>
                     <p>Email: info@capimaxinvestment.com</p>
                  </div>
               </div>
               <div className="social-icon-right mt-30">
                  <Link href="#">
                     <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href="#">
                     <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="#">
                     <i className="fab fa-google-plus-g"></i>
                  </Link>
                  <Link href="#">
                     <i className="fab fa-instagram"></i>
                  </Link>
               </div>
            </div>
            <div
               onClick={() => setOffCanvas(false)}
               className={`offcanvas-overly ${offCanvas ? "active" : ""}`}
            ></div>
         </div>
      </>
   );
};

export default HeaderOffcanvas;