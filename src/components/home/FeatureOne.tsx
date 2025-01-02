"use client"; // Add this line at the top of your file

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import featureImg_1 from "@/assets/img/images/features_img03.png"; // Example image
import featureImg_2 from "@/assets/img/images/features_img02.png";
import featureImg_3 from "@/assets/img/images/features_img04.png";
import featureImg_4 from "@/assets/img/images/features_img01.png";
import featureImg_5 from "@/assets/img/images/features_img05.png"; // Example image
import featureImg_6 from "@/assets/img/images/features_img06.png";
import featureImg_7 from "@/assets/img/images/features_img07.png";
import featureImg_8 from "@/assets/img/images/features_img08.png";
import featureImg_9 from "@/assets/img/images/features_img09.png"; // Example image
import featureImg_10 from "@/assets/img/images/features_img10.png";
import featureImg_11 from "@/assets/img/images/features_img11.png";
import featureImg_12 from "@/assets/img/images/features_img12.png";


interface DataType {
   id: number;
   title: JSX.Element;
   desc: JSX.Element;
   img: StaticImageData;
}

const feature_data: DataType[] = [
   {
      id: 1,
      title: (<>Commercial Investment</>),
      desc: (<>Explore opportunities in commercial investments with global returns.</>),
      img: featureImg_1,
   },
   {
      id: 2,
      title: (<>Silver Investment</>),
      desc: (<>Invest in silver, a commodity with significant potential for growth.</>),
      img: featureImg_2,
   },
   {
      id: 3,
      title: (<>Gold Investment</>),
      desc: (<>Secure your wealth by investing in gold, a timeless asset.</>),
      img: featureImg_3,
   },
   {
      id: 4,
      title: (<>Real Estate Investment</>),
      desc: (<>Unlock the benefits of real estate investments in prime locations.</>),
      img: featureImg_4,
   },
   {
      id: 5,
      title: (<>Acquisitions</>),
      desc: (<>Engage in strategic acquisitions for market expansion and growth.</>),
      img: featureImg_5,
   },
   {
      id: 6,
      title: (<>Deals</>),
      desc: (<>Participate in lucrative deals across industries and sectors.</>),
      img: featureImg_6,
   },
   {
      id: 7,
      title: (<>Stock, Bonds, and Treasury Bills Investment</>),
      desc: (<>Diversify your portfolio with investments in stocks, and bonds..</>),
      img: featureImg_7,
   },
   {
      id: 8,
      title: (<>Metal Investment</>),
      desc: (<>Invest in valuable metals like platinum, copper, and more.</>),
      img: featureImg_8,
   },
   {
      id: 9,
      title: (<>Agricultural Investment</>),
      desc: (<>Explore the growing potential of agricultural investments.</>),
      img: featureImg_9,
   },
   {
      id: 10,
      title: (<>Tourism and Entertainment Investment</>),
      desc: (<>Invest in the booming tourism and entertainment sectors.</>),
      img: featureImg_10,
   },
   {
      id: 11,
      title: (<>Joint Investments</>),
      desc: (<>Partner in joint investments for diversified and shared growth.</>),
      img: featureImg_11,
   },
   {
      id: 12,
      title: (<>Technology and Fintech Investment</>),
      desc: (<>Capitalize on the rapidly growing technology and fintech sectors.</>),
      img: featureImg_12,
   },
];

const FeatureOne = () => {
   const [isActive, setIsActive] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const scrollPosition = window.scrollY;
         setIsActive(scrollPosition > 100);
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial position
      
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <section 
         id="investment-plans" 
         className="features-area pt-140 pb-110"
         style={{
            transition: 'all 0.5s ease-out',
            opacity: isActive ? 1 : 0,
            transform: `translateY(${isActive ? '0px' : '20px'})`
         }}
      >
         <div className="container">
            <div className="row justify-content-center"
               style={{
                  transition: 'all 0.5s ease-out 0.2s',
                  opacity: isActive ? 1 : 0,
                  transform: `translateY(${isActive ? '0px' : '20px'})`
               }}
            >
               <div className="col-lg-10">
                  <div className="section-title text-center mb-70">
                     <h2 className="title">Dynamic Investment Hub with Diverse Global Opportunities</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               {feature_data.map((item, index) => (
                  <div 
                     key={item.id} 
                     className="col-lg-6"
                     style={{
                        transition: `all 0.5s ease-out ${0.3 + index * 0.1}s`,
                        opacity: isActive ? 1 : 0,
                        transform: `translateY(${isActive ? '0px' : '30px'})`
                     }}
                  >
                     <Link href="https://www.google.com">
                        <div 
                           className="features-item shine-effect"
                           style={{
                              transition: 'all 0.4s ease-in-out',
                           }}
                        >
                           <div className="features-content">
                              <h2 className="title gradient-text">
                                 {item.title}
                              </h2>
                              <p className="gradient-text-light">{item.desc}</p>
                           </div>
                           <div className="features-img">
                              <Image src={item.img} alt="" className="feature-image" />
                           </div>
                           <style jsx>{`
                              .shine-effect {
                                 background: linear-gradient(135deg, rgba(0, 32, 7, 0.1) 0%, rgba(9, 54, 55, 0.2) 100%);
                                 backdrop-filter: blur(10px);
                                 border: 1px solid rgba(255, 255, 255, 0.1);
                                 box-shadow: 0 8px 32px 0 rgba(3, 65, 0, 0.37);
                                 transition: all 0.4s ease-in-out;
                                 position: relative;
                                 overflow: hidden;
                                 Duration: 0.5s;
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
                                 transform: translateY(-7px) !important;
                              }

                              .gradient-text {
                                 background: linear-gradient(90deg,rgb(255, 255, 255),rgb(9, 55, 11));
                                 -webkit-background-clip: text;
                                 -webkit-text-fill-color: transparent;
                              }

                              .gradient-text-light {
                                 background: linear-gradient(90deg,rgb(203, 212, 206),rgb(158, 200, 147));
                                 -webkit-background-clip: text;
                                 -webkit-text-fill-color: transparent;
                              }

                              .feature-image {
                                 transition: transform 0.3s ease;
                              }

                              .shine-effect:hover .feature-image {
                                 transform: scale(1.05);
                              }
                           `}</style>
                        </div>
                     </Link>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default FeatureOne;