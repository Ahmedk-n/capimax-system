"use client"
import downloadImg_2 from "@/assets/img/images/download_img02.png"
import downloadShape_1 from "@/assets/img/images/download_shape01.png"
import downloadShape_2 from "@/assets/img/images/download_shape02.png"
import Image from 'next/image'
import Link from "next/link"
import styles from './CMCArea.module.css' // Import the CSS module

const CMCArea = () => {
   return (
      <section className="download-area pt-130 pb-130">
         <div className="container">
            <div className="download-inner-wrap">
               <div className="row align-items-end">
                  <div className="col-lg-6">
                     <div className="download-content">
                        <div className="section-title mb-40">
                           <h2 className="title">The Currency Is Being Prepared ... </h2>
                        </div>
                        <div className="download-list">
                           <ul className="list-wrap">
                              <li><span>1</span>Offering</li>
                              <li><span>2</span>Subscription</li>
                           </ul>
                        </div>
                        <div className="download-btn-wrap">
                           <Link href="/cm-coin" className={`btn ${styles.darkButton}`}>Subscribe Launch</Link>
                           <Link href="/cm-coin" className={`btn ${styles.darkButton}`}>Buy or Sell</Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="download-img">
                        <Image src={downloadImg_2} alt="" />
                     </div>
                  </div>
               </div>
               <div className="download-shape-wrap">
                  <Image src={downloadShape_1} alt="" />
                  <Image src={downloadShape_2} alt="" />
               </div>
            </div>
         </div>
      </section>
   )
}

export default CMCArea
